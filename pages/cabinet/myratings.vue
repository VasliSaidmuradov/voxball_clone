<template>
  <detailed-layout class="cabinet-ratings" :title="'Мои Рейтинги'">
    <section class="Section cabinet-ratings__section container">
      <div class="Section__header">
        <div class="Section__options cabinet-ratings__options">
          <v-select
            :options="categories"
            :searchable="true"
            :no-drop="false"
            :multiple="false"
            placeholder="Категории"
          ></v-select>
          <v-select
            class="ml-5"
            :options="pollStatus"
            :searchable="true"
            :no-drop="false"
            :multiple="false"
            placeholder="ВСЕ"
          ></v-select>
        </div>
      </div>
      <polls-list :list="ratings" :adv="advList" :adv-n="3" />
      <v-btn class="Section__button cabinet-ratings__button" border rounded>
        загрузить еще
        <icon-arrow class="ml-2" />
      </v-btn>
    </section>
  </detailed-layout>
</template>

<script>
import detailedLayout from '@/components/layouts/detailedLayout.vue'
import pollsList from '@/components/polls/pollsList/pollsList.vue'
import iconArrow from '@/components/icons/iconArrow.vue'
import vSelect from 'vue-select'
import '@/assets/css/vSelect.scss'

export default {
  components: {
    detailedLayout,
    pollsList,
    iconArrow,
    vSelect
  },
  data() {
    return {
      categories: ['общество', 'экономика', 'политика'],
      pollStatus: ['действующие', 'завершенные'],
      ratings: [
        {
          category: 'Бизнес',
          video: '',
          title: 'хотите ли выполететь в космос?',
          date: '19.19.2019',
          views: 345,
          type: 'rating'
        },
        {
          category: 'Бизнес',
          video: '',
          title: 'хотите ли выполететь в космос?',
          date: '19.19.2019',
          views: 345,
          type: 'rating'
        },
        {
          category: 'Бизнес',
          video: 'Видео',
          title: 'хотите ли выполететь в космос?',
          date: '19.19.2019',
          views: 345,
          type: 'rating'
        },
        {
          category: 'Бизнес',
          video: '',
          title: 'хотите ли выполететь в космос?',
          date: '19.19.2019',
          views: 345,
          type: 'rating'
        },
        {
          category: 'Бизнес',
          video: '',
          title: 'хотите ли выполететь в космос?',
          date: '19.19.2019',
          views: 345,
          type: 'rating'
        }
      ],
      advList: [
        {
          type: 'adv',
          category: 'Бизнес',
          video: 'Видео',
          title: 'хотите ли выполететь в космос?',
          date: '19.19.2019',
          views: 345,
          complete: false
        },
        {
          type: 'adv',
          category: 'Бизнес',
          video: 'Видео',
          title: 'хотите ли выполететь в космос?',
          date: '19.19.2019',
          views: 345,
          complete: false
        },
        {
          type: 'adv',
          category: 'Бизнес',
          video: 'Видео',
          title: 'хотите ли выполететь в космос?',
          date: '19.19.2019',
          views: 345,
          complete: false
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/section.scss';
.cabinet-ratings {
  &__section {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
  &__options {
    width: 100%;
  }
  &__button {
    margin-top: 1rem;
  }
}
</style>
<style lang="scss">
.cabinet-ratings .v-select {
  min-width: 14rem;
}
</style>