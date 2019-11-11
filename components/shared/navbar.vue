<template>
  <nav class="nav">
    <a
      v-for="nav in navs"
      :key="nav.path"
      class="nav__item"
      :class="{'nav__item--active': new RegExp(nav.path).test($route.path)}"
      @click="$navigate(nav.path)"
    >{{ nav.label }}</a>
  </nav>
</template>

<script>
export default {
  data() {
    return {}
  },
  computed: {
    navs() {
      let nav = [
        {
          label: this.$t('nav.polls'),
          path: '/polls'
        },
        {
          label: this.$t('nav.results'),
          path: '/results'
        },
        {
          label: this.$t('nav.news'),
          path: '/news'
        },
        {
          label: this.$t('nav.competitions'),
          path: '/competitions'
        },
        {
          label: this.$t('nav.rating'),
          path: '/ratings'
        }
        // {
        //   label: this.$t('nav.become_shareholders'),
        //   path: '/shareholders'
        // }
      ]
      return nav
    }
  }
}
</script>

<style lang="scss" scoped>
$text-color: #2b454e;
.nav {
  &__item {
    font-size: 0.8rem;
    padding: 0 0.7em;
    text-decoration: none;
    color: $text-color;
    transition: 0.3s;
    cursor: pointer;

    &--active {
      color: $base-color;
    }

    &:hover {
      color: $base-color;
    }
  }
}
</style>