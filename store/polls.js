import { Store } from 'vuex'
import Api from '@/plugins/axios'

export const state = () => ({
	pollsList: [],
	poll: {},
	pollAnswer: {},
	pollComments: {}
})

export const mutations = {
	SET_POLLS(state, polls) {
		state.pollsList = polls
	},

	SET_POLL(state, poll) {
		state.poll = poll
	},

	SET_POLL_COMMENTS(state, comments) {
		state.pollComments = comments
	},

	FORMATTED_POLL_ANSWERS(state, questions) {
		questions.forEach(item => {
			state.pollAnswer[item.id] = []
		})
	},

	SET_POLL_ANSWER(state, { questionId, answers }) {
		console.log(answers)
		state.pollAnswer[questionId] = answers
	},

}

export const actions = {
	async FETCH_POLLS({ commit }, data) {
		try {
			const res = await this.$axios.get(`/quizzes?with[author]&with[category]&${data}`)
			// console.log(res.data.data)
			// console.log(res2)
			commit('SET_POLLS', res.data.data)
		} catch (e) {
			console.log(e.response.data)
		}
	},
	async ADD_POLL({ commit }, data) {
		try {
			const res = await this.$axios.post('/quizzes', data)
			// console.log(res)
			// commit('SET_POLLS', res.data.data)
		} catch (e) {
			console.log(e.response.data)
		}
	},

	async FETCH_POLL({ commit }, id, data) {
		try {
			// console.log(id)
			const res = await this.$axios.get(`/quizzes/${id}?with[author]&with[category]&with[questions][with][variants]&${data}`)
			console.log(res.data.data)
			commit('SET_POLL', res.data.data)
			commit('FORMATTED_POLL_ANSWERS', res.data.data.questions)

		} catch ({ e }) {
			console.log({ e })
		}
	},

	// async FETCH_POLL_COMMENTS({ commit }, id) {
	// 	try {
	// 		let id = 1
	// 		const res = await this.$axios.get(`/quizzes/${id}/comments`)
	// 		console.log(res.data.data)
	// 		commit('SET_POLL_COMMENTS', res.data.data)
	// 	} catch ({ e }) {
	// 		console.log({ e })
	// 	}
	// },

	// async FETCH_POLL_COMPLETED()

	async VOTE({ commit, state }, id) {
		try {
			console.log(state.pollAnswer)
			
			// const res = await this.$axios.post(`/quizzes/${id}/answers`)
		} catch ({ e }) {
			console.log({ e })
		}
	}
}

export const getters = {
	GET_POLLS_LIST: state => {
		return state.pollsList.map(item => ({
			...item,
			title: item.title.substr(0, 60) + '...',
			categoryTitle: item.category.title.substr(0, 15) + '...',
			createdAt: new Date(item.createdAt).toLocaleDateString(),
			authorName: item.author.name.split(' ').slice(0, 3).join(' '),
			preview: item.preview == '' ? '/_nuxt/assets/img/poll__image2.png' : item.preview,
			endedAt: Date.parse(item.endedAt) < Date.parse(new Date()),
			path: `/polls/${item.id}`
		}))
	},

	GET_POLL: state => ({
		...state.poll,
		categoryTitle: state.poll.category.title.substr(0, 15) + '...',
		createdAt: new Date(state.poll.createdAt).toLocaleDateString(),
		authorName: state.poll.author.name.split(' ').slice(0, 3).join(' '),
		preview: state.poll.preview == '' ? '/_nuxt/assets/img/poll-no-info-image.png' : state.poll.preview,
		authorAvatar: state.poll.author.avatar == '' ? '/_nuxt/assets/img/poll-no-avatar.png' : state.poll.author.avatar,
		path: `/polls/${state.poll.id}`,
		complete: new Date(state.poll.endedAt) < new Date()
		// questionsTitle: state.poll.questions.title,
		// type: state.poll.questions.type
	}),

	GET_POLL_COMMENTS: state => ({
		...state.pollComments
	}),

	GET_POLL_ANSWER: state => state.pollAnswer
}

// console.log(Store)