<template>
  <div class="poll-id">
    <detailed-layout :title="'Мои Опросы'"/>
    <poll-info></poll-info>
    <poll-card></poll-card>
  </div>
</template>

<script>
import detailedLayout from '@/components/shared/detailedLayout.vue'
import pollInfo from '@/components/polls/pollInfo.vue'
import pollCard from '@/components/polls/pollCard.vue'

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