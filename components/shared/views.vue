<template>
  <div>
    <span class="views">
      <span class="views__icon mr-1">
        <icon-eyes />
      </span>
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

  &__icon {
    width: 0.9rem;
  }
}
</style>