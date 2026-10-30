<script lang="ts">
	import { onMount } from 'svelte';

	type Variant = 'governance' | 'workshop' | 'literacy' | 'resources' | 'about' | 'contact';
	type Trace = { d: string; split?: string; splitAt?: number };
	let { variant }: { variant: Variant } = $props();

	const layouts: Record<Variant, Trace[]> = {
		governance: [
			{ d: 'M1440 78h-116v62h-102v46h-126', split: 'M1324 140v48h-62v36', splitAt: 0.42 },
			{ d: 'M0 490h122v-58h102v-72h118', split: 'M224 432v-46h72', splitAt: 0.5 },
			{ d: 'M640 0v68h92v54h102' },
			{ d: 'M1260 560v-64h-96v-48h-112' }
		],
		workshop: [
			{ d: 'M0 94h108v68h94v-44h106', split: 'M202 162v54h74', splitAt: 0.4 },
			{ d: 'M1440 472h-128v-72h-96v-54h-118', split: 'M1312 400h-66v-48', splitAt: 0.48 },
			{ d: 'M390 0v72h98v50h88' },
			{ d: 'M1080 0v58h-92v68h-82' }
		],
		literacy: [
			{ d: 'M250 0v76h94v58h106v46h92', split: 'M344 76h-64v48h-70', splitAt: 0.42 },
			{ d: 'M1440 168h-106v62h-98v52h-106' },
			{ d: 'M0 430h116v-66h104v-48h116', split: 'M220 364v-44h78', splitAt: 0.44 },
			{ d: 'M1040 560v-74h-92v-58h-98' }
		],
		resources: [
			{ d: 'M0 154h124v56h102v54h106', split: 'M226 210v-76h72', splitAt: 0.4 },
			{ d: 'M1440 418h-116v-66h-94v-58h-116' },
			{ d: 'M520 0v74h98v48h100' },
			{ d: 'M900 560v-70h-104v-52h-96' }
		],
		about: [
			{ d: 'M0 382h116v-64h106v-54h110', split: 'M222 318v-46h80', splitAt: 0.4 },
			{ d: 'M1440 128h-118v62h-94v58h-112' },
			{ d: 'M760 0v82h-96v58h-106' },
			{ d: 'M1120 560v-72h-96v-54h-104' }
		],
		contact: [
			{ d: 'M0 94h112v72h102v56h116', split: 'M214 166v48h72', splitAt: 0.44 },
			{ d: 'M1440 496h-132v-76h-94v-62h-122', split: 'M1308 420h-70v-50', splitAt: 0.43 },
			{ d: 'M460 0v64h96v58h102' },
			{ d: 'M980 560v-70h-88v-62h-112' }
		]
	};

	const traces = $derived(layouts[variant]);

	const scaleTrace = (d: string, width: number, height: number) =>
		d.replace(/M(-?\d+(?:\.\d+)?)\s+(-?\d+(?:\.\d+)?)/, (_, x, y) =>
			`M${(Number(x) * width) / 1440} ${(Number(y) * height) / 560}`
		)
			.replace(/h(-?\d+(?:\.\d+)?)/g, (_, x) => `h${(Number(x) * width) / 1440}`)
			.replace(/v(-?\d+(?:\.\d+)?)/g, (_, y) => `v${(Number(y) * height) / 560}`);

	onMount(() => {
		const field = document.querySelector<SVGSVGElement>('[data-circuit-backdrop]');
		if (!field) return;
		const hero = field.closest<HTMLElement>('[data-circuit-hero]');
		const paths = Array.from(field.querySelectorAll<SVGPathElement>('.scroll-path'));
		const splits = Array.from(field.querySelectorAll<SVGPathElement>('.scroll-split'));
		const endpoints = paths.map((path) => field.querySelector<SVGCircleElement>(`#${path.dataset.endpoint}`));
		const packets = paths.map((path) => field.querySelector<SVGCircleElement>(`#${path.dataset.packet}`));
		const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		const packetDurations = [8500, 9700, 10900, 9200];
		let frame = 0;
		const updateResponsiveGeometry = () => {
			const width = Math.max(field.clientWidth, 1);
			const height = Math.max(field.clientHeight, 1);
			field.setAttribute('viewBox', `0 0 ${width} ${height}`);
			paths.forEach((path, index) => {
				const trace = traces[index];
				if (trace) path.setAttribute('d', scaleTrace(trace.d, width, height));
			});
			splits.forEach((split) => {
				const trace = traces[Number(split.dataset.traceIndex)];
				if (trace?.split) split.setAttribute('d', scaleTrace(trace.split, width, height));
			});
		};
		updateResponsiveGeometry();

		const draw = (time = 0) => {
			frame = 0;
			const scrollProgress = Math.max(0, Math.min(1, (window.scrollY / Math.max(hero?.offsetHeight ?? 1, 1)) * 1.2));
			const progress = prefersReducedMotion ? 1 : 0.2 + scrollProgress * 0.8;

			paths.forEach((path, index) => {
				const length = path.getTotalLength();
				const visibleLength = length * progress;
				path.style.strokeDasharray = `${visibleLength} ${length}`;
				const point = path.getPointAtLength(visibleLength);
				const endpoint = endpoints[index];
				if (endpoint) {
					endpoint.setAttribute('cx', String(point.x));
					endpoint.setAttribute('cy', String(point.y));
					endpoint.style.opacity = String(progress);
				}

				const packet = packets[index];
				if (packet && !prefersReducedMotion && visibleLength > 0) {
					const phase = (time % packetDurations[index]) / packetDurations[index];
					const pointOnPath = path.getPointAtLength(visibleLength * phase);
					packet.setAttribute('cx', String(pointOnPath.x));
					packet.setAttribute('cy', String(pointOnPath.y));
					packet.style.opacity = String(progress);
				} else if (packet) {
					packet.style.opacity = '0';
				}
			});

			splits.forEach((split) => {
				const revealAt = Number(split.dataset.revealAt ?? 0.4);
				const splitProgress = Math.max(0, Math.min(1, (progress - revealAt) / (1 - revealAt)));
				const length = split.getTotalLength();
				split.style.strokeDasharray = `${length * splitProgress} ${length}`;
			});

			if (!prefersReducedMotion) frame = window.requestAnimationFrame(draw);
		};

		draw();
		const redraw = () => {
			if (!prefersReducedMotion && !frame) frame = window.requestAnimationFrame(draw);
		};
		const redrawOnResize = () => {
			updateResponsiveGeometry();
			if (frame) window.cancelAnimationFrame(frame);
			frame = window.requestAnimationFrame(draw);
		};
		const resizeObserver = new ResizeObserver(redrawOnResize);
		resizeObserver.observe(hero ?? field);
		window.addEventListener('scroll', redraw, { passive: true });
		window.addEventListener('resize', redrawOnResize);
		return () => {
			window.removeEventListener('scroll', redraw);
			window.removeEventListener('resize', redrawOnResize);
			resizeObserver.disconnect();
			if (frame) window.cancelAnimationFrame(frame);
		};
	});
