<script lang="ts">
	import { onMount } from 'svelte';
	import type { Snippet } from 'svelte';

	type Props = {
		href: string;
		packetDuration?: string;
		children: Snippet;
	};

	let { href, packetDuration = '3.8s', children }: Props = $props();
	let cardElement: HTMLAnchorElement;
	let cardWidth = $state(520);
	let viewBox = $state('0 0 520 96');
	let trace = $state('M0 96H424L520 0');

	onMount(() => {
		const updateGeometry = () => {
			const width = cardElement.clientWidth;
			const height = cardElement.clientHeight;
			const rootFontSize = Number.parseFloat(getComputedStyle(document.documentElement).fontSize) || 16;
			const slant = 6 * rootFontSize;
			cardWidth = width;
			viewBox = `0 0 ${width} ${height}`;
			trace = `M0 ${height}H${Math.max(0, width - slant)}L${width} 0`;
		};
		const observer = new ResizeObserver(updateGeometry);
		observer.observe(cardElement);
		updateGeometry();
		return () => observer.disconnect();
	});
</script>

<a class="parallelogram-card" {href} bind:this={cardElement}>
	<svg class="card-circuit" {viewBox} preserveAspectRatio="none" aria-hidden="true">
		<path class="card-trace" pathLength="100" d={trace} />
		<circle class="card-endpoint" cx={cardWidth} cy="0" r="3.5" />
		<circle class="card-packet" r="3">
			<animateMotion dur={packetDuration} repeatCount="indefinite" path={trace} />
		</circle>
	</svg>
	<div class="card-content">
		{@render children()}
	</div>
</a>

<style>
	.parallelogram-card {
		position: relative;
		isolation: isolate;
		display: grid;
		grid-template-columns: 2.25rem minmax(0, 1fr) auto;
		align-items: center;
		gap: 0.875rem;
		block-size: 6rem;
		padding: 0.9rem 3.5rem 1.15rem 4.5rem;
		color: var(--color-text);
		text-decoration: none;
		transition: color 160ms ease;
	}

	.parallelogram-card::before {
		position: absolute;
		inset: 0;
		z-index: 0;
		background-color: #fff;
		clip-path: polygon(6rem 0, 100% 0, calc(100% - 6rem) 100%, 0 100%);
		content: '';
		transition: filter 180ms ease;
	}

	.parallelogram-card:hover::before,
	.parallelogram-card:focus-visible::before {
		filter: drop-shadow(0 8px 14px color-mix(in srgb, var(--color-shadow) 12%, var(--color-transparent)));
	}

	.card-circuit {
		position: absolute;
		inset: 0;
		z-index: 1;
		width: 100%;
		height: 100%;
		overflow: visible;
		pointer-events: none;
	}

	.card-content { position: relative; z-index: 2; display: contents; }

	.card-trace {
		fill: none;
		stroke: var(--color-secondary);
		stroke-width: 1.8;
		stroke-linecap: round;
		stroke-linejoin: miter;
		stroke-miterlimit: 2;
		stroke-dasharray: 100;
		stroke-dashoffset: 100;
		vector-effect: non-scaling-stroke;
		transition: stroke-dashoffset 1.1s cubic-bezier(0.2, 0.75, 0.25, 1);
	}

	.card-endpoint,
	.card-packet {
		fill: var(--color-accent);
		filter: drop-shadow(0 0 5px var(--color-accent));
		opacity: 0;
		transition: opacity 220ms ease;
	}

	.parallelogram-card:hover .card-trace,
	.parallelogram-card:focus-visible .card-trace { stroke-dashoffset: 0; }
	.parallelogram-card:hover .card-endpoint,
	.parallelogram-card:hover .card-packet,
	.parallelogram-card:focus-visible .card-endpoint,
	.parallelogram-card:focus-visible .card-packet { opacity: 1; }
	.parallelogram-card:focus-visible { outline: 3px solid var(--color-focus); outline-offset: 4px; }

	@media (prefers-reduced-motion: reduce) {
		.card-trace { transition: none; }
		.card-packet { display: none; }
	}
</style>
