export default function({ app, redirect, route }) {
	if (route.path === '/') {
		redirect('/ru')
	}
}
