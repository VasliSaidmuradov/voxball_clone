<template>
  <div class="ratings">
    <base-layout :title="layoutData.title" :text="layoutData.text">
      <template v-slot:action>
        <v-btn class="ratings-layout__button mt-1" border @click="$navigate('/ratings/123')">
          <span class="ratings-layout__text">создать рейтинг</span>
          <icon-arrow class="ml-2" />
        </v-btn>
      </template>
      <section class="container mt-5">
        <div class="Section__header">
          <h2 class="Section__title">Все рейтинги</h2>
          <div class="Section__options">
            <v-select
              :options="options"
              :searchable="true"
              :no-drop="false"
              :multiple="false"
              placeholder="Лучшие по рейтингу"
            ></v-select>
            <v-select
              class="ml-5"
              :options="options"
              :searchable="true"
              :no-drop="false"
              :multiple="false"
              placeholder="Сфера деятельности"
            ></v-select>
          </div>
        </div>
      </section>
      <section class="ratings-main container">
        <div class="ratings-main__content mb-4">
          <polls-list :list="ratingsArray" />
          <polls-list :list="ratingsArray" />
        </div>
        <v-btn class="Section__button mb-5 mt-5" rounded border>
          <span>Загрузить еще</span>
          <icon-arrow class="ml-2" />
        </v-btn>
      </section>
    </base-layout>
  </div>
</template>

<script>
import baseLayout from '@/components/layouts/baseLayout.vue'
import iconArrow from '@/components/icons/iconArrow.vue'
import pollsList from '@/components/polls/pollsList/pollsList.vue'
import vSelect from 'vue-select'
import '@/assets/css/vSelect.scss'

export default {
  components: {
    baseLayout,
    iconArrow,
    pollsList,
    vSelect
  },
  data() {
    return {
      layoutData: {
        title: 'Принимайте участие',
        text:
          'в рейтингах и опросах, получая за это v-coins на личный счет. Узнайте, что думают люди о Вашей компании, создавая собственные рейтинги.'
      },
      options: ['Казахстан', 'Россия', 'Китай'],
      ratingsArray: [
        {
          category: 'Бизнес',
          video: '',
          title: 'хотите ли выполететь в космос?',
          date: '19.19.2019',
          views: 345,
          type: 'stars'
        },
        {
          category: 'Бизнес',
          video: '',
          title: 'хотите ли выполететь в космос?',
          date: '19.19.2019',
          views: 345,
          type: 'stars'
        },
        {
          category: 'Бизнес',
          video: 'Видео',
          title: 'хотите ли выполететь в космос?',
          date: '19.19.2019',
          views: 345,
          type: 'stars'
        },
        {
          category: 'Бизнес',
          video: '',
          title: 'хотите ли выполететь в космос?',
          date: '19.19.2019',
          views: 345,
          type: 'stars'
        },
        {
          category: 'Бизнес',
          video: '',
          title: 'хотите ли выполететь в космос?',
          date: '19.19.2019',
          views: 345,
          type: 'stars'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/section.scss';

.ratings {
  &-layout {
    &__button {
      border-color: $base-text-color;
      text-transform: uppercase;
      font-size: 0.8em;
      &:hover {
        background-color: white;
        border-color: $base-color;
        color: $base-color;
      }
    }
    &__text {
      text-transform: uppercase;
      font-size: 0.8em;
    }
  }
}
</style>