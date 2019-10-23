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
			const res = await this.$axios.get('/quizzes')
			console.log(res.data.data)
			commit('SET_POLLS', res.data.data)
		} catch ({ e }) {
			console.log({ e })
		}
	}
}

export const getters = {
	GET_POLLS_LIST(state) {
		return state.polls
	}
}
