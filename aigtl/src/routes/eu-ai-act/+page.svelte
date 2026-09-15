<script lang="ts">
	import { resolve } from '$app/paths';
	import PillarHero from '$lib/components/PillarHero.svelte';
	import FeatureCard from '$lib/components/FeatureCard.svelte';
	import TrustBar from '$lib/components/TrustBar.svelte';
	import StepFlow from '$lib/components/StepFlow.svelte';
	import Cta from '$lib/components/Cta.svelte';
</script>

<svelte:head>
	<title>EU AI Act megfelelőség és vállalati AI governance | AIGTL</title>
	<meta
		name="description"
		content="AI‑leltár, Shadow AI audit, vállalati AI szabályzat, EU AI Act megfelelés és licenc‑optimalizálás. A CEO, CFO, jogtanácsos és CISO nyelvén."
	/>
</svelte:head>

<PillarHero
	eyebrow="1. pillér · Governance"
	title="Az AI kockázatot vezetői kontrollrendszerré alakítjuk."
	lead={`Az <a class="link-brand-invert" href="https://eur-lex.europa.eu/eli/reg/2024/1689/oj/eng" target="_blank" rel="noopener">EU AI Act</a>, a Shadow AI és a licencköltségek együtt vezetői felelősséggé váltak. Az AIGTL a jogi bizonytalanságból auditálható, dokumentált kontrollrendszert épít, már az első 90 napban.`}
	primary={{ label: 'Ingyenes AI‑kockázati konzultáció', href: resolve('/kapcsolat?tema=governance') }}
	secondary={{ label: '10 pontos Shadow AI checklist', href: resolve('/tudastar') }}
	bullets={[
		'2 hetes Shadow AI audit mérhető eredménnyel',
		'Vállalati AI szabályzat és belső AI‑leltár',
		'<a class="link-brand-invert" href="https://eur-lex.europa.eu/eli/reg/2024/1689/oj/eng" target="_blank" rel="noopener">EU AI Act</a> kockázati besorolás és éves felülvizsgálat',
		'Azonnal jelentkező licenc‑ és költségmegtakarítás'
	]}
	variant="trust"
/>

<TrustBar variant="light" />

<!-- Kinek szól -->
<section class="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
	<div class="grid gap-10 lg:grid-cols-3 lg:gap-14">
		<div class="lg:col-span-1">
			<div class="text-xs font-semibold tracking-widest text-ink-500 uppercase">Kinek szól</div>
			<h2 class="mt-3 text-2xl font-semibold tracking-tight text-ink-900 md:text-3xl">
				CEO · CFO · jogtanácsos · CIO · CISO
			</h2>
			<p class="mt-4 text-base leading-relaxed text-ink-600">
				A vezetőség ma az AI bevezetéssel <strong>közvetlen jogi és pénzügyi felelősséget</strong>
				vállal. Ez a pillér azoknak szól, akik nem a technológiai lelkesedéstől, hanem a bírságtól,
				az adatvédelmi kitettségtől és a kontrollálatlan költségektől szeretnék védeni a céget.
			</p>
		</div>
		<div class="lg:col-span-2">
			<div class="grid gap-4 sm:grid-cols-2">
				<div class="rounded-xl border border-ink-100 bg-ink-50/60 p-6">
					<div class="text-xs font-semibold tracking-wider text-ink-500 uppercase">A félelem</div>
					<p class="mt-3 text-sm text-ink-700">
						„Nem tudom, mit használnak a dolgozók, mibe töltenek fel adatot, és ki a felelős, ha
						baj lesz.”
					</p>
				</div>
				<div class="rounded-xl border border-ink-100 bg-ink-50/60 p-6">
					<div class="text-xs font-semibold tracking-wider text-ink-500 uppercase">A kérdés</div>
					<p class="mt-3 text-sm text-ink-700">
						„Milyen AI‑szabályzattal és nyilvántartással tudnám <em>ma</em> igazolni a
						megfelelést egy audit vagy hatósági ellenőrzés esetén?”
					</p>
				</div>
				<div class="rounded-xl border border-ink-100 bg-ink-50/60 p-6">
					<div class="text-xs font-semibold tracking-wider text-ink-500 uppercase">A cél</div>
					<p class="mt-3 text-sm text-ink-700">
						Tiszta struktúra, dokumentált folyamatok és mérhető megtakarítás a
						licenc‑portfólión, 90 napon belül.
					</p>
				</div>
				<div class="rounded-xl border border-ink-100 bg-ink-50/60 p-6">
					<div class="text-xs font-semibold tracking-wider text-ink-500 uppercase">
						A pszichológia
					</div>
					<p class="mt-3 text-sm text-ink-700">
						Konvertáló motívum: <strong>kockázatcsökkentés és autoritás</strong>. Nem hype, nem
						sürgetés, hanem bizonyítható kontroll.
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
				Governance modulok
			</div>
			<h2 class="mt-3 text-3xl font-semibold tracking-tight text-ink-900 md:text-4xl">
				Öt egymásra épülő szolgáltatás, egyben vagy önállóan is.
			</h2>
			<p class="mt-4 text-lg leading-relaxed text-ink-600">
				A modulok követik az <a
					class="link-brand"
					href="https://eur-lex.europa.eu/eli/reg/2024/1689/oj/eng"
					target="_blank"
					rel="noopener">EU AI Act</a> logikáját: azonosítás → besorolás → szabályozás →
				dokumentálás → felülvizsgálat.
			</p>
		</div>

		<div class="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
			<FeatureCard
				icon="policy"
				title="Szabályozási eligazítás (EU AI Act)"
				description={`A <a class="link-brand" href="https://eur-lex.europa.eu/eli/reg/2024/1689/oj/eng" target="_blank" rel="noopener">jogszabály</a> szintjeinek gyakorlati magyar átfordítása: tiltott gyakorlatok, magas kockázatú rendszerek, korlátozott kockázatú megoldások, a cég valós használati eseteire kivetítve.`}
			/>
			<FeatureCard
				icon="audit"
				title="Shadow AI audit (2 hét)"
				description="Feltárjuk, milyen kontrollálatlan lakossági eszközöket használnak a dolgozók, és milyen belső céges adatok kerülnek ki. Kockázati térkép, remediációs terv, prioritások."
			/>
			<FeatureCard
				icon="shield"
				title="Vállalati AI szabályzat"
				description="Egyértelmű, betartható és számonkérhető belső keretrendszer: engedélyezett eszközök, tiltott adatkörök, jóváhagyási folyamat, incidenskezelés."
			/>
			<FeatureCard
				icon="inventory"
				title="AI Inventory (rendszernyilvántartás)"
				description="Jogszabály által elvárt AI‑leltár és kockázati besorolás elkészítése, felelősök hozzárendelése, éves felülvizsgálati ciklus felállítása."
			/>
			<FeatureCard
				icon="cost"
				title="Licenc‑ és költségoptimalizálás"
				description="Copilot, ChatGPT Enterprise, API‑k és egyéb előfizetések felülvizsgálata. Párhuzamosságok megszüntetése, azonnali, kimutatható megtakarítás."
			/>
			<FeatureCard
				icon="chart"
				title="Vezetői riport és negyedéves review"
				description="Egyszerű, döntéshozói szintű riport az AI‑kitettségről és a governance érettségről. Igazgatósági szintre készített anyagok."
			/>
		</div>
	</div>
