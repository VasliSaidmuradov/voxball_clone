<template>
  <div class="rating">
    <detailed-layout :title="'Рейтинг'">
      <rating-info class="mt-5" :poll="ratingData"></rating-info>
      <rating-card class="mb-5" :polltype="'stars'"></rating-card>
    </detailed-layout>
  </div>
</template>

<script>
import detailedLayout from '@/components/layouts/detailedLayout.vue'
import ratingInfo from '@/components/polls/poll/pollInfo.vue'
import ratingCard from '@/components/polls/poll/pollCard.vue'
export default {
  components: {
    detailedLayout,
    ratingInfo,
    ratingCard
  },
  data() {
    return {
      ratingData: {
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

<style>
</style>