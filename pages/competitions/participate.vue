<template>
  <div class="participate">
    <detailed-layout :title="'Принять участие'">
      <competitionInfo class="mr-4 ml-4" :competition="competitionData" />
      <v-form-layout class="participate__form mt-4 mb-5" :bottomLine="false">
        <section class="participate__header">
          <h2 class="participate__title">Ваша заявка на участие в конкурсе:</h2>
        </section>
        <section class="participate__main">
          <div class="participate__left-block">
            <upload :height="'12rem'" :width="'100%'" :label="label" />
          </div>
          <div class="participate__right-block">
            <label class="participate__label">Имя</label>
            <input class="participate__input" type="text" v-model="participantName" />
            <label class="participate__label">Город</label>
            <input class="participate__input" type="text" v-model="participantCity" />
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
import upload from '@/components/inputs/upload.vue'
import iconArrow from '@/components/icons/iconArrow.vue'

export default {
  components: {
    detailedLayout,
    competitionInfo,
    vFormLayout,
    upload,
    iconArrow
  },
  data() {
    return {
      participantName: '',
      participantCity: '',
      competitionData: {
        title: '«Мое идеальное лето»',
        description:
          'Конкурс фотографий среди зарегистрированных пользователей портала Voxball.',
        date: '01.09.2019',
        rules: [
          { text: 'Сделайте смешное фото на тему «Мое идеальное лето».' },
          { text: 'Загрузите фото на сайт' },
          { text: 'Приглашайте своих друзей проголосовать за Ваше фото' }
        ],
        src: 'src',
        complete: false,
        type: 'photo'
      },
      files: []
    }
  },
  computed: {
    label() {
      return this.competitionData.type == 'video'
        ? 'Загрузить видео'
        : 'Загрузить фото'
    }
  },
  methods: {}
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
    justify-content: center;
    min-width: 30rem;
    height: 12rem;
    background-color: #999;
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
</style>
