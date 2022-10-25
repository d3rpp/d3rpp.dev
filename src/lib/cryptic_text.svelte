<script lang="ts">
	import { onMount } from 'svelte';

	export let wanted_text: string;

	const MAX_ATTEMPTS_PER_INTERVAL = 3;
	let CHARSET = 'abcdef123456;:/\\{}()[]' + wanted_text;

	let displayed_text: string[] = [];
	let current_char = 0;
	let current_attempt = 0;

	const strip_not_unique_chars = (set: string) => {
		let result = '';

		for (let i = 0; i < set.length; i++) {
			if (result.indexOf(set[i]) < 0) {
				result += set[i];
			}
		}

		return result;
	};

	const get_random_char = () => {
		return CHARSET[Math.floor(Math.random() * CHARSET.length)];
	};

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

		let char = get_random_char();

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
