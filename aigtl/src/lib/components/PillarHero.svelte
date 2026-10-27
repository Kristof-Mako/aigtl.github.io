<script lang="ts">
	type Props = {
		eyebrow?: string;
		title: string;
		lead: string;
		primary: { label: string; href: string };
		secondary?: { label: string; href: string };
		bullets?: string[];
		variant?: 'trust' | 'action' | 'speed';
		circuitVariant?: 'governance' | 'workshop' | 'literacy';
	};
	let { eyebrow, title, lead, primary, secondary, bullets, variant = 'trust', circuitVariant = 'governance' }: Props = $props();
	import CircuitBackdrop from '$lib/components/CircuitBackdrop.svelte';

	const eyebrowColor = $derived(
		variant === 'speed' ? 'var(--color-primary)' : 'var(--color-accent)'
	);
</script>

<section class="relative overflow-hidden" data-circuit-hero style="background-color: var(--color-bg); color: var(--color-text);">
	<CircuitBackdrop variant={circuitVariant} />
	<div
		class="pointer-events-none absolute inset-x-0 top-0 h-px"
		style="background: linear-gradient(to right, var(--color-transparent), var(--color-border-strong), var(--color-transparent));"
		aria-hidden="true"
	></div>

	<div class="relative z-10 mx-auto max-w-7xl px-6 pt-20 pb-20 lg:px-10 lg:pt-28 lg:pb-28">
		<div class="max-w-3xl">
			{#if eyebrow}
				<div class="text-xs font-semibold tracking-[0.2em] uppercase" style={`color: ${eyebrowColor};`}>
					{eyebrow}
				</div>
			{/if}
			<h1
				class="mt-5 text-4xl leading-[1.08] font-semibold tracking-tight md:text-5xl lg:text-6xl"
				style="color: var(--color-text);"
			>
				{title}
			</h1>
			<p class="hero-rich-text mt-6 max-w-2xl text-lg leading-relaxed md:text-xl" style="color: var(--color-text-muted);">
				{@html lead}
			</p>

			{#if bullets && bullets.length}
				<ul class="mt-8 grid gap-3 sm:grid-cols-2">
					{#each bullets as b, i (i)}
						<li class="flex items-start gap-3 text-sm" style="color: var(--color-text-muted);">
							<svg
								class="mt-0.5 h-5 w-5 flex-none"
								style="color: var(--color-accent);"
								viewBox="0 0 24 24"
								fill="none"
								aria-hidden="true"
							>
								<path
									d="M5 12l4 4 10-10"
									stroke="currentColor"
									stroke-width="1.8"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</svg>
							<span>{@html b}</span>
						</li>
					{/each}
				</ul>
			{/if}

			<div class="mt-10 flex flex-wrap items-center gap-3">
				<a
					href={primary.href}
					class="hero-primary inline-flex items-center gap-2 rounded-md px-5 py-3 text-sm font-semibold transition-colors"
				>
					{primary.label}
					<span aria-hidden="true">→</span>
				</a>
				{#if secondary}
					<a
						href={secondary.href}
						class="hero-secondary inline-flex items-center gap-2 rounded-md border px-5 py-3 text-sm font-medium transition-colors"
					>
						{secondary.label}
					</a>
				{/if}
			</div>
		</div>
	</div>
</section>

<style>
	.hero-primary {
		background-color: var(--color-primary);
		color: var(--color-on-primary);
	}

	.hero-primary:hover {
		background-color: var(--color-primary-hover);
	}

	.hero-secondary {
		border-color: var(--color-border-strong);
		color: var(--color-primary);
	}

	.hero-secondary:hover {
		background-color: var(--color-surface-alt);
		border-color: var(--color-primary);
	}

	.hero-rich-text :global(a) {
		color: var(--color-primary);
		text-decoration-color: var(--color-border-strong);
		text-underline-offset: 4px;
	}

	.hero-rich-text :global(a:hover) {
		color: var(--color-primary-hover);
		text-decoration-color: var(--color-primary-hover);
	}
</style>
