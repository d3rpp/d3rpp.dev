<script lang="ts">
	import { quartOut } from 'svelte/easing';
	import { fade } from 'svelte/transition';
	import { variables } from './utils';

	export let title: string;
	export let height: string = '33vh';
</script>

<div
	id="top"
	class="banner"
	style:height
	in:fade={{
		duration: variables.transition_duration,
		easing: quartOut,
		delay: variables.transition_duration,
	}}
	out:fade={{
		duration: variables.transition_duration,
		easing: quartOut,
		delay: 0,
	}}
>
	<h1
		in:fade={{
			duration: variables.transition_duration,
			easing: quartOut,
			delay: variables.transition_duration + 100,
		}}
	>
		{title}
	</h1>
</div>

<style lang="scss">
	$banner-height: 64px;
	$banner-background: rgba(0,0,0,0.1);

	.banner {
		display: flex;
		justify-content: center;
		align-items: center;

		width: 100vw;

		@media screen and (max-width: 850px) {
			padding-top: 48px;
		}

		background-color: $banner-background;

		box-shadow: 0px $banner-height 0px 0px $banner-background;
	}
</style>
