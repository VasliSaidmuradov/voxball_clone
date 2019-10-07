<template>
  <div class="draw-list">
    <draw-item :style="styles" v-for="(item, index) in list" :key="index" :data="item" />
  </div>
</template>

<script>
import drawItem from '@/components/draw/drawList/drawItem.vue'
export default {
  props: {
    list: Array,
    gap: String,
    perPage: Number
  },
  components: {
    drawItem
  },
  computed: {
    styles() {
      return {
        width: this.gap
          ? `calc(100% / ${this.perPage} - ${this.gap}px)`
          : `calc(100% / ${this.perPage})`,
        'margin-right': this.gap ? `${this.gap}px` : '0px'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.draw-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>