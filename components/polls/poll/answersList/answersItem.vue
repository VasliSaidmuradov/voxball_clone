<template>
  <div class="answer-item-wrapper">
    <div
      :class="{
        'answer-item': true, 
        'answer-item--checked': checked
      }"
      @click="$emit('click')"
    >{{label}}</div>
    <div class="answer-item__checkbox">
      <iconComplete v-if="checked" class="answer-item__complete-icon"></iconComplete>
    </div>
  </div>
</template>

<script>
import iconComplete from '@/components/icons/iconComplete.vue'

export default {
  props: {
    label: String,
    checked: Boolean
  },
  components: {
    iconComplete
  },
  data() {
    return {
      // checked: this.value
    }
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.answer-item {
  border: 1px solid $border-color;
  padding: 0.8rem;
  margin: 0.5rem;
  border-radius: 1.3rem;
  cursor: pointer;

  &__checkbox {
    margin: 0;
    padding: 0;
    background-color: white;
    width: 2rem;
    height: 2rem;
    border: 1px solid $border-color;
    border-radius: 50%;
    position: absolute;
    right: 1rem;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    &:focus {
      outline: none;
    }
  }

  &__complete-icon {
    width: 20px;
    height: 20px;
    color: $base-color;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  &--checked {
    border-color: $base-color;
  }

  &-wrapper {
    width: 50%;
    position: relative;
  }
}
</style>