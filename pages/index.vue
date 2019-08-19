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
    <section class="Top-poll"></section>
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
export default {
  components: {
    Carousel,
    Slide
  },
  data() {
    return {
      page: 0
    }
  },
  methods: {}
}
</script>

<style>
</style>

