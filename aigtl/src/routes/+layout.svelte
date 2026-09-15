<script lang="ts">
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href="/favicon.svg" />
</svelte:head>

<div class="flex min-h-screen flex-col bg-white text-ink-900">
	<Header />
	<main class="flex-1">
		{@render children()}
	</main>
	<Footer />
</div>
