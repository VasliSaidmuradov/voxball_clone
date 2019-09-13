<template>
  <div class="base-layout">
    <div class="base-layout__left">
      <div class="base-layout__header">
        <h1 class="base-layout__title">
          {{ title }}
        </h1>
        <p class="base-layout__text">
          {{ text }}
        </p>
      </div>
      <div class="base-layout__footer">
      </div>
    </div>
    <div class="base-layout__right">
      <div class="base-layout__rigth-wrapper">
        <img class="base-layout__image" src="~assets/img/base__image.png" alt="">
      </div>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: ['title','text']
}
</script>

<style lang="scss" scoped>
.base-layout {
  position: relative;

  &__left {
    width: 80%;
    margin: 0;
    height: 16rem;
  }

  &__header {
    background-image: url('~assets/img/main-page-slider__bg-top.png');
    background-repeat: no-repeat;
    background-size: 100%;
    width: 60%;
    height: 70.5%;
    box-sizing: border-box;
    padding: 2% 2%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  &__title {
    font-size: 1.6rem;
    font-family: 'times new roman psmt';
    text-transform: uppercase;
    width: 80%;
    padding: 0;
    margin: 0;
  }

  &__text {
    font-size: 1.2rem;
    line-height: 1.5rem;
    padding: 0;
    margin: 0;
    width: 80%;
  }

  &__footer {
    background-image: url('~assets/img/base__bg_bottom.png');
    background-repeat: no-repeat;
    background-size: 110% 100%;
    width: 100%;
    padding: 3% 5%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  &__right {
    width: 60%;
    background: #ffffff;
    position: absolute;
    top: 0;
    right: 0;
    z-index: 2;
    height: 16rem;
    clip-path: polygon(0% 75%, 10% 0%, 100% 0%, 100% 100%);
    &:after {
      content: '';
      clip-path: polygon(0 100% ,0% 44%, 100% 0%, 100% 100%);
      width: 100%;
      height: 45%;
      position: absolute;
      bottom: 0;
      right: 0;  
      background-color: green;
      opacity: 0.7;
    }
  }

  &__rigth-wrapper {
    width: 100%;
    height: 100%;
  }

  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>