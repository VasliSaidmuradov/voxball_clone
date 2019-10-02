<template>
  <div class="comments-list">
    <comments-item
      :levels="levels"
      v-for="(parent, index) in commentsList"
      :key="index"
      :commentsItem="parent"
    ></comments-item>
  </div>
</template>

<script>
import commentsItem from '@/components/comments/commentsList/commentsItem.vue'

export default {
  props: {
    commentsList: Array,
    levels: {
      type: Number,
      default: 2
    }
  },
  components: {
    commentsItem
  }
}
</script>

<style lang="scss" scoped>
.comments-list {
  display: flex;
  flex-direction: column;
  width: 50em;
  margin: 0 auto;
}
</style>