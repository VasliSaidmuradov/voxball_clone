<template>
  <detailed-layout class="cabinet-polls" :title="'Мои Опросы'">
    <section class="Section cabinet-polls__section container">
      <div class="Section__header">
        <div class="Section__options cabinet-polls__options">
          <v-select
            :options="categories"
            :searchable="true"
            :no-drop="false"
            :multiple="false"
            placeholder="Категории"
          ></v-select>
          <v-select
            class="ml-5"
            :options="pollStatus"
            :searchable="true"
            :no-drop="false"
            :multiple="false"
            placeholder="ВСЕ"
          ></v-select>
        </div>
      </div>
      <polls-list :list="polls" :adv="advList" :adv-n="3" />
      <v-btn class="Section__button cabinet-polls__button" border rounded>
        загрузить еще
        <icon-arrow class="ml-2" />
      </v-btn>
    </section>
  </detailed-layout>
</template>

<script>
export default {

}
</script>

<style>

</style>