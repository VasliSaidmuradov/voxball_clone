<template>
  <div class="m-nav">
    <div class="icon-hamburger" @click="openMobNavBar">
      <span class="icon-hamburger__item"></span>
      <span class="icon-hamburger__item"></span>
      <span class="icon-hamburger__item"></span>
    </div>

    <m-nav-list></m-nav-list>
  </div>
</template>

<script>
import mNavList from '@/components/mNav/mNavList/mNavList.vue'
import iconNavClose from '@/components/icons/iconNavClose.vue'

export default {
  components: {
    mNavList,
    iconNavClose
  },
  data() {
    return {
      open: true
    }
  },
  methods: {
    openMobNavBar() {
      const mNavList = document.querySelector('.m-nav-list')
      mNavList.style.cssText = 'transform: translate(0%, 0);'
      const iconHamburger = document.querySelector('.icon-hamburger')
      iconHamburger.style.cssText = 'display: none;'
      // this.open = false
    }
  }
}
</script>

<style lang="scss" scoped>
.m-nav {
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
}
</style>