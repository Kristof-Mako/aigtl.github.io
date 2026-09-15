<script lang="ts">
	import PillarCard from '$lib/components/PillarCard.svelte';
	import TrustBar from '$lib/components/TrustBar.svelte';
	import Cta from '$lib/components/Cta.svelte';
	import { pillars } from '$lib/content';
</script>

<svelte:head>
	<title>AIGTL · AI Governance, Transformation &amp; Lab magyar cégeknek</title>
	<meta
		name="description"
		content="Az AIGTL az EU AI Act megfelelést, a középvezetői AI adopciót és a kötelező AI‑műveltségi képzést egyetlen, bizonyítható eredményekkel járó programmá kapcsolja össze magyar cégeknek."
	/>
</svelte:head>

<!-- Hero -->
<section class="relative overflow-hidden bg-ink-950 text-white">
	<div
		class="pointer-events-none absolute -top-40 -right-40 h-[36rem] w-[36rem] rounded-full bg-gradient-to-br from-accent-500/30 via-accent-400/10 to-transparent blur-3xl"
		aria-hidden="true"
	></div>
	<div
		class="pointer-events-none absolute -bottom-40 -left-40 h-[28rem] w-[28rem] rounded-full bg-gradient-to-tr from-ink-800 to-transparent blur-3xl"
		aria-hidden="true"
	></div>

	<div class="relative mx-auto max-w-7xl px-6 pt-24 pb-24 lg:px-10 lg:pt-32 lg:pb-32">
		<div class="max-w-3xl">
			<div class="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-ink-200">
				<span class="h-1.5 w-1.5 rounded-full bg-accent-400" aria-hidden="true"></span>
				50–500 fős vállalatoknak · magyar nyelven
			</div>

			<h1 class="mt-6 text-4xl leading-[1.05] font-semibold tracking-tight md:text-5xl lg:text-6xl">
				Az AI bevezetés kockázata
				<span class="text-accent-400">nem technológiai kérdés</span>, hanem vezetői felelősség.
			</h1>

			<p class="mt-6 max-w-2xl text-lg leading-relaxed text-ink-300 md:text-xl">
				Az AIGTL az <a
					class="link-brand-invert"
					href="https://eur-lex.europa.eu/eli/reg/2024/1689/oj/eng"
					target="_blank"
					rel="noopener">EU AI Act</a> jogi megfelelést, a középvezetői adopciót és a munkavállalói
				AI‑műveltséget egyetlen, bizonyítható eredményekkel járó programmá kapcsolja össze. Nem
				technológiát adunk el, hanem biztonságot és kontrollt.
			</p>

			<div class="mt-10 flex flex-wrap items-center gap-3">
				<a
					href="/kapcsolat"
					class="inline-flex items-center gap-2 rounded-md bg-accent-400 px-5 py-3 text-sm font-semibold text-ink-950 transition-colors hover:bg-accent-300"
				>
					Ingyenes AI‑kockázati konzultáció
					<span aria-hidden="true">→</span>
				</a>
				<a
					href="#pillars"
					class="inline-flex items-center gap-2 rounded-md px-5 py-3 text-sm font-medium text-white ring-1 ring-white/25 ring-inset transition-colors hover:bg-white/5"
				>
					Megnézem a 3 pillért
				</a>
			</div>
		</div>
	</div>
</section>

<TrustBar variant="light" />

<!-- Problem → Solution -->
<section class="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
	<div class="grid gap-10 lg:grid-cols-2 lg:gap-16">
		<div>
			<div class="text-xs font-semibold tracking-widest text-ink-500 uppercase">
				A helyzet ma
			</div>
			<h2 class="mt-3 text-2xl font-semibold tracking-tight text-ink-900 md:text-3xl">
				Nem az a kérdés, hogy „használunk‑e” AI‑t. Hanem hogy tudjuk‑e, hol és hogyan.
			</h2>
			<ul class="mt-6 space-y-4 text-base text-ink-700">
				<li class="flex gap-3">
					<span class="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-accent-500" aria-hidden="true"
					></span>
					<span>
						A dolgozók már használják a nyilvános AI‑eszközöket, és <strong>céges adatokat</strong>
						töltenek fel ismeretlen szolgáltatókhoz, ellenőrzés nélkül.
					</span>
				</li>
				<li class="flex gap-3">
					<span class="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-accent-500" aria-hidden="true"
					></span>
					<span>
						Az <a
							class="link-brand"
							href="https://eur-lex.europa.eu/eli/reg/2024/1689/oj/eng"
							target="_blank"
							rel="noopener"><strong>EU AI Act</strong></a> már hatályos: AI‑leltár, kockázati besorolás
						és igazolható munkavállalói AI‑műveltség a nagyméretű bírságok elkerüléséhez elvárt.
					</span>
				</li>
				<li class="flex gap-3">
					<span class="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-accent-500" aria-hidden="true"
					></span>
					<span>
						A vezetőség <strong>elvárja az AI‑ROI‑t</strong>, de a középvezetők és a HR nem kap
						erőforrást és keretrendszert a végrehajtáshoz.
					</span>
				</li>
			</ul>
		</div>

		<div class="rounded-2xl border border-ink-100 bg-ink-50/60 p-8 lg:p-10">
			<div class="text-xs font-semibold tracking-widest text-ink-500 uppercase">
				Amit az AIGTL ad
			</div>
			<h3 class="mt-3 text-2xl font-semibold tracking-tight text-ink-900">
				Strukturált, auditálható, mérhető program, 3 döntéshozói szintre bontva.
			</h3>
			<div class="mt-6 grid gap-4">
				<div class="rounded-xl bg-white p-5 ring-1 ring-ink-100">
					<div class="text-xs font-semibold tracking-wider text-ink-500 uppercase">
						Vezetői szint
					</div>
					<p class="mt-2 text-sm text-ink-700">
						AI‑leltár, Shadow AI audit, belső AI szabályzat, licenc‑ és költségoptimalizálás.
					</p>
				</div>
				<div class="rounded-xl bg-white p-5 ring-1 ring-ink-100">
					<div class="text-xs font-semibold tracking-wider text-ink-500 uppercase">
						Operatív szint
					</div>
					<p class="mt-2 text-sm text-ink-700">
						Middle‑manager workshop, use‑case térkép, AI Champion program, Agentic AI felkészítés.
					</p>
				</div>
				<div class="rounded-xl bg-white p-5 ring-1 ring-ink-100">
					<div class="text-xs font-semibold tracking-wider text-ink-500 uppercase">HR szint</div>
					<p class="mt-2 text-sm text-ink-700">
						Vállalati AI alapvizsga (<a
							class="link-brand"
							href="https://neum.hu/"
							target="_blank"
							rel="noopener">Neumann Platform</a> és prémium), HR vizsgakövető dashboard,
						AI a HR folyamatokban.
					</p>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Pillars -->
