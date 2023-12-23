import adapter from '@sveltejs/adapter-auto'
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter(),
		alias: {
			'@config': 'src/config.ts',
			'@components': 'src/lib/components/index.ts',
			'@motion': 'src/lib/motion/index.ts',
			'@languages': 'src/lib/languages/index.ts',
			'@lib': 'src/lib',
			'@stores': 'src/lib/stores',
			'@styles': 'src/lib/styles',
		},
	},
}

export default config
