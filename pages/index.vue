<template>
  <div class="Main">
    <section class="Slider">
      <no-ssr>
        <Slider :sliderInfo="sliderInfo"></Slider>
      </no-ssr>
    </section>
    <section class="Top-poll container mt-4">
      <polls-list :list="pollsArray" :adv="advList" :adv-n="3" />
    </section>
    <section class="Advertising container">
      <advertising width="100%" height="9rem" image="/assets/img/advertising.jpg"></advertising>
    </section>
    <section class="Top-news container">
      <no-ssr>
        <top-news-list :content="topNewsContent" :list="newsArray" />
      </no-ssr>
    </section>
    <section class="Analitic-articles container">
      <div class="Analitic-articles__header">
        <h2 class="Analitic-articles__title">Аналитические статьи</h2>
        <p
          class="Analitic-articles__text"
        >Мнения и факты авторитетных журналистов и популярных блогеров</p>
      </div>
      <news-list class="mb-4" v-for="(neww, index) in news" :key="index" :news="neww"></news-list>
    </section>
    <section class="Top-competition container">
      <no-ssr>
        <carousel class="Top-competition__carousel" :content="topCompetitionContent" :perPage="4">
          <Slide v-for="(news, index) in 6" :key="index">
            <competition-card></competition-card>
          </Slide>
        </carousel>
      </no-ssr>
    </section>
  </div>
</template>

<script>
import pollsList from '@/components/polls/pollsList/pollsList.vue'
import Slider from '@/components/slider/slider.vue'
import sliderItem from '@/components/slider/sliderItem.vue'
import topNewsList from '@/components/news/topNewsSlider/topNewsSliderList.vue'
import carousel from '@/components/carousel/carousel.vue'
import competitionCard from '@/components/cards/competitionCard.vue'
import analyticalCard from '@/components/cards/analyticalCard.vue'
import advertising from '@/components/advertising.vue'
import newsList from '@/components/news/newsList/newsList.vue'
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
    pollsList,
    newsList
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
          type: 'poll',
          category: 'Бизнес',
          video: '',
          title: 'хотите ли выполететь в космос?',
          date: '19.19.2019',
          views: 345,
          complete: false
        },
        {
          type: 'poll',
          category: 'Бизнес',
          video: '',
          title: 'хотите ли выполететь в космос?',
          date: '19.19.2019',
          views: 345,
          complete: false
        },
        {
          type: 'poll',
          category: 'Бизнес',
          video: '',
          title: 'хотите ли выполететь в космос?',
          date: '19.19.2019',
          views: 345,
          complete: false
        },
        {
          type: 'poll',
          category: 'Бизнес',
          video: 'Видео',
          title: 'хотите ли выполететь в космос?',
          date: '19.19.2019',
          views: 345,
          complete: false
        }
      ],
      advList: [
        {
          type: 'adv',
          category: 'Бизнес',
          video: 'Видео',
          title: 'хотите ли выполететь в космос?',
          date: '19.19.2019',
          views: 345,
          complete: false
        },
        {
          type: 'adv',
          category: 'Бизнес',
          video: 'Видео',
          title: 'хотите ли выполететь в космос?',
          date: '19.19.2019',
          views: 345,
          complete: false
        },
        {
          type: 'adv',
          category: 'Бизнес',
          video: 'Видео',
          title: 'хотите ли выполететь в космос?',
          date: '19.19.2019',
          views: 345,
          complete: false
        }
      ],
      news: [
        [
          {
            name: 'dsfsdfdsf'
          },
          {
            name: 'dsfsdfdsfsdf'
          },
          {
            name: 'dsfsdfdsfsdf'
          },
          {
            name: 'dsfsdfdsfsdf'
          },
          {
            name: 'dsfsdfdsfsdf'
          },
          {
            name: 'dsfsdfdsfsdf'
          },
          {
            name: 'dsfsdfdsfsdf'
          },
          {
            name: 'dsfsdfdsfsdf'
          }
        ]
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
