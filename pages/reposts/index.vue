<template>
  <detailed-layout :title="'Репосты опросов'" class="reposts">
    <v-form-layout class="reposts__form">
      <v-table
        class="reposts__table"
        :indexed="true"
        :max-height="'20rem'"
        :items="items"
        :fields="fields"
      >
        <template slot="header">
          <div class="reposts__header">
            <p class="reposts__title">Репосты моих постов</p>
            <span class="reposts__count">{{ 5 }}</span>
          </div>
        </template>
        <template slot="vk-head">
          <div class="reposts__icon">
            <icon-vk />
          </div>
        </template>
        <template slot="facebook-head">
          <div class="reposts__icon">
            <icon-facebook />
          </div>
        </template>
        <template slot="whatsapp-head">
          <div class="reposts__icon">
            <icon-whatsapp />
          </div>
        </template>
        <template slot="twitter-head">
          <div class="reposts__icon">
            <icon-twitter />
          </div>
        </template>
        <template slot="telegram-head">
          <div class="reposts__icon mr-5">
            <icon-telegram />
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
import iconVk from '@/components/icons/iconVk.vue'
import iconFacebook from '@/components/icons/iconFacebook.vue'
import iconTelegram from '@/components/icons/iconTelegram.vue'
import iconTwitter from '@/components/icons/iconTwitter.vue'
import iconWhatsapp from '@/components/icons/iconWhatsapp.vue'

export default {
  components: {
    detailedLayout,
    vFormLayout,
    vTable,
    iconVk,
    iconFacebook,
    iconTelegram,
    iconTwitter,
    iconWhatsapp
  },
  data() {
    return {
      reposts: [{ name: 'Как долго Димаш останется на Музыкальном олимпе' }],
      items: [
        {
          name: 'Как долго Димаш останется на Музыкальном олимпе?',
          vk: 100,
          facebook: 50,
          whatsapp: 10,
          twitter: 60,
          telegram: 30
        },
        {
          name: 'Как долго Димаш останется на Музыкальном олимпе?',
          vk: 100,
          facebook: 50,
          whatsapp: 10,
          twitter: 60,
          telegram: 30
        },
        {
          name: 'Как долго Димаш останется на Музыкальном олимпе?',
          vk: 100,
          facebook: 50,
          whatsapp: 10,
          twitter: 60,
          telegram: 30
        },
        {
          name: 'Как долго Димаш останется на Музыкальном олимпе?',
          vk: 100,
          facebook: 50,
          whatsapp: 10,
          twitter: 60,
          telegram: 30
        },
        {
          name: 'Как долго Димаш останется на Музыкальном олимпе?',
          vk: 100,
          facebook: 50,
          whatsapp: 10,
          twitter: 60,
          telegram: 30
        },
        {
          name: 'Как долго Димаш останется на Музыкальном олимпе?',
          vk: 100,
          facebook: 50,
          whatsapp: 10,
          twitter: 60,
          telegram: 30
        },
        {
          name: 'Как долго Димаш останется на Музыкальном олимпе?',
          vk: 100,
          facebook: 50,
          whatsapp: 10,
          twitter: 60,
          telegram: 30
        }
      ],
      fields: [
        {
          field: 'name',
          label: 'Мои опросы'
        },
        {
          field: 'vk'
        },
        {
          field: 'facebook'
        },
        {
          field: 'whatsapp'
        },
        {
          field: 'twitter'
        },
        {
          field: 'telegram'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.reposts {
  &__form {
    padding: 0;
    margin: 3rem auto;
  }
  &__header {
    display: flex;
    align-items: center;
    height: 3rem;
  }
  &__title {
    margin: 0;
    margin-left: 2rem;
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
  &__table {
    width: 60rem;
  }
  &__icon {
    width: 1.5rem;
  }
}
</style>