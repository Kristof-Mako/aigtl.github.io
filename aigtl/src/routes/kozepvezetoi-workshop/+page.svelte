<script lang="ts">
	import { resolve } from '$app/paths';
	import PillarHero from '$lib/components/PillarHero.svelte';
	import FeatureCard from '$lib/components/FeatureCard.svelte';
	import TrustBar from '$lib/components/TrustBar.svelte';
	import StepFlow from '$lib/components/StepFlow.svelte';
	import Cta from '$lib/components/Cta.svelte';

	type UseCase = { area: string; title: string; benefit: string };
	const useCases: UseCase[] = [
		{
			area: 'Riportálás',
			title: 'Vezetői jelentések gyorsítása',
			benefit: 'Havi zárás és menedzsment riport előkészítés akár 60%‑kal rövidebb idő alatt.'
		},
		{
			area: 'Ügyfélszolgálat',
			title: 'Első vonalas válaszok támogatása',
			benefit:
				'Belső tudásbázisra épített asszisztensek: gyorsabb válaszidő, alacsonyabb ticket‑volumen.'
		},
		{
			area: 'Pénzügy',
			title: 'Számla‑ és dokumentumkezelés',
			benefit: 'Adatkinyerés, jóváhagyási folyamat rövidítése, kevesebb manuális hiba.'
		},
		{
			area: 'Belső kommunikáció',
			title: 'Osztályok közötti információáramlás',
			benefit:
				'Összegző asszisztensek meetingekhez, projektstátuszokhoz. Kevesebb elveszett tudás, egyenletesebb átadás.'
		},
		{
			area: 'Értékesítés',
			title: 'Előkészített ügyfél‑insightok',
			benefit: 'Gyorsabb prospect‑kutatás, releváns ajánlatok, magasabb konverzió.'
		},
		{
			area: 'HR és onboarding',
			title: 'Betanulási idő rövidítése',
			benefit: 'Belső AI asszisztens az új belépőknek, tipikusan 30–50%‑os betanulási idő csökkentés.'
		}
	];
</script>

<svelte:head>
	<title>Középvezetői AI workshop és use‑case tervezés | AIGTL</title>
	<meta
		name="description"
		content="Konkrét use‑case‑ek, ROI‑alapú rangsor, AI Champion program. A középvezetői ellenállást partnerségre váltjuk, 50–500 fős magyar cégeknek."
	/>
</svelte:head>

<PillarHero
	eyebrow="2. pillér · Adopció"
	title="Az AI bevezetés nem a technológián, hanem a középvezetőn múlik."
	lead="A workshopjaink a félelmet partnerséggé fordítják: konkrét use‑case‑eket azonosítunk, ROI‑alapon rangsorolunk, és belső AI Championokat képezünk, akik önállóan viszik tovább."
	primary={{ label: 'Foglalj workshopot a csapatodnak', href: resolve('/kapcsolat?tema=workshop') }}
	secondary={{ label: 'Nézd meg a use‑case‑eket', href: '#use-cases' }}
	bullets={[
		'Fókusz a Quick Win use‑case‑eken',
		'ROI‑alapú prioritizálás és ötletszűrés',
		'AI Champion / Ranger program',
		'Agentic AI felkészítés önálló feladatokra'
	]}
	variant="action"
/>

<TrustBar variant="light" />

<!-- Kinek szól -->
<section class="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
	<div class="grid gap-10 lg:grid-cols-3 lg:gap-14">
		<div class="lg:col-span-1">
			<div class="text-xs font-semibold tracking-widest text-ink-500 uppercase">Kinek szól</div>
			<h2 class="mt-3 text-2xl font-semibold tracking-tight text-ink-900 md:text-3xl">
				COO · divízió‑ és csoportvezetők
			</h2>
			<p class="mt-4 text-base leading-relaxed text-ink-600">
				A pilótabuk 90%‑a nem a technológián, hanem <strong>a középvezetői ellenállásán</strong>
				múlik. Ez a pillér azoknak szól, akik érzik: a csapat fenyeget, a vezetőség sürget, és
				szükségük van egy módszertanra, ami mindkét oldalt kezeli.
			</p>
		</div>
		<div class="lg:col-span-2">
			<div class="grid gap-4 sm:grid-cols-2">
				<div class="rounded-xl border border-ink-100 bg-ink-50/60 p-6">
					<div class="text-xs font-semibold tracking-wider text-ink-500 uppercase">A félelem</div>
					<p class="mt-3 text-sm text-ink-700">
						„Ha bevezetjük az AI‑t, a csapatom úgy érzi, kiváltják őket, és én maradok a
						hibáztatott.”
					</p>
				</div>
				<div class="rounded-xl border border-ink-100 bg-ink-50/60 p-6">
					<div class="text-xs font-semibold tracking-wider text-ink-500 uppercase">A kérdés</div>
					<p class="mt-3 text-sm text-ink-700">
						„Mely 2–3 folyamattal érdemes elkezdeni, hogy 60 napon belül látható eredmény
						legyen?”
					</p>
				</div>
				<div class="rounded-xl border border-ink-100 bg-ink-50/60 p-6">
					<div class="text-xs font-semibold tracking-wider text-ink-500 uppercase">A cél</div>
					<p class="mt-3 text-sm text-ink-700">
						Csapatszintű bevonás, kézzelfogható Quick Win‑ek, és önállóan tovább vihető AI
						Champion‑ok.
					</p>
				</div>
				<div class="rounded-xl border border-ink-100 bg-ink-50/60 p-6">
					<div class="text-xs font-semibold tracking-wider text-ink-500 uppercase">
						A pszichológia
					</div>
					<p class="mt-3 text-sm text-ink-700">
						Konvertáló motívum: <strong>partnerség és irányítás</strong>. A vezető nem elváró,
						hanem támogató példamutató lesz.
					</p>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Modulok -->
