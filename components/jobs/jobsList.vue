<template>
  <div class="jobs-list">
    <jobs-item :style="styles" v-for="(item, index) in list" :item="item" :key="index" />
  </div>
</template>

<script>
import jobsItem from '@/components/jobs/jobsItem.vue'
export default {
  components: {
    jobsItem
  },
  props: {
    list: Array,
    perPage: Number
  },
  computed: {
    styles() {
      return {
        width: `calc(96% / ${this.perPage})`
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.jobs-list {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>