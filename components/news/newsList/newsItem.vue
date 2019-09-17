<template>
  <div class="news-card">
    <div class="news-card-wrapper" :class="cardWrapper">
      <div class="news-card__main">
        <div class="news-card__info">
          <div class="news-card__info-date">12.12.12</div>
          <views class="ml-2"></views>
        </div>
        <h2 class="news-card__title">{{data.name}}</h2>

        <p
          class="news-card__text"
        >{{'Большинство людей не просто не любят спойлеры – они их боятся. Это связано в первую очередь с тем, что человек хочет почувствовать wow-эффект при первом просмотре фильма или сериала.'.slice(0,200)}}</p>
        <v-btn link class="news-item__link" @click="$navigate('/news/123')">
          подробнее
          <icon-arrow class="ml-2"></icon-arrow>
        </v-btn>
      </div>
      <div
        class="news-card__img-container"
        :style="{'min-width': imgWidth}"
        :class="{'news-card__img-container--column':column}"
      >
        <div class="news-card__img-circles">
          <div class="news-card__row">
            <span class="news-card__img-circle"></span>
            <span class="news-card__img-circle"></span>
            <span class="news-card__img-circle"></span>
          </div>

          <div class="news-card__row">
            <span class="news-card__img-circle"></span>
            <span class="news-card__img-circle"></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import views from '@/components/shared/views'
import iconArrow from '@/components/icons/iconArrow.vue'
export default {
  components: {
    views,
    iconArrow
  },
  props: {
    data: Object,

    column: {
      type: Boolean,
      default: false
    },
    imgWidth: {
      type: String,
      default: '40%'
    }
  },
  created() {},
  computed: {
    cardWrapper() {
      return this.column
        ? 'news-card-wrapper--column'
        : 'news-card-wrapper--row'
    }
  }
}
</script>

<style lang="scss" scoped>
$text-color: #2b454e;
$light: #00b900;

.news-card {
  margin: 10px 0;
  &__main {
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 1em;
    box-shadow: 1px 1px 6px 1px rgba(0, 0, 0, 0.2);
    width: 100%;
  }

  &:hover .news-card-wrapper--column::after {
    bottom: 0px;
  }

  &:hover .news-card-wrapper--row::after {
    left: 0px;
  }

  &:hover &__info-date,
  &:hover &__title::after {
    background: $light;
  }
  &:hover &__link {
    color: $light;
  }

  &__info {
    display: flex;
    align-items: center;
    font-size: 0.8em;
  }

  &__info-date {
    padding: 0.2em 1em;
    color: white;
    background: darkgreen;
  }

  &__title {
    font-size: 1.2em;
    position: relative;

    &::after {
      content: '';
      position: absolute;
      width: 30%;
      height: 2px;
      background: green;
      bottom: -0.5em;
      left: 0px;
    }
  }
  &__text {
    font-size: 0.8em;
    height: 5em;
    overflow: hidden;
  }

  &__link {
    position: relative;
    color: $text-color;
  }

  &__img-container {
    position: relative;
    z-index: 1;
    background: url(~assets/img/test-bg.jpg) center;
    background-size: cover;
    min-width: 40%;

    &--column {
      height: 14em;
      width: 100%;
    }
  }

  &__img-circles {
    position: absolute;
    top: 0;
    right: 0;
  }

  &__img-circle {
    display: block;
    width: 15px;
    height: 15px;
    background: #e0ddddcf;
    border-radius: 50%;
    margin: 5px;
  }

  &__row {
    display: flex;
    flex-direction: row-reverse;
  }
}

.news-card-wrapper {
  display: flex;
  position: relative;
  background: white;

  &--column {
    flex-direction: column-reverse;

    &::after {
      content: '';
      position: absolute;
      display: block;
      bottom: -17px;
      width: 90%;
      z-index: -1;
      left: 50%;
      height: 20px;
      background: #00b900;
      transition: 0.5s linear;
      transform: translateX(-50%);
    }
  }
  &--row {
    height: 14em;

    &::after {
      content: '';
      position: absolute;
      display: block;
      top: 50%;
      width: 20px;
      z-index: -1;
      left: -17px;
      height: 84%;
      background: #00b900;
      transition: 0.5s linear;
      transform: translateY(-50%);
    }
  }
}
</style>