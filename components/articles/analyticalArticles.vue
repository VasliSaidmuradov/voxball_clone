<template>
  <div>
    <div class="row">
      <div class="col-6 d-flex flex-column justify-content-between">
        <analytical-card class="Analitic-articles__card"></analytical-card>
        <analytical-card class="Analitic-articles__card"></analytical-card>
      </div>
      <div class="col-3">
        <analytical-card class="Analitic-articles__card" column></analytical-card>
      </div>
      <div class="col-3">
        <advertising advWidth="100%" advHeight="100%" advImage="~assets/img/advertising-1.png"></advertising>
      </div>
    </div>
    <div class="row mt-5">
      <div class="col-9 d-flex flex-column justify-content-between">
        <analytical-card img-width="31%" class="Analitic-articles__card"></analytical-card>
      </div>
      <div class="col-3">
        <advertising advWidth="100%" advHeight="100%" advImage="~assets/img/advertising-2.png"></advertising>
      </div>
    </div>
  </div>
</template>

<script>
import analyticalCard from '@/components/cards/analyticalCard.vue'
import advertising from '@/components/advertising.vue'

export default {
  components: {
    analyticalCard,
    advertising
  }
}
</script>

<style lang="scss" scoped>
// .Analitic-articles__card {
//   margin: 10px 0;
// }
.Advertising {
  // height: 100%;
  // padding: 10px 0 15px 15px;
  // &_m {
  //   height: 28em;
  // }
  // &_s {
  //   height: 14rem;
  // }
}
</style>