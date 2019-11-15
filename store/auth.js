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
		categories: [],
		code: '',
		country: ''
	},
	dictionaries: {},
	token: null
})

export const mutations = {
	SET_REGISTRATION_DATA(state, { field, value }) {
		state.userRegistrationData[field] = value
		console.log(field + ' : ' + state.userRegistrationData[field])
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
	},

	SET_DICTIONARIES(state, dict) {
		let { field, value } = dict
		state.dictionaries[field] = value
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
				password: state.userRegistrationData.password,
				isBuisness: state.userRegistrationData.type
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
			console.log('authrorized ', token)
			$cookies.set('token', token)
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
	},

	async FETCH_DICTIONARIES({ commit }, id) {
		try {
			let res = await this.$axios.get(
				`/users/dictionaries/${id ? id : 0}?with[children]`
			)
			res = res.data.data
			res = res.filter(item => item.children.length !== 0)
			console.log('dictionaries: ' + res)
			commit('SET_DICTIONARIES', { field: 'family', value: res })
		} catch (e) {
			console.log('dict error: ', e)
		}
	}
}

export const getters = {
	GET_REGISTRATION_DATA: state => state.userRegistrationData,
	GET_AUTHORIZATION_DATA: state => state.userAuthorizationData,
	GET_TOKEN: state => state.token,
	GET_USER: state => state.userData,
	GET_DICTIONARIES: state => state.dictionaries,
	IS_LOGGED_IN: state => !!state.token
}
