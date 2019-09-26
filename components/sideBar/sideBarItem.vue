<template>
  <div class="side-bar-item">
    <div
      class="side-bar-item__title"
      :class="{ active: data.value }"
      @click="click()"
    >{{ data.title }}</div>
    <no-ssr>
      <toggle-button v-if="check" :value="data.value" color="#82C7EB" />
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
    data: Object,
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
.side-bar-item {
  display: flex;
  justify-content: space-between;
  &__title {
    display: flex;
    align-items: flex-end;
  }
}
.active {
  color: $base-color;
  text-decoration: underline;
}
</style>