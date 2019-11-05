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
		startedAt: null,
		endedAt: '',
		preview: '',
		video: '',
		videoUrl: '',
		isPrivate: false,
		isOpen: false,
		canComment: false,
		type: 'simple',
		questions: [{ title: '', type: 'simple' }],

		variants: [
			[
				{
					title: ''
				}
			]
		]
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
		state.pollAnswer[questionId] = answers
		console.log(state.pollAnswer[questionId])
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
	REMOVE_NEW_POLL_DATA_QUESTION(state, data) {
		const { questionIndex } = data
		console.log('question: ', questionIndex)
		if (state.newPoll.questions.length > 1) {
			state.newPoll.questions.splice(questionIndex, 1)
			state.newPoll.variants.splice(questionIndex, 1)
		}
		console.log(state.newPoll.questions)
	},
	REMOVE_NEW_POLL_DATA_VARIANT(state, data) {
		const { questionIndex, variantIndex } = data
		// let array = state.newPoll.variants[questionIndex]
		// array.splice(variantIndex, 1)
		// state.newPoll.variants[questionIndex] = array
		if (state.newPoll.variants.length > 1) {
			state.newPoll.variants[questionIndex].splice(variantIndex, 1)
		}
		console.log(state.newPoll.variants[questionIndex])
	}
}

export const actions = {
	async FETCH_POLLS({ commit }, data = '') {
		try {
			const res = await this.$axios.get(
				`/quizzes?with[author]&with[category]&sort[]=startedAt&${data}`
			)
			console.log(res.data.data)
			commit('SET_POLLS', res.data.data)
		} catch (e) {
			console.log(e.response.data)
		}
	},

	async FETCH_CATEGORY({ commit }) {
		try {
			const res = await this.$axios.get('/quizzes/categories')
			// console.log(res.data.data)
			console.log('categories: ', res.data.data)
			commit('SET_CATEGORY', res.data.data)
		} catch (e) {
			console.log(e.response.data)
		}
	},

	async ADD_FILE({ commit, state }, data) {
		try {
			console.log('ADD_FILE: ', data)
			let formData = new FormData()
			formData.append('file', data.file)
			let res = await this.$axios.post('/files', formData)
			if (!!res) return res.data.data.id
		} catch (e) {
			console.log(e)
		}
	},

	async ADD_POLL({ commit, state, getters }) {
		try {
			const data = {
				...getters.GET_NEW_POLL,
				questions: getters.GET_NEW_POLL_QUESTIONS
			}
			delete data.variants
			if (data.preview === '') {
				delete data.preview
			}
			if (data.video === '') {
				delete data.video
			}
			delete data.videoUrl
			const res = await this.$axios.post('/quizzes', data)
			console.log(res)
			if (!!res) return res
			// commit('SET_POLLS', res.data.data)
			// const poll = state.newPoll
			// let questions = state.newPoll.questions
			// 	.map((item, index) => ({
			// 		...item,
			// 		variants: state.newPoll.variants[index]
			// 	}))
			// 	.map(item => (item.type = 'simple'))

			// authorId: state.newPoll.authorId
			// console.log('poll: ', poll)
			// const res = await this.$axios.post('/quizzes', poll)
			// console.log(res)
			// commit('SET_POLLS', res.data.data)
			// commit('SET_NEW_POLL_CLEAR')
		} catch (e) {
			console.log(e)
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

	async FETCH_POLL_IMAGE({ commit }, data) {
		try {
			const { id } = data
			const res = await this.$axios.get(`/files/${id}`)
			console.log('image: ', res)
			commit('SET_POLL_IMAGE', res.data.data.src)
		} catch (e) {
			console.log(e)
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

	async VOTE({ commit, state, getters }, id) {
		try {
			const res = await this.$axios.post(
				`/quizzes/${id}/answers`,
				state.pollAnswer
			)
			// console.log(res)
		} catch ({ e }) {
			console.log(e)
		}
	}
}

export const getters = {
	GET_POLLS_LIST: state => {
		return state.pollsList.map(item => ({
			...item,
			title: item.title.substr(0, 60) + '...' || '',
			categoryTitle: item.category
				? item.category.title.substr(0, 12) + '...'
				: 'нет категории',
			createdAt: new Date(item.createdAt).toLocaleDateString(),
			authorName: item.author.name
				? item.author.name
						.split(' ')
						.slice(0, 3)
						.join(' ')
				: 'Нет автора',
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
				: 'https://cms.nova.st' + state.poll.preview,
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
			title:
				state.newPoll.type === 'questioned' ? item.title : state.newPoll.title,
			variants: state.newPoll.variants[index]
		})),
	GET_NEW_POLL_VARIANTS: state => state.newPoll.variants,
	GET_CATEGORY_LIST: state => state.category
}

// console.log(Store)
