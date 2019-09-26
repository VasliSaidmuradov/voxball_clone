<template>
  <div class="side-bar-list">
    <h3 class="side-bar-list__title">{{ title }}</h3>
    <side-bar-item
      v-for="(item, index) in list"
      :key="index"
      :data="item"
      :check="check"
      @click="click()"
      class="side-bar-list__item"
    />
  </div>
</template>

<script>
import sideBarItem from '@/components/sideBar/sideBarItem.vue'
if (process.browser) {
  var { ToggleButton } = require('vue-js-toggle-button')
}
export default {
  components: {
    sideBarItem,
    ToggleButton
  },
  props: {
    title: String,
    list: Array,
    check: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    click() {
      this.$emit('click')
    }
  }
}
</script>

<style lang="scss" scoped>
.side-bar-list {
  padding: 1.5rem;
  &__title {
    text-transform: uppercase;
    font-size: 1.2rem;
    font-family: 'times new roman psmt';
    margin: 0;
    padding-bottom: 1rem;
  }
  &__item {
    padding: 0.5rem 0;
  }
}
</style>