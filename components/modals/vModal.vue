<template>
  <div class="v-modal" v-show="showModal">
    <div class="v-modal__wrap">
      <h3 class="v-modal__title">
        {{ title }}
      </h3>
      <div class="v-modal__close-btn" @click="$emit('close')">
        <icon-close class="v-modal__close-icon" />
      </div>
      <section>
        <slot name="body">

        </slot>
      </section>
      <section class="v-modal__footer">
        <v-btn v-if="abort" @click="$emit('close')" border>
          <span>Отмена</span>
        </v-btn>
        <slot name="footer">
            
        </slot>
      </section>
    </div>
  </div>
</template>

<script>
import iconClose from '@/components/icons/iconClose.vue'
export default {
  components: {
    iconClose
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    showModal: Boolean,
    abort: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style lang="scss" scoped>
.v-modal {
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba( 0, 0, 0, 0.3);
  &__wrap{
    border-top: 5px solid $base-color;
    border-bottom: 5px solid $base-color;
    background-color: white;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    min-width: 20rem;
    min-height: 10rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  &__title {
    margin: 0;
    padding: 0.5rem 0;
  }
  &__close-btn {
    position: absolute;
    top: 0;
    right: 0;
    background-color: $base-color;
    color: white;
    width: 2rem;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  &__close-icon {
    width: 1rem;
  }
  &__footer {
    display: flex;
    justify-content: space-around;
    width: 90%;
  }
}
</style>