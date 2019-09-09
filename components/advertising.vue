<template>
  <div :style="styles" class="advertising">
    <img 
     src="~assets/img/advertising.jpg" 
     class="advertising__banner"
     alt="advertising image">
  </div>
</template>

<script>
export default {
  computed: {
    styles() {
      return {
        'width': this.advWidth,
        'height': this.advHeight 
      }
    }
  },
  props: {
    advImage: String,
    advWidth: String,
    advHeight: String
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