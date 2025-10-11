<script>
	import Titles from '$lib/comps/Titles.svelte';
</script>

<div class="contracts">
	<Titles
		icon="signature"
		title="Contrats"
		subtitle="Completez des contrats pour débloquer des nouveaux items dans les passes."
	/>
</div>

<style>
	.contracts {
		padding: 48px;
		position: relative;
		flex: 1 0 0;

		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
	}
</style>
