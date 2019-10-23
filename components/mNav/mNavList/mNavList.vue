<template>
  <div class="m-nav-list">
    <div class="m-nav-list__close" v-show="open == false" @click="closeNav" v-bind="open">
      <icon-nav-close class="m-nav-list__icon" />
    </div>
    <m-nav-item v-for="(item, index) in items" v-bind:key="index" v-bind:data-item="item"></m-nav-item>
  </div>
</template>

<script>
import mNavItem from '@/components/mNav/mNavList/mNavItem.vue'
import iconNavClose from '@/components/icons/iconNavClose.vue'

export default {
  components: {
    mNavItem,
    iconNavClose
  },
  data() {
    return {
      items: [
        {
          text: 'опросы',
          path: '/polls'
        },
        {
          text: 'результаты',
          path: '/results'
        },
        {
          text: 'рейтинг',
          path: '/ratings'
        },
        {
          text: 'Новости',
          path: '/news'
        },
        {
          text: 'стать акционером',
          path: '/shareholders'
        },
        {
          text: 'о проекте',
          path: '/about'
        },
        {
          text: 'Языки',
          path: '/about'
        }
      ]
    }
  },
  props: {
    open: Boolean
  },
  methods: {
    closeNav() {
      const mNavList = document.querySelector('.m-nav-list')
      const iconHamburger = document.querySelector('.icon-hamburger')
      mNavList.style.cssText = 'transform: translate(-100%, 0);'
      setTimeout(() => {
        iconHamburger.style.cssText = 'display: block;'
      }, 700)
      // open = true
    }
  }
}
</script>

<style lang="scss" scoped>
.m-nav-list {
  width: 100%;
  max-width: 17rem;
  min-height: 50rem;
  box-shadow: 0.2rem 0 0.5rem 0.2rem rgba(0, 0, 0, 0.1);
  transform-origin: 0% 0%;
  transform: translate(-100%, 0);
  transition: transform 0.8s ease;

  .m-nav-list__close {
    display: flex;
    align-items: center;
    height: 4.5rem;
    max-width: 17rem;
    background-color: #fff;
    border-bottom: 1px solid #e8e8e8;

    .m-nav-list__icon {
      width: 20%;
      max-width: 1.8rem;
      margin-left: 0.5rem;
      cursor: pointer;
      fill: url(#Gradient3);
    }
  }
}
</style>
