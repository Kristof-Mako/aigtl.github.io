<script lang="ts">
	type Step = { title: string; description: string };
	let { steps, label = 'Folyamat' }: { steps: Step[]; label?: string } = $props();
	const hasLeadingStepNumber = (title: string) => /^\s*\d+(?:[.)]\s*|\s+)/.test(title);
</script>

<section class="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
	<div class="mb-10 flex items-end justify-between gap-6">
		<div>
			<div class="text-xs font-semibold tracking-widest uppercase" style="color: var(--color-text-subtle);">{label}</div>
			<h2 class="mt-2 text-2xl font-semibold tracking-tight md:text-3xl" style="color: var(--color-text);">
				Ahogy együtt dolgozunk
			</h2>
		</div>
	</div>

	<ol class="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
		{#each steps as step, i (i)}
			<li class="relative flex flex-col rounded-2xl border p-6" style="border-color: var(--color-border); background-color: var(--color-surface);">
				<div class="flex items-center gap-3">
					{#if !hasLeadingStepNumber(step.title)}
						<span
							class="grid h-8 w-8 place-items-center rounded-full text-sm font-semibold"
							style="background-color: var(--color-primary); color: var(--color-on-primary);"
						>
							{i + 1}
						</span>
					{/if}
					<span class="text-xs font-semibold tracking-widest uppercase" style="color: var(--color-text-subtle);">Lépés</span>
				</div>
				<h3 class="mt-4 text-lg font-semibold tracking-tight" style="color: var(--color-text);">{step.title}</h3>
				<p class="mt-2 text-sm leading-relaxed" style="color: var(--color-text-muted);">{step.description}</p>
			</li>
		{/each}
	</ol>
</section>
