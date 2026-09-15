<script lang="ts">
	type CtaProps = {
		title: string;
		description?: string;
		primaryLabel: string;
		primaryHref: string;
		secondaryLabel?: string;
		secondaryHref?: string;
		tone?: 'dark' | 'light';
	};

	let {
		title,
		description,
		primaryLabel,
		primaryHref,
		secondaryLabel,
		secondaryHref,
		tone = 'dark'
	}: CtaProps = $props();

	const wrapper = $derived(
		tone === 'dark' ? 'bg-ink-950 text-white' : 'bg-ink-50 text-ink-900 border border-ink-100'
	);
	const desc = $derived(tone === 'dark' ? 'text-ink-300' : 'text-ink-600');
	const primary = $derived(
		tone === 'dark'
			? 'bg-accent-400 text-ink-950 hover:bg-accent-300'
			: 'bg-ink-900 text-white hover:bg-ink-800'
	);
	const secondary = $derived(
		tone === 'dark'
			? 'text-white ring-1 ring-inset ring-white/25 hover:bg-white/5'
			: 'text-ink-900 ring-1 ring-inset ring-ink-300 hover:bg-white'
	);
</script>

<section class="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
	<div class="{wrapper} rounded-2xl px-8 py-14 md:px-14 md:py-16 lg:flex lg:items-center lg:gap-12">
		<div class="max-w-2xl">
			<h2 class="text-2xl font-semibold tracking-tight md:text-3xl">{title}</h2>
			{#if description}
				<p class="{desc} mt-4 text-base leading-relaxed md:text-lg">{description}</p>
			{/if}
		</div>
		<div class="mt-8 flex flex-wrap items-center gap-3 lg:mt-0 lg:ml-auto lg:flex-nowrap">
			<a
				href={primaryHref}
				class="{primary} inline-flex items-center gap-2 rounded-md px-5 py-3 text-sm font-semibold transition-colors"
			>
				{primaryLabel}
				<span aria-hidden="true">→</span>
			</a>
			{#if secondaryLabel && secondaryHref}
				<a
					href={secondaryHref}
					class="{secondary} inline-flex items-center gap-2 rounded-md px-5 py-3 text-sm font-medium transition-colors"
				>
					{secondaryLabel}
				</a>
			{/if}
		</div>
	</div>
</section>
