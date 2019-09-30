<template>
  <div>
    <detailed-layout :title="`Результаты по запросу ${$route.query.query}`">
      <div class="mt-5 container">
        <upload></upload>
      </div>
    </detailed-layout>
  </div>
</template>

<script>
import detailedLayout from '@/components/layouts/detailedLayout.vue'
import upload from '@/components/inputs/upload.vue'

export default {
  components: {
    detailedLayout,
    upload
  }
}
</script>

<style lang="scss" scoped>
</style>