<template>
  <div class="answerItem">
    {{ answer.title }}
    <input type="checkbox" :value="answer.title" class="answerItem__check" v-model="answers">
  </div>
</template>

<script>
export default {
  props: ['answer'],
  data() {
    return {
      answers: []
    }
  }
}
</script>

<style lang="scss" scoped>
.answerItem {
  width: 48%;
  border: 1px solid $border-color;
  border-radius: 30px;
  padding: 1rem;
  margin-bottom: 1.5rem;
  position: relative;
  &__check {
    margin: 0;
    padding: 0;
    background-color: white;
    width: 2rem;
    height: 2rem;
    border: 1px solid $border-color;
    border-radius: 50%;
    position: absolute;
    right: 1rem;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    &:focus {
      outline: none;
    }
  }
}
</style>