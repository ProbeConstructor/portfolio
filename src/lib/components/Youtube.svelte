<script lang="ts">
	let YouTubeIframeAPIReady = false;
	let player;
	import { createEventDispatcher, onMount } from 'svelte';
	const dispatch = createEventDispatcher();
	export let videoId;
	export let height;
	export let width;
	onMount(() => {
		let youtubeIframeURL = 'https://www.youtube.com/iframe_api';
		if (!playerLoaded(youtubeIframeURL)) {
      var tag = document.createElement('script');
			tag.src = youtubeIframeURL;
			var firstScriptTag = document.getElementsByTagName('script')[0];
			firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
		}
		window.onYouTubeIframeAPIReady = function () {
      window.dispatchEvent(new Event('YouTubeIframeAPIReady'));
		};
		window.addEventListener('YouTubeIframeAPIReady', function () {
			if (YouTubeIframeAPIReady == false) {
				YouTubeIframeAPIReady = true;
				createPlayer();
			}
		});
		function createPlayer() {
			player = new YT.Player(videoId, {
				height: height,
				width: width,
				videoId: videoId,
				events: {
					onStateChange: onPlayerStateChange
				}
			});
		}
		if (YouTubeIframeAPIReady) {
			createPlayer();
		}
	});
	function playerLoaded(url = '') {
		var scripts = document.getElementsByTagName('script');
		for (var i = scripts.length; i--; ) {
			if (scripts[i].src == url) return true;
		}
		return false;
	}
	function onPlayerStateChange({ data }) {
		dispatch('StateChange', data);
	}
	export function playVideo() {
		player.playVideo();
	}
</script>

<div class="yt-component">
	<div id={videoId} {height} {width} />
</div>

<style>
  .yt-component {
    display: flex;
    justify-content: center;
  }
</style>
