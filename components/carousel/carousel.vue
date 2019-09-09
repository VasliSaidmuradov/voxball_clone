<template>
  <div class="carousel">
    <div class="carousel__header">
      <p class="carousel__title">
        {{ headerInfo.title }}
      </p>
      <p class="carousel__text">
        {{ headerInfo.text }}
      </p>
    </div>
    <Carousel 
     :loop="true"
     :per-page="perPage" 
     :navigationEnabled="true"
     navigationPrevLabel="⟵"
     navigationNextLabel="⟶"
     :paginationEnabled="false"
     >
      <slot></slot>
    </Carousel>
  </div>
</template>

<script>
import iconArrow from '@/components/icons/iconArrow.vue'
import iconArrowleft from '@/components/icons/iconArrowleft.vue'
if (process.browser) {
  var { Carousel } = require('vue-carousel')
}
export default {
  props: {
    headerInfo: Object,
    perPage: Number,
  },
  components: {
    Carousel
  }
}
</script>

<style lang="scss" scoped>
.carousel {
  &__header {
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
  }
  .VueCarousel-navigation-button:hover {
    color: $secondary-text-color;
  }
}
</style>