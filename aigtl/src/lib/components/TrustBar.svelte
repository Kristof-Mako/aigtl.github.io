<script lang="ts">
	import { trustItems } from '$lib/content';

	let {
		items = trustItems,
		variant = 'light'
	}: { items?: string[]; variant?: 'light' | 'dark' } = $props();

	const background = $derived(
		variant === 'dark' ? 'var(--color-primary)' : 'var(--color-surface-alt)'
	);
	const foreground = $derived(
		variant === 'dark' ? 'var(--color-on-primary)' : 'var(--color-text-muted)'
	);
	const labelColor = $derived(
		variant === 'dark' ? 'var(--color-on-primary)' : 'var(--color-primary)'
	);
</script>

<div
	class="border-y"
	style={`border-color: var(--color-border); background-color: ${background}; color: ${foreground};`}
>
	<div
		class="mx-auto flex max-w-7xl flex-wrap items-center gap-x-8 gap-y-3 px-6 py-4 text-xs tracking-wide uppercase lg:px-10"
	>
		<span class="font-semibold" style={`color: ${labelColor};`}>Hivatkozási alapok</span>
		{#each items as item, i (i)}
			<span class="flex items-center gap-2">
				<span
					class="h-1.5 w-1.5 rounded-full"
					style="background-color: var(--color-accent);"
					aria-hidden="true"
				></span>
				{@html item}
			</span>
		{/each}
	</div>
</div>
