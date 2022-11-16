<script lang="ts">
	import '../sass/global.scss';
	import '../sass/jetbrainsmono.scss';

	import Header from '$lib/header.svelte';
	import Footer from '$lib/footer.svelte';

	import { beforeNavigate, afterNavigate } from '$app/navigation';

	import HEAD from '$lib/head';
	import { variables } from '$lib/utils';

	beforeNavigate(() => {
		if (document) {
			document.body.setAttribute('style', 'overflow-y: hidden');
		}
	});

	afterNavigate(() => {
		if (document) {
			setTimeout(() => {
				document.body.removeAttribute('style');
			}, variables.transition_duration);
		}
	});
</script>

<svelte:head>
	<title>{HEAD.title}</title>

	{#each Object.keys(HEAD.meta) as key}
		<meta name={key} content={HEAD.meta[key]} />
	{/each}

	{#each HEAD.link as link}
		<link rel={link.rel} href={link.href} />
	{/each}
</svelte:head>

<Header />
<slot />
<Footer />
