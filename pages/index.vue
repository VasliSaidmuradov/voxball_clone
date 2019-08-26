<template>
  <div class="Main">
    <section class="Slider">
      <Slider>
        <sliderItem></sliderItem>
        <sliderItem></sliderItem>
      </Slider>
    </section>
    <section class="Top-poll container">
      <ul class="Top-poll__list">
        <li class="Top-poll__item" v-for="(poll, index) in 5" :key="index">
          <poll-card></poll-card>
        </li>
      </ul>
    </section>
    <section class="Advertising"></section>
    <section class="Top-news">
      <ul class="Top-news__list">
        <li class="Top-news__item" v-for="(news, index) in 4" :key="index">
          <news-card></news-card>
        </li>
      </ul>
    </section>
<<<<<<< HEAD
    <section class="Analitic-articles"></section>
    <section class="Top-competition">
      <ul class="Top-competition__list">
        <li class="Top-competition__item" v-for="(competition, index) in 4" :key="index">
          <competition-card></competition-card>
        </li>
      </ul>
    </section>
=======
    <section class="Analitic-articles container" style="height: 500px;">
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
    </section>
    <section class="Top-competition"></section>
>>>>>>> 202662255333127c0cc9b65f57d9c1c1567c9e12
  </div>
</template>

<script>
import pollCard from '@/components/cards/pollCard.vue'
import iconBase from '@/components/shared/iconBase.vue'
import iconArrow from '@/components/icons/iconArrow.vue'
import Slider from '@/components/slider/slider.vue'
import sliderItem from '@/components/slider/sliderItem.vue'
import newsCard from '@/components/cards/newsCard.vue'
<<<<<<< HEAD
import competitionCard from '@/components/cards/competitionCard.vue'
=======
import analyticalCard from '@/components/cards/analyticalCard.vue'
>>>>>>> 202662255333127c0cc9b65f57d9c1c1567c9e12

export default {
  components: {
    pollCard,
    iconBase,
    iconArrow,
    sliderItem,
    Slider,
    newsCard,
<<<<<<< HEAD
    competitionCard
=======
    analyticalCard
>>>>>>> 202662255333127c0cc9b65f57d9c1c1567c9e12
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
<<<<<<< HEAD
.Top-news {
  &__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    list-style: none;
    margin: 0 15px;
    padding: 0;
    font-size: 0.8em;
  }
  &__item {
    width: 20%;
  }
}
.Top-competition {
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
=======
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
>>>>>>> 202662255333127c0cc9b65f57d9c1c1567c9e12
  }
}
</style>


