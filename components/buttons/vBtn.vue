<template>
  <div :style="styles" :class="classes">
    <div class="v-btn__content">
      <slot></slot>
    </div>
    <div v-show="loading" class="v-btn__loader"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  computed: {
    classes() {
      return {
        'v-btn': true,
        'v-btn--border': this.border,
        'v-btn--rounded': this.rounded,
        'v-btn--disabled': this.disabled,
        'v-btn--loading': this.loading,
        'v-btn--link': this.link
      }
    },
    styles() {
      return {
        'min-height': this.minHeight,
        'min-width': this.minWidth
      }
    }
  },
  methods: {
    click() {
      if (this.disabled) return
      this.$emit('click')
    }
  },
  props: {
    border: Boolean,
    rounded: Boolean,
    loading: Boolean,
    link: Boolean,
    minWidth: String,
    minHeight: String,
    disabled: Boolean
  }
}
</script>

<style lang="scss" scoped>
//variables

$bg: transparent;
$hover-bg: $base-color;
$hover-color: #fff;
$disabled-bg: #c1c1c1;
$disabled-color: #727272;
$rounded: 15px;
$border: 1px solid $border-color;

@mixin reset-btn {
  border: none;
  background: transparent;
}

@mixin hover-btn {
  background: $hover-bg;
  color: $hover-color;
}

.v-btn {
  background: $bg;
  display: flex;
  align-items: center;
  padding: 0.2em 0.8em;
  box-sizing: border-box;
  position: relative;
  cursor: pointer;

  &:hover {
    color: $hover-bg;
  }

  &__content {
    display: flex;
    align-items: center;
  }

  &--border {
    border: $border;

    &:hover {
      @include hover-btn;
    }
  }

  &--rounded {
    border: $border;
    border-radius: $rounded;

    &:hover {
      @include hover-btn;
    }
  }

  &--link {
    text-decoration: underline;
    border: none;
    background: transparent !important;

    &:hover {
      color: $hover-bg;
      background: transparent !important;
    }
  }

  &--disabled,
  &--disabled:hover {
    background: $disabled-bg;
    color: $disabled-color;
  }

  &--loading,
  &--loading:hover {
    background: $disabled-bg;

    .v-btn__content {
      opacity: 0;
    }
  }

  &__loader {
    text-indent: -9999em;
    width: 1.3em;
    height: 1.3em;
    border-radius: 50%;
    background: $disabled-bg;
    background: -moz-linear-gradient(
      left,
      #ffffff 10%,
      rgba(255, 255, 255, 0) 42%
    );
    background: -webkit-linear-gradient(
      left,
      #ffffff 10%,
      rgba(255, 255, 255, 0) 42%
    );
    background: -o-linear-gradient(
      left,
      #ffffff 10%,
      rgba(255, 255, 255, 0) 42%
    );
    background: -ms-linear-gradient(
      left,
      #ffffff 10%,
      rgba(255, 255, 255, 0) 42%
    );
    background: linear-gradient(
      to right,
      #ffffff 10%,
      rgba(255, 255, 255, 0) 42%
    );
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    top: 0;
    margin: auto;
    transform: translate(50%, 50%);
    -webkit-animation: load3 1.4s infinite linear;
    animation: load3 1.4s infinite linear;
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);

    &:before {
      width: 50%;
      height: 50%;
      background: #ffffff;
      border-radius: 100% 0 0 0;
      position: absolute;
      top: 0;
      left: 0;
      content: "";
    }
    &:after {
      background: $disabled-bg;
      width: 75%;
      height: 75%;
      border-radius: 50%;
      content: "";
      margin: auto;
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
    }
    @-webkit-keyframes load3 {
      0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
      }
      100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
      }
    }
    @keyframes load3 {
      0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
      }
      100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
      }
    }
  }
}
</style>