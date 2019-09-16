<template>
  <div class="login" :title="'Вход'">
    <detailed-layout>
      <v-form-layout class="mt-5 mb-5">
        <label class="login__label">Введите номер или e-mail</label>
        <input class="login__input login__email" type="email" v-loginl="'email'" />
        <label class="login__label">Пароль</label>
        <input class="login__input login__password" type="text" v-loginl="'password'" />
        <div class="login__buttons">
          <v-btn @click="$navigate('/registration/accountType')" class="left-link">
            зарегестрироваться
            <span>
              <icon-arrow class="arrow" />
            </span>
          </v-btn>

          <v-btn @click="$navigate('/registration/verification')" class="login__link-wrap" border>
            войти
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
import detailedLayout from '@/components/layouts/detailedLayout.vue'
import vFormLayout from '@/components/forms/vFormLayout.vue'
import registrationSocial from '@/components/registration/registrationSocial.vue'

export default {
  components: {
    iconArrow,
    detailedLayout,
    vFormLayout,
    registrationSocial
  }
}
</script>

<style lang="scss" scoped>
.login {
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
    padding: 0 1rem;
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
    margin-bottom: 2rem;
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
  width: 1.3em;
  margin-left: 0.5rem;
}
.isActive {
  color: $secondary-text-color;
}
</style>