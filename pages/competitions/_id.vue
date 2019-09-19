<template>
  <div class="competition-id">
    <detailed-layout :title="'Участвуйтеу в конкурсах,'" :text="'проявляя свои таланты и возможности'">
      <template v-slot:action>
        <v-btn class="competition-id-layout__button mt-2" border @click="$navigate('/competitions/participate')">
          <span class="competition-id-layout__text">принять участие</span>
          <icon-arrow class="ml-2"/>
        </v-btn>
      </template>
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
        <!-- memberList -->
        <memberList class="" :members="members" @open="openCompetitionModal"/> 
        <v-btn class="m-auto mt-4 mb-5" rounded border>
          <span>Загрузить еще</span>
          <icon-arrow class="ml-2" />
        </v-btn>
      </section>
      <v-modal :title="competitionModalData.title" :showModal="competitionModalData.modalShow" @close="closeCompetition()" >
        <template v-slot:body>
        </template>
        <template v-slot:footer>
          <v-btn @click="openThanksModal()" border>
            <span>Голосовать</span>
            <icon-arrow class="ml-2" />
          </v-btn>
        </template>
      </v-modal>
      <v-modal :abort="false" :title="thanksModalData.title" :showModal="thanksModalData.modalShow" @close="closeThanks()">
        <template v-slot:body>
        </template>
        <template v-slot:footer>
          <v-btn @click="closeThanks()" border>
            <span>ОК</span>
          </v-btn>
        </template>
      </v-modal>
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
import vModal from '@/components/modals/vModal.vue'

export default {
  components: {
    detailedLayout,
    competitionInfo,
    memberList,
    vSelect,
    iconArrow,
    vModal 
  },
  methods: {
    openCompetitionModal() {
      this.competitionModalData.modalShow = true;
    },
    openThanksModal() {
      this.closeCompetition();
      this.thanksModalData.modalShow = true;
    },
    closeCompetition() {
      this.competitionModalData.modalShow = false;
    },
    closeThanks() {
      this.thanksModalData.modalShow = false;
    },
  },
  data() {
    return {
      options: ['Казахстан', 'Россия', 'Китай'],
      competitionModalData: {
        title: 'Проголосовать',
        modalShow: false
      },
      thanksModalData: {
        title: 'Спасибо за ваш голос',
        modalShow: false
      },
      competitionData: {
        title: '«Мое идеальное лето»',
        description: 'Конкурс фотографий среди зарегистрированных пользователей портала Voxball.',
        date: '01.09.2019',
        rules: [
          {text: 'Сделайте смешное фото на тему «Мое идеальное лето».'},
          {text: 'Загрузите фото на сайт'},
          {text: 'Приглашайте своих друзей проголосовать за Ваше фото'}
        ],
        src: '',
        complete: false
      },
      members: [
        {
          name: 'Асия Курманалиева', 
          title:'Принцесса лета', 
          votes: '369',
          video: ''
        },
        {
          name: 'Асия Курманалиева', 
          title:'Принцесса лета', 
          votes: '369',
          video: ''
        },
        {
          name: 'Асия Курманалиева', 
          title:'Принцесса лета', 
          votes: '369',
          video: 'src'
        },
        {
          name: 'Асия Курманалиева', 
          title:'Принцесса лета', 
          votes: '369',
          video: ''
        },
        {
          name: 'Асия Курманалиева', 
          title:'Принцесса лета', 
          votes: '369',
          video: ''
        },
        {
          name: 'Асия Курманалиева', 
          title:'Принцесса лета', 
          votes: '369',
          video: ''
        },
        {
          name: 'Асия Курманалиева', 
          title:'Принцесса лета', 
          votes: '369',
          video: ''
        },
        {
          name: 'Асия Курманалиева', 
          title:'Принцесса лета', 
          votes: '369',
          video: ''
        },
        {
          name: 'Асия Курманалиева', 
          title:'Принцесса лета', 
          votes: '369',
          video: 'src'
        },
        {
          name: 'Асия Курманалиева', 
          title:'Принцесса лета', 
          votes: '369',
          video: ''
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
  &-layout{
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