import preprocess from 'svelte-preprocess';

import path from 'path';
import adapter from '@sveltejs/adapter-static';

let devmode =
	process.env.NODE_ENV === 'production'
		? {
				base: '/portfolio',
				assets: '/portfolio'
		  }
		: {};

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
		paths: devmode,
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: null
		})
	}
};

export default config;
