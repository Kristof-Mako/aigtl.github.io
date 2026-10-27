<script lang="ts">
	import CircuitBackdrop from '$lib/components/CircuitBackdrop.svelte';
	import { page } from '$app/state';
	import { resolve } from '$app/paths';
	import Cta from '$lib/components/Cta.svelte';
	import TrustBar from '$lib/components/TrustBar.svelte';

	type Category = 'jogi' | 'operativ' | 'hr';
	type Kind = 'pillér';

	type Item = {
		title: string;
		summary: string;
		category: Category;
		kind: Kind;
		href: string;
	};

	const items: Item[] = [
		{
			title: 'EU AI Act és AI governance',
			summary: 'Ismerd meg az AIGTL EU AI Act és AI governance szolgáltatását.',
			category: 'jogi',
			kind: 'pillér',
			href: resolve('/eu-ai-act')
		},
		{
			title: 'Középvezetői program',
			summary: 'Ismerd meg a középvezetői AI-bevezetési programot.',
			category: 'operativ',
			kind: 'pillér',
			href: resolve('/kozepvezetoi-workshop')
		},
		{
			title: 'AI-alapvizsga és HR',
			summary: 'Ismerd meg az AI-műveltségi programot és a HR-nyilvántartáshoz kapcsolódó szolgáltatást.',
			category: 'hr',
			kind: 'pillér',
			href: resolve('/ai-alapvizsga')
		}
	];

	const categories: { id: Category | 'mind'; label: string }[] = [
		{ id: 'mind', label: 'Mind' },
		{ id: 'jogi', label: 'Jogi / governance' },
		{ id: 'operativ', label: 'Operatív' },
		{ id: 'hr', label: 'HR' }
	];

	function categoryFromQuery(value: string | null): Category | 'mind' {
		return categories.some((category) => category.id === value)
			? (value as Category | 'mind')
			: 'mind';
	}

	let active = $state<Category | 'mind'>('mind');
	$effect(() => {
		active = categoryFromQuery(page.url.searchParams.get('category'));
	});
	const filtered = $derived(active === 'mind' ? items : items.filter((i) => i.category === active));

	const kindLabel: Record<Kind, string> = {
		pillér: 'Pillér oldal'
	};

	const catLabel: Record<Category, string> = {
		jogi: 'Jogi',
		operativ: 'Operatív',
		hr: 'HR'
	};
</script>

<svelte:head>
	<title>Tudástár | AIGTL</title>
	<meta
		name="description"
		content="AI governance, középvezetői program és AI-műveltség: ismerd meg az AIGTL kapcsolódó szolgáltatásait."
	/>
</svelte:head>

<section class="relative isolate overflow-hidden" data-circuit-hero style="background-color: var(--color-bg); color: var(--color-text);">
	<CircuitBackdrop variant="resources" />
	<div class="relative z-10 mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
		<div class="max-w-3xl">
			<div class="text-xs font-semibold tracking-[0.2em] text-[var(--color-primary)] uppercase">Tudástár</div>
			<h1 class="mt-5 text-4xl leading-[1.1] font-semibold tracking-tight md:text-5xl">
				AI-tudástár és szolgáltatási területek.
			</h1>
			<p class="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--color-text-subtle)] md:text-xl">
				Válassz témakört, és ismerd meg a hozzá kapcsolódó AIGTL szolgáltatást.
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
					? 'bg-[var(--color-primary)] text-[var(--color-on-primary)]'
					: 'bg-[var(--color-surface-alt)] text-[var(--color-text-muted)] hover:bg-[var(--color-surface-alt)]'}"
				aria-pressed={active === cat.id}
				onclick={() => (active = cat.id)}
			>
				{cat.label}
			</button>
		{/each}
	</div>

	<h2 class="mt-10 text-2xl font-semibold tracking-tight md:text-3xl" style="color: var(--color-text);">
		Kapcsolódó témakörök
	</h2>
	<div class="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
		{#each filtered as item (item.title)}
			<a
				href={item.href}
				class="group flex h-full flex-col rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 transition-all hover:-translate-y-0.5 hover:border-[var(--color-border-strong)] hover:shadow-[0_20px_50px_-30px_var(--color-shadow)]"
			>
				<div class="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase">
					<span class="text-[var(--color-primary)]">{kindLabel[item.kind]}</span>
					<span class="text-[var(--color-text-subtle)]">·</span>
					<span class="text-[var(--color-text-subtle)]">{catLabel[item.category]}</span>
				</div>
				<h3
					class="mt-3 text-base leading-snug font-semibold tracking-tight text-[var(--color-text)] group-hover:text-[var(--color-primary-hover)]"
				>
					{item.title}
				</h3>
				<p class="mt-2 text-sm leading-relaxed text-[var(--color-text-muted)]">{item.summary}</p>
				<div class="mt-auto pt-6">
					<span
						class="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-text)] group-hover:text-[var(--color-primary-hover)]"
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
	title="Kérdésed van valamelyik témakörről?"
	description="Írj nekünk, ha kérdésed van az AIGTL szolgáltatásaival vagy a számodra releváns pillérrel kapcsolatban."
	primaryLabel="Kapcsolatfelvétel"
	primaryHref={resolve('/kapcsolat?tema=tudastar')}
	secondaryLabel="Nézd meg a 3 pillért"
	secondaryHref={resolve('/#pillars')}
	tone="light"
/>
