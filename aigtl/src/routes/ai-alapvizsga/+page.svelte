<script lang="ts">
	import PillarHero from '$lib/components/PillarHero.svelte';
	import FeatureCard from '$lib/components/FeatureCard.svelte';
	import TrustBar from '$lib/components/TrustBar.svelte';
	import StepFlow from '$lib/components/StepFlow.svelte';
	import Cta from '$lib/components/Cta.svelte';
</script>

<svelte:head>
	<title>Vállalati AI alapvizsga és HR AI‑műveltség | AIGTL</title>
	<meta
		name="description"
		content="EU AI Act 4. cikk teljesítése ingyenes Neumann alapkurzussal, prémium menedzsmenttel és HR vizsgakövető dashboarddal. Kulcsrakész HR megoldás."
	/>
</svelte:head>

<PillarHero
	eyebrow="3. pillér · AI Literacy"
	title="Az AI Literacy kötelezettséget letesszük a HR asztalára."
	lead={`Az <a class="link-brand-invert" href="https://eur-lex.europa.eu/eli/reg/2024/1689/oj/eng" target="_blank" rel="noopener">EU AI Act</a> 4. cikke igazolható AI‑műveltséget vár el a munkavállalóktól. Nem kell drága licenc: a hazai <a class="link-brand-invert" href="https://neum.hu/" target="_blank" rel="noopener">Neumann Platform</a> ingyenes alapkurzusa és a mi prémium menedzsmentünk együtt auditálható megfelelést ad.`}
	primary={{ label: 'Kérj HR konzultációt', href: '/kapcsolat?tema=hr' }}
	secondary={{ label: 'Nézd meg a dashboardot', href: '#dashboard' }}
	bullets={[
		'Ingyenes, egyetemileg hitelesített alapkurzus',
		'Motivációs Kick‑off és szakértői konzultáció',
		'HR Vizsgakövető Dashboard, egy kattintás a megfelelés',
		'AI a HR saját folyamataiban (toborzás, onboarding, fluktuáció)'
	]}
	variant="speed"
/>

<TrustBar variant="light" />

<!-- Kinek szól -->
<section class="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
	<div class="grid gap-10 lg:grid-cols-3 lg:gap-14">
		<div class="lg:col-span-1">
			<div class="text-xs font-semibold tracking-widest text-ink-500 uppercase">Kinek szól</div>
			<h2 class="mt-3 text-2xl font-semibold tracking-tight text-ink-900 md:text-3xl">
				CHRO · HRBP · L&amp;D vezetők
			</h2>
			<p class="mt-4 text-base leading-relaxed text-ink-600">
				Az <a
					class="link-brand"
					href="https://eur-lex.europa.eu/eli/reg/2024/1689/oj/eng"
					target="_blank"
					rel="noopener">EU AI Act</a> 4. cikke a HR‑re teszi az igazolható AI‑műveltségi kötelezettséget,
				de a legtöbb HR osztálynak <strong>nincs kerete, nincs büdzéje és nincs eszköze</strong>.
				Ezt oldjuk meg kulcsrakész csomagban.
			</p>
		</div>
		<div class="lg:col-span-2">
			<div class="grid gap-4 sm:grid-cols-2">
				<div class="rounded-xl border border-ink-100 bg-ink-50/60 p-6">
					<div class="text-xs font-semibold tracking-wider text-ink-500 uppercase">A helyzet</div>
					<p class="mt-3 text-sm text-ink-700">
						A vezetés elvárja a megfelelést, a jogszabály él, a HR osztály viszont nem képzési
						cég.
					</p>
				</div>
				<div class="rounded-xl border border-ink-100 bg-ink-50/60 p-6">
					<div class="text-xs font-semibold tracking-wider text-ink-500 uppercase">A kérdés</div>
					<p class="mt-3 text-sm text-ink-700">
						„Hogyan biztosítom, hogy pár héten belül minden érintett dolgozónk igazolt
						AI‑műveltséggel rendelkezik?”
					</p>
				</div>
				<div class="rounded-xl border border-ink-100 bg-ink-50/60 p-6">
					<div class="text-xs font-semibold tracking-wider text-ink-500 uppercase">A cél</div>
					<p class="mt-3 text-sm text-ink-700">
						Egyszerű, gyors, alacsony költségű megoldás, amit egy lapon be tudsz mutatni a
						vezetésnek.
					</p>
				</div>
				<div class="rounded-xl border border-ink-100 bg-ink-50/60 p-6">
					<div class="text-xs font-semibold tracking-wider text-ink-500 uppercase">
						A pszichológia
					</div>
					<p class="mt-3 text-sm text-ink-700">
						Konvertáló motívum: <strong>sebesség és tehermentesítés</strong>. „Ezt le tudom
						tenni.”
					</p>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Two-column comparison: Free base vs Premium AIGTL -->
