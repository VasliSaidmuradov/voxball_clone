<template>
  <div class="comment-answer">
    <div class="comment-answer__header">
      <span class="comment-answer__date">{{new Date().toLocaleDateString()}}</span>
      <span class="comment-answer__user">{{'dsfdsfdsfsd sd'}}</span>
    </div>
    <div @input="onInput" class="comment-answer__content" :contenteditable="edit"></div>
    <div class="comment-answer__buttons">
      <v-btn class="comment-answer__cancel">отмена</v-btn>
      <v-btn class="comment-answer__send">отрпавить</v-btn>
      <!-- <v-btn class="comment-answer__delete">удалить</v-btn>
      <v-btn class="comment-answer__edit">редактировать</v-btn>-->
    </div>
  </div>
</template>

<script>
export default {
  props: {
    //   data
  },
  data() {
    return {
      edit: true,
      content: []
    }
  },
  //   mounted() {

  //   },
  methods: {
    onInput(e) {
      console.log(e.target.innerHTML)
      this.content = e.target.innerHTML //innerText mb
    }
  }
}
</script>

<style lang="scss" scoped>
.comment-answer {
  &__content {
    min-height: 5rem;
    line-height: 1.375;
    padding: 0.8rem;
    border: 1px solid gray;
    border-radius: 10px;
    resize: none;
    white-space: pre-wrap;
    transition: all 0.3s;

    &:focus {
      outline: none;
      border: 1px solid $base-color;
      border-radius: 10px;
    }
  }

  &__buttons {
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: flex-end;
    margin: 1rem 0;
  }

  &__header {
    margin: 0.5rem 0 1rem;
  }

  &__answer {
    padding: 1rem 0 1rem 1rem;
    color: #d0d0d0;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }

  &__date {
    padding: 0.45rem 1rem 0.25rem;
    margin-right: 1rem;
    text-transform: uppercase;
    color: white;
    background-color: #00b900;
  }
}
</style>