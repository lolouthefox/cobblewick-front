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
		background-color: var(--on-background);
		border-radius: 8px;
		display: flex;
		flex-direction: column;
		gap: 4px;
		padding: 8px;
		width: min-content;
	}
	img {
		width: 80px;
		height: 80px;
		border-radius: 4px;
		object-fit: contain;
		image-rendering: pixelated;
	}
	.rarity-bar {
		height: 4px;
		width: 100%;
		border-radius: 8px;
	}
</style>
