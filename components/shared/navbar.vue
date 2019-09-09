<template>
  <nav class="nav">
    <nuxt-link class="nav__item" to="/">{{ $t('nav.pools') }}</nuxt-link>
    <nuxt-link class="nav__item" to="/">{{ $t('nav.results') }}</nuxt-link>
    <nuxt-link class="nav__item" to="/">{{ $t('nav.news') }}</nuxt-link>
    <nuxt-link class="nav__item" to="/">{{ $t('nav.competitions') }}</nuxt-link>
    <nuxt-link class="nav__item" to="/">{{ $t('nav.rating') }}</nuxt-link>
    <nuxt-link class="nav__item" to="/">{{ $t('nav.become_shareholders') }}</nuxt-link>
  </nav>
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
$text-color: #2b454e;
.nav {
  &__item {
    font-size: 0.84rem;
    padding: 0 0.7em;
    text-decoration: none;
    color: $text-color;
    transition: 0.3s;

    &:hover {
      color: $base-color;
    }
  }
}
</style>