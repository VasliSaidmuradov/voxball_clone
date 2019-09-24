<template>
  <div class="about">
    <base-layout>
      <template v-slot:action>
        <h3 class="about-layout__undertitle">{{ layoutData.text }}</h3>
        <ul class="about-layout__list">
          <li class="about-layout__point">Размещать опросы и рейтинги</li>
          <li class="about-layout__point">Зарабатывать альтернативные деньги - v-coins</li>
          <li class="about-layout__point">Собирать аналитические данные по созданным опросам</li>
        </ul>
        <v-btn class="about-layout__button" border @click="$navigate('/ratings/123')">
          <span class="about-layout__button-text">создать личный кабинет</span>
          <icon-arrow class="ml-2" />
        </v-btn>
      </template>
      <section class="about-benefits mt-5">
        <div class="about-benefits__left">
          <h2 class="about-benefits__title">{{ benefitsData.title }}</h2>
          <p class="about-benefits__text">{{ benefitsData.text[0] }}</p>
          <p class="about-benefits__text">{{ benefitsData.text[1] }}</p>
        </div>
        <div class="about-benefits__right">
          <p class="about-benefits__secondary-title">Приемущества Voxball, выраженные в цифрах:</p>
          <div class="about-benefits__item" v-for="(item, index) in benefitsList" :key="index">
            <img
              class="about-benefits__image"
              src="~assets/img/about__icon.png"
              alt="about benefit icon"
            />
            <p class="about-benefits__number">{{ item.number }}</p>
            <p class="about-benefits__info">{{ item.text }}</p>
          </div>
        </div>
      </section>
      <section class="about-goals mb-5">
        <div class="about-goals__header">
          <h2 class="about-goals__title">Проект разработан</h2>
          <p class="about-goals__undertitle">для реализации следующих целей:</p>
        </div>
        <div class="about-goals__list">
          <div class="goal" v-for="(goal, index) in goals" :key="index">
            <div class="goal-wrap">
              <div class="goal-main">
                <div class="goal__img-wrap">
                  <img class="goal__img" src="~assets/img/about-goal__icon.png" alt="goal icon" />
                </div>
                <p class="goal__text">{{ goal.text }}</p>
              </div>
              <div class="goal-footer">
                <div class="goal-footer__wrap">
                  <p class="goal-footer__number">{{ goal.number }}</p>
                  <p class="goal-footer__text">{{ goal.title }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <v-btn class="Section__button mt-5" rounded border>
          зарегистироваться
          <icon-arrow class="ml-2" />
        </v-btn>
      </section>
    </base-layout>
  </div>
</template>

<script>
import baseLayout from '@/components/layouts/baseLayout.vue'
import iconArrow from '@/components/icons/iconArrow.vue'
export default {
  components: {
    baseLayout,
    iconArrow
  },
  data() {
    return {
      layoutData: {
        title: 'Voxball – это первый в Казахстане',
        text:
          'VOXBALL – это первый в Казахстане информационный портал, на котором Вы можете:'
      },
      benefitsData: {
        title: 'Уникальный сервис с электронной валютой',
        text: [
          `Voxball – казахстанский проект, разработанный для определения общественного мнения 
					и публикации новостей в таких сферах, как бизнес, финансы, политика, экономика, туризм и отдых. 
					Единая платформа для бизнес-компаний и частных лиц является незаменимым помощником 
					в проведении опросов и продвижении брендов.
					`,
          `На портале действует виртуальная валюта – v-coins. 
					При помощи этих монет происходит покупка внутренних услуг портала: брендирование опросов 
					и их продвижение в топе. Обладатели персональных и бизнес-аккаунтов имеют возможность 
					заработать валюту отвечая на вопросы в опросах и рейтингах, привлекая целевую аудиторию 
					к участию в опросах или купив пакет  v-coins.`
        ]
      },
      benefitsList: [
        {
          number: '26 598',
          text: 'проведенных конкурсов и опросов',
          src: ''
        },
        {
          number: '945 000',
          text: 'уникальных посетителей в месяц',
          src: ''
        },
        {
          number: '5',
          text: 'новых конкурсов в неделю',
          src: ''
        },
        {
          number: '3 265',
          text: 'компаний-партнеров по всему Казахстану',
          src: ''
        }
      ],
      goals: [
        {
          title: 'Развлечение',
          icon: '',
          text: `Популярные в Казахстане СМИ, используя возможности платформы Voxball,
                создают опросы на актуальные и обсуждаемые темы для охвата 
                максимального количества респондентов. Разделы сайта продуманы таким образом, 
                чтобы предоставить помочь пользователям найти интересующую их информацию 
                от ведущих политологов, социологов, аналитиков и экономистов. `,
          number: '01'
        },
        {
          title: 'Заработок виртуальной валюты',
          icon: '',
          text: `Регистрация на сайте персонального аккаунта или бизнес-профиля предоставляет доступ 
                к созданию опросов, рейтингов и участию в конкурсах и розыгрышах. Каждый зарегистрированный 
                пользователь имеет собственный рейтинг и возможность заработка v-coins, необходимых для покупки 
                услуг на портале Voxball. `,
          number: '02'
        },
        {
          title: 'Продвижение компании',
          icon: '',
          text: `Voxball – эффективный способ привлечения внимания целевой аудитории к компании 
                через опросы и рекламу. Размещая рейтинги и конкурсы на портале, бизнес-партнеры 
                получают возможность дополнительного продвижение через брендирование материалов, 
                публикации в таких соц.сетях как Вконтакте, Instagram и Facebook. 
                Предоставленные возможности сбора аналитики, помогают узнать о предпочтениях 
                пользователей и зафиксировать данные в диаграммах и отчетах.`,
          number: '03'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/section.scss';

.about {
  &-layout {
    &__undertitle {
      width: 90%;
      font-size: 1.4rem;
      font-family: 'times new roman psmt';
      margin: 0;
      line-height: 1;
      padding-top: 1rem;
      padding-bottom: 0.5rem;
    }
    &__text {
      font-size: 1rem;
      margin: 0;
      padding-bottom: 0.3rem;
    }
    &__list {
      margin: 0;
      padding: 0.5rem 0;
      padding-left: calc(2% + 0.3rem);
      color: $base-color;
    }
    &__point {
      color: $base-text-color;
      list-style: none;
      line-height: 1.2;
      &:before {
        content: '\2022';
        color: $base-color;
        font-weight: bold;
        display: inline-block;
        width: 1.5rem;
        margin-left: -1rem;
      }
    }
    &__button {
      border-color: $base-text-color;
      &:hover {
        background-color: transparent;
        border-color: $base-color;
        color: $base-color;
      }
    }
    &__button-text {
      font-size: 0.725rem;
      font-weight: 700;
      letter-spacing: 1.2px;
      text-transform: uppercase;
    }
  }
  &-benefits {
    padding: 0 10%;
    padding-bottom: 4rem;
    height: 24rem;
    display: flex;
    color: white;
    position: relative;

    &__left {
      width: 50%;
      padding-right: 6%;
    }
    &__title {
      margin: 0;
      font-family: 'times new roman psmt';
      text-transform: uppercase;
      color: $third-text-color;
      padding-bottom: 1rem;
      position: relative;
      &:after {
        content: '';
        width: 20%;
        height: 1px;
        background-color: $base-color;
        position: absolute;
        bottom: 0;
        left: 0;
      }
    }
    &__text {
      margin: 0;
      padding-top: 1rem;
      color: $third-text-color;
    }
    &__right {
      background-image: url('~assets/img/about__image.png');
      background-repeat: no-repeat;
      background-size: cover;
      filter: brightness(90%);
      width: 50%;
      padding: 1rem;
      position: relative;
      display: flex;
      flex-wrap: wrap;

      &:before {
        content: '';
        width: 0.8rem;
        height: 80%;
        background-color: $base-color;
        position: absolute;
        left: -0.8rem;
        top: 50%;
        transform: translateY(-50%);
      }
    }

    &__secondary-title {
      font-family: 'times new roman psmt';
      font-size: 1.4rem;
      margin: 0;
      padding: 0.7rem 1rem;
    }

    &__item {
      width: 50%;
      height: 40%;
      padding: 1rem;
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    &__image {
      position: absolute;
      top: 1rem;
      left: 1rem;
    }
    &__number {
      font-size: 2rem;
      margin: 0;
    }
    &__info {
      margin: 0;
      line-height: 1rem;
      width: 75%;
    }
  }
  &-goals {
    padding: 0 10%;
    border-top: 1px solid $border-color;
    &__header {
      padding: 1.5rem 0;
    }
    &__title {
      color: $third-text-color;
      text-transform: uppercase;
      margin: 0;
    }
    &__undertitle {
      color: $secondary-text-color;
      margin: 0;
    }
    &__list {
      display: flex;
      justify-content: space-between;
    }
  }
}
.goal {
  position: relative;
  width: 21rem;
  &-main {
    box-shadow: 1px 1px 28px 2px rgba(0, 0, 0, 0.26);
    position: relative;
    background: white;
    padding: 1.5rem;
    width: 90%;
    min-height: 25rem;
    margin: 0 auto;
    margin-bottom: 8rem;
    z-index: 2;

    &:after {
      content: '';
      width: 0;
      height: 0;
      border-top: solid 4rem white;
      border-left: solid 2rem transparent;
      border-right: solid 2rem transparent;
      position: absolute;
      bottom: -2rem;
    }
  }
  &__img-wrap {
    height: 3rem;
  }
  &__img {
    height: 100%;
  }
  &__text {
    margin: 0;
    padding: 1rem 0;
    color: $third-text-color;
  }
  &-footer {
    height: 90%;
    width: 100%;
    position: absolute;
    bottom: 0;
    border: 5px solid $base-color;
    display: flex;
    justify-content: center;
    align-items: flex-end;

    &__wrap {
      display: flex;
      align-items: center;
      padding: 1rem;
      padding-left: 2rem;
      width: 100%;
      height: 7rem;
    }

    &__number {
      font-family: 'times new roman psmt';
      font-size: 2.3rem;
      margin: 0;
      padding: 1rem;
    }

    &__text {
      font-family: 'times new roman psmt';
      font-size: 1.6rem;
      font-weight: 400;
      text-transform: uppercase;
      margin: 0;
    }
  }
}
</style>