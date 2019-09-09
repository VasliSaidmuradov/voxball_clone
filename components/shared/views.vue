<template>
  <div>
    <span class="views">
      <icon-base stroke-width="8px" :height="15" :width="20" viewBox="0 0 110 115" iconColor="none">
        <icon-eyes></icon-eyes>
      </icon-base>
      <span class="views__count">{{count}}</span>
    </span>
  </div>
</template>

<script>
import iconEyes from '@/components/icons/iconEyes'
export default {
  props: {
    count: {
      type: Number,
      default: 0
    }
  },
  components: {
    iconEyes
  }
}
</script>

<style lang="scss" scoped>
.views {
  display: flex;
  align-items: center;

  &__count {
    margin-left: 3px;
  }
}
</style>