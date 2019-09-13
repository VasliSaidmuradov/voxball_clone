<template>
  <div class="competition-list">
    <competitionItem v-for="(item, index) in list" :style="styles" :key="index" :data="item"></competitionItem>
  </div>
</template>

<script>
import competitionItem from '@/components/competition/competitionList/competitionItem.vue'
export default {
  props: {
    list: Array,
    gap: Boolean
  },
  components: {
    competitionItem
  },
  computed: {
    styles() {
      return 'margin-right: ' + this.gap ? '10px': '0'
    }
  },
}
</script>

<style>
.competition-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>