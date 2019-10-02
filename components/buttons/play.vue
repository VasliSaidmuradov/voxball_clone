<template>
  <div class="play-block" @click="click()">
    <div class="play"></div>
  </div>
</template>

<script>
export default {
  methods: {
    click() {
      this.$emit('click')
    }
  }
}
</script>

<style lang="scss" scoped>
.play {
  position: absolute;
  width: 3rem;
  height: 3rem;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  background: $base-color;
  cursor: pointer;
  &::after {
    content: '▶︎';
    font-size: 1.5em;
    display: flex;
    align-items: center;
    width: 3rem;
    height: 3rem;
    justify-content: center;
    color: white;
    border-left: 0.4vw solid transparent;
  }

  &-block {
    position: absolute;
    width: 4.5rem;
    height: 4.5rem;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    background: #00b90087;
    transition: 0.5s ease;
    &:hover {
      width: 6rem;
      height: 6rem;
    }
  }
}
</style>