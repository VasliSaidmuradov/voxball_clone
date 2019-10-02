<template>
  <div class="comments-answer">
    <div class="comments-answer__header">
      <span class="comments-answer__date">{{new Date().toLocaleDateString()}}</span>
      <span class="comments-answer__user">{{'dsfdsfdsfsd sd'}}</span>
    </div>
    <textarea @input="onInput" :value="value" class="comments-answer__content"></textarea>
    <div class="comments-answer__buttons">
      <v-btn @click="cancel" class="comments-answer__cancel">отмена</v-btn>
      <v-btn @click="send" class="comments-answer__send">отрпавить</v-btn>
      <!-- <v-btn class="comments-answer__delete">удалить</v-btn>
      <v-btn class="comments-answer__edit">редактировать</v-btn>-->
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: String
  },
  data() {
    return {
      edit: true,
      content: []
    }
  },
  methods: {
    onInput(e) {
      this.$emit('input', e.target.value)
    },
    cancel() {
      this.$emit('cancel')
    },
    send() {
      this.$emit('send')
    }
  }
}
</script>

<style lang="scss" scoped>
.comments-answer {
  &__content {
    min-height: 6rem;
    line-height: 1.375;
    padding: 0.8rem;
    border: 1px solid gray;
    border-radius: 10px;
    resize: none;
    white-space: pre-wrap;
    transition: all 0.3s;
    width: 100%;
    font-size: inherit;
    font-family: inherit;
    color: inherit;

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