import { Store } from 'vuex'
import Api from '@/plugins/axios'

export const state = () => ({
	pollsList: [],
	poll: {},
	pollAnswer: {},
	// pollComments: {},
	// polls: [],
	category: [],
	newPoll: {
		categoryId: '',
		title: '',
		description: '',
		startedAt: '',
		endedAt: '',
		preview: '',
		video: '',
		videoUrl: '',
		isPrivate: false,
		isOpen: false,
		canComment: false,
		type: '',
		questions: [{ title: '', type: 'simple' }],
		variants: [
			[
				{
					title: ''
				}
			]
		]
		// questions: [
		// 	{
		// 		title: '',
		// 		type: 'simple',
		// 		variants: [
		// 			{
		// 				title: ''
		// 			}
		// 		]
		// 	}
		// ]
	},
	pollType: ''
})

export const mutations = {
	SET_POLLS(state, polls) {
		state.pollsList = polls
	},

	SET_POLL(state, poll) {
		state.poll = poll
	},

	// SET_POLL_COMMENTS(state, comments) {
	// 	state.pollComments = comments
	// },

	FORMATTED_POLL_ANSWERS(state, questions) {
		questions.forEach(item => {
			state.pollAnswer[item.id] = []
		})
	},

	SET_POLL_ANSWER(state, { questionId, answers }) {
		console.log(answers)
		state.pollAnswer[questionId] = answers
	},

	// 	state.polls = polls
	// },
	SET_CATEGORY(state, category) {
		state.category = category
	},
	SET_NEW_POLL_TYPE(state, data) {
		state.pollType = data
		console.log('state.pollType: ', state.pollType)
	},
	SET_NEW_POLL_DATA(state, data) {
		state.newPoll[data.field] = data.value
		console.log(`${data.field} : ${state.newPoll[data.field]}`)
	},
	SET_NEW_POLL_CLEAR(state) {
		for (let field in state.newPoll) {
			if (field === 'isPrivate') state.newPoll[field] = false
			if (field === 'questions' || field === 'variants') {
				state.newPoll['questions'] = [{ title: '', type: 'simple' }]
				state.newPoll['variants'] = [[{ title: '' }]]
			} else state.newPoll[field] = ''
			// console.log(`${field} : ${state.newPoll[field]}`)
		}
		// console.log('state.newPoll: ', state.newPoll)
	},
	SET_NEW_POLL_QUESTION(state) {
		// single|multiply|video|image|text|rating
		state.newPoll.questions = [
			...state.newPoll.questions,
			{
				title: '',
				type: 'simple'
			}
		]
		state.newPoll.variants = [...state.newPoll.variants, [{}]]
	},
	ADD_NEW_POLL_VARIANT(state, data) {
		state.newPoll.variants[data.questionIndex].push({ title: '' })
	},
	SET_NEW_POLL_DATA_QUESTION(state, data) {
		const { questionIndex, field, value } = data
		state.newPoll.questions[questionIndex][field] = value
		console.log(
			`question ${(field, questionIndex)} = ${
				state.newPoll.questions[questionIndex][field]
			}`
		)
	},
	SET_NEW_POLL_DATA_VARIANT(state, data) {
		const { questionIndex, variantIndex, field, value } = data
		console.log('DATA_VARIANT: ', questionIndex, variantIndex, field, value)
		state.newPoll.variants[questionIndex][variantIndex][field] = value
	},
	SET_NEW_POLL_QUESTION_TYPE(state, data) {
		state.localType = data
		console.log('POLL_TYPE: ')
	},
	REMOVE_NEW_POLL_DATA_VARIANT(state, data) {
		const { questionIndex, variantIndex } = data
		// let array = state.newPoll.variants[questionIndex]
		// array.splice(variantIndex, 1)
		// state.newPoll.variants[questionIndex] = array
		state.newPoll.variants[questionIndex].splice(variantIndex, 1)
		console.log(state.newPoll.variants[questionIndex])
	}
}

