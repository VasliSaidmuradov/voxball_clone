<template>
  <div class="jobs">
    <base-layout :title="layoutData.title" :text="layoutData.text">
      <div class="jobs-wrap">
        <div class="jobs-container container">
          <h2 class="jobs__title">Актуальне вакансии</h2>
          <jobsList :perPage="2" :list="jobsList" />
        </div>
      </div>
    </base-layout>
  </div>
</template>

<script>
import baseLayout from '@/components/layouts/baseLayout.vue'
import jobsList from '@/components/jobs/jobsList.vue'

export default {
  components: {
    baseLayout,
    jobsList
  },
  data() {
    return {
      layoutData: {
        title: 'станьте частью талантливой и крейтивной команды voxball',
        text: 'Развивайте свои профессиональные навыки вметсе с нами!'
      },
      jobsList: [
        {
          vacancy: 'Менеджер по продажам',
          salary: 'от 150 000 тг',
          city: 'Алматы',
          responsibility: [
            'Выполнение плана продаж',
            'Поиск и привлечение клиентов',
            'Сопровождение сделки продажи'
          ]
        },
        {
          vacancy: 'Менеджер по продажам',
          salary: 'от 150 000 тг',
          city: 'Алматы',
          responsibility: [
            'Выполнение плана продаж',
            'Поиск и привлечение клиентов',
            'Сопровождение сделки продажи'
          ]
        },
        {
          vacancy: 'Менеджер по продажам',
          salary: 'от 150 000 тг',
          city: 'Алматы',
          responsibility: [
            'Выполнение плана продаж',
            'Поиск и привлечение клиентов',
            'Сопровождение сделки продажи'
          ]
        },
        {
          vacancy: 'Менеджер по продажам',
          salary: 'от 150 000 тг',
          city: 'Алматы',
          responsibility: [
            'Выполнение плана продаж',
            'Поиск и привлечение клиентов',
            'Сопровождение сделки продажи'
          ]
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.jobs {
  &-wrap {
    background-image: url('~assets/img/registration__bg.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
  &-container {
    width: 80%;
    margin-top: 3rem;
    margin-bottom: 3rem;
  }
  &__title {
    color: $third-text-color;
    text-transform: uppercase;
  }
}
</style>