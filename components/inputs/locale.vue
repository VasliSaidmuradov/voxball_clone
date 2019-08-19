<template>
  <div class="Lang" :class="{'Lang--full': full}">
    <div class="Lang__arraw Lang__arraw--left"></div>
    <div class="Lang__text">En</div>
    <div class="Lang__arraw Lang__arraw--right"></div>
  </div>
</template>

<script>
export default {
  props: {
    full: {
      type: Boolean
      // default: true
    }
  }
}
</script>

<style lang="scss" scoped>
$border-color: #e8e8e8;
$arrow-color: #8c8c8c;

.Lang {
  display: flex;
  align-items: center;

  &--full {
    width: fit-content;
    border: 1px solid $border-color;
    border-radius: 30px;
    padding: 10px;
  }

  &__text {
    padding: 0 8px;
  }

  &--border {
    border: 1px solid $arrow-color;
  }
  &__arraw {
    width: 0;
    height: 0;
    border: 0.3em solid transparent;

    &--left {
      border-right: 0.3em solid $arrow-color;
      &:hover {
        border-right: 0.3em solid $base-color;
      }
    }
    &--right {
      border-left: 0.3em solid $arrow-color;
      &:hover {
        border-left: 0.3em solid $base-color;
      }
    }
  }
}
</style>