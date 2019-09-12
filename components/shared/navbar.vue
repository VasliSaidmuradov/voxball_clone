<template>
  <nav class="nav">
    <a class="nav__item" @click="$navigate('/polls')">{{ $t('nav.polls') }}</a>
    <a class="nav__item" @click="$navigate('/results')" to="/">{{ $t('nav.results') }}</a>
    <a class="nav__item" @click="$navigate('/news')" to="/">{{ $t('nav.news') }}</a>
    <a class="nav__item" to="/">{{ $t('nav.competitions') }}</a>
    <a class="nav__item" to="/">{{ $t('nav.rating') }}</a>
    <a class="nav__item" to="/">{{ $t('nav.become_shareholders') }}</a>
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
    cursor: pointer;

    &:hover {
      color: $base-color;
    }
  }
}
</style>