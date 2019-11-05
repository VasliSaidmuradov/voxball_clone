<template>
  <div class="additional-list container">
    <div class="personal-data">
      <h2 class="personal-data__title">ЛИЧНЫЕ ДАННЫЕ</h2>
      <additional-item
        v-for="(data, index) in personalData"
        :key="index"
        :dataTitle="data.title"
        :dataType="data.type"
      ></additional-item>

      <h2 class="personal-data__title">МЕСТО ПРОЖИВАНИЯ</h2>
      <additional-item
        v-for="(data, index) in personalAddress"
        :key="index"
        :dataTitle="data.title"
        :dataType="data.type"
      ></additional-item>
    </div>

    <div class="personal-data">
      <h2 class="personal-data__title">СЕМЕЙНОЕ ПОЛОЖЕНИЕ</h2>
      <additional-item
        v-for="(data, index) in familyStatus"
        :key="index"
        :dataTitle="data.title"
        :dataType="data.type"
      ></additional-item>
    </div>

    <div class="personal-data">
      <h2 class="personal-data__title">ОБРАЗОВАНИЕ И РАБОТА</h2>
      <additional-item
        v-for="(data, index) in educationAndWork"
        :key="index"
        :dataTitle="data.title"
        :dataType="data.type"
      ></additional-item>
    </div>

    <div class="personal-data">
      <h2 class="personal-data__title">ИНТЕРЕСЫ И УВЛЕЧЕНИЯ</h2>
      <additional-item
        v-for="(data, index) in interestsAndHobbies"
        :key="index"
        :dataTitle="data.title"
        :dataType="data.type"
      ></additional-item>
    </div>

    <div class="additional-list__button-wrap">
      <v-btn class="additional-list__button">ОТМЕНИТЬ</v-btn>
      <v-btn class="additional-list__button additional-list__button-primary">СОХРАНИТЬ</v-btn>
    </div>
  </div>
</template>

<script>
import datePicker from '@/components/inputs/datePicker.vue'
import additionalItem from '@/components/cabinet/additional/additionalItem.vue'
import vBtn from '@/components/buttons/vBtn.vue'

export default {
  components: {
    datePicker,
    additionalItem,
    vBtn
  },
  props: {
    data: Array,
    personalData: Array,
    personalAddress: Array,
    familyStatus: Array,
    educationAndWork: Array,
    interestsAndHobbies: Array
  }
}
</script>

<style lang="scss" scoped>
.additional-list {
  box-shadow: 0 0 0.5rem 0.2rem rgba($border-color, 0.5);
  min-height: 20rem;
  padding: 0 0 2rem 0;

  &__button-wrap {
    margin: auto;
    width: 100%;
    display: flex;
    justify-content: center;
  }

  &__button {
    min-width: 20%;
    min-height: 2.5rem;
    border-radius: 2.5rem;
    color: $base-color;
    display: flex;
    justify-content: center;

    &-primary {
      background-color: $base-color;
      color: #fff;
      &:hover {
        color: #fff;
      }
    }
  }
}

.personal-data {
  padding: 2rem;
  display: flex;
  flex-wrap: wrap;

  &__title {
    width: 100%;
    font-family: 'times new roman psmt';
    font-weight: 400;
    border-bottom: 0.1rem solid $base-color;
  }
}
</style>