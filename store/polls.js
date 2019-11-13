import { Store } from 'vuex'
import Api from '@/plugins/axios'

export const state = () => ({
	pollsList: [],
	poll: {},
	pollAnswer: {},
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

	FORMATTED_POLL_ANSWERS(state, questions) {
		state.pollAnswer = {}
		questions.forEach(item => {
			state.pollAnswer = { ...state.pollAnswer, [item.id]: [] }
		})
	},

	SET_POLL_ANSWER(state, { questionId, answers }) {
		state.pollAnswer[questionId] = answers
	},

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
		state.newPoll = {
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
		}
	},

	SET_NEW_POLL_QUESTION(state) {
		// single|multiply|video|image|text|stars
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
		if (state.newPoll.variants.length > 1) {
			state.newPoll.variants[questionIndex].splice(variantIndex, 1)
		}
		console.log(state.newPoll.variants[questionIndex])
	},

	LOAD_MORE(state, polls) {
		// console.log(state.pollsList)
		state.pollsList = [...state.pollsList, ...polls]
		// console.log(state.pollsList)
	}
}

export const actions = {
	async FETCH_POLLS({ commit, state, getters }, data = {}) {
		try {
			const { query, more } = data
			if (more) {
				let page = Math.round(getters.GET_POLLS_LIST.length / 10)
				const res2 = await this.$axios.get(
					`/quizzes?with[author]&with[category]${query || ''}&page=${page + 1}`
				)
				console.log(res2.data.data)
				commit('LOAD_MORE', res2.data.data)
			} else {
				// console.log('query: ', data.query)
				// console.log('more', more)
				// console.log(`/quizzes?with[author]&with[category]${query || ''}`)
				const res = await this.$axios.get(
					`/quizzes?with[author]&with[category]${query || ''}`
				)
				console.log(res.data.data)
				commit('SET_POLLS', res.data.data)
				return res.data.data
			}
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

	async ADD_FILE_URL({ commit, state }, data) {
		try {
			console.log('ADD_FILE_URL: ', data)
			let url = {
				url: data
			}
			let res = await this.$axios.post('/files/url', url)
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
			console.log(data)
			delete data.variants
			if (data.preview === '') {
				delete data.preview
			}
			if (data.video === '') {
				delete data.video
			}
			if (data.videoUrl === '') {
				delete data.videoUrl
			}
			delete data.authorId
			data.questions.forEach(item => {
				if (item.type === 'stars' || item.type === 'text') {
					delete item.variants
				}
			})
			const res = await this.$axios.post('/quizzes', data)
			console.log(res)
			commit('SET_NEW_POLL_CLEAR')
			if (!!res) return res
			// commit('SET_POLLS', res.data.data)
		} catch (e) {
			console.log(e)
		}
	},

	async FETCH_POLL({ commit }, id, data = '') {
		try {
			const res = await this.$axios.get(
				`/quizzes/${id}?with[author]&with[category]&with[article]&with[questions][with][variants]&with[voteCount]${data}`
			)
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
			title:
				item.title.split('').length >= 60
					? item.title.substr(0, 60) + '...' || ''
					: item.title,
			categoryTitle: item.category
				? item.category.title.substr(0, 12) + '...'
				: 'нет категории',
			createdAt: new Date(item.createdAt).toLocaleDateString(),
			authorAvatar:
				!!item.author.avatar
					? '~/assets/img/poll-no-avatar.png'
					: item.author.avatar,
			authorName:
				item.author && item.author.name
					? item.author.name.substr(0, 20)
					: 'Нет автора',
			preview:
				item.preview == ''
					? null
					: // '~/assets/img/poll__image2.png'
					  item.preview,
			complete: Date.parse(item.endedAt) < Date.parse(new Date()),
			path: `/polls/${item.id}`
		}))
	},

	GET_POLL: state => ({
		...state.poll,
		categoryTitle:
			!state.poll.category
				? 'Нет категории'
				: state.poll.category.title.substr(0, 12) + '...', // !!state.poll.category
		createdAt: new Date(state.poll.createdAt).toLocaleDateString(),
		endedAt: new Date(state.poll.endedAt).toLocaleDateString(),
		authorName:
			state.poll.author && state.poll.author.name
				? state.poll.author.name
						.split(' ')
						.slice(0, 3)
						.join(' ')
				: 'Нет автора',
		preview:
			!state.poll.preview  
				? require('@/assets/img/poll-no-info-image.png')
				: 'https://cms.nova.st' + state.poll.preview,
		authorAvatar:
			!state.poll.author
				? '~/assets/img/poll-no-avatar.png'
				: state.poll.author.avatar,
		path: `/polls/${state.poll.id}`,
		complete: new Date() > new Date(state.poll.endedAt)
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
