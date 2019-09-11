export default context => {
	return new Promise(resolve => {
		resolve({
			nav: {
				polls: 'polls',
				results: 'Results',
				news: 'News',
				competitions: 'Competitions',
				rating: 'Rating',
				become_shareholders: 'Become shareholders'
			},
			lang: 'Английский'
		})
	})
}
