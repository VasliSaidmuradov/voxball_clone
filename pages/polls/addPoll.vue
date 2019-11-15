<template>
  <div class="add-poll">
    <detailed-layout :title="'Создание опрос'">
      <section class="add-poll-type">
        <h2 class="add-poll-type__title">Выберите тип опроса:</h2>
        <div class="add-poll-type__list">
          <div v-for="(item, index) in pollTypeList" :key="index">
            <v-btn
              class="add-poll-type__item"
              :class="{'add-poll-type__item_active' : pollTypeActive === index}"
              @click="setPollType(item.type, index)"
              border
              rounded
            >{{ item.value }}</v-btn>
          </div>
        </div>
      </section>
      <v-form-layout :bottomLine="false" class="add-poll__form-layout">
        <div class="add-poll-wrap">
          <section class="add-poll-header">
            <h2 class="add-poll-header__title">{{pollTypeList[pollTypeActive].value}}</h2>
            <div class="add-poll-header__wrap">
              <div class="add-poll-header__uploads">
                <!-- <upload
                  :height="'14em'"
                  @getFiles="getImage"
                  label="загрузить картинку"
                  :width="'14em'"
                  class="mr-3"
                ></upload>-->
                <div class="add-poll-header__croppa-wrap">
                  <croppa
                    class="add-poll-header__croppa"
                    v-model="myCroppaImage"
                    :removeButtonColor="'#00b900'"
                    placeholder="ЗАГРУЗИТЬ ФОТО"
                    :placeholder-font-size="8"
                    :disabled="false"
                    :prevent-white-space="false"
                    :show-remove-button="true"
                    @file-choose="handleCroppaFileChoose"
                    @image-remove="handleImageRemove"
                    @zoom="handleCroppaZoom"
                    :width="800"
                    :height="500"
                  ></croppa>
                  <!--
                    @file-size-exceed="handleCroppaFileSizeExceed"
                    @file-type-mismatch="handleCroppaFileTypeMismatch 
                    @image-remove="handleImageRemove"
                  @move="handleCroppaMove"-->
                </div>
                <div class="add-poll-header__uploads-video">
                  <div style="width: 49%">
                    <upload
                      :disabled="disFile"
                      label="загрузить видео"
                      :height="'5rem'"
                      :width="'100%'"
                      @getFiles="getVideo"
                    ></upload>
                  </div>
                  <input
                    placeholder="Или добавьте ссылку на видео"
                    class="add-poll-header__input-video"
                    type="text"
                    @input="pollVideoUrl($event)"
                    :disabled="disUrl"
                  />
                </div>
              </div>
              <!-- v-if="uploadedVideo" -->
              <div class="add-poll-header__player-wrap">
                <video
                  class="add-poll-header__player"
                  v-if="uploadedVideo.src"
                  controls
                  :src="uploadedVideo.src"
                ></video>
                <vue-plyr v-if="videoURL" class="add-poll-header__player">
                  <div class="plyr__video-embed">
                    <iframe
                      class="plyr__iframe"
                      :src="videoUrl || ''"
                      allowfullscreen
                      allowtransparency
                      allow="autoplay"
                    ></iframe>
                  </div>
                  <!-- :src="'https://player.vimeo.com/video/76979871?loop=false&byline=false&portrait=false&title=false&speed=true&transparent=0&gesture=media'" -->
                </vue-plyr>
              </div>
              <div class="add-poll-header__info">
                <p
                  class="add-poll-header__text"
                >Введите загаловок {{pollTypeList[pollTypeActive].type !== 'questioned' ? '(он же является вопросом)' : ''}}</p>
                <input
                  class="add-poll-header__input-title"
                  type="text"
                  :value="GET_NEW_POLL['title']"
                  @input="SET_NEW_POLL_DATA({field: 'title', value: $event.target.value})"
                />
                <p class="add-poll-header__text">Введите описание</p>
                <vEditor
                  :width="'100%'"
                  :height="'12rem'"
                  :editorData="''"
                  @input="SET_NEW_POLL_DATA({field: 'description', value: $event})"
                />
              </div>
            </div>
          </section>
          <section
            class="add-poll-answers"
            v-if="pollTypeList[pollTypeActive].type !== 'stars' && 
              pollTypeList[pollTypeActive].type !== 'text'"
          >
            <div
              class="add-poll-questions"
              v-for="(question, index) in GET_NEW_POLL_QUESTIONS"
              :key="index"
            >
              <div v-if="pollTypeList[pollTypeActive].type === 'questioned'">
                <div class="d-flex justify-content-between">
                  <p
                    v-if="pollTypeList[pollTypeActive].type!=='text' && pollTypeList[pollTypeActive].type!=='stars'"
                  >Введите вопрос:</p>
                  <!-- <div class="add-poll-questions__cancel-wrapper" @click="removeQuestion(index)"> -->
                  <!-- v-if="pollTypeList[pollTypeActive].type === 'questioned'" -->
                  <!-- <iconCancel class="icon-cancel add-poll-questions__cancel"></iconCancel> -->
                  <!-- </div> -->
                </div>
                <div class="d-flex align-items-center">
                  <input
                    :value="GET_NEW_POLL_QUESTIONS[index].title"
                    @input="SET_NEW_POLL_DATA_QUESTION({ questionIndex: index, field: 'title', value: $event.target.value })"
                    class="add-poll-questions__title"
                    type="text"
                  />
                  <v-select
                    :options="questionTypeList.map(item => item.value)"
                    :searchable="true"
                    :multiple="false"
                    @input="setQuestionType($event, index)"
                    class="ml-5"
                  ></v-select>
                </div>
              </div>
              <p
                v-if="GET_NEW_POLL_QUESTIONS[index].type !== 'text' && GET_NEW_POLL_QUESTIONS[index].type !== 'stars'"
              >Введите варианты ответов:</p>
              <add-answers-list
                :type="GET_NEW_POLL_QUESTIONS[index].type"
                :answersList="GET_NEW_POLL_VARIANTS[index]"
                :questionIndex="index"
              />
              <!-- @input="inputAnswer(index)" -->
            </div>
            <v-btn
              @click="SET_NEW_POLL_QUESTION"
              class="add-poll-questions__button"
              rounded
              border
              v-if="pollTypeList[pollTypeActive].type === 'questioned'"
            >добавить вопрос</v-btn>
          </section>
          <section v-if="pollTypeList[pollTypeActive].type === 'target'" class="add-poll-target">
            <p>Данные таргет опроса</p>
            <accordion>
              <template v-slot:header>Личные данные</template>
              <v-select
                :style="'z-index: 100'"
                :options="languages"
                :searchable="true"
                :multiple="false"
              ></v-select>
              <!-- <v-select :options="languages" :searchable="true" :multiple="false"></v-select> -->
              <v-select :options="languages" :searchable="true" :multiple="false"></v-select>
              <v-select
                :style="'z-index: 100'"
                :options="languages"
                :searchable="true"
                :multiple="false"
              ></v-select>
            </accordion>
            <accordion>
              <template v-slot:header>Семейное положение</template>
              <v-select
                :style="'z-index: 100'"
                :options="languages"
                :searchable="true"
                :multiple="false"
              ></v-select>
              <!-- <v-select :options="languages" :searchable="true" :multiple="false"></v-select> -->
              <v-select :options="languages" :searchable="true" :multiple="false"></v-select>
              <v-select
                :style="'z-index: 100'"
                :options="languages"
                :searchable="true"
                :multiple="false"
              ></v-select>
            </accordion>
            <accordion>
              <template v-slot:header>Образование и работа</template>
              <v-select
                :style="'z-index: 100'"
                :options="languages"
                :searchable="true"
                :multiple="false"
              ></v-select>
              <!-- <v-select :options="languages" :searchable="true" :multiple="false"></v-select> -->
              <v-select :options="languages" :searchable="true" :multiple="false"></v-select>
              <v-select
                :style="'z-index: 100'"
                :options="languages"
                :searchable="true"
                :multiple="false"
              ></v-select>
            </accordion>
          </section>
          <section class="add-poll-options">
            <div class="add-poll-options__item">
              <p class="add-poll-options__title">1. Это приватный опрос:</p>
              <ToggleButton @input="SET_NEW_POLL_DATA({field: 'isPrivate', value: $event})" />
            </div>
            <div class="add-poll-options__item">
              <p
                class="add-poll-options__title"
              >2. Могут ли голосовать неавторизованные пользователи</p>
              <ToggleButton @input="SET_NEW_POLL_DATA({field: 'isOpen', value: $event})" />
            </div>
            <div class="add-poll-options__item">
              <p class="add-poll-options__title">3. Комментирование:</p>
              <ToggleButton @input="SET_NEW_POLL_DATA({field: 'canComment', value: $event})" />
            </div>
            <div class="add-poll-options__item add-poll-options__language">
              <p class="add-poll-options__title">4. Укажите язык опроса:</p>
              <v-select :options="languages" :searchable="true" :multiple="false"></v-select>
            </div>
          </section>
          <section class="add-poll-category">
            <p class="add-poll-category__title">Выберите категорию:</p>
            <v-select
              :options="GET_CATEGORY_LIST.map(item => item.title)"
              :searchable="true"
              :multiple="false"
              @input="categorySet($event)"
              :placeholder="'Категории'"
            ></v-select>
          </section>
          <section class="add-poll-tags">
            <v-tags />
          </section>
          <section class="add-poll-date">
            <datePicker @input="SET_NEW_POLL_DATA({field: 'endedAt', value: new Date($event)})" />
          </section>
          <v-btn class="add-poll__button" @click="publishPoll" border>
            опубликовать
            <iconArrow class="ml-3" />
          </v-btn>
        </div>
      </v-form-layout>
    </detailed-layout>
  </div>
