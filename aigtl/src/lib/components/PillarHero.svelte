<script lang="ts">
	type Props = {
		eyebrow?: string;
		title: string;
		lead: string;
		primary: { label: string; href: string };
		secondary?: { label: string; href: string };
		bullets?: string[];
		variant?: 'trust' | 'action' | 'speed';
	};
	let { eyebrow, title, lead, primary, secondary, bullets, variant = 'trust' }: Props = $props();

	const accent = $derived(
		variant === 'trust'
			? 'from-ink-900 to-ink-800'
			: variant === 'action'
				? 'from-ink-900 via-ink-900 to-accent-500'
				: 'from-accent-500 to-accent-400'
	);
	const eyebrowColor = $derived(
		variant === 'speed' ? 'text-ink-900' : 'text-accent-300'
	);
</script>

<section class="relative overflow-hidden bg-ink-950 text-white">
	<div
		class="pointer-events-none absolute -top-40 -right-32 h-96 w-96 rounded-full bg-gradient-to-br {accent} opacity-30 blur-3xl"
		aria-hidden="true"
	></div>
	<div
		class="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
		aria-hidden="true"
	></div>

	<div class="relative mx-auto max-w-7xl px-6 pt-20 pb-20 lg:px-10 lg:pt-28 lg:pb-28">
		<div class="max-w-3xl">
			{#if eyebrow}
				<div class="text-xs font-semibold tracking-[0.2em] {eyebrowColor} uppercase">
					{eyebrow}
				</div>
			{/if}
			<h1
				class="mt-5 text-4xl leading-[1.08] font-semibold tracking-tight text-white md:text-5xl lg:text-6xl"
			>
				{title}
			</h1>
			<p class="mt-6 max-w-2xl text-lg leading-relaxed text-ink-300 md:text-xl">
				{@html lead}
			</p>

			{#if bullets && bullets.length}
				<ul class="mt-8 grid gap-3 sm:grid-cols-2">
					{#each bullets as b, i (i)}
						<li class="flex items-start gap-3 text-sm text-ink-200">
							<svg
								class="mt-0.5 h-5 w-5 flex-none text-accent-400"
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
					class="inline-flex items-center gap-2 rounded-md bg-accent-400 px-5 py-3 text-sm font-semibold text-ink-950 transition-colors hover:bg-accent-300"
				>
					{primary.label}
					<span aria-hidden="true">→</span>
				</a>
				{#if secondary}
					<a
						href={secondary.href}
						class="inline-flex items-center gap-2 rounded-md px-5 py-3 text-sm font-medium text-white ring-1 ring-white/25 ring-inset transition-colors hover:bg-white/5"
					>
						{secondary.label}
					</a>
				{/if}
			</div>
		</div>
	</div>
</section>
