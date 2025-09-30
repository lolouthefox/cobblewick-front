<script>
	import Titles from '$lib/comps/Titles.svelte';
</script>

<div class="contracts">
	<Titles
		icon="book-bookmark"
		title="Livre à Recettes"
		subtitle="Ici toutes vos recettes pour apprendre à fabriquer de nouveaux items."
	/>
</div>

<style>
	.contracts {
		padding: 48px;
		position: relative;
		height: 100%;

		display: flex;
		flex-direction: column;
	}
</style>
