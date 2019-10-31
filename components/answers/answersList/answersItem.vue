<template>
  <div class="answer-item-wrapper">
    {{complete}}
    <div class="answer-item__video-wrap" v-if="type === 'video'">
      <div class="answer-item__play-icon"></div>
      <video
        @click="$emit('showAnswerMedia')"
        class="answer-item__video"
        src="~/assets/video/placeholder_video.mp4"
        width="100%"
        type="video/mp4"
      ></video>
    </div>
    <div @click="$emit('showAnswerMedia')" class="answer-item__image-wrap" v-if="type === 'image'">
      <img src="~/assets/img/poll-no-info-image.png" alt />
    </div>
    <div :class="classes" @click="selectAnswer">
      <span class="answer-item__percent" v-if="complete">{{ percentage }}%</span>

      <div class="answer-item__label">{{ answer.title }}</div>
      <span v-if="complete" class="answer-item__percent-bg" :style="{ width: percentage + '%' }"></span>
      <div v-if="!complete" class="answer-item__checkbox">
        <iconComplete v-if="checked" class="answer-item__complete-icon"></iconComplete>
      </div>
    </div>
  </div>
</template>

<script>
import iconComplete from '@/components/icons/iconComplete.vue'
import vEditor from '@/components/inputs/vEditor.vue'
import StarRating from 'vue-star-rating'
import vModal from '@/components/modals/vModal.vue'

export default {
  props: {
    label: String,
    percentage: {
      type: Number,
      // default: 25
    },
    checked: Boolean,
    // type: {
    // 	type: String,
    // 	default: 'Simple'
    // },
    answer: {
      type: Object,
      default: () => ({
        title: ''
      })
    },
    type: {
      type: String,
      default: 'simple'
    },
    complete: Boolean
  },
  components: {
    iconComplete,
    vEditor,
    StarRating
  },
  data() {
    return {
      // type: 'video'
      // checked: this.value
    }
  },
  methods: {
    selectAnswer() {
      if (this.percentage) return
      this.$emit('click')
    }
  },
  computed: {
    classes() {
      return {
        'answer-item': true,
        'answer-item--checked': this.checked
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.answer-item {
  border: 1px solid $border-color;
  padding: 0.8rem;
  margin: 0.5rem;
  border-radius: 1.3rem;
  cursor: pointer;
  position: relative;
  display: flex;

  &__video-wrap,
  &__image-wrap {
    box-sizing: border-box;
    margin: 0.5rem;
    position: relative;
  }
  &__image-wrap {
    img {
      width: 100%;
    }
  }

  &__play-icon {
    position: absolute;
    width: 1rem;
    height: 1rem;
    background-color: #fff;
    clip-path: polygon(0 0, 100% 50%, 0 100%);
    top: 50%;
    left: calc(50% + 0.1rem);
    transform: translate(-50%, -50%);
    z-index: 1;
  }
  &__video-wrap::before,
  &__video-wrap::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    background-color: rgba($base-color, 0.4);
  }
  &__video-wrap::after {
    width: 3.3rem;
    height: 3.3rem;
    background: rgba($base-color, 0.5);
  }

  &__label {
    width: calc(100% - 2.5rem);
    &:focus {
      outline: none;
    }
  }

  &__checkbox {
    margin: 0;
    padding: 0;
    background-color: white;
    width: 2rem;
    height: 2rem;
    border: 1px solid $border-color;
    border-radius: 50%;
    position: absolute;
    right: 0.5rem;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    &:focus {
      outline: none;
    }
  }

  &__complete-icon {
    width: 20px;
    height: 20px;
    color: $base-color;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  &--checked {
    border-color: $base-color;
  }

  &__percent-bg {
    height: 100%;
    background-color: $base-text-color;
    opacity: 0.2;
    position: absolute;
    top: 0;
    left: -0.1rem;
    z-index: -1;
    padding: 0.8rem;
    border-top-left-radius: 1.3rem;
    border-bottom-left-radius: 1.3rem;
  }

  &__text-editor {
    width: 100%;
  }

  &-wrapper {
    position: relative;
    width: 50%;
  }
}
</style>
