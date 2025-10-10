<script lang="ts">
	import { page } from '$app/state';

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
	{#each tabs as tab}
		<a class:active={page.url.pathname == tab.path} href={tab.path}>{tab.name}</a>
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
	}
	a {
		text-decoration: none;
		color: var(--rich-black);
		border-radius: 8px;
		padding: 8px;
		font-weight: bold;
	}
	a.active {
		background-color: var(--rich-black);
		color: var(--background);
	}
</style>
