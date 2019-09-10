import Vue from 'vue'
export default function({ app }) {
	Vue.prototype.$navigate = path => {
		app.router.push('/' + app.i18n.locale + '/' + path)
	}
}
