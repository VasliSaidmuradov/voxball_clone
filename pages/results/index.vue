<template>
  <div class="results">
    <base-layout :title="'Завершенные Опросы'">
      <!-- <section class="results-top container mt-5">
        <polls-list :list="pollsArray" />
      </section>-->
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
          <polls-list :list="GET_POLLS_LIST" />
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
import { mapGetters, mapActions, mapState } from 'vuex'

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
          title: 'хотите ли выполететь в космос 1?',
          date: '19.19.2019',
          views: 345
        },
        {
          category: 'Бизнес',
          video: 'Видео',
          complete: true,
          title: 'хотите ли выполететь в космос 2?',
          date: '19.19.2019',
          views: 345
        },
        {
          category: 'Бизнес',
          video: '',
          complete: true,
          title: 'хотите ли выполететь в космос 3?',
          date: '19.19.2019',
          views: 345
        },
        {
          category: 'Бизнес',
          video: '',
          complete: true,
          title: 'хотите ли выполететь в космос 4?',
          date: '19.19.2019',
          views: 345
        },
        {
          category: 'Бизнес',
          video: '',
          complete: false,
          title: 'хотите ли выполететь в космос 5?',
          date: '19.19.2019',
          views: 345
        }
      ]
    }
  },
  // methods: {
  //   ...mapActions({ })
  // },
  computed: {
    ...mapGetters({ GET_POLLS_LIST: 'polls/GET_POLLS_LIST' })
  },
  async fetch({ store }) {
    await store.dispatch('polls/FETCH_POLLS', {'query': `&filter[endedAt]=between:${new Date(0)},${new Date()}`})
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/section.scss';

.arrow {
  width: 1.2rem;
  margin-left: 0.5rem;
}
</style>
