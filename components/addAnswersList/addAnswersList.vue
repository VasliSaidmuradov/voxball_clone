<template>
  <div>
    <div class="d-flex flex-wrap">
      <add-answers-item
        v-for="(item, index) in answersList"
        :key="index"
        :answersItem="item"
        @enter="addNewAnswer"
        @removeAnswer="removeAnswer(index)"
        class="answers-item"
      ></add-answers-item>
    </div>
    <v-btn @click="addNewAnswer()" rounded class="answers-list__button">добавить ответ</v-btn>
  </div>
</template>

<script>
import addAnswersItem from './addAnswersItem'
export default {
  props: {
    answersList: Array,
    count: Number
  },
  methods: {
    addNewAnswer() {
      let result = [...this.answersList]
      result.push({ value: '' })
      this.$emit('update:answersList', result)
    },
    removeAnswer(index) {
      console.log(index)
      if (this.answersList.length > 1) {
        let result = [...this.answersList]
        result.splice(index, 1)
        this.$emit('update:answersList', result)
      }
    }
  },
  components: {
    addAnswersItem
  }
}
</script>

<style lang="scss" scoped>
.answers-list {
  &__button {
    border-color: #000 !important;

    &:hover {
      border-color: transparent !important;
    }
  }
}
</style>