</script>

<svg class="circuit-backdrop" viewBox="0 0 1440 560" preserveAspectRatio="none" aria-hidden="true" data-circuit-backdrop>
	<g class="traces">
		{#each traces as trace, index (index)}
			<path class="scroll-path" data-endpoint={`circuit-end-${index}`} data-packet={`circuit-packet-${index}`} d={trace.d} />
		{/each}
	</g>
	<g class="splits">
		{#each traces as trace, index (index)}
			{#if trace.split}<path class="scroll-split" data-trace-index={index} data-reveal-at={trace.splitAt} d={trace.split} />{/if}
		{/each}
	</g>
	<g class="endpoints">
		{#each traces as _, index (index)}<circle id={`circuit-end-${index}`} r="4" />{/each}
	</g>
	<g class="packets">
		{#each traces as _, index (index)}<circle id={`circuit-packet-${index}`} r="3" />{/each}
	</g>
</svg>

<style>
	.circuit-backdrop { position: absolute; inset: 0; z-index: 0; width: 100%; height: 100%; pointer-events: none; }
	.traces, .splits { fill: none; stroke: var(--color-secondary); stroke-width: 1.8; stroke-linecap: round; stroke-linejoin: round; vector-effect: non-scaling-stroke; opacity: 0.78; }
	.splits { stroke-linejoin: miter; stroke-miterlimit: 2; }
	.scroll-path, .scroll-split { stroke-dasharray: 0 2000; }
	.endpoints, .packets { fill: var(--color-accent); filter: drop-shadow(0 0 6px var(--color-accent)); }
	.endpoints circle, .packets circle { opacity: 0; }
	@media (prefers-reduced-motion: reduce) { .packets { display: none; } }
</style>
