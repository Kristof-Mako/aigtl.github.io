<script lang="ts">
	import { resolve } from '$app/paths';
	import PillarHero from '$lib/components/PillarHero.svelte';
	import FeatureCard from '$lib/components/FeatureCard.svelte';
	import TrustBar from '$lib/components/TrustBar.svelte';
	import StepFlow from '$lib/components/StepFlow.svelte';
	import Cta from '$lib/components/Cta.svelte';
</script>

<svelte:head>
	<title>Vállalati AI alapvizsga és HR AI-műveltség | AIGTL</title>
	<meta
		name="description"
		content="Átlátható képzési nyilvántartás és dokumentált felkészítés a szervezeti AI-műveltség támogatására."
	/>
</svelte:head>

<PillarHero
	eyebrow="3. pillér · AI Literacy"
	title="Hivatalos vállalati AI alapvizsga és HR audit dashboard."
	lead="Az AI-műveltségi intézkedéseket a szervezet használati helyzetéhez és kockázataihoz kell igazítani."
	primary={{ label: 'Kérj HR konzultációt', href: resolve('/kapcsolat?tema=hr') }}
	secondary={{ label: 'Nézd meg a dashboardot', href: '#dashboard' }}
	bullets={[
		'Ingyenes, egyetemileg hitelesített alapkurzus',
		'Indító motivációs workshop és szakértői mentorálás',
		'Átlátható képzési nyilvántartás és dokumentált felkészítés',
		'AI a HR saját folyamataiban (toborzás, onboarding, fluktuáció)'
	]}
	variant="speed"
	circuitVariant="literacy"
/>

<TrustBar variant="light" />

<!-- Kinek szól -->
<section class="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
	<div class="grid gap-10 lg:grid-cols-3 lg:gap-14">
		<div class="lg:col-span-1">
			<div class="text-xs font-semibold tracking-widest text-[var(--color-text-subtle)] uppercase">Kinek szól</div>
			<h2 class="mt-3 text-2xl font-semibold tracking-tight text-[var(--color-text)] md:text-3xl">
				CHRO · HRBP · L&amp;D vezetők
			</h2>
			<p class="mt-4 text-base leading-relaxed text-[var(--color-text-muted)]">
				Az AI-műveltségi intézkedéseket a szervezet használati helyzetéhez és kockázataihoz kell igazítani.
			</p>
		</div>
		<div class="lg:col-span-2">
			<div class="grid gap-4 sm:grid-cols-2">
				<div class="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-alt)] p-6">
					<div class="text-xs font-semibold tracking-wider text-[var(--color-text-subtle)] uppercase">A helyzet</div>
					<p class="mt-3 text-sm text-[var(--color-text-muted)]">
						A vezetés elvárja a megfelelést, a jogszabály él, a HR osztály viszont nem képzési
						cég.
					</p>
				</div>
				<div class="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-alt)] p-6">
					<div class="text-xs font-semibold tracking-wider text-[var(--color-text-subtle)] uppercase">A kérdés</div>
					<p class="mt-3 text-sm text-[var(--color-text-muted)]">
						„Hogyan biztosítom, hogy pár héten belül minden érintett dolgozónk igazolt
						AI-műveltséggel rendelkezik?”
					</p>
				</div>
				<div class="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-alt)] p-6">
					<div class="text-xs font-semibold tracking-wider text-[var(--color-text-subtle)] uppercase">A cél</div>
					<p class="mt-3 text-sm text-[var(--color-text-muted)]">
						Egyszerű, gyors, alacsony költségű megoldás, amit egy lapon be tudsz mutatni a
						vezetésnek.
					</p>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Two-column comparison: Free base vs Premium AIGTL -->
