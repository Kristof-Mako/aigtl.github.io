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
			area: 'Ügyfélszolgálat',
			title: 'Első vonalas válaszok támogatása',
			benefit:
				'Belső tudásbázisra épített asszisztensek: gyorsabb válaszidő, alacsonyabb ticketvolumen.'
		},
		{
			area: 'Pénzügy',
			title: 'Számla- és dokumentumkezelés',
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
			title: 'Előkészített ügyfél-insightok',
			benefit: 'Gyorsabb prospect-kutatás, releváns ajánlatok, magasabb konverzió.'
		},
	];
</script>

<svelte:head>
	<title>Középvezetői AI workshop és use-case tervezés | AIGTL</title>
</svelte:head>

<PillarHero
	eyebrow="2. pillér · Adopció"
	title="Az AI-bevezetés a középvezetőkön áll vagy bukik: tegyük őket a szervezeti változás motorjává"
	lead="A vállalati AI-projektek megvalósításakor a leggyakoribb akadály nem a szoftverek hiányossága, hanem a humán bizonytalanság. A középvezetők féltik csapataik létszámát, az operatív kontrollt és a megszokott munkafolyamatokat. A mi munkánk az, hogy ezt a félelmet partnerségre fordítsuk, és a vezetőkkel közösen azonosítsuk azokat a folyamatelemeket, ahol az automatizáció azonnal érdemi munkaórákat szabadít fel."
	primary={{ label: 'Foglalj workshopot a csapatodnak', href: resolve('/kapcsolat?tema=workshop') }}
	secondary={{ label: 'Nézd meg a use-case-eket', href: '#use-cases' }}
	bullets={[
		'Use-case azonosítás a napi működésből',
		'30 napos ROI és prioritizálás',
		'Változáskezelés a középvezetői ellenállás leküzdésére',
		'AI Ranger program a belső tudás fenntartására'
	]}
	variant="action"
	circuitVariant="workshop"
/>

<TrustBar variant="light" />

<!-- Kinek szól -->
<section class="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
	<div class="grid gap-10 lg:grid-cols-3 lg:gap-14">
		<div class="lg:col-span-1">
			<div class="text-xs font-semibold tracking-widest text-[var(--color-text-subtle)] uppercase">Kinek szól</div>
			<h2 class="mt-3 text-2xl font-semibold tracking-tight text-[var(--color-text)] md:text-3xl">
				COO · divízió- és csoportvezetők
			</h2>
		</div>
		<div class="lg:col-span-2">
			<div class="grid gap-4 sm:grid-cols-2">
				<div class="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-alt)] p-6">
					<div class="text-xs font-semibold tracking-wider text-[var(--color-text-subtle)] uppercase">A félelem</div>
					<p class="mt-3 text-sm text-[var(--color-text-muted)]">
						„Ha bevezetjük az AI-t, a csapatom úgy érzi, kiváltják őket, és én maradok a
						hibáztatott.”
					</p>
				</div>
				<div class="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-alt)] p-6">
					<div class="text-xs font-semibold tracking-wider text-[var(--color-text-subtle)] uppercase">A kérdés</div>
					<p class="mt-3 text-sm text-[var(--color-text-muted)]">
						„Mely 2-3 folyamattal érdemes elkezdeni, hogy 60 napon belül látható eredmény
						legyen?”
					</p>
				</div>
				<div class="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-alt)] p-6">
					<div class="text-xs font-semibold tracking-wider text-[var(--color-text-subtle)] uppercase">A cél</div>
					<p class="mt-3 text-sm text-[var(--color-text-muted)]">
						Csapatszintű bevonás, kézzelfogható Quick Win-ek, és önállóan tovább vihető AI
						Champion-ok.
					</p>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Modulok -->
