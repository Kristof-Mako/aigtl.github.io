<script lang="ts">
	import { base, resolve } from '$app/paths';
	import { onMount } from 'svelte';
	import TrustBar from '$lib/components/TrustBar.svelte';
	import ParallelogramCard from '$lib/components/ParallelogramCard.svelte';

	onMount(() => {
		const hero = document.querySelector<HTMLElement>('.hero-surface');
		if (!hero) return;

		const paths = Array.from(hero.querySelectorAll<SVGPathElement>('.hero-scroll-path'));
		const splits = Array.from(hero.querySelectorAll<SVGPathElement>('.hero-scroll-split'));
		const endpoints = paths.map((path) => hero.querySelector<SVGCircleElement>(`#${path.dataset.endpoint}`));
		const packets = paths.map((path) => hero.querySelector<SVGCircleElement>(`#${path.dataset.packet}`));
		const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		const packetDurations = [8500, 9700, 10900, 9200, 10300];
		let frame = 0;
		const drawCircuits = (time = 0) => {
			frame = 0;
			const scrollProgress = Math.max(
				0,
				Math.min(1, (window.scrollY / Math.max(hero.offsetHeight, 1)) * 1.2)
			);
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
					const packetPoint = path.getPointAtLength(visibleLength * phase);
					packet.setAttribute('cx', String(packetPoint.x));
					packet.setAttribute('cy', String(packetPoint.y));
					packet.style.opacity = String(progress);
				} else if (packet) {
					packet.style.opacity = '0';
				}
			});

			splits.forEach((split) => {
				const startAt = Number(split.dataset.revealAt ?? 0.25);
				const splitProgress = Math.max(0, Math.min(1, (progress - startAt) / (1 - startAt)));
				const length = split.getTotalLength();
				split.style.strokeDasharray = `${length * splitProgress} ${length}`;
			});
			if (!prefersReducedMotion) frame = window.requestAnimationFrame(drawCircuits);
		};

		drawCircuits();
		const redrawOnScroll = () => {
			if (!prefersReducedMotion && !frame) frame = window.requestAnimationFrame(drawCircuits);
		};
		window.addEventListener('scroll', redrawOnScroll, { passive: true });
		window.addEventListener('resize', redrawOnScroll);

		return () => {
			window.removeEventListener('scroll', redrawOnScroll);
			window.removeEventListener('resize', redrawOnScroll);
			if (frame) window.cancelAnimationFrame(frame);
		};
	});

	onMount(() => {
		const circuit = document.querySelector<HTMLElement>('[data-offer-circuit]');
		if (!circuit) return;

		const updateCurrent = () => {
			const bounds = circuit.getBoundingClientRect();
			const scrollProgress = (window.innerHeight - bounds.top) / (window.innerHeight + bounds.height);
			const progress = Math.max(0, Math.min(1, (scrollProgress - 0.08) * 1.5));
			circuit.style.setProperty('--current-progress', `${progress * 100}%`);
		};

		updateCurrent();
		window.addEventListener('scroll', updateCurrent, { passive: true });
		window.addEventListener('resize', updateCurrent);
		return () => {
			window.removeEventListener('scroll', updateCurrent);
			window.removeEventListener('resize', updateCurrent);
		};
	});
</script>

<svelte:head>
	<title>AIGTL · AI Governance, Transformation &amp; Labs magyar cégeknek</title>
	<meta
		name="description"
		content="Nem prompt-tréningre van szükség. Mérhető AI-bevezetés és teljes körű EU AI Act megfelelőség 50 és 500 fő közötti vállalatoknak. A változáskezelést és műszaki felkészültséget a Sensa és a ReadimConsult partnerségében kapcsoljuk össze."
	/>
</svelte:head>

