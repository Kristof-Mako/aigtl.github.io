<script lang="ts">
	import Cta from '$lib/components/Cta.svelte';
	import TrustBar from '$lib/components/TrustBar.svelte';

	type Category = 'jogi' | 'operativ' | 'hr';
	type Kind = 'checklist' | 'sablon' | 'kalkulator' | 'esettanulmany';

	type Item = {
		title: string;
		summary: string;
		category: Category;
		kind: Kind;
		href: string;
	};

	const items: Item[] = [
		{
			title: '10 pontos Shadow AI ellenőrző lista',
			summary:
				'Fedd fel 2 hét alatt, milyen nem engedélyezett AI‑eszközöket használnak a dolgozók, és milyen belső adatok kerülnek ki.',
			category: 'jogi',
			kind: 'checklist',
			href: '/eu-ai-act'
		},
		{
			title: 'Vállalati AI szabályzat minta',
			summary:
				'Testreszabható belső AI Policy sablon: engedélyezett eszközök, tiltott adatkörök, jóváhagyás, incidenskezelés.',
			category: 'jogi',
			kind: 'sablon',
			href: '/eu-ai-act'
		},
		{
			title: 'EU AI Act határidő‑kalkulátor',
			summary:
				'Számold ki cégméret és AI‑használat alapján, mely kötelezettségek mikor esedékesek.',
			category: 'jogi',
			kind: 'kalkulator',
			href: '/eu-ai-act'
		},
		{
			title: 'AI‑leltár sablon (kockázati besorolással)',
			summary:
				'Excel + útmutató a jogszabály által elvárt AI‑leltárhoz, tiltott / magas / korlátozott / minimális szintekkel.',
			category: 'jogi',
			kind: 'sablon',
			href: '/eu-ai-act'
		},
		{
			title: 'Középvezetői use‑case felmérő',
			summary:
				'Egyoldalas felmérő, amivel a csapatod önállóan feltérképezi a napi folyamatok automatizálható lépéseit.',
			category: 'operativ',
			kind: 'sablon',
			href: '/kozepvezetoi-workshop'
		},
		{
			title: 'ROI‑kalkulátor Quick Win projektekhez',
			summary:
				'Becsüld meg az idő‑ és költségmegtakarítást a jelöltre kerülő use‑case‑ekre, mielőtt döntesz a bevezetésről.',
			category: 'operativ',
			kind: 'kalkulator',
			href: '/kozepvezetoi-workshop'
		},
		{
			title: 'Esettanulmány: riportálás gyorsítása egy hazai KKV‑nál',
			summary:
				'Konkrét eset: havi menedzsment riport előkészítés 60%‑os időmegtakarítással, változatlan minőség mellett.',
			category: 'operativ',
			kind: 'esettanulmany',
			href: '/kozepvezetoi-workshop'
		},
		{
			title: 'AI Champion program útmutató',
			summary:
				'Belső bajnokok kiválasztásának, felkészítésének és mérésének módszertana, sablonokkal.',
			category: 'operativ',
			kind: 'sablon',
			href: '/kozepvezetoi-workshop'
		},
		{
			title: 'EU AI Act 4. cikk · HR checklist',
			summary:
				'A kötelező AI‑műveltségi elvárás lefordítva HR‑nyelvre: érintett kör, dokumentáció, igazolás.',
			category: 'hr',
			kind: 'checklist',
			href: '/ai-alapvizsga'
		},
		{
			title: 'Kick‑off workshop napirend HR‑nek',
			summary:
				'Minta napirend a motivációs Kick‑offhoz, amit a Neumann Alapkurzus előtt szoktunk levezetni.',
			category: 'hr',
			kind: 'sablon',
			href: '/ai-alapvizsga'
		},
		{
			title: 'Esettanulmány: onboarding idő rövidítése AI asszisztenssel',
			summary:
				'Hogyan csökkentette egy 200 fős cég új belépőinek betanulási idejét 40%‑kal, HR fókusszal.',
			category: 'hr',
			kind: 'esettanulmany',
			href: '/ai-alapvizsga'
		},
		{
			title: 'HR AI‑használati szabályzat kiegészítő',
			summary:
				'A vállalati AI szabályzat HR‑fókuszú kiegészítője (toborzás, teljesítménymenedzsment, adatvédelem).',
			category: 'hr',
			kind: 'sablon',
			href: '/ai-alapvizsga'
		}
	];

	const categories: { id: Category | 'mind'; label: string }[] = [
		{ id: 'mind', label: 'Mind' },
		{ id: 'jogi', label: 'Jogi / governance' },
		{ id: 'operativ', label: 'Operatív' },
		{ id: 'hr', label: 'HR' }
	];

	let active = $state<Category | 'mind'>('mind');
	const filtered = $derived(active === 'mind' ? items : items.filter((i) => i.category === active));

	const kindLabel: Record<Kind, string> = {
		checklist: 'Checklist',
		sablon: 'Sablon',
		kalkulator: 'Kalkulátor',
		esettanulmany: 'Esettanulmány'
	};

	const catLabel: Record<Category, string> = {
		jogi: 'Jogi',
		operativ: 'Operatív',
		hr: 'HR'
	};
