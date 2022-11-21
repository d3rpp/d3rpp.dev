import adapter from '@sveltejs/adapter-vercel';
import preprocess from 'svelte-preprocess';
import { to } from 'base26';

let hashmap = {};

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter(),

		files: {
			assets: 'public',
		},

		prerender: {
			enabled: false,
		},

		csp: {
			mode: 'auto',
			directives: {
				'style-src': ['self', 'unsafe-inline'],
				'default-src': ['self'],
			},
		},

		alias: {
			$assets: 'src/assets',
		},

		trailingSlash: 'ignore',
	},

	compilerOptions: {
		cssHash: ({ name, filename, css, hash }) => {
			let content_hash = hash(`${name}${filename}${css}`);

			if (!hashmap[content_hash]) {
				hashmap[content_hash] =
					to(Object.keys(hashmap).length + 1);
			}

			return hashmap[content_hash];
		},
	},
};

export default config;
