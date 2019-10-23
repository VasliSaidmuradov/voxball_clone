<template>
  <detailed-layout :title="'Мои подписчики'" class="subscribers">
    <v-form-layout class="subscribers__form">
      <v-table
        class="subscribers__table"
        :indexed="true"
        :max-height="'20rem'"
        :items="items"
        :fields="fields"
      >
        <template slot="header">
          <div class="subscribers__header">
            <p class="subscribers__title">подписчики</p>
            <span class="subscribers__count">{{ 5 }}</span>
          </div>
        </template>
        <template slot="user" slot-scope="props">
          <div class="subscribers__user" @click="$navigate(props.data.userPage)">
            <img class="subscribers__avatar" src="~assets/img/avatar__icon.png" />
            <p class="subscribers__name">{{ props.data.text }}</p>
          </div>
        </template>
      </v-table>
    </v-form-layout>
  </detailed-layout>
</template>

<script>
import detailedLayout from '@/components/layouts/detailedLayout.vue'
import vFormLayout from '@/components/forms/vFormLayout.vue'
import vTable from '@/components/tables/vTable.vue'
export default {
  components: {
    detailedLayout,
    vFormLayout,
    vTable
  },
  data() {
    return {
      items: [
        {
          user: {
            text: 'Карина Карр',
            userPage: '/profile',
            imgSrc: ''
          },
          accounttype: 'персональный'
        },
        {
          user: {
            text: 'Карина Карр',
            userId: '/profile',
            imgSrc: ''
          },
          accounttype: 'коммерческий'
        },
        {
          user: {
            text: 'Карина Карр',
            userId: '/profile',
            imgSrc: ''
          },
          accounttype: 'персональный'
        },
        {
          user: {
            text: 'Карина Карр',
            userId: '/profile',
            imgSrc: ''
          },
          accounttype: 'персональный'
        },
        {
          user: {
            text: 'Карина Карр',
            userId: '/profile',
            imgSrc: ''
          },
          accounttype: 'персональный'
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
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.subscribers {
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
</style>