<template>
  <div class="d-flex align-items-center flex-direction-column">
    <file-pond
      ref="pond"
      :class="{'myUpload': true, 'myUpload--file': file}"
      :stylePanelLayout="file ? null : 'integrated'"
      :labelIdle="`<div class='upload-btn'>${label}</div>`"
      allow-multiple="true"
      :max-files="maxFiles"
      allowImageCrop="true"
      @updatefiles="getFiles($event)"
    />
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
      let files = e.map(item => item.file)
      this.$emit('getFiles', files)
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
    }
  }
}
</script>

<style lang="scss">
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
    }
  }
}
</style>