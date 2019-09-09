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
        <v-btn class="p-0" link>подробнее ⟶</v-btn>
      </div>
    </div>
    <no-ssr>
      <Carousel
        class="Slider-carousel"
        :navigationEnabled="false"
        :perPage="1"
        :navigateTo="navigateTo"
        :paginationEnabled="false"
        @pageChange="pageChange($event)"
      >
        <Slide v-for="(slide,index) in sliderInfo" :key="index">
          <img src="@/assets/img/slider-photo-2.png" alt />
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
      navigateTo: 0
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
      padding: 0;
      margin: 0;
    }

    &__text {
      font-size: 1.3rem;
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
      font-weight: 700;
      color: $secondary-text-color;
      padding: 0;
      margin: 0;
      text-transform: uppercase;
    }

    &__text {
      font-size: 0.9rem;
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
  }
}

.Slider-carousel {
  width: 60%;
  background: #ffffff;
  position: absolute;
  top: 0;
  right: 0;
  clip-path: polygon(0% 57%, 10% 0%, 100% 0%, 100% 100%);
  z-index: 2;
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
<<<<<<< HEAD
</style>

<style lang="scss">
.Slider {
  .VueCarousel-navigation-button {
    top: 57% !important;
    width: 2rem;
  }
  .VueCarousel-navigation-prev {
    left: auto !important;
    right: 7% !important;
  }
  .VueCarousel-navigation-next {
    left: auto !important;
    right: 7% !important;
  }
  .VueCarousel-navigation-next:hover path,
  .VueCarousel-navigation-prev:hover path {
    fill: #2b454e;
  }
  // .VueCarousel-inner:after {
  //   content: '';
  //   background: $base-color;
  //   position: absolute;
  //   bottom: 0;
  //   right: 0;
  //   height: 60%;
  //   width: 100%;
  //   clip-path: polygon(0% 29%, 100% 0%, 100% 100%);
  //   opacity: 0.7;
  // }
  // .VueCarousel-slide:after {
  //   content: '';
  //   background: $base-color;
  //   position: fixed;
  //   bottom: 0;
  //   right: 0;
  //   height: 60%;
  //   width: 100%;
  //   clip-path: polygon(0% 29%, 100% 0%, 100% 100%);
  //   opacity: 0.7;
  // }
=======
.Slider__green-bg {
  background: $base-color;
  position: absolute;
  bottom: 0;
  right: 0;
  height: 60%;
  width: 100%;
  clip-path: polygon(0% 29%, 100% 0%, 100% 100%);
  opacity: 0.7;
  z-index: 2;
}
.Slider-content {
  width: 24%;
  font-size: 1rem;
  position: absolute;
  bottom: 14%;
  right: 3%;
  color: white;
  display: flex;
  flex-direction: column;
  z-index: 8;

  &__title {
    text-transform: uppercase;
    margin: 0;
    margin-bottom: 0.5rem;
    font-weight: 700;
  }
  &__text {
    font-size: 0.9rem;
    margin: 0;
    font-weight: 600;
  }
>>>>>>> d4e827ff4dc56f452d9b2ed589b9d224143c7aaa
}
</style>


