<template>
  <div class="Poll-Card">
    <div class="Poll-Card__main">
      <div>
        <img class="Poll-Card__img" src="~/assets/img/test-bg.jpg" alt />
      </div>
      <div class="Poll-Card__block">
        <div class="Poll-Card__content">
          <nuxt-link to="/" class="Poll-Card__content-item">Бизнес</nuxt-link>
          <nuxt-link to="/" class="Poll-Card__content-item Poll-Card__content-item--video">Видео</nuxt-link>
        </div>
        <div class="Poll-Card__title">хотите ли выполететь в космос?</div>
        <nuxt-link to="/" class="Poll-Card__link">Подробнее</nuxt-link>
        <div class="Poll-Card__play-block">
          <div class="Poll-Card__play"></div>
        </div>
      </div>
    </div>
    <div class="Poll-Card__footer">
      <div class="Poll-Card__date">19.19.2019</div>
      <div class="Poll-Card__poll">
        <img src="~/assets/img/gramophone.png" alt />
        <div class="Poll-Card__counter">345</div>
      </div>
    </div>
    <div class="Poll-Card__green-container"></div>
  </div>
</template>

<script>
export default {
  props: {
    data: Object
  },
  created() {}
}
</script>

<style lang="scss" scoped>
.Poll-Card {
  &__main {
    position: relative;
    display: block;
    max-height: 330px;
    height: 100vh;
    overflow: hidden;
    background: #000;
    text-transform: uppercase;
  }

  &:hover &__img {
    opacity: 0.5;
  }
  &:hover &__play-block {
    width: 6vw;
    height: 6vw;
  }
  &:hover &__link {
    color: $base-color;
  }
  &:hover &__green-container::after {
    top: -30px;
  }

  &__play {
    position: absolute;
    width: 3vw;
    height: 3vw;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    background: $base-color;
    &::after {
      content: '▶︎';
      font-size: 1.5em;
      display: flex;
      align-items: center;
      width: 3vw;
      height: 3vw;
      justify-content: center;
      color: white;
      border-left: 0.4vw solid transparent;
    }
  }

  &__play-block {
    position: absolute;
    width: 4.5vw;
    height: 4.5vw;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    background: #00b90087;
    transition: 1s ease;
  }

  &__title {
    padding: 1em;
    font-size: 1.2em;
    color: white;
  }

  &__block {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    box-shadow: inset 0 0 1000px 1000px #2536506e;
  }

  &__content {
    padding: 1em;
    height: auto;
    min-height: 32px;
    font-size: 1em;
    line-height: 21px;
  }

  &__content-item {
    display: inline-block;
    padding: 0.1em 1.3em;
    background: $base-color;
    color: white;
    text-decoration: none;

    &--video {
      color: black;
      background: white;
    }
  }

  &__link {
    position: absolute;
    right: 35px;
    bottom: 10px;
    padding: 0.2em 1em;
    color: white;

    &::after {
      content: '⟶';
      top: 50%;
      margin-left: 10px;
      border: none;
      position: absolute;
      transform: translateY(-50%);
    }
  }

  &__footer {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 5;
    padding: 0.5em 1em;
    box-shadow: 1px 1px 6px 1px rgba(0, 0, 0, 0.2);
    background: white;
  }

  &__poll {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__counter {
    margin-left: 10px;
    color: gray;
  }

  &__green-container {
    position: relative;
    padding: 0 1em;

    &::after {
      content: '';
      position: relative;
      display: block;
      top: 0;

      width: 100%;
      height: 20px;
      background: $base-color;
      transition: 1s linear;
    }
  }
}
</style>