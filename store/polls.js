import Api from '@/plugins/axios'
// import { stat } from 'fs'

export const state = () => ({
	polls: [],
	newPolls: [],
	newPoll: {
		title: '',
		description: '',
		startedAt: '',
		endedAt: '',
		isPrivate: '',
		preview: '',
		video: '',
		videoUrl: '',
		viewCount: '',
		isPrivate: false,
		authorId: ''
	}
})

export const mutations = {
	SET_POLLS(state, polls) {
		state.polls = polls
	},
	SET_NEW_POLL_DATA(state, data) {
		state.newPoll[data.field] = data.value
		// console.log(`${data.field} : ${state.newPoll[data.field]}`)
	},
	SET_NEW_POLL_CLEAR(state) {
		for (let field in state.newPoll) {
			state.newPoll[field] = null
			// console.log(`${field} : ${state.newPoll[field]}`)
		}
	}
}

export const actions = {
	async FETCH_POLLS({ commit }) {
		try {
			const res = await this.$axios.get('/quizzes')
			const res2 = await this.$axios.get('/auth/info')
			console.log('auth: ', res2.data.data)
			commit('SET_POLLS', res.data.data)
		} catch (e) {
			console.log(e.response.data)
		}
	},

	async ADD_POLL({ commit, state }) {
		try {
			// const poll = state.newPoll
			const poll = {
				title: state.newPoll.title,
				description: state.newPoll.description,
				startedAt: state.newPoll.startedAt,
				endedAt: state.newPoll.endedAt,
				viewCount: 1,
				isPrivate: state.newPoll.isPrivate,
				authorId: state.newPoll.authorId,
				categoryId: state.newPoll.category
			}
			// const res = await this.$axios.post('/quizzes', poll)
			// console.log(res)
			// commit('SET_POLLS', res.data.data)
			commit('SET_NEW_POLL_CLEAR')
		} catch (e) {
			console.log(e.response.data)
		}
	}
}

export const getters = {
	GET_POLLS_LIST: state => state.polls,
	GET_NEW_POLL: state => state.newPoll
}
