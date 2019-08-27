<template>
  <div class="Footer">
    <div class="Footer__first container">
      <div class="lang-block">
        <p class="Footer__title">Языки:</p>
        <locale :full="true" />
      </div>
      <div class="Footer__menu">
        <p class="Footer__title">Меню:</p>
        <div class="Footer__list">
          <nuxt-link class="Footer__item" to="/">Главная</nuxt-link>
          <nuxt-link class="Footer__item" to="/">Новости</nuxt-link>
          <nuxt-link class="Footer__item" to="/">Опросы</nuxt-link>
          <nuxt-link class="Footer__item" to="/">Конкурсы и розыгрыши</nuxt-link>
          <nuxt-link class="Footer__item" to="/">Результаты</nuxt-link>
          <nuxt-link class="Footer__item" to="/">Рейтинг</nuxt-link>
        </div>
      </div>
      <div class="additional">
        <p class="Footer__title">Дополнительно:</p>
        <div class="Footer__list">
          <nuxt-link class="Footer__item" to="/">О проекте</nuxt-link>
          <nuxt-link class="Footer__item" to="/">Контакты</nuxt-link>
          <nuxt-link class="Footer__item" to="/">Пакеты коинов</nuxt-link>
          <nuxt-link class="Footer__item" to="/">Пользовательское соглашение</nuxt-link>
          <nuxt-link class="Footer__item" to="/">Стать акционером</nuxt-link>
          <nuxt-link class="Footer__item" to="/">Наши вакансии</nuxt-link>
          <nuxt-link class="Footer__item" to="/">Реклама на сайте</nuxt-link>
        </div>
      </div>
      <div class="apps">
        <p class="Footer__title">Приложения</p>
        <div class="Footer__list"> 
          <nuxt-link class="Footer__item" to="/">
            <img src="~/assets/img/android.png" alt="android icon">
          </nuxt-link>
          <nuxt-link class="Footer__item" to="/">
            <img src="~/assets/img/ios.png" alt="ios icon">
          </nuxt-link>
        </div>
      </div>
      <div class="payment-method">
        <p>Способы оплаты</p>
        <div class="Footer__list">
          <nuxt-link class="Footer__item" to="/">
            <img src="~/assets/img/visa.png" alt="visa icon">
          </nuxt-link>
          <nuxt-link class="Footer__item" to="/">
            <img src="~/assets/img/master-card.png" alt="mastercard icon">
          </nuxt-link>
        </div>
      </div>

      <div class="contacts"></div>
    </div>
    <div class="Footer__second">
      <div class="developed">
        <a href="/" target="_blank">
            <img src="~/assets/img/maint.png" alt="maint logo">
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import navBar from '@/components/shared/navbar.vue'
import locale from '@/components/inputs/locale.vue'

export default {
  props: {},
  components: {
    navBar,
    locale
  }
}
</script>

<style lang="scss" scoped>
$footer-text-color: #334553;
$footer-item-color: #2b454e;
$border-color: #e8e8e8;

.Footer {
  border-top: 1px solid $border-color;
  border-bottom: 1px solid $border-color;
  
  &__first {
    display: flex;
    justify-content: space-between;
    margin-bottom: 2rem;
  }
  &__menu {
    width: 20vw;
  }
  &__title {
    color: $base-text-color;
    font-weight: 400;
  }
  &__list {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }
  &__item {
    flex: 0 0 50%;
    max-width: 50%;
    font-size: 0.8em;
    line-height: 2em;
    text-decoration: none;
    color: $footer-item-color;
    &:hover {
      color: $base-color;
    }
  }

  &__first {
    display: flex;
  }
  &__second {
    display: flex;
    justify-content: center;
    background: $border-color;
    border-top: 2px solid #ffffff;
    border-bottom: 2px solid #ffffff;
    position: relative;
    &:before {
      content: '';
      display: block;
      height: 1px;
      width: 100%;
      background-color: #ffffff;
      position: absolute;
      top: 5%;
    }
  }
}

.lang-block {
  width: 10vw;
}
.additional {
  width: 30vw;
}
.developed {
  width: fit-content;
  padding: 0.5rem;
}
</style>