<section class="border-t border-ink-100 bg-ink-50/40">
	<div class="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
		<div class="max-w-3xl">
			<div class="text-xs font-semibold tracking-widest text-ink-500 uppercase">
				A modell kulcsa
			</div>
			<h2 class="mt-3 text-3xl font-semibold tracking-tight text-ink-900 md:text-4xl">
				Ingyenes alap és prémium ráépülés, nem licencdíjas képzés.
			</h2>
			<p class="mt-4 text-lg leading-relaxed text-ink-600">
				A hazai <a
					class="link-brand"
					href="https://neum.hu/"
					target="_blank"
					rel="noopener">Neumann Technológiai Platform</a> ingyenes, egyetemileg hitelesített, magyar nyelvű
				AI Alapkurzusát használjuk alapként. Erre építjük rá a menedzsmentet, amit a HR igényel.
			</p>
		</div>

		<div class="mt-12 grid gap-6 lg:grid-cols-2">
			<div class="rounded-2xl border border-ink-200 bg-white p-8">
				<div class="inline-flex items-center gap-2 rounded-full bg-ink-100 px-3 py-1 text-xs font-semibold tracking-wider text-ink-700 uppercase">
					Ingyenes alap
				</div>
				<h3 class="mt-4 text-xl font-semibold tracking-tight text-ink-900">
					<a
						class="link-brand"
						href="https://neum.hu/"
						target="_blank"
						rel="noopener">Neumann AI Alapkurzus</a>
				</h3>
				<p class="mt-2 text-sm text-ink-600">
					Egyetemek által hitelesített, magyar nyelvű, ingyenes online kurzus. Az <a
						class="link-brand"
						href="https://eur-lex.europa.eu/eli/reg/2024/1689/oj/eng"
						target="_blank"
						rel="noopener">EU AI Act</a> 4. cikkének teljesítéséhez elfogadható alap.
				</p>
				<ul class="mt-6 space-y-3 text-sm text-ink-700">
					<li class="flex gap-3">
						<span class="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-ink-400" aria-hidden="true"
						></span>
						<span>Nincs licenc‑ vagy szoftverdíj</span>
					</li>
					<li class="flex gap-3">
						<span class="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-ink-400" aria-hidden="true"
						></span>
						<span>Magyar nyelvű, egyetemi minőségbiztosítás</span>
					</li>
					<li class="flex gap-3">
						<span class="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-ink-400" aria-hidden="true"
						></span>
						<span>Egyéni haladás, tanúsítványos zárás</span>
					</li>
				</ul>
			</div>

			<div class="rounded-2xl bg-ink-950 p-8 text-white ring-1 ring-accent-400/40">
				<div class="inline-flex items-center gap-2 rounded-full bg-accent-400 px-3 py-1 text-xs font-semibold tracking-wider text-ink-950 uppercase">
					AIGTL prémium
				</div>
				<h3 class="mt-4 text-xl font-semibold tracking-tight text-white">
					Menedzsment, motiváció, megfelelés
				</h3>
				<p class="mt-2 text-sm text-ink-300">
					A cég nem kap „egy linket a képzéshez”. Mi tesszük auditálhatóvá és menedzselhetővé az
					egész folyamatot.
				</p>
				<ul class="mt-6 space-y-3 text-sm text-ink-200">
					<li class="flex gap-3">
						<span class="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-accent-400" aria-hidden="true"
						></span>
						<span>Motivációs Kick‑off workshop csapatokra szabva</span>
					</li>
					<li class="flex gap-3">
						<span class="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-accent-400" aria-hidden="true"
						></span>
						<span>Rendszeres szakmai konzultáció szenior szakértőkkel</span>
					</li>
					<li class="flex gap-3">
						<span class="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-accent-400" aria-hidden="true"
						></span>
						<span>Záróvizsga adminisztráció, tanúsítványkezelés</span>
					</li>
					<li class="flex gap-3">
						<span class="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-accent-400" aria-hidden="true"
						></span>
						<span>HR Vizsgakövető Dashboard, jelentések</span>
					</li>
				</ul>
			</div>
		</div>
	</div>
