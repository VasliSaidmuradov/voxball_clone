import Api from '@/plugins/axios'

export const state = () => ({
	isBusiness: false,
	country: '',
	phone: '',
	email: '',
	password: '',
	name: '',
	username: '',
	categories: []
})

export const mutations = {
	SET_REGISTRATION_DATA(state, data) {
		state[data.field] = data.value
		console.log(data.field + ': ' + state[data.field])
	}
}

export const actions = {
	async USER_REGISTRATION({ commit, state }) {
		try {
			const user = {
				email: state.email,
				password: state.password
				// phone: '+77775555536',
				// name: state.name,
				// isBusiness: false,
				// username: state.email
				// email: state.email,
				// password: state.password,
				// phone: state.phone,
				// name: state.name,
				// isBusiness: state.isBusiness,
				// username: state.email
			}
			const res = await this.$axios.post('/auth/register', user)
			const token = res.data.data.token

			// this.$axios.setToken(token)
			// console.log('token', token)
			// $cookies.set('token', token)
			// console.log('$cookies.get()', $cookies.get('token'))
		} catch (e) {
			console.log('error:', e)
		}
	},
	async USER_INFO({ commit }) {
		try {
			// let header = { token: $cookies.get('token') }
			// const res = await this.$axios.get('/auth/info')
			// console.log('user_info: ', res)
		} catch (e) {
			console.log('error user_info', e)
		}
	}
}

export const getters = {
	GET_AUTH_LIST(state) {
		return state
	}
}
