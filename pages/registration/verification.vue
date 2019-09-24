<template>
  <div class="verification">
    <detailed-layout :title="'Регистрация'">
      <v-form-layout class="mt-5 mb-5">
        <label class="verification__label">Введите код подтверждения</label>
        <input
          class="verification__input"
          type="text"
          v-mask="'### ###'"
          v-model="verificationCode"
        />
        <div class="verification__buttons">
          <v-btn class="left-link" link>
            <span>
              <icon-arrow class="arrow" style="transform: rotate(180deg);" />
              <!-- Пока просто перевернул иконку -->
            </span>
            <span class="ml-2">назад</span>
          </v-btn>
          <v-btn
            @click="$navigate('/registration/personalization')"
            class="verification__link-wrap"
            border
          >
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
// v-mask
import VueMask from 'v-mask'
Vue.use(VueMask)
import { VueMaskDirective } from 'v-mask'
Vue.directive('mask', VueMaskDirective)

export default {
  components: {
    iconArrow,
    iconArrowleft,
    detailedLayout,
    vFormLayout,
    registrationSocial
  },
  data() {
    return {
      verificationCode: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.verification {
  background-image: url('~assets/img/registration__bg.png');
  background-size: 100%;
  background-repeat: no-repeat;
  min-height: 40rem;

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
</style>