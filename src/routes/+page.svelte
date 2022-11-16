<script lang="ts">
	import MeWEBP from '../assets/me.webp';

	import { quartOut } from 'svelte/easing';
	import { fade, fly } from 'svelte/transition';

	import CrypticText from '$lib/cryptic_text.svelte';
	import { variables } from '$lib/utils';

	const names = ['Hudson Curren'];

	const subtitles = [
		'code man',
		'rust enjoyer',
		'brogrammer',
		'competitive rower',
	];

	let redo_title: () => void;
	let redo_subtitle: () => void;
</script>

<section
	id="top"
	out:fade={{
		duration: variables.transition_duration,
		easing: quartOut,
		delay: 0,
	}}
>
	<div class="container title">
		<img
			src={MeWEBP}
			alt="me"
			in:fly={{
				y: 10,
				duration: variables.transition_duration,
				easing: quartOut,
				delay: variables.transition_duration,
			}}
		/>

		<div
			class="text"
			in:fly={{
				y: 10,
				duration: variables.transition_duration,
				easing: quartOut,
				delay: variables.transition_duration,
			}}
		>
			<CrypticText options={names} let:display let:choice>
				<h1 class="title" on:mousedown={redo_title} aria-label={choice}>
					{@html display.join('')}
				</h1>
			</CrypticText>

			<CrypticText options={subtitles} let:display let:choice>
				<h2
					class="subtitle"
					on:mousedown={redo_subtitle}
					aria-label={choice}
				>
					{@html display.join('')}
				</h2>
			</CrypticText>
		</div>
	</div>
	<!-- 
		<div
			class="container links"
			in:fly={{
				y: 10,
				duration: variables.transition_duration,
				easing: quartOut,
				delay: variables.transition_duration + 100,
			}}
		/> 
	-->
</section>

<style lang="scss">
	@use '../sass/colours' as colours;
	@use '../sass/index' as index;

	$text-threshold: 1000px;
	$nav-threshold: 750px;

	section {
		width: 100vw;
		height: Calc(100vh - ((64px * 2) + 1em)); // idk, it works
	}

	section#top {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		.container {
			margin: 0 auto;
			display: flex;

			&.title {
				flex-direction: row;
				justify-content: flex-start;
				align-items: center;

				// margin-bottom: 100px;

				@media screen and (max-width: "#{$text-threshold}") {
					flex-direction: column;
					justify-content: center;
					align-items: center;
				}
			}

			// FOR WHEN I EVENTUALLY ADD LINKS ON THE PAGE

			// &.links {
			// 	height: 200px;
			// 	flex-direction: row;
			// 	justify-content: space-around;
			// 	align-items: center;
			//
			// 	@media screen and (max-width: "#{$nav-threshold}") {
			// 		flex-direction: column;
			// 		justify-content: center;
			// 		align-items: center;
			// 		width: 50vw;
			// 		height: 150px;
			// 		border-top: 1px solid rgba(colours.$text-hover, 0.1);
			// 	}
			// 	
			// 	a {
			// 		font-size: 18px;
			// 		height: 100px;
			// 		width: 150px;
			// 		display: grid;
			// 		place-items: center;
			// 		text-align: center;
			// 		color: colours.$text;
			//
			// 		@media screen and (max-width: "#{$nav-threshold}") {
			// 			height: 75px;
			// 		}
			//
			// 		&:hover {
			// 			color: colours.$text-hover;
			// 			text-shadow: 0px 0px 2px rgba(colours.$text-hover, 0.7);
			// 		}
			// 	}
			// }

			.text {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: flex-start;
				// width: 100%;
				padding: 0 32px;

				@media screen and (max-width: "#{$text-threshold}") {
					padding: 32px 0;
					align-items: center;
				}
			}
		}

		$img-size: Min(75vw, 250px, 25vh);

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
			text-align: left;

			user-select: none;

			&:hover {
				color: colours.$text-hover;
				text-shadow: 0px 0px 2px rgba(colours.$text-hover, 0.7);
			}

			transition: text-shadow 200ms index.$ease, color 200ms index.$ease;
		}

		h1.title {
			font-weight: 200;
			margin: 32px 0;
			font-size: Min(48px, 9.5vw, 10vh);

			height: Min(48px, 9.5vw, 10vh);
			line-height: Min(48px, 9.5vw, 10vh);
		}

		h2.subtitle {
			font-weight: 200;
			font-size: Min(32px, 6vw, 5vh);

			height: Min(32px, 6vw, 5vh);
			line-height: Min(32px, 6vw, 5vh);
		}
	}
</style>
