<template>
  <div>
    <detailed-layout :title="`Результаты по запросу ${$route.query.query}`">
      <div class="mt-5 container">
        <upload></upload>
        <div class="mt-5">
          <add-answers-list :answersList.sync="answersList"></add-answers-list>
        </div>
      </div>
    </detailed-layout>
  </div>
</template>

<script>
import detailedLayout from '@/components/layouts/detailedLayout.vue'
import upload from '@/components/inputs/upload.vue'
import addAnswersList from '@/components/addAnswersList/addAnswersList.vue'

export default {
  data() {
    return {
      answersList: [
        {
          value: ''
        }
      ]
    }
  },
  components: {
    detailedLayout,
    upload,
    addAnswersList
  }
}
</script>

<style lang="scss" scoped>
</style>