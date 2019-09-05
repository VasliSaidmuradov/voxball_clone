<template>
  <div class="type">
    <detailed-layout />
    <v-form-layout>
      <label class="type__label">Выберите тип аккаунта</label>
      <v-select 
       class="type__select"
       :options="options"
       :searchable="true"
       :no-drop="false"
       :multiple="false"
       :placeholder="options[0]"
      >
      </v-select>
      <div class="type__buttons">
        <v-btn class="type__link-wrap left-link">
          <nuxt-link class="type__link" to="/login/login">
            войти
            <icon-base icon-name="arrow" class="arrow" viewBox="0 0 22 18">
              <icon-arrow />
            </icon-base>
          </nuxt-link>
        </v-btn>
        <v-btn class="type__link-wrap" border>
          <nuxt-link class="type__link" to="/registration/registrationmode">
            далее
            <icon-base icon-name="arrow" class="arrow" viewBox="0 0 22 18">
              <icon-arrow />
            </icon-base>
          </nuxt-link>
        </v-btn>    
      </div>
    </v-form-layout>
  </div>
</template>

<script>
import iconArrow from '@/components/icons/iconArrow.vue';
import detailedLayout from '@/components/shared/detailedLayout.vue';
import vFormLayout from '@/components/forms/vFormLayout.vue';
// v-select
import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css';
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
  },
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
    margin-bottom: 2rem;
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
  margin-bottom: -10px;
  margin-left: 0.5rem;
  height: auto;
}
</style>
<style>
  .type .v-select .vs__dropdown-toggle {
    border-radius: 37px;
    border-color: #2b454e;
  }
  .type .v-select .vs__open-indicator {
    fill: #007b00;
  }
  .type .v-select .vs__search{
    line-height: 2.0;
    font-size: 0.8em;
  }
  .type .v-select .vs__search[placeholder] {
    color: #2b454e;
    opacity: 0.5;
    font-style: italic;
  }
</style>