<section class="border-t border-[var(--color-border)] bg-[var(--color-surface-alt)]">
	<div class="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
		<div class="max-w-3xl">
			<div class="text-xs font-semibold tracking-widest text-[var(--color-text-subtle)] uppercase">
				Workshop modulok
			</div>
			<h2 class="mt-3 text-3xl font-semibold tracking-tight text-[var(--color-text)] md:text-4xl">
				Nem előadás, hanem vezetői workshop.
			</h2>
			<p class="mt-4 text-lg leading-relaxed text-[var(--color-text-muted)]">
				A workshop során a résztvevők a saját folyamataikra dolgoznak. Konkrét,
				megvalósítható tervet visznek haza, nem csak inspirációt.
			</p>
		</div>

		<div class="mt-6 flex flex-wrap gap-3 text-sm font-semibold text-[var(--color-text-muted)]">
			<span class="rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-2">1 nap vagy 2 fél nap</span>
		</div>

		<div class="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
			<FeatureCard
				icon="shield"
				title="A vezetői keret átvétele"
				description="Közös AI-nyelv, játékszabályok és a digitális kollégák kerete."
			/>
			<FeatureCard
				icon="policy"
				title="AI-műveltség és EU AI Act"
				description="A csapat munkáját érintő tudás és felelős használat."
			/>
			<FeatureCard
				icon="users"
				title="Bevonás és változásvezetés"
				description="Ellenállás, hiteles kommunikáció, eltérő AI-érettség."
			/>
			<FeatureCard
				icon="lightbulb"
				title="Use-case kártyák"
				description="Saját probléma, jelenlegi folyamat, mérőszám és első lépés."
			/>
			<FeatureCard
				icon="workflow"
				title="Digitális kolléga feladatleírása"
				description="Feladatok, korlátok és üzlet-HR-IT egyeztetési pontok."
			/>
			<FeatureCard
				icon="chart"
				title="ROI-becslés és rangsorolás"
				description="Hatás és erőfeszítés; konzervatív és reális forgatókönyv."
			/>
			<FeatureCard
				icon="users"
				title="Beszélgetések a kollégákkal"
				description="Ötletgyűjtés, szerepváltozás és nehéz beszélgetések gyakorlása."
			/>
			<FeatureCard
				icon="shield"
				title="Hibakezelés és közös mérés"
				description="Emberi ellenőrzés, felszabaduló idő és eredménymutatók."
			/>
			<FeatureCard
				icon="trophy"
				title="30-60-90 napos csapatterv"
				description="Lépések felelőssel, a Champion program bemutatása."
			/>
		</div>
	</div>
</section>

<!-- Use case grid -->
<section id="use-cases" class="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
	<div class="mb-10 max-w-3xl">
		<div class="text-xs font-semibold tracking-widest text-[var(--color-text-subtle)] uppercase">Use-case-ek</div>
		<h2 class="mt-3 text-3xl font-semibold tracking-tight text-[var(--color-text)] md:text-4xl">
			Ezek azok a területek, ahol a Quick Win-ek megjelennek.
		</h2>
		<p class="mt-4 text-lg leading-relaxed text-[var(--color-text-muted)]">
			A workshopon nem a listából választunk: a résztvevők saját folyamataikat térképezik fel.
			Ezek csak orientáló minták, hogy mire számíthatsz.
		</p>
	</div>

	<div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
		{#each useCases as uc, i (i)}
			<article class="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
				<div class="text-xs font-semibold tracking-wider text-[var(--color-primary)] uppercase">
					{uc.area}
				</div>
				<h3 class="mt-3 text-base font-semibold tracking-tight text-[var(--color-text)]">{uc.title}</h3>
				<p class="mt-2 text-sm leading-relaxed text-[var(--color-text-muted)]">{uc.benefit}</p>
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
				'Fókuszált egynapos workshop: ellenálláskezelés, use-case azonosítás, ROI-rangsor, akcióterv.'
		},
		{
			title: '3. Külön választható folytatás',
			description:
				'A külön díjas 30 napos pilot-támogatási csomag és az opcionális AI Champion program a workshop után választható.'
		}
	]}
/>

