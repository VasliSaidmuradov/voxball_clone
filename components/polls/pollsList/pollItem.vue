<template>
  <div>
    <div v-if="data.type !== 'adv'" @click="goToDetailed" class="poll-item mt-4">
      <div class="poll-item__main">
        <div class="poll-item__img-wrap">
          <img class="poll-item__img" src="~/assets/img/poll__image2.png" alt />
          <!-- <img class="poll-item__img" :src="data.bgImage" alt /> -->
        </div>
        <div class="poll-item__block">
          <div class="poll-item__content">
            <div class="poll-item__content-item">{{ data.category }}</div>
            <div v-if="data.vouted" class="poll-item__vouted">
              <span class="poll-item__icon-vouted">
                <icon-complete />
              </span>
            </div>
          </div>
          <div class="poll-item__title">{{ data.title }}</div>
          <div class="poll-item__main-footer">
            <v-btn link class="poll-item__link">
              Подробнее
              <icon-arrow class="ml-2"></icon-arrow>
            </v-btn>
            <div class="poll-item__line">
              <div v-if="data.complete" class="poll-item__complete">
                Завершен
              </div>
            </div>
            <div class="poll-item__author">
              <div class="poll-item__author-img-wrap">
                <img src="~/assets/img/poll_author.png" alt class="poll-item__author-img" />
              </div>
              <span class="poll-item__author-name">Ешенбай Асыл</span>
            </div>
          </div>
          <play v-if="data.video" />
        </div>
      </div>
      <div class="poll-item__footer">
        <div class="poll-item__date">{{ data.date }}</div>
        <div class="views">
          <span class="poll-item__icon-eyes mr-2">
            <icon-eyes />
          </span>
          <div class="views__count">{{ data.views }}</div>
        </div>
      </div>
      <div class="poll-item__move-out"></div>
    </div>
    <div v-else class="poll-item__adv mt-4">
      <advertising />
    </div>
  </div>
</template>

<script>
import iconEyes from '@/components/icons/iconEyes.vue'
import iconArrow from '@/components/icons/iconArrow.vue'
import iconComplete from '@/components/icons/iconComplete.vue'
import play from '@/components/buttons/play.vue'
import advertising from '@/components/advertising.vue'

export default {
  components: {
    iconArrow,
    iconEyes,
    iconComplete,
    play,
    advertising,
  },
  props: ['data'],
  created() {},
  methods: {
    goToDetailed() {
      if (this.data.type === 'rating') {
        this.$navigate('/ratings/123')
      } else if (this.data.complete) {
        this.$navigate('/results/123')
      } else {
        this.$navigate('/polls/123')
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.poll-item {
  &__main {
    cursor: pointer;
    position: relative;
    display: block;
    width: 13.5rem;
    height: 21.5rem;
    overflow: hidden;
    background: #000;
    text-transform: uppercase;
    box-shadow: 1px 1px 8px 1px rgba(0, 0, 0, 0.17);

    &-footer {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      position: absolute;
      bottom: 0;
      width: 100%;
      font-size: 0.7rem;
      color: #fff;
      font-weight: 300;
    }
  }

  &__link {
    margin: 0 .3em;
    color: $base-color;
    text-decoration: none;
  }

  &:hover &__img {
    opacity: 0.5;
  }
  &:hover &__play-block {
    width: 6rem;
    height: 6rem;
  }
  &:hover &__link {
    color: #fff;
  }
  &:hover &__move-out::after {
    top: -30px;
  }

  &__img-wrap {
    width: 100%;
    height: 100%;
  }

  &__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: 0.5s ease;
  }

  &__title {
    padding: 1rem;
    font-size: 0.8rem;
    font-weight: 600;
    line-height: 1.3;
    color: white;
  }

  &__complete {
    padding: 0.3em 2rem;
    background: $base-color;
    width: fit-content;
    float: right;
    text-transform: none;
    font-size: .6rem;
  }
  &__vouted {
    width: 2em;
    height: 2em;
    padding: 0;
    border-radius: 50%;
    justify-content: center;
    color: white;
    background: $base-color;
    display: flex;
    align-items: center;
  }

  &__block {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    box-shadow: inset 0 0 1000px 1000px #2536506e;
  }

  &__content {
    padding: 1rem;
    padding-bottom: 0;
    height: auto;
    min-height: 2rem;
    font-size: 0.7rem;
    line-height: 1.2;
    display: flex;
    justify-content: space-between;
  }

  &__content-item {
    display: inline-block;
    padding: 0.3rem 1rem;
    background: $base-color;
    color: white;
    text-decoration: none;

    &--video {
      color: $base-text-color;
      background: white;
    }
  }

  &__footer {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 5;
    padding: 0.5rem 1rem;
    box-shadow: 1px 1px 6px 1px rgba(0, 0, 0, 0.2);
    background: white;
  }

  &__author {
    display: flex;
    align-items: center;
    padding: 0.3rem 0;
    align-self: flex-start;
  }

  &__author-img-wrap {
    border-radius: 50%;
    margin: 0 0.5rem;
    width: 2.3rem;
  }

  &__author-img {
    width: 100%;
  }

  &__author-name {
    text-transform: capitalize;
    font-size: 0.8rem;
  }

  &__line {
    width: 100%;
    height: .2rem;
    background-color: $base-color;
  }

  &__move-out {
    position: relative;
    padding: 0 12%;

    &::after {
      content: '';
      position: relative;
      display: block;
      top: 0;

      width: 100%;
      height: 0.9rem;
      background: $base-color;
      transition: 0.5s linear;
    }
  }

  &__icon-complete {
    width: 1rem;
  }

  &__icon-vouted {
    width: 60%;
    padding-top: 0.2rem;
  }

  &__icon-eyes {
    width: 0.9rem;
  }

  &__adv {
    width: 13.5rem;
    height: 23.5rem;
  }
}
.views {
  display: flex;
  justify-content: space-between;
  align-items: center;
  &__count {
    color: gray;
  }
}
</style>
