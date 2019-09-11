<template>
  <carousel class="Top-news__carousel section-carousel" :content="topNewsContent" :perPage="4">
    <Slide v-for="(news, index) in 6" :key="index">
        <top-news-item  />
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
  componetns: {
    carousel,
    topNewsItem
  },
  props: ['newsArr'],
  data() {
    newsArray: [
      {title: 'Токаев объявил мораторий на создание новых госкомпаний', date: '26.2.2019', category: 'политика', views: 345},
      {title: 'Токаев объявил мораторий на создание новых госкомпаний', date: '26.2.2019', category: 'политика', views: 345},
      {title: 'Токаев объявил мораторий на создание новых госкомпаний', date: '26.2.2019', category: 'политика', views: 345},
      {title: 'Токаев объявил мораторий на создание новых госкомпаний', date: '26.2.2019', category: 'политика', views: 345},
      {title: 'Токаев объявил мораторий на создание новых госкомпаний', date: '26.2.2019', category: 'политика', views: 345},
    ]
  }
}
</script>

<style>

</style>