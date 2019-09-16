<template>
  <div class="competition-id">
    <detailed-layout :title="'Конкурс'">
      <competition-info class="mr-4 ml-4" :competition='competitionData' />
      <section class="Section mt-5 mb-2 ml-4 mr-4">
        <div class="Section__header competition-id-section__header">
          <div class="competition-id__header">
            <h2 class="Section__title competition-id__title">Каждый участник достоин победы</h2>
            <p class="competition-id__text">Отдайте свой голос за лучшего кандидата</p>
          </div>
          <div class="Section__options competition-id__options">
            <v-select
              :options="options"
              :searchable="true"
              :no-drop="false"
              :multiple="false"
              placeholder="Фильтр"
            ></v-select>
          </div>
        </div>
        <memberList class="" :members="members"/> 
        <div class="competition-id__button mt-4 mb-5">
          <v-btn class="m-auto" rounded border>
            <span>Загрузить еще</span>
            <icon-arrow class="ml-2" />
          </v-btn>
        </div>
      </section>
    </detailed-layout>
  </div>
</template>

<script>
import detailedLayout from '@/components/layouts/detailedLayout.vue'
import competitionInfo from '@/components/competition/competitionInfo.vue'
import memberList from '@/components/competition/member/memberList.vue'
import iconArrow from '@/components/icons/iconArrow.vue'
import vSelect from 'vue-select'
import '@/assets/css/vSelect.scss'

export default {
  components: {
    detailedLayout,
    competitionInfo,
    memberList,
    vSelect,
    iconArrow
  },
  data() {
    return {
      options: ['Казахстан', 'Россия', 'Китай'],
      competitionData: {
        title: '«Мое идеальное лето»',
        description: 'Конкурс фотографий среди зарегистрированных пользователей портала Voxball.',
        date: '01.09.2019',
        rules: [
          {text: 'Сделайте смешное фото на тему «Мое идеальное лето».'},
          {text: 'Загрузите фото на сайт'},
          {text: 'Приглашайте своих друзей проголосовать за Ваше фото'}
        ],
        img: '~/assets/img/main-news-image-1.png',
        complete: false
      },
      members: [
        {
          name: 'Асия Курманалиева', 
          title:'Принцесса лета', 
          votes: '369'
        },
        {
          name: 'Асия Курманалиева', 
          title:'Принцесса лета', 
          votes: '369'
        },
        {
          name: 'Асия Курманалиева', 
          title:'Принцесса лета', 
          votes: '369'
        },
        {
          name: 'Асия Курманалиева', 
          title:'Принцесса лета', 
          votes: '369'
        },
        {
          name: 'Асия Курманалиева', 
          title:'Принцесса лета', 
          votes: '369'
        },
        {
          name: 'Асия Курманалиева', 
          title:'Принцесса лета', 
          votes: '369'
        },
        {
          name: 'Асия Курманалиева', 
          title:'Принцесса лета', 
          votes: '369'
        },
        {
          name: 'Асия Курманалиева', 
          title:'Принцесса лета', 
          votes: '369'
        },
        {
          name: 'Асия Курманалиева', 
          title:'Принцесса лета', 
          votes: '369'
        },
        {
          name: 'Асия Курманалиева', 
          title:'Принцесса лета', 
          votes: '369'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/section.scss';

.competition-id {
  display: flex;
  &-section__header {
    margin-bottom: 2.5rem
  }
  &__header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 50%;
  }
  &__title {
    width: 100%;
    margin: 0;
    padding-top: 0.5rem;
  }
  &__text {
    color: $secondary-text-color;
    font-size: 1.15em;
    margin: 0;
  }
  &__options {
    width: 50%;
  }
}
</style>