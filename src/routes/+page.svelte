<script lang="ts">
	import CrypticText from '$lib/cryptic_text.svelte';
	import MeWEBP from '../assets/me.webp';

	import { quartOut } from 'svelte/easing';
	import { fly } from 'svelte/transition';

	const subtitles = [
		'code man 💻',
		'gamer 🎮',
		'intern developer 💁',
		'rust enjoyer 🚀',
		'brogrammer 💪😎',
		'competitive rower 🚣‍♂️',
		'apple music user 🎵',
		'i use arch btw 😳',
		'aussie lad 🇦🇺',
	];

	let subtitle_choice =
		subtitles[Math.floor(Math.random() * subtitles.length)];
</script>

<section id="top">
	<img
		src={MeWEBP}
		alt="me"
		in:fly={{ duration: 200, easing: quartOut, delay: 100 }}
	/>

	<h1 class="title">
		<CrypticText wanted_text="Hudson Curren" />
	</h1>

	<h2 class="subtitle">
		<CrypticText wanted_text={subtitle_choice} />
	</h2>
</section>

<style lang="scss">
	@use '../sass/colours' as colours;
	@use '../sass/index' as index;

	$text-threshold: 600px;

	section {
		width: 100vw;
		height: 100vh;
	}

	section#top {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		$img-size: Min(40vh, Min(75vw, 250px));

		img {
			width: $img-size;
			height: $img-size;

			border-radius: 100%;
			border: 3px solid colours.$text;
			box-shadow: 0px 0px 16px 0px rgba(colours.$text-hover, 0.7);
		}

		h1.title,
		h2.subtitle {
			display: grid;
			place-items: center;
			text-align: center;
		}

		h1.title {
			font-weight: 200;
			margin: 32px 0;
			font-size: 48px;

			height: 64px;
		}

		h2.subtitle {
			font-weight: 200;
			height: 32px;
		}

		@media screen and (max-width: "#{$text-threshold}"){
			h1.title {
				font-size: 9.5vw;
			}

			h2.subtitle {
				font-size: 6vw;
			}
		}
	}
</style>
