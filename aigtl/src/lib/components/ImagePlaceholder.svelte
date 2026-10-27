<script lang="ts">
	let { name, ratio }: { name: string; ratio: string } = $props();

	function normalizeRatio(value: string): string {
		const match = value.match(/^\s*(\d+(?:\.\d+)?)\s*\/\s*(\d+(?:\.\d+)?)\s*$/);
		if (!match || Number(match[1]) <= 0 || Number(match[2]) <= 0) return '4 / 3';
		return `${match[1]} / ${match[2]}`;
	}

	const aspectRatio = $derived(normalizeRatio(ratio));
</script>

<div
	class="image-placeholder"
	style={`aspect-ratio: ${aspectRatio};`}
	role="img"
	aria-label={`A(z) ${name} nevű vizuális helyőrzője; nem valódi kép.`}
>
	<span class="image-placeholder-title">Képhelyőrző</span>
	<span class="image-placeholder-name">{name}</span>
	<span class="image-placeholder-note">Nincs tényleges kép megjelenítve.</span>
</div>

<style>
	.image-placeholder {
		box-sizing: border-box;
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 0.5rem;
		padding: 1.5rem;
		border: 1px dashed var(--color-border-strong);
		border-radius: 0.75rem;
		background-color: var(--color-surface-alt);
		color: var(--color-text);
		text-align: center;
	}

	.image-placeholder-title {
		font-size: 0.75rem;
		font-weight: 600;
		letter-spacing: 0.08em;
		text-transform: uppercase;
	}

	.image-placeholder-name {
		font-size: 0.875rem;
		font-weight: 600;
		overflow-wrap: anywhere;
	}

	.image-placeholder-note {
		font-size: 0.75rem;
		color: var(--color-text-muted);
	}
</style>
