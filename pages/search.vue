<template>
  <div>
    <detailed-layout :title="`Результаты по запросу ${$route.query.query}`">
      <div class="mt-5 container">fddffd</div>
    </detailed-layout>
  </div>
</template>

<script>
import detailedLayout from '@/components/layouts/detailedLayout.vue'

export default {
  components: {
    detailedLayout
  }
}
</script>

<style lang="scss" scoped>
</style>