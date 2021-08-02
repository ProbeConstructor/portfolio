<script lang="ts">
	import { base } from '$app/paths';
	import { page } from '$app/stores';
	import ThemeSwitch from '$lib/components/ThemeSwitch.svelte';
</script>

<header>
	<a class="icon" href="{base}/">
		<img src="favicon.png" alt="favicon.png" />
	</a>
	<nav>
		<ul>
			<li class:active={$page.path === '/'}>
				<a sveltekit:prefetch href="{base}/">Home</a>
			</li>
			<li class:active={$page.path === '/#test'}>
				<a sveltekit:prefetch href="{base}/#test">Test</a>
			</li>
		</ul>
		<div class="themeSwitch">
			<ThemeSwitch />
		</div>
	</nav>
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
		background: var(--background-header);
		backdrop-filter: blur(5px);
	}

	.icon {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100%;
	}

	.icon img {
		width: 3em;
		height: 3em;
		object-fit: contain;
	}

	nav {
		display: flex;
		justify-content: center;
		width: 100%;
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		width: 100%;
	}

	li {
		position: relative;
		height: 100%;
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 1em;
		color: var(--heading-color);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 10%;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		color: var(--secondary-accent);
	}

	.themeSwitch {
		padding-right: 10px;
	}
</style>
