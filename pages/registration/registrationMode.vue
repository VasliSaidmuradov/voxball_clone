<template>
  <div class="mode">
    <detailed-layout :title="'Регистрация'">
      <v-form-layout class="mt-5 mb-5">
        <div class="mode__toggle">
          <a
            class="mode__type"
            :class="{ isActive : registrationMode }"
            @click="registrationMode = true"
          >Регистрация через номер</a>
          <a
            class="mode__type"
            :class="{ isActive : !registrationMode }"
            @click="registrationMode = false"
          >Регистрация через e-mail</a>
        </div>
        <div v-if="registrationMode">
          <v-select
            class="mode__select"
            :options="options"
            :searchable="true"
            :no-drop="false"
            :multiple="false"
            placeholder="Выберите страну"
            v-model="country"
            @input="setSelected"
          ></v-select>
          <input
            class="mode__input mode__tel"
            type="tel"
            v-mask="'+7(###) ### ## ##'"
            v-model="phone"
            placeholder="+7(___) ___ __ __"
            @change="addState('phone', phone)"
          />
        </div>
        <div v-if="registrationMode == false">
          <label class="mode__label">Адрес электронной почты</label>
          <input
            class="mode__input mode__email"
            type="text"
            v-model="email"
            @change="addState('email', email)"
          />
          <label class="mode__label">Создать пароль</label>
          <input
            class="mode__input mode__password"
            type="text"
            v-model="password"
            @change="addState('password', password)"
          />
          <label class="mode__label">Повторить пароль</label>
          <input
            class="mode__input mode__password"
            type="text"
            v-model="passwordCheck"
            @change="addState('passwordCheck', passwordCheck)"
          />
        </div>
        <div class="mode__buttons">
          <v-btn class="mode__link-wrap left-link" @click="$router.go(-1)" link>
            <span>
              <icon-arrow class="arrow" style="transform: rotate(180deg);" />
            </span>
            <span class="ml-2">назад</span>
          </v-btn>
          <v-btn class="mode__link-wrap" @click="$navigate('/registration/verification')" border>
            <span>далее</span>
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
import Vue from 'vue'
import iconArrow from '@/components/icons/iconArrow.vue'
import iconArrowleft from '@/components/icons/iconArrowleft.vue'
import detailedLayout from '@/components/layouts/detailedLayout.vue'
import vFormLayout from '@/components/forms/vFormLayout.vue'
import registrationSocial from '@/components/registration/registrationSocial.vue'
// v-select
import vSelect from 'vue-select'
import '@/assets/css/vSelect.scss'
// v-mask
import VueMask from 'v-mask'
Vue.use(VueMask)
import { VueMaskDirective } from 'v-mask'
Vue.directive('mask', VueMaskDirective)
import { mapMutations } from 'vuex'

export default {
  components: {
    iconArrow,
    iconArrowleft,
    vSelect,
    detailedLayout,
    vFormLayout,
    registrationSocial
  },
  data() {
    return {
      options: ['Казахстан', 'Россия', 'Китай'],
      registrationMode: true,
      phone: '',
      country: '',
      email: '',
      password: '',
      passwordCheck: ''
    }
  },
  methods: {
    setSelected() {
      let state = {
        field: 'country',
        value: this.country
      }
      this.mutateState(state)
    },
    addState(field, value) {
      if (field === 'phone') {
        value = value
          .trim()
          .split('')
          .map(x => (x == ' ' || x == '(' || x == ')' ? '' : x))
          .join('')
      }
      let state = {
        field: field,
        value: value
      }
      this.mutateState(state)
    },
    ...mapMutations({
      mutateState: 'auth/SET_REGISTRATION_DATA'
    })
  }
}
</script>

<style lang="scss" scoped>
.mode {
  background-image: url('~assets/img/registration__bg.png');
  background-size: 100%;
  background-repeat: no-repeat;
  min-height: 40rem;

  &__toggle {
    display: flex;
    justify-content: space-between;
    margin-bottom: 2rem;
  }

  &__type {
    appearance: none;
    color: $base-text-color;
    font-size: 0.75em;
    text-decoration: underline;
    cursor: pointer;
    &:hover {
      color: $secondary-text-color;
    }
  }

  &__input {
    appearance: none;
    display: flex;
    background: none;
    border: 1px solid $base-text-color;
    border-radius: 37px;
    white-space: normal;
    line-height: 2;
    font-size: 1em;
    outline: none;
    margin: 4px 0 0;
    margin-top: 0.5rem;
    padding: 0.4rem 0;
    padding-left: 1.5rem;
    width: 100%;
    color: $base-text-color;
    font-style: normal;
  }

  &__tel {
  }

  &__email {
    margin-top: 0.2rem;
    margin-bottom: 0.6rem;
  }

  &__password {
    margin-top: 0.2rem;
    margin-bottom: 0.6rem;
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
  width: 1.2rem;
  margin-left: 0.5rem;
}
.isActive {
  color: $secondary-text-color;
}
</style>

<style>
/* for v-select */
.mode .v-select {
  width: 100%;
}
.mode .v-select .vs__dropdown-toggle {
  border-color: #2b454e;
}
.mode .v-select .vs__open-indicator {
  fill: #007b00;
}
.mode .v-select .vs__search {
  line-height: 2;
  font-size: 0.8em;
}
.mode .v-select .vs__search[placeholder] {
  opacity: 0.5;
  font-style: italic;
}
</style>