<template>
  <div class="Header">
    <div class="container Header__wrapper">
      <div class="d-flex align-items-center">
        <nuxt-link :to="'/'+$i18n.locale">
          <img class="Header__logo" src="~/assets/img/logo.png" alt />
        </nuxt-link>
        <nav-bar class="Header__nav" />
        <search v-model="myVal" @search="search()" class="Header__search" hideResults />
        <div class="add-poll Header__add-poll">
          <v-btn rounded min-width="5.3em" @click="addPoll()">+ Опрос</v-btn>
        </div>
      </div>
      <div class="d-flex align-items-center">
        <div class="add-poll Header__lang">
          <lang-switcher :langs="$i18n.locales"></lang-switcher>
        </div>
        <div class="d-flex align-items-center">
          <profile-icon />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import navBar from '@/components/shared/navbar.vue'
import search from '@/components/inputs/search.vue'
import langSwitcher from '@/components/inputs/langSwitcher.vue'
import profileIcon from '@/components/profile/profileIcon.vue'
const find = (str, name) => new RegExp(str.replace(/\s/g, '|'), 'i').test(name)
export default {
  components: {
    navBar,
    search,
    langSwitcher,
    profileIcon
  },
  methods: {
    addPoll() {
      alert()
    },
    search() {
      if (this.myVal) {
        this.$navigate(`/search?query=${this.myVal}`)
      }
    }
  },
  data() {
    return {
      myVal: ''
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
    width: 14em;
  }

  &__logo {
    width: 6em;
  }

  &__add-poll {
    margin: 0 10px;
  }

  &__lang {
    width: 4em;
  }
}
</style>