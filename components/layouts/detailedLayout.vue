<template>
  <div class="detailed">
    <div class="detailed-main">
      <div class="detailed-main__left">
        <h1 class="detailed-main__title">{{ title }}</h1>
        <p class="detailed-main__text">{{ text }}</p>
        <slot name="action"></slot>
      </div>
      <div class="detailed-main__right">
        <img class="detailed-main__img" src="~assets/img/registration.png" />
      </div>
    </div>
    <div class="detailed__button">
      <v-btn @click="$router.go(-1)" class="detailed__link">назад</v-btn>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    text: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.detailed {
  width: 100%;

  &-main {
    display: flex;
    justify-content: space-between;
    height: 8.5rem;
    box-shadow: 0px 6px 5px 0px rgba(0, 0, 0, 0.2);

    &__left {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      padding-left: 2rem;
    }

    &__title {
      text-transform: uppercase;
      font-size: 1.5rem;
      font-family: 'Times New Roman PSMT';
      font-weight: 600;
      color: $base-text-color;
      margin: 0;
    }

    &__text {
      font-size: 1rem;
      line-height: 1.5rem;
      padding: 0;
      margin: 0;
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

  &__link {
    text-decoration: none;
    color: #fff;
    margin-left: 1em;
    &:hover {
      color: #fff;
    }
    &:before {
      content: '<';
      vertical-align: middle;
      display: inline-block;
      margin-right: 0.5em;
    }
  }
}
</style>