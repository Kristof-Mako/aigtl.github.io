<script lang="ts">
	import { onMount } from 'svelte';
	import CircuitBackdrop from '$lib/components/CircuitBackdrop.svelte';
	import { resolve } from '$app/paths';

	const googleFormResponseUrl =
		'https://docs.google.com/forms/d/e/1FAIpQLScHylJrlDY5_Hoa9OwXzq0oU6KvpFC_B1MsgSezwGXQbee6kA/formResponse?embedded=true';
	const topics = [
		{ id: 'governance', label: 'EU AI Act / governance (CEO, CFO, jog, IT, CISO)' },
		{ id: 'workshop', label: 'Középvezetői program (COO, divízió- és csoportvezetők)' },
		{ id: 'vezetoi-workshop', label: 'Vezetői workshop (Felsővezetők, döntéshozók)' },
		{ id: 'hr', label: 'HR AI alapvizsga (CHRO, HRBP, L&D)' }
	] as const;

	let selectedTopics = $state<string[]>([]);
	let otherTopicSelected = $state(false);
	let otherTopic = $state('');

	onMount(() => {
		const topic = new URLSearchParams(window.location.search).get('tema');
		const matchingTopic = topics.find((item) => item.id === topic);
		if (matchingTopic) selectedTopics = [matchingTopic.label];
		if (topic === 'tudastar' || topic === 'egyeb') {
			otherTopicSelected = true;
			otherTopic = topic === 'tudastar' ? 'Tudástár / sablonok' : 'Egyéb';
		}
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
				style="background-color: #fff"
				action={googleFormResponseUrl}
				method="POST"
				target="_blank"
			>
				<h2 class="text-xs font-semibold tracking-widest text-[var(--color-text-subtle)] uppercase">
					20 perces beszélgetés egyeztetése
				</h2>
				<div class="mt-6 grid gap-5">
					<div class="grid gap-5 sm:grid-cols-2">
						<div class="grid gap-1.5">
							<label for="contact-name" class="text-sm font-medium text-[var(--color-text)]">Név</label>
							<input id="contact-name" name="entry.1045781291" type="text" autocomplete="name" required
								class="rounded-md border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-2.5 text-sm text-[var(--color-text)] focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-focus)] focus:outline-none" />
						</div>
						<div class="grid gap-1.5">
							<label for="contact-email" class="text-sm font-medium text-[var(--color-text)]">Email</label>
							<input id="contact-email" name="entry.839337160" type="email" autocomplete="email" required
								class="rounded-md border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-2.5 text-sm text-[var(--color-text)] focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-focus)] focus:outline-none" />
						</div>
					</div>
					<div class="grid gap-5 sm:grid-cols-2">
						<div class="grid gap-1.5">
							<label for="contact-company" class="text-sm font-medium text-[var(--color-text)]">Cég</label>
							<input id="contact-company" name="entry.1166974658" type="text" autocomplete="organization" required
								class="rounded-md border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-2.5 text-sm text-[var(--color-text)] focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-focus)] focus:outline-none" />
						</div>
						<div class="grid gap-1.5">
							<label for="contact-role" class="text-sm font-medium text-[var(--color-text)]">Beosztás</label>
							<input id="contact-role" name="entry.1065046570" type="text" autocomplete="organization-title" required
								class="rounded-md border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-2.5 text-sm text-[var(--color-text)] focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-focus)] focus:outline-none" />
						</div>
					</div>

					<fieldset class="grid gap-3">
						<legend class="text-sm font-medium text-[var(--color-text)]">Miről beszélgetnénk? <span class="font-normal text-[var(--color-text-subtle)]">(opcionális)</span></legend>
						<input type="hidden" name="entry.2005620554_sentinel" value="" />
						{#each topics as topic (topic.id)}
							<label class="flex items-start gap-3 text-sm leading-relaxed text-[var(--color-text-muted)]">
								<input type="checkbox" name="entry.2005620554" value={topic.label} bind:group={selectedTopics}
									class="mt-1 h-4 w-4 shrink-0 rounded border-[var(--color-border-strong)] text-[var(--color-primary)] focus:ring-[var(--color-focus)]" />
								<span>{topic.label}</span>
							</label>
						{/each}
						<label class="flex items-start gap-3 text-sm leading-relaxed text-[var(--color-text-muted)]">
							<input type="checkbox" name="entry.2005620554" value="__other_option__" bind:checked={otherTopicSelected}
								class="mt-1 h-4 w-4 shrink-0 rounded border-[var(--color-border-strong)] text-[var(--color-primary)] focus:ring-[var(--color-focus)]" />
							<span>Egyéb</span>
						</label>
						{#if otherTopicSelected}
							<label for="contact-topic-other" class="sr-only">Egyéb téma</label>
							<input id="contact-topic-other" name="entry.2005620554.other_option_response" type="text" bind:value={otherTopic}
								class="rounded-md border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-2.5 text-sm text-[var(--color-text)] focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-focus)] focus:outline-none" />
						{/if}
					</fieldset>

					<div class="grid gap-1.5">
						<label for="contact-message" class="text-sm font-medium text-[var(--color-text)]">Miben tudunk segíteni? <span class="font-normal text-[var(--color-text-subtle)]">(opcionális)</span></label>
						<textarea id="contact-message" name="entry.1345469486" rows="4"
							class="rounded-md border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-2.5 text-sm text-[var(--color-text)] focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-focus)] focus:outline-none"
							placeholder="Cégméret, ágazat, aktuális aggodalom, korábbi AI-kísérletek…"></textarea>
					</div>

					<input type="hidden" name="entry.872869641_sentinel" value="" />
					<label class="flex items-start gap-3 text-sm leading-relaxed text-[var(--color-text-muted)]">
						<input type="checkbox" name="entry.872869641" value="Elolvastam az adatkezelési tájékoztatót és hozzájárulok az adataim kapcsolatfelvételi célból történő kezeléséhez." required
							class="mt-1 h-4 w-4 shrink-0 rounded border-[var(--color-border-strong)] text-[var(--color-primary)] focus:ring-[var(--color-focus)]" />
						<span>
							Elolvastam az <a class="underline underline-offset-4 hover:text-[var(--color-text)]" href={resolve('/adatkezeles')}>adatkezelési tájékoztatót</a> és hozzájárulok az adataim kapcsolatfelvételi célból történő kezeléséhez.
						</span>
					</label>

					<button type="submit"
						class="inline-flex min-h-12 items-center justify-center gap-2 justify-self-start rounded-md bg-[var(--color-primary)] px-5 py-3 text-sm font-semibold text-[var(--color-on-primary)] transition-colors hover:bg-[var(--color-primary-hover)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-focus)]">
						Konzultáció kérése <span aria-hidden="true">→</span>
					</button>
				</div>
			</form>
			<p class="mt-4 text-sm text-[var(--color-text-muted)]">
				A beküldést a Google Űrlapok dolgozza fel, a válaszoldal külön lapon nyílik meg. Ha inkább közvetlenül a Google űrlapot használnád,
				<a
					href="https://docs.google.com/forms/d/e/1FAIpQLScHylJrlDY5_Hoa9OwXzq0oU6KvpFC_B1MsgSezwGXQbee6kA/viewform"
					target="_blank"
					rel="noreferrer"
					class="font-medium text-[var(--color-text)] underline underline-offset-4"
				>nyisd meg külön lapon</a>.
				Vagy írj nekünk közvetlenül e-mailben:
				<a
					href="mailto:info@aigtl.eu"
					class="font-medium text-[var(--color-text)] underline underline-offset-4"
				>info@aigtl.eu</a>.
			</p>
		</div>
	</div>
</section>
