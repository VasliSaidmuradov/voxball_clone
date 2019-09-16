<template>
  <div class="Main">
    <section class="Slider">
      <Slider :sliderInfo="sliderInfo"></Slider>
    </section>
    <section class="Top-poll container">
      <polls-list :pollArr="pollsArray" />
    </section>
    <section class="Advertising container">
      <advertising advWidth="100%" advHeight="9rem" advImage="/assets/img/advertising.jpg"></advertising>
    </section>
    <section class="Top-news container">
      <top-news-list :content="topNewsContent" :newsArr="newsArray" />
    </section>
    <section class="Analitic-articles container">
      <div class="Analitic-articles__header">
        <h2 class="Analitic-articles__title">Аналитические статьи</h2>
        <p
          class="Analitic-articles__text"
        >Мнения и факты авторитетных журналистов и популярных блогеров</p>
      </div>
      <div class="row">
        <div class="col-6 d-flex flex-column justify-content-between">
          <analytical-card class="Analitic-articles__card"></analytical-card>
          <analytical-card class="Analitic-articles__card"></analytical-card>
        </div>
        <div class="col-3">
          <analytical-card class="Analitic-articles__card" column></analytical-card>
        </div>
        <div class="col-3">
          <div class="Advertising_m">
            <advertising advWidth="100%" advHeight="100%" advImage="~assets/img/advertising-1.png"></advertising>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-9 d-flex flex-column justify-content-between">
          <analytical-card img-width="31%" class="Analitic-articles__card"></analytical-card>
        </div>
        <div class="col-3">
          <div class="Advertising_s">
            <advertising advWidth="100%" advHeight="100%" advImage="~assets/img/advertising-2.png"></advertising>
          </div>
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
import pollsList from '@/components/polls/pollsList/pollsList.vue'
import Slider from '@/components/slider/slider.vue'
import sliderItem from '@/components/slider/sliderItem.vue'
import topNewsList from '@/components/news/topNews/topNewsList.vue'
import carousel from '@/components/carousel/carousel.vue'
import competitionCard from '@/components/cards/competitionCard.vue'
import analyticalCard from '@/components/cards/analyticalCard.vue'
import advertising from '@/components/advertising.vue'

if (process.browser) {
  var { Slide } = require('vue-carousel')
}

export default {
  components: {
    sliderItem,
    Slider,
    topNewsList,
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
      },
      newsArray: [
        {
          title: 'Токаев объявил мораторий на создание новых госкомпаний',
          date: '26.2.2019',
          category: 'политика',
          views: 345
        },
        {
          title: 'Токаев объявил мораторий на создание новых госкомпаний',
          date: '26.2.2019',
          category: 'политика',
          views: 345
        },
        {
          title: 'Токаев объявил мораторий на создание новых госкомпаний',
          date: '26.2.2019',
          category: 'политика',
          views: 349
        },
        {
          title: 'Токаев объявил мораторий на создание новых госкомпаний',
          date: '26.2.2019',
          category: 'политика',
          views: 341
        },
        {
          title: 'Токаев объявил мораторий на создание новых госкомпаний',
          date: '26.2.2019',
          category: 'политика',
          views: 342
        }
      ],
      pollsArray: [
        {
          category: 'Бизнес',
          video: 'Видео',
          title: 'хотите ли выполететь в космос?',
          date: '19.19.2019',
          views: 345,
          complete: false
        },
        {
          category: 'Бизнес',
          video: 'Видео',
          title: 'хотите ли выполететь в космос?',
          date: '19.19.2019',
          views: 345,
          complete: false
        },
        {
          category: 'Бизнес',
          video: 'Видео',
          title: 'хотите ли выполететь в космос?',
          date: '19.19.2019',
          views: 345,
          complete: false
        },
        {
          category: 'Бизнес',
          video: 'Видео',
          title: 'хотите ли выполететь в космос?',
          date: '19.19.2019',
          views: 345,
          complete: false
        },
        {
          category: 'Бизнес',
          video: 'Видео',
          title: 'хотите ли выполететь в космос?',
          date: '19.19.2019',
          views: 345,
          complete: false
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
  padding-top: 2rem;
}
.Advertising {
  margin-top: 2rem;

  &_m {
    height: 100%;
    padding: 10px 0 15px 15px;
  }
  &_s {
    height: 14rem;
    padding: 10px 0 15px 15px;
  }
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

.Analitic-articles {
  border-top: 1px solid $border-color;
  &__card {
    margin: 10px 0;
  }
  &__header {
    margin: 1rem 0;
  }
  &__title {
    font-size: 1.6rem;
    font-family: 'times new roman psmt';
    text-transform: uppercase;
    margin: 0;
  }
  &__text {
    font-size: 1rem;
    color: $secondary-text-color;
    margin: 0;
  }
}
</style>
