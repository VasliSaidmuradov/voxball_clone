<template>
  <Slide class="Slide">
    <div class="Slide-top">
      <img class="Slide-top__image" src="~assets/img/slider-photo-2.png" />
    </div>
    <div class="Slide-bottom">
      <p class="Slide-bottom__title">Участвуй в опросе</p>
      <p class="Slide-bottom__text">
        или создай свои опросы пройдя регистрацию.
        <br />И зарабатывай коины. Нам важен твой голос.
      </p>
      <div class="d-flex justify-content-end">
        <v-btn class="Slide__link" link>
          <nuxt-link to="/">
            <span>подробнее</span>
            <icon-base icon-name="arrow">
              <icon-arrow />
            </icon-base>
          </nuxt-link>
        </v-btn>
      </div>
    </div>
    <div class="Slide__green"></div>
  </Slide>
</template>

<script>
import iconArrow from '@/components/icons/iconArrow.vue'
if (process.browser) {
  var { Slide } = require('vue-carousel')
}
export default {
  components: {
    iconArrow,
    Slide
  }
}
</script>

<style lang="scss" scoped>
.Slide {
  height: 21rem;
  clip-path: polygon(0% 57%, 10% 0%, 100% 0%, 100% 100%);
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  &-top {
    height: 100%;
    width: 100%;
    clip-path: polygon(0% 60%, 10% 0%, 100% 0%, 100% 100%);

    &__image {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__link {
    font-size: 0.8rem;
    color: #fff;
    padding: 0;
    text-transform: uppercase;

    &:hover {
      color: inherit;
    }
  }

  &-bottom {
    height: 47%;
    width: 40%;
    font-size: 1.3rem;
    position: absolute;
    bottom: 0;
    right: 15%;
    opacity: 1;
    color: white;
    display: flex;
    flex-direction: column;
    z-index: 8;

    &__title {
      text-transform: uppercase;
      margin: 0;
      margin-bottom: 0.5rem;
      font-weight: 700;
    }
    &__text {
      font-size: 0.9rem;
      margin: 0;
      font-weight: 600;
    }
  }
}

.Slide__green {
  background: $base-color;
  position: absolute;
  bottom: 0;
  right: 0;
  height: 60%;
  width: 100%;
  clip-path: polygon(0% 29%, 100% 0%, 100% 100%);
  opacity: 0.7;
  z-index: 2;
}
</style>