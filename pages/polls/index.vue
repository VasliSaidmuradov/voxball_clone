<template>
  <div class="polls">
    <base-layout
      :title="'Участвуйте в on-line опросах от Voxball.'"
      :text="'Активно отвечайте на вопросы, выражайте свое мнение и зарабатывайте на этом деньги'"
    >
      <section class="polls-top mt-4 ml-5 mr-5">
        <poll-list :pollArr="pollsArray" />
      </section>
      <section class="Section mt-4 mb-1 ml-5 mr-5">
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
        <div class="polls-main__content mb-4">
          <poll-list :pollArr="pollsArray" />
          <poll-list :pollArr="pollsArray" />
        </div>
        <v-btn class="ml-auto mr-auto mb-5 mt-4" rounded border>
          <span>Загрузить еще</span>
          <icon-arrow class="ml-2" />
        </v-btn>
      </section>
    </base-layout>
  </div>
</template>

<script>
import baseLayout from '@/components/layouts/baseLayout.vue'
import pollList from '@/components/polls/pollsList/pollsList.vue'
import pollItem from '@/components/polls/pollsList/pollItem.vue'
import vSelect from 'vue-select'
import iconArrow from '@/components/icons/iconArrow.vue'
import '@/assets/css/vSelect.scss'

export default {
  components: {
    baseLayout,
    pollList,
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

.polls {
  &-main {
  }
}
</style>