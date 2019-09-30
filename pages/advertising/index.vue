<template>
  <div class="advert">
    <detailed-layout
      title="Подайте заявку на рекламу"
      text="и мы свяжемся с Вами в течении рабочего дня"
    >
      <v-form-layout class="mt-5 mb-5">
        <div>
          <label class="advert__label">Ваше имя:</label>
          <input class="advert__input advert__name" type="text" v-model="name" />
          <label class="advert__label">Название организации:</label>
          <input class="advert__input advert__name" type="text" v-model="company" />
          <label class="advert__label">Контактные данные:</label>
          <input
            class="advert__input advert__tel"
            type="tel"
            v-mask="'+7(###) ### ## ##'"
            v-model="tel"
            placeholder="+7(___) ___ __ __"
          />
        </div>
        <div class="advert__buttons">
          <v-btn class="advert__link-wrap" @click="openThanksModal()" border>подать заявку</v-btn>
        </div>
      </v-form-layout>
      <v-modal
        :abort="false"
        :title="thanksModalData.title"
        :showModal="thanksModalData.modalShow"
        @close="closeThanks()"
      >
        <template v-slot:footer>
          <v-btn @click="closeThanks()" border>
            <span>Ок</span>
          </v-btn>
        </template>
      </v-modal>
    </detailed-layout>
  </div>
</template>

<script>
import Vue from 'vue'
import detailedLayout from '@/components/layouts/detailedLayout.vue'
import vFormLayout from '@/components/forms/vFormLayout.vue'
import vModal from '@/components/modals/vModal.vue'
// v-mask
import VueMask from 'v-mask'
Vue.use(VueMask)
import { VueMaskDirective } from 'v-mask'
Vue.directive('mask', VueMaskDirective)

export default {
  components: {
    detailedLayout,
    vFormLayout,
    vModal
  },
  data() {
    return {
      name: '',
      company: '',
      tel: '',
      thanksModalData: {
        title: 'Спасибо за Вашу заявку',
        modalShow: false
      }
    }
  },
  methods: {
    openThanksModal() {
      this.thanksModalData.modalShow = true
    },
    closeThanks() {
      this.thanksModalData.modalShow = false
    }
  }
}
</script>

<style lang="scss" scoped>
.advert {
  background-image: url('~assets/img/registration__bg.png');
  background-size: 100%;
  background-repeat: no-repeat;
  min-height: 40rem;

  &-layout {
    &__title {
      text-transform: uppercase;
      font-family: 'times new roman psmt';
      font-size: 1.5rem;
      font-weight: 500;
      margin: 0;
    }
    &__text {
      font-size: 1rem;
      margin: 0;
    }
  }

  &__input {
    appearance: none;
    display: flex;
    background: none;
    border: 1px solid $base-text-color;
    border-radius: 37px;
    white-space: normal;
    line-height: 2;
    font-size: 1rem;
    outline: none;
    margin-top: 0.5rem;
    margin-bottom: 1rem;
    padding: 0.4rem 0;
    padding-left: 1.5rem;
    width: 100%;
    color: $base-text-color;
    font-style: normal;
  }

  &__tel {
  }

  &__email {
    margin-top: 0.2rem;
    margin-bottom: 0.6rem;
  }

  &__password {
    margin-top: 0.2rem;
    margin-bottom: 0.6rem;
  }

  &__buttons {
    display: flex;
    justify-content: center;
    padding: 1rem 0 2rem;
  }

  &__link-wrap {
    color: $base-text-color;
    border-color: $base-text-color;
    padding: 0.5rem 1.5rem;
    &:hover {
      color: white;
      background-color: $secondary-text-color;
      border-color: $secondary-text-color;
    }
  }

  &__link {
    color: inherit;
    text-decoration: none;
    position: relative;
  }
}
</style>