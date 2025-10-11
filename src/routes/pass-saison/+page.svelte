<script lang="ts">
	import { getRarityColor, Rarity, seasonalPass, type Bundle } from '$lib';
	import Item from '$lib/comps/Item.svelte';
	import ItemDisplay from '$lib/comps/item/ItemDisplay.svelte';
	import NoiseEffect from '$lib/comps/NoiseEffect.svelte';
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
			<NoiseEffect />
			<div>
				<h2>{selectedItem.name}</h2>
				<p>{selectedItem.description}</p>
			</div>
			<p class="rarity-badge" style="--color: {getRarityColor(selectedItem.rarity)};">
				{Rarity[selectedItem.rarity]}
			</p>
		</div>
	</div>
	<div class="tiles">
		<NoiseEffect />
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
							selected={selectedItem.name == item.name}
						/>
					{/each}
				</div>
			{/if}
		{/each}
		<div class="footer">
			<p>© {new Date().getFullYear()} Fops, INC.</p>
			<div class="pager">
				<Pager bind:currentPage maxPage={seasonalPass.pages.length} />
			</div>
			<p>PRINTED IN FRANCE</p>
		</div>
	</div>
</div>

<style>
	.titles {
		width: 100%;
	}
	.meta {
		position: relative;
		width: 300px;
		padding: 24px;
		height: 300px;
		background-color: var(--background);

		display: flex;
		flex-direction: column;
		justify-content: space-between;
		transform: rotate(3deg);
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
		flex: 1 0 0;

		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
	}
	.tiles {
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;

		padding: 32px;
		gap: 8px;
		background: var(--background-gr);
		corner-shape: scoop;
		border-radius: 24px;
		width: fit-content;
		overflow: hidden;
	}
	.passPage {
		display: flex;
		gap: 4px;
	}

	.pager {
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
	}
	.footer {
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 48px;
	}
	.rarity-badge {
		margin-left: auto;
		width: fit-content;
		padding: 4px 8px;
		font-weight: bolder;
		color: var(--color);
		box-shadow: 0 0 0 2px var(--color);
		transform: rotate(-7deg);
		filter: blur(0.1px); /** Fix seeing pixels because of rotation */
		border-radius: 1px;
	}
</style>
