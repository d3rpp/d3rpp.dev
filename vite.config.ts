import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';

const config: UserConfig = {
	plugins: [sveltekit()],
	
	css: {
		preprocessorOptions: undefined,
		postcss: undefined,
		devSourcemap: true,
		modules: undefined
	},

	envPrefix: "PUBLIC_"
};

export default config;
