<template>
  <div :class="classes">
    <div v-if="type==='video'||type==='image'" class="answer-item-upload mb-3">
      <!-- <upload @getFiles="getFiles" :label="type === 'video' ? 'Загрузить видео' : 'Загрузить фото'"></upload> -->
      <croppa
        class="cabinet-info__img"
        v-model="myCroppaImage"
        :removeButtonColor="'#00b900'"
        placeholder="ЗАГРУЗИТЬ ФОТО"
        :placeholder-font-size="16"
        :disabled="false"
        :prevent-white-space="false"
        :show-remove-button="true"
        @file-choose="handleCroppaFileChoose"
        @image-remove="handleImageRemove"
        @zoom="handleCroppaZoom"
      ></croppa>
      <div class="ml-4 w-100">
        <textarea
          style="resize:none"
          @input="SET_NEW_POLL_DATA_VARIANT({ questionIndex: variantInfo.questionIndex, variantIndex: variantInfo.variantIndex, field: 'title', value: $event.target.value })"
          class="answer-item-upload__input answer-item-upload__input--textarea"
        ></textarea>
        <!-- ref="input" -->
        <!-- v-model="answersItem.value" -->
        <div v-if="type==='video'" class="answer-item-upload__text">Или укажите ссылку на видео</div>
        <input
          v-if="type==='video'"
          @keyup.enter="enter"
          class="answer-item-upload__input"
          type="text"
        />
      </div>
      <div @click="removeAnswer()">
        <iconCancel class="icon-cancel answer-item-upload__cancel"></iconCancel>
      </div>
    </div>
    <div v-if="type==='simple'||type==='multiply'" class="answer-item">
      <input
        @input="SET_NEW_POLL_DATA_VARIANT({ questionIndex: variantInfo.questionIndex, variantIndex: variantInfo.variantIndex, field: 'title', value: $event.target.value})"
        class="answer-item__input"
        type="text"
        :value="answersItem.title"
        @keyup.enter="enter"
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
import vEditor from '@/components/inputs/vEditor.vue'
import StarRating from 'vue-star-rating'
import vCroppa from '@/components/inputs/vCroppa.vue'

import { mapMutations, mapActions } from 'vuex'

export default {
  components: {
    iconCancel,
    upload,
    vEditor,
    StarRating,
    vCroppa
  },
  props: {
    answersItem: Object,
    variantInfo: Object,
    type: String
  },
  data() {
    return {
      value: '',
      rating: 5,
      myCroppaImage: {}
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
    ...mapActions({
      ADD_POLL: 'polls/ADD_POLL',
      ADD_FILE: 'polls/ADD_FILE'
    }),
    enter() {
      this.$emit('enter')
    },
    removeAnswer() {
      this.$emit('removeAnswer')
    },

    // async getFiles(e) {
    //   let id = await this.ADD_FILE(e)
    //   if (id !== null) {
    //     this.SET_NEW_POLL_DATA_VARIANT({
    //       questionIndex: this.variantInfo.questionIndex,
    //       variantIndex: this.variantInfo.variantIndex,
    //       field: 'file',
    //       value: id
    //     })
    //   }
    // },

    // image poll variant add
    handleCroppaFileChoose(e) {
      let formData = new FormData()
      formData.append('file', e)
      this.setImage(formData)
    },

    dataURLtoFile(dataurl, filename) {
      var arr = dataurl.split(','),
        mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]),
        n = bstr.length,
        u8arr = new Uint8Array(n)
      while (n--) {
        u8arr[n] = bstr.charCodeAt(n)
      }
      return new File([u8arr], filename, { type: mime })
    },

    handleCroppaZoom(e) {
      let imageData = this.myCroppaImage
        .getContext()
        .canvas.toDataURL('image/png')
      console.log('croppa resize imageData: ', imageData)
      let file = this.dataURLtoFile(
        imageData,
        imageData.split(',')[1].substr(0, 15)
      )
      console.log('croppa resize file: ', file)
      let formData = new FormData()
      formData.append('file', file)
      this.setImage(formData)
    },

    handleImageRemove() {
      this.setImage('')
    },

    setImage(formdata) {
      this.SET_NEW_POLL_DATA_VARIANT({
        questionIndex: this.variantInfo.questionIndex,
        variantIndex: this.variantInfo.variantIndex,
        field: 'file',
        value: formdata
      })
    }
    // image poll variant add end
  },
  computed: {
    classes() {
      return {
        'answer-item-wrapper': !this.isMedia,
        'answer-item-wrapper-upload': this.isMedia
      }
    }
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