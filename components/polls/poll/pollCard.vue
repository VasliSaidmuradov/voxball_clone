<template>
  <div class="poll-card">
    <div class="poll-card__question" v-for="question in poll.questions" :key="question.id">
      <h2 class="poll-card__title">{{ question.title }}</h2>
      <div class="poll-card__answer">
        <div class="answer__list">
          <answers-list
            :type="question.type"
            :value="GET_POLL_ANSWER[question.id]"
            @input="SET_POLL_ANSWER({'questionId': question.id, 'answers': $event})"
            :answersList="question.variants"
            :complete="complete"
            v-if="question.type !== 'text' && question.type !== 'stars'"
            @showAnswerMedia="openAnswerMedia()"
          ></answers-list>
          <!-- {{question}} -->
          <div class="poll-card__text-editor" v-if="question.type === 'text'">
            <v-editor
              class="m-auto"
              style="width: 90%; height: auto; margin-bottom: 1rem;"
              @input="SET_POLL_ANSWER({'questionId': question.id, 'answers': $event})"
              :config="editorConfig"
            />
          </div>

          <div class="answer-item__ratings ml-auto mr-auto" v-if="question.type === 'stars'">
            <no-ssr>
              <star-rating
                :value="GET_POLL_ANSWER[question.id]"
                inactive-color="#fff"
                border-color="#999"
                :border-width="1"
                :padding="1"
                :show-rating="false"
                :round-start-rating="false"
                @rating-selected="SET_POLL_ANSWER({'questionId': question.id, 'answers': $event})"
              ></star-rating>
            </no-ssr>
          </div>
        </div>
      </div>
    </div>
        <!-- {{ poll.type }} -->

    <div v-if="!complete" class="poll-card__button-wrap">
      <div class="poll-card__pay">
        +1
        <img class="poll-card__coin-image" src="~assets/img/poll-card__coin.png" alt />
      </div>
      <v-btn class="poll-card__button" border @click="VOTE($route.params.id)">
        <span class="poll-card__button-text" v-if="poll.type === 'text'">отправить ответ</span>
        <span class="poll-card__button-text" v-else>голосовать</span>
        <icon-arrow class="ml-2" />
      </v-btn>
    </div>

    <div class="poll-card__footer">
      <div>Проголосовали: {{ poll.voteCount }}</div>
      <div v-if="!complete">Дата окончания опроса: {{ poll.endedAt }}</div>
      <div>Поделились: {{ 0 }} пользователей</div>
    </div>
    <v-modal v-slot:body="question" :showModal="showAnswerMedia" @close="closeAnswerMedia()">
      <template>
        <div class="answer-item__video-wrap">
          <div class="answer-item__play-icon"></div>
          <video
            class="answer-item__video"
            :src="'https://cms.nova.st' + poll.video"
            width="100%"
            controls
          ></video>
        </div>
        <!-- <div class="answer-item__image-wrap" v-if="question.type === 'image'">
          <img src="~/assets/img/poll-no-info-image.png" alt />
        </div>-->
      </template>
    </v-modal>
  </div>
</template>

<script>
import iconArrow from '@/components/icons/iconArrow.vue'
import answersList from '@/components/answers/answersList/answersList.vue'
import vEditor from '@/components/inputs/vEditor.vue'
import StarRating from 'vue-star-rating'
import vModal from '@/components/modals/vModal.vue'
import { mapGetters, mapActions, mapMutations } from 'vuex'

// if (process.browser) {
//   var  StarRating   = require('vue-star-rating')
// }

export default {
  components: {
    iconArrow,
    answersList,
    vEditor,
    StarRating,
    vModal
  },
  props: {
    poll: {
      type: Object,
      default: () => ({
        questions: []
      })
    },
    complete: {
      type: Boolean,
      default: false
    },
    polltype: {
      type: String,
      default: 'poll'
    }
  },
  data() {
    return {
      questionType: 'stars',
      showAnswerMedia: false
      // qType: 'text'
      // rating: 0
    }
  },
  methods: {
    ...mapMutations({ SET_POLL_ANSWER: 'polls/SET_POLL_ANSWER' }),
    ...mapActions({ VOTE: 'polls/VOTE' }),
    selectedAnswers(selectedAnswers) {
      alert()
      console.log(selectedAnswers)
    },
    openAnswerMedia() {
      this.showAnswerMedia = true
    },
    closeAnswerMedia() {
      this.showAnswerMedia = false
    }
  },
  computed: {
    ...mapGetters({ GET_POLL_ANSWER: 'polls/GET_POLL_ANSWER' })
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

  &__question {
    margin-bottom: 3rem;
  }
  &__title {
    color: black;
    font-size: 1.45rem;
    font-family: 'times new roman psmt';
    text-align: center;
    margin: 0 auto;
    width: 90%;
  }
  &__answer {
    padding: 2rem 0;
  }
  &__ratings {
    padding: 1.5rem 0;
    padding-bottom: 2rem;
    width: fit-content;
  }
  &__button-wrap {
    // width: 40%;
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
  &__text-editor {
    width: 100%;
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
  &__button-text {
    width: fit-content;
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
