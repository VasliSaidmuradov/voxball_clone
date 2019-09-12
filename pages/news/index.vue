<template>
  <div class="news container">
    <base-layout
      title="Будьте в курсе актуальных новостей."
      text="Читайте свежие новости на портале Voxball"
    >
      <poll-list :pollArr="pollsArray" />
      <section class="Section mt-5 mb-1">
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
      </section>
      <news-list class="mb-4" v-for="(neww, index) in news" :key="index" :news="neww"></news-list>
      <div class="news__container">
        <v-btn class="news__button" rounded>
          <span>Загрузить еще</span>
          <span>
            <icon-arrow class="news__icon" />
          </span>
        </v-btn>
      </div>
    </base-layout>
  </div>
</template>

<script>
import newsList from '@/components/news/newsList/newsList.vue'
import baseLayout from '@/components/layouts/baseLayout.vue'
import pollList from '@/components/polls/pollList/pollList.vue'
import iconArrow from '@/components/icons/iconArrow.vue'
import vSelect from 'vue-select'

export default {
  components: {
    newsList,
    baseLayout,
    pollList,
    vSelect,
    iconArrow
  },
  data() {
    return {
      options: ['Казахстан', 'Россия', 'Китай'],
      news: [
        [
          {
            name: 'dsfsdfdsf'
          },
          {
            name: 'dsfsdfdsfsdf'
          },
          {
            name: 'dsfsdfdsfsdf'
          },
          {
            name: 'dsfsdfdsfsdf'
          },
          {
            name: 'dsfsdfdsfsdf'
          }
        ]
      ],
      pollsArray: [
        {
          category: 'Бизнес',
          video: 'Видео',
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
          video: 'Видео',
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

<style lang="scss">
@import '@/assets/css/section.scss';
@import '@/assets/css/vSelect.scss';

.news {
  &__container {
    margin: 3vw;
    display: flex;
    justify-content: center;
  }
  &__button {
    width: fit-content;
    padding: 0.4rem 1rem 0.2rem;
  }
  &__icon {
    width: 1.3em;
    margin-left: 0.5rem;
  }
}
</style>
