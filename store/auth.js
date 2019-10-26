export const state = () => ({
	user: {},
	userRegistrationData: {
		isBusiness: false,
		country: '',
		phone: '',
		email: '',
		password: '',
		code: '',
		name: '',
		categories: []
	},
	token: null
})

export const mutations = {
	SET_REGISTRATION_DATA(state, { field, value }) {
		state.userRegistrationData[field] = value
	},

	SET_TOKEN(state, token) {
		state.token = token
	}
}

export const actions = {
	async USER_REGISTRATION({ commit, state }) {
		try {
			const data = {
				...state.userRegistrationData,
				type: state.userRegistrationData.value
			}
			console.log(data)
			// const res = await this.$axios.post(
			// 	'/auth/register',
			// 	state.userRegistrationData
			// )
			// console.log(res)
			// const token = res.data.data.token
			// console.log(token)
			// commit('SET_TOKEN', token)
			// $cookies.set('token', token)
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
	GET_REGISTRATION_DATA: state => state.userRegistrationData,
	GET_TOKEN: state => state.token
}
