<template>
  <div class="Slider">
    <div class="Slider-static">
      <div class="Slider-static-top">
        <p class="Slider-static-top__text text--color-secondary">Информационный портал</p>
        <h1 class="Slider-static-top__title">VOXBALL предлагает Вам</h1>
        <p class="Slider-static-top__text">
          зарегистрироваться на портале, создавать опросы
          и зарабатывать коины
        </p>
      </div>
      <div class="Slider-static-bottom">
        <p class="Slider-static-bottom__title text--color-secondary">Стань акционером</p>
        <p
          class="Slider-static-bottom__text Slider-static-bottom__text_upper"
        >и получай часть дохода от воксбалла.</p>
        <p
          class="Slider-static-bottom__text"
        >Все что нужно, это заработать 5000 коинов, и вы автоматически становитесь акционером.</p>
        <v-btn class="Slider-static-bottom__button p-0" link>подробнее ⟶</v-btn>
      </div>
    </div>
    <no-ssr>
      <Carousel
        class="Slider-carousel"
        :navigationEnabled="true"
        :navigationPrevLabel="navigationPrevLabel"
        :navigationNextLabel="navigationNextLabel"
        :perPage="1"
        :navigateTo="navigateTo"
        :paginationEnabled="false"
        loop
        @pageChange="pageChange($event)"
      >
        <Slide v-for="(slide,index) in sliderInfo" :key="index">
          <img class="Slider-carousel__image" src="@/assets/img/slider-photo-3.png" alt />
        </Slide>
      </Carousel>
    </no-ssr>
    <div class="Slider-content">
      <p class="Slider-content__title">{{sliderInfo[page].title}}</p>
      <p class="Slider-content__text">{{sliderInfo[page].desc}}</p>
      <div class="d-flex justify-content-end">
        <v-btn class="Slider__link" link>
          <nuxt-link to="/">
            <span>подробнее ⟶</span>
          </nuxt-link>
        </v-btn>
      </div>
    </div>
    <div class="Slider__green-bg"></div>
  </div>
</template>

<script>
if (process.browser) {
  var { Carousel, Slide } = require('vue-carousel')
}
export default {
  props: ['list'],
  data() {
    return {
      page: 0,
      navigateTo: 0,
      navigationPrevLabel: `<svg class="slider-prev" xmlns="http://www.w3.org/2000/svg" width="24" height="16" viewBox="0 0 24 16">
                                                                 <g><g>
                                                                 <path fill="#ffffff" d="M24.11 6.467H6.664c.841-2.503 1.26-4.135 1.303-6.359C6.053 
                                                                                         3.943 3.568 5.94.564 7.818c3.004 1.799 5.38 3.993 7.402 
                                                                                         7.712-.13-2.417-.478-3.877-1.329-6.538h17.474z"/>
                                                                 </g></g></svg>`,
      navigationNextLabel: `<svg class="slider-next" xmlns="http://www.w3.org/2000/svg" width="24" height="16" viewBox="0 0 24 16">
                                                                 <g><g>
                                                                 <path fill="#ffffff" d="M-.112 6.467h17.448c-.84-2.503-1.26-4.135-1.302-6.359 
                                                                                      1.912 3.835 4.398 5.832 7.402 7.71-3.004 1.799-5.38 
                                                                                      3.993-7.402 7.712.129-2.417.477-3.877 1.328-6.538H-.112z"/>
                                                                 </g></g></svg>`
    }
  },
  methods: {
    pageChange(page) {
      this.page = page
    }
  },
  props: {
    sliderInfo: Array
  },
  components: {
    Carousel,
    Slide
  }
}
</script>

<style lang="scss" scoped>
.Slider {
  display: flex;
  align-items: center;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  position: relative;
  cursor: pointer;
  transition: 0.3s;
}

