<script context="module" lang="ts">
	export const prerender = true;

	import YouTube from '../lib/components/Youtube.svelte';

	import Swiper from '../lib/components/Swiper.svelte';
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<section>
	<div>
		<h1>Hello world</h1>
	</div>
</section>
<section>
	<div>
		<h1>I AM TESTING</h1>
	</div>
</section>
<section id="test">
	<div style="width: 85vw;">
		<h1>MOBILE FIRST</h1>
		<div style="padding: 20vh 0vw;">
			<Swiper />
		</div>
	</div>
</section>
<section>
	<div class="video">
		<YouTube videoId="i_jaBBd3Z4w" height="390" width="100%" />
	</div>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}

	#test {
		border-radius: 20px;
		background-color: var(--secondary-color);
		width: 90vw;
	}
	.video {
		padding: 10vh 0vw;
	}
</style>
