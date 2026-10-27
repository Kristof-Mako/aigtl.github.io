<script lang="ts">
	import type { Pillar } from '$lib/content';

	let { pillar }: { pillar: Pillar } = $props();

	const accent = $derived(
		pillar.tone === 'trust'
			? ['var(--color-primary)', 'var(--color-secondary)']
			: pillar.tone === 'action'
				? ['var(--color-primary)', 'var(--color-accent)']
				: ['var(--color-accent)', 'var(--color-secondary)']
	);
</script>

<article
	class="pillar-card group relative flex h-full flex-col overflow-hidden rounded-2xl border p-8"
	style={`--pillar-accent-start: ${accent[0]}; --pillar-accent-end: ${accent[1]};`}
>
	<div class="pillar-card-accent pointer-events-none absolute inset-x-0 top-0 h-1"></div>

	<div class="text-[11px] font-semibold tracking-widest uppercase" style="color: var(--color-text-subtle);">
		{pillar.eyebrow}
	</div>
	<h3 class="mt-3 text-xl leading-snug font-semibold tracking-tight">
		<a class="pillar-title-link" href={pillar.href}>{pillar.title}</a>
	</h3>
	<p class="mt-3 text-sm" style="color: var(--color-text-subtle);">
		Kinek: <span style="color: var(--color-text-muted);">{pillar.audience}</span>
	</p>
	<p class="mt-4 text-[15px] leading-relaxed" style="color: var(--color-text-muted);">
		{@html pillar.promise}
	</p>

	<div class="mt-auto pt-8">
		<a class="pillar-cta inline-flex items-center gap-2 text-sm font-medium transition-colors" href={pillar.cta.href}>
			{pillar.cta.label}
			<span
				class="transition-transform group-hover:translate-x-0.5"
				aria-hidden="true"
			>
				→
			</span>
		</a>
	</div>
</article>

<style>
	.pillar-card {
		border-color: var(--color-border);
		background-color: var(--color-surface);
		box-shadow: 0 0 0 var(--color-transparent);
		transition:
			transform 180ms ease,
			border-color 180ms ease,
			box-shadow 180ms ease;
	}

	.pillar-card:hover {
		transform: translateY(-0.125rem);
		border-color: var(--color-border-strong);
		box-shadow: 0 20px 50px -30px var(--color-shadow);
	}

	.pillar-card-accent {
		background: linear-gradient(90deg, var(--pillar-accent-start), var(--pillar-accent-end));
	}

	.pillar-title-link {
		color: var(--color-text);
		text-decoration: none;
	}

	.pillar-title-link:hover {
		color: var(--color-primary-hover);
		text-decoration: underline;
		text-decoration-color: var(--color-border-strong);
		text-underline-offset: 3px;
	}

	.pillar-cta {
		color: var(--color-primary);
	}

	.pillar-cta:hover {
		color: var(--color-accent);
	}
</style>
