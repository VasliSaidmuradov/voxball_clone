<template>
  <div class="form">
    <slot></slot>
    <div class="form__back">
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
.form {
  box-shadow: 1px 1px 10px 1px rgba(0, 0, 0, 0.2);
  padding: 2rem 1.5rem 0.5rem;
  width: 25%;
  min-height: 10rem;
  margin: 0 auto;
  background: white;
  position: relative;
  margin-top: 3rem;
  margin-bottom: 3rem;
  z-index: 1;

  &:hover .form__back{
    bottom: 0;
  }

  // &__back {
  //   position: absolute;
  //   top: 0;
  //   left: 50%;
  //   transform: translateX(-50%);
  //   width: calc(100% - 3rem);
  //   height: calc(100% + 0.7rem);
  //   background-color: $base-color;
  //   z-index: -2;
  // }
  
  // &__back {
  //   width: calc(100% - 3rem);
  //   height: 0.7rem;
  //   position: absolute;
  //   bottom: -0.7rem;
  //   z-index: -2;
  //   background-color: $base-color;
  //   transition: bottom 0.5s ease;
  // }
}
</style>
