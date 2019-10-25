import Api from '@/plugins/axios'

export const state = () => ({
	polls: []
})

export const mutations = {
	SET_POLLS(state, polls) {
		state.polls = polls
	}
}

export const actions = {
	async FETCH_POLLS({ commit }) {
		try {
			const res = await Api().get('/quizzes')
			// console.log(res)
			commit('SET_POLLS', res.data.data)
		} catch (e) {
			console.log(e.response.data)
		}
	},
	async ADD_POLL({ commit }, data) {
		try {
			const res = await this.$axios.post('/quizzes', data)
			console.log(res)
			commit('SET_POLLS', res.data.data)
		} catch (e) {
			console.log(e.response.data)
		}
	}
}

export const getters = {
	GET_POLLS_LIST(state) {
		return state.polls
	}
}