<!-- Folytatás a workshop után -->
<section class="border-t border-[var(--color-border)] bg-[var(--color-surface-alt)]">
	<div class="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
		<div class="max-w-3xl">
			<div class="text-xs font-semibold tracking-widest text-[var(--color-text-subtle)] uppercase">
				Választható folytatás
			</div>
			<h2 class="mt-3 text-3xl font-semibold tracking-tight text-[var(--color-text)] md:text-4xl">
				A műhelytől a csapat működéséig
			</h2>
			<p class="mt-4 text-lg leading-relaxed text-[var(--color-text-muted)]">
				Az alap workshop különálló program. A pilot-támogatás külön díjas csomag, az AI Champion program pedig opcionális folytatás.
			</p>
		</div>

		<div class="mt-10 grid gap-6 md:grid-cols-3">
			<article class="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
				<h3 class="text-lg font-semibold tracking-tight text-[var(--color-text)]">Alap workshop</h3>
				<p class="mt-3 text-sm leading-relaxed text-[var(--color-text-muted)]">
					1 nap vagy 2 fél nap. Saját vállalati esetek.
				</p>
			</article>
			<article class="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
				<h3 class="text-lg font-semibold tracking-tight text-[var(--color-text)]">
					Külön díjas 30 napos pilot-támogatási csomag
				</h3>
				<p class="mt-3 text-sm leading-relaxed text-[var(--color-text-muted)]">
					Egynapos műhely kiegészítve 4 hetes szakértői mentorálással és heti strukturált konzultációkkal.
				</p>
				<p class="mt-3 text-sm leading-relaxed text-[var(--color-text-muted)]">
					A kiválasztott 2 kiemelt folyamat éles gyakorlati bevezetése és finomhangolása a csapatban.
				</p>
			</article>
			<article class="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
				<h3 class="text-lg font-semibold tracking-tight text-[var(--color-text)]">
					Opcionális AI Champion program
				</h3>
				<p class="mt-3 text-sm leading-relaxed text-[var(--color-text-muted)]">
					Önként jelentkező, motivált munkatársak felkészítése az AI helyi alkalmazásának támogatására.
					Vezetők és más munkatársak egyaránt részt vehetnek; a működéshez mandátum, védett idő és
					szakmai támogatás szükséges.
				</p>
			</article>
		</div>
	</div>
</section>

<section
	id="gyakori-kerdesek"
	class="border-t px-6 py-16 lg:px-10 lg:py-24"
	style="border-color: var(--color-border); background-color: var(--color-surface-alt); color: var(--color-text);"
>
	<div class="mx-auto max-w-7xl">
		<h2 class="text-3xl font-semibold tracking-tight md:text-4xl">Gyakori kérdések és válaszok</h2>
		<div class="mt-10 grid gap-6 md:grid-cols-2">
			<article class="rounded-2xl border p-6" style="border-color: var(--color-border); background-color: var(--color-surface);">
				<h3 class="text-lg font-semibold">Milyen előfeltételei vannak a programnak?</h3>
				<p class="mt-3 text-sm leading-relaxed" style="color: var(--color-text-muted);">
					Nem szükséges programozói előképzettség. Sem külön vezetői workshopon való részvétel, sem már meglévő vállalati AI-keretrendszer nem előfeltétel.
				</p>
			</article>
			<article class="rounded-2xl border p-6" style="border-color: var(--color-border); background-color: var(--color-surface);">
				<h3 class="text-lg font-semibold">Hogyan becsüljük meg a megtérülést?</h3>
				<p class="mt-3 text-sm leading-relaxed" style="color: var(--color-text-muted);">
					Külön kezeljük a felszabaduló munkaidőt és a tényleges pénzügyi megtakarítást. A számítás tartalmazza a licencek, a bevezetés, a felügyelet és a hibajavítás költségeit.
				</p>
			</article>
			<article class="rounded-2xl border p-6" style="border-color: var(--color-border); background-color: var(--color-surface);">
				<h3 class="text-lg font-semibold">Milyen kontrollokat tartalmaz a digitális kolléga feladatleírása?</h3>
				<p class="mt-3 text-sm leading-relaxed" style="color: var(--color-text-muted);">
					Meghatározza a feladatot és a hozzáféréseket, rögzíti a korlátokat, az emberi ellenőrzést, az incidenskezelést és a leállítás módját.
				</p>
			</article>
			<article class="rounded-2xl border p-6" style="border-color: var(--color-border); background-color: var(--color-surface);">
				<h3 class="text-lg font-semibold">Hol tartható a workshop?</h3>
				<p class="mt-3 text-sm leading-relaxed" style="color: var(--color-text-muted);">
					Budapesten vagy országos kiszállással.
				</p>
			</article>
		</div>
	</div>
</section>

<Cta
	title="A jól levezetett workshop biztosítja, hogy a pilotprojekt felszálljon, ne pedig lezuhanjon"
	description="Ha a csapat maga fedezi fel a use-case-eket és tervezi meg a bevezetést, sokkal nagyobb eséllyel áll melléd a végrehajtásban is. Foglaljunk időpontot egy előkészítő beszélgetésre."
	primaryLabel="Workshop foglalása"
	primaryHref={resolve('/kapcsolat?tema=workshop')}
	secondaryLabel="Nézd meg a governance pillért"
	secondaryHref={resolve('/eu-ai-act')}
/>