<section class="hero-surface relative overflow-hidden">
	<svg class="hero-circuit-field" viewBox="0 0 1440 700" preserveAspectRatio="none" aria-hidden="true">
		<g class="hero-circuit-traces">
			<path class="hero-scroll-path" data-endpoint="hero-scroll-end-1" data-packet="hero-scroll-packet-1" d="M1440 86h-92v58h-48v36h-70" />
			<path class="hero-scroll-path" data-endpoint="hero-scroll-end-2" data-packet="hero-scroll-packet-2" d="M1440 248h-50v-34h-92v54h-52v42h-78" />
			<path class="hero-scroll-path" data-endpoint="hero-scroll-end-3" data-packet="hero-scroll-packet-3" d="M1440 472h-82v-46h-54v-34h-90" />
			<path class="hero-scroll-path" data-endpoint="hero-scroll-end-4" data-packet="hero-scroll-packet-4" d="M0 525h64v-48h60v-36h58" />
			<path class="hero-scroll-path" data-endpoint="hero-scroll-end-5" data-packet="hero-scroll-packet-5" d="M0 183h42v34h74v-52h54" />
		</g>
		<g class="hero-circuit-splits">
			<path class="hero-scroll-split" data-reveal-at="0.48" d="M1348 144v46h-40v32" />
			<path class="hero-scroll-split" data-reveal-at="0.16" d="M1390 214h-42v-46h-38" />
			<path class="hero-scroll-split" data-reveal-at="0.42" d="M64 477h48v-30h46" />
			<path class="hero-scroll-split" data-reveal-at="0.58" d="M116 217v42h42v28" />
		</g>
		<g class="hero-circuit-endpoints">
			<circle id="hero-scroll-end-1" cx="1230" cy="180" r="4" />
			<circle id="hero-scroll-end-2" cx="1168" cy="310" r="4" />
			<circle id="hero-scroll-end-3" cx="1214" cy="392" r="4" />
			<circle id="hero-scroll-end-4" cx="182" cy="441" r="4" />
			<circle id="hero-scroll-end-5" cx="170" cy="165" r="4" />
		</g>
		<g class="hero-circuit-packets">
			<circle id="hero-scroll-packet-1" r="3" />
			<circle id="hero-scroll-packet-2" r="3" />
			<circle id="hero-scroll-packet-3" r="3" />
			<circle id="hero-scroll-packet-4" r="3" />
			<circle id="hero-scroll-packet-5" r="3" />
		</g>
	</svg>
	<div class="relative z-10 mx-auto max-w-7xl px-6 pt-16 pb-16 sm:pt-20 sm:pb-20 lg:px-10 lg:pt-24 lg:pb-24">
		<div class="grid gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(20rem,0.85fr)] lg:items-center lg:gap-16">
			<div class="max-w-3xl">
				<p class="hero-eyebrow">AI Governance, Transformation &amp; Labs</p>
				<h1 class="mt-5 text-4xl leading-[1.05] font-semibold tracking-tight md:text-5xl lg:text-5xl">
					Biztonságos AI-használat.<br>Felkészült vezetők.<br>Mérhető üzleti eredmények.
				</h1>

				<p class="hero-copy mt-6 max-w-2xl text-lg leading-relaxed md:text-xl">
					Az AIGTL a szervezeti változáskezelést ötvözi a műszaki és szabályozási megfelelőséggel.
				</p>

				<p class="hero-copy mt-4 max-w-2xl text-base leading-relaxed md:text-lg">
					Kezdjük egy 20 perces beszélgetéssel: áttekintjük, milyen kérdések merülnek fel az AI-használat és az EU AI Act kapcsán.
				</p>

				<div class="mt-8 flex flex-wrap items-center gap-3">
					<a
						href={resolve('/kapcsolat')}
						class="hero-primary-action inline-flex min-h-12 items-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold transition-colors"
					>
						20 perces beszélgetés egyeztetése
						<span aria-hidden="true">→</span>
					</a>
					<a
						href="#danger"
						class="hero-secondary-action inline-flex min-h-12 items-center gap-2 rounded-lg px-5 py-3 text-sm font-medium ring-1 ring-inset transition-colors"
					>
						A valós kockázat
					</a>
				</div>
			</div>

			<nav class="hero-pillars" aria-label="Az AIGTL három programlépcsője">
				<ParallelogramCard href="#vezetoi-workshop" packetDuration="3.4s">
					<span class="hero-pillar-number">01</span>
					<span class="hero-pillar-content">
						<span class="hero-pillar-label">Vezetői szint</span>
						<span class="hero-pillar-title">Vezetői AI-workshop</span>
					</span>
					<span class="hero-pillar-arrow" aria-hidden="true">↗</span>
				</ParallelogramCard>
				<ParallelogramCard href={resolve('/kozepvezetoi-workshop')} packetDuration="3.8s">
					<span class="hero-pillar-number">02</span>
					<span class="hero-pillar-content">
						<span class="hero-pillar-label">Középvezetői szint · Adopció</span>
						<span class="hero-pillar-title">Középvezetői program</span>
					</span>
					<span class="hero-pillar-arrow" aria-hidden="true">↗</span>
				</ParallelogramCard>
				<ParallelogramCard href={resolve('/ai-alapvizsga')} packetDuration="4.1s">
					<span class="hero-pillar-number">03</span>
					<span class="hero-pillar-content">
						<span class="hero-pillar-label">Dolgozói AI-műveltség</span>
						<span class="hero-pillar-title">Vállalati AI-alapvizsga</span>
					</span>
					<span class="hero-pillar-arrow" aria-hidden="true">↗</span>
				</ParallelogramCard>
			</nav>
		</div>
	</div>
