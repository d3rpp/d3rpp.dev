<script lang="ts">
	import { onMount } from 'svelte';
	import { BASE_CHAR_SET, get_random_char, strip_not_unique_chars } from './utils';

	export let options: string[];

	const generate_choice = () => {
		return options[Math.floor(Math.random() * options.length)];
	};

	let choice = generate_choice();

	const MAX_ATTEMPTS_PER_INTERVAL = 3;

	$: CHARSET = strip_not_unique_chars(BASE_CHAR_SET + choice);

	let displayed_text: string[] = [];
	let current_char = 0;
	let current_attempt = 0;

	const spawn = () => {
		if (current_char >= choice.length - 1) {
			displayed_text = choice.split('');
			return;
		}

		if (current_attempt >= MAX_ATTEMPTS_PER_INTERVAL) {
			displayed_text[current_char] = choice[current_char];
			current_char += 1;
			current_attempt = 0;
		}

		let char = get_random_char(CHARSET);

		displayed_text[current_char] = char;

		if (char == choice[current_char]) {
			current_char += 1;
			current_attempt = 0;
		}

		current_attempt += 1;

		requestAnimationFrame(spawn);
	};

	export const rebuild = () => {
		displayed_text = [];
		choice = generate_choice();
		current_attempt = 0;
		current_char = 0;
		spawn();
	};

	onMount(spawn);
</script>

{displayed_text.join('')}
