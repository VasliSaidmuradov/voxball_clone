<template>
  <div class="carousel">
    <div class="carousel__header">
      <p class="carousel__title">{{ content.title }}</p>
      <p class="carousel__text">{{ content.text }}</p>
    </div>
    <Carousel
      :loop="true"
      :per-page="perPage"
      :navigationEnabled="true"
      :navigationPrevLabel="navigationPrevLabel"
      :navigationNextLabel="navigationNextLabel"
      :paginationEnabled="false"
    >
      <slot></slot>
    </Carousel>
  </div>
</template>

<script>
if (process.browser) {
  var { Carousel } = require('vue-carousel')
}
export default {
  props: {
    content: Object,
    perPage: Number
  },
  components: {
    Carousel
  },
  data() {
    return {
      navigationPrevLabel: `<svg class="carousel-button" xmlns="http://www.w3.org/2000/svg" width="24" height="16" viewBox="0 0 24 16">
                                                                 <g><g>
                                                                 <path d="M24.11 6.467H6.664c.841-2.503 1.26-4.135 1.303-6.359C6.053 
                                                                                         3.943 3.568 5.94.564 7.818c3.004 1.799 5.38 3.993 7.402 
                                                                                         7.712-.13-2.417-.478-3.877-1.329-6.538h17.474z"/>
                                                                 </g></g></svg>`,
      navigationNextLabel: `<svg class="carousel-button" xmlns="http://www.w3.org/2000/svg" width="24" height="16" viewBox="0 0 24 16">
                                                                 <g><g>
                                                                 <path d="M-.112 6.467h17.448c-.84-2.503-1.26-4.135-1.302-6.359 
                                                                                      1.912 3.835 4.398 5.832 7.402 7.71-3.004 1.799-5.38 
                                                                                      3.993-7.402 7.712.129-2.417.477-3.877 1.328-6.538H-.112z"/>
                                                                 </g></g></svg>`
    }
  }
}
</script>

<style lang="scss" scoped>
.carousel {
  &__header {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
  &__title {
    font-size: 1.6rem;
    margin: 0;
    text-transform: uppercase;
  }
  &__text {
    font-size: 1rem;
    margin: 0;
    color: $secondary-text-color;
  }
}
</style>
<style lang="scss">
.carousel {
  .VueCarousel-navigation {
    position: absolute;
    top: -3rem;
    right: 0;
    margin-right: 3rem;
  }
  .VueCarousel-navigation-button,
  .VueCarousel-navigation-prev,
  .VueCarousel-navigation-next,
  .VueCarousel-navigation--disabled {
    -webkit-appearance: none;
    appearance: none;
    outline: none;
    opacity: 1;
    font-size: 1rem;
    font-weight: bold;
    color: $base-text-color;
    &:focus {
      outline: none;
    }
  }
  .VueCarousel-navigation-button {
    svg {
      fill: $base-text-color;
      &:hover {
        fill: $secondary-text-color;
      }
    }
  }
  .VueCarousel-navigation-button:hover {
    color: $secondary-text-color;
  }
}
</style>