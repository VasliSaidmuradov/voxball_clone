<template>
  <div :class="classes">
    <div v-if="isMedia" class="answer-item-upload">
      <upload :label="type === 'video' ? 'Загрузить видео' : 'Загрузить фото'"></upload>
      <div class="ml-4 w-100">
        <textarea
          v-model="answersItem.value"
          ref="input"
          class="answer-item-upload__input answer-item-upload__input--textarea"
        ></textarea>
        <div class="answer-item-upload__text">Или укажите ссылку на видео</div>
        <input @keyup.enter="enter" class="answer-item-upload__input" type="text" />
      </div>
      <div @click="removeAnswer()">
        <iconCancel class="icon-cancel answer-item-upload__cancel"></iconCancel>
      </div>
    </div>
    <div v-else class="answer-item">
      <input
        v-if="type !== 'video'"
        @input="SET_NEW_POLL_DATA_VARIANT({ questionIndex: variantInfo.questionIndex, variantIndex: variantInfo.variantIndex, field: 'title', value: $event.target.value})"
        class="answer-item__input"
        type="text"
      />
      <!-- ref="input"-->
      <!-- @keyup.enter="enter" -->
      <!-- v-model="answersItem.value" -->
      <div class="answer-item__cancel-wrapper" @click="removeAnswer()">
        <iconCancel class="icon-cancel answer-item__cancel"></iconCancel>
      </div>
    </div>
  </div>
</template>

<script>
import iconCancel from '@/components/icons/iconCancel'
import upload from '@/components/inputs/upload'
import { mapMutations } from 'vuex'

export default {
  props: {
    answersItem: Object,
    variantInfo: Object
  },
  data() {
    return {
      value: '',
      type: ''
    }
  },
  mounted() {
    if (this.$refs.input) {
      this.$refs.input.focus()
    }
  },
  methods: {
    ...mapMutations({
      SET_NEW_POLL_DATA_VARIANT: 'polls/SET_NEW_POLL_DATA_VARIANT'
    }),
    enter() {
      this.$emit('enter')
    },
    removeAnswer() {
      this.$emit('removeAnswer')
    }
  },
  computed: {
    isMedia() {
      return this.type === 'video' || this.type === 'image'
    },
    classes() {
      return {
        'answer-item-wrapper': !this.isMedia,
        'answer-item-wrapper-upload': this.isMedia
      }
    }
  },
  components: {
    iconCancel,
    upload
  }
}
</script>

<style lang="scss" scoped>
.answer-item-wrapper {
  width: 100%;
  margin: 0;
}
.answer-item-wrapper-upload {
  margin: 1em;
  &:nth-child(odd) {
    margin-left: 0;
  }
}
.answer-item {
  border: 1px solid $border-color;
  border-radius: 2em;
  padding: 0.5em 0.9em;
  position: relative;
  line-height: 1;
  position: relative;
  width: 100%;
  margin-bottom: 0.8em;

  &__input {
    width: 98%;
    border: none;
    &:focus {
      outline: none;
    }
  }

  &__cancel {
    right: 0.5rem;
    top: 50%;
    transform: translateY(-50%);
  }
}

.icon-cancel {
  width: 1.5rem;
  height: 1.5rem;
  position: absolute;
  color: #aaaaaa;
  cursor: pointer;
}

.answer-item-upload {
  border: 1px solid $border-color;
  display: flex;
  padding: 1em;
  position: relative;

  &__input {
    border: 1px solid $border-color;
    border-radius: 2em;
    padding: 0.7em 0.9em;
    width: 100%;
    &:focus {
      outline: none;
    }

    &--textarea {
      height: 10rem;
      padding: 1em 2em;
    }
  }

  &__cancel {
    right: 0;
    top: 0%;
    transform: translate(50%, -50%);
    background: #fff;
  }

  &__text {
    text-transform: uppercase;
    margin: 1em 0;
  }
}
</style>