<template>
  <div>
    <nav class="nav">
      <nuxt-link to="/">Опросы</nuxt-link>
      <nuxt-link to="/">Результаты</nuxt-link>
      <nuxt-link to="/">Новости</nuxt-link>
      <nuxt-link to="/">Конкурсы и розыгрыши</nuxt-link>
      <nuxt-link to="/">Рейтинг</nuxt-link>
      <nuxt-link to="/">Стать акционером</nuxt-link>
    </nav>
  </div>
</template>

<script>
import locale from "@/locale"
export default {
  data() {
    return {
      locale: locale
    }
  }
}
</script>

<style lang="scss" scoped>
</style>