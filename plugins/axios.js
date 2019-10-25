import axios from 'axios'

const BASE_URL = 'https://cms.nova.st/api/v1'

const options = {
	baseURL: BASE_URL,
	headers: {
		// token: cookies.get('token')
	}
}

export default () => axios.create(options)
