<template>
  <div class="d-flex align-items-center flex-direction-column file-pond">
    <file-pond
      ref="pond"
      :class="{'myUpload': true, 'myUpload--file': file}"
      :style="styles"
      :stylePanelLayout="file ? null : 'integrated'"
      :labelIdle="`<div class='upload-btn'>${label}</div>`"
      allow-multiple="false"
      allowImageCrop="true"
      :drop="true"
      :max-files="maxFiles"
      @updatefiles="getFiles($event)"
      :disabled="disabled"
      :accepted-file-types="acceptedfiletypes"
      @removefile="removefile($event)"
    />
    <!-- :allowFileTypeValidation="type"
    :acceptedFileTypes="mime_types[type]"-->
    <!-- :max-files="maxFiles" -->
    <!-- v-on:init="handleFilePondInit" -->
    <!-- accepted-file-types="image/jpeg, image/png" -->
  </div>
</template>

<script>
import vueFilePond from 'vue-filepond'

import FilePondPluginImagePreview from 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.esm.js'

import FilePondPluginImageCrop from 'filepond-plugin-image-crop'

import FilePondPluginImageEdit from 'filepond-plugin-image-edit'

import 'filepond/dist/filepond.min.css'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css'
import 'filepond-plugin-image-edit/dist/filepond-plugin-image-edit.css'

const FilePond = vueFilePond(
  FilePondPluginImagePreview,
  FilePondPluginImageCrop,
  FilePondPluginImageEdit
)

export default {
  components: {
    FilePond
  },
  methods: {
    getFiles(e) {
      if (!!e.length) {
        let data = e[0]
        this.$emit('getFiles', data)
      }
    },
    removefile(e) {
      this.$emit('removefile', e)
    }
  },
  props: {
    label: {
      type: String,
      default: 'Загрузить файл'
    },
    file: {
      type: Boolean,
      default: false
    },
    maxFiles: {
      type: Number,
      default: 1
    },
    height: {
      type: String,
      default: '15em;'
    },
    width: {
      type: String,
      default: '15em;'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: null
    },
    acceptedfiletypes: {
      type: String
    }
  },
  computed: {
    styles() {
      return {
        height: this.height,
        width: this.width
      }
    }
  },
  data() {
    return {
      mime_types: {
        video: ['video/mpeg', 'video/mp4'],
        image: ['image/jpeg', 'image/png']
      }
    }
  }
}
</script>

<style lang="scss">
.file-pond {
}
.upload-btn {
  border: 1px solid #000;
  color: #000;
  border-radius: 1em;
  text-transform: uppercase;
  line-height: 1em;
  padding: 0.5em 1em;
  padding-right: 3em;
  cursor: pointer;
  margin: auto;
  position: relative;
  font-size: 0.85rem !important;

  &:after {
    content: '';
    background: url('~assets/img/upload.png');
    background-size: 100% 100%;
    width: 1.2em;
    height: 1.2em;
    right: 1em;
    top: 50%;
    transform: translateY(-50%);
    position: absolute;
  }
}
.filepond--panel-root {
  border-radius: 0;
}
.filepond--item-panel {
  overflow: hidden;
}

.filepond--item {
  height: 100% !important;
  width: 100%;
  background: #2b454ec7;
  border-radius: 0.5em;
}

.filepond--drip-blob {
  background-color: #999;
}
.filepond--file {
  color: white;
}

.myUpload {
  height: 15em;
  width: 15em;
  border-radius: 0;
  overflow: hidden;

  &--file {
    .filepond--item {
      height: auto !important;
      background: white;
    }
  }
  .filepond--drop-label {
    background: white;
  }
  .upload-btn {
    color: $base-text-color;
    border-color: $base-text-color;
  }
}
</style>