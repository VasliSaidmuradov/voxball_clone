<template>
  <div class="competitionCard">
    <div class="competitionCard__img-wrap">
      <img
        class="competitionCard__img"
        src="~/assets/img/competition-test.png"
        alt="competition card image"
      />
      <v-btn class="competitionCard__button" @click="$navigate('/competitions/123')" border>
        подробнее
        <icon-arrow  class="ml-2"/>
      </v-btn>
    </div>
    <div class="competitionCard__info">
      <p class="competitionCard__text">До конца конкурса осталось:</p>
      <p class="competitionCard__time">2 месяца 25 дней 8 часов</p>
    </div>
  </div>
</template>

<script>
import iconArrow from '@/components/icons/iconArrow.vue'
export default {
  components: {
    iconArrow
  }
}
</script>

<style lang="scss" scoped>
.competitionCard {
  min-width: 14rem;
  max-width: 100%;
  position: relative;
  overflow: hidden;
  font-size: 0.8rem;

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
    &:hover {
      background-color: transparent;
      border-color: $base-color;
      color: $base-color;
    }
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
