<template>
  <div class="cabinet-info-list">
    <cabinet-info-item v-for="(item, index) in list" :data="item" :key="index" />
  </div>
</template>

<script>
import cabinetInfoItem from '@/components/cabinet/cabinetInfoList/cabinetInfoItem.vue'

export default {
  components: {
    cabinetInfoItem
  },
  props: {
    list: Array
  }
}
</script>

<style lang="scss" scoped>
.cabinet-info-list {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  flex-wrap: wrap;
  height: 100%;
}
</style>