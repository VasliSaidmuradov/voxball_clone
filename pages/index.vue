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
    <section class="Analitic-articles"></section>
    <section class="Top-competition"></section>
  </div>
</template>

<script>
import pollCard from '@/components/cards/pollCard.vue'
import iconBase from '@/components/shared/iconBase.vue'
import iconArrow from '@/components/icons/iconArrow.vue'
import Slider from '@/components/slider/slider.vue'
import sliderItem from '@/components/slider/sliderItem.vue'
import newsCard from '@/components/cards/newsCard.vue'

export default {
  components: {
    pollCard,
    iconBase,
    iconArrow,
    sliderItem,
    Slider
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
</style>


