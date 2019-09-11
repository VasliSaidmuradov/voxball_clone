<template>
  <div class="poll">
    <base-layout 
      :title="'Участвуйте в on-line опросах от Voxball.'" 
      :text="'Активно отвечайте на вопросы, выражайте свое мнение и зарабатывайте на этом деньги'">
      <section class="poll-top">
        <poll-list :pollArr="pollsArray" />
      </section>
      <section class="poll-main">
        <div class="poll-main__header">
          <h2 class="poll-main__title">Все опросы</h2> 
          <div class="poll-main__options">
            <v-select 
              class="poll-main__select"
              :options="options"
              :searchable="true"
              :no-drop="false"
              :multiple="false"
              placeholder="Популярное"
            >
            </v-select>
            <v-select 
              class="poll-main__select"
              :options="options"
              :searchable="true"
              :no-drop="false"
              :multiple="false"
              placeholder="Категории"
            >
          </v-select>
          </div>
        </div>
        <div class="poll-main__content">
          <poll-list :pollArr="pollsArray" />
          <poll-list :pollArr="pollsArray" />
        </div>
        <div class="poll-main__footer">
          <v-btn class="poll-main__button" border>
            <nuxt-link class="poll-main__link" to="/">
              <span>Загрузить еще</span>
              <icon-base icon-name="arrow" class="arrow">
                <icon-arrow />
              </icon-base>
            </nuxt-link>
          </v-btn>
        </div>
      </section>
    </base-layout>
  </div>
</template>

<script>
import baseLayout from '@/components/layouts/baseLayout.vue'
import pollItem from '@/components/polls/pollList/pollItem.vue'
import pollList from '@/components/polls/pollList/pollList.vue'
import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css';
import iconArrow from '@/components/icons/iconArrow.vue'
export default {
  components: {
    baseLayout,
    pollList,
    vSelect,
    iconArrow,
  },
  data() {
    return {
      options: ['Казахстан', 'Россия', 'Китай'],     
      pollsArray: [
        {category: 'Бизнес', video: 'Видео', title: 'хотите ли выполететь в космос?', date:'19.19.2019', views: 345},
        {category: 'Бизнес', video: 'Видео', title: 'хотите ли выполететь в космос?', date:'19.19.2019', views: 345},
        {category: 'Бизнес', video: 'Видео', title: 'хотите ли выполететь в космос?', date:'19.19.2019', views: 345},
        {category: 'Бизнес', video: 'Видео', title: 'хотите ли выполететь в космос?', date:'19.19.2019', views: 345},
        {category: 'Бизнес', video: 'Видео', title: 'хотите ли выполететь в космос?', date:'19.19.2019', views: 345}
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.poll {
  &-top {
    margin: 0 15px;
    margin-top: 2rem;
    &__list {
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      margin: 0 -15px;
      list-style: none;
      padding: 0;
      font-size: 0.8em;
    }
    &__item {
      flex: 0 0 auto;
      margin: 15px;
      margin-bottom: 0;
      width: calc(1 / 5 * 100% - 30px);
    }
  }
  &-main {
    margin: 0 15px;
    margin-top: 3rem;
    &__header {
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }
    &__title {
      display: inline-block;
      text-transform: uppercase;
      width: 20%;
    }
    &__options {
      display: flex;
      align-items: center;
      width: 80%;
      position: relative;
      &:after {
        content: '';
        height: 1px;
        width: 100%;
        background-color: #c2c2c2;
        position: absolute;
        top: 50%;
        left: 0;
        z-index: -1;
      }
    }
    &__select {
      width: 12.5rem;
      margin-right: 1rem;
      background: white;
    }
    &__list {
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      margin: 0 -15px;
      list-style: none;
      padding: 0;
      font-size: 0.8em;
    }
    &__item {
      flex: 0 0 auto;
      margin: 15px;
      margin-bottom: 0;
      width: calc(1 / 5 * 100% - 30px);
    }
    &__footer {
      padding: 2rem;
    }
    &__button {
      border-color: $base-text-color;
      border-radius: 30px;
      width: fit-content;
      margin: 0 auto;
      padding: 0.4rem 1rem 0.2rem;
      &:hover {
        border-color: $base-color;
      }
      &:hover .poll-main__link{
        color: white;
      }
    }
    &__link {
      color: $base-text-color;
      text-decoration: none;
      text-transform: uppercase;
      font-size: 0.9em;
      transition: color 0.3s ease;
    }
  }
}
.arrow {
  margin-bottom: -10px;
  margin-left: 0.5rem;
  height: auto;
}
</style>
<style>
.poll .v-select .vs__dropdown-toggle {
  border-radius: 37px;
  border-color: #d0d0d0;
}
.poll .v-select .vs__open-indicator {
  fill: #c4c4c4;
}
.poll .v-select .vs__search[placeholder] {
  color: #2b454e;
  text-transform: uppercase;
  padding: 0.3rem 0;
  padding-left: 1.5rem;
}
.poll .v-select .vs__selected {
  font-size: 1rem;
  text-transform: uppercase;
  padding: 0.4rem 0 0.2rem;
  padding-left: 1.5rem;
}
</style>