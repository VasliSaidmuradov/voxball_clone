<template>
  <div class="Header container">
    <div class="Header__wrapper">
      <nuxt-link to="/">
        <img src="~/assets/img/logo.png" alt />
      </nuxt-link>
      <nav-bar />
      <search />
      <div class="add-poll">
        <v-btn @click="addPoll()" disabled link>+ Опрос</v-btn>
      </div>
      <locale></locale>
    </div>
    <div class="Header__wrapper">
      <account />
    </div>
  </div>
</template>

<script>
import navBar from "@/components/navbar.vue"
import search from "@/components/inputs/search.vue"
import locale from "@/components/locale.vue"
import account from "@/components/account.vue"
import vBtn from "@/components/buttons/vBtn.vue"

export default {
  components: {
    navBar,
    search,
    locale,
    account,
    vBtn
  },
  methods: {
    addPoll() {
      alert()
    }
  }
}
</script>

<style lang="scss" scoped>
.Header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  border-bottom: 2px solid gray;

  &__wrapper {
    display: flex;
    align-items: center;
  }
}
.container {
  margin: 0 auto;
  max-width: 1300px;
  width: 100%;
  box-sizing: border-box;
}
</style>