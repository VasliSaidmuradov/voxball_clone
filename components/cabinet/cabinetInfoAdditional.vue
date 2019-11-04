<template>
  <div class="cabinet-info-additional">
    <div class="cabinet-info-additional__title-wrap">
      <span class="cabinet-info-additional__title">{{ cabinetInfoAdditional.title }}</span>
    </div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-6">
          <div
            class="row cabinet-info-additional__button-wrap"
            v-for="(button, index) in cabinetInfoAdditional.buttons"
            :key="index"
          >
            <v-btn class="cabinet-info-additional__button">{{ button }}</v-btn>
            <div class="cabinet-info-additional__pay">
              <img
                class="cabinet-info-additional__coin-image"
                src="~assets/img/poll-card__coin.png"
                alt
              />
              +150
            </div>
          </div>
        </div>
        <div class="col-6">
          <div
            class="row cabinet-info-additional__button-wrap-right"
            v-for="(buttonRight, index) in cabinetInfoAdditional.buttonsRight"
            :key="index"
          >
            <v-btn class="cabinet-info-additional__button-right">{{ buttonRight }}</v-btn>
          </div>
          <div class="cabinet-info-additional__toggle mt-4">
            <span class="mr-2 cabinet-info-additional__toggle-title">Получать уведомления</span>
            <ToggleButton />
          </div>
          <div class="cabinet-info-additional__toggle">          
            <span class="mr-2 cabinet-info-additional__toggle-title">Закрытый аккаунт</span>
            <ToggleButton />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
if (process.browser) {
  var { ToggleButton } = require('vue-js-toggle-button')
}
import vBtn from '@/components/buttons/vBtn.vue'

export default {
  components: {
    vBtn,
    ToggleButton
  },
  data() {
    return {
      cabinetInfoAdditional: {
        title: 'Укажите дополнительную информацию и заработайте v-coins:',
        buttons: [
          'Личные данные',
          'Семейное положение',
          'Образование и работа',
          'Интересы и увлечения',
          'Хобби и увлечения ',
          'Вкусовые предпочтения'
        ],
        buttonsRight: [
          'сменить пароль',
          'пополнить баланс',
          'подписаться на расширенную аналитику'
        ]
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.cabinet-info-additional {
  width: 100%;
  min-height: 20rem;
  padding: 5rem;
  box-shadow: 0 0 0.5rem 0.2rem rgba($border-color, 0.5);
  &__title-wrap {
    min-height: 4rem;
    border-bottom: 1px solid $border-color;
    display: flex;
    align-items: center;
  }
  &__title {
    display: inline-block;
    font-family: 'times new roman psmt';
    font-size: 1.3rem;
    font-weight: bold;
    width: 25rem;
  }
  &__button-wrap {
    margin-top: 1.8rem;
  }

  &__button {
    border: 1px solid $border-color;
    min-width: 22rem;
    min-height: 2.5rem;
    border-radius: 2rem;
    justify-content: center;
    margin-right: 1rem;
    // font-size: 0.8rem;
  }
  &__button:hover {
    border: 1px solid $base-color;
    background-color: $base-color;
    color: #fff;
  }
  &__button-wrap-right {
    margin-top: 0.8rem;
    margin-bottom: 0;
    justify-content: center;

    &:first-child {
      margin-top: 1.8rem;
    }
  }
  &__button-right {
    border: 1px solid $border-color;
    min-width: 17rem;
    max-width: 17rem;
    min-height: 3rem;
    justify-content: center;
    font-size: 0.9rem;
    text-transform: uppercase;
    text-align: center;
  }
  &__button-right:hover {
    border: 1px solid $base-color;
    background-color: $base-color;
    color: #fff;
  }
  &__pay {
    display: flex;
    align-items: center;
    margin-left: 1rem;
    font-size: .9rem;
  }
  &__coin-image {
    width: 1.2rem;
    height: 1.2rem;
    margin-right: 0.3rem;
    opacity: 0.8;
  }
  &__toggle {
    height: 3rem;
    display: flex;
    align-items: center;
    width: 17rem;
    margin: auto;
  }
  // &__toggle-title {
  //   // font-size: .9rem;
  // }
}
</style>