<section class="course-comparison border-t">
	<div class="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
		<div class="max-w-3xl">
			<div class="course-muted text-xs font-semibold tracking-widest uppercase">
				A modell kulcsa
			</div>
			<h2 class="course-title mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
				Ingyenes alap és prémium ráépülés, nem licencdíjas képzés.
			</h2>
			<p class="course-copy mt-4 text-lg leading-relaxed">
				A Neumann Technológiai Platform (MI Koalíció) által gondozott Mesterséges Intelligencia Alapkurzus magyar nyelvű. A tananyag és a záróvizsga díjmentesen hozzáférhető.
			</p>
		</div>

		<div class="mt-12 grid gap-6 lg:grid-cols-2">
			<div class="course-card rounded-2xl p-8">
				<div class="course-badge inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold tracking-wider uppercase">
					Ingyenes alap
				</div>
				<h3 class="course-title mt-4 text-xl font-semibold tracking-tight">
					<a
						class="link-brand"
						href="https://neum.hu/"
						target="_blank"
						rel="noopener">Neumann AI alapkurzus</a>
				</h3>
				<p class="course-copy mt-2 text-sm">
					A Neumann Technológiai Platform által gondozott, magyar nyelvű, ingyenes online kurzus.
				</p>
				<div class="mt-6 space-y-4">
					<div>
						<h4 class="course-title text-sm font-semibold">Alapfogalmak és működési keretek</h4>
						<p class="course-copy mt-1 text-sm">Az algoritmusok logikája, az automatizáció határai és a hallucináció jelensége.</p>
					</div>
					<div>
						<h4 class="course-title text-sm font-semibold">Adatvédelem és szellemi tulajdon</h4>
						<p class="course-copy mt-1 text-sm">GDPR határok, üzleti titkok védelme és a nyilvános felületek kizárása a munkavégzésből.</p>
					</div>
					<div>
						<h4 class="course-title text-sm font-semibold">Hatékony munkavégzés</h4>
						<p class="course-copy mt-1 text-sm">Strukturált utasításadás és folyamattámogatás a napi irodai feladatokban.</p>
					</div>
					<div>
						<h4 class="course-title text-sm font-semibold">Felelős és etikus használat</h4>
						<p class="course-copy mt-1 text-sm">Az emberi felügyelet (Human-in-the-loop) kötelezettsége és az elfogultságok szűrése.</p>
					</div>
				</div>
			</div>

			<div class="course-card course-card-premium rounded-2xl p-8">
				<div class="course-badge course-badge-premium inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold tracking-wider uppercase">
					AIGTL prémium
				</div>
				<h3 class="course-title mt-4 text-xl font-semibold tracking-tight">
					Menedzsment, motiváció, megfelelés
				</h3>
				<p class="course-copy mt-2 text-sm">
					Az AIGTL hozzáadott értéke a teljes körű szervezeti megvalósítás.
				</p>
				<ul class="course-copy mt-6 space-y-3 text-sm">
					<li class="flex gap-3">
						<span class="course-bullet mt-2 h-1.5 w-1.5 flex-none rounded-full" aria-hidden="true"
						></span>
						<span>Indító motivációs workshop (60 perc)</span>
					</li>
					<li class="flex gap-3">
						<span class="course-bullet mt-2 h-1.5 w-1.5 flex-none rounded-full" aria-hidden="true"
						></span>
						<span><strong>Kiscsoportos szakértői mentorálás:</strong> Heti rendszerességű online konzultációk legfeljebb 25 fős csoportokban.</span>
					</li>
					<li class="flex gap-3">
						<span class="course-bullet mt-2 h-1.5 w-1.5 flex-none rounded-full" aria-hidden="true"
						></span>
						<span><strong>Adminisztrációs tehermentesítés:</strong> A meghívók kiküldésétől a regisztrációk kezeléséig és az emlékeztetők kiküldéséig levesszük a terheket a belső HR csapatról.</span>
					</li>
					<li class="flex gap-3">
						<span class="course-bullet mt-2 h-1.5 w-1.5 flex-none rounded-full" aria-hidden="true"
						></span>
						<span>HR vizsgakövető dashboard, jelentések</span>
					</li>
				</ul>
			</div>
		</div>
	</div>
</section>

