<template>
	<div class="participate">
    <detailed-layout :title="'Принять участие'">
		<competitionInfo class="mr-4 ml-4" :competition="competitionData"/>
    <v-form-layout class="participate__form mt-4 mb-5" :bottomLine="false">
      <section class="participate__header">
        <h2 class="participate__title">Ваша заявка на участие в конкурсе:</h2>
      </section>
      <section class="participate__main">
        <div class="participate__left-block">
          <!-- <input type="file" class="participate__input-file"> -->
          <div v-show="$refs.upload && $refs.upload.dropActive" class="drop-active">
            <h3>Drop files to upload</h3>
          </div>
          <div class="avatar-upload"  v-show="!edit">
            <div class="text-center p-2">
              <label for="avatar">
                <img :src="files.length ? files[0].url : 'https://www.gravatar.com/avatar/default?s=200&r=pg&d=mm'"  class="rounded-circle" />
                <h4 class="pt-2">or<br/>Drop files anywhere to upload</h4>
              </label>
            </div>
            <div class="text-center p-2">
              <file-upload
                extensions="gif,jpg,jpeg,png,webp"
                accept="image/png,image/gif,image/jpeg,image/webp"
                name="avatar"
                class="btn btn-primary"
                post-action="/upload/post"
                :drop="!edit"
                v-model="files"
                @input-filter="inputFilter"
                @input-file="inputFile"
                ref="upload">
                Upload avatar
              </file-upload>
            </div>
          </div>

          <div class="avatar-edit" v-show="files.length && edit">
            <div class="avatar-edit-image" v-if="files.length">
              <img ref="editImage" :src="files[0].url" />
            </div>
            <div class="text-center p-4">
              <button type="button" class="btn btn-secondary" @click.prevent="$refs.upload.clear">Cancel</button>
              <button type="submit" class="btn btn-primary" @click.prevent="editSave">Save</button>
            </div>
          </div>

          <!--  -->
        </div>
        <div class="participate__right-block">
          <label class="participate__label">Имя</label>
          <input
            class="participate__input"
            type="text"
            v-model="participantName"
          />
          <label class="participate__label">Город</label>
          <input
            class="participate__input"
            type="text"
            v-model="participantCity"
          />
          <div class="participate__buttons">
            <v-btn
              @click="$navigate('/registration/personalization')"
              class="participate__button"
              border
            >
              <span>подать заявку</span>
              <span>
                <icon-arrow class="ml-2" />
              </span>
            </v-btn>
          </div>
        </div>
      </section>
    </v-form-layout>
    </detailed-layout>
	</div>
</template>

<script>
import detailedLayout from '@/components/layouts/detailedLayout.vue'
import competitionInfo from '@/components/competition/competitionInfo.vue'
import vFormLayout from '@/components/forms/vFormLayout.vue'
import iconArrow from '@/components/icons/iconArrow.vue'
import fileUpload from 'vue-upload-component'
export default {
	components: {
    detailedLayout,
		competitionInfo,
    vFormLayout,
    iconArrow,
    fileUpload
	},
	data() {
		return {
      participantName: '',
      participantCity: '',
			competitionData: {
        title: '«Мое идеальное лето»',
        description: 'Конкурс фотографий среди зарегистрированных пользователей портала Voxball.',
        date: '01.09.2019',
        rules: [
          {text: 'Сделайте смешное фото на тему «Мое идеальное лето».'},
          {text: 'Загрузите фото на сайт'},
          {text: 'Приглашайте своих друзей проголосовать за Ваше фото'}
        ],
        src: 'src',
        complete: false
      },
      files: []
		}
  },
  watch: {
    edit(value) {
      if (value) {
        this.$nextTick(function () {
          if (!this.$refs.editImage) {
            return
          }
          let cropper = new Cropper(this.$refs.editImage, {
            aspectRatio: 1 / 1,
            viewMode: 1,
          })
          this.cropper = cropper
        })
      } else {
        if (this.cropper) {
          this.cropper.destroy()
          this.cropper = false
        }
      }
    }
  },
  methods: {
    editSave() {
      this.edit = false
      let oldFile = this.files[0]
      let binStr = atob(this.cropper.getCroppedCanvas().toDataURL(oldFile.type).split(',')[1])
      let arr = new Uint8Array(binStr.length)
      for (let i = 0; i < binStr.length; i++) {
        arr[i] = binStr.charCodeAt(i)
      }
      let file = new File([arr], oldFile.name, { type: oldFile.type })
      this.$refs.upload.update(oldFile.id, {
        file,
        type: file.type,
        size: file.size,
        active: true,
      })
    },
   
    inputFile(newFile, oldFile, prevent) {
      if (newFile && !oldFile) {
        this.$nextTick(function () {
          this.edit = true
        })
      }
      if (!newFile && oldFile) {
        this.edit = false
      }
    },
    inputFilter(newFile, oldFile, prevent) {
      if (newFile && !oldFile) {
        if (!/\.(gif|jpg|jpeg|png|webp)$/i.test(newFile.name)) {
          this.alert('Your choice is not a picture')
          return prevent()
        }
      }
      if (newFile && (!oldFile || newFile.file !== oldFile.file)) {
        newFile.url = ''
        let URL = window.URL || window.webkitURL
        if (URL && URL.createObjectURL) {
          newFile.url = URL.createObjectURL(newFile.file)
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.participate {
	background-image: url('~assets/img/registration__bg.png');
  background-size: 100%;
  background-repeat: no-repeat;
  &__form {
    width: fit-content;
    display: flex;
    flex-direction: column;
  }
  &__header {
    padding-bottom: 1.5rem;
  }
  &__title {
    margin: 0;
    text-transform: uppercase;
    font-family: 'times new roman psmt';
  }
  &__main {
    display: flex;
    justify-content: space-between;
  }
  &__left-block {
    display: flex;
    flex-direction: column;
    min-width: 30rem;
    min-height: 11rem;
  }
  &__right-block {
    display: flex;
    flex-direction: column;
    padding-left: 4rem;
    min-width: 20rem;
  }
  &__input-file {
    background-color: #e8e8e8;
    width: 100%;
    height: 100%;
  }
  &__label {
    padding-bottom: 0.5rem;
  }
  &__input {
    display: flex;
    background: none;
    border: 1px solid $base-text-color;
    border-radius: 37px;
    line-height: 2;
    outline: none;
    padding: 0 1rem;
    margin-bottom: 1.5rem;
    width: 100%;
    color: $base-text-color;
    font-size: 1em;
  }
  &__buttons {
    display: flex;
    justify-content: flex-end;
  }
  &__button {
    border-color: $base-text-color;
    &:hover {
      border-color: $base-color;
      // background-color: white;
      // color: $base-text-color;
    }
  }
}
.example-avatar .avatar-upload .rounded-circle {
  width: 200px;
  height: 200px;
}
.example-avatar .text-center .btn {
  margin: 0 .5rem
}
.example-avatar .avatar-edit-image {
  max-width: 100%
}
.example-avatar .drop-active {
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  position: fixed;
  z-index: 9999;
  opacity: .6;
  text-align: center;
  background: #000;
}
.example-avatar .drop-active h3 {
  margin: -.5em 0 0;
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  font-size: 40px;
  color: #fff;
  padding: 0;
}
</style>