.Slider-static {
  width: 80%;
  margin: 0;
  height: 20rem;

  &-top {
    background-image: url('~assets/img/main-page-slider__bg-top.png');
    background-repeat: no-repeat;
    background-size: 100%;
    width: 60%;
    height: 60%;
    box-sizing: border-box;
    padding: 2% 5%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    &__title {
      font-size: 2rem;
      font-family: 'times new roman psmt';
      padding: 0;
      margin: 0;
    }

    &__text {
      width: 90%;
      font-size: 1.2rem;
      font-family: HelveticaNeue-Medium;
      padding: 0;
      margin: 0;
    }
  }

  &-bottom {
    background-image: url('~assets/img/main-page-slider__bg-bottom.png');
    background-repeat: no-repeat;
    background-size: 100%;
    width: 100%;
    height: 40%;
    padding: 3% 5%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    &__title {
      font-size: 1.3rem;
      font-family: 'times new roman psmt';
      font-weight: 700;
      color: $secondary-text-color;
      padding: 0;
      margin: 0;
      text-transform: uppercase;
    }

    &__text {
      font-size: 0.8rem;
      font-weight: 600;
      color: $base-text-color;
      padding: 0;
      margin: 0;
      margin-bottom: 0.2rem;

      &_upper {
        font-size: 1rem;
        text-transform: uppercase;
      }
    }
    &__button {
      // font-size: 0.7rem;
    }
  }
}

.Slider-carousel {
  width: 60%;
  height: 21rem;
  background: #ffffff;
  position: absolute;
  top: 0;
  right: 0;
  clip-path: polygon(0% 57%, 10% 0%, 100% 0%, 100% 100%);
  z-index: 2;
  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
.Slide__green {
  background: $base-color;
  position: absolute;
  bottom: 0;
  right: 0;
  height: 60%;
  width: 60%;
  clip-path: polygon(0% 29%, 100% 0%, 100% 100%);
  opacity: 0.7;
  z-index: 2;
}

.link-button {
  font-size: 0.8em;
  font-weight: 700;
  color: #ffffff;

  &_green {
    color: #00b200;
    &:hover {
      color: $base-text-color;
    }
  }

  &_right {
    align-self: flex-end;
    margin-top: 1rem;
  }
}
.arrow {
  margin-bottom: -13px;
  margin-left: 0.5rem;
  height: auto;
}
</style>

<style lang="scss">
.Slider {
  .VueCarousel .VueCarousel-navigation {
    position: absolute;
    bottom: 47%;
    right: 3rem;
  }
  .VueCarousel .VueCarousel-inner {
    height: 100% !important;
  }
  .VueCarousel-navigation-button {
    top: 57% !important;
    width: 2rem;
    &:focus {
      outline: none;
    }
  }
  .VueCarousel-navigation-prev {
    left: auto !important;
  }
  .VueCarousel-navigation-next {
    left: auto !important;
    right: 7% !important;
  }
  .VueCarousel-navigation-next:hover path,
  .VueCarousel-navigation-prev:hover path {
    fill: #2b454e;
  }
  .VueCarousel-wrapper {
    height: 100%;
  }
  .VueCarousel-wrapper:after {
    content: '';
    background: $base-color;
    position: absolute;
    bottom: 0;
    right: 0;
    height: 60%;
    width: 100%;
    clip-path: polygon(0% 29%, 100% 0%, 100% 100%);
    opacity: 0.9;
  }
}
.Slider__green-bg {
  display: none;
  background: $base-color;
  position: absolute;
  bottom: -1rem;
  right: 0;
  height: 60%;
  width: 60%;
  clip-path: polygon(0% 25%, 100% 0%, 100% 100%);
  opacity: 0.7;
  z-index: 2;
}
.Slider-content {
  width: 24%;
  font-size: 1rem;
  position: absolute;
  bottom: 18%;
  right: 8%;
  color: white;
  display: flex;
  flex-direction: column;
  z-index: 8;

  &__title {
    text-transform: uppercase;
    font-family: 'times new roman psmt';
    font-size: 1.4rem;
    margin: 0;
    font-weight: 700;
  }
  &__text {
    font-family: 'times new roman psmt';
    font-size: 0.9rem;
    margin: 0;
  }
  .v-btn {
    text-decoration: none;
  }
  .v-btn--link a {
    color: white;
    &:hover {
      color: white;
      text-decoration: none;
    }
  }
}
</style>


