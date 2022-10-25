export const BASE_CHAR_SET = 'abcdef123456';

export const strip_not_unique_chars = (set: string) => {
	let result = '';

	for (let i = 0; i < set.length; i++) {
		if (result.indexOf(set[i]) < 0) {
			result += set[i];
		}
	}

	return result;
};


export const get_random_char = (set: string) => {
	return set[Math.floor(Math.random() * set.length)];
};