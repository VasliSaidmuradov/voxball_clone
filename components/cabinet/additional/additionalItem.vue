<template>
  <div class="additional-item">
    <label :for="dataTitle" class="additional-item__lebel">{{ dataTitle }}</label>
    <v-select v-if="dataType === 'select'" class="additional-item__select" :options="gender"></v-select>
    <input
      type="tel"
      :id="dataTitle"
      v-if="dataType === 'tel'"
      v-mask="'+7(###) ### ## ##'"
      class="additional-item__select additional-item__tel"
    />
    <input
      type="email"
      :id="dataTitle"
      v-if="dataType === 'email'"
      class="additional-item__select additional-item__email"
    />
    <input
      type="text"
      :id="dataTitle"
      class="additional-item__select additional-item__text"
      v-if="dataType === 'text'"
    />
    <date-picker
      :dateTime="false"
      v-if="dataType === 'date'"
      class="additional-item__select additional-item__date"
    ></date-picker>
  </div>
</template>

<script>
import Vue from 'vue'
import vSelect from 'vue-select'
import datePicker from '@/components/inputs/datePicker.vue'
import VueMask from 'v-mask'
Vue.use(VueMask)
import { VueMaskDirective } from 'v-mask'
Vue.directive('mask', VueMaskDirective)

export default {
  components: {
    vSelect,
    datePicker
  },
  props: {
    dataTitle: String,
    dataType: String,
    // personalData: {
    //   type: Array,
    //   default: () => []
    // },
    // personalAddress: {
    //   type: Array,
    //   default: () => []
    // },
    // familyStatus: {
    //   type: Array,
    //   default: () => []
    // }
  },
  data() {
    return {
      gender: [
        {
          label: 'Male'
        },
        {
          label: 'Female'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.additional-item {
  width: 50%;
  margin-bottom: 1rem;

  &__lebel {
    font-size: 1rem;
    margin-left: 10%;
  }

  &__select {
    width: 80%;
    height: 2.5rem;
    border-radius: 2.5rem;
    margin-left: 10%;
    margin-top: 0.3rem;
    outline: none;
  }
  &__text,
  &__tel,
  &__email {
    padding: 0 1rem;
    border: 1px solid $border-color;
  }
}
</style>