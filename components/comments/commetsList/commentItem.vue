<template>
  <div>
    <div class="comment">
      <div class="comment__header">
        <span class="comment__date">{{dataItem.createdAt}}</span>
        <span class="comment__user">{{dataItem.author}}</span>
      </div>
      <div class="comment__body">
        <p class="comment__text">{{dataItem.content}}</p>
        <span @click="toAnswer" class="comment__answer">Ответить</span>
      </div>
    </div>
    <slot></slot>

    <comment-answer v-if="!showButton"></comment-answer>
  </div>
</template>

<script>
import commentAnswer from '@/components/comments/commentAnswer.vue'

export default {
  props: {
    dataItem: Object
  },
  components: {
    commentAnswer
  },
  data() {
    return {
      showButton: true
    }
  },
  methods: {
    toAnswer() {
      this.showButton = !this.showButton
    }
  }
}
</script>

<style lang="scss" scoped>
.comment {
  font-size: 0.9rem;
  border-bottom: 1px solid #d0d0d0;
  margin-bottom: 2rem;

  &__date {
    padding: 0.45rem 1rem 0.25rem;
    margin-right: 1rem;

    text-transform: uppercase;
    color: white;
    background-color: $base-color;
  }

  &__body {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 0;
  }

  &__text {
    padding-right: 2rem;
  }

  &__answer {
    padding: 1rem 0 1rem 1rem;
    color: #d0d0d0;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
}
</style>