export const actions = {
	async FETCH_POLLS({ commit }, data) {
		try {
			// const res = await this.$axios.get(`/quizzes?with[author]&with[category]&${data}`)
			const res = await this.$axios.get('/quizzes')
			console.log(res.data.data)
			// console.log(res2)
			// const res = await this.$axios.get('/quizzes')
			const res2 = await this.$axios.get('/auth/info')
			console.log('auth: ', res2.data.data)
			commit('SET_POLLS', res.data.data)
		} catch (e) {
			console.log(e.response.data)
		}
	},

	async FETCH_CATEGORY({ commit }) {
		try {
			const res = await this.$axios.get('/quizzes/categories')
			// console.log('categories: ', res.data.data)
			commit('SET_CATEGORY', res.data.data)
		} catch (e) {
			console.log(e.response.data)
		}
	},

	async ADD_POLL({ commit, state }) {
		try {
			// const res = await this.$axios.post('/quizzes', data)
			// console.log(res)
			// commit('SET_POLLS', res.data.data)
			// const poll = state.newPoll
			let questions = state.newPoll.questions
				.map((item, index) => ({
					...item,
					variants: state.newPoll.variants[index]
				}))
				.map(item => (item.type = 'simple'))
			const poll = {
				type: state.newPoll.type,
				categoryId: state.newPoll.categoryId,
				isOpen: state.newPoll.isOpen,
				canComment: state.newPoll.canComment,
				title: state.newPoll.title,
				description: state.newPoll.description,
				startedAt: state.newPoll.startedAt,
				endedAt: state.newPoll.endedAt,
				viewCount: 1,
				isPrivate: state.newPoll.isPrivate,
				questions: questions
			}
			// authorId: state.newPoll.authorId
			console.log('poll: ', poll)
			const res = await this.$axios.post('/quizzes', poll)
			console.log(res)
			commit('SET_POLLS', res.data.data)
			// commit('SET_NEW_POLL_CLEAR')
		} catch (e) {
			console.log(e.response.data)
		}
	},

	async FETCH_POLL({ commit }, id, data) {
		try {
			// let id = 60
			const res = await this.$axios.get(
				`/quizzes/${id}?with[author]&with[category]&with[questions][with][variants]&${data}`
			)
			// const res = await this.$axios.get(`/quizzes/${id}`)

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
			categoryTitle: item.category.title.substr(0, 12) + '...',
			createdAt: new Date(item.createdAt).toLocaleDateString(),
			authorName: item.author.name
				.split(' ')
				.slice(0, 3)
				.join(' '),
			preview:
				item.preview == ''
					? '/_nuxt/assets/img/poll__image2.png'
					: item.preview,
			endedAt: Date.parse(item.endedAt) < Date.parse(new Date()),
			path: `/polls/${item.id}`
		}))
	},

	GET_POLL: state => ({
		...state.poll,
		categoryTitle:
			state.poll.category === null
				? 'No category title'
				: state.poll.category.title.substr(0, 12) + '...', // !!state.poll.category
		createdAt: new Date(state.poll.createdAt).toLocaleDateString(),
		authorName:
			state.poll.author === null
				? 'No Author Name'
				: state.poll.author.name
						.split(' ')
						.slice(0, 3)
						.join(' '),
		preview:
			state.poll.preview == ''
				? '/_nuxt/assets/img/poll-no-info-image.png'
				: state.poll.preview,
		authorAvatar:
			state.poll.author == null
				? '/_nuxt/assets/img/poll-no-avatar.png'
				: state.poll.author.avatar,
		path: `/polls/${state.poll.id}`,
		complete: new Date(state.poll.endedAt) < new Date()
		// questionsTitle: state.poll.questions.title,
		// type: state.poll.questions.type
	}),

	GET_POLL_COMMENTS: state => ({
		...state.pollComments
	}),

	GET_POLL_ANSWER: state => state.pollAnswer,
	// GET_POLLS_LIST: state => state.polls,
	GET_NEW_POLL: state => state.newPoll,
	GET_NEW_POLL_QUESTIONS: state =>
		state.newPoll.questions.map((item, index) => ({
			...item,
			variants: state.newPoll.variants[index]
		})),
	GET_NEW_POLL_VARIANTS: state => state.newPoll.variants,
	GET_CATEGORY_LIST: state => state.category
}

// console.log(Store)
