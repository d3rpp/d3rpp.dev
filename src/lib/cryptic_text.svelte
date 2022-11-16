<!-- 
	THIS IS OVERENGINEERED AS FUCK
 -->
<script lang="ts">
	import { onMount } from 'svelte';
	import { BASE_CHAR_SET, get_random_char } from './utils';

	const MAXIMUM_ATTEMPTS = 10;

	const GLOBAL_MULTIPLIER = 1.5;
	const MAGIC_NUMBER_FINISH = 2 / 3;
	const MAGIC_NUMBER_START = 4 / 3;

	export let options: string[];

	const generate_choice = () => {
		return options[Math.floor(Math.random() * options.length)];
	};

	let choice = generate_choice();
	let display: string[] = Array<string>(choice.length).fill('&nbsp;');

	// -1           = complete char in
	// 0            = attempt 0
	// other number = current attempt
	let attempts: number[] = Array<number>(choice.length).fill(0);

	const loop = () => {
		let old = choice.split('');

		choice.split('').forEach((char, index) => {
			if (
				attempts[index] <
				(index * MAGIC_NUMBER_START)
			) {
				// create new text as the animation goes
				// gives it a cryptic typing effect

				display[index] = '&nbsp;';
				attempts[index] += 1;
			} else if (
				attempts[index] >=
				(MAXIMUM_ATTEMPTS * Math.pow(index, MAGIC_NUMBER_FINISH)) /
					GLOBAL_MULTIPLIER
			) {
				// reached max number of attemps, according to some weird curve that I made here
				//
				// looks like this image
				// link: https://cdn.discordapp.com/attachments/1039658860362874982/1040039024003399750/image.png

				display[index] = char;
				attempts[index] = MAXIMUM_ATTEMPTS * index;
			} else {
				// set random char again
				display[index] = get_random_char(BASE_CHAR_SET);
				attempts[index] += 1;
			}
		});

		if (old == display) {
			attempts = [];
			return;
		};

		// requestAnimationFrame(loop)
		setTimeout(() => requestAnimationFrame(loop), 20);
	};

	onMount(() => {
		loop();
	});
</script>

<slot {display} {choice} />
