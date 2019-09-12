<template>
  <div class="container">
    <base-layout
      title="Будьте в курсе актуальных новостей."
      text="Читайте свежие новости на портале Voxball"
    >
      <poll-list :pollArr="pollsArray" />
      <section class="Section">
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
        <div class="poll-main__content">
          <news-list v-for="(neww, index) in news" :key="index" :news="neww"></news-list>
        </div>
        <div class="poll-main__footer">
          <v-btn class="poll-main__button" border>
            <nuxt-link class="poll-main__link" to="/">
              <span>Загрузить еще</span>
              <icon-base icon-name="arrow" class="arrow">
                <icon-arrow />
              </icon-base>
            </nuxt-link>
          </v-btn>
        </div>
      </section>
    </base-layout>
  </div>
</template>

<script>
import newsList from '@/components/news/newsList/newsList.vue'
import baseLayout from '@/components/layouts/baseLayout.vue'
import pollList from '@/components/polls/pollList/pollList.vue'
import vSelect from 'vue-select'

export default {
  components: {
    newsList,
    baseLayout,
    pollList,
    vSelect
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
        ],
        [
          {
            name: 'dsfsdfdsf'
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
</style>