</script>

<svelte:head>
	<title>Tudástár · sablonok, checklisták, esettanulmányok | AIGTL</title>
	<meta
		name="description"
		content="Kész, letölthető sablonok és checklisták az EU AI Act megfeleléshez, középvezetői use‑case tervezéshez és a HR AI‑műveltségi programhoz."
	/>
</svelte:head>

<section class="bg-ink-950 text-white">
	<div class="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
		<div class="max-w-3xl">
			<div class="text-xs font-semibold tracking-[0.2em] text-accent-300 uppercase">Tudástár</div>
			<h1 class="mt-5 text-4xl leading-[1.1] font-semibold tracking-tight md:text-5xl">
				Használatra kész sablonok, nem generikus blog.
			</h1>
			<p class="mt-6 max-w-2xl text-lg leading-relaxed text-ink-300 md:text-xl">
				Minden anyag egy konkrét döntéshozói szerepkörre készült, és közvetlenül visz tovább a
				megfelelő pillér oldalra vagy egy konzultációhoz.
			</p>
		</div>
	</div>
</section>

<TrustBar variant="light" />

<section class="mx-auto max-w-7xl px-6 py-12 lg:px-10 lg:py-16">
	<div class="flex flex-wrap items-center gap-2">
		{#each categories as cat (cat.id)}
			<button
				type="button"
				class="rounded-full px-4 py-2 text-sm font-medium transition-colors {active === cat.id
					? 'bg-ink-900 text-white'
					: 'bg-ink-50 text-ink-700 hover:bg-ink-100'}"
				aria-pressed={active === cat.id}
				onclick={() => (active = cat.id)}
			>
				{cat.label}
			</button>
		{/each}
	</div>

	<div class="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
		{#each filtered as item (item.title)}
			<a
				href={item.href}
				class="group flex h-full flex-col rounded-xl border border-ink-100 bg-white p-6 transition-all hover:-translate-y-0.5 hover:border-ink-200 hover:shadow-[0_20px_50px_-30px_rgba(11,18,32,0.35)]"
			>
				<div class="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase">
					<span class="text-accent-500">{kindLabel[item.kind]}</span>
					<span class="text-ink-300">·</span>
					<span class="text-ink-500">{catLabel[item.category]}</span>
				</div>
				<h3
					class="mt-3 text-base leading-snug font-semibold tracking-tight text-ink-900 group-hover:text-ink-800"
				>
					{item.title}
				</h3>
				<p class="mt-2 text-sm leading-relaxed text-ink-600">{item.summary}</p>
				<div class="mt-auto pt-6">
					<span
						class="inline-flex items-center gap-2 text-sm font-medium text-ink-900 group-hover:text-accent-500"
					>
						Tudj meg többet
						<span class="transition-transform group-hover:translate-x-0.5" aria-hidden="true"
							>→</span
						>
					</span>
				</div>
			</a>
		{/each}
	</div>
</section>

<Cta
	title="Nem találod meg, amire szükséged van?"
	description="Írj egy sort a szerepkörödről és a helyzetről. Általában 24 órán belül vissza tudunk küldeni egy releváns sablont vagy esettanulmányt."
	primaryLabel="Kérj testre szabott anyagot"
	primaryHref="/kapcsolat?tema=tudastar"
	secondaryLabel="Nézd meg a 3 pillért"
	secondaryHref="/#pillars"
	tone="light"
/>
