module.exports = {
	modules: [
		'@nuxtjs/style-resources',
		'nuxt-i18n',
		'@nuxtjs/axios',
		'@nuxtjs/auth'
	],
	styleResources: {
		scss: ['@/assets/css/variables.scss']
	},
	i18n: {
		lazy: true,
		locales: [
			{ name: 'рус', code: 'ru', file: 'ru.js' },
			{ name: 'қаз', code: 'kk', file: 'kk.js' },
			{ name: 'eng', code: 'en', file: 'en.js' }
		],
		strategy: 'prefix',
		langDir: 'lang/',
		defaultLocale: 'ru'
	},
	axios: {
		baseURL: 'https://cms.nova.st/api/v1',
		credentials: true
	},
	router: {
		middleware: 'test'
	},
	plugins: [
		'~/plugins/global.js',
		'~/plugins/navigate.js',
		{ src: '~/plugins/ckEditor.js', mode: 'client' }
	],
	head: {
		title: 'voxball',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: 'Nuxt.js project' }
		],
		link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
	},
	css: ['@/assets/css/main.scss'],

	loading: { color: '#3B8070' },
	build: {
		extend(config, { isDev, isClient }) {
			if (isDev && isClient) {
				config.module.rules.push({
					enforce: 'pre',
					test: /\.(js|vue)$/,
					loader: 'eslint-loader',
					exclude: /(node_modules)/
				})
			}
		}
	},
	server: {
		port: 3000 // default: 3000
	}
}
