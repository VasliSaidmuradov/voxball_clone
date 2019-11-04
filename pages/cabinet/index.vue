<template>
  <div class="cabinet">
    <detailed-layout :title="'Личный кабинет'">
      <cabinet-info class="cabinet__info container" />
      <cabinet-info-additional class="cabinet-info__additional container" />
    </detailed-layout>
  </div>
</template>

<script>
import detailedLayout from '@/components/layouts/detailedLayout.vue'
import cabinetInfo from '@/components/cabinet/cabinetInfo.vue'
import cabinetInfoAdditional from '@/components/cabinet/cabinetInfoAdditional.vue'

export default {
  components: {
    detailedLayout,
    cabinetInfo,
    cabinetInfoAdditional
  }
}
</script>

<style lang="scss" scoped>
.cabinet {
  &__info {
    width: 80%;
  }
}
.cabinet-info {
  &__additional {
    width: 80%;
    margin-bottom: 3rem;
  }
}
</style>