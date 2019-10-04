<template>
  <div class="profile">
    <detailed-layout :title="'Аккаунт пользователя'">
      <profile-info class="profile__info" :profile-info="profileInfo"></profile-info>
      <section class="Section container profile__section">
        <h2 class="Section__title profile__title">Опросы</h2>
        <polls-list :pollArr="pollsArray"></polls-list>
        <v-btn class="Section__button mt-4 mb-4" rounded border>Загрузить еще</v-btn>
      </section>
      <section class="Section container profile__section profile_border">
        <h2 class="Section__title profile__title">Рейтинги</h2>
        <ratings-list :pollArr="pollsArray"></ratings-list>
        <v-btn class="Section__button mt-4 mb-4" rounded border>Загрузить еще</v-btn>
      </section>
    </detailed-layout>
  </div>
</template>

<script>
import detailedLayout from '@/components/layouts/detailedLayout.vue'
import profileInfo from '@/components/profile/profileInfo.vue'
import pollsList from '@/components/polls/pollsList/pollsList.vue'
import ratingsList from '@/components/polls/pollsList/pollsList.vue'
import iconArrow from '@/components/icons/iconArrow.vue'

export default {
  components: {
    detailedLayout,
    profileInfo,
    pollsList,
    ratingsList,
    iconArrow
  },
  data() {
    return {
      profileInfo: {
        name: 'Карина Рар',
        rating: 4,
        pollsnum: 5,
        ratingsnum: 6,
        subscribers: 200,
        subscriptions: 26,
        type: 'business'
      },
      pollsArray: [
        {
          category: 'Бизнес',
          video: '',
          title: 'хотите ли выполететь в космос?',
          date: '19.19.2019',
          views: 345
        },
        {
          category: 'Бизнес',
          video: '',
          title: 'хотите ли выполететь в космос?',
          date: '19.19.2019',
          views: 345
        },
        {
          category: 'Бизнес',
          video: 'Видео',
          title: 'хотите ли выполететь в космос?',
          date: '19.19.2019',
          views: 345
        },
        {
          category: 'Бизнес',
          video: '',
          title: 'хотите ли выполететь в космос?',
          date: '19.19.2019',
          views: 345
        },
        {
          category: 'Бизнес',
          video: 'Видео',
          title: 'хотите ли выполететь в космос?',
          date: '19.19.2019',
          views: 345
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/section.scss';

.profile {
  &__info {
    margin-top: 2rem;
  }
  &__title {
    margin: 0;
    padding-bottom: 1rem;
    color: $third-text-color;
  }
  &__section {
    padding-top: 1rem;
  }
  &_border {
    border-top: 1px solid $border-color;
  }
}
</style>