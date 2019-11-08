<template>
  <div class="person">
    <detailed-layout :title="'Регистрация'">
      <v-form-layout class="mt-5 mb-5" style="width: 20rem">
        <label class="person__label">Ваше имя</label>
        <input
          class="person__input person__name"
          type="text"
          :value="GET_REGISTRATION_DATA['name']"
          @input="SET_REGISTRATION_DATA({ field: 'name', value: $event.target.value })"
        />
        <label class="person__label">Подписаться на 3 категории</label>
        <v-select
          class="person__select"
          :options="GET_CATEGORY_LIST.map(item => item.title.substr(0, 15))"
          :searchable="false"
          multiple
          :placeholder="'Еда'"
          @input="set_category($event)"
        ></v-select>
        <!-- @input="SET_REGISTRATION_DATA({field: categories, value: $event})" -->
        <div class="person__buttons">
          <v-btn class="left-link" link>
            <span>
              <icon-arrow class="arrow" style="transform: rotate(180deg);" />
            </span>
            <span class="ml-2" @click="$router.go(-1)">назад</span>
          </v-btn>
          <v-btn class="person__link-wrap" @click="registration" border>
            <span>зарегистрироваться</span>
            <span>
              <icon-arrow class="arrow" />
            </span>
          </v-btn>
        </div>
        <registration-social />
      </v-form-layout>
    </detailed-layout>
  </div>
</template>

<script>
import iconArrow from '@/components/icons/iconArrow.vue'
import detailedLayout from '@/components/layouts/detailedLayout.vue'
import vFormLayout from '@/components/forms/vFormLayout.vue'
import registrationSocial from '@/components/registration/registrationSocial.vue'

import vSelect from 'vue-select'
import '@/assets/css/vSelect.scss'

import Vue from 'vue'
import VueCookies from 'vue-cookies'
Vue.use(VueCookies)

import { mapGetters, mapActions, mapMutations } from 'vuex'

export default {
  components: {
    vSelect,
    detailedLayout,
    vFormLayout,
    registrationSocial,
    iconArrow,
    VueCookies
  },
  computed: {
    ...mapGetters({
      GET_REGISTRATION_DATA: 'auth/GET_REGISTRATION_DATA',
      GET_CATEGORY_LIST: 'polls/GET_CATEGORY_LIST'
    })
  },
  methods: {
    ...mapMutations({
      SET_REGISTRATION_DATA: 'auth/SET_REGISTRATION_DATA'
    }),
    ...mapActions({
      USER_REGISTRATION: 'auth/USER_REGISTRATION'
    }),
    async registration() {
      try {
        await this.USER_REGISTRATION()
        this.$navigate('/cabinet')
      } catch (error) {
        console.log(error)
      }
    },
    set_category(event) {
      try {
        let categories = this.GET_CATEGORY_LIST
        let data = event.map(
          item =>
            categories.find(findItem => findItem.title.substr(0, 15) === item)
              .id
        )
        this.SET_REGISTRATION_DATA({
          field: 'category',
          value: data
        })
      } catch (error) {
        console.log('set_registration: ', error)
      }
    },
    Test(e) {
      console.log(e)
    }
  },
  // async fetch({ store }) {
  //   await store.dispatch('auth/USER_REGISTRATION')
  // }
  async fetch({ store }) {
    await store.dispatch('polls/FETCH_CATEGORY')
  }
}
</script>

<style lang="scss" scoped>
.person {
  background-image: url('~assets/img/registration__bg.png');
  background-size: 100%;
  background-repeat: no-repeat;
  min-height: 40rem;

  &__input {
    appearance: none;
    display: flex;
    height: 3rem;
    background: white;
    border: 1px solid $base-text-color;
    border-radius: 37px;
    white-space: normal;
    line-height: 2;
    font-size: 1em;
    outline: none;
    margin-bottom: 1rem;
    padding: 0.4rem 0;
    padding-left: 1.5rem;
    width: 100%;
    color: $base-text-color;
    font-style: normal;
  }

  &__label {
    display: block;
    margin-bottom: 0.5rem;
  }

  &__select {
    margin-bottom: 0.5rem;
  }

  &__buttons {
    display: flex;
    justify-content: space-between;
    padding: 1.5rem 0 2rem;
  }

  &__link-wrap {
    color: $base-text-color;
    border-color: $base-text-color;
    &:hover {
      color: white;
      background-color: $secondary-text-color;
      border-color: $secondary-text-color;
    }
  }

  &__link {
    color: inherit;
    text-decoration: none;
    position: relative;
  }
}

.left-link {
  text-decoration: underline;
  padding-left: 0;
  &:hover {
    background: none;
    color: $secondary-text-color;
  }
}
.arrow {
  width: 1.3rem;
  margin-left: 0.5rem;
}
</style>
<style>
.person .v-select {
  width: 100%;
}
.person .v-select .vs__dropdown-toggle {
  border-color: #2b454e;
  min-height: 3rem;
  height: auto;
  max-height: 9rem;
}
.person .vs__selected-options {
  padding-left: 1.5rem;
}
.person .v-select .vs__selected {
  padding: 0.5rem;
  background: transparent;
}
.person .v-select .vs__open-indicator {
  fill: #007b00;
}
.person .v-select .vs__search {
  line-height: 2;
  font-size: 0.8em;
}
.person .v-select .vs__search[placeholder] {
  opacity: 0.5;
  font-style: italic;
}
.person .v-select .vs__actions {
  padding-right: 1rem;
}
</style>