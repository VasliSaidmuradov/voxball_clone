<template>
  <div class="profile-info">
    <div class="profile-info__avatar">
      <div class="profile-info__green"></div>
      <img class="profile-info__img" src="~assets/img/profile__image.png" alt />
    </div>
    <div class="profile-info__content">
      <div class="profile-info__header">
        <div class="profile-info__name">{{ profileInfo.name }}</div>
        <div class="profile-info__rating">
          <no-ssr>
            <star-rating
              v-model="profileInfo.rating"
              inactive-color="#fff"
              active-color="#00b900"
              :star-size="18"
              :padding="1"
              read-only
              :show-rating="false"
            ></star-rating>
          </no-ssr>
        </div>
        <v-btn class="profile-info__button" rounded border>подписаться</v-btn>
      </div>
      <div class="profile-info__main">
        <div class="profile-info__item">
          <span class="profile-info__number">{{ profileInfo.pollsnum }}</span>опросов
        </div>
        <div class="profile-info__item">
          <span class="profile-info__number">{{ profileInfo.ratingsnum }}</span>рейтингов
        </div>
        <div class="profile-info__item">
          <span class="profile-info__number">{{ profileInfo.ratingsnum }}</span>подписчиков
        </div>
        <div class="profile-info__item">
          <span class="profile-info__number">{{ profileInfo.subscriptions }}</span>подписок
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import StarRating from 'vue-star-rating'
import iconArrow from '@/components/icons/iconArrow.vue'
export default {
  components: {
    StarRating,
    iconArrow
  },
  props: {
    profileInfo: Object
  }
}
</script>

<style lang="scss" scoped>
.profile-info {
  display: flex;
  justify-content: space-between;
  margin: 0 20%;
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
  }
  &__content {
    width: 65%;
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
    display: flex;
    align-items: center;
  }
  &__button {
    margin-left: auto;
    border-color: $base-text-color;
    &:hover {
      border-color: $base-color;
      background-color: white;
      color: $base-color;
    }
  }
  &__main {
    padding: 1rem;
    padding-top: 2rem;
    display: flex;
    justify-content: space-between;
  }
  &__item {
  }
  &__number {
    font-size: 1.5rem;
    padding-right: 0.2rem;
  }
}
</style>