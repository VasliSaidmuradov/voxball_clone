<template>
  <div class="competition-list">
    <competitionItem :style="styles" v-for="(item, index) in list" :key="index" :data="item"></competitionItem>
  </div>
</template>

<script>
import competitionItem from '@/components/competition/competitionList/competitionItem.vue'
export default {
  props: {
    list: Array,
    gap: String,
    perPage: Number
  },
  components: {
    competitionItem
  },
  computed: {
    styles() {
      return {
        'width': this.gap ? `calc(100% / ${this.perPage} - ${this.gap}px)` :  `calc(100% / ${this.perPage})`,
        'margin-right': this.gap ? `${this.gap}px` : '0px',
      }
    }
  }
}
</script>

<style>
.competition-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>