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
              @click="set_poll_type(item.type, index)"
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
                <upload
                  :height="'14em'"
                  @getFiles="getImage"
                  label="загрузить картинку"
                  :width="'14em'"
                  class="mr-3"
                ></upload>
                <div class="add-poll-header__uploads-video">
                  <upload
                    :disabled="disFile"
                    label="загрузить видео"
                    :height="'14em'"
                    :width="'14em'"
                    @getFiles="getVideo"
                  ></upload>
                  <input
                    placeholder="Или добавьте ссылку на видео"
                    class="add-poll-header__input-video"
                    type="text"
                    @input="pollVideoUrl($event)"
                    :disabled="disUrl"
                  />
                </div>
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
                  <p>Введите вопрос:</p>
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
                    :no-drop="false"
                    :multiple="false"
                    @input="setQuestionType($event, index)"
                    class="ml-5"
                  ></v-select>
                </div>
              </div>
              <p>Введите варианты ответов:</p>
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
              <v-select :options="languages" :searchable="true" :no-drop="false" :multiple="false"></v-select>
            </div>
          </section>
          <section class="add-poll-category">
            <p class="add-poll-category__title">Выберите категорию:</p>
            <v-select
              :options="GET_CATEGORY_LIST.map(item => item.title)"
              :searchable="true"
              :no-drop="false"
              :multiple="false"
              @input="categorySet($event)"
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
    iconCancel
  },
  data() {
    return {
      // simple, multiply, video, image, text, stars, questioned, rating, target
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
      languages: ['Казахский', 'Русский', 'Английский'],
      category: ['Общество', 'Экономика', 'Животные'],
      addAnswerslist: [
        {
          value: ''
        }
      ],
      disFile: false,
      disUrl: false
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
    inputAnswer(data, questionIndex) {
      SET_NEW_POLL_DATA_VARIANT({
        questionIndex: questionIndex,
        variantIndex: data.index,
        field: 'title',
        value: data.value
      })
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
    },
    set_poll_type(value, index) {
      this.pollTypeActive = index
      // this.SET_NEW_POLL_TYPE(value)
      if (value === 'image') this.setQuestionType('ответ-картинки', 0)
      else if (value === 'video') this.setQuestionType('ответ-видео', 0)
      else if (value === 'multiply') this.setQuestionType('множественный выбор', 0)
      else if (value === 'stars') {
        this.setQuestionType('рейтинг', 0)
        this.SET_NEW_POLL_DATA_VARIANT({
          questionIndex: 0,
          variantIndex: 0,
          field: 'title',
          value: 'stars'
        })
      } else if (value === 'text') {
        this.setQuestionType('ответ-текстовый', 0)
        this.SET_NEW_POLL_DATA_VARIANT({
          questionIndex: 0,
          variantIndex: 0,
          field: 'title',
          value: 'text'
        })
      } else this.setQuestionType('одиночный выбор', 0)
      this.SET_NEW_POLL_DATA({ field: 'type', value: value })
    },
    categorySet(e) {
      let categoryId = this.GET_CATEGORY_LIST.find(item => item.title === e).id
      // console.log('categoryId: ', typeof categoryId)
      this.SET_NEW_POLL_DATA({ field: 'categoryId', value: categoryId })
    },
    setQuestionType(e, index) {
      let type = this.questionTypeList.find(item => item.value == e).type
      console.log('questiontype: ', e, index, ' ', type)
      this.SET_NEW_POLL_DATA_QUESTION({
        questionIndex: index,
        field: 'type',
        value: type
      })
    },
    removeQuestion(index) {
      this.REMOVE_NEW_POLL_DATA_QUESTION({
        questionIndex: index
      })
    },
    async pollVideoUrl(e) {
      !!e.target.value ? (this.disFile = true) : (this.disFile = false)
      console.log('e: ', e.target.value)
      let id = await this.ADD_FILE_URL(e.target.value)
      if (id !== null) {
        this.SET_NEW_POLL_DATA({ field: 'videoUrl', value: id })
      }
    },
    async getImage(e) {
      await this.getFiles(e, 'preview')
    },
    async getVideo(e) {
      await this.getFiles(e, 'video')
    },
    async getFiles(e, type) {
      !!e.length ? (this.disUrl = true) : (this.disUrl = false)
      let id = await this.ADD_FILE(e)
      console.log('id: ', id)
      if (id !== null) {
        this.SET_NEW_POLL_DATA({ field: type, value: id })
      }
    }
  },
  computed: {
    ...mapGetters({
      GET_NEW_POLL: 'polls/GET_NEW_POLL',
      GET_USER: 'auth/GET_USER',
      GET_NEW_POLL_QUESTIONS: 'polls/GET_NEW_POLL_QUESTIONS',
      GET_NEW_POLL_VARIANTS: 'polls/GET_NEW_POLL_VARIANTS',
      GET_CATEGORY_LIST: 'polls/GET_CATEGORY_LIST'
    })
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
    &__wrap {
      display: flex;
      align-items: flex-start;
    }
    &__uploads {
      display: flex;
      align-items: flex-start;
      width: 50%;
    }
    &__uploads-video {
      position: relative;
    }
    &__input-video {
      height: 2rem;
      width: 100%;
      // border-radius: 37px;
      outline: none;
      padding: 0 1rem;
      margin-top: 1rem;
      color: $base-text-color;
      font-family: 'HelveticaNeue-Roman';
      font-style: italic;
      font-size: 0.8rem;
      position: absolute;
      bottom: 0;
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
  &-questions {
    border-top: 1px solid $border-color;
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
</style>
