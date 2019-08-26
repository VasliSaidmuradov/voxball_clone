<template>
  <div class="competitionCard">
      <div class="competitionCard__img-wrap">
        <img class="competitionCard__img" src="~/assets/img/competition-test.png" alt="competition card image">
        <v-btn class="competitionCard__button" link>
          <nuxt-link class="link-button link-button_green" to="/">
            подробнее
          </nuxt-link>
        </v-btn>
      </div>
      <div class="competitionCard__info">
        <p class="competitionCard__text">До конца конкурса осталось:</p>
        <p class="competitionCard__time">2 месяца 25 дней 8 часов</p>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.competitionCard {
  width: 100%;
  position: relative;

  &:hover &__img {
    filter: blur(3px);
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
    transition: 1s ease;
    position: relative;
  }
  &__img {
    width: 100%;
    height: 100%;
    object-fit: cover; 
    transition: 1s ease;
  }

  &__button {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 1px solid #ffffff;
    color: #ffffff;
    opacity: 0;
    padding: 0.5rem;
    transition: 1s ease;
    &:after {
      content: '⟶';
      display: inline-block;
    }
  }
  
  &__info {
    width: 74%;
    background: #ffffff;
    padding: 1.5rem;
    margin: 0 auto;
    position: relative;
    top: -2.5rem;
    box-shadow: 0px 0px 10px -7px black;
    text-align: center;
    transition: 1s ease;
  }
  &__text {
    padding: 0;
    margin: 0;  
  }
  &__time {
    padding: 0;
    margin: 0;
    font-weight: 700;
    text-transform: uppercase;
  }
}
</style>