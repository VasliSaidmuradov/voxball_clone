<template>
  <div class="cabinet">
    <detailed-layout :title="'Личный кабинет'">
      <cabinet-info class="cabinet__info container" />
      <cabinet-info-additional class="cabinet-info__additional container" />
      <!-- <v-btn class="cabinet__exit-button container" border @click="logout">Выйти</v-btn> -->
    </detailed-layout>
  </div>
</template>

<script>
import detailedLayout from '@/components/layouts/detailedLayout.vue'
import cabinetInfo from '@/components/cabinet/cabinetInfo.vue'
import cabinetInfoAdditional from '@/components/cabinet/cabinetInfoAdditional.vue'
import { mapActions } from 'vuex'

export default {
  components: {
    detailedLayout,
    cabinetInfo,
    cabinetInfoAdditional
  },
  methods: {
    ...mapActions({ USER_UNAUTHORIZATION: 'auth/USER_UNAUTHORIZATION' }),
    logout() {
      this.USER_UNAUTHORIZATION()
      this.$navigate('/')
    }
  }
}
</script>

<style lang="scss" scoped>
.cabinet {
  &__info {
    width: 80%;
  }
  &__exit-button {
    margin-right: 10%;
    margin-bottom: 5rem;
  }
}
.cabinet-info {
  &__additional {
    width: 80%;
    margin-bottom: 3rem;
  }
}
</style>