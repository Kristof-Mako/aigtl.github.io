<script lang="ts">
	import type { Pillar } from '$lib/content';

	let { pillar }: { pillar: Pillar } = $props();

	const accent = $derived(
		pillar.tone === 'trust'
			? 'from-ink-900 to-ink-800'
			: pillar.tone === 'action'
				? 'from-ink-800 to-accent-500/70'
				: 'from-accent-500/70 to-accent-400/70'
	);
</script>

<a
	href={pillar.href}
	class="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-ink-100 bg-white p-8 transition-all hover:-translate-y-0.5 hover:border-ink-200 hover:shadow-[0_20px_50px_-30px_rgba(11,18,32,0.35)]"
>
	<div class="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r {accent}"></div>

	<div class="text-[11px] font-semibold tracking-widest text-ink-500 uppercase">
		{pillar.eyebrow}
	</div>
	<h3 class="mt-3 text-xl leading-snug font-semibold tracking-tight text-ink-900">
		{pillar.title}
	</h3>
	<p class="mt-3 text-sm text-ink-500">
		Kinek: <span class="text-ink-700">{pillar.audience}</span>
	</p>
	<p class="mt-4 text-[15px] leading-relaxed text-ink-600">
		{@html pillar.promise}
	</p>

	<div class="mt-auto pt-8">
		<span
			class="inline-flex items-center gap-2 text-sm font-medium text-ink-900 transition-colors group-hover:text-accent-500"
		>
			Pillér megnyitása
			<span
				class="transition-transform group-hover:translate-x-0.5"
				aria-hidden="true"
			>
				→
			</span>
		</span>
	</div>
</a>
