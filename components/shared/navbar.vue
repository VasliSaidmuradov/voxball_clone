<template>
  <nav class="nav">
    <nuxt-link class="nav__item" to="/">Опросы</nuxt-link>
    <nuxt-link class="nav__item" to="/">Результаты</nuxt-link>
    <nuxt-link class="nav__item" to="/">Новости</nuxt-link>
    <nuxt-link class="nav__item" to="/">Конкурсы и розыгрыши</nuxt-link>
    <nuxt-link class="nav__item" to="/">Рейтинг</nuxt-link>
    <nuxt-link class="nav__item" to="/">Стать акционером</nuxt-link>
  </nav>
</template>

<script>
import locale from '@/locale'
export default {
  data() {
    return {
      locale: locale
    }
  }
}
</script>

<style lang="scss" scoped>
$text-color: #2b454e;
.nav {
  &__item {
    font-size: 0.8em;
    padding: 0 0.7em;
    text-decoration: none;
    color: $text-color;

    &:hover {
      color: $base-color;
    }
  }
}
</style>