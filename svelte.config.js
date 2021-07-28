import preprocess from 'svelte-preprocess';

import path from 'path';
import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess(),
	kit: {
		target: '#svelte',
		paths: {
      base: "/portfolio",
      assets: "/portfolio",
    },
		vite: {
			resolve: {
				alias: {
					$static: path.resolve('./static/')
				}
			}
		},
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: null
		})
	}
};

export default config;
