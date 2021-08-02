<script>
	import 'swiper/swiper.min.css';
	import 'swiper/components/pagination/pagination.min.css';
	import 'swiper/components/navigation/navigation.min.css';
	import SwiperSlide from 'swiper/esm/svelte/swiper-slide.svelte';

	const items = [
		{ path: '280x555.png', id: '1' },
		{ path: '280x555.png', id: '2' },
		{ path: '280x555.png', id: '3' },
		{ path: '280x555.png', id: '4' },
		{ path: '280x555.png', id: '5' }
	];

	import Swiper from 'swiper/esm/svelte/swiper.svelte';
	import SwiperCore, { Autoplay, EffectCoverflow, Navigation } from 'swiper/core';
	SwiperCore.use([Autoplay, EffectCoverflow, Navigation]);
</script>

<div class="swiper-container">
	<Swiper
		modules={[Autoplay, EffectCoverflow, Navigation]}
		loop={true}
		spaceBetween={0}
		slidesPerView={3}
		autoplay={{
			delay: 1000,
			disableOnInteraction: false
		}}
		coverflowEffect={{
			rotate: 50,
			stretch: 0,
			depth: 100,
			modifier: 1,
			slideShadows: true
		}}
		grabCursor={true}
		navigation={true}
	>
		{#each items as item}
			<SwiperSlide>
				<img
					src={item.path}
					alt="img"
					id={item.id}
					style="
					object-fit: cover;
						width: 100%;
						height: 50vh;"
				/>
			</SwiperSlide>
		{/each}
	</Swiper>
</div>

<style>
	.swiper-container {
		width: 100%;
	}
	img {
		object-fit: cover;
		width: 100%;
		height: 50vh;
	}
</style>
