<template>
  <div class="news-id">
    <detailed-layout :title="'Будьте в курсе актуальных новостей'">
      <news-info :poll="newsData"></news-info>
      <news-card v-if="news.type!=='anal'"></news-card>
    </detailed-layout>
  </div>
</template>

<script>
import detailedLayout from '@/components/layouts/detailedLayout.vue'
import newsInfo from '@/components/polls/poll/pollInfo.vue'
import newsCard from '@/components/polls/poll/pollCard.vue'

export default {
//   props: ['news'],
  components: {
    detailedLayout,
    newsInfo,
    newsCard
  },
  data() {
    return {
      news: {
        type: 'anal'
      },
      newsData: {
        title: '',
        category: 'бизнес',
        date: '26.2.2019',
        views: 123,
        img: '~/assets/img/main-news-image-1.png',
        name: 'Иванов Иван',
        shared: 15,
        complete: false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.poll-id {
}
</style>