</section>

<style>
	.hero-surface {
		isolation: isolate;
		--hero-circuit-blue: var(--color-secondary);
		--hero-circuit-glow: var(--color-accent);
		background: linear-gradient(
			112deg,
			color-mix(in srgb, var(--hero-circuit-blue) 8%, var(--color-bg)),
			color-mix(in srgb, var(--color-bg) 96%, var(--hero-circuit-blue)) 52%,
			color-mix(in srgb, var(--hero-circuit-blue) 6%, var(--color-bg))
		);
		color: var(--color-text);
	}
	.hero-circuit-field {
		position: absolute;
		z-index: 0;
		inset: 0;
		width: 100%;
		height: 100%;
		pointer-events: none;
	}
	.hero-circuit-traces {
		fill: none;
		stroke: var(--hero-circuit-blue);
		stroke-width: 1.8;
		stroke-linecap: round;
		stroke-linejoin: round;
		vector-effect: non-scaling-stroke;
		opacity: 0.78;
	}
	.hero-circuit-splits {
		fill: none;
		stroke: var(--hero-circuit-blue);
		stroke-width: 1.8;
		stroke-linecap: round;
		stroke-linejoin: miter;
		stroke-miterlimit: 2;
		vector-effect: non-scaling-stroke;
		opacity: 0.78;
	}
	.hero-scroll-path,
	.hero-scroll-split { stroke-dasharray: 0 2000; }
	.hero-circuit-endpoints {
		fill: var(--hero-circuit-glow);
		filter: drop-shadow(0 0 6px var(--hero-circuit-glow));
	}
	.hero-circuit-endpoints circle,
	.hero-circuit-packets circle { opacity: 0; }
	.hero-circuit-packets {
		fill: var(--hero-circuit-glow);
		filter: drop-shadow(0 0 5px var(--hero-circuit-glow));
	}
	@media (prefers-reduced-motion: reduce) {
		.hero-circuit-packets { display: none; }
	}
	.hero-copy { color: var(--color-text-muted); }
	.hero-eyebrow {
		color: var(--color-primary);
		font-size: 0.75rem;
		font-weight: 700;
		letter-spacing: 0.16em;
		text-transform: uppercase;
	}
	.hero-primary-action {
		background-color: var(--color-accent);
		color: var(--color-text);
	}
	.hero-primary-action:hover { background-color: var(--color-focus); }
	.hero-secondary-action {
		--tw-ring-color: var(--color-border-strong);
		color: var(--color-text);
	}
	.hero-secondary-action:hover { background-color: var(--color-surface-alt); }
	.hero-primary-action:focus-visible,
	.hero-secondary-action:focus-visible,
	:global(.parallelogram-card:focus-visible) {
		outline: 3px solid var(--color-focus);
		outline-offset: 3px;
	}
	.hero-pillars {
		display: grid;
		gap: 0.25rem;
	}
	.hero-pillar-number {
		position: relative;
		z-index: 2;
		color: var(--color-accent);
		font-size: 0.75rem;
		font-weight: 700;
		font-variant-numeric: tabular-nums;
	}
	.hero-pillar-content { position: relative; z-index: 2; display: grid; gap: 0.2rem; }
	.hero-pillar-label {
		color: var(--color-text-subtle);
		font-size: 0.7rem;
		font-weight: 700;
		letter-spacing: 0.08em;
		text-transform: uppercase;
	}
	.hero-pillar-title { color: var(--color-text); font-size: 0.95rem; font-weight: 600; line-height: 1.4; transition: color 160ms ease; }
	.hero-pillar-arrow { position: relative; z-index: 2; color: var(--color-secondary); transition: transform 160ms ease; }
	:global(.parallelogram-card:hover .hero-pillar-arrow) { transform: translate(2px, -2px); }
	:global(.parallelogram-card:hover .hero-pillar-title),
	:global(.parallelogram-card:focus-visible .hero-pillar-title) { color: var(--color-primary-hover); }
	.strategic-secondary-action {
		--tw-ring-color: var(--color-border-strong);
		color: var(--color-text);
	}
	.strategic-secondary-action:hover { background-color: var(--color-surface-alt); }
	.service-overview {
		border-color: var(--color-border);
		background-color: var(--color-surface-alt);
	}
	.service-card {
		border-color: var(--color-border);
		background-color: var(--color-surface);
	}
	.service-title { color: var(--color-text); }
	.service-copy { color: var(--color-text-muted); }
	.service-eyebrow { color: var(--color-accent); }
	.service-sequence { color: var(--color-primary); }
	.service-route {
		color: var(--color-primary);
		text-decoration-color: var(--color-border-strong);
	}
	.service-route:hover { color: var(--color-primary-hover); }
	.home-offer-circuit-list {
		position: relative;
		display: grid;
		gap: 1rem;
		padding-left: 2rem;
	}
	.home-offer-circuit-list::before {
		position: absolute;
		top: 1rem;
		bottom: 1rem;
		left: 0.5rem;
		width: 1.5px;
		background: var(--color-secondary);
		box-shadow: 0 0 8px color-mix(in srgb, var(--color-secondary) 50%, transparent);
		content: '';
	}
	.home-offer-circuit-list::after {
		position: absolute;
		top: var(--current-progress, 0%);
		left: 0.5rem;
		width: 0.55rem;
		height: 0.55rem;
		border-radius: 50%;
		background: var(--color-accent);
		box-shadow: 0 0 10px var(--color-accent);
		content: '';
		transform: translate(-40%, -50%);
	}
	.home-offer-circuit-card { position: relative; }
	.home-offer-circuit-card::before {
		position: absolute;
		top: 1.5rem;
		left: -1.5rem;
		width: 1.5rem;
		border-top: 1.5px solid var(--color-secondary);
		content: '';
	}
	@media (prefers-reduced-motion: reduce) {
		.home-offer-circuit-list::after { box-shadow: none; }
	}
