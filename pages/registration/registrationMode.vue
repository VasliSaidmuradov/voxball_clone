<template>
  <div class="mode">
    <div class="mode__form">
      <div class="mode__toggle">
        <a 
         class="mode__type" 
         :class="{ isActive : phone }" 
         @click="phone=!phone">
          Регистрация через номер
        </a>
        <a 
         class="mode__type" 
         :class="{ isActive : !phone }" 
         @click="phone=!phone">
          Регистрация через e-mail
        </a>
      </div>
      <div v-if="phone">
        <v-select 
          class="mode__select"
          :options="options"
          :searchable="true"
          :no-drop="false"
          :multiple="false"
          placeholder="Выберите страну"
        >
        </v-select>
        <input 
          class="mode__input mode__tel"
          type="tel" 
          v-mask="'+7(###) ### ## ##'" 
          v-model="tel" 
          placeholder="+7(___) ___ __ __"
        >
      </div>
      <div v-if="phone==false">
        <label class="mode__label">Адрес электронной почты</label>
        <input 
          class="mode__input mode__email"
          type="email" 
          v-mask="'+7(###) ### ## ##'" 
          v-model="email"
        >
        <label class="mode__label">Создать пароль</label>
        <input 
          class="mode__input mode__password"
          type="text" 
          v-mask="'+7(###) ### ## ##'" 
          v-model="password"
        >
        <label class="mode__label">Повторить пароль</label>
        <input 
          class="mode__input mode__password"
          type="text" 
          v-mask="'+7(###) ### ## ##'" 
          v-model="password" 
        >
      </div>
      <div class="mode__buttons">
        <v-btn class="mode__link-wrap">
          <nuxt-link class="mode__link" to="/">
            назад
            <!-- <icon-base icon-name="arrow" class="arrow">
              <icon-arrow />
            </icon-base> -->
          </nuxt-link>
        </v-btn>
        <v-btn class="mode__link-wrap">
          <nuxt-link class="mode__link" to="/">
            далее
            <icon-base icon-name="arrow" class="arrow">
              <icon-arrow />
            </icon-base>
          </nuxt-link>
        </v-btn>    
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import iconArrow from '@/components/icons/iconArrow.vue';
import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css';
import VueMask from 'v-mask'
Vue.use(VueMask);
import { VueMaskDirective } from 'v-mask'
Vue.directive('mask', VueMaskDirective);

export default {
  components: {
    iconArrow,
    vSelect
  },
  data() {
    return {
      options: ['Казахстан', 'Россия', 'Китай'],
      phone: true,
      tel: ''
    }
  },
}
</script>

<style lang="scss" scoped>
.mode {
  width: 25%;
  min-height: 10rem;
  margin: 0 auto;

  &__form {
    box-shadow: 1px 1px 10px 1px rgba(0, 0, 0, 0.2);
    padding: 3rem 1.5rem;
  }

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
    line-height: 2.0;
    font-size: 1em;
    outline: none;
    margin: 4px 0 0;
    margin-top: 0.5rem;
    padding: 0 7px;
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
    margin-top: 1.5rem;
  }

  &__link-wrap {
    color: $base-text-color;
    &:hover {
      color: white;
      background-color: $secondary-text-color;
    }
  }

  &__link {
    color: inherit;
    text-decoration: none;
    position: relative;
  }
}
.isActive {
  color: $secondary-text-color;
}
.arrow {
  margin-bottom: -13px;
  margin-left: 0.5rem;
  height: auto;
}
</style>
<style>
/* for v-select */
.v-select .vs__dropdown-toggle {
  border-radius: 37px;
  border-color: #2b454e;
}
.v-select .vs__open-indicator {
  fill: #007b00;
}
.v-select .vs__search[placeholder] {
  color: #2b454e;
  opacity: 0.5;
  font-style: italic;
}
</style>