<template>
  <div class="profile-info">
    <div class="profile-info__avatar">
      <div class="profile-info__green"></div>
      <img class="profile-info__img" src="~assets/img/profile__image.png" alt />
    </div>
    <div class="profile-info__content">
      <div class="profile-info__header">
        <div
          class="profile-info__name"
        >{{`${profileInfo.name} ${profileInfo.email} ${profileInfo.id} ${profileInfo.rating} ${profileInfo.isBusiness}`}}</div>
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
        <div class="profile-info__buttons-wrap">
          <v-btn
            class="profile-info__button"
            @click="reviewOpen()"
            v-if="profileInfo.isBusiness==true"
            rounded
            border
          >оставить отзыв</v-btn>
          <v-btn class="profile-info__button ml-2" rounded border>подписаться</v-btn>
        </div>
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
    <v-modal :showModal="showReview" @close="reviewClose()" :abort="false">
      <template v-slot:body>
        <div class="review">
          <h3 class="review__title">Оцените компанию {{ profileInfo.name }}</h3>
          <no-ssr>
            <star-rating
              v-model="review.rating"
              border-color="#999"
              border-width="1"
              inactive-color="#fff"
              active-color="#00b900"
              :star-size="40"
              :padding="1"
              :show-rating="false"
              class="review__rating"
            ></star-rating>
          </no-ssr>
          <comments-answer class="review__answer" :type="answerType" v-model="answer" v-if="true"></comments-answer>
          <div class="review__list">
            <comments-list class="review__comments" :commentsList="comments"></comments-list>
          </div>
        </div>
      </template>
    </v-modal>
  </div>
</template>

<script>
import StarRating from 'vue-star-rating'
import iconArrow from '@/components/icons/iconArrow.vue'
import vModal from '@/components/modals/vModal.vue'
import commentsList from '@/components/comments/commentsList/commentsList.vue'
import commentsAnswer from '@/components/comments/commentsAnswer.vue'

export default {
  components: {
    StarRating,
    iconArrow,
    vModal,
    commentsList,
    commentsAnswer
  },
  data() {
    return {
      showReview: false,
      review: {
        rating: Number
      },
      answer: '',
      comments: [
        {
          createdAt: '30.05.2019',
          author: 'Nurbek',
          content: 'commet 1',
          type: 'review',
          viewed: false
        },
        {
          createdAt: '30.05.2019',
          author: 'Nurbek',
          content: 'commet 2',
          type: 'review',
          viewed: false
        },
        {
          createdAt: '30.05.2019',
          author: 'Nurbek',
          content: 'commet 3',
          type: 'review',
          viewed: true
        }
      ],
      answerType: {
        title: 'отзыв',
        name: 'review'
      }
    }
  },
  props: {
    profileInfo: Object
  },
  methods: {
    reviewOpen() {
      this.showReview = true
    },
    reviewClose() {
      this.showReview = false
    }
  }
}
</script>

<style lang="scss" scoped>
.profile-info {
  display: flex;
  justify-content: space-between;
  margin: 0 10%;
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
    width: 70%;
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
    margin-right: auto;
    display: flex;
    align-items: center;
  }
  &__buttons-wrap {
    display: flex;
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
.review {
  margin: 0 3rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 30rem;
  &__title {
    font-size: 1.5rem;
    color: $third-text-color;
  }
  &__rating {
    padding-bottom: 2rem;
  }
  &__answer {
    width: 100%;
    padding-top: 1rem;
    border-top: 1px solid $border-color;
  }
  &__list {
    overflow-y: scroll;
    height: 12rem;
    width: 100%;
  }
  &__comments {
    border-top: 1px solid $border-color;
    padding-top: 1rem;
    width: 100%;
  }
}
</style>