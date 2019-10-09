<template>
  <div class="top-news">
    <topNewsItem v-for="(item, index) in list" :key="index" :news="item"></topNewsItem>
  </div>
</template>

<script>
import topNewsItem from '@/components/news/topNews/topNewsItem.vue'

export default {
  components: {
    topNewsItem
  },
  props: {
    content: Object,
    list: Array
  }
}
</script>

<style lang="scss" scoped>
.top-news {
  display: flex;
  flex-wrap: wrap;
}
</style>