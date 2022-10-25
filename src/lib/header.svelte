<header>
	<a href="/" class="title">d3rpp.dev</a>
</header>

<style lang="scss">
	@use '../sass/index' as index;
	@use '../sass/colours' as colours;

	$header-height: 64px;
	$inline-threshold: 700px;
	$bg-threshold: 850px;

	header {
		position: fixed;
		top: 0px;
		left: 0px;

		display: flex;
		justify-content: flex-start;
		align-items: center;

		width: 100vw;
		height: $header-height;

		.title {
			@include index.jbm200;

			height: $header-height;

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

		@media screen and (max-width: "#{$inline-threshold}") {
			justify-content: center;

			.title {
				padding: 0 8px;
				width: 100vw;
			}
		}

		@media screen and (max-width: "#{$bg-threshold}") {
			background-color: colours.$background;

			.title {
				padding: 0 8px;
				width: 100vw;
			}
		}
	}
</style>
