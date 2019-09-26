<template>
  <div class="poll-card">
    <h2 class="poll-card__title">
      Как вы считаете, долго ли Димаш будет
      на музыкальной вершине?
    </h2>
    <div v-if="polltype == 'poll'" class="poll-card__answer">
      <div class="answer__list">
        <answers-list
          multiple
          @selectedAnswers="selectedAnswers($event)"
          :answersList="answers"
          :percent="[25,15,50,10]"
        ></answers-list>
      </div>
    </div>
    <div v-if="polltype == 'rating'" class="poll-card__ratings ml-auto mr-auto">
      <no-ssr>
        <star-rating
          v-model="rating"
          inactive-color="#fff"
          border-color="#999"
          border-width="1"
          padding="1"
          :show-rating="false"
        ></star-rating>
      </no-ssr>
    </div>
    <div class="poll-card__button-wrap">
      <div class="poll-card__pay">
        +1
        <img class="poll-card__coin-image" src="~assets/img/poll-card__coin.png" alt />
      </div>
      <v-btn class="poll-card__button" border>
        голосовать
        <icon-arrow class="ml-2" />
      </v-btn>
    </div>
    <div class="poll-card__footer">
      <div>Проголосовали: {{ poll.votes }}</div>
      <div>Опрос окончится через: {{ poll.date }}</div>
      <div>Поделились: {{ poll.shares }} пользователей</div>
    </div>
  </div>
</template>

<script>
import iconArrow from '@/components/icons/iconArrow.vue'
import answersList from '@/components/polls/answersList/answersList.vue'
import StarRating from 'vue-star-rating'
// if (process.browser) {
//   var  StarRating   = require('vue-star-rating')
// }

export default {
  components: {
    iconArrow,
    answersList,
    StarRating
  },
  props: {
    answers: Array,
    polltype: {
      type: String,
      default: 'poll'
    }
  },
  data() {
    return {
      poll: {
        votes: 11,
        date: '9 дней',
        shares: 15
      },
      rating: 0
    }
  },
  methods: {
    selectedAnswers(selectedAnswers) {
      console.log(selectedAnswers)
    }
  }
}
</script>

<style lang="scss" scoped>
.poll-card {
  display: flex;
  flex-direction: column;
  min-width: 50rem;
  width: 50%;
  margin: 0 auto;
  padding: 3rem 2.5rem 2rem;
  box-shadow: 1px 1px 10px 1px rgba(0, 0, 0, 0.2);
  &__title {
    color: black;
    font-size: 1.45rem;
    font-family: 'times new roman psmt';
    text-align: center;
    margin: 0 auto;
    width: 60%;
  }
  &__answer {
    padding: 2rem 0;
  }
  &__ratings {
    padding: 1.5rem 0;
    padding-bottom: 2rem;
  }
  &__button-wrap {
    width: 40%;
    padding-right: 3%;
    padding-bottom: 2rem;
    margin: 0 auto;
    display: flex;
    align-items: center;
  }
  &__button {
    padding: 0.7rem 1.5rem;
    border-color: $base-text-color;
    text-transform: uppercase;
    &:hover {
      background-color: $base-color;
      border-color: $base-color;
    }
  }
  &__pay {
    display: flex;
    align-items: center;
    margin-right: 1rem;
  }
  &__coin-image {
    width: 1.2rem;
    height: 1.2rem;
    margin-left: 0.3rem;
    opacity: 0.5;
  }
  &__footer {
    display: flex;
    justify-content: space-between;
    border-top: 1px solid $border-color;
    padding-top: 2rem;
  }
  &__arrow {
    width: 1.3em;
    margin-left: 0.5rem;
  }
}
.answer {
  &__list {
    padding: 0;
    margin: 0;
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  &__item {
    width: 48%;
    border: 1px solid $border-color;
    border-radius: 30px;
    padding: 1rem;
    margin-bottom: 1.5rem;
    position: relative;
  }
  &__check {
    width: 2rem;
    height: 2rem;
    border: 1px solid $border-color;
    border-radius: 50%;
    position: absolute;
    right: 1rem;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
  }
}
.arrow {
  margin-bottom: -0.4rem;
  margin-left: 0.5rem;
  height: auto;
}
</style>
