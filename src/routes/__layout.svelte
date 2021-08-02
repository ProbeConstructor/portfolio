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
	<div id="border" />
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
		margin: 0 auto;
		box-sizing: border-box;
	}

	#header {
		position: fixed;
		width: 100%;
		z-index: 2;
	}

	#border {
		position: absolute;
		top: 100%;
		z-index: -9;
		display: block;
		height: 1%;
		width: 100%;
		overflow: hidden;
		background: var(--accent-color);
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 40px;
	}
</style>
