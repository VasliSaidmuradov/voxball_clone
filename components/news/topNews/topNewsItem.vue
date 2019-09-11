<template>
  <div class="news-card">
    <div class="news-card__main">
      <div class="news-card__info">
        <div class="d-flex align-items-center justify-content-between w-100">
          <span class="news-card__date">{{ news.date }}</span>
          <views :count="news.views"></views>
        </div>
      </div>
      <div class="news-card__img-wrap">
        <img class="news-card__img" src="~/assets/img/main-news-test.png" />
      </div>
    </div>
    <div class="news-card__footer">
      <span class="news-card__tag">{{ news.category }}</span>
      <p class="news-card__title">{{ news.title }}</p>
      <nuxt-link class="news-card__button" to="/">подродбнее</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    news: {
      title: {
        type: String,
        default: 'Токаев объявил мораторий на создание новых госкомпаний'
      },
      date: {
        type: String,
        default: '26.2.2019'   
      },
      views: {
        type: Number,
        default: 345
      },
      category: {
        type: String,
        default: 'политика'
      }
    }
  }
}
</script>

<style>

</style>