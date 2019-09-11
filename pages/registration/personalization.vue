<template>
  <div class="person">
    <detailed-layout :title="'Регистрация'"/>
    <v-form-layout>
      <label class="person__label">Ваше имя</label>
      <input 
        class="person__input person__name"
        type="text" 
        v-model="name"
      >
      <label class="person__label">Подписаться на 3 категории</label>
      <v-select 
       class="person__select"
       :options="options"
       :searchable="true"
       :no-drop="false"
       :multiple="false"
       :placeholder="options[0]"
      >
      </v-select>
      <v-select 
       class="person__select"
       :options="options"
       :searchable="true"
       :no-drop="false"
       :multiple="false"
       :placeholder="options[1]"
      >
      </v-select>
      <v-select 
       class="person__select"
       :options="options"
       :searchable="true"
       :no-drop="false"
       :multiple="false"
       :placeholder="options[2]"
      >
      </v-select>
      <div class="person__buttons">
        <v-btn class="person__link-wrap left-link">
          <nuxt-link class="person__link" to="/">
            <icon-base icon-name="arrow-left" class="arrow" viewBox="0 0 22 18">
              <icon-arrowleft />
            </icon-base>
            назад
          </nuxt-link>
        </v-btn>
        <v-btn class="person__link-wrap" border>
          <nuxt-link class="person__link" to="/">
            зарегистрироваться
            <icon-base icon-name="arrow" class="arrow" viewBox="0 0 22 18">
              <icon-arrow />
            </icon-base>
          </nuxt-link>
        </v-btn>    
      </div>
      <registration-social />
    </v-form-layout>
  </div>
</template>

<script>
import iconArrow from '@/components/icons/iconArrow.vue';
import iconArrowleft from '@/components/icons/iconArrowleft.vue';
import detailedLayout from '@/components/shared/detailedLayout.vue';
import vFormLayout from '@/components/forms/vFormLayout.vue';
import registrationSocial from '@/components/registration/registrationSocial.vue';
// v-select
import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css';
export default {
  components: {
    iconArrow,
    iconArrowleft,
    vSelect,
    detailedLayout,
    vFormLayout,
    registrationSocial
  },
  data() {
    return {
      options: ['Еда','Развлечения','Политика'],
      name: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.person {
  background-image: url('~assets/img/registration__bg.png');
  background-size: 100%;
  background-repeat: no-repeat;
  min-height: 40rem;

  &__input {
    appearance: none;
    display: flex;
    background: white;
    border: 1px solid $base-text-color;
    border-radius: 37px;
    white-space: normal;
    line-height: 2.0;
    font-size: 1em;
    outline: none;
    margin-bottom: 1rem;
    padding: 0 1rem;
    width: 100%;
    color: $base-text-color;
    font-style: normal;
  }

  &__label {
    display: block;
    margin-bottom: 0.5rem;
  }

  &__select {
    margin-bottom: 0.5rem;
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
  padding-left: 0;
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
  .person .v-select .vs__dropdown-toggle {
    border-radius: 37px;
    border-color: #2b454e;
  }
  .person .v-select .vs__open-indicator {
    fill: #007b00;
  }
  .person .v-select .vs__search{
    line-height: 2.0;
    font-size: auto;
  }
  .person .v-select .vs__search[placeholder] {
    color: #2b454e;
    padding-left: 1rem;
    font-size: 0.8em;
    opacity: 0.5;
    font-style: italic;
  }
  .person .v-select .vs__actions {
    padding-right: 1rem;
  }
</style>