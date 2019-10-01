<template>
  <div class="side-bar-list">
    <h3 class="side-bar-list__title">{{ title }}</h3>
    <side-bar-item
      v-for="(item, index) in list"
      :key="index"
      :data="item"
      :checkbox="checkbox"
      @change="change(index)"
      @click="click(index)"
      class="side-bar-list__item"
    />
  </div>
</template>

<script>
import sideBarItem from '@/components/sideBar/sideBarItem.vue'
export default {
  components: {
    sideBarItem
  },
  props: {
    title: String,
    list: {
      title: String,
      check: Boolean
    },
    checkbox: {
      type: Boolean,
      default: true
    },
    value: String
  },
  methods: {
    click(index) {
      this.$emit('click', index)
    },
    change(index) {
      let result = index
      this.$emit('change', result)
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