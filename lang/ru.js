export default context => {
	return new Promise(resolve => {
		resolve({
			nav: {
				polls: 'Опросы',
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
