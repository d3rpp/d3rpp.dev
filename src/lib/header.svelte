<script lang="ts">
	import { navigating } from '$app/stores';
</script>

<header>
	<a href="/" class="title"> d3rpp.dev </a>
</header>

<div class="load">
	<div class="bar" class:active={$navigating != null} />
</div>

<style lang="scss">
	@use '../sass/index' as index;
	@use '../sass/colours' as colours;

	$header-height: 72px;
	$header-height-desktop-mutliplier: 1.5;
	$inline-threshold: 700px;
	$bg-threshold: 850px;

	@keyframes load-line {
		0% {
			width: 0%;
			left: 0%;
		}
		50% {
			width: 100%;
			left: 0%;
		}
		100% {
			width: 0%;
			left: 100%;
		}
	}

	.load {
		position: fixed;
		top: 0px;
		left: 0px;

		z-index: 69;

		overflow: hidden;
		width: 100%;
		height: 2px;

		.bar {
			position: relative;
			top: 0;
			left: 0%;
			width: 0%;
			background: colours.$text-hover;
			height: 2px;

			transition: opacity 50ms ease;

			&:not(.active) {
				opacity: 0;
			}

			&.active {
				animation: load-line 1s infinite;
			}
		}
	}

	header {
		position: fixed;
		top: 0px;
		left: 0px;

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;

		width: 100vw;
		height: $header-height * $header-height-desktop-mutliplier;

		@media screen and (max-width: "#{$inline-threshold}") {
			justify-content: center;

			.title {
				padding: 0 8px;
				width: 100vw;
			}
		}

		@media screen and (max-width: "#{$bg-threshold}") {
			background-color: colours.$background;
			height: $header-height;

			box-shadow: 0px 4px 8px rgba(colours.$background, 0.5);
		}
	}

	.title {
		@include index.jbm200;

		height: $header-height;

		user-select: none;

		padding: 0 64px;

		display: grid;
		place-items: center;

		color: colours.$text;
		text-decoration: none;
		font-size: 28px;

		&:hover {
			color: colours.$text-hover;
		}
	}
</style>
