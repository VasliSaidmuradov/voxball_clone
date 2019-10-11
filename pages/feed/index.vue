<template>
  <div class="feed">
    <detailed-layout :title="'Моя лента'" :back="false">
      <div class="container feed-container">
        <div class="feed__sidebar">
          <side-bar />
        </div>
        <div class="feed__main">
          <div class="feed__filters">
            <div class="Section__header feed-section__header">
              <h2 class="Section__title feed-section__title">Опросы</h2>
              <div class="Section__options">
                <v-select
                  :options="filterFeed1"
                  :searchable="true"
                  :no-drop="false"
                  :multiple="false"
                  :placeholder="filterFeed1[0]"
                ></v-select>
                <v-select
                  class="ml-5"
                  :options="filterFeed2"
                  :searchable="true"
                  :no-drop="false"
                  :multiple="false"
                  :placeholder="filterFeed2[0]"
                ></v-select>
              </div>
            </div>
          </div>
          <polls-list :list="pollsArray" :adv="advList" :advN="6"></polls-list>
        </div>
      </div>
    </detailed-layout>
  </div>
</template>

<script>
import detailedLayout from '@/components/layouts/detailedLayout.vue'
import pollsList from '@/components/polls/pollsList/pollsList.vue'
import vSelect from 'vue-select'
import iconArrow from '@/components/icons/iconArrow.vue'
import sideBar from '@/components/sideBar/sideBar.vue'
import '@/assets/css/vSelect.scss'

export default {
  components: {
    detailedLayout,
    pollsList,
    vSelect,
    sideBar
  },
  data() {
    return {
      filterFeed1: ['Действующие', 'Завершенные'],
      filterFeed2: ['Отвеченные', 'Неотвеченные'],
      pollsArray: [
        {
          type: 'poll',
          category: 'Бизнес',
          video: '',
          title: 'хотите ли выполететь в космос?',
          date: '19.19.2019',
          views: 345,
          complete: false
        },
        {
          type: 'poll',
          category: 'Бизнес',
          video: '',
          title: 'хотите ли выполететь в космос?',
          date: '19.19.2019',
          views: 345,
          complete: false
        },
        {
          type: 'poll',
          category: 'Бизнес',
          video: '',
          title: 'хотите ли выполететь в космос?',
          date: '19.19.2019',
          views: 345,
          complete: false
        },
        {
          type: 'poll',
          category: 'Бизнес',
          video: 'Видео',
          title: 'хотите ли выполететь в космос?',
          date: '19.19.2019',
          views: 345,
          complete: false
        },
        {
          type: 'poll',
          category: 'Бизнес',
          video: '',
          title: 'хотите ли выполететь в космос?',
          date: '19.19.2019',
          views: 345,
          complete: false
        },
        {
          type: 'poll',
          category: 'Бизнес',
          video: '',
          title: 'хотите ли выполететь в космос?',
          date: '19.19.2019',
          views: 345,
          complete: false
        },
        {
          type: 'poll',
          category: 'Бизнес',
          video: '',
          title: 'хотите ли выполететь в космос?',
          date: '19.19.2019',
          views: 345,
          complete: false
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

.feed {
  &-container {
    margin: 3rem auto;
    display: flex;
    justify-content: space-between;
  }
  &-section {
    &__header {
      padding-bottom: 1rem;
    }
    &__title {
      margin: 0;
    }
  }
  &__sidebar {
    width: 20%;
  }
  &__main {
    width: 78%;
  }
  &__filters {
  }
}
</style>