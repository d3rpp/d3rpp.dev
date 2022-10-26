import adapter from '@sveltejs/adapter-vercel';
import preprocess from 'svelte-preprocess';

let hashmap = {};

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter(),

		files: {
			assets: "public"
		},

		csp: {
			mode: 'auto'
		},

		prerender: {
			enabled: true,
		},

		trailingSlash: 'ignore',
	},

	compilerOptions: {
		cssHash: ({ name, filename, css, hash }) => {
			let content_hash = hash(`${name}${filename}${css}`);

			if (!hashmap[content_hash]) {
				hashmap[content_hash] = Object.keys(hashmap).length.toString(16);
			}

			return `d${hashmap[content_hash]}`;
		}
	}
};

export default config;