<section class="border-t border-ink-100 bg-ink-50/40">
	<div class="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
		<div class="max-w-3xl">
			<div class="text-xs font-semibold tracking-widest text-ink-500 uppercase">
				Workshop modulok
			</div>
			<h2 class="mt-3 text-3xl font-semibold tracking-tight text-ink-900 md:text-4xl">
				Nem előadás, hanem vezetői munkaműhely.
			</h2>
			<p class="mt-4 text-lg leading-relaxed text-ink-600">
				A workshop során a résztvevők a saját folyamataikra dolgoznak. Konkrét,
				megvalósítható tervet visznek haza, nem csak inspirációt.
			</p>
		</div>

		<div class="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
			<FeatureCard
				icon="users"
				title="Ellenálláskezelés és változásvezetés"
				description={`A <a class="link-brand" href="https://sensa.hu/" target="_blank" rel="noopener">Sensa</a> szervezetfejlesztési tapasztalatára építve: hogyan válik a középvezető elvárótól hiteles támogatóvá a csapat szemében.`}
			/>
			<FeatureCard
				icon="lightbulb"
				title="Use‑case azonosítás"
				description="Módszertan a repetitív, adminisztratív és hibalehetőségeket rejtő feladatok felkutatására a napi munkafolyamatokból, nem generikus listákból."
			/>
			<FeatureCard
				icon="chart"
				title="ROI‑alapú rangsorolás"
				description="Ötletszűrés: életképtelen ötletek gyors kiszűrése, Quick Win projektek priorizálása mérhető megtérülés alapján."
			/>
			<FeatureCard
				icon="workflow"
				title="Gyakorlati esetpéldák"
				description="Riportálás, ügyfélszolgálat, számla‑ és dokumentumkezelés, belső kommunikáció. Konkrét minták, adaptálható folyamattérképekkel."
			/>
			<FeatureCard
				icon="trophy"
				title="AI Champion / Ranger program"
				description="Belső bajnokok képzése, akik a workshop után önállóan viszik tovább a folyamatoptimalizálást és felkészítik a csapatot az Agentic AI szintre."
			/>
			<FeatureCard
				icon="shield"
				title="Governance‑horgony"
				description="A workshop illeszkedik a vállalati AI szabályzathoz (1. pillér), így az adopció nem termel új Shadow AI kockázatot."
			/>
		</div>
	</div>
</section>

<!-- Use case grid -->
<section id="use-cases" class="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
	<div class="mb-10 max-w-3xl">
		<div class="text-xs font-semibold tracking-widest text-ink-500 uppercase">Use‑case‑ek</div>
		<h2 class="mt-3 text-3xl font-semibold tracking-tight text-ink-900 md:text-4xl">
			Ezek azok a területek, ahol a Quick Win‑ek megjelennek.
		</h2>
		<p class="mt-4 text-lg leading-relaxed text-ink-600">
			A workshopon nem a listából választunk: a résztvevők saját folyamataikat térképezik fel.
			Ezek csak orientáló minták, hogy mire számíthatsz.
		</p>
	</div>

	<div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
		{#each useCases as uc, i (i)}
			<article class="rounded-xl border border-ink-100 bg-white p-6">
				<div class="text-xs font-semibold tracking-wider text-accent-500 uppercase">
					{uc.area}
				</div>
				<h3 class="mt-3 text-base font-semibold tracking-tight text-ink-900">{uc.title}</h3>
				<p class="mt-2 text-sm leading-relaxed text-ink-600">{uc.benefit}</p>
			</article>
		{/each}
	</div>
</section>

<StepFlow
	label="Workshop folyamat"
	steps={[
		{
			title: '1. Előkészítés',
			description:
				'Rövid interjúk a vezetőkkel, folyamattérkép, célok tisztázása. Egyénre és csapatra szabott napirend.'
		},
		{
			title: '2. Munkaműhely nap',
			description:
				'Fókuszált egynapos workshop: ellenálláskezelés, use‑case azonosítás, ROI‑rangsor, akcióterv.'
		},
		{
			title: '3. AI Champion follow‑up',
			description:
				'Kijelölt bajnokok felkészítése, 60 napos coaching, mérhető Quick Win projektek végrehajtása.'
		}
	]}
/>

<Cta
	title="Egy jól levezetett workshop a különbség pilot és pilotbukás között."
	description="Ha a csapat maga fedezi fel a use‑case‑eket és tervezi meg a bevezetést, sokkal nagyobb eséllyel áll melléd a végrehajtásban is. Foglaljunk időpontot egy előkészítő beszélgetésre."
	primaryLabel="Workshop foglalása"
	primaryHref={resolve('/kapcsolat?tema=workshop')}
	secondaryLabel="Nézd meg a governance pillért"
	secondaryHref={resolve('/eu-ai-act')}
/>
