<template>
  <div class="poll-item">
    <div class="poll-item__main">
      <div>
        <img class="poll-item__img" src="~/assets/img/test-bg.jpg" alt />
      </div>
      <div class="poll-item__block">
        <div class="poll-item__content">
          <nuxt-link to="/" class="poll-item__content-item">Бизнес</nuxt-link>
          <nuxt-link to="/" class="poll-item__content-item poll-item__content-item--video">Видео</nuxt-link>
        </div>
        <div class="poll-item__title">хотите ли выполететь в космос?</div>
        <nuxt-link to="/" class="poll-item__link">Подробнее</nuxt-link>
        <div class="poll-item__play-block">
          <div class="poll-item__play"></div>
        </div>
      </div>
    </div>
    <div class="poll-item__footer">
      <div class="poll-item__date">19.19.2019</div>
      <div class="views">
        <icon-base stroke-width="8px" viewBox="0 0 120 110" iconColor="none">
          <icon-eyes></icon-eyes>
        </icon-base>
        <div class="views__count">345</div>
      </div>
    </div>
    <div class="poll-item__move-out"></div>
  </div>
</template>

<script>
import iconEyes from '@/components/icons/iconEyes.vue'

export default {
  components: {
    iconEyes
  },
  props: {
    data: Object
  },
  created() {}
}
</script>

<style lang="scss" scoped>
.poll-item {
  &__main {
    cursor: pointer;
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
  &:hover &__move-out::after {
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
    transition: 0.5s ease;
  }

  &__title {
    padding: 1em;
    font-size: 1.1em;
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

  &__move-out {
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
      transition: 0.5s linear;
    }
  }
}
.views {
  display: flex;
  justify-content: space-between;
  align-items: center;
  &__count {
    color: gray;
  }
}
</style>