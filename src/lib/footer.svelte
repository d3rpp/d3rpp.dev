<svelte:options immutable={true} />

<script lang="ts">
	import LinkedIn from '$lib/icons/linkedin.svelte';
	import Facebook from './icons/facebook.svelte';
	import Github from './icons/github.svelte';
	import Gitlab from './icons/gitlab.svelte';
	import Instagram from './icons/instagram.svelte';
</script>

<footer>
	<div class="social">
		<Github />

		<Gitlab />

		<LinkedIn />

		<Instagram />

		<Facebook />
	</div>
	<span>
		made with <span class="h">&heart;</span> and
		<a href="https://kit.svelte.dev">SvelteKit</a>
	</span>
</footer>

<style lang="scss">
	@use '../sass/colours' as colours;
	@use '../sass/index' as index;

	$footer-height: 64px * 2;
	$inline-breakpoint: 1200px;

	footer {
		position: fixed;
		bottom: 0px;
		left: 0px;

		width: 100vw;
		min-height: $footer-height;

		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;

		padding: 0px 64px;
	}

	@media screen and (max-width: "#{$inline-breakpoint}") {
		footer {
			position: initial;
			flex-direction: column;
			justify-content: center;

			padding: 0px 32px 16px;

			& > .social {
				width: Min(400px, 100vw);
				margin-bottom: 16px;

				$new_size: Min(10vw, 56px);
				$new_icon_size: Min($new_size / 2, 32px);

				:global(a) {
					width: $new_size;
					height: $new_size;
				}

				:global(svg) {
					width: $new_icon_size;
					height: $new_icon_size;
				}
			}
		}

		span {
			width: 100%;
		}
	}

	.social {
		display: flex;
		justify-content: center;
		flex-direction: row;
		flex-wrap: wrap;

		$size: 48px;
		$margin: 8px;
		$icon_size: 24px;

		:global(a) {
			width: $size;
			height: $size;

			margin: 0px $margin;

			display: grid;
			place-items: center;
		}

		:global(a:hover svg) {
			stroke: colours.$text-hover;
		}

		:global(a svg) {
			fill: transparent;
			stroke: colours.$text;

			width: $icon_size;
			height: $icon_size;
		}
	}

	span {
		vertical-align: middle;
		text-align: center;
		height: 64px;
		line-height: 64px;

		span {
			color: #ee6352;
		}

		a {
			color: colours.$text;

			&:hover {
				color: colours.$text-hover;
			}
		}
	}
</style>
