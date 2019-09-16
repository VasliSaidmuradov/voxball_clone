<template>
  <div class="answers-list">
    <answers-item
      :checked="selectedAnswers.includes(index)"
      v-for="(answer, index) in answers"
      :key="index"
      @click="selectAnswer(index)"
      :label="answer.label"
    ></answers-item>
  </div>
</template>

<script>
import answersItem from './answersItem'

export default {
  props: {
    answersList: Array,
    multiple: {
      type: Boolean,
      default: false
    }
  },
  components: {
    answersItem
  },
  data() {
    return {
      selectedAnswers: [],
      checkedAnswer: false
    }
  },
  computed: {
    answers() {
      return this.answersList
    }
  },
  methods: {
    selectAnswer(index) {
      let result = []
      if (!this.selectedAnswers.includes(index)) {
        if (this.multiple) {
          this.selectedAnswers.push(index)
        } else {
          this.selectedAnswers = [index]
        }
      } else {
        this.selectedAnswers = this.selectedAnswers.filter(
          item => item !== index
        )
      }
      result = this.answers.filter((item, index) =>
        this.selectedAnswers.includes(index)
      )
      this.$emit('selectedAnswers', result)
    }
  }
}
</script>

<style lang="scss" scoped>
.answers-list {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>