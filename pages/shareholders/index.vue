<template>
  <div class="shareholders">
    <base-layout :title="layoutData.title">
      <template v-slot:action>
        <h3 class="shareholders-layout__undertitle">{{ layoutData.text }}</h3>
        <p class="shareholders-layout__text">Зарегистрируйтесь на Voxball и получите 500 v-coins</p>
        <v-btn class="shareholders-layout__button mt-2" border @click="$navigate('/ratings/123')">
          <span class="shareholders-layout__button-text">зарегистрироваться</span>
          <icon-arrow class="ml-2" />
        </v-btn>
      </template>
      <section class="shareholders-section">
        <div class="shareholders-section__header">
          <h2 class="shareholders-section__title">Voxball делает</h2>
          <p class="shareholders-section__text">предложение каждому пользователю:</p>
        </div>
        <proposal-list :proposalsList="proposals"></proposal-list>
      </section>
      <section class="shareholders-section">
        <div class="shareholders-section__header">
          <h2 class="shareholders-section__title">6 шагов</h2>
          <p class="shareholders-section__text">к статусу «держатель акций»:</p>
        </div>
        <shareholder-steps-list :stepsList="stepsArr"></shareholder-steps-list>
      </section>
      <section class="shareholders-section shareholders-section_wide">
        <div class="shareholders-section__header shareholders-section__header_wide">
          <h2 class="shareholders-section__title">Успешные акционеры</h2>
          <p class="shareholders-section__text">на Voxball</p>
        </div>
        <div class="shareholders-table">
          <v-form-layout class="shareholders-table__layout">
            <v-table :indexed="true" :min-height="'20rem'" :items="items" :fields="fields">
              <template v-slot:header>
                <div class="shareholders-table__header">
                  <h2 class="shareholders-table__title">
                    Свои дивиденды получают уже
                    <span class="shareholders-table__text">1936</span>
                    пользователей. Осталось всего
                    <span
                      class="shareholders-table__text"
                    >2025</span> мест.
                  </h2>
                </div>
              </template>
            </v-table>
          </v-form-layout>
        </div>
        <v-btn class="Section__button mt-5" rounded border>
          стать акционером
          <icon-arrow class="ml-2" />
        </v-btn>
      </section>
    </base-layout>
  </div>
</template>

<script>
import baseLayout from '@/components/layouts/baseLayout.vue'
import iconArrow from '@/components/icons/iconArrow.vue'
import proposalList from '@/components/shareholder/proposal/proposalList.vue'
import shareholderStepsList from '@/components/shareholder/shareholderSteps/shareholderStepsList.vue'
import vFormLayout from '@/components/forms/vFormLayout.vue'
import vTable from '@/components/tables/vTable.vue'
import datePicker from '@/components/inputs/datePicker.vue'
import vEditor from '@/components/inputs/vEditor.vue'

export default {
  components: {
    baseLayout,
    iconArrow,
    proposalList,
    shareholderStepsList,
    vFormLayout,
    vTable,
    datePicker,
    vEditor
  },
  data() {
    return {
      layoutData: {
        title: 'Зарабатывайте v-coins',
        text: 'и становитесь акционерами портала Voxball'
      },
      proposals: [
        {
          title: 'Выгодные условия',
          desc:
            'электронной валюты на участии в опросах, рейтингах, конкурсах и розыгрышах',
          src: ''
        },
        {
          title: 'Заработок',
          desc:
            'электронной валюты на участии в опросах, рейтингах, конкурсах и розыгрышах',
          src: ''
        },
        {
          title: 'Новости',
          desc:
            'электронной валюты на участии в опросах, рейтингах, конкурсах и розыгрышах',
          src: ''
        },
        {
          title: 'Расширенная аналитика ',
          desc:
            'электронной валюты на участии в опросах, рейтингах, конкурсах и розыгрышах',
          src: ''
        },
        {
          title: 'Размещение рекламных материалов ',
          desc:
            'электронной валюты на участии в опросах, рейтингах, конкурсах и розыгрышах',
          src: ''
        },
        {
          title: 'Брендирование опросов ',
          desc:
            'электронной валюты на участии в опросах, рейтингах, конкурсах и розыгрышах',
          src: ''
        }
      ],
      stepsArr: [
        {
          title: '01',
          text: 'Зарегистрируйтесь на сервисе',
          src: ''
        },
        {
          title: '02',
          text: 'Создавайте опросы и рейтинги',
          src: ''
        },
        {
          title: '03',
          text: 'Участвуйте в опросах и рейтингах',
          src: ''
        },
        {
          title: '04',
          text: 'Наберите 5 000 v-coins',
          src: ''
        },
        {
          title: '05',
          text: 'Автоматически станьте акционером Voxball',
          src: ''
        },
        {
          title: '06',
          text: 'Получайте свой процент от прибыли портала ежегодно',
          src: ''
        }
      ],
      items: [
        {
          name: 'Nurbek'
        },
        {
          name: 'Nurbek2'
        },
        {
          name: 'Nurbek3'
        },
        {
          name: 'Nurbek'
        },
        {
          name: 'Nurbek2'
        },
        {
          name: 'Nurbek3'
        }
      ],
      fields: [
        {
          field: 'name',
          label: 'Акционер'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/section.scss';

.shareholders {
  &-layout {
    &__undertitle {
      font-size: 1.4rem;
      font-family: 'times new roman psmt';
      margin: 0;
      padding-bottom: 0.7rem;
    }
    &__text {
      font-size: 1rem;
      margin: 0;
      padding-bottom: 0.3rem;
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
  &-section {
    padding: 0 12.5%;
    padding-bottom: 4rem;
    border-top: 1px solid $border-color;
    &_wide {
      padding-right: 0;
      padding-left: 0;
    }
    &__header {
      padding: 1.8rem 0;
      &_wide {
        padding-right: 12.5%;
        padding-left: 12.5%;
      }
    }
    &__title {
      color: #555557;
      text-transform: uppercase;
      font-family: 'times new roman psmt';
      font-size: 1.5em;
      margin: 0;
    }
    &__text {
      color: $secondary-text-color;
      margin: 0;
    }
    &__button {
    }
  }
  &-table {
    background-image: url('~assets/img/registration__bg.png');
    background-size: 100%;
    background-repeat: no-repeat;
    &__layout {
      width: fit-content;
      padding: 0;
      padding-top: 1rem;
    }
    &__header {
      text-align: center;
      color: #565656;
    }
    &__title {
      font-size: 1rem;
      margin: 0;
      padding-bottom: 1rem;
    }
    &__text {
      color: $secondary-text-color;
    }
  }
}
</style>
<style lang="scss">
.shareholders .table-thead__th:first-child {
  width: 10%;
}
</style>