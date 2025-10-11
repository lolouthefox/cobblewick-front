<script lang="ts">
	import type { Bundle, Item } from '$lib';
	import BundleComponent from './BundleComponent.svelte';
	import Icon from './Icon.svelte';
	import ItemComponent from './Item.svelte';

	let {
		item,
		level,
		XPRequired,
		XPAcquired,
		finished,
		onclick,
		selected = false
	}: {
		item: Item | Bundle;
		level: number;
		XPRequired: number;
		XPAcquired: number;
		finished: boolean;
		onclick?: any;
		selected?: boolean;
	} = $props();

	let actualAcquiredXP = $derived(finished ? XPRequired : XPAcquired);
</script>

<button class="pass-item" {onclick} class:selected class:premium={item.isPremium}>
	{#if item.isPremium}
		<h3><Icon icon="star-four" size="16px" /> Premium</h3>
	{:else}
		<h3>Gratuit</h3>
	{/if}
	{#if 'rarity' in item && 'category' in item}
		<ItemComponent {item} />
	{:else}
		<BundleComponent bundle={item} />
	{/if}
	<div class="level">
		{#if actualAcquiredXP > 0 && !finished}
			<p>{actualAcquiredXP}/{XPRequired}</p>
		{:else}
			<p>LVL {level}</p>
		{/if}
		<div class="progress" style="width: {(actualAcquiredXP / XPRequired) * 100}%;"></div>
	</div>
</button>

<style>
	.premium {
		background: repeating-linear-gradient(
			to bottom right,
			#a2682a 0%,
			#be8c3c 8%,
			#be8c3c 18%,
			#d3b15f 27%,
			#faf0a0 35%,
			#ffffc2 40%,
			#faf0a0 50%,
			#d3b15f 58%,
			#be8c3c 67%,
			#b17b32 77%,
			#bb8332 83%,
			#d4a245 88%,
			#e1b453 93%,
			#a4692a 100%
		);
	}
	h3 {
		display: flex;
		align-items: center;
		gap: 4px;
	}
	.pass-item {
		display: flex;
		flex-direction: column;
		gap: 4px;

		background-color: transparent;
		box-shadow: inset 0 0 0 2px var(--text);
		border: none;
		padding: 12px;

		--text-color: var(--text);
		--container-color: var(--background);
		color: var(--text-color);
	}
	.pass-item.selected {
		background: var(--accent);
		box-shadow: none;
		--text-color: var(--background);
		--container-color: var(--text);
	}

	.level {
		display: flex;
		position: relative;
		height: 28px;
		color: var(--container-color);
		box-shadow: inset 0 0 0 2px var(--text-color);
		overflow: hidden;
		padding: 4px;
		font-weight: bolder;
	}
	.progress {
		height: 100%;
		background-color: var(--text-color);
	}
	.level p {
		position: absolute;
		inset: 0;
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>
