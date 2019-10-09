<template>
  <div :style="styles" class="advertising">
    <img src="~assets/img/poll__adv.png" class="advertising__banner" alt="advertising image" />
  </div>
</template>

<script>
export default {
  computed: {
    styles() {
      return {
        width: this.width,
        height: this.height
      }
    }
  },
  props: {
    image: String,
    width: String,
    height: String
  }
}
</script>

<style lang="scss" scoped>
.advertising {
  width: 100%;
  height: 100%;
  &__banner {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>