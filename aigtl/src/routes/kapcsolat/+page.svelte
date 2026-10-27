<script lang="ts">
	import CircuitBackdrop from '$lib/components/CircuitBackdrop.svelte';
	import { resolve } from '$app/paths';
	import { page } from '$app/state';

	type Topic = 'governance' | 'workshop' | 'vezetoi-workshop' | 'hr' | 'tudastar' | 'egyeb';

	const topics: { id: Topic; label: string; hint: string }[] = [
		{ id: 'governance', label: 'EU AI Act / governance', hint: 'CEO, CFO, jog, IT, CISO' },
		{ id: 'workshop', label: 'Középvezetői program', hint: 'COO, divízió- és csoportvezetők' },
		{ id: 'vezetoi-workshop', label: 'Vezetői workshop', hint: 'Felsővezetők, döntéshozók' },
		{ id: 'hr', label: 'HR AI alapvizsga', hint: 'CHRO, HRBP, L&D' },
		{ id: 'tudastar', label: 'Tudástár / sablonok', hint: 'Testreszabott anyagok' },
		{ id: 'egyeb', label: 'Egyéb', hint: 'Nem vagyok biztos, kérek segítséget' }
	];

	const initial = $derived((page.url.searchParams.get('tema') as Topic) ?? 'governance');
	let selected = $state<Topic>('governance');
	$effect(() => {
		selected = topics.find((t) => t.id === initial) ? initial : 'governance';
	});

</script>

<svelte:head>
	<title>Kapcsolat | AIGTL</title>
	<meta
		name="description"
		content="Kezdjük egy 20 perces beszélgetéssel! Áttekintjük, hogyan illeszkedik a program a cég működéséhez."
	/>
</svelte:head>

<section class="relative isolate overflow-hidden" data-circuit-hero style="background-color: var(--color-bg); color: var(--color-text);">
	<CircuitBackdrop variant="contact" />
	<div class="relative z-10 mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
		<div class="max-w-3xl">
			<div class="text-xs font-semibold tracking-[0.2em] text-[var(--color-primary)] uppercase">Kapcsolat</div>
			<h1 class="mt-5 text-4xl leading-[1.1] font-semibold tracking-tight md:text-5xl">
				Kezdjük egy 20 perces beszélgetéssel!
			</h1>
			<p class="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--color-text-subtle)] md:text-xl">
				Nem sales-hívás. Egy strukturált beszélgetés arról, hol tart a céged AI-governance,
				adopció és képzés szempontjából, és melyik pillérrel érdemes elkezdeni.
			</p>
		</div>
	</div>
</section>

