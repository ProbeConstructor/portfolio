<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
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
	<div>
		<h1>I AM TESTING</h1>
	</div>
</section>
<section>
	<div>
		<h1>I AM TESTING</h1>
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
	section div {
		padding-top: 20vh;
	}

	#test {
		border-radius: 20px;
		background-color: var(--secondary-color);
	}

	h1 {
		height: 100vh;
	}
</style>
