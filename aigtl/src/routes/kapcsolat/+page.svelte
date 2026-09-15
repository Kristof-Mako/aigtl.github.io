<script lang="ts">
	import { resolve } from '$app/paths';
	import { page } from '$app/state';

	type Topic = 'governance' | 'workshop' | 'hr' | 'tudastar' | 'egyeb';

	const topics: { id: Topic; label: string; hint: string }[] = [
		{ id: 'governance', label: 'EU AI Act / governance', hint: 'CEO, CFO, jog, IT, CISO' },
		{ id: 'workshop', label: 'Középvezetői workshop', hint: 'COO, divízió‑ és csoportvezetők' },
		{ id: 'hr', label: 'HR AI alapvizsga', hint: 'CHRO, HRBP, L&D' },
		{ id: 'tudastar', label: 'Tudástár / sablonok', hint: 'Testreszabott anyagok' },
		{ id: 'egyeb', label: 'Egyéb', hint: 'Nem vagyok biztos, kérek segítséget' }
	];

	const initial = $derived((page.url.searchParams.get('tema') as Topic) ?? 'governance');
	let selected = $state<Topic>('governance');
	$effect(() => {
		selected = topics.find((t) => t.id === initial) ? initial : 'governance';
	});

	let submitted = $state(false);
	function onSubmit(event: SubmitEvent) {
		event.preventDefault();
		submitted = true;
	}
</script>

<svelte:head>
	<title>Kapcsolat | AIGTL</title>
	<meta
		name="description"
		content="Foglalj 30 perces ingyenes AI‑kockázati konzultációt: governance, workshop vagy HR AI‑műveltségi témában."
	/>
</svelte:head>

<section class="bg-ink-950 text-white">
	<div class="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
		<div class="max-w-3xl">
			<div class="text-xs font-semibold tracking-[0.2em] text-accent-300 uppercase">Kapcsolat</div>
			<h1 class="mt-5 text-4xl leading-[1.1] font-semibold tracking-tight md:text-5xl">
				30 perc, tisztább kép az AI kitettségről és a következő lépésről.
			</h1>
			<p class="mt-6 max-w-2xl text-lg leading-relaxed text-ink-300 md:text-xl">
				Nem sales‑hívás. Egy strukturált beszélgetés arról, hol tart a céged AI‑governance,
				adopció és képzés szempontjából, és melyik pillérrel érdemes elkezdeni.
			</p>
		</div>
	</div>
</section>