</template>

<script>
if (process.browser) {
  var { ToggleButton } = require('vue-js-toggle-button')
}
if (process.browser) {
  var { VuePlyr } = require('vue-plyr')
}
import iconCancel from '@/components/icons/iconCancel'
import detailedLayout from '@/components/layouts/detailedLayout.vue'
import vFormLayout from '@/components/forms/vFormLayout.vue'
import upload from '@/components/inputs/upload'
import vEditor from '@/components/inputs/vEditor.vue'
import addAnswersList from '@/components/addAnswersList/addAnswersList.vue'
import datePicker from '@/components/inputs/datePicker.vue'
import vTags from '@/components/tags/vTags.vue'
import vSelect from 'vue-select'
import iconArrow from '@/components/icons/iconArrow.vue'
import vCroppa from '@/components/inputs/vCroppa.vue'
import accordion from '@/components/shared/accordion.vue'
import 'vue-plyr/dist/vue-plyr.css'

import { mapGetters, mapMutations, mapActions } from 'vuex'

import '@/assets/css/vSelect.scss'

export default {
  components: {
    detailedLayout,
    vFormLayout,
    upload,
    vEditor,
    addAnswersList,
    ToggleButton,
    datePicker,
    vTags,
    vSelect,
    iconArrow,
    iconCancel,
    vCroppa,
    VuePlyr,
    accordion
  },
  data() {
    return {
      pollTypeList: [
        { value: 'Одиночный выбор', type: 'simple' },
        { value: 'Множественный выбор', type: 'multiply' },
        { value: 'Рейтинг', type: 'stars' },
        { value: 'Текстовый опрос', type: 'text' },
        { value: 'Опрос с картинками', type: 'image' },
        { value: 'Видео опрос', type: 'video' },
        { value: 'Анкетированный опрос', type: 'questioned' },
        { value: 'Таргетированный опрос', type: 'target' }
      ],
      questionTypeList: [
        { value: 'одиночный выбор', type: 'simple' },
        { value: 'множественный выбор', type: 'multiply' },
        { value: 'рейтинг', type: 'stars' },
        { value: 'ответ-текстовый', type: 'text' },
        { value: 'ответ-картинки', type: 'image' },
        { value: 'ответ-видео', type: 'video' }
      ],
      pollTypeActive: 0,
      languages: ['Русский', 'Казахский', 'Английский'],
      category: ['Общество', 'Экономика', 'Животные'],
      disFile: false,
      disUrl: false,
      myCroppaImage: {},
      videoUrl: ''
    }
  },
  methods: {
    ...mapMutations({
      SET_NEW_POLL_TYPE: 'polls/SET_NEW_POLL_TYPE',
      SET_NEW_POLL_DATA: 'polls/SET_NEW_POLL_DATA',
      SET_NEW_POLL_QUESTION: 'polls/SET_NEW_POLL_QUESTION',
      SET_NEW_POLL_DATA_QUESTION: 'polls/SET_NEW_POLL_DATA_QUESTION',
      SET_NEW_POLL_DATA_VARIANT: 'polls/SET_NEW_POLL_DATA_VARIANT',
      REMOVE_NEW_POLL_DATA_QUESTION: 'polls/REMOVE_NEW_POLL_DATA_QUESTION'
    }),

    ...mapActions({
      ADD_POLL: 'polls/ADD_POLL',
      ADD_FILE: 'polls/ADD_FILE',
      ADD_FILE_URL: 'polls/ADD_FILE_URL'
    }),

    setPollType(value, index) {
      this.pollTypeActive = index
      this.SET_NEW_POLL_DATA({ field: 'type', value: value })
      if (value !== 'questioned' && value !== 'target') {
        let question = this.questionTypeList.find(item => item.type === value)
        console.log('question: ', question)
        this.setQuestionType(question.value, 0)
      }
    },

    setQuestionType(value, index) {
      let type = this.questionTypeList.find(item => item.value == value).type
      console.log('№ ' + index + ' questiontype: ' + value + ' - ', type)
      this.SET_NEW_POLL_DATA_QUESTION({
        questionIndex: index,
        field: 'type',
        value: type
      })
    },

    categorySet(e) {
      let categoryId = this.GET_CATEGORY_LIST.find(item => item.title === e).id
      // console.log('categoryId: ', typeof categoryId)
      this.SET_NEW_POLL_DATA({ field: 'categoryId', value: categoryId })
    },

    removeQuestion(index) {
      this.REMOVE_NEW_POLL_DATA_QUESTION({
        questionIndex: index
      })
    },

    // image preview add
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

    async handleCroppaZoom(e) {
      let imageData = this.myCroppaImage
        .getContext()
        .canvas.toDataURL('image/png')
      console.log('croppa resize imageData: ', imageData)
      let file = await this.dataURLtoFile(
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
      this.SET_NEW_POLL_DATA({ field: 'preview', value: formdata })
    },
    // image preview add end

    // video upload
    readFileAsync(file) {
      return new Promise((resolve, reject) => {
        let reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = () => resolve(reader.result)
        reader.onerror = error => reject(error)
      })
    },

    async toBase64(file) {
      try {
        let base64 = await this.readFileAsync(file)
        console.log(base64)
        return base64
      } catch (err) {
        console.log(err)
      }
    },

    async pollVideoUrl(e) {
      try {
        let value = e.target.value
        value ? (this.disFile = true) : (this.disFile = false)
        console.log('e: ', value)
        let host = await this.hostType(value)
        // let hostValidation = ?
        let id = await this.hostVideoId({ host: host, src: value })
        let hostPlayer = await this.hostPlayer({ host: host, id: id })
        this.videoUrl = hostPlayer
        console.log('hostPlayer: ', hostPlayer)
        // https://www.youtube.com/watch?v=Of0S_6U9T8g
        // https://player.vimeo.com/video/76979871?loop=false&byline=false&portrait=false&title=false&speed=true&transparent=0&gesture=media'
        // https://www.youtube.com/embed/tzArj5VDTsc?iv_load_policy=3&modestbranding=1&playsinline=1&showinfo=0&rel=0&enablejsapi=1'
        this.SET_NEW_POLL_DATA({ field: 'videoUrl', value: value })
      } catch (error) {
        console.log(error)
      }
    },

    hostType(value) {
      let regYou = /youtube.com/i
      let regVim = /vimeo.com/i
      let host = regYou.test(value)
        ? 'youtube'
        : regVim.test(value)
        ? 'vimeo'
        : 'false'
      return host
    },

    hostVideoId(data) {
      let { host, src } = data
      let id
      if (host === 'youtube') {
        id = src.split('=')[1]
      }
      if (host === 'vimeo') {
        id = src.split('vimeo.com/')[1]
      }
      console.log('src: ', id)
      return id
    },

    hostPlayer(data) {
      let { host, id } = data
      let player
      if (host === 'youtube') {
        player = `https://www.youtube.com/embed/${id}?iv_load_policy=3&modestbranding=1&playsinline=1&showinfo=0&rel=0&enablejsapi=1`
      }
      if (host === 'vimeo') {
        player = `https://player.vimeo.com/video/${id}?loop=false&byline=false&portrait=false&title=false&speed=true&transparent=0&gesture=media`
      }
      return player
    },

    async getVideo(e) {
      await this.getFiles(e, 'video')
    },

    async getFiles(e, type) {
      try {
        e.length ? (this.disUrl = true) : (this.disUrl = false)
        let file = e.file
        let previewSRC = await this.toBase64(file)
        this.SET_NEW_POLL_DATA({
          field: 'video',
          value: { file: file, src: previewSRC }
        })
      } catch (error) {
        console.log(error)
      }
    },

    async publishPoll() {
      this.SET_NEW_POLL_DATA({
        field: 'startedAt',
        value: new Date()
      })
      this.SET_NEW_POLL_DATA({ field: 'authorId', value: this.GET_USER['id'] })
      let pollId = await this.ADD_POLL()
      // console.log('pollId', pollId )
      if (!!pollId) this.$navigate(`/polls/${pollId.data.data.id}`)
      // localStorage.removeItem('vuex')
    }
  },

  computed: {
    ...mapGetters({
      GET_NEW_POLL: 'polls/GET_NEW_POLL',
      GET_USER: 'auth/GET_USER',
      GET_NEW_POLL_QUESTIONS: 'polls/GET_NEW_POLL_QUESTIONS',
      GET_NEW_POLL_VARIANTS: 'polls/GET_NEW_POLL_VARIANTS',
      GET_CATEGORY_LIST: 'polls/GET_CATEGORY_LIST'
    }),

    uploadedVideo() {
      let file = this.GET_NEW_POLL.video
      return file
    },

    videoURL() {
      let src = this.GET_NEW_POLL.videoUrl
      console.log(src)
      return src
    }
  },
  async fetch({ store }) {
    await store.dispatch('polls/FETCH_CATEGORY')
  }
}
</script>

<style lang="scss" scoped>
.add-poll {
  background-image: url('~assets/img/registration__bg.png');
  background-size: cover;
  background-repeat: no-repeat;
  &-type {
    width: 80%;
    margin: 1rem auto;
    &__title {
      margin: 0;
      color: black;
      font-family: 'times new roman psmt';
    }
    &__list {
      display: flex;
      flex-wrap: wrap;
    }
    &__item {
      text-transform: uppercase;
      font-size: 0.8rem;
      font-weight: 700;
      margin-left: 1rem;
      margin-top: 1rem;
      padding-top: 0.6rem;
      cursor: pointer;
      &:hover {
        border-color: $base-color;
        background-color: $base-color;
        color: white;
      }
      &_active {
        border-color: $base-color;
        background-color: $base-color;
        color: white;
      }
    }
  }
  &__form-layout {
    width: 80%;
    margin-bottom: 5rem;
  }
  &-header {
    border-bottom: 1px solid $border-color;
    &__title {
      margin: 0;
      margin-bottom: 1rem;
      color: black;
      font-family: 'times new roman psmt';
    }
    &__uploads {
      display: flex;
      align-items: flex-start;
      flex-direction: column;
      width: 100%;
      margin-bottom: 1rem;
    }
    &__wrap {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }
    &__croppa-wrap {
      width: 100%;
      padding: 1rem 25%;
      height: 20rem;
    }
    &__croppa {
      height: 100%;
      width: 100%;
    }
    &__uploads-video {
      width: 100%;
      padding-right: 25%;
      padding-left: 25%;
      padding-top: 1rem;
      display: flex;
      justify-content: space-between;
    }
    &__input-video {
      height: 5rem;
      width: 49%;
      outline: none;
      padding: 0 1rem;
      border-radius: 0.5rem;
      color: $base-text-color;
      font-family: 'HelveticaNeue-Roman';
      font-style: italic;
      font-size: 1rem;
    }
    &__player-wrap {
      width: 100%;
      padding-right: 25%;
      padding-left: 25%;
      padding-bottom: 2rem;
    }
    &__player {
      width: 100%;
      height: 100%;
    }
    &__info {
      width: 50%;
    }
    &__input-title {
      height: 3rem;
      width: 100%;
      border-radius: 10px;
      outline: none;
      padding: 0 0.5rem;
      margin-bottom: 1rem;
      color: $base-text-color;
      font-family: 'HelveticaNeue-Roman';
      font-size: 1rem;
    }
    &__text {
      margin: 0;
      padding-bottom: 1rem;
    }
  }
  &-answers {
    padding: 1rem 0;
    border-bottom: 1px solid $border-color;
  }
  &-target {
    padding-top: 1rem;
    border-top: 1px solid $border-color;
  }
  &-questions {
    padding-bottom: 1rem;
    &__title {
      border: 1px solid $border-color;
      border-radius: 2rem;
      padding: 0.7rem 0.9rem;
      position: relative;
      line-height: 1;
      width: 100%;
      &:focus {
        outline: none;
      }
    }
    &__cancel-wrapper {
      padding: 0.5rem 0;
      margin-right: 0.5rem;
      line-height: 1;
      position: relative;
      width: 1.5rem;
    }
    &__cancel {
      cursor: pointer;
    }
    &__button {
      margin: 1rem 0;
    }
  }
  &-options {
    padding: 1rem 0;
    border-bottom: 1px solid $border-color;
    display: flex;
    justify-content: space-between;
    &__item {
      width: 20%;
      min-height: 5rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    &__title {
      font-size: 0.8rem;
    }
    &__language {
      width: 30%;
    }
  }
  &-category {
    padding: 1rem 0;
    padding-bottom: 2rem;
    &__title {
      font-size: 0.8rem;
    }
    border-bottom: 1px solid $border-color;
  }
  &-date {
    padding-bottom: 1rem;
    border-bottom: 1px solid $border-color;
  }
  &__button {
    margin-top: 2rem;
    margin-left: auto;
    text-transform: uppercase;
    font-size: 0.8rem;
    border-color: $base-text-color;
    &:hover {
      border-color: $base-color;
    }
  }
}
</style>
<style>
.add-poll .filepond--drop-label {
  background-color: #e2e2e2;
}
.add-poll-options .v-select .vs__dropdown-toggle,
.add-poll-select .v-select .vs__dropdown-toggle {
  height: 2rem;
}
.add-poll-options .v-select,
.add-poll-select .v-select {
  padding: 0.2rem 0;
}
.add-poll-date .vs__dropdown-menu {
  height: 7rem;
}
.add-poll-answers .v-select .vs__selected {
  font-size: 0.9rem;
  text-transform: lowercase;
}
.add-poll-answers .vs__actions .vs__clear {
  display: none;
}
.add-poll-category .v-select {
  max-width: 17rem;
}
.add-poll-category .vs__actions .vs__clear {
  display: none;
}
.add-poll-category .v-select .vs__selected {
  height: 2.3rem;
  overflow-y: scroll;
  text-transform: lowercase;
}
.add-poll-header__croppa canvas {
  width: 100% !important;
  height: 100% !important;
}
.plyr__iframe {
  width: 100%;
  min-height: 20rem;
}
</style>
