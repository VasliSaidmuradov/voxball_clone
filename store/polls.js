import { Store } from 'vuex'
import Api from '@/plugins/axios'

export const state = () => ({
	pollsList: [],
	poll: {}
})

export const mutations = {
	SET_POLLS(state, polls) {
		state.pollsList = polls
	},

	SET_POLL(state, poll) {
		state.poll = poll
	}
}

export const actions = {
	async FETCH_POLLS({ commit }) {
		try {
			const res = await this.$axios.get('/quizzes?with[author]&with[category]')
			const res2 = await this.$axios.get('/auth/info')
			console.log(res.data.data)
			// console.log(res2)
			commit('SET_POLLS', res.data.data)
		} catch (e) {
			console.log(e.response.data)
		}
	},
	async ADD_POLL({ commit }, data) {
		try {
			const res = await this.$axios.post('/quizzes', data)
			console.log(res)
			// commit('SET_POLLS', res.data.data)
		} catch (e) {
			console.log(e.response.data)
		}
	},

	async FETCH_POLL({ commit }, id) {
		try {
			console.log(id)
			const res = await this.$axios.get(`/quizzes/${id}?with[author]&with[category]&with[questions][with][variants]`)
			console.log(res.data.data)
			commit('SET_POLL', res.data.data)
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
		endedAt: Date.parse(state.poll.endedAt) < Date.parse(new Date()),
		authorAvatar: state.poll.author.avatar == '' ? '/_nuxt/assets/img/poll-no-avatar.png' : state.poll.author.avatar,
		path: `/polls/${state.poll.id}`,
		// questionsTitle: state.poll.questions.title,
		// type: state.poll.questions.type
	})
}