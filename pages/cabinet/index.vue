<template>
  <div class="cabinet">
    <detailed-layout :title="'Личный кабинет'">
      <cabinet-info class="cabinet__info container" />
<<<<<<< HEAD
      <cabinet-info-additional class="cabinet-info__additional container" />
=======
      <v-btn class="cabinet__exit-button container" border @click="logout">Выйти</v-btn>
>>>>>>> 328a4b261ba95cf2ecc933c6815150492dd4f54f
    </detailed-layout>
  </div>
</template>

<script>
import detailedLayout from '@/components/layouts/detailedLayout.vue'
import cabinetInfo from '@/components/cabinet/cabinetInfo.vue'
<<<<<<< HEAD
import cabinetInfoAdditional from '@/components/cabinet/cabinetInfoAdditional.vue'
=======
import { mapActions } from 'vuex'
>>>>>>> 328a4b261ba95cf2ecc933c6815150492dd4f54f

export default {
  components: {
    detailedLayout,
<<<<<<< HEAD
    cabinetInfo,
    cabinetInfoAdditional
=======
    cabinetInfo
  },
  methods: {
    ...mapActions({ USER_UNAUTHORIZATION: 'auth/USER_UNAUTHORIZATION' }),
    logout() {
      this.USER_UNAUTHORIZATION()
      this.$navigate('/')
    }
>>>>>>> 328a4b261ba95cf2ecc933c6815150492dd4f54f
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