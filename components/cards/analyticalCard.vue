<template>
  <div class="analytical-card">
    <div
      class="analytical-card-wrapper"
      :class="[column ? 'analytical-card-wrapper--column' : 'analytical-card-wrapper--row']"
    >
      <div class="analytical-card__main">
        <div class="analytical-card__info">
          <div class="analytical-card__info-date">12.12.12</div>
          <div class="analytical-card__info-view">
            <!-- <img src="" alt=""> -->
            <span class="analytical-card__info-counter">324</span>
          </div>
        </div>
        <h2 class="analytical-card__title">Почему блокируют за спойлеры?</h2>
        <p
          class="analytical-card__text"
        >Большинство людей не просто не любят спойлеры – они их боятся. Это связано в первую очередь с тем, что человек хочет почувствовать wow-эффект при первом просмотре фильма или сериала.</p>
        <nuxt-link class="analytical-card__link" to="/">Подробнее</nuxt-link>
      </div>
      <div
        class="analytical-card__img-container"
        :class="{'analytical-card__img-container--column':column}"
      >
        <div class="analytical-card__img-circles">
          <div class="analytical-card__row">
            <span class="analytical-card__img-circle"></span>
            <span class="analytical-card__img-circle"></span>
            <span class="analytical-card__img-circle"></span>
          </div>

          <div class="analytical-card__row">
            <span class="analytical-card__img-circle"></span>
            <span class="analytical-card__img-circle"></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import vBtn from '@/components/buttons/vBtn.vue'

export default {
  components: {
    vBtn
  },
  props: {
    column: {
      type: Boolean,
      default: false
    }
  },
  created() {}
}
</script>

<style lang="scss" scoped>
$text-color: #2b454e;
$light: #00b900;

.analytical-card {
  &__main {
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 1em;
    box-shadow: 1px 1px 6px 1px rgba(0, 0, 0, 0.2);
  }

  &:hover .analytical-card-wrapper--column::after {
    bottom: 0px;
  }

  &:hover .analytical-card-wrapper--row::after {
    left: 0px;
  }

  &:hover &__info-date,
  &:hover &__title::after {
    background: $light;
  }
  &:hover &__link {
    color: $light;
  }

  &__info {
    display: flex;
    align-items: center;
    font-size: 0.8em;
  }

  &__info-date {
    padding: 0.2em 1em;
    color: white;
    background: darkgreen;
  }

  &__title {
    font-size: 1.2em;
    position: relative;

    &::after {
      content: '';
      position: absolute;
      width: 30%;
      height: 2px;
      background: green;
      bottom: -0.5em;
      left: 0px;
    }
  }
  &__text {
    font-size: 0.8em;
  }

  &__link {
    position: relative;
    color: $text-color;

    &::after {
      content: '⟶';
      top: 50%;
      margin-left: 10px;
      border: none;
      position: absolute;
      transform: translateY(-50%);
    }
  }

  &__img-container {
    position: relative;
    z-index: 1;
    background: url(~assets/img/test-bg.jpg) center;
    background-size: cover;
    min-width: 40%;

    &--column {
      height: 250px;
      width: 100%;
    }
  }

  &__img-circles {
    position: absolute;
    top: 0;
    right: 0;
  }

  &__img-circle {
    display: block;
    width: 15px;
    height: 15px;
    background: #e0ddddcf;
    border-radius: 50%;
    margin: 5px;
  }

  &__row {
    display: flex;
    flex-direction: row-reverse;
  }
}

.analytical-card-wrapper {
  display: flex;
  justify-content: space-between;
  position: relative;
  // padding: 0 1em;
  background: white;

  &--column {
    flex-direction: column-reverse;
    &::after {
      content: '';
      position: absolute;
      display: block;
      bottom: -17px;
      width: 90%;
      z-index: -1;
      left: 50%;
      height: 20px;
      background: #00b900;
      transition: 0.5s linear;
      transform: translateX(-50%);
    }
  }
  &--row {
    &::after {
      content: '';
      position: absolute;
      display: block;
      top: 50%;
      width: 20px;
      z-index: -1;
      left: -17px;
      height: 84%;
      background: #00b900;
      transition: 0.5s linear;
      transform: translateY(-50%);
    }
  }
}
</style>