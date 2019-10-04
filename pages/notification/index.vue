<template>
  <div class="notification">
    <detailed-layout :title="'Уведомления'" :back="false">
      <div class="notification-wrap">
        <div class="notification-container container">
          <div class="notification__header">
            <h2 class="notification__title">Новые Уведомления</h2>
            <span class="notification__number">{{ commentsCount }}</span>
            <div class="notification-options">
              <v-select
                class="notification-options__item"
                :options="months"
                :searchable="false"
                :no-drop="false"
                :multiple="false"
                :placeholder="months[0]"
                :maxHeight="'50'"
                :clearable="false"
              ></v-select>
              <v-select
                class="notification-options__item"
                :options="years"
                :searchable="false"
                :no-drop="false"
                :multiple="false"
                :placeholder="years[0]"
                :maxHeight="'50'"
                :clearable="false"
              ></v-select>
            </div>
          </div>
          <div class="notification__main">
            <v-form-layout class="notification-layout" :bottom-line="false">
              <commentsList :commentsList="comments"></commentsList>
              <v-btn class="notification__button" border rounded>
                Загрузить еще
                <icon-arrow class="ml-2" />
              </v-btn>
            </v-form-layout>
          </div>
        </div>
      </div>
    </detailed-layout>
  </div>
</template>

<script>
import detailedLayout from '@/components/layouts/detailedLayout.vue'
import vFormLayout from '@/components/forms/vFormLayout.vue'
import commentsList from '@/components/comments/commentsList/commentsList.vue'
import vSelect from 'vue-select'
import iconArrow from '@/components/icons/iconArrow.vue'

import '@/assets/css/vSelect.scss'

export default {
  components: {
    detailedLayout,
    vFormLayout,
    commentsList,
    vSelect,
    iconArrow
  },
  data() {
    return {
      comments: [
        {
          createdAt: '30.05.2019',
          author: 'Nurbek',
          content: 'commet 1',
          type: 'notification',
          viewed: false
        },
        {
          createdAt: '30.05.2019',
          author: 'Nurbek',
          content: 'commet 2',
          type: 'notification',
          viewed: false
        },
        {
          createdAt: '30.05.2019',
          author: 'Nurbek',
          content: 'commet 3',
          type: 'notification',
          viewed: true
        }
      ],
      months: [
        'Август',
        'Сентябрь',
        'Октябрь',
        'Ноябрь',
        'Декабрь',
        'Январь',
        'Февраль',
        'Март',
        'Апрель',
        'Май',
        'Июнь',
        'Июль'
      ],
      years: [
        '2011',
        '2012',
        '2013',
        '2014',
        '2015',
        '2016',
        '2017',
        '2018',
        '2019'
      ]
    }
  },
  computed: {
    commentsCount() {
      return this.comments.length
    }
  }
}
</script>

<style lang="scss" scoped>
.notification {
  &-wrap {
    background-image: url('~assets/img/registration__bg.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
  &-container {
    width: 66%;
    margin-top: 3rem;
    margin-bottom: 3rem;
  }
  &-layout {
    padding-top: 2rem;
    padding-bottom: 2rem;
  }
  &__header {
    display: flex;
    align-items: center;
    padding-bottom: 2rem;
  }
  &__title {
    color: $third-text-color;
    text-transform: uppercase;
    margin: 0;
    font-size: 1.5rem;
    font-family: 'times new roman psmt';
  }
  &__number {
    padding: 0.2rem 1rem;
    margin: 0 1rem;
    font-size: 0.8rem;
    background-color: $base-color;
    color: white;
  }
  &-options {
    display: flex;
    align-items: center;
    margin-left: 1rem;
    &__item {
      min-width: 12rem;
      margin-left: 1rem;
    }
  }
  &__button {
    margin: 0 auto;
    border-color: $base-text-color;
    &:hover {
      border-color: $base-color;
    }
  }
}
</style>