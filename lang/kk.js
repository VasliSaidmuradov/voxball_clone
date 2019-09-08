export default context => {
	return new Promise(resolve => {
		resolve({
			nav: {
				pools: 'Сауалнамалар',
				results: 'Нәтижелер',
				news: 'Жаналықтар',
				competitions: 'Байқаулар мен ұтыс ойындар',
				rating: 'Рейтинг',
				become_shareholders: 'Акционер болу'
			},
			lang: 'Казахский'
		})
	})
}