<style>
	.course-comparison {
		border-color: var(--color-border);
		background-color: var(--color-surface-alt);
		color: var(--color-text);
	}
	.course-card {
		border: 1px solid var(--color-border);
		background-color: var(--color-surface);
	}
	.course-card-premium {
		border-color: var(--color-primary);
		background-color: var(--color-primary);
	}
	.course-badge {
		background-color: var(--color-surface-alt);
		color: var(--color-text);
	}
	.course-badge-premium {
		background-color: var(--color-accent);
		color: var(--color-text);
	}
	.course-title { color: var(--color-text); }
	.course-copy { color: var(--color-text-muted); }
	.course-muted { color: var(--color-text-subtle); }
	.course-bullet {
		background-color: var(--color-accent);
	}
	.course-card-premium .course-title,
	.course-card-premium .course-copy { color: var(--color-on-primary); }
</style>

<!-- Dashboard preview -->
<section id="dashboard" class="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
	<div class="grid gap-10 lg:grid-cols-12 lg:gap-14">
		<div class="lg:col-span-5">
			<div class="text-xs font-semibold tracking-widest text-[var(--color-text-subtle)] uppercase">
				HR vizsgakövető dashboard
			</div>
			<h2 class="mt-3 text-3xl font-semibold tracking-tight text-[var(--color-text)] md:text-4xl">
				Átlátható képzési nyilvántartás és dokumentált felkészítés
			</h2>
			<p class="mt-4 text-base leading-relaxed text-[var(--color-text-muted)]">
				Valós idejű vezetői felület: ki hol tart, kinél van megakadás, mi a lezárás előtti státusz.
				Egyetlen exportálható riport a menedzsmentnek, szükség esetén a hatóságnak is.
			</p>
			<ul class="mt-6 space-y-3 text-sm text-[var(--color-text-muted)]">
				<li class="flex gap-3">
					<span class="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-[var(--color-accent)]" aria-hidden="true"
					></span>
					<span>Egyéni és csoportos haladás nyomon követése</span>
				</li>
				<li class="flex gap-3">
					<span class="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-[var(--color-accent)]" aria-hidden="true"
					></span>
					<span>Automatikus emlékeztetők és eszkalációk</span>
				</li>
				<li class="flex gap-3">
					<span class="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-[var(--color-accent)]" aria-hidden="true"
					></span>
					<span>Átlátható képzési nyilvántartás és dokumentált felkészítés</span>
				</li>
			</ul>
		</div>

		<!-- Stylised dashboard preview (placeholder, later replaced with real screenshot) -->
		<div class="lg:col-span-7">
			<div class="relative rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4 shadow-[0_30px_60px_-40px_var(--color-shadow)]">
				<div class="flex items-center gap-2 border-b border-[var(--color-border)] px-2 pb-3">
					<span class="h-2.5 w-2.5 rounded-full bg-[var(--color-border)]"></span>
					<span class="h-2.5 w-2.5 rounded-full bg-[var(--color-border)]"></span>
					<span class="h-2.5 w-2.5 rounded-full bg-[var(--color-border)]"></span>
					<span class="ml-3 text-xs text-[var(--color-text-subtle)]">HR vizsgakövető · aigtl.hu/hr</span>
				</div>

				<div class="grid gap-4 p-4 sm:grid-cols-3">
					<div class="rounded-lg bg-[var(--color-surface-alt)] p-4">
						<div class="text-xs text-[var(--color-text-subtle)]">Regisztrált dolgozó</div>
						<div class="mt-1 text-2xl font-semibold text-[var(--color-text)]">184 / 210</div>
					</div>
					<div class="rounded-lg bg-[var(--color-surface-alt)] p-4">
						<div class="text-xs text-[var(--color-text-subtle)]">Alapkurzus teljesítve</div>
						<div class="mt-1 text-2xl font-semibold text-[var(--color-text)]">142</div>
					</div>
					<div class="rounded-lg bg-[var(--color-surface-alt)] p-4">
						<div class="text-xs text-[var(--color-primary)]">Sikeres záróvizsga</div>
						<div class="mt-1 text-2xl font-semibold text-[var(--color-text)]">128</div>
					</div>
				</div>

				<div class="p-4">
					<div class="mb-3 flex items-center justify-between text-xs text-[var(--color-text-subtle)]">
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
								<div class="mb-1 flex items-center justify-between text-xs text-[var(--color-text-muted)]">
									<span>{row.dept}</span>
									<span class="font-medium text-[var(--color-text)]">{row.pct}%</span>
								</div>
								<div class="h-2 w-full overflow-hidden rounded-full bg-[var(--color-surface-alt)]">
									<div
										class="h-full rounded-full bg-[var(--color-primary)]"
										style="width: {row.pct}%"
									></div>
								</div>
							</div>
						{/each}
					</div>
				</div>

				<div class="flex items-center justify-between border-t border-[var(--color-border)] px-4 py-3 text-xs">
					<span class="text-[var(--color-text-subtle)]">Megfelelőségi riport</span>
					<span
						class="inline-flex items-center gap-2 rounded-md bg-[var(--color-primary)] px-3 py-1.5 font-medium text-[var(--color-on-primary)]"
					>
						Exportálás PDF-ként
					</span>
				</div>
			</div>
			<p class="mt-3 text-xs text-[var(--color-text-subtle)]">
				Illusztráció. A végleges dashboard partneri környezetbe integrálva jelenik meg.
			</p>
		</div>
	</div>
