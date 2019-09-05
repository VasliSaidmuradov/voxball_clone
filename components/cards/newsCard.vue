<template>
  <div class="news-card">
    <div class="news-card__main">
      <div class="news-card__info">
        <span class="news-card__date">{{ news.date }}</span>
        <span class="news-card__views">
          <icon-base stroke-width="8px" viewBox="0 0 120 110" iconColor="none">
            <icon-eyes></icon-eyes>
          </icon-base>
          <span>{{ news.views }}</span>
        </span>
      </div>
      <div class="news-card__img-wrap">
        <img class="news-card__img" src="~/assets/img/main-news-test.png" />
      </div>
    </div>
    <div class="news-card__footer">
      <span class="news-card__tag">{{ news.tag }}</span>
      <p class="news-card__title">{{ news.title }}</p>
      <nuxt-link class="news-card__button" to="/">подродбнее</nuxt-link>
    </div>
  </div>
</template>

<script>
import iconEyes from '@/components/icons/iconEyes.vue'
export default {
  components: {
    iconEyes
  },
  data() {
    return {
      news: {
        title: 'Токаев объявил мораторий на создание новых госкомпаний',
        tag: 'политика',
        date: '26.2.2019',
        views: 125,
        img: '~/assets/img/main-news-image-1.png'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
$color-gray_darker: #bababa;
$family: 'Helvetica';

.news-card {
  height: 30rem;
  min-width: 16.875rem;
  width: 16.875rem;
  display: flex;
  flex-direction: column;
  cursor: pointer;

  &:hover &__info {
    border-color: $base-color;
    color: #000000;
  }
  &:hover &__icon path,
  &:hover &__icon circle {
    stroke: #000000;
  }
  &:hover &__img-wrap:after {
    width: 100%;
    height: 100%;
  }
  &:hover &__tag {
    background-color: $base-color;
  }
  &:hover &__button {
    color: $base-color;
  }
  &:hover &__button:after {
    color: $base-color;
  }

  &__main {
    width: 100%;
    height: 80%;
    position: relative;
  }

  &__info {
    width: 75%;
    height: 90%;
    padding: 0 10%;
    padding-top: 1rem;
    border: 0.35rem solid $border-color;
    display: flex;
    align-items: flex-start;
    justify-content: space-around;
    position: relative;
    transition: 0.5s ease;
    color: $color-gray_darker;
  }

  &__date {
    font-size: 0.85rem;
    font-weight: 500;
    width: 40%;
    height: 10%;
    display: flex;
    align-items: center;
  }

  &__date:after {
    content: '';
    display: block;
    position: absolute;
    top: 7%;
    left: 54%;
    transform: translateX(-50%);
    width: 1px;
    height: 6%;
    background: $color-gray_darker;
  }

  &__views {
    font-size: 0.85rem;
    font-weight: 500;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    width: 40%;
    height: 10%;
  }

  &__icon {
    width: 1rem;
    margin-right: 0.3rem;
    vertical-align: middle;
  }

  &__img-wrap {
    width: 92%;
    height: 84%;
    position: absolute;
    bottom: 0;
    right: 0;
    background: #ffffff;
    box-sizing: content-box;
    transition: 0.5s ease;
    z-index: 2;
    &:after {
      content: '';
      display: block;
      position: absolute;
      right: 0;
      bottom: 0;
      width: calc(100% + 0.425rem);
      height: calc(100% + 0.425rem);
      z-index: -1;
      background-color: $base-color;
      transition: 0.5s ease;
    }
  }

  &__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__footer {
    width: 100%;
    padding-left: calc(8% + 0.5rem);
    height: 30%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  &__tag {
    background-color: $base-text-color;
    color: #ffffff;
    font-size: 0.6rem;
    font-family: $family;
    font-weight: 500;
    text-align: center;
    width: 32%;
    padding-top: 0.25rem;
    padding-bottom: 0.25rem;
    text-transform: uppercase;
    transition: background-color 0.5s ease;
  }

  &__title {
    color: #000000;
    margin: 0;
    margin-top: 1.425rem;
    margin-bottom: 0.85rem;
    font-size: 0.8rem;
    font-weight: 500;
    font-family: $family;
    text-transform: uppercase;
  }

  &__button {
    color: $base-text-color;
    font-size: 0.7rem;
    font-weight: 700;
    font-family: $family;
    text-transform: uppercase;
    letter-spacing: 0.04rem;
    position: relative;
    transition: color 0.5s ease;
    cursor: pointer;
    &::after {
      content: '⟶';
      top: 50%;
      margin-left: 10px;
      border: none;
      position: absolute;
      transform: translateY(-50%);
    }
  }
}
</style>