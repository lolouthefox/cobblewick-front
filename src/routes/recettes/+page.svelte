<script>
	import Titles from '$lib/comps/Titles.svelte';
</script>

<div class="recipes">
	<Titles
		icon="book-bookmark"
		title="Livre à Recettes"
		subtitle="Ici toutes vos recettes pour apprendre à fabriquer de nouveaux items."
	/>
</div>

<style>
	.recipes {
		padding: 48px;
		position: relative;
		flex: 1 0 0;

		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
	}
</style>
