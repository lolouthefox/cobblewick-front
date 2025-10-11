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
		<Icon icon="caret-left" size="24px" />
	</button>
	<p>{currentPage + 1}/{maxPage}</p>
	<button
		onclick={() => {
			currentPage += 1;
		}}
		disabled={currentPage >= maxPage - 1}
	>
		<Icon icon="caret-right" size="24px" />
	</button>
</div>

<style>
	.pagination {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 24px;
	}

	button {
		border: none;
		color: var(--text);
		box-shadow: inset 0 0 0 2px var(--text);
		background-color: var(--background);
		padding: 8px;
	}
	button:hover {
		background-color: var(--accent);
		color: var(--background);
		box-shadow: none;
	}
	button:disabled {
		color: var(--text);
		box-shadow: inset 0 0 0 2px var(--text);
		background-color: var(--background);
		opacity: 0.5;
	}
	p {
		width: 50px;
		text-align: center;
	}
</style>
