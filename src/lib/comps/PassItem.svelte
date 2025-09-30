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
		finished
	}: {
		item: Item | Bundle;
		level: number;
		XPRequired: number;
		XPAcquired: number;
		finished: boolean;
	} = $props();

	let actualAcquiredXP = $derived(finished ? XPRequired : XPAcquired);
</script>

<div class="pass-item">
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
			<p>Level {level}</p>
		{/if}
		<div class="progress" style="width: {(actualAcquiredXP / XPRequired) * 100}%;"></div>
	</div>
</div>

<style>
	h3 {
		display: flex;
		align-items: center;
		gap: 4px;
	}
	.pass-item {
		display: flex;
		flex-direction: column;
		gap: 4px;
	}
	.level {
		display: flex;
		position: relative;
		height: 24px;
		background-color: white;
		border-radius: 8px;
		overflow: hidden;
	}
	.progress {
		height: 100%;
		background-color: yellow;
	}
	.level p {
		position: absolute;
		inset: 0;
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>
