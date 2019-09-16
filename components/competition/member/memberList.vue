<template>
  <div class="member-list">
    <member-item v-for="(member, index) in members" :data="member" :key="index" />
  </div>
</template>

<script>
import memberItem from '@/components/competition/member/memberItem.vue'
export default {
  components: {
    memberItem
  },
  props: {
    members: Array
  }
}
</script>

<style lang="scss" scoped>
.member-list {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>