<section class="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
	<div class="grid gap-12 lg:grid-cols-12 lg:gap-16">
		<div class="lg:col-span-5">
			<div class="text-xs font-semibold tracking-widest text-ink-500 uppercase">Elérhetőség</div>
			<h2 class="mt-3 text-2xl font-semibold tracking-tight text-ink-900 md:text-3xl">
				Írj, vagy foglalj közvetlen időpontot.
			</h2>
			<p class="mt-4 text-base leading-relaxed text-ink-600">
				A legrövidebb út egy 30 perces beszélgetés. Ha inkább emailben indítanál, ott is
				elérsz minket.
			</p>

			<dl class="mt-8 space-y-6 text-sm">
				<div>
					<dt class="text-xs font-semibold tracking-wider text-ink-500 uppercase">Email</dt>
					<dd class="mt-1">
						<a class="text-ink-900 underline underline-offset-4 hover:text-accent-500" href="mailto:hello@aigtl.hu"
							>hello@aigtl.hu</a
						>
					</dd>
				</div>
				<div>
					<dt class="text-xs font-semibold tracking-wider text-ink-500 uppercase">Válaszidő</dt>
					<dd class="mt-1 text-ink-700">Munkanapokon 24 órán belül</dd>
				</div>
				<div>
					<dt class="text-xs font-semibold tracking-wider text-ink-500 uppercase">
						Nyelv
					</dt>
					<dd class="mt-1 text-ink-700">Magyar és angol</dd>
				</div>
			</dl>

			<div class="mt-10 rounded-xl border border-ink-100 bg-ink-50/60 p-6">
				<h3 class="text-sm font-semibold text-ink-900">Amit a hívásra hozz magaddal</h3>
				<ul class="mt-3 space-y-2 text-sm text-ink-700">
					<li>· Cégméret, ágazat, kulcsfolyamatok röviden</li>
					<li>· Mit próbáltatok már AI területén (ha volt)</li>
					<li>· A 2–3 legnagyobb aktuális aggodalom</li>
				</ul>
			</div>
		</div>

		<div class="lg:col-span-7">
			{#if submitted}
				<div
					class="rounded-2xl border border-ink-100 bg-white p-10 text-center"
					role="status"
					aria-live="polite"
				>
					<div class="mx-auto grid h-12 w-12 place-items-center rounded-full bg-ink-900 text-white">
						<svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
							<path
								d="M5 12l4 4 10-10"
								stroke="currentColor"
								stroke-width="1.8"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
					</div>
					<h2 class="mt-5 text-2xl font-semibold tracking-tight text-ink-900">Köszönjük!</h2>
					<p class="mt-3 text-sm text-ink-600">
						Munkanapokon 24 órán belül visszajelzünk időpont‑javaslatokkal. Addig is nézd meg a
						témádhoz tartozó pillér oldalt vagy a tudástárat.
					</p>
					<div class="mt-6 flex flex-wrap justify-center gap-3">
						<a
							href={resolve('/tudastar')}
							class="inline-flex items-center gap-2 rounded-md bg-ink-900 px-4 py-2 text-sm font-medium text-white hover:bg-ink-800"
							>Tudástár</a
						>
						<a
							href={resolve('/')}
							class="inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium text-ink-900 ring-1 ring-ink-300 ring-inset hover:bg-ink-50"
							>Vissza a főoldalra</a
						>
					</div>
				</div>
			{:else}
				<form
					class="rounded-2xl border border-ink-100 bg-white p-6 md:p-8"
					onsubmit={onSubmit}
					novalidate
				>
					<fieldset class="grid gap-5">
						<legend class="text-xs font-semibold tracking-widest text-ink-500 uppercase">
							Konzultáció foglalása
						</legend>

						<div class="grid gap-1.5">
							<label for="tema" class="text-sm font-medium text-ink-800">Miről beszélgetnénk?</label>
							<select
								id="tema"
								name="tema"
								bind:value={selected}
								class="rounded-md border border-ink-200 bg-white px-3 py-2.5 text-sm text-ink-900 focus:border-ink-900 focus:ring-2 focus:ring-ink-900/10 focus:outline-none"
							>
								{#each topics as t (t.id)}
									<option value={t.id}>{t.label} · {t.hint}</option>
								{/each}
							</select>
						</div>

						<div class="grid gap-5 sm:grid-cols-2">
							<div class="grid gap-1.5">
								<label for="name" class="text-sm font-medium text-ink-800">Név</label>
								<input
									id="name"
									name="name"
									type="text"
									autocomplete="name"
									required
									class="rounded-md border border-ink-200 bg-white px-3 py-2.5 text-sm text-ink-900 focus:border-ink-900 focus:ring-2 focus:ring-ink-900/10 focus:outline-none"
								/>
							</div>
							<div class="grid gap-1.5">
								<label for="role" class="text-sm font-medium text-ink-800">Beosztás</label>
								<input
									id="role"
									name="role"
									type="text"
									placeholder="CEO, HRD, COO…"
									class="rounded-md border border-ink-200 bg-white px-3 py-2.5 text-sm text-ink-900 focus:border-ink-900 focus:ring-2 focus:ring-ink-900/10 focus:outline-none"
								/>
							</div>
						</div>

						<div class="grid gap-5 sm:grid-cols-2">
							<div class="grid gap-1.5">
								<label for="company" class="text-sm font-medium text-ink-800">Cég</label>
								<input
									id="company"
									name="company"
									type="text"
									autocomplete="organization"
									class="rounded-md border border-ink-200 bg-white px-3 py-2.5 text-sm text-ink-900 focus:border-ink-900 focus:ring-2 focus:ring-ink-900/10 focus:outline-none"
								/>
							</div>
							<div class="grid gap-1.5">
								<label for="email" class="text-sm font-medium text-ink-800">Email</label>
								<input
									id="email"
									name="email"
									type="email"
									autocomplete="email"
									required
									class="rounded-md border border-ink-200 bg-white px-3 py-2.5 text-sm text-ink-900 focus:border-ink-900 focus:ring-2 focus:ring-ink-900/10 focus:outline-none"
								/>
							</div>
						</div>

						<div class="grid gap-1.5">
							<label for="message" class="text-sm font-medium text-ink-800"
								>Miben tudunk segíteni? <span class="text-ink-400">(opcionális)</span></label
							>
							<textarea
								id="message"
								name="message"
								rows="4"
								class="rounded-md border border-ink-200 bg-white px-3 py-2.5 text-sm text-ink-900 focus:border-ink-900 focus:ring-2 focus:ring-ink-900/10 focus:outline-none"
								placeholder="Cégméret, ágazat, aktuális aggodalom, korábbi AI kísérletek…"
							></textarea>
						</div>

						<label class="flex items-start gap-3 text-sm text-ink-600">
							<input
								type="checkbox"
								required
								class="mt-1 h-4 w-4 rounded border-ink-300 text-ink-900 focus:ring-ink-900/10"
							/>
							<span>
								Elolvastam az <a class="underline underline-offset-4 hover:text-ink-900" href={resolve('/adatkezeles')}
									>adatkezelési tájékoztatót</a
								> és hozzájárulok az adataim kapcsolatfelvételi célból történő kezeléséhez.
							</span>
						</label>

						<div class="flex flex-wrap items-center gap-3 pt-2">
							<button
								type="submit"
								class="inline-flex items-center gap-2 rounded-md bg-ink-900 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-ink-800"
							>
								Konzultáció kérése
								<span aria-hidden="true">→</span>
							</button>
							<a
								href="mailto:hello@aigtl.hu"
								class="text-sm font-medium text-ink-700 underline underline-offset-4 hover:text-ink-900"
								>vagy írj közvetlenül</a
							>
						</div>
					</fieldset>
				</form>
			{/if}
		</div>
	</div>
</section>
