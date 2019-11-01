// import { stat } from 'fs'

export const state = () => ({
	userData: {
		id: '',
		emial: '',
		name: '',
		rating: '',
		isBuisness: ''
	},
	userAuthorizationData: {
		email: '',
		password: ''
	},
	userRegistrationData: {
		type: false,
		phone: '',
		email: '',
		password: '',
		name: '',
		username: '',
		categories: { 1: '', 2: '', 3: '' },
		code: '',
		country: ''
	},
	token: null
})

export const mutations = {
	SET_REGISTRATION_DATA(state, { field, value }) {
		state.userRegistrationData[field] = value
	},

	SET_AUTHORIZATION_DATA(state, { field, value }) {
		state.userAuthorizationData[field] = value
	},

	SET_TOKEN(state, token) {
		state.token = token
	},

	SET_USER(state, user) {
		state.userData = {
			...user
		}
	}
}

export const actions = {
	async USER_REGISTRATION({ commit, state }) {
		try {
			const data = {
				// ...state.userRegistrationData,
				name: state.userRegistrationData.name,
				username: state.userRegistrationData.email,
				email: state.userRegistrationData.email,
				password: state.userRegistrationData.password
				// isBuisness: state.userRegistrationData.type
				// phone: state.userRegistrationData.phone.replace(/\D/g, '')
			}
			const res = await this.$axios.post('/auth/register', data)
			const token = res.data.data.token
			console.log('authrorized ', token)
			commit('SET_TOKEN', token)
			$cookies.set('token', token)
		} catch (e) {
			console.log('error:', e)
			throw e
		}
	},

	async USER_INFO({ commit }) {
		try {
			const res = await this.$axios.get('/auth/info')
			console.log(res.data.data)
		} catch (e) {
			console.log('error user_info ', e)
		}
	},

	async USER_AUTHORIZATION({ commit, state }) {
		try {
			const data = {
				email: state.userAuthorizationData.email,
				password: state.userAuthorizationData.password
			}
			const res = await this.$axios.post('/auth/login', data)
			const token = res.data.data.token
			console.log('user login: ', token)
			const user = res.data.data.user
			// const userPolls = await this.$axios.get(
			// 	'/quizzes?filter[author.id]=is:76'
			// )
			// console.log(user.name + ' user polls: ' + userPolls.data)
			commit('SET_USER', user)
			commit('SET_TOKEN', token)
		} catch (e) {
			console.log('error user_login ', e)
		}
	},

	async USER_UNAUTHORIZATION({ commit }) {
		try {
			$cookies.remove('token')
			commit('SET_TOKEN', '')
		} catch (e) {
			console.log('error user_logout', e)
		}
	}
}

export const getters = {
	GET_REGISTRATION_DATA: state => state.userRegistrationData,
	GET_AUTHORIZATION_DATA: state => state.userAuthorizationData,
	GET_TOKEN: state => state.token,
	GET_USER: state => state.userData,
	IS_LOGGED_IN: state => !!state.token
}
