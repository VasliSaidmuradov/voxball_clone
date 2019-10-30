<template>
  <div>
    <div class="d-flex flex-wrap">
      <add-answers-item
        v-for="(item, index) in GET_NEW_POLL_VARIANTS[questionIndex]"
        :key="index"
        :answersItem="item"
        @removeAnswer="removeAnswer(index)"
        :variantInfo="{questionIndex: questionIndex, variantIndex: index}"
        class="answers-item"
      ></add-answers-item>
    </div>
    <v-btn @click="newAnswer" rounded class="answers-list__button">добавить ответ</v-btn>
  </div>
</template>

<script>
import addAnswersItem from './addAnswersItem'
import { mapMutations, mapGetters } from 'vuex'

export default {
  props: {
    answersList: Array,
    count: Number,
    questionIndex: Number
  },
  methods: {
    ...mapMutations({
      ADD_NEW_POLL_VARIANT: 'polls/ADD_NEW_POLL_VARIANT',
      SET_NEW_POLL_DATA_VARIANT: 'polls/SET_NEW_POLL_DATA_VARIANT',
      REMOVE_NEW_POLL_DATA_VARIANT: 'polls/REMOVE_NEW_POLL_DATA_VARIANT'
    }),
    // addNewAnswer() {
    //   let result = [...this.answersList]
    //   result.push({ value: '' })
    //   this.$emit('update:answersList', result)
    // },
    // removeAnswer(index) {
    //   console.log(index)
    //   if (this.answersList.length > 1) {
    //     let result = [...this.answersList]
    //     result.splice(index, 1)
    //     this.$emit('update:answersList', result)
    //   }
    // },
    newAnswer() {
      this.ADD_NEW_POLL_VARIANT({ questionIndex: this.questionIndex })
    },
    removeAnswer(index) {
      this.REMOVE_NEW_POLL_DATA_VARIANT({
        questionIndex: this.questionIndex,
        variantIndex: index
      })
    }
  },
  components: {
    addAnswersItem
  },
  computed: {
    ...mapGetters({
      GET_NEW_POLL_VARIANTS: 'polls/GET_NEW_POLL_VARIANTS'
    })
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