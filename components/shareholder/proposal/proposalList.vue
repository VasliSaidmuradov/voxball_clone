<template>
  <div class="proposal-list">
    <proposal-item
      :style="styles"
      v-for="(item, index) in proposalsList"
      :key="index"
      :proposal="item"
    ></proposal-item>
  </div>
</template>

<script>
import proposalItem from '@/components/shareholder/proposal/proposalItem.vue'
export default {
  props: {
    proposalsList: Array,
    perPage: {
      type: String,
      default: '3'
    }
  },
  components: {
    proposalItem
  },
  computed: {
    styles() {
      return {
        width: '33.3%'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.proposal-list {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
</style>