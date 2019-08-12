<template>
  <div class="Header">
    <div class="Header__logo">Voxball</div>
    <nav-bar />
    <search />
    <div class="add-poll">
      <button class="button primary add-poll__button">+ Опрос</button>
    </div>
    <locale></locale>
    <account />
  </div>
</template>

<script>
import navBar from "@/components/navbar.vue"
import search from "@/components/search.vue"
import locale from "@/components/locale.vue"
import account from "@/components/account.vue"

export default {
  components: {
    navBar,
    search,
    locale,
    account
  }
}
</script>

<style lang="scss" scoped>
.Header {
  display: flex;
  color: $base-color;
}
</style>