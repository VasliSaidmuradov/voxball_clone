<template>
  <div class="Main">
    <section class="Slider">
      <Slider :sliderInfo="sliderInfo"></Slider>
    </section>
    <section class="Top-pool container">
      <polls-list>
        <poll-item class="Top-poll__item" v-for="(poll, index) in 5" :key="index"></poll-item>
      </polls-list>
    </section>
    <section class="Advertising container mt-5">
      <advertising advWidth="100%" advHeight="9rem" advImage="/assets/img/advertising.jpg"></advertising>
    </section>
    <section class="Top-news container">
      <carousel class="Top-news__carousel section-carousel" :content="topNewsContent" :perPage="4">
        <Slide v-for="(news, index) in 6" :key="index">
          <news-card></news-card>
        </Slide>
      </carousel>
    </section>
    <section class="Analitic-articles container">
      <analyticalArticles></analyticalArticles>
      <!-- <analytical-articles></analytical-articles> -->
    </section>
    <section class="Top-competition container">
      <carousel class="Top-competition__carousel" :content="topCompetitionContent" :perPage="4">
        <Slide v-for="(news, index) in 6" :key="index">
          <competition-card></competition-card>
        </Slide>
      </carousel>
    </section>
    <section>
      <poll-info></poll-info>
      <poll-card></poll-card>
    </section>
  </div>
</template>

<script>
import pollItem from '@/components/polls/pollItem.vue'
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
import analyticalArticles from '@/components/articles/analyticalArticles.vue'
import pollInfo from '@/components/polls/pollInfo.vue'
import pollCard from '@/components/polls/pollCard.vue'

if (process.browser) {
  var { Slide } = require('vue-carousel')
}

export default {
  components: {
    pollItem,
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
    pollsList,
    analyticalArticles,
    pollInfo,
    pollCard
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
          title: 'Или участвуйте',
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

.Top-poll__item {
  flex: 0 0 auto;
  margin: 15px;
  margin-bottom: 0;
  width: calc(1 / 5 * 100% - 30px);
}

.Top-news {
  margin-top: 2rem;
  border-top: 1px solid $border-color;
  padding-top: 0.5rem;
}

.Top-competition {
  margin-top: 2rem;
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
</style>