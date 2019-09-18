<template>
  <div class="comment-list">
    <comment-item v-for="(parent, index) in dataList" :key="index" :dataItem="parent">
      <div style="margin-left: 3rem;" v-if="parent.child">
        <comment-item v-for="(child, index) in parent.child" :key="index" :dataItem="child"></comment-item>
      </div>
    </comment-item>
  </div>
</template>

<script>
import commentItem from '@/components/comments/commetsList/commentItem.vue'

export default {
  props: {
    dataList: Array
  },
  components: {
    commentItem
  },
  created() {
    console.log('listik', this.dataList)
  }
}
</script>

<style lang="scss" scoped>
.comment-list {
  display: flex;
  flex-direction: column;
  min-width: 50rem;
  width: 50%;
  margin: 0 auto;
  padding: 3rem 0 2rem 0;
}
</style>