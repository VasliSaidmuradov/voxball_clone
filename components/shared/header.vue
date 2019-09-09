<template>
  <div class="Header">
    <div class="container Header__wrapper">
      <div class="d-flex align-items-center">
        <nuxt-link :to="'/'+$i18n.locale">
          <img class="Header__logo" src="~/assets/img/logo.png" alt />
        </nuxt-link>
        <div class="Header__nav">
          <nav-bar />
        </div>
        <div class="Header__search">
          <search
            label="name"
            @input="myVal = $event"
            @selectItem="myVal = $event.name"
            :results="searchResults"
          />
        </div>
        <div class="add-poll Header__add-poll">
          <v-btn rounded min-width="5.3em" @click="addPoll()">+ Опрос</v-btn>
        </div>
      </div>
      <div class="d-flex align-items-center">
        <div class="add-poll Header__lang">
          <lang-switcher :langs="$i18n.locales"></lang-switcher>
        </div>
        <div class="d-flex align-items-center">
          <account />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import navBar from '@/components/shared/navbar.vue'
import search from '@/components/inputs/search.vue'
import langSwitcher from '@/components/inputs/langSwitcher.vue'
import account from '@/components/account/account.vue'
const find = (str, name) => new RegExp(str.replace(/\s/g, '|'), 'i').test(name)
export default {
  components: {
    navBar,
    search,
    langSwitcher,
    account
  },
  methods: {
    addPoll() {
      alert()
    }
  },
  data() {
    return {
      sections: [
        {
          id: 1,
          name: 'asd'
        },
        {
          id: 2,
          name: 'sasdasd'
        },
        {
          id: 3,
          name: 'gggg'
        },
        {
          id: 4,
          name: 'eeeeeeeeee'
        }
      ],
      myVal: ''
    }
  },
  computed: {
    searchResults() {
      return this.sections.filter(item => find(this.myVal, item.name))
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
    width: 10em;
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