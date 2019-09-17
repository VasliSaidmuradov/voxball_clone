<template>
  <div v-show="showModal">
    {{ title }}
    <div>
      <slot name="body">

      </slot>
    </div>
    <div>
      <slot name="footer">
          
      </slot>
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

<style>

</style>