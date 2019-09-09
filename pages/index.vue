<template>
  <div class="Main">
    <section class="Slider">
      <Slider :sliderInfo="sliderInfo"></Slider>
    </section>
    <section class="Top-pool container">
      <polls-list>
        <pollCard class="Top-poll__card" v-for="(poll, index) in 5" :key="index"></pollCard>
      </polls-list>
    </section>
    <section class="Advertising">
      <advertising advWidth="100%" advHeight="9rem" advImage="~assets/img/advertising.jpg"></advertising>
    </section>
    <section class="Top-news container">
      <carousel class="Top-news__carousel section-carousel" :content="topNewsContent" :perPage="4">
        <Slide v-for="(news, index) in 6" :key="index">
          <news-card></news-card>
        </Slide>
      </carousel>
    </section>
    <section class="Analitic-articles container">
      <div class="row">
        <div class="col-6 d-flex flex-column justify-content-between">
          <analytical-card class="Analitic-articles__card"></analytical-card>
          <analytical-card class="Analitic-articles__card"></analytical-card>
        </div>
        <div class="col-3">
          <analytical-card class="Analitic-articles__card" column></analytical-card>
        </div>
      </div>
      <div class="row">
        <div class="col-9 d-flex flex-column justify-content-between">
          <analytical-card img-width="31%" class="Analitic-articles__card"></analytical-card>
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
    <section class="Top-competition container">
      <carousel class="Top-competition__carousel" :content="topCompetitionContent" :perPage="4">
        <Slide v-for="(news, index) in 6" :key="index">
          <competition-card></competition-card>
        </Slide>
      </carousel>
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
import pollsList from '@/components/polls/pollsList.vue'

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
    pollsList
  },
  data() {
    return {
      page: 0,
      pollCards: [
        {
          name: 'sdfds fdsf dsfsd f '
        }
      ],
      sliderInfo: [
        {
          title: 'Участвуй в опросе',
          desc:
            'или создай свои опросы пройдя регистрацию. И зарабатывай коины. Нам важен твой голос.',
          img: '/assets/img/slider-photo-2.png'
        },
        {
          title: 'Или иди нахуй',
          desc:
            'или создай свои опросы пройдя регистрацию. И зарабатывай коины. Нам важен твой голос.',
          img: '/assets/img/slider-photo-2.png'
        }
      ],
      topNewsContent: {
        title: 'Новости, которые сегодня обсуждают',
        text:
          'Читайте новости и участвуйте в опросах. Ваш ответ принесёт Вам деньги!'
      },
      topCompetitionContent: {
        title: 'Топ лучших конкурсов на Voxball',
        text: 'Участвуйте в конкурсах и выигрывайте ценные призы'
      }
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

.Top-poll__card {
  flex: 0 0 auto;
  margin: 15px;
  margin-bottom: 0;
  width: calc(1 / 5 * 100% - 30px);
}
<<<<<<< HEAD
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
=======

>>>>>>> d4e827ff4dc56f452d9b2ed589b9d224143c7aaa
.Top-news {
  margin-top: 2em;
  border-top: 1px solid $border-color;
  padding-top: 0.5rem;
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

.Analitic-articles__card {
  margin: 10px 0;
}
</style>