</section>

<!-- ÁTTEKINTENDŐ KÖZZÉTÉTEL ELŐTT: A felsorolt képességeket, működési státuszt, megfelelőségi és tanúsítási állításokat még ellenőrizni kell a szolgáltatóval. A teljes szekció külön eltávolítható. -->
<section
	id="technikai-hatter-integracio"
	class="border-t px-6 py-16 lg:px-10 lg:py-24"
	style="background-color: var(--color-surface-alt); color: var(--color-text); border-color: var(--color-border);"
>
	<div class="mx-auto max-w-7xl">
		<div class="max-w-3xl">
			<h2 class="text-3xl font-semibold tracking-tight md:text-4xl">
				Technikai háttér és HR rendszerek integrációja
			</h2>
			<p class="mt-4 text-lg leading-relaxed" style="color: var(--color-text-muted);">
				A felügyeleti dashboard nem képez különálló szoftversilót, hanem közvetlenül támogatja a meglévő vállalati infrastruktúrát:
			</p>
		</div>

		<div class="mt-10 grid gap-6 md:grid-cols-3">
			<div
				class="rounded-2xl border p-6"
				style="background-color: var(--color-surface); border-color: var(--color-border);"
			>
				<h3 class="text-lg font-semibold">Exportok és integrációk</h3>
				<p class="mt-3 text-sm leading-relaxed" style="color: var(--color-text-muted);">
					LMS és HRIS kompatibilitás: Egykattintásos CSV és XLSX adatexport, közvetlen REST API integrációs lehetőség a vezető vállalati rendszerekhez (Workday, SAP SuccessFactors, Cornerstone).
				</p>
			</div>
			<div
				class="rounded-2xl border p-6"
				style="background-color: var(--color-surface); border-color: var(--color-border);"
			>
				<h3 class="text-lg font-semibold">Biztonság és hozzáférés</h3>
				<p class="mt-3 text-sm leading-relaxed" style="color: var(--color-text-muted);">
					Vállalati egyszeri bejelentkezés (SSO / SAML 2.0 / Microsoft Entra ID) támogatás és szerepkör-alapú jogosultságkezelés.
				</p>
			</div>
			<div
				class="rounded-2xl border p-6"
				style="background-color: var(--color-surface); border-color: var(--color-border);"
			>
				<h3 class="text-lg font-semibold">Adatfeldolgozás és tárhely</h3>
				<p class="mt-3 text-sm leading-relaxed" style="color: var(--color-text-muted);">
					Teljes körű GDPR-megfelelőség és adatfeldolgozói szerződés (DPA), auditált európai felhőinfrastruktúra (Frankfurt/EU, ISO/IEC 27001 tanúsított adatközpont), kizárólag a képzési nyilvántartáshoz szükséges minimális adatok kezelésével.
				</p>
			</div>
		</div>
	</div>
</section>
<!-- ÁTTEKINTENDŐ SZEKCIÓ VÉGE -->

