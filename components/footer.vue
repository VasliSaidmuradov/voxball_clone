<template>
  <div class="Footer">
    <div class="Footer__first">
      <div class="lang-block">
        <p class="Footer__title">Языки:</p>
        <locale :full="true" />
      </div>
      <div class="Footer__menu">
        <p class="Footer__title">Меню:</p>
        <nav-bar />
      </div>
      <div class="additional">
        <p class="Footer__title">Дополнительно:</p>
        <div class="Footer__list">
          <nuxt-link class="Footer__item" to="/">О проекте</nuxt-link>
          <nuxt-link class="Footer__item" to="/">Пакеты коинов</nuxt-link>
          <nuxt-link class="Footer__item" to="/">Стать акционером</nuxt-link>
          <nuxt-link class="Footer__item" to="/">Реклама на сайте</nuxt-link>
          <nuxt-link class="Footer__item" to="/">Контакты</nuxt-link>
          <nuxt-link class="Footer__item" to="/">Пользовательское соглашение</nuxt-link>
          <nuxt-link class="Footer__item" to="/">Наши вакансии</nuxt-link>
        </div>
      </div>

      <div class="additional"></div>
      <div class="contacts"></div>
      <div class="apps"></div>
      <div class="payment-method"></div>
    </div>
    <div class="Footer__second">
      <div class="developed">Разработано МЭЙНТ</div>
    </div>
  </div>
</template>

<script>
import navBar from "@/components/navbar.vue"
import locale from "@/components/locale.vue"

export default {
  components: {
    navBar,
    locale
  }
}
</script>

<style lang="scss" scoped>
.Footer {
  &__list {
    display: flex;
    flex-wrap: wrap;
  }
  &__item {
    flex: 0 0 50%;
    max-width: 50%;
    font-size: 1em;

    text-decoration: none;
    color: #2b454e;
  }

  &__first {
    display: flex;
  }
  &__second {
  }
}

.additional {
  width: 30vw;
}

.lang-block {
  width: 20vw;
}
</style>