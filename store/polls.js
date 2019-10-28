import Api from '@/plugins/axios'

export const state = () => ({
	polls: [],
	newPolls: [],
	newPoll: {}
})

export const mutations = {
	SET_POLLS(state, polls) {
		state.polls = polls
	},
	SET_POLL_DATA(state, data) {
		state.newPoll[data.field] = state.newPoll[data.value]
		console.log(`${data.field} : ${state.newPoll[data.field]}`)
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
	async ADD_POLL({ commit, state }) {
		try {
			// const poll = state.newPoll
			const poll = {
				title: 'Pollllllll 4',
				startedAt: '2019-10-26 08:25:47',
				endedAt: '2019-11-20 08:25:47'
			}
			const res = await this.$axios.post('/quizzes', poll)
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