<!-- HR AI modul -->
<section class="border-t border-[var(--color-border)] bg-[var(--color-surface-alt)]">
	<div class="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
		<div class="max-w-3xl">
			<div class="text-xs font-semibold tracking-widest text-[var(--color-text-subtle)] uppercase">
				Kiemelt HR-modul
			</div>
			<h2 class="mt-3 text-3xl font-semibold tracking-tight text-[var(--color-text)] md:text-4xl">
				AI a HR osztály <em>saját</em> működésében.
			</h2>
			<p class="mt-4 text-lg leading-relaxed text-[var(--color-text-muted)]">
				Az AI-műveltségi intézkedéseket a szervezet használati helyzetéhez és kockázataihoz kell igazítani.
			</p>
		</div>

		<div class="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
			<FeatureCard
				icon="hr"
				title="Toborzás és előszűrés"
				description="Adminisztráció-csökkentés, önéletrajz-kezelés és előszűrés."
			/>
			<FeatureCard
				icon="users"
				title="Onboarding 2.0"
				description="Belső AI-asszisztensek új belépők támogatására."
			/>
			<FeatureCard
				icon="chart"
				title="Fluktuáció és kiégés"
				description="Prediktív modellek lehetséges HR-alkalmazása a lemorzsolódás és kiégés jeleinek elemzésére."
			/>
			<FeatureCard
				icon="certificate"
				title="Vállalati digitális iker"
				description="Kulcspozíciók tudásának digitális megőrzése, csökkentett kulcsember-kitettség."
			/>
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
				<h3 class="text-lg font-semibold">Mennyi időt igényel a tananyag elsajátítása?</h3>
				<p class="mt-3 text-sm leading-relaxed" style="color: var(--color-text-muted);">
					Összesen 6–8 óra tiszta tanulási időt igényel.
				</p>
			</article>
			<article class="rounded-2xl border p-6" style="border-color: var(--color-border); background-color: var(--color-surface);">
				<h3 class="text-lg font-semibold">Milyen nyelven zajlik a képzés és a számonkérés?</h3>
				<p class="mt-3 text-sm leading-relaxed" style="color: var(--color-text-muted);">
					A Neumann Technológiai Platform kurzusa és a záróteszt 100%-ban magyar nyelvű.
				</p>
			</article>
			<article class="rounded-2xl border p-6" style="border-color: var(--color-border); background-color: var(--color-surface);">
				<h3 class="text-lg font-semibold">Milyen támogatást tartalmaz a program?</h3>
				<p class="mt-3 text-sm leading-relaxed" style="color: var(--color-text-muted);">
					Indító motivációs workshop (60 perc), heti rendszerességű online szakértői konzultációk legfeljebb 25 fős csoportokban, valamint adminisztrációs tehermentesítés a meghívók, regisztrációk és emlékeztetők kezelésével.
				</p>
			</article>
			<article class="rounded-2xl border p-6" style="border-color: var(--color-border); background-color: var(--color-surface);">
				<h3 class="text-lg font-semibold">Milyen formában zajlik az egyeztetés?</h3>
				<p class="mt-3 text-sm leading-relaxed" style="color: var(--color-text-muted);">
					Online megbeszélés Microsoft Teams felületen a HR és compliance vezetéssel.
				</p>
			</article>
		</div>
	</div>
</section>

<StepFlow
	label="Bevezetési folyamat"
	steps={[
		{
			title: '1. Célcsoport meghatározása',
			description:
				'Az AI-műveltségi intézkedéseket a szervezet használati helyzetéhez és kockázataihoz igazítjuk.'
		},
		{
			title: '2. Kick-off és képzés',
			description:
				'Motivációs Kick-off workshop, Neumann Alapkurzus önálló elvégzése, közben rendszeres szakértői konzultáció.'
		},
		{
			title: '3. Vizsga és dokumentálás',
			description:
				'Átlátható képzési nyilvántartás és dokumentált felkészítés.'
		}
	]}
/>

<Cta
	title="Online HR audit-egyeztetés Teamsen"
	description="Online megbeszélés Microsoft Teams felületen a HR és compliance vezetéssel."
	primaryLabel="HR konzultáció foglalása"
	primaryHref={resolve('/kapcsolat?tema=hr')}
	secondaryLabel="Governance pillér"
	secondaryHref={resolve('/eu-ai-act')}
/>
