<template>
  <div class="member-item mt-3 mb-3">
    <div class="member-item__wrap">
      <div class="member-item__image-wrap">
        <img class="member-item__image" src="~assets/img/member-image.png" alt="">
      </div>
      <div class="member-item__main">
        <div class="member-item__name">
          {{ data.name }} 
        </div>
        <div class="member-item__competition-name">
          {{ data.title }}
        </div>
      </div>
      <div class="member-item__footer">
        <div class="member-item__votes-wrap">
          Всего голосов:
          <span class="member-item__votes">{{ data.votes }}</span> 
        </div>
        <div>
          <v-btn class="member-item__button" @click="$emit('openItem')">
            <icon-megaphon class="member-item__icon"/>
            <span class="member-item__button-text">Голосовать</span>
          </v-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import iconMegaphon from '@/components/icons/iconMegaphon.vue'
export default {
  components: {
    iconMegaphon
  },
  props: {
    data: Object
  }
}
</script>

<style lang="scss" scoped>
.member-item {
  max-height: 29.5rem;
  max-width: 18rem;
  height: 22.5rem;
  width: 13.5rem;

  &:hover .member-item__name{
    background-color: $base-color;
  }
  &:hover .member-item__button{
    color: $base-color;
  }
  &:hover .member-item__wrap:after {
    background-color: $base-color;
  }

  &__wrap {
    height: calc(100% - 1rem);
    box-shadow: 1px 1px 8px 1px rgba(0, 0, 0, 0.17);
    position: relative;
    &:after {
      content: '';
      display: block;
      height: 0.8rem;
      width: 84%;
      position: absolute;
      bottom: -0.8rem;
      left: 50%;
      transform: translate(-50%);
      background-color: $base-text-color;
      transition: background-color 0.5s ease;
    }
  }
  &__image-wrap {
    height: 62%;
  }
  &__image {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
  &__main {
    display: flex;
    flex-direction: column;
  }
  &__name {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 3rem;
    font-size: 1.125em;
    font-family: 'HelveticaNeue-Medium';
    color: white;
    background-color: $base-text-color;
    transition: background-color 0.5s ease;
  }
  &__competition-name {
    background-image: url('~assets/img/member-item__bg.png');
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 3rem;
    font-size: 1em;
    text-transform: uppercase;
    position: relative;
    &:after{
      content: '';
      position: absolute;
      bottom: 0;
      height: 1px;
      width: 80%;
      margin: 0 auto;
      background-color: $border-color;
    }
  }
  &__footer {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  &__votes-wrap {
    font-size: 0.65em;
  }
  &__votes {
    font-size: 1.3em;
    color: $base-color;
  }
  &__button {
    text-transform: uppercase;
    text-decoration: underline;
    font-size: 0.65em;
    .v-btn__content {
      align-items: flex-end;
    }
  }
  &__icon {
    width: 1.7em;
    margin-right: 0.2rem;
  }
}
</style>