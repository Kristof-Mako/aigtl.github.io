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

	const panelStyle = $derived(
		tone === 'dark'
			? 'background-color: var(--color-primary); color: var(--color-on-primary);'
			: 'background-color: var(--color-surface-alt); color: var(--color-text); border: 1px solid var(--color-border);'
	);
	const descriptionColor = $derived(
		tone === 'dark' ? 'var(--color-border)' : 'var(--color-text-muted)'
	);
</script>

<section class="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
	<div
		class="cta-panel rounded-2xl px-8 py-14 md:px-14 md:py-16 lg:flex lg:items-center lg:gap-12"
		data-tone={tone}
		style={panelStyle}
	>
		<div class="max-w-2xl">
			<h2 class="text-2xl font-semibold tracking-tight md:text-3xl">{title}</h2>
			{#if description}
				<p class="mt-4 text-base leading-relaxed md:text-lg" style={`color: ${descriptionColor};`}>
					{description}
				</p>
			{/if}
		</div>
		<div class="mt-8 flex flex-wrap items-center gap-3 lg:mt-0 lg:ml-auto lg:flex-nowrap">
			<a
				href={primaryHref}
				class="cta-primary inline-flex items-center gap-2 rounded-md px-5 py-3 text-sm font-semibold transition-colors"
			>
				{primaryLabel}
				<span aria-hidden="true">→</span>
			</a>
			{#if secondaryLabel && secondaryHref}
				<a
					href={secondaryHref}
					class="cta-secondary inline-flex items-center gap-2 rounded-md border px-5 py-3 text-sm font-medium transition-colors"
				>
					{secondaryLabel}
				</a>
			{/if}
		</div>
	</div>
</section>

<style>
	.cta-primary {
		background-color: var(--color-primary);
		color: var(--color-on-primary);
	}

	.cta-primary:hover {
		background-color: var(--color-primary-hover);
	}

	.cta-panel[data-tone='dark'] .cta-primary {
		background-color: var(--color-accent);
		color: var(--color-primary);
	}

	.cta-panel[data-tone='dark'] .cta-primary:hover {
		background-color: var(--color-focus);
	}

	.cta-secondary {
		border-color: var(--color-border-strong);
		color: var(--color-primary);
	}

	.cta-secondary:hover {
		background-color: var(--color-surface);
		border-color: var(--color-primary);
	}

	.cta-panel[data-tone='dark'] .cta-secondary {
		color: var(--color-on-primary);
	}

	.cta-panel[data-tone='dark'] .cta-secondary:hover {
		background-color: var(--color-primary-hover);
	}

	.cta-primary:focus-visible,
	.cta-secondary:focus-visible {
		outline: 3px solid var(--color-focus);
		outline-offset: 3px;
	}
</style>