<section id="pillars" class="border-t border-ink-100 bg-ink-50/40">
	<div class="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
		<div class="max-w-3xl">
			<div class="text-xs font-semibold tracking-widest text-ink-500 uppercase">
				3 pillér, 3 döntéshozó
			</div>
			<h2 class="mt-3 text-3xl font-semibold tracking-tight text-ink-900 md:text-4xl">
				Az AI bevezetése párhuzamosan három szinten dől el.
			</h2>
			<p class="mt-4 text-lg leading-relaxed text-ink-600">
				A cégvezetés a jogi felelősség felől, az operatív vezetés a hatékonyság felől, a HR a kötelező
				képzés felől érkezik. Mindhárom számára külön oldalt, külön nyelvet, külön belépési pontot
				építettünk.
			</p>
		</div>

		<div class="mt-12 grid gap-6 md:grid-cols-3">
			{#each pillars as pillar (pillar.slug)}
				<PillarCard {pillar} />
			{/each}
		</div>
	</div>
</section>

<!-- Knowledge base teaser -->
<section class="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
	<div class="grid gap-10 lg:grid-cols-12 lg:gap-16">
		<div class="lg:col-span-5">
			<div class="text-xs font-semibold tracking-widest text-ink-500 uppercase">Tudástár</div>
			<h2 class="mt-3 text-3xl font-semibold tracking-tight text-ink-900 md:text-4xl">
				Sablonok, checklisták, kalkulátorok: használatra kész formában.
			</h2>
			<p class="mt-4 text-lg leading-relaxed text-ink-600">
				Nem generikus blogtartalom. Konkrét eszközök a jogi, operatív és HR szerepkörökre bontva,
				amelyekkel már a következő vezetői megbeszélésen dolgozható eredményt tudsz felmutatni.
			</p>
			<a
				href="/tudastar"
				class="mt-8 inline-flex items-center gap-2 rounded-md bg-ink-900 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-ink-800"
			>
				Böngészd a tudástárat
				<span aria-hidden="true">→</span>
			</a>
		</div>

		<div class="grid gap-4 sm:grid-cols-2 lg:col-span-7">
			<div class="rounded-xl border border-ink-100 bg-white p-6">
				<div class="text-xs font-semibold tracking-wider text-accent-500 uppercase">Checklist</div>
				<h3 class="mt-3 text-base font-semibold text-ink-900">
					10 pontos Shadow AI ellenőrző lista
				</h3>
				<p class="mt-2 text-sm text-ink-600">
					Fedd fel 2 hét alatt, milyen nem engedélyezett AI‑eszközökbe töltenek fel a dolgozók belső
					adatokat.
				</p>
			</div>
			<div class="rounded-xl border border-ink-100 bg-white p-6">
				<div class="text-xs font-semibold tracking-wider text-accent-500 uppercase">Sablon</div>
				<h3 class="mt-3 text-base font-semibold text-ink-900">Vállalati AI szabályzat minta</h3>
				<p class="mt-2 text-sm text-ink-600">
					Testreszabható belső AI Policy, amit a jogi és a HR osztály együtt tud kiadni.
				</p>
			</div>
			<div class="rounded-xl border border-ink-100 bg-white p-6">
				<div class="text-xs font-semibold tracking-wider text-accent-500 uppercase">Kalkulátor</div>
				<h3 class="mt-3 text-base font-semibold text-ink-900">EU AI Act határidő‑kalkulátor</h3>
				<p class="mt-2 text-sm text-ink-600">
					Számold ki cégméret és AI‑használat alapján, mely kötelezettségek meddig érnek el.
				</p>
			</div>
			<div class="rounded-xl border border-ink-100 bg-white p-6">
				<div class="text-xs font-semibold tracking-wider text-accent-500 uppercase">
					Esettanulmány
				</div>
				<h3 class="mt-3 text-base font-semibold text-ink-900">
					Magyar középvállalati use‑case‑ek
				</h3>
				<p class="mt-2 text-sm text-ink-600">
					Valós példák riportolás, ügyfélszolgálat és számlakezelés területéről, mérhető ROI‑val.
				</p>
			</div>
		</div>
	</div>
</section>

<Cta
	title="Kezdd a helyzetfelméréssel. 30 perc alatt tisztább a kép."
	description="Egy rövid, kötelezettségmentes konzultáción megnézzük, hol tart most a céged AI‑governance, adopció és képzés szempontjából, és melyik pillérrel érdemes indulni."
	primaryLabel="Konzultáció foglalása"
	primaryHref="/kapcsolat"
	secondaryLabel="Írj emailt"
	secondaryHref="mailto:hello@aigtl.hu"
/>
