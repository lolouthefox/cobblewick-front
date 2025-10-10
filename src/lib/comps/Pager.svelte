<script lang="ts">
	import Icon from './Icon.svelte';

	let {
		currentPage = $bindable(0),
		maxPage
	}: {
		currentPage?: number;
		maxPage: number;
	} = $props();
</script>

<div class="pagination">
	<button
		onclick={() => {
			currentPage -= 1;
		}}
		disabled={currentPage <= 0}
	>
		<Icon icon="caret-left" />
	</button>
	<p>{currentPage + 1}/{maxPage}</p>
	<button
		onclick={() => {
			currentPage += 1;
		}}
		disabled={currentPage >= maxPage - 1}
	>
		<Icon icon="caret-right" />
	</button>
</div>

<style>
	.pagination {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 24px;
	}
</style>
