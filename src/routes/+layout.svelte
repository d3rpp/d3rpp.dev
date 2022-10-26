<svelte:options immutable={true} />

<script lang="ts">
	import '../sass/global.scss';
	import '../sass/jetbrainsmono.scss';

	import Header from '$lib/header.svelte';
	import Footer from '$lib/footer.svelte';

	import HEAD from '$lib/head';
</script>

<svelte:head>
	<title>{HEAD.title}</title>

	{#each Object.keys(HEAD.meta) as key} 
		<meta name={key} content={HEAD.meta[key]}>
	{/each}

	{#each HEAD.link as link}
		<link rel={link.rel} href={link.href} />
	{/each}
</svelte:head>

<Header />
<slot />
<Footer />
