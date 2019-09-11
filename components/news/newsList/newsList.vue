<template>
  <section class="container">
    <div class="row">
      <div class="col-6 d-flex flex-column justify-content-between">
        <new-item v-if="news[0]" :data="news[0]" class="Analitic-articles__card"></new-item>
        <new-item v-if="news[1]" :data="news[1]" class="Analitic-articles__card"></new-item>
      </div>
      <div class="col-3">
        <new-item v-if="news[2]" :data="news[2]" class="Analitic-articles__card" column></new-item>
      </div>
      <div class="col-3">
        <new-item v-if="news[3]" :data="news[3]" class="Analitic-articles__card" column></new-item>
      </div>
      <div class="col-3">
        <new-item v-if="news[4]" :data="news[4]" class="Analitic-articles__card" column></new-item>
      </div>
      <div class="col-3">
        <new-item v-if="news[5]" :data="news[5]" class="Analitic-articles__card" column></new-item>
      </div>
      <div class="col-6 d-flex flex-column justify-content-between">
        <new-item v-if="news[6]" :data="news[6]" class="Analitic-articles__card"></new-item>
        <new-item v-if="news[7]" :data="news[7]" class="Analitic-articles__card"></new-item>
      </div>
    </div>
  </section>
</template>

<script>
import newItem from '@/components/news/newslist/newsItem.vue'
import advertising from '@/components/advertising.vue'

export default {
  components: {
    advertising,
    newItem
  },
  props: {
    news: Array
  },
  created() {}
}
</script>

<style lang="scss" scoped>
</style>