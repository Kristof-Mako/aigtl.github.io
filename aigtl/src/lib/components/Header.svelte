<script lang="ts">
	import { base, resolve } from '$app/paths';
	import { page } from '$app/state';

	type NavItem = { href: string; label: string };
	const items: NavItem[] = [
		{ href: `${resolve('/')}#vezetoi-workshop`, label: 'Vezetői workshop' },
		{ href: resolve('/eu-ai-act'), label: 'EU AI Act' },
		{ href: resolve('/kozepvezetoi-workshop'), label: 'Középvezetői program' },
		{ href: resolve('/ai-alapvizsga'), label: 'AI alapvizsga' },
		{ href: resolve('/tudastar'), label: 'Tudástár' },
		{ href: resolve('/rolunk'), label: 'Rólunk' }
	];

	let open = $state(false);
	function normalizePath(pathname: string) {
		const normalized = pathname.replace(/\/+$/, '');
		return normalized || '/';
	}
	const path = $derived(normalizePath(page.url.pathname));
	function isActive(href: string) {
		const itemPath = normalizePath(new URL(href, page.url).pathname);
		return path === itemPath || (itemPath !== '/' && path.startsWith(`${itemPath}/`));
	}
</script>

<header class="site-header sticky top-0 z-40 w-full border-b backdrop-blur">
	<div class="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
		<a href={resolve('/')} class="group flex items-center gap-3" aria-label="AIGTL kezdőoldal">
			<img src={`${base}/AIGTL-full.png`} alt="" aria-hidden="true" class="h-11 w-11 rounded-lg object-contain" />
			<span class="flex flex-col leading-tight">
				<span class="brand-name text-sm font-semibold tracking-tight">AIGTL</span>
				<span class="brand-subtitle hidden text-xs sm:block"
					>AI Governance, Transformation &amp; Labs</span
				>
			</span>
		</a>

		<nav class="hidden items-center gap-1 lg:flex" aria-label="Fő navigáció">
			{#each items as item (item.href)}
				{@const active = isActive(item.href)}
				<a
					href={item.href}
					class="nav-link rounded-md px-3 py-2 text-sm font-medium transition-colors {active ? 'active' : ''}"
					aria-current={active ? 'page' : undefined}
				>
					{item.label}
				</a>
			{/each}
			<a
				href={resolve('/kapcsolat')}
				class="primary-action ml-3 inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-colors"
			>
				Konzultáció
				<span aria-hidden="true">→</span>
			</a>
		</nav>

		<button
			type="button"
			class="menu-toggle inline-flex items-center justify-center rounded-md p-2 lg:hidden"
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
		<div class="mobile-menu border-t lg:hidden">
			<nav class="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-4" aria-label="Mobil navigáció">
				{#each items as item (item.href)}
					{@const active = isActive(item.href)}
					<a
						href={item.href}
						class="mobile-nav-link rounded-md px-3 py-3 text-base font-medium {active ? 'active' : ''}"
						aria-current={active ? 'page' : undefined}
						onclick={() => (open = false)}
					>
						{item.label}
					</a>
				{/each}
				<a
					href={resolve('/kapcsolat')}
					class="primary-action mt-2 inline-flex items-center justify-center gap-2 rounded-md px-4 py-3 text-sm font-medium"
					onclick={() => (open = false)}
				>
					Konzultáció kérése
				</a>
			</nav>
		</div>
	{/if}
</header>

<style>
	.site-header {
		border-color: var(--color-border);
		background-color: color-mix(in srgb, var(--color-surface) 85%, var(--color-transparent));
	}
	.primary-action {
		background-color: var(--color-primary);
		color: var(--color-on-primary);
	}
	.primary-action:hover { background-color: var(--color-primary-hover); }
	.brand-name { color: var(--color-text); }
	.brand-subtitle { color: var(--color-text-subtle); }
	.nav-link { color: var(--color-text-muted); }
	.nav-link:hover,
	.nav-link.active { color: var(--color-text); }
	.mobile-menu {
		border-color: var(--color-border);
		background-color: var(--color-surface);
	}
	.menu-toggle { color: var(--color-secondary); }
	.mobile-nav-link { color: var(--color-primary-hover); }
	.mobile-nav-link:hover,
	.mobile-nav-link.active { background-color: var(--color-surface-alt); }
</style>
