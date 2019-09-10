<template>
  <div class="tag">
    {{ title }}
  </div>
</template>

<script>
export default {
  props: ['title']
}
</script>

<style lang="scss" scoped>
.tag {
  width: fit-content;
  padding: 0.3rem 1rem 0.2rem;
  margin: 5px;
  border: 1px solid $base-text-color;
  border-radius: 30px;
}
</style>