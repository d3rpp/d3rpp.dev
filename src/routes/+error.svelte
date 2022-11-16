<script lang="ts">
	import { page } from '$app/stores';
</script>

<section
	aria-invalid="true"
	aria-errormessage={$page.error == null
		? null
		: `${$page.status} ${$page.error.message}`}
>
	<h1 class="oh-no">Oh No, a</h1>
	<h1 class="status">{$page.status}</h1>

	<h1 class="status-text">
		{#if $page.error}
			{$page.error.message}
		{:else}
			error
		{/if}
	</h1>

	<h1 class="occured">has occured</h1>
</section>

<style lang="scss">
	section {
		width: 100vw;
		height: 100vh;

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		h1 {
			margin: Min(1vh, 8px) 0;
		}

		.status {
			font-weight: 100;
			font-size: Min(15em, 30vw, 20vh);
		}

		.status-text {
			font-weight: 100;
			font-size: Min(5em, 10vw, 6.66vh);
		}

		.oh-no,
		.occured {
			font-size: Min(3em, 6vw, 4vh);
			font-weight: 500;
		}
	}
</style>
