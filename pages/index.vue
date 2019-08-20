<template>
  <div class="Main">
    <section class="Slider">
      <div class="Slider-static">
        <div class="Slider-static-top">
          <p class="Slider-static-top__text Slider-static-top__text_green">Информационный портал</p>
          <h1 class="Slider-static-top__title">VOXBALL предлагает Вам</h1>
          <p class="Slider-static-top__text">
            зарегистрироваться на портале, создавать опросы
            и зарабатывать коины.
          </p>
        </div>
        <div class="Slider-static-bottom">
          <p class="Slider-static-bottom__title Slider-static-bottom__title_green">Стань акционером</p>
          <p class="Slider-static-bottom__text text-font-1">и получай часть дохода от воксбалла.</p>
          <p class="Slider-static-bottom__text text-font-2">Все что нужно, это заработать 5000 коинов, и вы автоматически становитесь акционером.</p>
          <nuxt-link class="link-button link-button_green" to='/'>
            подробнее
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="6" viewBox="0 0 22 6">
              <g><g>
              <path fill="#00b900" d="M.009 2.875h16.287c-.785-.81-1.175-1.338-1.216-2.058 
                                          1.786 1.241 4.106 1.888 6.91 2.496-2.804.582-5.022 
                                          1.293-6.91 2.496.121-.783.446-1.255 1.24-2.116H.01z"/>
              </g></g>
            </svg>
          </nuxt-link>
        </div>
      </div>      
      <!-- slider begin -->
      <no-ssr placeholder="Loading">
        <Carousel class="Slider-carousel" :navigationEnabled="true"
                                          navigationPrevLabel='`<svg class="slider-prev" xmlns="http://www.w3.org/2000/svg" width="24" height="16" viewBox="0 0 24 16">
                                                                 <g><g>
                                                                 <path fill="#ffffff" d="M24.11 6.467H6.664c.841-2.503 1.26-4.135 1.303-6.359C6.053 
                                                                                         3.943 3.568 5.94.564 7.818c3.004 1.799 5.38 3.993 7.402 
                                                                                         7.712-.13-2.417-.478-3.877-1.329-6.538h17.474z"/>
                                                                 </g></g></svg>`'
                                          :navigationNextLabel='`<svg class="slider-next" xmlns="http://www.w3.org/2000/svg" width="24" height="16" viewBox="0 0 24 16">
                                                                 <g><g>
                                                                 <path fill="#ffffff" d="M-.112 6.467h17.448c-.84-2.503-1.26-4.135-1.302-6.359 
                                                                                      1.912 3.835 4.398 5.832 7.402 7.71-3.004 1.799-5.38 
                                                                                      3.993-7.402 7.712.129-2.417.477-3.877 1.328-6.538H-.112z"/>
                                                                 </g></g></svg>`'
                                          :navigateTo="page" :perPage="1" :paginationEnabled="false">
          <!-- 1 -->
          <Slide class="Slide">
            <div class="Slide-top">
              <img class="Slide-top__image" src="../assets/img/slider-photo-2.png">
            </div>
            <div class="Slide-bottom">
              <p class="Slide-bottom__title">Участвуй в опросе</p>
              <p class="Slide-bottom__text">
                или создай свои опросы пройдя регистрацию. <br>
                И зарабатывай коины. Нам важен твой голос.
              </p>
              <nuxt-link class="link-button link-button_right" to='/'>
                подробнее
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="6" viewBox="0 0 22 6">
                  <g><g>
                  <path fill="#ffffff" d="M.009 2.875h16.287c-.785-.81-1.175-1.338-1.216-2.058 
                                            1.786 1.241 4.106 1.888 6.91 2.496-2.804.582-5.022 
                                            1.293-6.91 2.496.121-.783.446-1.255 1.24-2.116H.01z"/>
                  </g></g>
                </svg>
              </nuxt-link>
            </div>
            <div class="Slide__green">
            </div>
          </Slide>
          <!-- 2 -->
          <Slide class="Slide">
            <div class="Slide-top">
              <img class="Slide-top__image" src="../assets/img/slider-photo-2.png">
            </div>
            <div class="Slide-bottom">
              <p class="Slide-bottom__title">Участвуй в опросе</p>
              <p class="Slide-bottom__text">
                или создай свои опросы пройдя регистрацию.
                И зарабатывай коины. Нам важен твой голос.
              </p>
              <nuxt-link class="link-button link-button_right" to='/'>
                подробнее
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="6" viewBox="0 0 22 6">
                  <g><g>
                  <path fill="#ffffff" d="M.009 2.875h16.287c-.785-.81-1.175-1.338-1.216-2.058 
                                            1.786 1.241 4.106 1.888 6.91 2.496-2.804.582-5.022 
                                            1.293-6.91 2.496.121-.783.446-1.255 1.24-2.116H.01z"/>
                  </g></g>
                </svg>
              </nuxt-link>
            </div>
            <div class="Slide__green">
            </div>
          </Slide>
        </Carousel>
      </no-ssr>
      <!-- slider end -->
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

<style lang="scss" scoped>
$bg: transparent;
$color-green: #00b900;
$color-blue: #2b454e;
$border: 1px solid $color-green;
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

// @mixin reset {
//   border: none;
//   background: transparent;
// }

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
    background-image: url('../assets/img/main-page-slider__bg-top.png');
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
      color: $color-blue;
      padding: 0;
      margin: 0;
    }

    &__text {
      font-size: 1.3rem;
      color: $color-blue;
      padding: 0;
      margin: 0;
    
      &_green{
        color: $color-green; 
      }

    }
  }

  &-bottom {
    background-image: url('../assets/img/main-page-slider__bg-bottom.png');
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
      color: $color-blue;
      padding: 0;
      margin: 0;
      text-transform: uppercase;

      &_green{
        color: $color-green; 
      }
    }

    &__text {
      font-size: 1.3rem;
      color: $color-blue;
      padding: 0;
      margin: 0;
      margin-bottom: 0.2rem;
    }

  }

}

.Slider-carousel {
  width: 60%;
  background: #ffffff;
  top:0;
  position: absolute;
  right: 0;
  clip-path: polygon(0% 57%, 10% 0%, 100% 0%, 100% 100%);
  z-index: 2;
}

.Slide {
  height: 21rem;
  clip-path: polygon(0% 57%, 10% 0%, 100% 0%, 100% 100%);
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  &-top {
    height: 100%;
    width: 100%;
    clip-path: polygon(0% 60%, 10% 0%, 100% 0%, 100% 100%);
    
    &__image {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &-bottom {
    height: 47%;
    width: 40%;
    font-size: 1.3rem;
    position: absolute;
    bottom: 0;
    right: 15%;
    opacity: 1;
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
  }
}

.Slide__green {
  background: $color-green;
  position: absolute;
  bottom: 0; 
  right: 0;
  height: 60%;
  width: 100%;
  clip-path: polygon(0% 29%, 100% 0%, 100% 100%);
  opacity: 0.7;
  z-index: 2;
}

.text-font-1 {
  font-size: 1rem;
  font-weight: 600;
  text-transform: uppercase;
}

.text-font-2 {
  font-size: 0.9rem;
}

.link-button {
  font-size: 0.8rem;
  font-weight: 700;
  color: #ffffff;

  &_green {
    color: #00b200;
  }

  &_right {
    align-self: flex-end;
    margin-top: 1rem;
  }
}

</style>

<style>
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
.VueCarousel-navigation-prev:hover path{
  fill: #2b454e;
}
</style>

