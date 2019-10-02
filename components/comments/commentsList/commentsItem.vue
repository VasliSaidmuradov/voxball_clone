<template>
  <div>
    <div class="comment">
      <div class="comment__header">
        <span class="comment__date">{{commentsItem.createdAt}}</span>
        <span class="comment__user">{{commentsItem.author}}</span>
      </div>
      <div editable="true" class="comment__body">
        <p class="comment__text">{{commentsItem.content}}</p>
        <div>
          <span @click="toAnswer" class="comment__answer">Ответить</span>
          <span @click="deleteAnswer" class="comment__answer">Удалить</span>
        </div>
      </div>
    </div>
    <comments-answer v-model="answer" @cancel="cancelAnswer" @send="sendAnswer" v-if="showAnswer"></comments-answer>
    <comments-list
      :class="{'comment__childs': commentsItem.child && commentsItem.level < levels}"
      v-if="commentsItem.child"
      :levels="levels"
      :commentsList="commentsItem.child"
      style="width: 100%"
    ></comments-list>
  </div>
</template>

<script>
import commentsAnswer from '@/components/comments/commentsAnswer.vue'
import commentsList from '@/components/comments/commentsList/commentsList.vue'

export default {
  beforeCreate() {
    this.$options.components.commentsList = require('@/components/comments/commentsList/commentsList.vue').default
  },
  props: {
    commentsItem: Object,
    index: Number,
    levels: {
      type: Number,
      default: 2
    }
  },
  components: {
    commentsAnswer
  },
  data() {
    return {
      showAnswer: false,
      answer: ''
    }
  },
  methods: {
    toAnswer() {
      this.showAnswer = true
      this.answer = this.commentsItem.author + ', '
    },
    sendAnswer() {
      this.showAnswer = !this.showAnswer
    },
    cancelAnswer() {
      this.showAnswer = !this.showAnswer
      this.answer = ''
    },
    deleteAnswer() {}
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

  &__childs {
    padding-left: 3em;
  }
}
</style>