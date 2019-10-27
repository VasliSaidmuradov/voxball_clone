<template>
  <div>
    <span class="views">
      <span class="views__icon-wrap mr-1">
        <icon-eyes class="views__icon" />
      </span>
      <span class="views__count">{{ viewCount }}</span>
    </span>
  </div>
</template>

<script>
import iconEyes from '@/components/icons/iconEyes'
export default {
  props: {
    // viewCount: {
    //   type: Number,
    //   // default: 13
    // }
    viewCount: {
      type: Number

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
    line-height: 1.1;
  }

  &__icon-wrap {
    width: 0.9rem;
  }

  &__icon {
    line-height: 1.1;
  }
}
</style>