<script lang="ts">
	import { trustItems } from '$lib/content';

	let {
		items = trustItems,
		variant = 'light'
	}: { items?: string[]; variant?: 'light' | 'dark' } = $props();

	const wrapper = $derived(
		variant === 'dark'
			? 'border-white/10 bg-ink-950 text-ink-300'
			: 'border-ink-100 bg-ink-50/60 text-ink-600'
	);
	const dot = $derived(variant === 'dark' ? 'bg-accent-400/80' : 'bg-accent-500/70');
</script>

<div class="border-y {wrapper}">
	<div
		class="mx-auto flex max-w-7xl flex-wrap items-center gap-x-8 gap-y-3 px-6 py-4 text-xs tracking-wide uppercase lg:px-10"
	>
		<span class="font-semibold {variant === 'dark' ? 'text-white' : 'text-ink-900'}"
			>Hitelesség</span
		>
		{#each items as item, i (i)}
			<span class="flex items-center gap-2">
				<span class="h-1.5 w-1.5 rounded-full {dot}" aria-hidden="true"></span>
				{@html item}
			</span>
		{/each}
	</div>
</div>
