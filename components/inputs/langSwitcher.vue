<template>
  <div class="Lang" :class="{'Lang--full': full}">
    <div @click="changeLang('prev')" class="Lang__arrow Lang__arrow--left"></div>
    <div class="Lang__text">{{$i18n.locale}}</div>
    <div @click="changeLang('next')" class="Lang__arrow Lang__arrow--right"></div>
  </div>
</template>

<script>
export default {
  props: {
    full: {
      type: Boolean
      // default: true
    },
    langs: {
      type: Array
    }
  },
  data() {
    return {}
  },
  methods: {
    changeLang(direction) {
      const localeCodes = this.langs.map(item => item.code)
      const currentlocaleIndex = localeCodes.indexOf(this.$i18n.locale)
      if (direction === 'next' && currentlocaleIndex < localeCodes.length - 1) {
        this.$router.push(
          this.switchLocalePath(localeCodes[currentlocaleIndex + 1])
        )
      } else if (direction === 'prev' && currentlocaleIndex > 0) {
        this.$router.push(
          this.switchLocalePath(localeCodes[currentlocaleIndex - 1])
        )
      }
    }
  }
}
</script>

<style lang="scss" scoped>
$border-color: #e8e8e8;
$arrow-color: #8c8c8c;

.Lang {
  display: flex;
  align-items: center;

  &--full {
    width: fit-content;
    border: 1px solid $border-color;
    border-radius: 30px;
    padding: 10px;
  }

  &__text {
    padding: 0 8px;
    text-transform: uppercase;
  }

  &--border {
    border: 1px solid $arrow-color;
  }
  &__arrow {
    width: 0;
    height: 0;
    border: 0.3em solid transparent;

    &--left {
      border-right: 0.3em solid $arrow-color;
      &:hover {
        border-right: 0.3em solid $base-color;
      }
    }
    &--right {
      border-left: 0.3em solid $arrow-color;
      &:hover {
        border-left: 0.3em solid $base-color;
      }
    }
  }
}
</style>