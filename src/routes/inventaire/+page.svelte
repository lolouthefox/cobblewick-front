<script>
	import Titles from '$lib/comps/Titles.svelte';
</script>

<div class="inventory">
	<Titles
		icon="backpack"
		title="Inventaire"
		subtitle="Voici tous ce que vous avez débloquer. Il vous suffit de vous connecter en jeu pour les
			obtenir."
	/>
</div>

<style>
	.inventory {
		padding: 48px;
		position: relative;
		flex: 1 0 0;

		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
	}
</style>