</section>

<!-- Dashboard preview -->
<section id="dashboard" class="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
	<div class="grid gap-10 lg:grid-cols-12 lg:gap-14">
		<div class="lg:col-span-5">
			<div class="text-xs font-semibold tracking-widest text-ink-500 uppercase">
				HR Vizsgakövető Dashboard
			</div>
			<h2 class="mt-3 text-3xl font-semibold tracking-tight text-ink-900 md:text-4xl">
				Egy kattintás a hatósági megfelelőség.
			</h2>
			<p class="mt-4 text-base leading-relaxed text-ink-600">
				Valós idejű vezetői felület: ki hol tart, kinél van megakadás, mi a lezárás előtti státusz.
				Egyetlen exportálható riport a menedzsmentnek, szükség esetén a hatóságnak is.
			</p>
			<ul class="mt-6 space-y-3 text-sm text-ink-700">
				<li class="flex gap-3">
					<span class="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-accent-500" aria-hidden="true"
					></span>
					<span>Egyéni és csoportos haladás nyomon követése</span>
				</li>
				<li class="flex gap-3">
					<span class="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-accent-500" aria-hidden="true"
					></span>
					<span>Automatikus emlékeztetők és eszkalációk</span>
				</li>
				<li class="flex gap-3">
					<span class="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-accent-500" aria-hidden="true"
					></span>
					<span>Igazolható megfelelés, exportálható PDF/CSV</span>
				</li>
			</ul>
		</div>

		<!-- Stylised dashboard preview (placeholder, later replaced with real screenshot) -->
		<div class="lg:col-span-7">
			<div class="relative rounded-2xl border border-ink-100 bg-white p-4 shadow-[0_30px_60px_-40px_rgba(11,18,32,0.35)]">
				<div class="flex items-center gap-2 border-b border-ink-100 px-2 pb-3">
					<span class="h-2.5 w-2.5 rounded-full bg-ink-200"></span>
					<span class="h-2.5 w-2.5 rounded-full bg-ink-200"></span>
					<span class="h-2.5 w-2.5 rounded-full bg-ink-200"></span>
					<span class="ml-3 text-xs text-ink-500">HR Vizsgakövető · aigtl.hu/hr</span>
				</div>

				<div class="grid gap-4 p-4 sm:grid-cols-3">
					<div class="rounded-lg bg-ink-50 p-4">
						<div class="text-xs text-ink-500">Regisztrált dolgozó</div>
						<div class="mt-1 text-2xl font-semibold text-ink-900">184 / 210</div>
					</div>
					<div class="rounded-lg bg-ink-50 p-4">
						<div class="text-xs text-ink-500">Alapkurzus teljesítve</div>
						<div class="mt-1 text-2xl font-semibold text-ink-900">142</div>
					</div>
					<div class="rounded-lg bg-accent-50 p-4">
						<div class="text-xs text-accent-500">Sikeres záróvizsga</div>
						<div class="mt-1 text-2xl font-semibold text-ink-900">128</div>
					</div>
				</div>

				<div class="p-4">
					<div class="mb-3 flex items-center justify-between text-xs text-ink-500">
						<span>Haladás osztályonként</span>
						<span>Frissítve 2 perce</span>
					</div>
					<div class="space-y-3">
						{#each [
							{ dept: 'Értékesítés', pct: 92 },
							{ dept: 'Pénzügy', pct: 78 },
							{ dept: 'HR', pct: 88 },
							{ dept: 'Ügyfélszolgálat', pct: 64 },
							{ dept: 'IT / Üzemeltetés', pct: 71 }
						] as row, i (i)}
							<div>
								<div class="mb-1 flex items-center justify-between text-xs text-ink-600">
									<span>{row.dept}</span>
									<span class="font-medium text-ink-900">{row.pct}%</span>
								</div>
								<div class="h-2 w-full overflow-hidden rounded-full bg-ink-100">
									<div
										class="h-full rounded-full bg-ink-900"
										style="width: {row.pct}%"
									></div>
								</div>
							</div>
						{/each}
					</div>
				</div>

				<div class="flex items-center justify-between border-t border-ink-100 px-4 py-3 text-xs">
					<span class="text-ink-500">Megfelelőségi riport</span>
					<span
						class="inline-flex items-center gap-2 rounded-md bg-ink-900 px-3 py-1.5 font-medium text-white"
					>
						Exportálás PDF‑ként
					</span>
				</div>
			</div>
			<p class="mt-3 text-xs text-ink-400">
				Illusztráció. A végleges dashboard partneri környezetbe integrálva jelenik meg.
			</p>
		</div>
	</div>
