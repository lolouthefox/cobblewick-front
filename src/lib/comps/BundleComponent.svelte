<script lang="ts">
	import type { Bundle } from '$lib';

	let { bundle }: { bundle: Bundle } = $props();
</script>

<div class="card">
	<!-- TODO: Add a "number of items" indicator -->
	<img src={bundle.thumbnail} alt="" />
</div>

<style>
	.card {
		background-color: white;
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
</style>
