<template>
  <div class="poll-id">
    <detailed-layout :title="'Мои Опросы'">
      <poll-info class="mt-5" :poll="pollData"></poll-info>
      <poll-card complete class="mb-5" :answers="answers"></poll-card>
    </detailed-layout>
  </div>
</template>

<script>
import detailedLayout from '@/components/layouts/detailedLayout.vue'
import pollInfo from '@/components/polls/poll/pollInfo.vue'
import pollCard from '@/components/polls/poll/pollCard.vue'

export default {
  components: {
    detailedLayout,
    pollInfo,
    pollCard
  },
  data() {
    return {
      pollData: {
        title: '',
        category: 'бизнес',
        date: '26.2.2019',
        views: 123,
        img: '~/assets/img/main-news-image-1.png',
        name: 'Иванов Иван',
        shared: 15,
        complete: true
      },
      answers: [
        {
          label: 'lorem',
          percentage: 20
        },
        { label: 'No', percentage: 40 },
        { label: 'Maybe', percentage: 25 },
        { label: 'Yes, No, Maybe', percentage: 10 }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.poll-id {
}
</style>
