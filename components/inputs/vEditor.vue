<template>
  <div class="v-editor" :style="styles">
    <no-ssr>
      <ckeditor
        class="v-editor__ckeditor"
        :editor="editor"
        :config="editorConfig"
        :v-model="editorData"
        @input="onEditorInput($event)"
      ></ckeditor>
    </no-ssr>
  </div>
</template>

<script>
import Vue from 'vue'
let ClassicEditor = null
if (process.client || process.browser) {
  ClassicEditor = require('@ckeditor/ckeditor5-build-classic')
}
export default {
  data() {
    return {
      editor: ClassicEditor,
      editorConfig: {
        toolbar: {
          items: ['numberedList', 'bulletedList']
        }
      }
    }
  },
  props: {
    editorData: {
      type: String,
      default: '<p></p>'
    },
    width: {
      type: String,
      default: 'max-content'
    },
    height: String
  },
  methods: {
    onEditorInput(e) {
      this.$emit('input', e)
    }
  },
  computed: {
    styles() {
      return {
        width: this.width,
        height: this.height
      }
    }
    // editorInnerData() {
    //   return this.editorData
    // }
  }
}
</script>

<style lang="scss" scoped>
.v-editor {
  height: 20rem;
  &__ckeditor {
    min-height: 100%;
  }
}
</style>
<style lang="scss">
.v-editor .ck-content {
  overflow-y: scroll;
  height: 7rem;
}
.v-editor .ck-rounded-corners .ck.ck-editor__top .ck-sticky-panel .ck-toolbar {
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
}
.v-editor .ck.ck-editor__main > .ck-editor__editable {
  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
}
</style>