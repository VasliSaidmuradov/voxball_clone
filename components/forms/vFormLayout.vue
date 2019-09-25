<template>
  <div class="form">
    <slot></slot>
    <div v-if="bottomLine" class="form__back"></div>
  </div>
</template>

<script>
export default {
  props: {
    bottomLine: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style lang="scss" scoped>
.form {
  box-shadow: 1px 1px 10px 1px rgba(0, 0, 0, 0.2);
  padding: 2rem 1.5rem;
  min-width: 28%;
  width: fit-content;
  min-height: 10rem;
  margin: 0 auto;
  background: white;
  position: relative;
  z-index: 1;

  &__back {
    width: calc(100% - 3rem);
    height: 0.7rem;
    position: absolute;
    bottom: -0.7rem;
    left: 50%;
    transform: translateX(-50%);
    z-index: -2;
    background-color: $base-color;
  }
}
</style>
