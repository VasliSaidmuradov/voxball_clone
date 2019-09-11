<template>
  <div class="poll-id">
    <detailed-layout :title="'Мои Опросы'">
      <poll-info></poll-info>
      <poll-card></poll-card>
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
}
</script>

<style lang="scss" scoped>
.poll-id {
    
}
</style>