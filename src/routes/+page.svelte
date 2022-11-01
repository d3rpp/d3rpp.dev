<script lang="ts">
	import MeWEBP from '../assets/me.webp';

	import { quartOut } from 'svelte/easing';
	import { fly } from 'svelte/transition';

	import CrypticText from '$lib/cryptic_text.svelte';

	const names = ['Hudson Curren', 'Huddy Buddy'];

	const subtitles = [
		'code man',
		'rust enjoyer',
		'brogrammer',
		'competitive rower',
	];

	let redo_title: () => void;
	let redo_subtitle: () => void;
</script>

<section id="top">
	<img
		src={MeWEBP}
		alt="me"
		in:fly={{ duration: 200, easing: quartOut, delay: 100 }}
	/>

	<CrypticText
		options={names}
		bind:rebuild={redo_title}
		let:animated
		let:choice
	>
		<h1 class="title" on:mousedown={redo_title} aria-label={choice}>
			{animated}
		</h1>
	</CrypticText>

	<CrypticText
		options={subtitles}
		bind:rebuild={redo_subtitle}
		let:animated
		let:choice
	>
		<h2 class="subtitle" on:mousedown={redo_subtitle} aria-label={choice}>
			{animated}
		</h2>
	</CrypticText>
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

		$img-size: Min(40vh, Min(75vw, 250px, 25vh));

		img {
			width: $img-size;
			height: $img-size;

			user-select: none;

			border-radius: 100%;
			border: 3px solid colours.$text;
			box-shadow: 0px 0px 16px 0px rgba(colours.$text, 0.2);

			&:hover {
				border: 3px solid colours.$text-hover;
				box-shadow: 0px 0px 12px 0px rgba(colours.$text-hover, 0.2);
			}

			transition: border 1000ms index.$ease, box-shadow 200ms index.$ease;
		}

		h1.title,
		h2.subtitle {
			text-align: center;

			user-select: none;

			&:hover {
				color: colours.$text-hover;
				text-shadow: 0px 0px 2px rgba(colours.$text-hover, 0.7);
			}

			transition: font-size 200ms index.$ease,
				text-shadow 200ms index.$ease, color 200ms index.$ease;
		}

		h1.title {
			font-weight: 200;
			margin: 32px 0;
			font-size: Min(48px, 9.5vw, 10vh);

			height: 64px;
			line-height: 64px;
		}

		h2.subtitle {
			font-weight: 200;
			font-size: Min(32px, 6vw, 5vh);

			height: 43px;
			line-height: 43px;

			text-align: center;
			display: grid;
			place-items: center;
		}
	}
</style>
