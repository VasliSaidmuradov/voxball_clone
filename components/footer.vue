<template>
  <div class="Footer">
    <locale border />
    <nav-bar />
    <div class="additional"></div>
    <div class="contacts"></div>
    <div class="apps"></div>
    <div class="payment-method"></div>
    <div class="developed">Разработано МЭЙНТ</div>
  </div>
</template>

<script>
import navBar from "@/components/navbar.vue"
import locale from "@/components/locale.vue"

export default {
  components: {
    navBar,
    locale
  }
}
</script>

<style lang="scss" scoped>
</style>