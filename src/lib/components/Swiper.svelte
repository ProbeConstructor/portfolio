<script lang="ts">
	import { onMount } from 'svelte';
	import Swiper from 'swiper';
	import SwiperCore, { Autoplay, EffectCoverflow, Lazy, Pagination, Navigation } from 'swiper';

	import 'swiper/swiper.min.css';
	import 'swiper/components/pagination/pagination.min.css';
	import 'swiper/components/navigation/navigation.min.css';

	let swiper, next, prev;
	onMount(() => {
		SwiperCore.use([Autoplay, EffectCoverflow, Lazy, Pagination, Navigation]);
		swiper = new Swiper('.swiper-container', {
			speed: 900,
			spaceBetween: 0,
			autoplay: {
				delay: 2000,
				disableOnInteraction: false
			},
			slidesPerView: 1,
			preloadImages: false,
			lazy: {
				loadPrevNext: true
			},
			grabCursor: true,
			effect: 'coverflow',
			loop: true,
			navigation: {
				nextEl: next,
				prevEl: prev
			},
			coverflowEffect: {
				rotate: 50,
				stretch: 200,
				depth: 200,
				modifier: 1,
				slideShadows: true
			}
		});
		return () => {
			swiper.destroy();
		};
	});
	const items = [
		{ path: '280x555.png', id: '1' },
		{ path: '280x555.png', id: '2' },
		{ path: '280x555.png', id: '3' },
		{ path: '280x555.png', id: '4' },
		{ path: '280x555.png', id: '5' }
	];
</script>

<div class="swiper-container">
	<div class="swiper-wrapper">
		{#each items as item}
			<div class="swiper-slide">
				<img src={item.path} alt="img" id={item.id} />
			</div>
		{/each}
	</div>
	<div class="swiper-button-next" bind:this={next} />
	<div class="swiper-button-prev" bind:this={prev} />
</div>

<style>
	.swiper-container {
		width: 100%;
	}
	img {
		object-fit: contain;
		width: 60vw;
		padding-left: 20vw;
	}
</style>
