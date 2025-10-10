<script lang="ts">
	import { v4 as uuidv4 } from 'uuid';
	import { onMount } from 'svelte';

	let { imageUrl } = $props();

	let cardHovering = false;
	let mousePos = { x: 0, y: 0 };
	let cardRotation = $state({ x: 0, y: 0 });
	const id = 'item-display-' + uuidv4();

	function mouseEnter(e: any) {
		cardHovering = true;
		mousePos = {
			x: e.clientX,
			y: e.clientY
		};
	}
	function mouseLeave(e: any) {
		cardHovering = false;
	}
	function mouseMove(e: any) {
		mousePos = {
			x: e.clientX,
			y: e.clientY
		};
	}

	function lerp(a: number, b: number, alpha: number) {
		return a + alpha * (b - a);
	}

	let animate = false;
	let lastTime = 0;
	function animationFrame(timeSinceStart: number) {
		if (lastTime === 0) {
			lastTime = timeSinceStart;
		}
		let delta = Math.min(timeSinceStart - lastTime, 100);
		let container = document.querySelector('#' + id + '.container');
		if (!container) {
			return;
		}

		let rect = container.getBoundingClientRect();
		let x = ((mousePos.x - (rect.left + rect.width / 2)) / rect.width) * 70;
		let y = -((mousePos.y - (rect.top + rect.height / 2)) / rect.height) * 70;
		let targetCardRotation = {
			x: cardHovering ? y : 0,
			y: cardHovering ? x : 0
		};

		cardRotation = {
			x: lerp(cardRotation.x, targetCardRotation.x, delta * 0.01),
			y: lerp(cardRotation.y, targetCardRotation.y, delta * 0.01)
		};

		if (!animate) return;
		lastTime = timeSinceStart;
		requestAnimationFrame(animationFrame);
	}

	onMount(() => {
		animate = true;
		requestAnimationFrame(animationFrame);

		let card = document.querySelector('#' + id + ' .floating-card');
		let container = document.querySelector('#' + id + '.container');
		if (!card || !container) {
			return;
		}
		container.addEventListener('mouseenter', mouseEnter);
		container.addEventListener('mouseleave', mouseLeave);
		container.addEventListener('mousemove', mouseMove);
		return () => {
			animate = false;
			container.removeEventListener('mouseenter', mouseEnter);
			container.removeEventListener('mouseleave', mouseLeave);
			container.removeEventListener('mousemove', mouseMove);
		};
	});
</script>

<div class="container" {id}>
	<div
		class="floating-card"
		style="transform: rotateX({cardRotation.x}deg) rotateY({cardRotation.y}deg);"
	>
		<img class="cat" src={imageUrl} alt="" />
		<div class="cat-stencil" style="mask-image: url('{imageUrl}');">
			<div class="shine" style="top: {cardRotation.x * 2}px; left: {-cardRotation.y * 2}px;"></div>
		</div>
	</div>
</div>

<style>
	.container {
		padding: 48px;
		height: calc(200px + 2 * 48px);
		width: calc(200px + 2 * 48px);
		perspective: 800px;
	}
	.floating-card {
		height: 200px;
		width: 200px;
		position: relative;
		border-radius: 8px;
		overflow: hidden;
		transform-style: preserve-3d;
		/* background-color: gray;  TO ADD A BACKGROUND*/
	}
	.cat {
		height: 200px;
		width: 200px;
		image-rendering: pixelated;
		object-fit: contain;
	}
	.cat-stencil {
		image-rendering: pixelated;
		mask-repeat: no-repeat;
		mask-size: contain;
		mask-position: center;
		position: absolute;
		inset: 0;
		mix-blend-mode: soft-light;
	}
	.shine {
		height: 200px;
		width: 200px;
		position: absolute;
		background: radial-gradient(circle, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 50%);
		transform: scale(1.2);
	}
</style>
