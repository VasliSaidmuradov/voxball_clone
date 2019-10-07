<template>
  <div class="draw-item">
    <div class="draw-item__img-wrap">
      <img class="draw-item__img" src="~/assets/img/draw__img.png" alt="draw item image" />
      <v-btn class="draw-item__button" @click="$navigate('/draws/123')" border>
        подробнее
        <icon-arrow class="ml-2" />
      </v-btn>
      <div v-if="data.complete" class="draw-item__complete">
        <span class="draw-item__icon-complete mr-2">
          <icon-complete />
        </span>
        <span>Завершен</span>
      </div>
    </div>
    <div v-if="!data.complete" class="draw-item__info">
      <p class="draw-item__title">{{ data.name }}</p>
      <p class="draw-item__cost">
        Стоимость: {{ data.cost }}
        <img
          class="draw-item__coin-image ml-2"
          src="~assets/img/poll-card__coin.png"
          alt="voxball coin image"
        />
      </p>
      <p class="draw-item__text">Дата окончания:</p>
      <p class="draw-item__time">{{ data.date }}</p>
    </div>
  </div>
</template>

<script>
import iconComplete from '@/components/icons/iconComplete.vue'
import iconArrow from '@/components/icons/iconArrow.vue'
export default {
  props: {
    data: Object
  },
  components: {
    iconComplete,
    iconArrow
  }
}
</script>

<style lang="scss" scoped>
.draw-item {
  min-width: 10rem;
  min-height: 10rem;
  position: relative;
  overflow: hidden;
  font-size: 0.8rem;
  border-top-left-radius: 37px;
  border-top-right-radius: 37px;

  &:hover &__img {
    filter: blur(8px);
  }
  &:hover &__button {
    opacity: 1;
  }
  &:hover &__info {
    top: -1.5rem;
  }

  &__img-wrap {
    min-width: 10rem;
    min-height: 10rem;
    transition: 0.5s ease;
    position: relative;
  }
  &__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: filter 0.5s ease;
  }

  &__button {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #ffffff;
    opacity: 0;
    padding: 0.5rem 1rem;
    transition: 0.5s ease;
    font-size: 0.9rem;
    border-color: #fff;
    &:hover {
      background-color: transparent;
      border-color: $base-color;
      color: $base-color;
    }
  }

  &__complete {
    position: absolute;
    font-size: 0.8rem;
    text-transform: capitalize;
    line-height: 0;
    right: 0;
    top: 0;
    padding: 0.4em 0.6em;
    color: white;
    background: #009700;
    display: flex;
    align-items: center;
  }

  &__icon-complete {
    width: 0.6rem;
  }

  &__info {
    width: 74%;
    background: #ffffff;
    padding: 1.2rem 1rem;
    margin: 0 auto;
    position: relative;
    top: -2.5rem;
    box-shadow: 0px 0px 10px -7px black;
    text-align: center;
    transition: top 0.5s ease;
  }
  &__title {
    margin: 0;
    padding: 0;
  }
  &__cost {
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &__coin-image {
    width: 1rem;
  }
  &__text {
    padding: 0;
    margin: 0;
    margin-bottom: 0.2rem;
  }
  &__time {
    padding: 0;
    margin: 0;
    font-family: HelveticaNeue-Bold;
    text-transform: uppercase;
  }
}
</style>