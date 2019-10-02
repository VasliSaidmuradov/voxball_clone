<template>
  <div class="side-bar-item">
    <div
      class="side-bar-item__title"
      :class="{ active: data.check }"
      @click="click()"
    >{{ data.title }}</div>
    <no-ssr>
      <toggle-button @change="change()" v-if="checkbox" v-model="data.check" color="#82C7EB" />
    </no-ssr>
  </div>
</template>

<script>
if (process.browser) {
  var { ToggleButton } = require('vue-js-toggle-button')
}
export default {
  components: {
    ToggleButton
  },
  props: {
    data: {
      title: String,
      check: Boolean
    },
    checkbox: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    click() {
      this.$emit('click')
    },
    change() {
      this.$emit('change')
    }
  }
}
</script>

<style lang="scss" scoped>
.side-bar-item {
  display: flex;
  justify-content: space-between;
  &__title {
    display: flex;
    align-items: flex-end;
    cursor: pointer;
  }
}
.active {
  color: $base-color;
  text-decoration: underline;
}
</style>