</section>

<!-- Számok / adatvezérelt -->
<section class="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
	<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
		<div class="rounded-2xl border border-ink-100 bg-white p-6">
			<div class="text-3xl font-semibold tracking-tight text-ink-900">2 hét</div>
			<div class="mt-2 text-sm text-ink-600">Shadow AI audit átfutási ideje</div>
		</div>
		<div class="rounded-2xl border border-ink-100 bg-white p-6">
			<div class="text-3xl font-semibold tracking-tight text-ink-900">90 nap</div>
			<div class="mt-2 text-sm text-ink-600">
				Auditálható governance keretrendszer felállítása
			</div>
		</div>
		<div class="rounded-2xl border border-ink-100 bg-white p-6">
			<div class="text-3xl font-semibold tracking-tight text-ink-900">1×/év</div>
			<div class="mt-2 text-sm text-ink-600">
				Kötelező AI‑leltár és kockázati besorolás felülvizsgálat
			</div>
		</div>
		<div class="rounded-2xl border border-ink-100 bg-white p-6">
			<div class="text-3xl font-semibold tracking-tight text-ink-900">15–30%</div>
			<div class="mt-2 text-sm text-ink-600">
				Tipikus licenc‑megtakarítás a portfólió átvilágításával
			</div>
		</div>
	</div>
</section>

<StepFlow
	label="Governance folyamat"
	steps={[
		{
			title: '1. Helyzetfelmérés',
			description:
				'Ingyenes 30 perces konzultáció, gyors kockázati térkép a jelenlegi AI‑használatról, Shadow AI kitettségről és licencportfólióról.'
		},
		{
			title: '2. Audit és keretrendszer',
			description:
				'2 hetes Shadow AI audit, AI‑leltár felállítása, kockázati besorolás, belső AI szabályzat kiadása, felelősök kinevezése.'
		},
		{
			title: '3. Fenntartás és review',
			description:
				'Negyedéves vezetői review, éves kötelező felülvizsgálat, incidensek utáni frissítés, folyamatos licenc‑optimalizálás.'
		}
	]}
/>

<Cta
	title="Első lépés: egy 30 perces AI‑kockázati konzultáció."
	description="Áttekintjük a jelenlegi AI‑kitettséget, megnevezzük a 3 legnagyobb rövid távú kockázatot, és javaslatot adunk a 90 napos governance ütemtervre."
	primaryLabel="Konzultáció foglalása"
	primaryHref={resolve('/kapcsolat?tema=governance')}
	secondaryLabel="Kapcsolódó tudástár"
	secondaryHref={resolve('/tudastar?filter=jogi')}
/>
