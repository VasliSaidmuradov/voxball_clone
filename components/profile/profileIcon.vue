<template>
  <div class="account">
    <div v-if="auth" class="account-log">
      <div class="account-log__coin">
        <img class="account-log__coin-img" src="~/assets/img/poll-card__coin.png" alt />
        100
      </div>
      <v-btn class @click="profile()">
        <img src="~/assets/img/avatar__icon.png" alt />
        <span class="account-log__button-name">Личный кабинет</span>
      </v-btn>
      <div style="cursor: pointer" @click="$navigate('/notification')">
        <icon-mail class="account-log__notification-img" />
      </div>
    </div>
    <v-btn v-else @click="login">
      <img class="account__img" src="~/assets/img/human.png" alt="Log in" />
      <span>Войти</span>
    </v-btn>
    <!-- <v-btn>
      <img class="account__img" src="~/assets/img/edit.png" alt="Sing up" />
      <span>Регистрация</span>
    </v-btn>-->
  </div>
</template>
    
<script>
import iconMail from '@/components/icons/iconMail.vue'

export default {
  components: {
    iconMail
  },
  props: {
    auth: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    login() {
      this.$navigate('/registration/accountType')
    },
    profile() {
      this.$navigate('/profile')
    }
  }
}
</script>

<style lang="scss" scoped>
$text-color: #000;

.account {
  display: flex;
  align-items: center;

  &__link {
    display: flex;
    align-items: center;
    padding: 0 10px;
    text-decoration: none;
    color: inherit;
  }
  &__img {
    margin-right: 8px;
  }
  &-log {
    display: flex;
    align-items: center;
    &__coin {
      display: flex;
      align-items: center;
    }
    &__coin-img {
      width: 1.5rem;
    }
    &__button-name {
      display: inline-block;
      width: 3rem;
      font-size: 0.8rem;

      &:hover {
        color: $secondary-text-color;
      }
    }
    &__notification-img {
      width: 1.5rem;
      margin: -0.2rem 0;
      color: $third-text-color;
    }
  }
}
</style>