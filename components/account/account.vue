<template>
  <div class="Account">
    <v-btn @click="login">
      <img class="Account__img" src="~/assets/img/human.png" alt="Log in" />
      <span>Войти</span>
    </v-btn>
    <!-- <v-btn>
      <img class="Account__img" src="~/assets/img/edit.png" alt="Sing up" />
      <span>Регистрация</span>
    </v-btn>-->
  </div>
</template>
    
<script>
export default {
  methods: {
    login() {
      this.$navigate('registration/accountType')
    }
  }
}
</script>

<style lang="scss" scoped>
$text-color: #000;

.Account {
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
}
</style>