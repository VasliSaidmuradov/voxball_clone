<template>
  <div class="competition">
    <base-layout 
     title="Топ лучших конкурсов на VoxBall"
     text="Подборка конкурсов от наших партнеров">
      <section class="competition__header mt-5 ml-4 mr-4">
        <competitionList :list="topCompetitionArr" :gap="'0'" :page="3"></competitionList>
      </section>
      <section class="competition-section mt-3 pl-3 pr-3">
        <div class="Section__header competition-section__header">
          <h2 class="competition-section__title">Самые новые конкурсы на любой вкус</h2>
          <p class="competition-section__text">Выбирайте конкурсы, соответствующие Вашим интересам</p>
        </div>
        <competitionList :list="competitionArr" :gap="'20'" :page="4"></competitionList>
        <v-btn class="competition-section__button" border>
          <span>Загрузить еще</span>
          <span>
            <icon-arrow class="arrow" />
          </span>
        </v-btn>
      </section>
      <section class="competition-section mt-5 pl-3 pr-3"> 
        <div class="Section__header competition-section__header">
          <h2 class="competition-section__title">Архив завершенных конкурсов</h2>
          <p class="competition-section__text">Узнайте результаты завершенных конкурсов</p>
        </div>
        <competitionList :list="completeCompetitionArr" :gap="'10'" :page="4"></competitionList>
        <v-btn class="competition-section__button mt-4 mb-5" border>
          <span>Загрузить еще</span>
          <span>
            <icon-arrow class="arrow" />
          </span>
        </v-btn>
      </section>
    </base-layout>
  </div>
</template>

<script>
import baseLayout from '@/components/layouts/baseLayout.vue'
import competitionList from '@/components/competition/competitionList/competitionList.vue'
import iconArrow from '@/components/icons/iconArrow.vue'

export default {
  components: {
    baseLayout,
    competitionList,
    iconArrow
  },
  data() {
    return {
      topCompetitionArr: [
        {date: '13.09.2019', complete: false},
        {date: '13.09.2019', complete: false},
        {date: '13.09.2019', complete: false}
      ],
      competitionArr: [
        {date: '13.09.2019', complete: false},
        {date: '13.09.2019', complete: false},
        {date: '13.09.2019', complete: false},
        {date: '13.09.2019', complete: false},
        {date: '13.09.2019', complete: false},
        {date: '13.09.2019', complete: false},
        {date: '13.09.2019', complete: false},
        {date: '13.09.2019', complete: false}
      ],
      completeCompetitionArr: [
        {date: '13.09.2019', complete: true},
        {date: '13.09.2019', complete: true},
        {date: '13.09.2019', complete: true},
        {date: '13.09.2019', complete: true}
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/section.scss';

.competition {
  &-section {
    border-top: 1px solid $border-color;
    &__header {
      align-items: flex-start;
      flex-direction: column;
      padding: 1rem  0 1.6rem;
      padding-left: 1%;
    }
    &__title {
      text-transform: uppercase;
      font-family: 'times new roman psmt';
      margin: 0;
      padding-bottom: 0.5rem;
    }
    &__text {
      color: $secondary-text-color;
      margin: 0;
    }
    &__button {
      border-color: $base-text-color;
      border-radius: 30px;
      width: fit-content;
      margin: 0 auto;
      padding: 0.4rem 1rem 0.2rem;
      &:hover {
        border-color: $base-color;
      }
    }
  }
}
.arrow {
  width: 1.3em;
  margin-left: 0.5rem;
}
</style>