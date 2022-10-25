<script lang="ts">
	import { onMount } from 'svelte';
	import { BASE_CHAR_SET, strip_not_unique_chars, get_random_char } from './utils';

	export let wanted_text: string;

	const MAX_ATTEMPTS_PER_INTERVAL = 3;
	$: CHARSET = strip_not_unique_chars(BASE_CHAR_SET + wanted_text);

	let displayed_text: string[] = [];
	let current_char = 0;
	let current_attempt = 0;

	const spawn = () => {
		if (current_char >= wanted_text.length - 1) {
			displayed_text = wanted_text.split('');
			return;
		}

		if (current_attempt >= MAX_ATTEMPTS_PER_INTERVAL) {
			displayed_text[current_char] = wanted_text[current_char];
			current_char += 1;
			current_attempt = 0;
		}

		let char = get_random_char(CHARSET);

		displayed_text[current_char] = char;

		if (char == wanted_text[current_char]) {
			current_char += 1;
			current_attempt = 0;
		}

		current_attempt += 1;

		requestAnimationFrame(spawn);
	};

	onMount(() => {
		CHARSET = strip_not_unique_chars(CHARSET);

		spawn();
	});
</script>

{displayed_text.join('')}
