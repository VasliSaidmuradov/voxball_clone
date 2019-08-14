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
        "v-btn": true,
        "v-btn--border": this.border,
        "v-btn--rounded": this.rounded,
        "v-btn--disabled": this.disabled,
        "v-btn--loading": this.loading,
        "v-btn--link": this.link
      }
    },
    styles() {
      return {
        "min-height": this.minHeight,
        "min-width": this.minWidth
      }
    }
  },
  methods: {
    click() {
      if (this.disabled) return
      this.$emit("click")
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
$v-btn-background: transparent;
$v-btn-background-hover: green;
$v-btn-color-hover: #fff;
$v-btn-background-disabled: #c1c1c1;
$v-btn-color-disabled: #696969;
$v-btn-rounded: 15px;
$v-btn-border: 1px solid #c5c5c5;

@mixin reset-btn {
  border: none;
  background: transparent;
}

@mixin hover-btn {
  background: $v-btn-background-hover;
  color: $v-btn-color-hover;
}

.v-btn {
  background: $v-btn-background;
  display: flex;
  align-items: center;
  padding: 0.3em 0.8em;
  box-sizing: border-box;
  position: relative;
  cursor: pointer;

  &--border {
    border: $v-btn-border;

    &:hover {
      @include hover-btn;
    }
  }

  &--rounded {
    border: $v-btn-border;
    border-radius: $v-btn-rounded;

    &:hover {
      @include hover-btn;
    }
  }

  &--link {
    text-decoration: underline;
    border: none;
    background: transparent !important;

    &:hover {
      color: $v-btn-background-hover;
      background: transparent !important;
    }
  }

  &--disabled,
  &--disabled:hover {
    background: $v-btn-background-disabled;
    color: $v-btn-color-disabled;
  }

  &--loading,
  &--loading:hover {
    background: $v-btn-background-disabled;

    .v-btn__content {
      opacity: 0;
    }
  }

  &__loader {
    text-indent: -9999em;
    width: 1.3em;
    height: 1.3em;
    border-radius: 50%;
    background: $v-btn-background-disabled;
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
      background: $v-btn-background-disabled;
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