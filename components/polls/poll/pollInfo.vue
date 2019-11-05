<template>
  <div class="poll-info">
    <div class="poll-info__header">
      <div class="poll-info__info">
        <div class="poll-info__info-wrap">
          <span class="poll-info__category">{{ poll.categoryTitle }}</span>
          <span class="poll-info__date">{{ poll.createdAt }}</span>
        </div>
        <div class="poll-info__info-wrap">
          <v-btn class="poll-info__button" border @click="openAnswerMedia">
            посмотреть видео
            <span>
              <icon-arrow class="ml-2" />
            </span>
          </v-btn>
          <views class="poll-info__views" :viewCount="poll.viewCount"></views>
        </div>
      </div>
      <div class="poll-info__img-wrap">
        <!-- <img class="poll-info__img" src="~assets/img/poll-no-info-image.png" alt /> -->
        <img class="poll-info__img" :src="poll.preview" alt />
        <div v-if="poll.complete" class="poll-info__complete">
          <span class="poll-info__icon-complete mr-2">
            <icon-complete />
          </span>
          <span>Завершен</span>
        </div>
      </div>
    </div>
    <div class="poll-info__main">
      <h2 class="poll-info__title">{{ poll.title }}</h2>
      <p class="poll-info__text" v-html="poll.description"></p>
    </div>
    <div class="poll-info__footer">
      <div class="poll-info__footer-wrap">
        <div class="poll-info__avatar">
          <img class="poll-info__avatar-img" src="~assets/img/poll-no-avatar.png" alt />
          <!-- <img class="poll-info__avatar-img" :src="poll.authorAvatar" alt /> -->
          <!-- {{ poll.authorAvatar }} -->
        </div>
        <p class="poll-info__name-wrap">
          Автор:
          <span class="poll-info__name">{{ poll.authorName }}</span>
        </p>
      </div>
      <div class="poll-info__footer-wrap justify-content">
        <div class="poll-info__share-wrap">Поделились:{{ poll.shared }}</div>
        <div class="poll-info__social-wrap">
          <div class="poll-info__social">
            <social></social>
          </div>
        </div>
      </div>
    </div>
    <tags class="mt-5 mb-5" :arrTag="arrTags" />

    <v-modal v-slot:body :showModal="showAnswerMedia" @close="closeAnswerMedia()">
      <template>
        <div class="poll-info__video-wrap">
          <!-- <div class="poll-info__play-icon"></div> -->
          <video
            class="poll-info__video"
            :src="poll.video"
            width="100%"
            controls
          ></video>
        </div>
      </template>
    </v-modal>
  </div>
</template>

<script>
import iconArrow from '@/components/icons/iconArrow.vue'
import views from '@/components/shared/views.vue'
import tags from '@/components/shared/tags.vue'
import social from '@/components/shared/social.vue'
import iconComplete from '@/components/icons/iconComplete.vue'
import vModal from '@/components/modals/vModal.vue'

export default {
  components: {
    iconArrow,
    iconComplete,
    views,
    tags,
    social,
    vModal
  },
  props: {
    poll: Object
  },
  data() {
    return {
      arrTags: [
        'hello',
        'world',
        'экономика',
        'политика',
        'информационные технологии',
        'hello',
        'world',
        'экономика',
        'политика',
        'информационные технологии',
        'hello',
        'world',
        'экономика',
        'политика',
        'информационные технологии'
      ],
      showAnswerMedia: false
    }
  },
  methods: {
    openAnswerMedia() {
      this.showAnswerMedia = true
    },
    closeAnswerMedia() {
      this.showAnswerMedia = false
    }
  }
}
</script>

<style lang="scss" scoped>
.poll-info {
  display: flex;
  flex-direction: column;
  min-width: 50rem;
  width: 50%;
  margin: 0 auto;
  &__header {
    display: flex;
    flex-direction: column;
    min-width: 50rem;
    width: 100%;
    height: 28rem;
    position: relative;
  }
  &__info {
    width: 86.3%;
    height: 87.65%;
    border: 0.35rem solid $base-color;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    position: absolute;
    right: 0;
    transition: 0.5s ease;
  }
  &__info-wrap {
    width: 42%;
    height: 3.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
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
    margin-left: 1rem;
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
    width: 93%;
    height: 86%;
    position: absolute;
    bottom: 0;
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
  &__title {
    width: 70%;
    font-size: 1.5rem;
    text-transform: uppercase;
    margin: 0;
    padding: 2rem 0 1rem;
    &:after {
      content: '';
      height: 2px;
      width: 21%;
      background-color: $base-color;
      display: block;
      position: relative;
      bottom: -1rem;
    }
  }
  &__text {
    margin: 1rem 0;
    line-height: 1.3rem;
    // height: 6rem;
    overflow: hidden;
    overflow-y: scroll;
  }
  &__footer {
    height: 6rem;
    padding: 0.5rem 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-top: 1px solid $border-color;
    border-bottom: 1px solid $border-color;
  }
  &__footer-wrap {
    width: 44%;
    display: flex;
    align-items: center;
  }
  &__avatar {
    border-radius: 50%;
    width: 4.3rem;
  }
  &__avatar-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  &__name-wrap {
    margin-left: 1rem;
    font-family: 'times new roman psmt';
  }
  &__social-wrap {
    margin-left: 1rem;
  }
}
.arrow {
  margin-bottom: -0.5rem;
  margin-left: 0.5rem;
  height: auto;
}
.justify-content {
  justify-content: flex-end;
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