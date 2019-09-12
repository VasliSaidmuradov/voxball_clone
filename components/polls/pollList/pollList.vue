<template>
  <div class="polls">
    <div class="polls__list">
      <poll-item v-for="(pollItemData, index) in pollArr" :key="index" :pollData="pollItemData" />
    </div>
  </div>
</template>

<script>
import pollItem from '@/components/polls/pollList/pollItem.vue'

export default {
  props: ['pollArr'],
  components: {
    pollItem
  }
}
</script>

<style lang="scss" scoped>
.polls__list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 auto;
  margin-top: 20px;
  list-style: none;
  padding: 0;
  font-size: 0.8em;
}
</style>