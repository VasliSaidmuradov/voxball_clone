<template>
  <div class="Account">
    <nuxt-link class="Account__link" to="/">
      <img class="Account__img" src="~/assets/img/human.png" alt="Log in" />
      <p>Войти</p>
    </nuxt-link>
    <nuxt-link class="Account__link" to="/">
      <img class="Account__img" src="~/assets/img/edit.png" alt="Sing up" />
      Регистрация
    </nuxt-link>
    <!-- <button class="button secondary">Войти</button> -->
    <!-- <button class="button secondary">Регистрация</button> -->
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
$text-color: #000;

.Account {
  display: flex;
  align-items: center;

  &__link {
    display: flex;
    align-items: center;
    font-size: 1em;
    padding: 0 10px;
    text-decoration: none;
    color: $text-color;
  }
  &__img {
    margin-right: 8px;
  }
}
</style>