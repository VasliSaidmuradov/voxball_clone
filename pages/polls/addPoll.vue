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
            <h2 class="add-poll-header__title">Одиночный выбор</h2>
            <div class="add-poll-header__wrap">
              <div class="add-poll-header__uploads">
                <upload :height="'14em'" :width="'14em'" class="mr-3"></upload>
                <div>
                  <upload :height="'14em'" :width="'14em'"></upload>
                  <input
                    placeholder="Или добавьте ссылку на видео"
                    class="add-poll-header__input-video"
                    type="text"
                  />
                </div>
              </div>
              <div class="add-poll-header__info">
                <p class="add-poll-header__text">Введите загаловок (он же является вопросом)</p>
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
          <section class="add-poll-answers">
            <div
              class="add-poll-questions"
              v-for="(question, index) in GET_NEW_POLL_QUESTIONS"
              :key="index"
            >
              <p>Введите вопрос:</p>
              <input
                :value="question.title"
                @input="SET_NEW_POLL_DATA_QUESTION({ questionIndex: index, field: 'title', value: $event.target.value })"
                class="add-poll-questions__title"
                type="text"
              />
              <p>Введите варианты ответов:</p>
              <add-answers-list :answersList="GET_NEW_POLL_VARIANTS[index]" :questionIndex="index" />
              <!-- @input="inputAnswer(index)" -->
            </div>
            <v-btn
              @click="SET_NEW_POLL_QUESTION"
              class="add-poll-questions__button"
              rounded
              border
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
              <ToggleButton />
            </div>
            <div class="add-poll-options__item">
              <p class="add-poll-options__title">3. Комментирование:</p>
              <ToggleButton />
            </div>
            <div class="add-poll-options__item add-poll-options__language">
              <p class="add-poll-options__title">4. Укажите язык рейтинга:</p>
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
            <datePicker @input="SET_NEW_POLL_DATA({field: 'endedAt', value: $event})" />
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
    iconArrow
  },
  data() {
    return {
      pollTypeList: [
        { value: 'Одиночный выбор', type: 'simple' },
        { value: 'Множественный выбор', type: 'simple' },
        { value: 'рейтинг', type: 'simple' },
        { value: 'текстовый опрос', type: 'simple' },
        { value: 'анкетированный опрос', type: 'ancket' },
        { value: 'опрос с картинками', type: 'simple' },
        { value: 'видео опрос', type: 'simple' },
        { value: 'таргетированный опрос', type: 'target' }
      ],
      pollTypeActive: false,
      languages: ['Казахский', 'Русский', 'Английский'],
      category: ['Общество', 'Экономика', 'Животные'],
      addAnswerslist: [
        {
          value: ''
        }
      ]
    }
  },
  methods: {
    ...mapMutations({
      SET_NEW_POLL_TYPE: 'polls/SET_NEW_POLL_TYPE',
      SET_NEW_POLL_DATA: 'polls/SET_NEW_POLL_DATA',
      SET_NEW_POLL_QUESTION: 'polls/SET_NEW_POLL_QUESTION',
      SET_NEW_POLL_DATA_QUESTION: 'polls/SET_NEW_POLL_DATA_QUESTION',
      SET_NEW_POLL_DATA_VARIANT: 'polls/SET_NEW_POLL_DATA_VARIANT'
    }),
    ...mapActions({
      ADD_POLL: 'polls/ADD_POLL'
    }),
    inputAnswer(data, questionIndex) {
      SET_NEW_POLL_DATA_VARIANT({
        questionIndex: questionIndex,
        variantIndex: data.index,
        field: 'title',
        value: data.value
      })
    },
    publishPoll() {
      this.SET_NEW_POLL_DATA({
        field: 'startedAt',
        value: new Date()
      })
      this.SET_NEW_POLL_DATA({ field: 'authorId', value: this.GET_USER['id'] })
      this.ADD_POLL()
    },
    set_poll_type(value, index) {
      this.pollTypeActive = index
      this.SET_NEW_POLL_TYPE(value)
    },
    categorySet(e) {
      let categoryId = this.GET_CATEGORY_LIST.find(item => item.title === e).id
      console.log('categoryId: ', typeof categoryId)
      this.SET_NEW_POLL_DATA({ field: 'categoryId', value: categoryId })
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
  &-wrap {
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
    &__input-video {
      height: 2rem;
      width: 100%;
      border-radius: 37px;
      outline: none;
      padding: 0 1rem;
      margin-top: 1rem;
      color: $base-text-color;
      font-family: 'HelveticaNeue-Roman';
      font-style: italic;
      font-size: 0.8rem;
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
    &__title {
    }
  }
  &-questions {
    border-top: 1px solid $border-color;
    padding-bottom: 1rem;
    &__title {
      border: 3px solid $border-color;
      border-radius: 2rem;
      padding: 0.5rem 0.9rem;
      position: relative;
      line-height: 1;
      width: 100%;
      margin-bottom: 0.8rem;
      &:focus {
        outline: none;
      }
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
.add-poll-category .v-select {
  max-width: 17rem;
}
.add-poll-category .vs__actions .vs__clear {
  display: none;
}
.add-poll-category .v-select .vs__selected {
  height: 2.5rem;
  overflow-y: scroll;
}
</style>
