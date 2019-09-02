<template>
  <div class="type">
    <div class="type__form">
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
        <v-btn class="type__link-wrap" link>
          <nuxt-link class="type__link" to="/">
            войти
            <icon-base icon-name="arrow" class="arrow">
              <icon-arrow />
            </icon-base>
          </nuxt-link>
        </v-btn>
        <v-btn class="type__link-wrap" border>
          <nuxt-link class="type__link" to="/">
            далее
            <icon-base icon-name="arrow" class="arrow">
              <icon-arrow />
            </icon-base>
          </nuxt-link>
        </v-btn>    
      </div>
    </div>
  </div>
</template>

<script>
import iconArrow from '@/components/icons/iconArrow.vue';
import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css';
export default {
  components: {
    iconArrow,
    vSelect
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
  width: 25%;
  min-height: 10rem;
  margin: 0 auto;

  &__form {
    box-shadow: 1px 1px 10px 1px rgba(0, 0, 0, 0.2);
    padding: 3rem 1.5rem;
  }

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
    display: inline-block;
    padding: 0.3rem 0rem;
    &:nth-child(2) {
      padding: 0.3rem 1rem;
      border-color: $base-text-color;
    }
  }

  &__link {
    color: $base-text-color;
    text-decoration: none;
    position: relative;
  }

}
.arrow {
  margin-bottom: -13px;
  margin-left: 0.5rem;
  height: auto;
}

</style>
<style>
/* for v-select */
.v-select .vs__dropdown-toggle {
  border-radius: 37px;
}
.v-select .vs__open-indicator {
  fill: #007b00;
}
.v-select .vs__search[placeholder] {
  color: #2b454e;
  opacity: 0.5;
  font-style: italic;
}
</style>