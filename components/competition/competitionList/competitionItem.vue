<template>
  <div class="competition-item">
    <div class="competition-item__img-wrap">
      <img
        class="competition-item__img"
        src="~/assets/img/competition-test.png"
        alt="competition item image"
      />
      <v-btn class="competition-item__button" link>
        подробнее
      </v-btn>
      <div v-if="data.complete" class="competition-item__complete">
        <span class="competition-item__icon-complete mr-2">
          <icon-complete />
        </span>
        <span>Завершен</span>
      </div>
    </div>
    <div v-if="!data.complete" class="competition-item__info">
      <p class="competition-item__text">Дата окончания:</p>
      <p class="competition-item__time">{{ data.date }}</p>
    </div>
  </div>
</template>

<script>
import iconComplete from '@/components/icons/iconComplete.vue'
export default {
  props: {
    data: Object,
  },
  components: {
    iconComplete
  }
}
</script>

<style lang="scss" scoped>
.competition-item {
  min-width: 10rem;
  max-width: 24%;
  position: relative;
  overflow: hidden;
  font-size: 0.8rem;
  margin-right: 0.5rem;

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
    border: 1px solid #ffffff;
    color: #ffffff;
    opacity: 0;
    padding: 0.5rem 1rem;
    transition: 0.5s ease;
    text-decoration: none;
    font-size: 0.9rem;
    &:hover {
      border: 1px solid $base-color;
    }
    &:after {
      content: '⟶';
      display: inline-block;
    }
  }

  &__complete {
    position: absolute;
    font-size: 0.8rem;
    text-transform: capitalize;
    right: 0;
    top: 0;
    padding: 0.4rem 0.6em 0.2em;
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
