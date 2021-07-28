<script lang="ts">
	import { onMount } from 'svelte';
	import { theme } from '$lib/stores/stores';
	import Motion from 'svelte-motion/src/motion/MotionSSR.svelte';

	onMount(() => {
		const json = localStorage.getItem('theme');
		if (json) {
			theme.set(JSON.parse(json));
		}
		theme.subscribe((current) => {
			localStorage.setItem('theme', JSON.stringify(current));
		});
		if ($theme == 'light') {
			isOn = true;
		}
		if ($theme == 'dark') {
			isOn = false;
		}
	});

	let isOn = false;
	const toggleSwitch = () => (isOn = !isOn);

	let toggleDay = () => {
		if (isOn) {
			$theme = 'light';
		}
		if (!isOn) {
			$theme = 'dark';
		}
	};

	const spring = {
		type: 'spring',
		stiffness: 900,
		damping: 20
	};
</script>

<div class="background">
	<Motion let:motion layout transition={spring}>
		<div class="switch" class:isOn on:click={toggleSwitch} on:click={toggleDay}>
			<div use:motion class="handle" />
		</div>
	</Motion>
</div>

<style>
	:global(*) {
		box-sizing: border-box;
	}
	.background {
		/* background: linear-gradient(250deg, rgb(50, 50, 255), rgb(150, 150, 250)); */
		display: flex;
		height: 100%;
		justify-content: center;
		align-items: center;
	}
	.switch {
		width: 50px;
		height: 32px;
		background-color: var(--tertiary-color);
		display: flex;
		justify-content: flex-start;
		border-radius: 50px;
		padding: 2.8px;
		cursor: pointer;
		-webkit-tap-highlight-color: transparent;
	}

	.isOn {
		justify-content: flex-end;
	}

	.handle {
		width: 25px;
		height: 25px;
		background-color: var(--secondary-accent);
		border-radius: 40px;
	}
</style>
