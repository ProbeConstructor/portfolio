<script lang="ts">
	import Header from '$lib/header/Header.svelte';
	import '../app.css';
	import { base } from '$app/paths';
	import { theme } from '$lib/stores/stores';
</script>

<svelte:head>
	<meta name="color-scheme" content={$theme == 'system' ? 'light dark' : $theme} />
	<link rel="stylesheet" href={`${base}/theme/${$theme}.css`} />
</svelte:head>

<div id="header">
	<Header />
</div>

<main>
	<slot />
</main>

<footer />

<style>
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 1024px;
		margin: 0 auto;
		box-sizing: border-box;
	}

	#header {
		position: fixed;
		width: 100%;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 40px;
	}

	@media (min-width: 480px) {
		footer {
			padding: 40px 0;
		}
	}
</style>
