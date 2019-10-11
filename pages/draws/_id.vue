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
          <h2 class="draw-main__title">{{ data.title }}</h2>
          <p
            class="draw-main__text"
          >Все что от тебя требуется, это нажать на кнопку КУПИТЬ БИЛЕТ для участия в розыгрыше</p>
          <div class="draw-main__info">
            <div class="draw-main__option-wrap">
              <span class="draw-main__option">
                <!-- timer -->
                <v-timer :date="data.date" />
              </span>дата окончания
            </div>
            <div class="draw-main__option-wrap">
              <span class="draw-main__option">{{ data.players }}</span>участников
            </div>
          </div>
          <vEditor style="width: 100%" :editor-data="data.text"></vEditor>
        </section>
        <section class="draw-action">
          <h3 class="draw-action__text">
            НЕ УПУСТИ СВОЙ ШАНС, ПОКУПАЙ СКОРЕ БИЛЕТ.
            ЧЕМ РАНЬШЕ ТЫ ЭТО СДЕЛАЕШЬ, ТЕМ БОЛЬШЕ ШАНСОВ НА ВЫЙГРЫШ
          </h3>
          <v-btn class="draw-action__button" border rounded>
            Купить билет всего за {{ data.cost }}
            <img
              class="draw-action__coin-image ml-2"
              src="~assets/img/poll-card__coin.png"
              alt="voxball coin image"
            />
          </v-btn>
          <div class="draw-action__ticket-wrap">
            <div class="draw-action__ticket-text">
              <span class="draw-action__ticket-text_top">№ {{ data.players+1 }}</span>
              <br />ваш билет
            </div>
            <img
              class="draw-action__ticket"
              src="~assets/img/ticket.jpg"
              style="transform: rotate(45deg)"
              alt="ticket photo"
            />
          </div>
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
      <section class="draw-winner-section">
        <div>
          <h2 class="draw-winner-section__title">Победитель розыгрыша</h2>
          <ul class="draw-winner-section__list">
            <li></li>
          </ul>
        </div>
        <div class="draw-winner-section__img-wrap">
          <img class="draw-winner-section__img" src="~assets/img/golden_cup.png" alt="cup image" />
        </div>
      </section>
      <section class="draw-list-section">
        <h2 class="draw-list-section__title">Мало времени, много призов, участвовать успей!</h2>
        <drawList :list="drawList" :gap="'10'" :perPage="4"></drawList>
        <v-btn class="draw-list-section__button" rounded border>Больше розыгрышей</v-btn>
      </section>
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
import drawList from '@/components/draw/drawList/drawList.vue'
import vTimer from '@/components/timer/vTimer.vue'

export default {
  components: {
    detailedLayout,
    social,
    Carousel,
    Slide,
    drawList,
    vTimer
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
<p>Смартфоны будут разыграны в порядке (C7s -> C7s  -> X20 -> X20 Pro).</p>

<p>Желаем удачи и хорошей связи!</p>`,
        cost: 5,
        date: '2019-11-24',
        players: 275
      },
      drawList: [
        { name: 'Draw1', date: '13.09.2019', complete: false, cost: 5 },
        { name: 'Draw2', date: '13.09.2019', complete: false, cost: 10 },
        { name: 'Draw3', date: '13.09.2019', complete: false, cost: 15 },
        { name: 'Draw1', date: '13.09.2019', complete: false, cost: 5 }
      ]
    }
  },
  computed: {
    date() {
      let newDate = ''
      let date = new Date(new Date(this.data.date).getTime() - Date.now())
      if (date.getMonth() !== null) {
        newDate += `${date.getMonth()} мес. `
      }
      if (date.getDay() !== null) {
        newDate += `${date.getDay()} дней `
      }
      if (date.getHours() !== null) {
        newDate += `${date.getHours()}:`
      } else {
        newDate += '00:'
      }
      if (date.getMinutes() !== null) {
        newDate += `${date.getMinutes()}:`
      } else {
        newDate += '00:'
      }
      newDate += `${date.getSeconds()}`
      if (+date <= 0) {
        newDate = 'Завершен'
      }
      return newDate
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
    padding: 0 2rem;
    margin-top: 2rem;
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
      margin: 0;
      padding-bottom: 0.5rem;
      text-transform: uppercase;
      color: $third-text-color;
    }
    &__info {
      display: flex;
      justify-content: space-around;
      padding: 3rem 0;
    }
    &__option-wrap {
      display: flex;
      flex-direction: column;
      align-items: center;
      font-size: 1.5rem;
    }
    &__option {
      font-size: 2.5rem;
      color: $secondary-text-color;
    }
    &__text {
      margin: 0;
      padding-bottom: 1rem;
      color: $secondary-text-color;
    }
  }
  &-action {
    width: 36%;
    display: flex;
    flex-direction: column;
    align-items: center;
    &__text {
      margin: 0;
      font-size: 1.1rem;
      color: $third-text-color;
      z-index: 2;
    }
    &__button {
      font-size: 1.1rem;
      margin-top: 2rem;
      padding: 1rem 2rem;
      border-color: $base-color;
      border-radius: 26px;
      z-index: 2;
    }
    &__ticket-wrap {
      position: relative;
      margin-top: -2rem;
    }
    &__ticket-text {
      position: absolute;
      font-size: 1.3rem;
      padding: 0.4rem;
      background: linear-gradient(#fedc3b, #f7a83c);
      top: 49%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 7.5rem;
      height: 4rem;
      border-radius: 0.5rem;
      z-index: 2;
    }
    &__ticket-text_top {
      color: $secondary-text-color;
      text-transform: uppercase;
      font-size: 2rem;
    }
    &__ticket {
      width: 15rem;
      z-index: 1;
    }
    &__title {
      margin: 0;
      margin-bottom: 1rem;
      padding: 0;
      text-transform: uppercase;
      color: $third-text-color;
      z-index: 2;
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
  &-winner-section {
    padding: 0 2rem;
    padding-bottom: 2rem;
    display: flex;
    justify-content: center;
    &__title {
      color: $third-text-color;
    }
    &__list {
      list-style: none;
    }
    &__img-wrap {
      width: 10rem;
      height: 17rem;
      margin-left: 2rem;
    }
    &__img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  &-list-section {
    padding: 0 2rem;
    padding-bottom: 2rem;
    &__title {
      color: $third-text-color;
    }
    &__button {
      margin: 1rem auto;
      text-transform: uppercase;
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