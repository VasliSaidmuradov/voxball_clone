<template>
  <div class="competition-list">
    <competitionItem v-for="(item, index) in list" :pagew="page" :gap="gap" :key="index" :data="item"></competitionItem>
  </div>
</template>

<script>
import competitionItem from '@/components/competition/competitionList/competitionItem.vue'
export default {
  props: {
    list: Array,
    gap: String,
    page: Number
  },
  components: {
    competitionItem
  },
  computed: {
    
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