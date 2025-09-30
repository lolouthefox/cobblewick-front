<script lang="ts">
	import { seasonalPass } from '$lib';
	import PassItem from '$lib/comps/PassItem.svelte';
	import Titles from '$lib/comps/Titles.svelte';
	let currentLevel: number = 14;
	let currentProgress: number = 2562;
	let currentPage: number = Math.floor(currentLevel / 8);
</script>

<div class="pass">
	<Titles
		icon="shield-chevron"
		title="Pass de Carrière"
		subtitle="Remplissez des contrats pour débloquer de nouveaux items."
	/>
	<div class="tiles">
		{#each seasonalPass.pages as page, i}
			{#if currentPage == i}
				<div class="passPage">
					{#each page.items as item, j}
						{@const level = j + i * 8}
						<PassItem
							{item}
							{level}
							XPRequired={7000}
							XPAcquired={currentLevel == level ? currentProgress : 0}
							finished={currentLevel > level}
						/>
					{/each}
				</div>
			{/if}
		{/each}
		<div class="pagination">
			<button
				onclick={() => {
					currentPage -= 1;
				}}
				disabled={currentPage <= 0}>Previous page</button
			>
			<p>{currentPage + 1}/{seasonalPass.pages.length}</p>
			<button
				onclick={() => {
					currentPage += 1;
				}}
				disabled={currentPage >= seasonalPass.pages.length - 1}>Next page</button
			>
		</div>
	</div>
</div>

<style>
	.pass {
		padding: 48px;
		position: relative;
		height: 100%;

		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	.tiles {
		display: flex;
		flex-direction: column;
		align-items: center;

		padding: 16px;
		gap: 16px;
		gap: 8px;
	}
	.pagination {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 24px;
	}
	.passPage {
		display: flex;
		padding: 16px;
		gap: 16px;
	}
</style>
