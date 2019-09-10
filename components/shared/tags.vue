<template>
  <div class="tags">
    <tag v-for="(tagtitle, index) in arrTag" :key="index" :title="tagtitle"></tag>
  </div>
</template>

<script>
import tag from '@/components/shared/tag.vue'
export default {
  components: {
    tag,
  },
  props: ['arrTag']
}
</script>

<style>
.tags {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding: 5px;
}
</style>