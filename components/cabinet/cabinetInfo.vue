<template>
  <div class="cabinet-info">
    <div class="cabinet-info__avatar">
      <div class="cabinet-info__green"></div>
      <!-- <img class="cabinet-info__img" src="~assets/img/profile__image.png" alt /> -->
      <upload class="cabinet-info__img" :height="'100%'" :width="'100%'" :label="'загрузить фото'" />
    </div>
    <div class="cabinet-info__content">
      <div class="cabinet-info__header">
        <div class="cabinet-info__name">{{ cabinetInfo.name }}</div>
        <div class="cabinet-info__rating">
          <no-ssr>
            <star-rating
              v-model="cabinetInfo.rating"
              inactive-color="#fff"
              active-color="#00b900"
              :star-size="18"
              :padding="1"
              read-only
              :show-rating="false"
            ></star-rating>
          </no-ssr>
        </div>
        <div class="cabinet-info__category-wrap">
          <div
            class="cabinet-info__category"
            v-for="(item, index) in cabinetInfo.category"
            :key="index"
          >{{ item }}</div>
        </div>
      </div>
      <div class="cabinet-info__main">
        <div class="cabinet-info__personal-wrap">
          <div class="cabinet-info__personal cabinet-info__personal_coin">
            <span>v-coin</span>
            <div class="cabinet-info__coin">{{ cabinetInfo.coins }}</div>
          </div>
          <div class="cabinet-info__personal">
            <span class="cabinet-info__label">Телефон:</span>
            <div class="cabinet-info__tel">{{ cabinetInfo.tel }}</div>
          </div>
          <div class="cabinet-info__personal">
            <span class="cabinet-info__label">E-mail:</span>
            <div class="cabinet-info__email">{{ cabinetInfo.email }}</div>
          </div>
        </div>
        <div class="cabinet-info__item-wrap">
          <div
            class="cabinet-info__item"
            @click="$navigate('/cabinet/mypolls')"
          >{{ cabinetInfo.polls }} Опросов</div>
          <div
            class="cabinet-info__item"
            @click="$navigate('/cabinet/myratings')"
          >{{ cabinetInfo.ratings }} Рейтингов</div>
          <div class="cabinet-info__item">{{ cabinetInfo.subscribers }} Подписчиков</div>
          <div class="cabinet-info__item">{{ cabinetInfo.subscriptions}} Подписок</div>
          <div class="cabinet-info__item">{{ cabinetInfo.reposts }} Репостов</div>
          <div class="cabinet-info__item">{{ cabinetInfo.pollsAnswers }} Ответов получили</div>
          <div class="cabinet-info__item">{{ cabinetInfo.myAnswers }} Ответов дали</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import upload from '@/components/inputs/upload.vue'
import StarRating from 'vue-star-rating'

export default {
  components: {
    upload,
    StarRating
  },
  data() {
    return {
      cabinetInfo: {
        name: 'Иванов Иван',
        rating: 4,
        category: ['общество', 'персона', 'экономика'],
        coins: 100,
        tel: '+7 705 123 12 12',
        email: 'ivanovivan@mail.com',
        polls: 5,
        ratings: 6,
        subscribers: 10,
        subscriptions: 5,
        reposts: 26,
        pollsAnswers: 25000,
        myAnswers: 200
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.cabinet-info {
  display: flex;
  justify-content: space-between;
  padding: 1rem 0;
  &__avatar {
    position: relative;
    min-width: 16rem;
    min-height: 12rem;
  }
  &__green {
    width: 95%;
    height: 95%;
    border: 5px solid $base-color;
  }
  &__img {
    width: 95%;
    height: 95%;
    position: absolute;
    bottom: 0;
    right: 0;
    background-color: gray;
    border: 1px solid gray;
  }
  &__content {
    width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-bottom: 1px solid $border-color;
  }
  &__header {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding-bottom: 1rem;
    position: relative;
    &:after {
      content: '';
      width: 100%;
      height: 2px;
      background-color: $base-color;
      position: absolute;
      bottom: 0;
    }
  }
  &__name {
    display: block;
    font-size: 1.5rem;
    font-family: 'times new roman psmt';
    color: $third-text-color;
    text-transform: uppercase;
  }
  &__rating {
    padding-left: 2rem;
    margin-right: auto;
    display: flex;
    align-items: center;
  }
  &__category-wrap {
    display: flex;
  }
  &__category {
    padding: 0.3rem 1rem;
    margin-left: 0.5rem;
    border: 1px solid $base-text-color;
    color: white;
    background-color: $base-text-color;
  }
  &__main {
    padding-top: 0.5rem;
    display: flex;
    justify-content: space-between;
  }
  &__personal-wrap {
    display: flex;
    flex-direction: column;
    width: 40%;
    padding-top: 0.5rem;
  }
  &__personal {
    display: flex;
    align-items: center;
    padding-bottom: 0.5rem;
    &_coin {
      width: fit-content;
      text-transform: uppercase;
      font-weight: 600;
      padding-bottom: 2rem;
    }
  }
  &__label {
    width: 5rem;
  }
  &__coin {
    padding-left: 0.5rem;
  }
  &__tel {
    border: 1px solid $border-color;
    border-radius: 2rem;
    color: $third-text-color;
    width: 12rem;
    padding: 0.5rem 1rem;
    line-height: 1.2;
  }
  &__email {
    border: 1px solid $border-color;
    border-radius: 2rem;
    color: $third-text-color;
    width: 12rem;
    padding: 0.5rem 1rem;
    line-height: 1.2;
  }
  &__item-wrap {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    flex-wrap: wrap;
    margin-left: auto;
    width: 27rem;
    height: 11rem;
  }
  &__item {
    width: 13rem;
    height: auto;
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
    border: 1px solid $base-text-color;
    cursor: pointer;
  }
}
.review {
  margin: 0 3rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 30rem;
  &__title {
    font-size: 1.5rem;
    color: $third-text-color;
  }
  &__rating {
    padding-bottom: 2rem;
  }
  &__answer {
    width: 100%;
    padding-top: 1rem;
    border-top: 1px solid $border-color;
  }
  &__list {
    overflow-y: scroll;
    height: 12rem;
    width: 100%;
  }
  &__comments {
    border-top: 1px solid $border-color;
    padding-top: 1rem;
    width: 100%;
  }
}
</style>