</style>

<TrustBar variant="light" />

<section id="danger" class="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
	<div class="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-12">
		<div class="lg:col-span-5">
			<h2 class="text-2xl font-semibold tracking-tight text-[var(--color-text)] md:text-3xl">
				A valós kockázat:<br>Ellenőrizetlen Shadow AI az irodában
			</h2>
			<p class="mt-4 text-base leading-relaxed text-[var(--color-text-muted)]">
				A vállalati <a href="https://orca.security/resources/blog/what-is-shadow-ai/" target="_blank" rel="noreferrer" class="underline underline-offset-4">„Shadow AI”</a> azt jelenti, hogy a munkatársak belső adatokat, szerződéstervezeteket vagy pénzügyi kalkulációkat töltenek fel nyilvános, ingyenes mesterséges intelligencia felületekre a napi munka meggyorsítására.
			</p>
			<p class="mt-4 text-base leading-relaxed text-[var(--color-text-muted)]">
				A szigorú tiltás nem vezet eredményre: ha a vállalat nem bocsát rendelkezésre szabályozott keretrendszert és belső irányelveket, az eszközhasználat a láthatatlan sávba szorul. Célunk, hogy ezt a rejtett gyakorlatot átlátható, kockázatmentesített és üzletileg közvetlenül megtérülő folyamattá alakítsuk.
			</p>
		</div>

		<figure class="w-full overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] lg:col-span-7 lg:w-2/3 lg:justify-self-center">
			<img
				src={`${base}/fear-of-shadow-ai.png`}
				alt="A Shadow AI kialakulásának folyamata a munkatársi eszközhasználattól a szervezeti kockázatokig"
				class="block h-auto w-full"
				loading="lazy"
			/>
			<figcaption class="px-3 py-2 text-xs text-[var(--color-text-muted)]">
				Forrás: <a
					href="https://www.miniorange.com/blog/assets/2026/what-are-shadow-ai-agents.webp"
					target="_blank"
					rel="noreferrer"
					class="underline underline-offset-4"
				>miniOrange · Shadow AI agents</a>
			</figcaption>
		</figure>
	</div>
</section>

<section class="border-t border-[var(--color-border)] bg-[var(--color-surface-alt)]">
	<div class="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
		<div class="max-w-3xl">
			<div class="text-xs font-semibold tracking-widest text-[var(--color-text-subtle)] uppercase">Amit az AIGTL ad</div>
			<h2 class="mt-3 text-2xl font-semibold tracking-tight text-[var(--color-text)] md:text-3xl">
				Háromszintű, auditálható program a vezetők, a szervezet és a HR kezébe.
			</h2>
		</div>
		<div class="home-offer-circuit mt-10" data-offer-circuit>
			<div class="home-offer-circuit-list">
				<article class="home-offer-circuit-card rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
					<div class="text-xs font-semibold tracking-wider text-[var(--color-text-subtle)] uppercase">Vezetői szint</div>
					<p class="mt-2 text-sm leading-relaxed text-[var(--color-text-muted)]">
						AI-nyilvántartás, Shadow AI audit, belső AI szabályzat, licenc- és költségoptimalizálás.
					</p>
				</article>
				<article class="home-offer-circuit-card rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
					<div class="text-xs font-semibold tracking-wider text-[var(--color-text-subtle)] uppercase">Operatív szint</div>
					<p class="mt-2 text-sm leading-relaxed text-[var(--color-text-muted)]">
						Középvezetői workshop, use-case térkép és 30 napos ROI-becslés. Az AI Champion program külön választható folytatás.
					</p>
				</article>
				<article class="home-offer-circuit-card rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
					<div class="text-xs font-semibold tracking-wider text-[var(--color-text-subtle)] uppercase">HR szint</div>
					<p class="mt-2 text-sm leading-relaxed text-[var(--color-text-muted)]">
						Vállalati AI-alapvizsga, Neumann-kurzus és HR dashboard a vizsgaeredmények követésére.
					</p>
				</article>
		</div>
	</div>
