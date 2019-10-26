export default function({ $axios, store }) {
	$axios.onRequest(config => {
		let token = store.getters['auth/GET_TOKEN']
		if (token) {
			config.headers.common['Authorization'] = 'Bearer ' + token
		}
	})
}
