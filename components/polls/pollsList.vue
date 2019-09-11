<template>
  <div class="poll">
    <div class="poll__list">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.poll__list {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin: 0 -15px;
  margin-top: 20px;
  list-style: none;
  padding: 0;
  font-size: 0.8em;
}
</style>