</section>

<section class="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
	<div class="mx-auto max-w-4xl">
		<h2 class="text-3xl font-semibold tracking-tight text-[var(--color-text)] md:text-4xl">
			Miért akadnak el a hagyományos AI-bevezetések?
		</h2>
		<p class="mt-5 text-base leading-relaxed text-[var(--color-text-muted)]">
			A <a href="https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai-2025" target="_blank" rel="noreferrer" class="underline underline-offset-4">McKinsey 2025-ös globális felmérése</a> szerint a szervezetek közel kétharmada még nem kezdte el az AI vállalati szintű skálázását, a <a href="https://www.gartner.com/en/newsroom/press-releases/2024-07-29-gartner-predicts-30-percent-of-generative-ai-projects-will-be-abandoned-after-proof-of-concept-by-end-of-2025" target="_blank" rel="noreferrer" class="underline underline-offset-4">Gartner 2024-es előrejelzése</a> pedig azt valószínűsítette, hogy a generatív AI-projektek legalább 30%-át a proof of concept után 2025 végéig felhagyják. Úgy látjuk, hogy ennek hátterében gyakran kettős hiányosság áll: az IT-beszállítók ritkán kezelik a munkavállalói ellenállást és a vezetői aggályokat, a képzőcégeknek pedig sokszor hiányzik a műszaki auditálási és EU AI Act szabályozási tapasztalata.
		</p>
	</div>

	<div class="mt-12 grid gap-6 md:grid-cols-2">
		<div class="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-7">
			<p class="text-sm leading-relaxed text-[var(--color-text-muted)]">
				<strong>Szervezeti és vezetői támogatás:</strong> A Sensa több mint 10 éves hazai szervezetfejlesztési tapasztalata (kiemelten gyártó, logisztikai és pénzügyi szektorban működő vállalatoknál) biztosítja, hogy a középvezetők ne fenyegetést, hanem megbízható munkaeszközt lássanak az új technológiában.
			</p>
		</div>
		<div class="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-7">
			<p class="text-sm leading-relaxed text-[var(--color-text-muted)]">
				<strong>Szabályozási és műszaki felkészültség:</strong> A ReadimConsult technológiai és EU AI Act auditori szemlélete a nemzetközi szabványok (például NIST AI RMF, ISO/IEC 42001) logikáját követve végzi el a rendszerek feltárását, a szoftverlicencek optimalizálását és a kockázatok minimalizálását.
			</p>
		</div>
	</div>
</section>

