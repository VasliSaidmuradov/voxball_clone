<template>
  <div class="type">
    <detailed-layout :title="'Регистрация'">
      <v-form-layout class="mt-5 mb-5">
        <label class="type__label">Выберите тип аккаунта</label>
        <v-select
          class="type__select"
          :options="accountType"
          :searchable="false"
          :multiple="false"
          :required="true"
          :placeholder="'ПЕРСОНАЛЬНЫЙ'"
          :value="accountType[GET_REGISTRATION_DATA['type']]"
          @input="set_registration($event)"
        ></v-select>
        <div class="type__buttons">
          <v-btn @click="$navigate('/login/login')" class="type__link-wrap left-link" link>
            войти
            <span>
              <icon-arrow class="arrow" />
            </span>
          </v-btn>
          <v-btn @click="nextStep" class="type__link-wrap" border>
            далее
            <span>
              <icon-arrow class="arrow" />
            </span>
          </v-btn>
        </div>
      </v-form-layout>
    </detailed-layout>
  </div>
</template>

<script>
import detailedLayout from '@/components/layouts/detailedLayout.vue'
import vFormLayout from '@/components/forms/vFormLayout.vue'
import iconArrow from '@/components/icons/iconArrow.vue'

import vSelect from 'vue-select'
import '@/assets/css/vSelect.scss'

import { mapMutations, mapGetters } from 'vuex'

export default {
  components: {
    detailedLayout,
    vFormLayout,
    vSelect,
    iconArrow
  },
  data() {
    return {
      accountType: [
        { label: 'Персональный', value: false },
        { label: 'Корпоративный', value: true }
      ]
    }
  },
  computed: {
    ...mapGetters({ GET_REGISTRATION_DATA: 'auth/GET_REGISTRATION_DATA' })
  },
  methods: {
    ...mapMutations({ SET_REGISTRATION_DATA: 'auth/SET_REGISTRATION_DATA' }),
    nextStep() {
      this.$navigate('/registration/registrationmode')
    },
    set_registration(event) {
      try {
        this.SET_REGISTRATION_DATA({ field: 'type', value: event.value })
      } catch (error) {
        console.log('set_registration: ', error)
      }
    }
  },
  mounted() {
    this.SET_REGISTRATION_DATA({
      field: 'type',
      value: this.accountType[0].value
    })
  }
}
</script>

<style lang="scss" scoped>
.type {
  background-image: url('~assets/img/registration__bg.png');
  background-size: 100%;
  background-repeat: no-repeat;
  min-height: 40rem;

  &__select {
    margin-top: 0.5rem;
  }

  &__buttons {
    display: flex;
    justify-content: space-between;
    margin-top: 1.5rem;
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
  &:hover {
    background: none;
    color: $secondary-text-color;
  }
}
.arrow {
  width: 1.3em;
  margin-left: 0.5rem;
}
</style>
<style>
.type .v-select {
  width: 100%;
}
.type .v-select .vs__dropdown-toggle {
  border-color: #2b454e;
  height: 3rem;
}
.type .v-select .vs__open-indicator {
  fill: #007b00;
}
.type .v-select .vs__selected {
  margin: 0;
  margin-top: 0.5rem;
}
.type .v-select .vs__search {
  line-height: 2;
  font-size: 0.8em;
}
.type .v-select .vs__search[placeholder] {
  margin: 0;
  margin-top: 0.1rem;
  letter-spacing: -1px;
  padding-top: 0.4rem;
  font-size: 1rem;
  font-family: HelveticaNeue-Roman;
}
.type .vs__clear {
  margin-right: 1.5rem;
}
.type .vs__open-indicator {
  outline: 0.5rem;
}
</style>
