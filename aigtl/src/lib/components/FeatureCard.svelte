<script lang="ts">
	type Props = {
		title: string;
		description: string;
		icon?: 'shield' | 'audit' | 'policy' | 'inventory' | 'cost' | 'users' | 'lightbulb' | 'chart' | 'workflow' | 'trophy' | 'certificate' | 'dashboard' | 'wallet' | 'hr' | 'check';
	};
	let { title, description, icon = 'check' }: Props = $props();
</script>

<article
	class="flex h-full flex-col rounded-xl border border-ink-100 bg-white p-6 transition-colors hover:border-ink-200"
>
	<div
		class="grid h-10 w-10 place-items-center rounded-lg bg-ink-50 text-ink-900 ring-1 ring-ink-100"
		aria-hidden="true"
	>
		<svg width="18" height="18" viewBox="0 0 24 24" fill="none">
			{#if icon === 'shield'}
				<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
				<path d="M9 12l2 2 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
			{:else if icon === 'audit'}
				<path d="M4 5h12v14H4z" stroke="currentColor" stroke-width="1.5"/>
				<path d="M7 9h6M7 12h6M7 15h4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
				<circle cx="18" cy="17" r="3" stroke="currentColor" stroke-width="1.5"/>
				<path d="M20 19l2 2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
			{:else if icon === 'policy'}
				<path d="M6 3h9l4 4v14H6z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
				<path d="M15 3v4h4" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
				<path d="M9 12h7M9 15h7M9 18h4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
			{:else if icon === 'inventory'}
				<path d="M4 7l8-4 8 4-8 4-8-4z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
				<path d="M4 12l8 4 8-4M4 17l8 4 8-4" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
			{:else if icon === 'cost' || icon === 'wallet'}
				<path d="M3 7h15v10H3z" stroke="currentColor" stroke-width="1.5"/>
				<path d="M3 7l3-3h12v3" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
				<circle cx="15" cy="12" r="1.5" fill="currentColor"/>
			{:else if icon === 'users'}
				<circle cx="9" cy="9" r="3" stroke="currentColor" stroke-width="1.5"/>
				<path d="M3 19c0-3 3-5 6-5s6 2 6 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
				<circle cx="17" cy="10" r="2.5" stroke="currentColor" stroke-width="1.5"/>
				<path d="M15 19c0-2 2-3.5 4-3.5s2.5 1 2.5 2.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
			{:else if icon === 'lightbulb'}
				<path d="M9 18h6M10 21h4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
				<path d="M12 3a6 6 0 00-4 10.5c1 1 1.5 2 1.5 3.5h5c0-1.5.5-2.5 1.5-3.5A6 6 0 0012 3z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
			{:else if icon === 'chart'}
				<path d="M4 20h16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
				<path d="M7 16V9M12 16V5M17 16v-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
			{:else if icon === 'workflow'}
				<rect x="3" y="4" width="6" height="6" rx="1" stroke="currentColor" stroke-width="1.5"/>
				<rect x="15" y="4" width="6" height="6" rx="1" stroke="currentColor" stroke-width="1.5"/>
				<rect x="9" y="14" width="6" height="6" rx="1" stroke="currentColor" stroke-width="1.5"/>
				<path d="M6 10v2h12v2M12 14v-4" stroke="currentColor" stroke-width="1.5"/>
			{:else if icon === 'trophy'}
				<path d="M8 4h8v4a4 4 0 01-8 0V4z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
				<path d="M4 5h4M16 5h4M8 5c-2 3 0 6 4 6s6-3 4-6" stroke="currentColor" stroke-width="1.5"/>
				<path d="M10 12v3h4v-3M8 20h8M12 15v5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
			{:else if icon === 'certificate'}
				<rect x="3" y="4" width="18" height="12" rx="1.5" stroke="currentColor" stroke-width="1.5"/>
				<circle cx="12" cy="10" r="2.5" stroke="currentColor" stroke-width="1.5"/>
				<path d="M10 14l-1 6 3-2 3 2-1-6" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
			{:else if icon === 'dashboard'}
				<rect x="3" y="4" width="18" height="14" rx="1.5" stroke="currentColor" stroke-width="1.5"/>
				<path d="M3 9h18" stroke="currentColor" stroke-width="1.5"/>
				<path d="M7 13h4M7 15.5h6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
				<circle cx="17" cy="14" r="2" stroke="currentColor" stroke-width="1.5"/>
			{:else if icon === 'hr'}
				<circle cx="12" cy="8" r="3" stroke="currentColor" stroke-width="1.5"/>
				<path d="M5 20c1-4 4-6 7-6s6 2 7 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
				<path d="M16 3l2 2M18 3l-2 2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
			{:else}
				<path d="M5 12l4 4 10-10" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
			{/if}
		</svg>
	</div>

	<h3 class="mt-5 text-base leading-snug font-semibold tracking-tight text-ink-900">
		{title}
	</h3>
	<p class="mt-2 text-sm leading-relaxed text-ink-600">
		{@html description}
	</p>
</article>
