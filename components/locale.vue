<template>
  <div>
    <div :class="{'Lang--border': border, 'Lang': true}">En</div>
  </div>
</template>

<script>
export default {
  props: {
    border: Boolean
  }
}
</script>

<style lang="scss" scoped>
.Lang {
  &--border {
    border: 1px solid #000;
  }
}
</style>