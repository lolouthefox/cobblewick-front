<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import Nav from '$lib/comps/Nav.svelte';
	import '../global.css';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	 <link href="https://api.fontshare.com/v2/css?f[]=gambetta@1,2&f[]=melodrama@1&display=swap" rel="stylesheet"> 
</svelte:head>

<main>
	<Nav/>
	{@render children?.()}
</main>
