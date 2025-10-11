<script lang="ts">
	import { page } from '$app/state';
	import NoiseEffect from './NoiseEffect.svelte';

	let tabs: {
		name: string;
		icon: string;
		path: string;
	}[] = [
		{
			name: 'Inventaire',
			icon: 'lighthouse',
			path: '/inventaire'
		},
		{
			name: 'Contrats',
			icon: 'lighthouse',
			path: '/contrats'
		},
		{
			name: 'Pass Saisonnier',
			icon: 'lighthouse',
			path: '/pass-saison'
		},
		{
			name: 'Pass de Carrière',
			icon: 'lighthouse',
			path: '/pass-carriere'
		},
		{
			name: 'Recettes',
			icon: 'lighthouse',
			path: '/recettes'
		}
	];
</script>

<div>
	<NoiseEffect />
	{#each tabs as tab}
		{#if page.url.pathname == tab.path}
			<a class="active" href={tab.path}>• {tab.name} •</a>
		{:else}
			<a href={tab.path}>{tab.name}</a>
		{/if}
	{/each}
</div>

<style>
	div {
		width: 100%;
		padding: 8px;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 8px;

		position: relative;
		background: var(--background-gr);
		overflow: hidden;
	}
	a {
		text-decoration: none;
		color: var(--text);
		border-radius: 8px;
		padding: 8px;
		font-weight: bold;
		corner-shape: scoop;
	}
	a.active {
		background-color: var(--text);
		color: var(--background);
	}
</style>
