<template>
  <detailed-layout :title="'Мои подписки'" class="subscriptions">
    <v-form-layout class="subscriptions__form">
      <v-table
        class="subscriptions__table"
        :indexed="true"
        :max-height="'20rem'"
        :items="items"
        :fields="fields"
      >
        <template slot="header">
          <div class="subscriptions__header">
            <p class="subscriptions__title">подписки</p>
            <span class="subscriptions__count">{{ 5 }}</span>
          </div>
        </template>
        <template slot="user" slot-scope="props">
          <div class="subscriptions__user" @click="$navigate(props.data.userPage)">
            <img src="~assets/img/avatar__icon.png" />
            <p class="subscriptions__name">{{ props.data.text }}</p>
          </div>
        </template>
        <template slot="button" slot-scope="props">
          <v-btn class="table-tbody__button" @click="unsubscribe" border>{{ props.data }}</v-btn>
        </template>
      </v-table>
    </v-form-layout>
    <v-modal class="subscriptions__modal" :showModal="unsubscribeModal" @close="closeUnsubscribe">
      <template slot="body">
        <p class="modal__title">ВЫ УВЕРЕНЫ ЧТО ХОТИТЕ ОТПИСАТЬСЯ?</p>
      </template>
      <template slot="footer">
        <v-btn @click="unsubscribeOk" border>Да</v-btn>
      </template>
    </v-modal>
  </detailed-layout>
</template>

<script>
import detailedLayout from '@/components/layouts/detailedLayout.vue'
import vFormLayout from '@/components/forms/vFormLayout.vue'
import vTable from '@/components/tables/vTable.vue'
import vModal from '@/components/modals/vModal.vue'
export default {
  components: {
    detailedLayout,
    vFormLayout,
    vTable,
    vModal
  },
  methods: {
    unsubscribe() {
      this.unsubscribeModal = true
    },
    closeUnsubscribe() {
      this.unsubscribeModal = false
    },
    unsubscribeOk() {
      this.closeUnsubscribe()
    }
  },
  data() {
    return {
      unsubscribeModal: false,
      items: [
        {
          user: {
            text: 'Карина Карр',
            userPage: '/profile',
            imgSrc: ''
          },
          accounttype: 'персональный',
          button: 'отписаться'
        },
        {
          user: {
            text: 'Карина Рарр',
            userId: '/profile',
            imgSrc: ''
          },
          accounttype: 'коммерческий',
          button: 'отписаться'
        },
        {
          user: {
            text: 'Карина3',
            userId: '/profile',
            imgSrc: ''
          },
          accounttype: 'персональный',
          button: 'отписаться'
        },
        {
          user: {
            text: 'Карина Карина',
            userId: '/profile',
            imgSrc: ''
          },
          accounttype: 'персональный',
          button: 'отписаться'
        },
        {
          user: {
            text: 'Карина2',
            userId: '/profile',
            imgSrc: ''
          },
          accounttype: 'персональный',
          button: 'отписаться'
        }
      ],
      fields: [
        {
          field: 'user',
          label: 'подписчики'
        },
        {
          field: 'accounttype',
          label: 'тип аккаунта'
        },
        {
          field: 'button',
          label: ''
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.subscriptions {
  &__form {
    padding: 0;
    margin-top: 2rem;
    margin-bottom: 3rem;
    width: 50rem;
  }
  &__header {
    display: flex;
    align-items: center;
    height: 3rem;
    padding: 1rem;
  }
  &__title {
    margin: 0;
    text-transform: uppercase;
    color: $third-text-color;
    font-weight: 600;
  }
  &__count {
    background-color: $base-color;
    color: white;
    padding: 0.4rem 2rem;
    margin-left: 1rem;
  }
  &__user {
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  &__avatar {
    width: 3rem;
    height: 3rem;
  }
  &__name {
    margin: 0;
  }
}
.modal {
  &__title {
    padding: 0 1rem;
  }
}
</style>