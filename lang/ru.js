export default context => {
	return new Promise(resolve => {
		resolve({
			nav: {
				pools: 'Опросы',
				results: 'Результаты',
				news: 'Новости',
				competitions: 'Конкурсы и розыгрыши',
				rating: 'Рейтинг',
				become_shareholders: 'Стать акционером'
			},
			lang: 'Русский',
			pool: 'Опрос'
		})
	})
}
