<script lang="ts">
	import { getRarityColor, type Item } from '$lib';

	let { item }: { item: Item } = $props();
</script>

<div class="card">
	<img src={item.thumbnail} alt="" />
	<div class="rarity-bar" style="background-color: rgb({getRarityColor(item.rarity)});"></div>
</div>

<style>
	.card {
		background-color: rgb(255, 226, 148);
		border-radius: 8px;
		display: flex;
		flex-direction: column;
		gap: 4px;
		padding: 8px;
		width: min-content;
	}
	img {
		width: 128px;
		height: 128px;
		border-radius: 4px;
	}
	.rarity-bar {
		height: 4px;
		width: 100%;
		border-radius: 8px;
	}
</style>