<section class="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
	<div class="grid gap-12 lg:grid-cols-12 lg:gap-16">
		<div class="lg:col-span-5">
			<div class="text-xs font-semibold tracking-widest text-[var(--color-text-subtle)] uppercase">Elérhetőség</div>
			<h2 class="mt-3 text-2xl font-semibold tracking-tight text-[var(--color-text)] md:text-3xl">
				Írj nekünk, és egyeztessünk.
			</h2>
			<p class="mt-4 text-base leading-relaxed text-[var(--color-text-muted)]">
				Áttekintjük, hogyan illeszkedik a program a cég működéséhez. Írj nekünk emailben vagy az
				űrlapon.
			</p>

			<dl class="mt-8 space-y-6 text-sm">
				<div>
					<dt class="text-xs font-semibold tracking-wider text-[var(--color-text-subtle)] uppercase">Email</dt>
					<dd class="mt-1">
						<a class="text-[var(--color-text)] underline underline-offset-4 hover:text-[var(--color-primary-hover)]" href="mailto:info@aigtl.eu"
							>info@aigtl.eu</a
						>
					</dd>
				</div>
				<div>
					<dt class="text-xs font-semibold tracking-wider text-[var(--color-text-subtle)] uppercase">Válaszidő</dt>
					<dd class="mt-1 text-[var(--color-text-muted)]">Munkanapokon 24 órán belül</dd>
				</div>
				<div>
					<dt class="text-xs font-semibold tracking-wider text-[var(--color-text-subtle)] uppercase">
						Nyelv
					</dt>
					<dd class="mt-1 text-[var(--color-text-muted)]">Magyar és angol</dd>
				</div>
			</dl>

			<div class="mt-10 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-alt)] p-6">
				<h3 class="text-sm font-semibold text-[var(--color-text)]">Amit a hívásra hozz magaddal</h3>
				<ul class="mt-3 space-y-2 text-sm text-[var(--color-text-muted)]">
					<li>· Cégméret, ágazat, kulcsfolyamatok röviden</li>
					<li>· Mit próbáltatok már AI területén (ha volt)</li>
					<li>· A 2-3 legnagyobb aktuális aggodalom</li>
				</ul>
			</div>
		</div>

		<div class="lg:col-span-7">
			<form
					class="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 md:p-8"
					action="mailto:info@aigtl.eu"
					method="post"
					enctype="text/plain"
				>
					<fieldset class="grid gap-5">
						<legend class="text-xs font-semibold tracking-widest text-[var(--color-text-subtle)] uppercase">
							20 perces beszélgetés egyeztetése
						</legend>

						<div class="grid gap-1.5">
							<label for="tema" class="text-sm font-medium text-[var(--color-text)]">Miről beszélgetnénk?</label>
							<select
								id="tema"
								name="tema"
								bind:value={selected}
								class="rounded-md border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-2.5 text-sm text-[var(--color-text)] focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-focus)] focus:outline-none"
							>
								{#each topics as t (t.id)}
									<option value={t.id}>{t.label} · {t.hint}</option>
								{/each}
							</select>
						</div>

						<div class="grid gap-5 sm:grid-cols-2">
							<div class="grid gap-1.5">
								<label for="name" class="text-sm font-medium text-[var(--color-text)]">Név</label>
								<input
									id="name"
									name="name"
									type="text"
									autocomplete="name"
									required
									class="rounded-md border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-2.5 text-sm text-[var(--color-text)] focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-focus)] focus:outline-none"
								/>
							</div>
							<div class="grid gap-1.5">
								<label for="role" class="text-sm font-medium text-[var(--color-text)]">Beosztás</label>
								<input
									id="role"
									name="role"
									type="text"
									placeholder="CEO, HRD, COO…"
									class="rounded-md border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-2.5 text-sm text-[var(--color-text)] focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-focus)] focus:outline-none"
								/>
							</div>
						</div>

						<div class="grid gap-5 sm:grid-cols-2">
							<div class="grid gap-1.5">
								<label for="company" class="text-sm font-medium text-[var(--color-text)]">Cég</label>
								<input
									id="company"
									name="company"
									type="text"
									autocomplete="organization"
									class="rounded-md border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-2.5 text-sm text-[var(--color-text)] focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-focus)] focus:outline-none"
								/>
							</div>
							<div class="grid gap-1.5">
								<label for="email" class="text-sm font-medium text-[var(--color-text)]">Email</label>
								<input
									id="email"
									name="email"
									type="email"
									autocomplete="email"
									required
									class="rounded-md border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-2.5 text-sm text-[var(--color-text)] focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-focus)] focus:outline-none"
								/>
							</div>
						</div>

						<div class="grid gap-1.5">
							<label for="message" class="text-sm font-medium text-[var(--color-text)]"
								>Miben tudunk segíteni? <span class="text-[var(--color-text-subtle)]">(opcionális)</span></label
							>
							<textarea
								id="message"
								name="message"
								rows="4"
								class="rounded-md border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-2.5 text-sm text-[var(--color-text)] focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-focus)] focus:outline-none"
								placeholder="Cégméret, ágazat, aktuális aggodalom, korábbi AI kísérletek…"
							></textarea>
						</div>

						<label class="flex items-start gap-3 text-sm text-[var(--color-text-muted)]">
							<input
								type="checkbox"
								required
								class="mt-1 h-4 w-4 rounded border-[var(--color-border-strong)] text-[var(--color-text)] focus:ring-[var(--color-focus)]"
							/>
							<span>
								Elolvastam az <a class="underline underline-offset-4 hover:text-[var(--color-text)]" href={resolve('/adatkezeles')}
									>adatkezelési tájékoztatót</a
								> és hozzájárulok az adataim kapcsolatfelvételi célból történő kezeléséhez.
							</span>
						</label>

						<div class="flex flex-wrap items-center gap-3 pt-2">
							<button
								type="submit"
								class="inline-flex items-center gap-2 rounded-md bg-[var(--color-primary)] px-5 py-3 text-sm font-semibold text-[var(--color-on-primary)] transition-colors hover:bg-[var(--color-primary-hover)]"
							>
								Konzultáció kérése
								<span aria-hidden="true">→</span>
							</button>
							<a
								href="mailto:info@aigtl.eu"
								class="text-sm font-medium text-[var(--color-text-muted)] underline underline-offset-4 hover:text-[var(--color-text)]"
								>vagy írj közvetlenül</a
							>
						</div>
					</fieldset>
				</form>
		</div>
	</div>
</section>
