import preprocess from 'svelte-preprocess';

import path from 'path';

import vercel from '@sveltejs/adapter-vercel';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess(),
	kit: {
		target: '#svelte',
		vite: {
			resolve: {
				alias: {
					$static: path.resolve('./static/')
				}
			}
		},
		adapter: vercel({
			pages: 'build',
			assets: 'build',
			fallback: null
		})
	}
};

export default config;
