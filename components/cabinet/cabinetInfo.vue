<template>
  <div class="cabinet-info">
    <div class="cabinet-info__avatar">
      <!-- {{ consoleLog() }} -->
      <div class="cabinet-info__green"></div>
      <!-- <img class="cabinet-info__img" src="~assets/img/profile__image.png" alt /> -->
      <!-- <upload class="cabinet-info__img" :height="'100%'" :width="'100%'" :label="'загрузить фото'" /> -->
      <croppa
        class="cabinet-info__img"
        v-model="myCroppa"
        :placeholder-font-size="16"
        :videoEnabled="true"
        :preload="preload"
      ></croppa>
      <div class="cabinet-info__zoom-wrap" v-show="this.myCroppa.imageSet">
        <div class="cabinet-info__zoom"  @click="myCroppa.zoomIn()">
          <icon-zoom-in class="cabinet-info__zoom-in"></icon-zoom-in>
        </div>
        <div class="cabinet-info__zoom" @click="myCroppa.zoomOut()">
          <icon-zoom-out class="cabinet-info__zoom-out"></icon-zoom-out>
        </div>
      </div>
    </div>
    <div class="cabinet-info__content">
      <div class="cabinet-info__header">
        <div class="cabinet-info__name">{{ cabinetInfo.name }}</div>
        <div class="cabinet-info__rating">
          <no-ssr>
            <star-rating
              v-model="cabinetInfo.rating"
              inactive-color="#fff"
              active-color="#00b900"
              :star-size="18"
              :padding="1"
              read-only
              :show-rating="false"
            ></star-rating>
          </no-ssr>
        </div>
        <div class="cabinet-info__category-wrap">
          <div
            class="cabinet-info__category"
            v-for="(item, index) in cabinetInfo.category"
            :key="index"
          >{{ item }}</div>
        </div>
      </div>
      <div class="cabinet-info__main">
        <div class="cabinet-info__personal-wrap">
          <div class="cabinet-info__personal cabinet-info__personal_coin">
            <span>v-coin</span>
            <div class="cabinet-info__coin">{{ cabinetInfo.coins }}</div>
          </div>
          <div class="cabinet-info__personal">
            <span class="cabinet-info__label">Телефон:</span>
            <div class="cabinet-info__tel">{{ cabinetInfo.tel }}</div>
          </div>
          <div class="cabinet-info__personal">
            <span class="cabinet-info__label">E-mail:</span>
            <div class="cabinet-info__email">{{ cabinetInfo.email }}</div>
          </div>
        </div>
        <div class="cabinet-info__list-wrap">
          <cabinet-info-list :list="cabinetInfoList" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import upload from '@/components/inputs/upload.vue'
import StarRating from 'vue-star-rating'
import cabinetInfoList from '@/components/cabinet/cabinetInfoList/cabinetInfoList.vue'
import vCroppa from '@/components/inputs/vCroppa.vue'
// import EleUploadVideo from 'vue-ele-upload-video'
import iconZoomIn from '@/components/icons/iconZoomIn.vue'
import iconZoomOut from '@/components/icons/iconZoomOut.vue'

export default {
  components: {
    upload,
    StarRating,
    cabinetInfoList,
    vCroppa,
    iconZoomIn,
    iconZoomOut
    // EleUploadVideo
  },
  data() {
    return {
      myCroppa: {},
      cabinetInfo: {
        name: 'Иванов Иван',
        rating: 4,
        category: ['общество', 'персона', 'экономика'],
        coins: 100,
        tel: '+7 705 123 1212',
        email: 'ivanovivan@mail.com',
        polls: 5,
        ratings: 6,
        subscribers: 10,
        subscriptions: 5,
        reposts: 26,
        pollsAnswers: 25000,
        myAnswers: 200,
        competitions: 2,
        draw: 16
      },
      cabinetInfoLinks: [
        { name: 'polls', link: '/cabinet/mypolls' },
        { name: 'ratings', link: '/cabinet/myratings' },
        { name: 'subscribers', link: '/subscribers' },
        { name: 'subscriptions', link: '/subscriptions' },
        { name: 'draw', link: '/cabinet' },
        { name: 'reposts', link: '/reposts' },
        { name: 'pollsAnswers', link: '/cabinet' },
        { name: 'myAnswers', link: '/cabinet' }
      ],
      width: 250,
      height: 250
    }
  },
  computed: {
    cabinetInfoList: function() {
      return this.cabinetInfoLinks.map(x => {
        x.count = this.cabinetInfo[x.name]
        return x
      })
    }
  },
  methods: {
    consoleLog() {
      return console.log(this.myCroppa.video)
    },
    preload() {
      return this.myCroppa.video.setAttribute('preload', 'metadata');
    }
  }
}
</script>

<style lang="scss" scoped>
.cabinet-info {
  display: flex;
  justify-content: space-between;
  padding: 1rem 0;
  &__avatar {
    position: relative;
    min-width: 16rem;
    min-height: 16rem;
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
    top: 10px;
    left: 10px;
    border: 1px solid gray;
    color: #fff;
  }
  &__zoom-wrap {
    position: absolute;
    bottom: 2%;
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: center;
  }
  &__zoom {
    width: 10%;
    height: 100%;
    margin: 0 0.5rem;
    cursor: pointer;
    &-in,
    &-out {
      width: 100%;
      height: 100%;

      &:hover {
        fill: $base-color;
      }
    }
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
  &__category-wrap {
    display: flex;
  }
  &__category {
    padding: 0.3rem 1rem;
    margin-left: 0.5rem;
    border: 1px solid $base-text-color;
    color: white;
    background-color: $base-text-color;
  }
  &__main {
    padding-top: 0.5rem;
    display: flex;
    justify-content: space-between;
  }
  &__personal-wrap {
    display: flex;
    flex-direction: column;
    width: 40%;
    padding-top: 0.5rem;
  }
  &__personal {
    display: flex;
    align-items: center;
    padding-bottom: 0.5rem;
    &_coin {
      width: fit-content;
      text-transform: uppercase;
      font-weight: 600;
      padding-bottom: 2rem;
    }
  }
  &__coin {
    padding-left: 0.5rem;
  }
  &__tel {
    border: 1px solid $border-color;
    border-radius: 2rem;
    color: $third-text-color;
    // min-width: 12rem;
    padding: 0.5rem 1rem;
    line-height: 1.2;
    margin-left: 0.5rem;
  }
  &__email {
    border: 1px solid $border-color;
    border-radius: 2rem;
    color: $third-text-color;
    // min-width: 12rem;
    padding: 0.5rem 1rem;
    line-height: 1.2;
    margin-left: 0.5rem;
  }
  &__list-wrap {
    margin-left: auto;
    width: 27rem;
    height: 11rem;
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