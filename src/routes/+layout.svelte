<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import Nav from '$lib/comps/Nav.svelte';
	import '../global.css';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />

	<!-- FONTS -->
	<link
		href="https://api.fontshare.com/v2/css?f[]=gambetta@1,2&f[]=melodrama@1&display=swap"
		rel="stylesheet"
	/>

	<!-- ICONS -->
	<link
		rel="stylesheet"
		type="text/css"
		href="https://cdn.jsdelivr.net/npm/@phosphor-icons/web@2.1.1/src/regular/style.css"
	/>
	<link
		rel="stylesheet"
		type="text/css"
		href="https://cdn.jsdelivr.net/npm/@phosphor-icons/web@2.1.1/src/fill/style.css"
	/>
</svelte:head>

<main>
	<Nav />
	{@render children?.()}
</main>

<style>
	main {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
	}
</style>
