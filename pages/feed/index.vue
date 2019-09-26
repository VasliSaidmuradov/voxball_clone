<template>
  <div class="feed">
    <detailed-layout :title="'Моя лента'" :back="false">
      <section class="container d-flex">
        <div class="feed__sidebar"></div>
        <div class="feed__main">
          <div class="feed__filters"></div>
          <polls-list :pollArr="pollsArray"></polls-list>
        </div>
      </section>
    </detailed-layout>
  </div>
</template>

<script>
import detailedLayout from '@/components/layouts/detailedLayout.vue'
import pollsList from '@/components/polls/pollsList/pollsList.vue'
import vSelect from 'vue-select'
import iconArrow from '@/components/icons/iconArrow.vue'

export default {
  components: {
    detailedLayout,
    pollsList
  },
  data() {
    return {
      options: ['Казахстан', 'Россия', 'Китай'],
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
@import '@/assets/css/vSelect.scss';

.feed {
  &__sidebar {
    width: 20%;
  }
  &__main {
    width: 80%;
  }
  &__filters {
  }
}
</style>