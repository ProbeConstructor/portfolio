<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<section id="home">
	<h1>Hello world</h1>
</section>
<section>
	<h1>I AM TESTING</h1>
</section>
<section id="test">
	<h1>I AM TESTING</h1>
</section>
<section>
	<h1>I AM TESTING</h1>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}

	#home {
		background-color: var(--background-gradient);
	}

	#test {
		border-radius: 20px;
		background-color: var(--secondary-color);
	}

	h1 {
		height: 100vh;
	}

	/* .welcome {
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	} */
</style>
