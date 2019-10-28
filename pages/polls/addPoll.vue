<template>
  <div class="add-poll">
    <detailed-layout :title="'Создание опрос'">
      <section class="add-poll-type">
        <h2 class="add-poll-type__title">Выберите тип опроса:</h2>
        <div class="add-poll-type__list">
          <div
            class="add-poll-type__item"
            v-for="(item, index) in pollTypeList"
            :key="index"
          >{{ item.value }}</div>
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
                  v-model="pollTitle"
                  type="text"
                  @input="inputPollData(field, pollTitle)"
                />
                <p class="add-poll-header__text">Введите описание</p>
                <vEditor :width="'100%'" :height="'12rem'" :editorData="''" @input="inputEditor" />
              </div>
            </div>
          </section>
          <section class="add-poll-answers">
            <p>Введите варианты ответов:</p>
            <add-answers-list :answersList.sync="addAnswerslist" />
          </section>
          <section class="add-poll-options">
            <div class="add-poll-options__item">
              <p class="add-poll-options__title">1. Это приватный опрос:</p>
              <ToggleButton />
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
            <v-select :options="category" :searchable="true" :no-drop="false" :multiple="false"></v-select>
          </section>
          <section class="add-poll-tags">
            <v-tags />
          </section>
          <section class="add-poll-date">
            <datePicker />
          </section>
          <v-btn class="add-poll__button" @click="ADD_POLL" border>
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

import { mapMutations, mapActions } from 'vuex'

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
        { value: 'Одиночный выбор' },
        { value: 'Множественный выбор' },
        { value: 'рейтинг' },
        { value: 'текстовый опрос' },
        { value: 'анкетированный опрос' },
        { value: 'опрос с картинками' },
        { value: 'видео опрос' },
        { value: 'таргетированный опрос' }
      ],
      languages: ['Казахский', 'Русский', 'Английский'],
      category: ['Общество', 'Экономика', 'Животные'],
      addAnswerslist: [
        {
          value: ''
        }
      ],
      pollTitle: ''
    }
  },
  methods: {
    ...mapMutations({
      SET_POLL_DATA: 'poll/SET_POLL_DATA'
    }),
    ...mapActions({
      ADD_POLL: 'polls/ADD_POLL'
    }),
    inputEditor(value) {
      console.log(value)
      inputPollData('description', value)
    },
    inputPollData(field, data) {
      let pollData = {
        field: field,
        value: data
      }
      SET_POLL_DATA(pollData)
    }
  },
  beforeUpdate() {
    localStorage.setItem('newPoll', JSON.stringify(store.state.newPoll))
  },
  mounted() {
    if (localStorage.getItem('newPoll') === null) {
      let newPoll = JSON.parse(localStorage.getItem('newPoll'))
      for (let key in newPoll) {
        SET_POLL_DATA({ field: key, value: newPoll[key] })
      }
    }
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
      border: 1px solid $base-text-color;
      border-radius: 37px;
      padding: 0.5rem 1rem;
      margin-top: 1rem;
      margin-right: 2rem;
      text-transform: uppercase;
      font-size: 0.8rem;
      font-weight: 700;
      cursor: pointer;
      &:hover {
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
</style>