<section id="pillars" class="service-overview border-t">
	<div class="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
		<div class="max-w-3xl">
			<h2 class="service-title text-3xl font-semibold tracking-tight md:text-4xl">
				A háromlépcsős AIGTL modell:<br>Vezetői döntésektől a dolgozói AI-műveltségig
			</h2>
			<p class="service-copy mt-4 text-lg leading-relaxed">
				A három programlépcső a vezetői döntésektől a középvezetők gyakorlati munkáján át a dolgozói AI-műveltségig épül fel. A folyamat segít, hogy a szervezet a használati esetek, a folyamatok és a felelősségi körök tisztázása után mérlegelje a szükséges szoftverlicenceket.
			</p>
		</div>

		<div class="service-card mt-10 rounded-2xl border border-l-4 border-l-[var(--color-primary)] bg-[var(--color-surface-alt)] p-7">
			<div class="flex flex-col justify-between gap-5 md:flex-row md:items-center">
				<div class="max-w-3xl">
					<p class="service-eyebrow text-xs font-semibold tracking-wider uppercase">Önálló belépőpont · fél nap · nem része a három programlépcsőnek</p>
					<h3 class="service-title mt-3 text-xl font-semibold tracking-tight">Vezetői governance audit</h3>
					<p class="service-copy mt-3 text-sm leading-relaxed">
						Feltérképezzük a vállalat jelenlegi AI-használatát és az EU AI Act szerinti kitettségét, hogy meghatározzuk a következő lépéseket.
					</p>
				</div>
				<a
					href={resolve('/eu-ai-act')}
					class="service-route inline-flex shrink-0 items-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-colors"
				>
					Governance és megfelelőség
					<span aria-hidden="true">→</span>
				</a>
			</div>
		</div>

		<div class="mt-12 grid gap-6 md:grid-cols-3">
			<div id="vezetoi-workshop" class="service-card rounded-2xl border p-7">
				<p class="service-eyebrow text-xs font-semibold tracking-wider uppercase">1. szint</p>
				<h3 class="service-title mt-3 text-xl font-semibold tracking-tight">Vezetői AI-workshop</h3>
				<p class="service-copy mt-2 text-sm font-medium"><strong>Időtartam:</strong> 1 nap vagy 2 fél nap · <strong>Azonos programdíj</strong></p>
				<p class="service-copy mt-3 text-sm leading-relaxed"><strong>Célcsoport:</strong> Cégvezetés (CEO), pénzügyi vezető (CFO), jogi és IT igazgató, HR- és üzleti vezetők.</p>
				<p class="service-sequence mt-3 text-sm font-medium leading-relaxed">Helyzetkép → lehetőségek → keretek → döntések</p>
				<div class="service-copy mt-4 space-y-3 text-sm leading-relaxed">
					<p><strong>Helyben elkészül:</strong> Közös helyzetkép, három prioritás, felelősök, alapelvek. Három prioritásból álló, felelősökhöz rendelt 90 napos indulási terv.</p>
					<p><strong>Átadott segédanyag:</strong> Szabályzatminta, ellenőrzőlista, ROI-sablon.</p>
					<p><strong>A workshop utáni megvalósítás:</strong> A végleges szabályzat és a részletes rendszerterv további kidolgozást, jogi és IT-jóváhagyást igényel.</p>
				</div>
				<a
					href={resolve('/eu-ai-act')}
					class="service-route mt-5 inline-flex items-center gap-2 text-sm font-semibold underline underline-offset-4"
				>
					A governance pillér részletei
					<span aria-hidden="true">→</span>
				</a>
			</div>
			<div class="service-card rounded-2xl border p-7">
				<p class="service-eyebrow text-xs font-semibold tracking-wider uppercase">2. szint</p>
				<h3 class="service-title mt-3 text-xl font-semibold tracking-tight">Középvezetői use-case műhely és változáskezelés</h3>
				<p class="service-copy mt-2 text-sm font-medium"><strong>Időtartam:</strong> 1 nap vagy 2 fél nap · <strong>Azonos programdíj</strong></p>
				<p class="service-copy mt-3 text-sm leading-relaxed"><strong>Célcsoport:</strong> Operatív vezetők, funkcionális csoportvezetők (beszerzés, értékesítés, pénzügy, HR).</p>
				<p class="service-copy mt-2 text-sm leading-relaxed"><strong>Tartalom:</strong> Szervezeti félelmek oldása, a manuális adminisztratív terhek azonosítása és use-case-ek kidolgozása, 30 napos ROI-becsléssel és rangsorolással.</p>
				<p class="service-copy mt-2 text-sm leading-relaxed"><strong>Gyakorlati kimenetek:</strong> Bejövő árajánlatok és számlák előszűrése, szerződésváltozatok eltéréseinek összevetése, vezetői összefoglalók automatikus generálása.</p>
				<a
					href={resolve('/kozepvezetoi-workshop')}
					class="service-route mt-5 inline-flex items-center gap-2 text-sm font-semibold underline underline-offset-4"
				>
					A középvezetői pillér részletei
					<span aria-hidden="true">→</span>
				</a>
			</div>
			<div class="service-card rounded-2xl border p-7">
				<p class="service-eyebrow text-xs font-semibold tracking-wider uppercase">3. szint</p>
				<h3 class="service-title mt-3 text-xl font-semibold tracking-tight">Dolgozói AI-műveltség, vizsga és HR dashboard</h3>
				<p class="service-copy mt-3 text-sm leading-relaxed"><strong>Célcsoport:</strong> A menedzsment által kijelölt kulcspozícióban dolgozó irodai munkatársak, HR csapat.</p>
				<p class="service-copy mt-2 text-sm leading-relaxed"><strong>Tartalom:</strong> Felkészítés a Neumann Technológiai Platform által hitelesített AI Alapkurzusra, rendszeres szakértői konzultációval kiegészítve.</p>
				<p class="service-copy mt-2 text-sm leading-relaxed"><strong>Mérhetőség:</strong> Belső HR vizsgakövető dashboard a vizsgaeredmények követésére.</p>
				<a
					href={resolve('/ai-alapvizsga')}
					class="service-route mt-5 inline-flex items-center gap-2 text-sm font-semibold underline underline-offset-4"
				>
					Az AI-műveltségi pillér részletei
					<span aria-hidden="true">→</span>
				</a>
			</div>
		</div>

		<p class="service-copy mt-8 max-w-3xl text-base leading-relaxed">
			A fél napos vezetői governance audit különálló, önálló belépőpont. A három számozott programlépcső első eleme a Vezetői AI-workshop; ez 1 napos vagy 2 fél napos formában, azonos programdíjjal érhető el. A szervezet a valós eredmények tükrében dönthet a további szintekről.
		</p>
	</div>
