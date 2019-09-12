<template>
  <div class="poll-item">
    <div class="poll-item__main">
      <div>
        <img class="poll-item__img" src="~/assets/img/test-bg.jpg" alt />
      </div>
      <div class="poll-item__block">
        <div class="poll-item__content">
          <nuxt-link to="/" class="poll-item__content-item">
            <!-- Бизнес -->
            {{ pollData.category }}
          </nuxt-link>
          <nuxt-link to="/" class="poll-item__content-item poll-item__content-item--video">
            <!-- Видео -->
            {{ pollData.video }}
          </nuxt-link>
        </div>
        <div class="poll-item__title">
          <!-- хотите ли выполететь в космос? -->
          {{ pollData.title }}
        </div>
        <div v-if="pollData.complete" class="poll-item__complete">
          <span class="poll-item__icon-complete mr-2">
            <icon-complete />
          </span>
          <span>Завершен</span>
        </div>
        <nuxt-link to="/" class="poll-item__link">Подробнее</nuxt-link>
        <div class="poll-item__play-block">
          <div class="poll-item__play"></div>
        </div>
      </div>
    </div>
    <div class="poll-item__footer">
      <div class="poll-item__date">
        <!-- 19.19.2019 -->
        {{ pollData.date }}
      </div>
      <div class="views">
        <span class="poll-item__icon-eyes mr-1">
          <icon-eyes />
        </span>

        <div class="views__count">
          <!-- 345 -->
          {{ pollData.views }}
        </div>
      </div>
    </div>
    <div class="poll-item__move-out"></div>
  </div>
</template>

<script>
import iconEyes from '@/components/icons/iconEyes.vue'
import iconComplete from '@/components/icons/iconComplete.vue'

export default {
  components: {
    iconEyes,
    iconComplete
  },
  props: ['data', 'pollData'],
  created() {}
}
</script>

<style lang="scss" scoped>
.poll-item {
  &__main {
    cursor: pointer;
    position: relative;
    display: block;
    max-width: 225px;
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

  &__complete {
    position: absolute;
    font-size: 0.8rem;
    text-transform: capitalize;
    left: 1em;
    bottom: 10px;
    padding: 0.6em 0.6em 0.1em;
    color: white;
    background: #009700;
    display: flex;
    align-items: center;
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
    padding: 0.4em 1.3em 0.1em;
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
    font-size: 0.8rem;
    right: 23px;
    bottom: 10px;
    padding: 0.1em 0.5em;
    color: white;

    &::after {
      content: '⟶';
      top: 50%;
      margin-left: 6px;
      border: none;
      position: absolute;
      transform: translateY(-60%);
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

  &__icon-complete {
    width: 0.6rem;
  }
  &__icon-eyes {
    width: 0.9rem;
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