<script>
	import Icon from './Icon.svelte';

	let { icon, title, subtitle } = $props();
</script>

<div class="titles">
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
	}
</style>