</section>

<section class="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
	<div class="grid gap-10 lg:grid-cols-12 lg:gap-16">
		<div class="lg:col-span-5">
			<h2 class="text-3xl font-semibold tracking-tight text-[var(--color-text)] md:text-4xl">
				<a href="#pillars" style="color: inherit;" class="underline underline-offset-4">
					Ismerje meg a 3 szint részletes tematikáját és ütemezését
				</a>
			</h2>
			<p class="mt-4 text-base leading-relaxed text-[var(--color-text-muted)]">
				Az Európai Unió Mesterséges Intelligencia Rendeletének (EU AI Act) 4. cikke rögzíti: minden olyan szervezet, amely mesterséges intelligenciát alkalmaz, köteles gondoskodni a munkavállalók igazolható szintű AI-műveltségéről (AI Literacy).
			</p>
			<p class="mt-4 text-base leading-relaxed text-[var(--color-text-muted)]">
				Az AIGTL a hazai Neumann Technológiai Platform egyetemek által hitelesített, magyar nyelvű alaptantervét integrálja a vállalati működésbe. Mivel maga az alaptananyag és a záróvizsga díjmentes, a céget nem terheli külső szoftver-licencdíj.
			</p>
		</div>

		<div class="lg:col-span-7">
			<div class="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-[0_30px_60px_-40px_var(--color-shadow)]">
				<div class="grid gap-4 md:grid-cols-3">
					<div class="rounded-xl bg-[var(--color-surface-alt)] p-5">
						<p class="text-xs font-semibold tracking-wider text-[var(--color-text-subtle)] uppercase">Kick-off</p>
						<p class="mt-2 text-sm text-[var(--color-text-muted)]">Szervezeti kick-off eligazítás a résztvevőknek.</p>
					</div>
					<div class="rounded-xl bg-[var(--color-surface-alt)] p-5">
						<p class="text-xs font-semibold tracking-wider text-[var(--color-text-subtle)] uppercase">Mentorálás</p>
						<p class="mt-2 text-sm text-[var(--color-text-muted)]">Rendszeres szakértői konzultáció és kérdés-válasz blokkok a tanulási fázisban.</p>
					</div>
					<div class="rounded-xl bg-[var(--color-surface-alt)] p-5">
					<p class="text-xs font-semibold tracking-wider text-[var(--color-primary)] uppercase">Igazolás</p>
						<p class="mt-2 text-sm text-[var(--color-text-muted)]">Vezetői és HR dashboard a vizsgaeredmények követésére.</p>
					</div>
				</div>
				<div class="mt-6 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-alt)] p-5">
					<p class="text-sm leading-relaxed text-[var(--color-text-muted)]">
						Az AIGTL csapata a folyamat teljes menedzsmentjét biztosítja: a vállalat nem csak a képzést kapja meg, hanem a teljes dokumentált, igazolható megfelelőségi útvonalat is.
					</p>
				</div>
			</div>
		</div>
	</div>
</section>

<section class="border-t border-[var(--color-border)] bg-[var(--color-surface-alt)]">
	<div class="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
		<div class="max-w-4xl">
			<h2 class="text-3xl font-semibold tracking-tight text-[var(--color-text)] md:text-4xl">
				Gondoskodjon vállalata jogi megfelelőségéről, következő negyedévben növelje a működési hatékonyságot mérhető eredményekkel.
			</h2>
			<p class="mt-4 text-lg leading-relaxed text-[var(--color-text-muted)]">
				Kezdjük egy 20 perces beszélgetéssel.
			</p>
		</div>
		<div class="mt-10 flex flex-wrap items-center gap-3">
			<a
				href={resolve('/kapcsolat')}
				class="inline-flex items-center gap-2 rounded-md bg-[var(--color-accent)] px-5 py-3 text-sm font-semibold text-[var(--color-text)] transition-colors hover:bg-[var(--color-focus)]"
			>
				20 perces beszélgetés egyeztetése
				<span aria-hidden="true">→</span>
			</a>
			<a
				href="mailto:info@aigtl.eu"
				class="strategic-secondary-action inline-flex items-center gap-2 rounded-md px-5 py-3 text-sm font-medium ring-1 ring-inset transition-colors"
			>
				info@aigtl.eu
			</a>
		</div>
	</div>
