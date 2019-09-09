<template>
  <div class="Main">
    <section>
      <Slider>
        <Slide v-for="(slide, index) in 3" :key="index">
          <sliderItem></sliderItem>
        </Slide>
      </Slider>
    </section>
    <section class="Top-poll container">
      <ul class="Top-poll__list">
        <li class="Top-poll__item" v-for="(poll, index) in 5" :key="index">
          <poll-card></poll-card>
        </li>
      </ul>
    </section>
    <section class="Advertising">
      <advertising advWidth="100%" advHeight="9rem" advImage="~assets/img/advertising.jpg"></advertising>
    </section>
    <section class="Top-news">
      <carousel 
       class="Top-news__carousel section-carousel" 
       :headerInfo="headerInfoArr[0]"
       :perPage="4">
        <Slide v-for="(news, index) in 6" :key="index">
          <news-card></news-card>
        </Slide>
      </carousel>
    </section>
    <section class="Analitic-articles container row">
      <div class="col-md-9">
        <div class="grid-container">
          <div class="news-1">
            <analytical-card></analytical-card>
          </div>
          <div class="news-2">
            <analytical-card></analytical-card>
          </div>
          <div class="news-3">
            <analytical-card :column="true"></analytical-card>
          </div>
          <div class="news-4">
            <analytical-card></analytical-card>
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <div class="Advertising_m">
          <advertising advImage="~assets/img/advertising-1.png"></advertising>
        </div>
        <div class="Advertising_s">
          <advertising advImage="~assets/img/advertising-2.png"></advertising>
        </div>
      </div>
    </section>
    <section class="Top-competition">
      <carousel class="Top-competition__carousel" :headerInfo="headerInfoArr[1]" :perPage="4">
        <Slide v-for="(news, index) in 6" :key="index">
          <competition-card></competition-card>
        </Slide>
      </carousel>
    </section>
    <section>
      <base-layout></base-layout>
    </section>
  </div>
</template>

<script>
import pollCard from '@/components/cards/pollCard.vue'
import iconBase from '@/components/shared/iconBase.vue'
import iconArrow from '@/components/icons/iconArrow.vue'
import Slider from '@/components/slider/slider.vue'
import sliderItem from '@/components/slider/sliderItem.vue'
import newsCard from '@/components/cards/newsCard.vue'
import carousel from '@/components/carousel/carousel.vue'
import competitionCard from '@/components/cards/competitionCard.vue'
import analyticalCard from '@/components/cards/analyticalCard.vue'
import advertising from '@/components/advertising.vue'
import baseLayout from '@/components/shared/baseLayout.vue'
if (process.browser) {
  var { Slide } = require('vue-carousel')
}

export default {
  components: {
    pollCard,
    iconBase,
    iconArrow,
    sliderItem,
    Slider,
    newsCard,
    carousel,
    Slide,
    competitionCard,
    analyticalCard,
    advertising,
    baseLayout
  },
  data() {
    return {
      page: 0,
      pollCards: [
        {
          name: 'sdfds fdsf dsfsd f '
        }
      ],
      headerInfoArr: [
        {
          title: 'Новости, которые сегодня обсуждают',
          text:
            'Читайте новости и участвуйте в опросах. Ваш ответ принесёт Вам деньги!'
        },
        {
          title: 'Топ лучших конкурсов на Voxball',
          text: 'Участвуйте в конкурсах и выигрывайте ценные призы'
        }
      ],
      sliderList: [
        {
          title: 'Участвуй в опросе',
          text: 'или создай свои опросы пройдя регистрацию.<br />И зарабатывай коины. Нам важен твой голос.'
        },
        {
          title: 'Участвуй в опросе',
          text: 'или создай свои опросы пройдя регистрацию.<br />И зарабатывай коины. Нам важен твой голос.'
        },
        {
          title: 'Участвуй в опросе',
          text: 'или создай свои опросы пройдя регистрацию.<br />И зарабатывай коины. Нам важен твой голос.'
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
.Advertising {
  margin: 5rem 15px 1rem;

  &_m {
    height: 66%;
    padding: 10px 15px 15px;
    width: 100%;
  }
  &_s {
    height: 33%;
    padding: 0 15px 15px;
    width: 100%;
  }
}
.Top-news {
  margin-top: 2em;
  border-top: 1px solid $border-color;
  padding-top: 0.5rem;

  &__carousel {
    margin: 0 15px;
  }
}
.Top-competition {
  border-top: 1px solid $border-color;
  padding-top: 0.5rem;
  &__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    list-style: none;
    padding: 0;
    font-size: 0.8em;
  }
  &__item {
    width: 25%;
  }
}
.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-areas: 'news-1 news-1 news-3' 'news-2 news-2 news-3' 'news-4 news-4 news-4';

  div {
    margin: 5px;
  }
}

.news-1 {
  grid-area: news-1;
}

.news-2 {
  grid-area: news-2;
}

.news-3 {
  grid-area: news-3;
}

.news-4 {
  grid-area: news-4;
}

@media only screen and (max-width: 1025px) {
  .grid-container {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    grid-template-areas: 'news-1' 'news-2' 'news-3' 'news-4';
  }
}
</style>
<style lang="scss">
// .section-carousel {
//   .VueCarousel-navigation {
//     position: absolute;
//     top: -3rem;
//     right: 0;
//     margin-right: 3rem;
//   }
//   .VueCarousel-navigation-button,
//   .VueCarousel-navigation-prev,
//   .VueCarousel-navigation-next,
//   .VueCarousel-navigation--disabled {
//     appearance: none;
//     outline: none;
//     opacity: 1;
//     color: $base-text-color;
//   }
//   .VueCarousel-navigation-button:hover {
//     color: $secondary-text-color;
//   }
// }
</style>