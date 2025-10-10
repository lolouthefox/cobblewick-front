<script lang="ts">
	import { seasonalPass, type Bundle } from '$lib';
	import Item from '$lib/comps/Item.svelte';
	import ItemDisplay from '$lib/comps/item/ItemDisplay.svelte';
	import Pager from '$lib/comps/Pager.svelte';
	import PassItem from '$lib/comps/PassItem.svelte';
	import Titles from '$lib/comps/Titles.svelte';
	let currentPage: number = $state(0);
	let currentLevel: number = 4;
	let currentProgress: number = 2562;

	let selectedItem: any = $state(seasonalPass.pages[0].items[0]);
</script>

<div class="pass">
	<div class="titles">
		<Titles
			icon="hand-waving"
			title="Pass Saisonnier"
			subtitle="{seasonalPass.name} - {seasonalPass.finishes
				? Math.ceil((seasonalPass.finishes.getTime() - Date.now()) / (1000 * 60 * 60 * 24))
				: '???'} jours restants"
		/>
	</div>
	<div class="content">
		<ItemDisplay imageUrl={selectedItem.thumbnail} />
		<div class="meta">
			<h2>{selectedItem.name}</h2>
			<p>{selectedItem.description}</p>
		</div>
	</div>
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
							onclick={() => {
								selectedItem = item;
							}}
						/>
					{/each}
				</div>
			{/if}
		{/each}
		<Pager bind:currentPage maxPage={seasonalPass.pages.length} />
	</div>
</div>

<style>
	.meta {
		width: 300px;
	}
	.content {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 48px;
	}
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
	.passPage {
		display: flex;
		padding: 16px;
		gap: 16px;
	}
</style>
