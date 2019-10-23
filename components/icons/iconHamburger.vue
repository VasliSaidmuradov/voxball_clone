<template>
  <div class="icon-hamburger" @click="openMobNavBar">
    <span class="icon-hamburger__item"></span>
    <span class="icon-hamburger__item"></span>
    <span class="icon-hamburger__item"></span>
  </div>
</template>

<script>
export default {
  methods: {
    openMobNavBar() {
      const mNav = document.querySelector('.m-nav')
      mNav.style.cssText = 'transform: translate(0%, 0);'
      const iconHamburger = document.querySelector('.icon-hamburger')
      iconHamburger.style.cssText = 'display: none'
    }
  }
}
</script>

<style lang='scss' scoped>
.icon-hamburger {
  width: 2rem;
  margin-left: 0.5rem;
  margin-top: 0.5rem;
  cursor: pointer;

  .icon-hamburger__item {
    display: flex;
    width: 2rem;
    height: 4px;
    margin-bottom: 0.5rem;
    position: relative;
    background: $base-color;
    border-radius: 0.4rem;
    z-index: 1;
    transform-origin: 0.5rem 0px;
  }
}
</style>