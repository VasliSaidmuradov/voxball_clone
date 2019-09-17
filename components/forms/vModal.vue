<template>
  <div>
    <div class="v-modal" v-show="showModal" @click="$emit('close', false)">
      {{ title }}
      <div class="v-modal__close" >
        x
      </div>
      <div>
        <slot name="body">

        </slot>
      </div>
      <div>
        <slot name="footer">
            
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    showModal: Boolean
  }
}
</script>

<style lang="scss" scoped>
.v-modal {
  border-top: 3px solid $base-color;
  border-bottom: 3px solid $base-color;
  position: relative;
  &__close {
    position: absolute;
    top: 0;
    right: 0;
    background-color: $base-color;
    color: white;
    width: 2rem;
    height: 2rem;
    cursor: pointer;
  }
}
</style>