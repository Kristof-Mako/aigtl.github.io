<script lang="ts">
	import { resolve } from '$app/paths';
	import PillarHero from '$lib/components/PillarHero.svelte';
	import FeatureCard from '$lib/components/FeatureCard.svelte';
	import TrustBar from '$lib/components/TrustBar.svelte';
	import Cta from '$lib/components/Cta.svelte';
</script>

<svelte:head>
	<title>EU AI Act megfelelőség és vállalati AI governance | AIGTL</title>
	<meta
		name="description"
		content="EU AI Act megfelelőség 50–500 fős cégeknek: Shadow AI audit, belső szabályzat és vezetői kockázatkezelés az AIGTL szakértőivel."
	/>
</svelte:head>

<PillarHero
	eyebrow="1. pillér · Governance"
	title="EU AI Act és a vállalati AI-használat kockázatai."
	lead={`Az <a class="link-brand-invert" href="https://eur-lex.europa.eu/eli/reg/2024/1689/oj/eng" target="_blank" rel="noopener">EU AI Act</a> alkalmazása a konkrét AI-rendszertől és annak használati helyzetétől függ. Az AIGTL támogatja a vállalati AI-használat feltérképezését, a kockázatok áttekintését és a belső AI-szabályzat kialakítását.`}
	primary={{ label: 'Kapcsolatfelvétel', href: resolve('/kapcsolat?tema=governance') }}
	secondary={{ label: 'Tudástár megtekintése', href: resolve('/tudastar') }}
	bullets={[
		'2 hetes Shadow AI audit mérhető eredménnyel',
		'Vállalati AI szabályzat és belső AI-nyilvántartás',
		'AI-kockázatok áttekintése a szervezet használati helyzetéhez igazítva',
		'Azonnal jelentkező licenc- és költségmegtakarítás'
	]}
	variant="trust"
	circuitVariant="governance"
/>

<TrustBar variant="light" />

<section class="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
	<div class="grid gap-10 lg:grid-cols-3 lg:gap-14">
		<div class="lg:col-span-1">
			<div class="text-xs font-semibold tracking-widest text-[var(--color-text-subtle)] uppercase">Kinek szól</div>
			<h2 class="mt-3 text-2xl font-semibold tracking-tight text-[var(--color-text)] md:text-3xl">
				CEO · CFO · jogtanácsos · CIO · CISO
			</h2>
			<p class="mt-4 text-base leading-relaxed text-[var(--color-text-muted)]">
				A vállalat AI-használatának áttekintéséhez érdemes feltérképezni az alkalmazásokat, a folyamatokat és az érintett szerepköröket. Ez a pillér a kockázatok és a belső irányítási keretek áttekintésére szolgál.
			</p>
		</div>
		<div class="lg:col-span-2">
			<div class="grid gap-4 sm:grid-cols-2">
				<div class="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-alt)] p-6">
					<div class="text-xs font-semibold tracking-wider text-[var(--color-text-subtle)] uppercase">A félelem</div>
					<p class="mt-3 text-sm text-[var(--color-text-muted)]">
						„Nem látom át, milyen AI-eszközöket használnak a munkatársak, és milyen adatokat osztanak meg velük.”
					</p>
				</div>
				<div class="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-alt)] p-6">
					<div class="text-xs font-semibold tracking-wider text-[var(--color-text-subtle)] uppercase">A kérdés</div>
					<p class="mt-3 text-sm text-[var(--color-text-muted)]">
						„Milyen AI-szabályzattal és nyilvántartással tudnám áttekinteni a vállalat AI-használatát?”
					</p>
				</div>
				<div class="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-alt)] p-6">
					<div class="text-xs font-semibold tracking-wider text-[var(--color-text-subtle)] uppercase">A cél</div>
					<p class="mt-3 text-sm text-[var(--color-text-muted)]">
						Tiszta struktúra, dokumentált folyamatok és átlátható kép a licenc-portfólióról.
					</p>
				</div>
			</div>
		</div>
	</div>
</section>

<section class="border-t border-[var(--color-border)] bg-[var(--color-surface-alt)]">
	<div class="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
		<div class="max-w-3xl">
			<div class="text-xs font-semibold tracking-widest text-[var(--color-text-subtle)] uppercase">Governance modulok</div>
			<h2 class="mt-3 text-3xl font-semibold tracking-tight text-[var(--color-text)] md:text-4xl">
				A vezetői governance program mérhető mérföldkövei és átadandói
			</h2>
			<p class="mt-4 text-lg leading-relaxed text-[var(--color-text-muted)]">
				A program strukturált, fázisokra bontott vizsgálati folyamatot követ, amely konkrét fizikai és digitális eszközöket ad a menedzsment kezébe:
			</p>
		</div>

		<div class="mt-12 grid gap-6 md:grid-cols-2">
			<FeatureCard
				icon="audit"
				title="Shadow AI és eszközleltár"
				description="Teljes körű vállalati AI leltár és kockázati kitettségi jegyzőkönyv."
			/>
			<FeatureCard
				icon="inventory"
				title="Rendszerszintű kockázati besorolás"
				description="Kockázati besorolási térkép és adatvédelmi hatásvizsgálati (DPIA) javaslat."
			/>
			<FeatureCard
				icon="policy"
				title="Belső AI szabályzat és felelősségi protokoll"
				description="Hatályos vállalati AI szabályzat vezetői felelősségi mátrixszal."
			/>
			<FeatureCard
				icon="chart"
				title="EU AI Act 4. cikk szerinti AI-műveltségi felkészítés"
				description="Az AI-műveltségi intézkedéseket a szervezet használati helyzetéhez és kockázataihoz kell igazítani."
			/>
		</div>
	</div>
</section>

<!-- Esettanulmányok és eredményadatok csak alátámasztott, közzétételre engedélyezett bizonyíték alapján kerülhetnek ide. -->


<Cta
	title="Első lépés: AI-kockázati konzultáció."
	description="A konzultáció keretében áttekintjük vállalata aktuális technológiai kitettségét."
	primaryLabel="Kapcsolatfelvétel"
	primaryHref={resolve('/kapcsolat?tema=governance')}
	secondaryLabel="Kapcsolódó tudástár"
	secondaryHref={resolve('/tudastar?filter=jogi')}
/>
