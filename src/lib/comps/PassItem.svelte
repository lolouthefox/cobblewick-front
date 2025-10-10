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
		onclick
	}: {
		item: Item | Bundle;
		level: number;
		XPRequired: number;
		XPAcquired: number;
		finished: boolean;
		onclick?: any;
	} = $props();

	let actualAcquiredXP = $derived(finished ? XPRequired : XPAcquired);
</script>

<button class="pass-item" {onclick}>
	{#if item.isPremium}
		<h3 class="premium"><Icon icon="star-four" size="16px" /> Premium</h3>
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
</button>

<style>
	.premium {
		background: #552a9b;
		background: linear-gradient(
			132deg,
			rgba(85, 42, 155, 1) 0%,
			rgba(206, 181, 245, 1) 27%,
			rgba(85, 42, 155, 1) 100%
		);
		background-clip: text;
		-webkit-text-fill-color: transparent;
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
		border: none;
	}
	.level {
		display: flex;
		position: relative;
		height: 24px;
		background-color: var(--on-background);
		color: var(--on-secondary);
		border-radius: 8px;
		overflow: hidden;
	}
	.progress {
		height: 100%;
		background-color: var(--secondary);
	}
	.level p {
		position: absolute;
		inset: 0;
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>
