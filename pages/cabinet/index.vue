<template>
  <div class="cabinet">
    <detailed-layout :title="'Личный кабинет'">
      <cabinet-info class="cabinet__info container" />
    </detailed-layout>
  </div>
</template>

<script>
import detailedLayout from '@/components/layouts/detailedLayout.vue'
import cabinetInfo from '@/components/cabinet/cabinetInfo.vue'
export default {
  components: {
    detailedLayout,
    cabinetInfo
  }
}
</script>

<style lang="scss" scoped>
.cabinet {
  &__info {
    width: 80%;
  }
}
</style>