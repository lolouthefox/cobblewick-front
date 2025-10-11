<script>
	import Icon from './Icon.svelte';
	import NoiseEffect from './NoiseEffect.svelte';

	let { icon, title, subtitle } = $props();
</script>

<div class="titles">
	<NoiseEffect />
	<Icon {icon} size="64px" />
	<div class="text">
		<h1>{title}</h1>
		<p>{subtitle}</p>
	</div>
</div>

<style>
	.titles {
		display: flex;
		align-items: center;
		gap: 12px;
		transform: rotate(-4deg);
		max-width: 400px;

		position: relative;
		padding: 32px;
		background: var(--background-gr);
		corner-shape: scoop;
		border-radius: 24px;
		width: fit-content;
		overflow: hidden;
	}
</style>