</section>

<section class="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
	<div class="max-w-3xl">
		<h2 class="text-3xl font-semibold tracking-tight text-[var(--color-text)] md:text-4xl">Szakmai vezetés és felelősségvállalás</h2>
		<p class="mt-4 text-lg leading-relaxed text-[var(--color-text-muted)]">
			A program szakmai hitelességét és módszertani garanciáját a két partnerszervezet vezető szakértői biztosítják:
		</p>
	</div>

	<div class="mt-10 grid gap-6 md:grid-cols-2">
		<div class="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-7">
			<p class="text-xl font-semibold tracking-tight text-[var(--color-text)]">Vörös Ákos</p>
			<p class="mt-2 text-sm text-[var(--color-text-muted)]">ReadimConsult</p>
			<p class="mt-4 text-sm leading-relaxed text-[var(--color-text-muted)]">
				AI governance és vállalati AI-transzformációs szakértő. Több mint 15 éves tapasztalattal támogatja a hazai középvállalati szektort az IT-biztonsági felmérések, az EU AI Act jogszabályi megfelelőség és a folyamat-optimalizálás terén.
			</p>
		</div>
		<div class="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-7">
			<p class="text-xl font-semibold tracking-tight text-[var(--color-text)]">Makula Tibor</p>
			<p class="mt-2 text-sm text-[var(--color-text-muted)]"></p>
			<p class="mt-4 text-sm leading-relaxed text-[var(--color-text-muted)]">
				Szenior szervezetfejlesztési és vezetőfejlesztési tanácsadó. Specialitása a humán ellenállás feloldása, az új technológiák szervezeti elfogadtatása és a középvezetői hatékonyságnövelés.
			</p>
		</div>
	</div>
</section>

<section class="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
	<div class="max-w-3xl">
		<h2 class="text-3xl font-semibold tracking-tight text-[var(--color-text)] md:text-4xl">Gyakori kérdések és válaszok</h2>
	</div>

	<div class="mt-10 grid gap-6 md:grid-cols-2">
		<div class="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
			<h3 class="text-base font-semibold text-[var(--color-text)]">Miért van szükség külső tanácsadásra, ha a ChatGPT-t és a Copilotot a dolgozók maguktól is használják?</h3>
			<p class="mt-3 text-sm leading-relaxed text-[var(--color-text-muted)]">
				Az egyéni, ad-hoc eszközhasználat nem egyenlő a szervezeti hatékonysággal, viszont azonnali adatvédelmi és jogi kockázatot hordoz. Belső szabályzat, ellenőrzött adatkezelés és validált use-case-ek hiányában a munkatársak elszigetelten, ellenőrizetlen forrásokból dolgoznak. A program célja a kockázatok kiszűrése és a valós megtérülés elérése.
			</p>
		</div>
		<div class="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
			<h3 class="text-base font-semibold text-[var(--color-text)]">Milyen konkrét formában zajlik a 20 perces bevezető beszélgetés?</h3>
			<p class="mt-3 text-sm leading-relaxed text-[var(--color-text-muted)]">
				A bevezető beszélgetés egy előre egyeztetett, kötetlen Microsoft Teams hívás a felsővezetés és Vörös Ákos között. Áttekintjük a vállalat AI-használatával kapcsolatos kérdéseket, és azt, hogy indokolt-e egy különálló, fél napos vezetői governance audit.
			</p>
		</div>
		<div class="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
			<h3 class="text-base font-semibold text-[var(--color-text)]">Mekkora időráfordítást igényel a folyamat a cég munkatársaitól?</h3>
			<p class="mt-3 text-sm leading-relaxed text-[var(--color-text-muted)]">
				A fél napos vezetői governance audit önálló szolgáltatás. A Vezetői AI-workshop 1 napos vagy 2 fél napos formában választható, azonos programdíjjal; a középvezetői program részleteit a szolgáltatásoldal ismerteti.
			</p>
		</div>
		<div class="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
			<h3 class="text-base font-semibold text-[var(--color-text)]">Milyen kézzelfogható dokumentumokat és eszközöket ad át az AIGTL a záráskor?</h3>
			<p class="mt-3 text-sm leading-relaxed text-[var(--color-text-muted)]">
				A vállalat auditált eszközöket kap kézhez: vállalatra szabott AI Szabályzatot (Policy), strukturált Shadow AI leltárt és kockázati besorolást, a priorizált folyamatok validált use-case leírását, valamint HR vizsgadashboardet és riportot.
			</p>
		</div>
	</div>
</section>
