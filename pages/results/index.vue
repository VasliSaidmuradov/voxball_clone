<template>
  <div class="results">
    <base-layout :title="'Завершенные Опросы'">
      <section class="results-top container mt-5">
        <polls-list :list="pollsArray" />
      </section>
      <section class="Section container mt-4">
        <div class="Section__header">
          <h2 class="Section__title">Все опросы</h2>
          <div class="Section__options">
            <v-select
              :options="options"
              :searchable="true"
              :no-drop="false"
              :multiple="false"
              placeholder="Популярное"
            ></v-select>
            <v-select
              class="ml-5"
              :options="options"
              :searchable="true"
              :no-drop="false"
              :multiple="false"
              placeholder="Категории"
            ></v-select>
          </div>
        </div>
        <div class="results-main__content">
          <polls-list :list="pollsArray" />
          <polls-list :list="pollsArray" />
        </div>
        <v-btn class="Section__button mb-5 mt-4" rounded border>
          <span>Загрузить еще</span>
          <icon-arrow class="ml-2" />
        </v-btn>
      </section>
    </base-layout>
  </div>
</template>

<script>
import baseLayout from '@/components/layouts/baseLayout.vue'
import pollItem from '@/components/polls/pollsList/pollItem.vue'
import pollsList from '@/components/polls/pollsList/pollsList.vue'
import vSelect from 'vue-select'
import iconArrow from '@/components/icons/iconArrow.vue'
import '@/assets/css/vSelect.scss'

export default {
  components: {
    baseLayout,
    pollsList,
    vSelect,
    iconArrow
  },
  data() {
    return {
      options: ['Казахстан', 'Россия', 'Китай'],
      pollsArray: [
        {
          category: 'Бизнес',
          video: '',
          complete: true,
          title: 'хотите ли выполететь в космос?',
          date: '19.19.2019',
          views: 345
        },
        {
          category: 'Бизнес',
          video: 'Видео',
          complete: true,
          title: 'хотите ли выполететь в космос?',
          date: '19.19.2019',
          views: 345
        },
        {
          category: 'Бизнес',
          video: '',
          complete: true,
          title: 'хотите ли выполететь в космос?',
          date: '19.19.2019',
          views: 345
        },
        {
          category: 'Бизнес',
          video: '',
          complete: true,
          title: 'хотите ли выполететь в космос?',
          date: '19.19.2019',
          views: 345
        },
        {
          category: 'Бизнес',
          video: '',
          complete: true,
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

.results {
  &-main {
  }
}
.arrow {
  width: 1.2rem;
  margin-left: 0.5rem;
}
</style>
