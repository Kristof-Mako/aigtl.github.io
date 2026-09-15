<script lang="ts">
	import { page } from '$app/state';

	type NavItem = { href: string; label: string };
	const items: NavItem[] = [
		{ href: '/eu-ai-act', label: 'EU AI Act' },
		{ href: '/kozepvezetoi-workshop', label: 'Workshop' },
		{ href: '/ai-alapvizsga', label: 'AI alapvizsga' },
		{ href: '/tudastar', label: 'Tudástár' },
		{ href: '/rolunk', label: 'Rólunk' }
	];

	let open = $state(false);
	const path = $derived(page.url.pathname);
</script>

<header class="sticky top-0 z-40 w-full border-b border-ink-100 bg-white/85 backdrop-blur">
	<div class="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
		<a href="/" class="group flex items-center gap-3" aria-label="AIGTL kezdőoldal">
			<span
				class="grid h-9 w-9 place-items-center rounded-lg bg-ink-900 font-semibold tracking-tight text-white"
				>A</span
			>
			<span class="flex flex-col leading-tight">
				<span class="text-sm font-semibold tracking-tight text-ink-900">AIGTL</span>
				<span class="hidden text-xs text-ink-500 sm:block"
					>AI Governance, Transformation &amp; Lab</span
				>
			</span>
		</a>

		<nav class="hidden items-center gap-1 lg:flex" aria-label="Fő navigáció">
			{#each items as item (item.href)}
				{@const active = path === item.href || path.startsWith(item.href + '/')}
				<a
					href={item.href}
					class="rounded-md px-3 py-2 text-sm font-medium transition-colors {active
						? 'text-ink-900'
						: 'text-ink-600 hover:text-ink-900'}"
					aria-current={active ? 'page' : undefined}
				>
					{item.label}
				</a>
			{/each}
			<a
				href="/kapcsolat"
				class="ml-3 inline-flex items-center gap-2 rounded-md bg-ink-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-ink-800"
			>
				Konzultáció
				<span aria-hidden="true">→</span>
			</a>
		</nav>

		<button
			type="button"
			class="inline-flex items-center justify-center rounded-md p-2 text-ink-700 lg:hidden"
			aria-label="Menü megnyitása"
			aria-expanded={open}
			onclick={() => (open = !open)}
		>
			<svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
				{#if open}
					<path
						d="M6 6l12 12M18 6L6 18"
						stroke="currentColor"
						stroke-width="1.8"
						stroke-linecap="round"
					/>
				{:else}
					<path
						d="M4 7h16M4 12h16M4 17h16"
						stroke="currentColor"
						stroke-width="1.8"
						stroke-linecap="round"
					/>
				{/if}
			</svg>
		</button>
	</div>

	{#if open}
		<div class="border-t border-ink-100 bg-white lg:hidden">
			<nav class="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-4" aria-label="Mobil navigáció">
				{#each items as item (item.href)}
					<a
						href={item.href}
						class="rounded-md px-3 py-3 text-base font-medium text-ink-800 hover:bg-ink-50"
						onclick={() => (open = false)}
					>
						{item.label}
					</a>
				{/each}
				<a
					href="/kapcsolat"
					class="mt-2 inline-flex items-center justify-center gap-2 rounded-md bg-ink-900 px-4 py-3 text-sm font-medium text-white"
					onclick={() => (open = false)}
				>
					Konzultáció kérése
				</a>
			</nav>
		</div>
	{/if}
</header>
