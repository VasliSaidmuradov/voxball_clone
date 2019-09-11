import Vue from 'vue'
export default function({ app }) {
	Vue.prototype.$navigate = options => {
		if (typeof options === 'string') {
			app.router.push('/' + app.i18n.locale + options)
		} else {
			let myOptions = { ...options }
			myOptions.path = '/' + app.i18n.locale + options.path
			app.router.push(myOptions)
		}
	}
}
