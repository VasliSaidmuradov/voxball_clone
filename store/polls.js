import Api from '@/plugins/axios'

export const state = () => ({
	polls: [],
	newPoll: {
		title: '',
		description: '',
		startedAt: '',
		endedAt: '',
		preview: '',
		video: '',
		videoUrl: '',
		isPrivate: false,
		questions: [{ title: '' }],
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
	}
})

export const mutations = {
	SET_POLLS(state, polls) {
		state.polls = polls
	},
	SET_NEW_POLL_DATA(state, data) {
		state.newPoll[data.field] = data.value
		console.log(`${data.field} : ${state.newPoll[data.field]}`)
	},
	SET_NEW_POLL_CLEAR(state) {
		for (let field in state.newPoll) {
			state.newPoll[field] = null
			// console.log(`${field} : ${state.newPoll[field]}`)
		}
	},
	SET_NEW_POLL_QUESTION(state) {
		state.newPoll.questions = [
			...state.newPoll.questions,
			{ title: '', type: 'simple' }
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
		console.log(
			'SET_NEW_POLL_DATA_VARIANT: ',
			questionIndex,
			variantIndex,
			field,
			value
		)
		state.newPoll.variants[questionIndex][variantIndex][field] = value
	},
	REMOVE_NEW_POLL_DATA_VARIANT(state, data) {
		const { questionIndex, variantIndex } = data
		console.log({ questionIndex, variantIndex })
		let array = state.newPoll.variants[questionIndex]
		array.splice(variantIndex, 1)
		state.newPoll.variants[questionIndex] = array
		console.log(state.newPoll.variants[questionIndex])
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
			let questions = state.newPoll.questions.map((item, index) => ({
				...item,
				variants: state.newPoll.variants[index]
			}))
			const poll = {
				title: state.newPoll.title,
				description: state.newPoll.description,
				startedAt: state.newPoll.startedAt,
				endedAt: state.newPoll.endedAt,
				viewCount: 1,
				isPrivate: state.newPoll.isPrivate,
				questions: questions
			}
			// authorId: state.newPoll.authorId,
			// categoryId: state.newPoll.category
			console.log('poll: ', poll)
			const res = await this.$axios.post('/quizzes', poll)
			console.log(res)
			commit('SET_POLLS', res.data.data)
			commit('SET_NEW_POLL_CLEAR')
		} catch (e) {
			console.log(e.response.data)
		}
	}
}

export const getters = {
	GET_POLLS_LIST: state => state.polls,
	GET_NEW_POLL: state => state.newPoll,
	GET_NEW_POLL_QUESTIONS: state =>
		state.newPoll.questions.map((item, index) => ({
			...item,
			variants: state.newPoll.variants[index]
		})),
	GET_NEW_POLL_VARIANTS: state => state.newPoll.variants
}
