<script lang="ts">
	type Step = { title: string; description: string };
	let { steps, label = 'Folyamat' }: { steps: Step[]; label?: string } = $props();
</script>

<section class="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
	<div class="mb-10 flex items-end justify-between gap-6">
		<div>
			<div class="text-xs font-semibold tracking-widest text-ink-500 uppercase">{label}</div>
			<h2 class="mt-2 text-2xl font-semibold tracking-tight text-ink-900 md:text-3xl">
				Ahogy együtt dolgozunk
			</h2>
		</div>
	</div>

	<ol class="grid gap-6 md:grid-cols-3">
		{#each steps as step, i (i)}
			<li class="relative flex flex-col rounded-2xl border border-ink-100 bg-white p-6">
				<div class="flex items-center gap-3">
					<span
						class="grid h-8 w-8 place-items-center rounded-full bg-ink-900 text-sm font-semibold text-white"
					>
						{i + 1}
					</span>
					<span class="text-xs font-semibold tracking-widest text-ink-500 uppercase">Lépés</span>
				</div>
				<h3 class="mt-4 text-lg font-semibold tracking-tight text-ink-900">{step.title}</h3>
				<p class="mt-2 text-sm leading-relaxed text-ink-600">{step.description}</p>
			</li>
		{/each}
	</ol>
</section>
