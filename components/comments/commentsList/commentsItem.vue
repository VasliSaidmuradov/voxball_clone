<template>
  <div>
    <div class="comment">
      <div class="comment__header">
        <span
          :class="{ 'viewed-date' : commentsItem.viewed }"
          class="comment__date"
        >{{commentsItem.createdAt}}</span>
        <span
          v-if="commentsItem.type != 'notification'"
          class="comment__user"
        >{{commentsItem.author}}</span>
        <icon-mail
          v-if="commentsItem.type == 'notification'"
          :class="{ viewed : commentsItem.viewed }"
          class="comment__notification-img"
        />
      </div>

      <div editable="true" class="comment__body">
        <p class="comment__text">{{commentsItem.content}}</p>
        <div v-if="commentsItem.type !== 'notification' && commentsItem.type !== 'review'">
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
      style="width: 100%; padding-left: 3em"
    ></comments-list>
  </div>
</template>

<script>
import commentsAnswer from '@/components/comments/commentsAnswer.vue'
import commentsList from '@/components/comments/commentsList/commentsList.vue'
import iconMail from '@/components/icons/iconMail.vue'

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
    commentsAnswer,
    iconMail
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

  &__header {
    display: flex;
  }

  &__user {
    align-items: center;
    display: flex;
  }

  &__date {
    padding: 0.2rem 1rem 0;
    margin-right: 1rem;
    display: flex;
    align-items: center;
    text-transform: uppercase;
    color: white;
    background-color: $base-color;
  }

  &__notification-img {
    width: 1.5rem;
    margin: -0.2rem 0;
    color: $base-color;
  }

  &__body {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 0;
  }

  &__text {
    padding-right: 2rem;
    margin: 0;
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
.viewed {
  color: #969696;
}
.viewed-date {
  color: white;
  background-color: #969696;
}
</style>