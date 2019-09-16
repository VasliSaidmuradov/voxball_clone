<template>
  <div class="competition-info mt-5 mb-5">
    <div class="competition-info__header">
      <div class="competition-info__info">
        <div class="competition-info__info-wrap">
          Срок окончания:
          <span class="competition-info__date">{{ competition.date }}</span>
        </div>
      </div>
      <div class="competition-info__img-wrap">
        <img class="competition-info__img" src="~assets/img/competition-info-image.png" alt />
        <div v-if="competition.complete" class="competition-info__complete">
          <span class="competition-info__icon-complete mr-2">
            <icon-complete />
          </span>
          <span>Завершен</span>
        </div>
      </div>
    </div>
    <div class="competition-info__main">
      <h2 class="competition-info__title">
        {{ competition.title }}
      </h2>
      <div class="competition-info__main-wrap">
        <span class="competition-info__text-name">Описание:</span>
        <p class="competition-info__text">
          {{ competition.description }}
        </p>
      </div>
      <div class="competition-info__main-wrap">
        <span class="competition-info__text-name">Правила:</span>
        <ol class="competition-info__rules">
          <li class="competition-info__rule" v-for="(rule, index) in competition.rules" :key="index">
            {{ rule.text }}
          </li>
        </ol>
      </div>
    </div>
  </div>
</template>

<script>
import iconComplete from '@/components/icons/iconComplete.vue'
export default {
  components: {
    iconComplete
  },
  props: {
    competition: Object
  }
}
</script>

<style lang="scss" scoped>
.competition-info {
  display: flex;
  justify-content: space-between;
  &__header {
    display: flex;
    width: 45%;
    min-height: 13rem;
    position: relative;
  }
  &__info {
    width: 97.4%;
    height: 89.5%;
    border: 0.35rem solid $base-color;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    position: absolute;
    left: 0;
    transition: 0.5s ease;
  }
  &__info-wrap {
    padding-left: 3%;
    height: 2rem;
    display: flex;
    font-size: 0.9em;
    align-items: center;
  }
  &__category {
    background-color: $base-text-color;
    color: #ffffff;
    font-size: 0.6rem;
    font-weight: 500;
    text-align: center;
    width: 46%;
    padding-top: 0.45rem;
    padding-bottom: 0.25rem;
    text-transform: uppercase;
    transition: background-color 0.5s ease;
  }
  &__date {
    margin-left: 0.5rem;
    color: $secondary-text-color;
    font-family: 'HelveticaNeue-Medium'
  }
  &__button {
    color: #ffffff;
    background-color: $base-color;
    padding: 0.4rem 0.5rem;
  }
  &__views {
    margin-left: 1rem;
  }
  &__img-wrap {
    width: 96.2%;
    height: 83.9%;
    position: absolute;
    bottom: 0;
    right: 0;
  }
  &__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  &__complete {
    position: absolute;
    font-size: 0.8rem;
    text-transform: capitalize;
    left: 0;
    bottom: 0;
    padding: 0.8em 1.4em 0.4em;
    color: white;
    background: #009700;
    display: flex;
    align-items: center;
  }
  &__icon-complete {
    width: 0.6rem;
  }
  &__main {
    width: 50%;
    // overflow: hidden;
    // overflow-y: scroll;
    border-bottom: 1px solid $border-color
  }
  &__title {
    width: 70%;
    font-size: 1.5rem;
    font-family: 'times new roman psmt';
    text-transform: uppercase;
    margin: 0;
    padding: 0.4rem 0;
    &:after {
      content: '';
      height: 2px;
      width: 29%;
      background-color: $base-color;
      display: block;
      position: relative;
    }
  }
  &__main-wrap {
    display: flex;
    margin-top: 1rem;
  }
  &__text-name {
    font-family: 'HelveticaNeue-Medium';
    font-size: 0.9em;
    display: inline-block;
    width: 16%;
  }
  &__text {
    margin: 0;
    width: 80%;
    overflow: hidden;
    overflow-y: scroll;
  }
  &__rules {
    margin: 0;
    padding: 0;
    padding-left: 1em;
    width: 80%;
  }
  &__rule {
    margin: 0;
  }
}
::-webkit-scrollbar {
  box-shadow: inset 0 0 4px 1px rgba(0, 0, 0, 0.27);
  width: 7px;
  border-radius: 4px;
}
::-webkit-scrollbar-track {
  background: white;
}
::-webkit-scrollbar-thumb {
  background-color: #dcdcdc;
  border-radius: 4px;
}
::-webkit-scrollbar-thumb:hover {
  background-color: #dcdcdc;
}
</style>