</section>

<!-- HR AI modul -->
<section class="border-t border-ink-100 bg-ink-50/40">
	<div class="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
		<div class="max-w-3xl">
			<div class="text-xs font-semibold tracking-widest text-ink-500 uppercase">
				Kiemelt HR modul
			</div>
			<h2 class="mt-3 text-3xl font-semibold tracking-tight text-ink-900 md:text-4xl">
				AI a HR osztály <em>saját</em> működésében.
			</h2>
			<p class="mt-4 text-lg leading-relaxed text-ink-600">
				Miközben a HR gondoskodik a cégszintű képzésről, a saját folyamataiban is jelentős
				hatékonyságjavulást tud elérni, kockázatok tudatos kezelésével.
			</p>
		</div>

		<div class="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
			<FeatureCard
				icon="hr"
				title="Toborzás és előszűrés"
				description={`Adminisztráció‑csökkentés, önéletrajz‑kezelés, előszűrés. Bias‑tudatos, <a class="link-brand" href="https://eur-lex.europa.eu/eli/reg/2024/1689/oj/eng" target="_blank" rel="noopener">EU AI Act</a>‑konform módon.`}
			/>
			<FeatureCard
				icon="users"
				title="Onboarding 2.0"
				description="Belső AI asszisztensek új belépőknek: rövidebb betanulási idő, egyenletesebb kezdés."
			/>
			<FeatureCard
				icon="chart"
				title="Fluktuáció és kiégés"
				description="Prediktív modellek felelős használata a lemorzsolódás és kiégés korai felismerésére."
			/>
			<FeatureCard
				icon="certificate"
				title="Vállalati Digitális Iker"
				description="Kulcspozíciók tudásának digitális megőrzése, csökkentett kulcsember‑kitettség."
			/>
		</div>
	</div>
</section>

<StepFlow
	label="Bevezetési folyamat"
	steps={[
		{
			title: '1. Célcsoport meghatározása',
			description:
				'Közösen kiválasztjuk az érintett dolgozói kört és a képzési határidőket a jogszabályi kockázat alapján.'
		},
		{
			title: '2. Kick‑off és képzés',
			description:
				'Motivációs Kick‑off workshop, Neumann Alapkurzus önálló elvégzése, közben rendszeres szakértői konzultáció.'
		},
		{
			title: '3. Vizsga és igazolás',
			description:
				'Záróvizsga adminisztráció, tanúsítványkezelés, HR Vizsgakövető Dashboardból egykattintásos megfelelőségi riport.'
		}
	]}
/>

<Cta
	title="Egy 30 perces beszélgetésen megmutatjuk a dashboardot élőben."
	description="Áttekintjük a HR jelenlegi kötelezettségeit, becslést adunk az érintett létszámra és időzítésre, és összeállítjuk a csomagot, amit a vezetés elé tudsz vinni."
	primaryLabel="HR konzultáció foglalása"
	primaryHref="/kapcsolat?tema=hr"
	secondaryLabel="Governance pillér"
	secondaryHref="/eu-ai-act"
/>
