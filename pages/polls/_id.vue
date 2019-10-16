<template>
  <div class="poll-id">
    <detailed-layout :title="'Мои Опрос'">
      <poll-info class="mt-5" :poll="pollData"></poll-info>
      <poll-card class="mb-5" :answers="answers"></poll-card>
      <comments-list :levels="1" :commentsList="comments" />
    </detailed-layout>
  </div>
</template>

<script>
import detailedLayout from '@/components/layouts/detailedLayout.vue'
import pollInfo from '@/components/polls/poll/pollInfo.vue'
import pollCard from '@/components/polls/poll/pollCard.vue'
import commentsList from '@/components/comments/commentsList/commentsList.vue'

export default {
  components: {
    detailedLayout,
    pollInfo,
    pollCard,
    commentsList
  },
  data() {
    return {
      pollData: {
        title: '',
        category: 'бизнес',
        date: '26.2.2019',
        views: 123,
        img: '~/assets/img/main-news-image-1.png',
        name: 'Иванов Иван',
        shared: 15,
        complete: false
      },
      answers: [
        { label: 'Yes' },
        { label: 'No' },
        { label: 'Maybe' },
        { label: 'Yes, No, Maybe' }
      ],
      comments: [
        {
          author: 'vova',
          createdAt: new Date().toLocaleDateString(),
          id: 1,
          parent: undefined,
          child: undefined,
          content: 'lorem dewde wed ewd ew d  ew d  ew d  ew d we   dw'
        },
        {
          author: 'vova1',
          createdAt: new Date().toLocaleDateString(),
          id: 2,
          parent: undefined,
          content: 'lorem dewde wed ewd ew d  ew d  ew d  ew d we   dw',

          child: [
            {
              author: 'vovach',
              createdAt: new Date().toLocaleDateString(),
              id: 4,
              parent: 2,
              content: 'lorem dewde wed ewd ew d  ew d  ew d  ew d we   dw',
              child: [
                {
                  author: 'vovach',
                  createdAt: new Date().toLocaleDateString(),
                  id: 4,
                  parent: 4,
                  child: undefined,
                  content: 'lorem dewde wed ewd ew d  ew d  ew d  ew d we   dw',
                  child: [
                    {
                      author: 'vovach',
                      createdAt: new Date().toLocaleDateString(),
                      id: 4,
                      parent: 4,
                      child: undefined,
                      content:
                        'lorem dewde wed ewd ew d  ew d  ew d  ew d we   dw'
                    },
                    {
                      author: 'vovach5',
                      createdAt: new Date().toLocaleDateString(),
                      id: 5,
                      parent: 4,
                      child: undefined,
                      content:
                        'lorem dewde wed ewd ew d  ew d  ew d  ew d we   dw'
                    }
                  ]
                },
                {
                  author: 'vovach5',
                  createdAt: new Date().toLocaleDateString(),
                  id: 5,
                  parent: 4,
                  child: undefined,
                  content: 'lorem dewde wed ewd ew d  ew d  ew d  ew d we   dw'
                }
              ]
            },

            {
              author: 'vovach5',
              createdAt: new Date().toLocaleDateString(),
              id: 5,
              parent: 2,
              child: undefined,
              content: 'lorem dewde wed ewd ew d  ew d  ew d  ew d we   dw'
            }
          ]
        }
      ]
    }
  },
  created() {
    this.comments = this.setLevelForItem(this.comments)
  },
  methods: {
    setLevelForItem(arr, level = 0) {
      return arr.map(item => {
        if (item.child) {
          item.child = this.setLevelForItem(item.child, level + 1)
        }
        return { ...item, level }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
