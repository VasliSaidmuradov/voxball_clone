<template>
  <carousel class="top-news__carousel" :content="content" :perPage="4">
    <Slide v-for="(newsItem, index) in newsArr" :key="index">
      <topNewsItem :news="newsItem"></topNewsItem>
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
    Slide,
  },
  props: {
    // slider: Boolean,
    content: Object,
    newsArr: Array
  },
  render: function (createElement) {
    return createElement('carousel', this.blogTitle)
  }
}
</script>

<style lang="scss" scoped>
.top-news {

}
</style>