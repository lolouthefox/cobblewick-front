<script>
	import Titles from '$lib/comps/Titles.svelte';
</script>

<div class="recipes">
	<Titles
		icon="backpack"
		title="Inventaire"
		subtitle="Voici tous ce que vous avez débloquer. Il vous suffit de vous connecter en jeu pour les
			obtenir."
	/>
</div>

<style>
	.recipes {
		padding: 48px;
		position: relative;
		height: 100%;

		display: flex;
		flex-direction: column;
	}
</style>
