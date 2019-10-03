<template>
  <div class="jobs-item">
    <v-form-layout class="jobs-item-layout" :bottomLine="false">
      <div class="jobs-item-wrap">
        <div class="jobs-item__header">
          <h3>{{ item.vacancy }}</h3>
        </div>
        <div class="jobs-item__main">
          <div class="pt-2 pb-2">
            Зарплата:
            <span class="jobs-item__salary">{{ item.salary }}</span>
          </div>
          <div class="pt-2 pb-2">
            Город:
            <span class="jobs-item__city">{{ item.city }}</span>
          </div>
          <div class="pt-2 pb-2 jobs-item__responsibility">
            <span>Обязаности:</span>
            <ul class="jobs-item__list">
              <li v-for="(data, index) in item.responsibility" :key="index">{{ data }}</li>
            </ul>
          </div>
        </div>
        <div class="jobs-item__footer">
          <upload file :height="'5rem'" :label="'прикрепите резюме'" />
          <v-btn class="jobs-item__button" border>Отправить</v-btn>
        </div>
      </div>
    </v-form-layout>
  </div>
</template>

<script>
import vFormLayout from '@/components/forms/vFormLayout.vue'
import upload from '@/components/inputs/upload.vue'
export default {
  components: {
    vFormLayout,
    upload
  },
  props: {
    item: Object
  }
}
</script>

<style lang="scss" scoped>
.jobs-item {
  padding-bottom: 1rem;
  &-layout {
    padding-top: 1rem;
    padding-bottom: 0;
    width: 100%;
  }
  &-wrap {
    display: flex;
    flex-direction: column;
  }
  &__header {
    text-transform: uppercase;
    color: $third-text-color;
    padding: 0 2rem;
  }
  &__main {
    display: flex;
    flex-direction: column;
    padding: 0 2rem;
    padding-bottom: 2rem;
  }
  &__salary {
    font-weight: 600;
    color: $third-text-color;
  }
  &__city {
    font-weight: 600;
    color: $third-text-color;
  }
  &__responsibility {
    display: flex;
    color: $third-text-color;
  }
  &__list {
    margin: 0;
    font-weight: 600;
  }
  &__footer {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    color: $base-text-color;
    border-top: 1px solid $border-color;
  }
  &__upload {
    height: 5rem;
  }
  &__button {
    height: 2rem;
    border-color: $base-text-color;
    text-transform: uppercase;
    font-size: 0.8rem;
    font-weight: 600;
    letter-spacing: 2px;
    &:hover {
      background-color: transparent;
      color: $base-text-color;
      border-color: $base-color;
    }
  }
}
</style>