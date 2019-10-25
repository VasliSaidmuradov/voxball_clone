import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const actions = {
	nuxtServerInit({ commit, dispatch, cookies }, { req }) {
		let cokkie = null
		console.log(cookies)
		// console.log($cookies.get('token'))
		if (req.headers.cookie) {
		}
		console.log('req', req.headers.cookie)
	}
}
