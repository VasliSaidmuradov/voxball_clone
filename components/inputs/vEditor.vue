<template>
  <div class="v-editor" :style="styles">
    <no-ssr>
      <ckeditor
        class="v-editor__ckeditor"
        :editor="editor"
        :config="editorConfig"
        v-model="editorData"
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
      editorData: '',
      editorConfig: {
        toolbar: {
          items: ['numberedList', 'bulletedList']
        }
      }
    }
  },
  computed: {
    styles() {
      return {
        width: this.width
      }
    }
  },
  props: {
    width: {
      type: String,
      default: 'max-content'
    }
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
  height: 10rem;
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