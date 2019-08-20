<template>
  <div class="Main">
    <section class="Slider">
      <no-ssr placeholder="Loading">
        <Carousel :navigateTo="page" :perPage="1" :paginationEnabled="false">
          <Slide>Slide 1 Content</Slide>
          <Slide>Slide 2 Content</Slide>
        </Carousel>
      </no-ssr>
    </section>
    <section class="Top-poll container">
      <ul class="Top-poll__list">
        <li class="Top-poll__item" v-for="(poll, index) in 5" :key="index">
          <poll-card></poll-card>
        </li>
      </ul>
    </section>
    <section class="Advertising"></section>
    <section class="Top-news"></section>
    <section class="Analitic-articles"></section>
    <section class="Top-competition"></section>
  </div>
</template>

<script>
if (process.browser) {
  var { Carousel, Slide } = require('vue-carousel')
}

import pollCard from '@/components/cards/pollCard.vue'
export default {
  components: {
    Carousel,
    Slide,
    pollCard
  },
  data() {
    return {
      page: 0,
      pollCards: [
        {
          name: 'sdfds fdsf dsfsd f '
        }
      ]
    }
  },
  methods: {}
}
</script>

<style lang="scss">
.Top-poll {
  &__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    margin: 0 -15px;
    margin-top: 20px;
    list-style: none;
    padding: 0;
    font-size: 0.8em;
  }
  &__item {
    flex: 0 0 auto;
    margin: 15px;
    margin-bottom: 0;
    width: calc(1 / 5 * 100% - 30px);
  }
}
</style>

