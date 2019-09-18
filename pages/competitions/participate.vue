<template>
	<div class="participate">
		<competitionInfo class="mr-4 ml-4" :competition="competitionData"/>
	</div>
</template>

<script>
import competitionInfo from '@/components/competition/competitionInfo.vue'
export default {
	components: {
		competitionInfo
	},
	data() {
		return {
			competitionData: {
        title: '«Мое идеальное лето»',
        description: 'Конкурс фотографий среди зарегистрированных пользователей портала Voxball.',
        date: '01.09.2019',
        rules: [
          {text: 'Сделайте смешное фото на тему «Мое идеальное лето».'},
          {text: 'Загрузите фото на сайт'},
          {text: 'Приглашайте своих друзей проголосовать за Ваше фото'}
        ],
        src: 'src',
        complete: false
      },
		}
	}
}
</script>

<style lang="scss" scoped>
.participate {
	background-image: url('~assets/img/registration__bg.png');
  background-size: 100%;
  background-repeat: no-repeat;
}
</style>