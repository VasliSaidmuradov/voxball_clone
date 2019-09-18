<template>
  <div class="type">
    <detailed-layout :title="'Регистрация'">
      <v-form-layout class="mt-5 mb-5">
        <label class="type__label">Выберите тип аккаунта</label>
        <v-select
          class="type__select"
          :options="options"
          :searchable="false"
          :no-drop="false"
          :multiple="false"
          :placeholder="options[0]"
        ></v-select>
        <div class="type__buttons">
          <v-btn @click="$navigate('/login/login')" class="type__link-wrap left-link" link>
            войти
            <span>
              <icon-arrow class="arrow" />
            </span>
          </v-btn>
          <v-btn
            @click="$navigate('/registration/registrationmode')"
            class="type__link-wrap"
            border
          >
            далее
            <span>
              <icon-arrow class="arrow" />
            </span>
          </v-btn>
        </div>
      </v-form-layout>
    </detailed-layout>
  </div>
</template>

<script>
import iconArrow from '@/components/icons/iconArrow.vue'
import detailedLayout from '@/components/layouts/detailedLayout.vue'
import vFormLayout from '@/components/forms/vFormLayout.vue'
// v-select
import vSelect from 'vue-select'
import '@/assets/css/vSelect.scss';

export default {
  components: {
    iconArrow,
    vSelect,
    detailedLayout,
    vFormLayout
  },
  data() {
    return {
      options: ['Персональный', 'Корпоративный']
    }
  }
}
</script>

<style lang="scss" scoped>
.type {
  background-image: url('~assets/img/registration__bg.png');
  background-size: 100%;
  background-repeat: no-repeat;
  min-height: 40rem;

  &__label {
  }

  &__select {
    margin-top: 0.5rem;
  }

  &__buttons {
    display: flex;
    justify-content: space-between;
    margin-top: 1.5rem;
  }

  &__link-wrap {
    color: $base-text-color;
    border-color: $base-text-color;
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
.left-link {
  text-decoration: underline;
  &:hover {
    background: none;
    color: $secondary-text-color;
  }
}
.arrow {
  width: 1.3em;
  margin-left: 0.5rem;
}
</style>
<style>
.type .v-select{
  width: 100%;
}
.type .v-select .vs__dropdown-toggle {
  border-color: #2b454e;
}
.type .v-select .vs__open-indicator {
  fill: #007b00;
}
.type .v-select .vs__search {
  line-height: 2;
  font-size: 0.8em;
}
.type .v-select .vs__search[placeholder] {
  opacity: 0.5;
  font-style: italic;
}
</style>