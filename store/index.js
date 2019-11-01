import Vue from 'vue'
import Vuex from 'vuex'
const cookieparser = process.server ? require('cookieparser') : undefined

Vue.use(Vuex)

export const actions = {
	nuxtServerInit({ commit, getters, dispatch }, { req }) {
		if (req.headers.cookie) {
			const parsed = cookieparser.parse(req.headers.cookie)
			if (parsed.token) {
				commit('auth/SET_TOKEN', parsed.token)
			}
			if (!!getters.GET_TOKEN) {
				dispatch('USER_INFO')
			}
		}
	}
}
