<template>
  <div class="draw">
    <detailed-layout title="УЧАСТВУЙТЕ В РОЗЫГРЫШАХ" text="ВЫЙГРЫВАЙТЕ ЦЕННЫЕ ПРИЗЫ ОТ VOXBALL">
      <template v-slot:action>
        <p>Кругом розыгрыши, у нас выйграши, без призов не останетесь.</p>
      </template>
      <div class="draw__shared">
        <span class="draw__shared-count">Поделились: 15</span>
        <social />
      </div>
      <div class="draw-wrap container">
        <section class="draw-main">
          <h3 class="draw-main__title">
            НЕ УПУСТИ СВОЙ ШАНС, ПОКУПАЙ СКОРЕ БИЛЕТ.
            <br />ЧЕМ РАНЬШЕ ТЫ ЭТО СДЕЛАЕШЬ, ТЕМ БОЛЬШЕ ШАНСОВ НА ВЫЙГРЫШ
          </h3>
          <h2 class="draw-content__title">{{ data.title }}</h2>
          <p
            class="draw-main__text"
          >Все что от тебя требуется, это нажать на кнопку КУПИТЬ БИЛЕТ для участия в розыгрыше</p>
          <vEditor style="width: 100%" :editor-data="data.text"></vEditor>
        </section>
        <section class="draw-action">
          <v-btn class="draw-action__button" border rounded>
            Купить билет всего за {{ data.cost }}
            <img
              class="draw-action__coin-image ml-2"
              src="~assets/img/poll-card__coin.png"
              alt="voxball coin image"
            />
          </v-btn>
          <h2 class="draw-action__title">призы розыгрыша</h2>
          <div class="draw-carousel">
            <div class="draw-carousel__wrap">
              <no-ssr>
                <Carousel
                  class="Slider-carousel"
                  :perPage="1"
                  :paginationEnabled="true"
                  :paginationColor="'#00b900'"
                  :paginationActiveColor="'#00b900'"
                  :paginationPadding="2"
                  :paginationSize="8"
                  autoplay
                  loop
                >
                  <Slide class v-for="(slide,index) in 5" :key="index">
                    <img class="Slider-carousel__image" src="@/assets/img/slider-photo-3.png" alt />
                  </Slide>
                </Carousel>
              </no-ssr>
            </div>
            <div class="draw-carousel__back"></div>
          </div>
        </section>
      </div>
    </detailed-layout>
  </div>
</template>

<script>
if (process.browser) {
  var { Carousel, Slide } = require('vue-carousel')
}

import detailedLayout from '@/components/layouts/detailedLayout.vue'
import social from '@/components/shared/social.vue'
import vEditor from '@/components/inputs/vEditor.vue'

export default {
  components: {
    detailedLayout,
    social,
    Carousel,
    Slide
  },
  data() {
    return {
      data: {
        title: 'УЧАСТВУЙ И ВЫЙГРАЙ IPHONE 11 PRO',
        text: `<p>УЧАСТИЕ
Хочешь новый смартфон? А если новый смартфон каждую неделю? 
До 15 октября каждый понедельник разыгрывают по одному Неффос! 
Космический X20, бомбический X20 Pro и просто два классных С7s!
</p>
<p>Хочешь выиграть один из них? Тогда:</p>
<ul>
<li>1) Вступай в группу Neffos Россия;</li>
<li>2) Делай репост этого сообщения vk.com/neffosrussia?w=wall-107497751_13450;</li>
<li>3) Жди вечер следующего понедельника, 
когда будут публиковать видео со случайным победителем!</li>
</ul>
<p>Смартфоны будут разыграны в порядке (C7s -> C7s -> X20 -> X20 Pro).</p>

<p>Желаем удачи и хорошей связи!</p>`,
        cost: 5
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.draw {
  position: relative;
  &__shared {
    display: flex;
    position: absolute;
    top: 9rem;
    right: 0;
  }
  &__shared-count {
    display: flex;
    align-items: center;
  }
  &-wrap {
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
    margin-bottom: 2rem;
    padding: 0 2rem;
  }
  &__title {
    margin: 0;
    padding: 0;
    text-transform: uppercase;
    color: $third-text-color;
  }
  &-main {
    width: 60%;
    &__title {
      margin-bottom: 2rem;
      padding: 0;
      line-height: 1.2;
      color: $third-text-color;
    }
    &__text {
      margin: 0;
      padding-bottom: 1rem;
      color: $secondary-text-color;
    }
  }
  &-content {
    &__title {
      margin: 0;
      padding: 0;
      text-transform: uppercase;
      color: $third-text-color;
    }
  }
  &-action {
    width: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
    &__button {
      font-size: 1.1rem;
      padding: 1rem 2rem;
      margin-bottom: 2rem;
      border-color: $base-color;
      border-radius: 26px;
    }
    &__title {
      margin: 0;
      margin-bottom: 1rem;
      padding: 0;
      text-transform: uppercase;
      color: $third-text-color;
    }
    &__coin-image {
      width: 1.2rem;
    }
  }
  &-carousel {
    position: relative;
    width: 21.5rem;
    height: 16.5rem;
    &__wrap {
      width: 20rem;
      height: 16rem;
      z-index: 3;
    }
    &__back {
      width: 20rem;
      height: 15rem;
      position: absolute;
      right: 0;
      bottom: 0;
      border: 5px solid $base-color;
      z-index: -1;
    }
  }
}
.Slider-carousel {
  width: 100%;
  height: 100%;
  &__image {
    width: 20rem;
    height: 15rem;
    object-fit: cover;
  }
}
</style>
<style lang="scss">
.draw .VueCarousel-wrapper {
  height: 100%;
}
.draw .VueCarousel-inner {
  height: 100%;
}
.draw .VueCarousel-dot {
  width: 1rem !important;
  height: 0.3rem !important;
  border-radius: 5px;
  &:focus {
    outline: none;
  }
}
</style>