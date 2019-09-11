<template>
  <div class="detailed">
    <div class="detailed-main">
      <div class="detailed-main__left">
        <h1 class="detailed-main__title">
          {{ title }}
          <!-- Регистарция -->
        </h1>
      </div>
      <div class="detailed-main__right">
        <img class="detailed-main__img" src="~assets/img/registration.png">
      </div>
    </div>
    <div class="detailed__button">
      <v-btn class="detailed__link-wrap">
        <nuxt-link class="detailed__link" to="/">
          назад
        </nuxt-link>
      </v-btn>  
    </div>
  </div>
</template>

<script>
export default {
  props: ['title']
}
</script>

<style lang="scss" scoped>
.detailed {
  width: 100%;
  
  &-main {
    display: flex;
    justify-content: space-between;
    height: 8.5rem;
    box-shadow: 1px 1px 6px 1px rgba(0, 0, 0, 0.2);
    
    &__left {
      display: flex;
      align-items: center;
      padding-left: 2rem;
    }
    
    &__title {
      text-transform: uppercase;
      font-size: 2rem;
      font-family: "Times New Roman PSMT";
      color: $base-text-color;
    }

    &__right {
      width: 60%;
      clip-path: polygon(0% 100%, 10% 0%, 100% 0%, 100% 100%);
    }

    &__img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__button {
    height: 2.5rem;
    width: 30%;
    display: flex;
    align-items: center;
    background-color: $base-text-color;
    position: relative;

    &:after {
      content: '';
      display: inline-block;
      width: 1.5rem;
      height: 100%;
      position: absolute;
      top: 0;
      right: -2.5rem;
      background-color: $base-text-color;
    }
  }
  
  &__link-wrap {
    padding-left: 2rem;
    color: white;
  }

  &__link {
    text-decoration: none;
    color: white;
    &:before {
      content: '<';
      vertical-align: middle;
      display: inline-block;
    }
  }
}
</style>