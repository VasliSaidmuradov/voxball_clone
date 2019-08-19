<template>
  <div class="Header">
    <div class="container Header__wrapper">
      <div class="d-flex align-items-center">
        <nuxt-link to="/">
          <img class="Header__logo" src="~/assets/img/logo.png" alt />
        </nuxt-link>
        <div class="Header__nav">
          <nav-bar />
        </div>
        <div class="Header__search">
          <search />
        </div>
        <div class="add-poll Header__add-poll">
          <v-btn rounded min-width="5.3em" @click="addPoll()">+ Опрос</v-btn>
        </div>
        <locale></locale>
      </div>
      <div class="d-flex align-items-center">
        <account />
      </div>
    </div>
  </div>
</template>

<script>
import navBar from '@/components/shared/navbar.vue'
import search from '@/components/inputs/search.vue'
import locale from '@/components/inputs/locale.vue'
import account from '@/components/account.vue'

export default {
  components: {
    navBar,
    search,
    locale,
    account
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
  box-shadow: 1px 1px 6px 1px rgba(0, 0, 0, 0.2);

  &__wrapper {
    display: flex;
    justify-content: space-between;
  }

  &__nav {
    margin-left: 1em;
  }

  &__search {
    width: 11em;
  }

  &__logo {
    width: 6em;
  }

  &__add-poll {
    margin: 0 10px;
  }
}
</style>