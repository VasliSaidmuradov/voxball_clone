import createPersistedState from 'vuex-persistedstate'

export default ({ store }) => {
	window.onNuxtReady(() => {
		createPersistedState({
			paths: [
				'auth.userRegistrationData',
				'auth.userAuthorizationData',
				'auth.userData',
				'polls.newPoll'
			]
		})(store)
	})
}
