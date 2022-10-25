<footer>
	<span
		>made with <span>&heart;</span> and
		<a href="https://kit.svelte.dev">SvelteKit</a></span
	>
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
		height: $footer-height;

		display: flex;
		flex-direction: row;
		justify-content: flex-end;
		align-items: center;

		padding: 0px 64px;

		span {
			text-align: center;

			span {
				color: #ee6352;
			}

			a {
				color: colours.$text-hover;
			}
		}

		@media screen and (max-width: "#{$inline-breakpoint}") {
			position: initial;
			justify-content: center;

			span {
				padding: 0px 8px;
				width: 100%;
			}
		}
	}
</style>
