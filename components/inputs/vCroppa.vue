<template>
  <div class="vue-croppa">
    <!-- <croppa
      v-model="myCroppa"
      :width="350"
      :height="350"
      placeholder="Choose an image"
      :placeholder-font-size="0"
      :disabled="false"
      :prevent-white-space="false"
      :show-remove-button="true"
      @file-choose="handleCroppaFileChoose"
      @file-size-exceed="handleCroppaFileSizeExceed"
      @file-type-mismatch="handleCroppaFileTypeMismatch"
      @image-remove="handleImageRemove"
      @move="handleCroppaMove"
      @zoom="handleCroppaZoom"
    ></croppa> -->
  </div>
</template>

<script>
import Vue from 'vue'
import Croppa from 'vue-croppa'
import 'vue-croppa/dist/vue-croppa.css'
Vue.use(Croppa)

export default {
  data() {
    return {
      myCroppa: {}
    }
  },
  components: {
    Croppa
  }
}
</script>

<style lang='scss' scoped>
  canvas {
    width: 100%;
    height: 100%;
  }
</style>