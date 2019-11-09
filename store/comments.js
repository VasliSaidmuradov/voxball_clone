export const state = () => ({
	comments: []
})

export const mutations = {
	SET_COMMENTS(state, comments) {
		state.comments = comments
	}
}

export const actions = {
	async FETCH_COMMENTS({ commit }, data) {
		const { id } = data
		let res = await this.$axios.get(`quizzes/${id}/comments`)
		console.log('comments: ', res.data.data)
		commit('SET_COMMENTS', res.data.data)
	}
}

export const getters = {
	GET_COMMENTS_LIST: state => state.comments
}
