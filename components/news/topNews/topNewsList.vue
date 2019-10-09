<template>
  <carousel class="top-news__carousel" :content="content" :perPage="4">
    <Slide v-for="(item, index) in list" :key="index">
      <topNewsItem :news="item"></topNewsItem>
    </Slide>
  </carousel>
</template>

<script>
import carousel from '@/components/carousel/carousel.vue'
import topNewsItem from '@/components/news/topNews/topNewsItem.vue'

if (process.browser) {
  var { Slide } = require('vue-carousel')
}

export default {
  components: {
    carousel,
    topNewsItem,
    Slide
  },
  props: {
    // slider: Boolean,
    content: Object,
    list: Array
  },
  render: function(createElement) {
    return createElement('carousel', this.blogTitle)
  }
}
</script>

<style lang="scss" scoped>
.top-news {
}
</style>