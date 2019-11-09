<template>
  <div class="poll-id">
    <detailed-layout :title="'Мои Опросы'">
      <!-- {{ $route.params.id }} -->
      <!-- {{ GET_POLL }} -->
      <poll-info class="mt-5" :poll="GET_POLL"></poll-info>
      <poll-card
        :complete="GET_POLL['complete']"
        class="mb-5"
        :poll="GET_POLL"
        v-show="!!GET_POLL.questions.length"
      ></poll-card>

      <comments-list :levels="1" :commentsList="commentsList" />
      <div class="d-flex mr-auto ml-auto mb-5 mt-3" style="width: 50rem; justify-content: center">
        <v-btn border rounded @click="openStatistics">
          статистика
          <icon-arrow class="ml-2" />
        </v-btn>
        <v-btn class="ml-3" border rounded @click="openToTop">
          вывести опрос в топ
          <icon-arrow class="ml-2" />
        </v-btn>
        <v-btn class="ml-3" border rounded>
          расширенная аналитика
          <icon-arrow class="ml-2" />
        </v-btn>
      </div>
      <v-modal class="toTopModal" :showModal="showToTopModal" @close="closeToTop" :abort="false">
        <template slot="body">
          <v-table :items="items" :fields="fields">
            <template slot="pages">
              <v-select
                :options="optionsPages"
                :searchable="true"
                :multiple="false"
                :placeholder="'Выбрать'"
              ></v-select>
            </template>
          </v-table>
        </template>
        <template slot="footer">
          <div class="toTopModal__footer">
            Итого: {{ 1000 }} v-coins
            <v-btn class border>
              вывести в топ
              <icon-arrow class="ml-2" />
            </v-btn>
          </div>
        </template>
      </v-modal>
      <v-modal
        class="statisticsModal"
        :showModal="showStatisticsModal"
        @close="closeStatistics()"
        :abort="false"
      >
        <template slot="body">
          <div class="statisticsModal__header">
            <span class="statisticsModal__item">ответы: {{ this.pollData.answers }}</span>
            <span class="statisticsModal__item">репосты: {{ this.pollData.repost }}</span>
            <span class="statisticsModal__item">комментарии: {{ this.comments.length }}</span>
            <span class="statisticsModal__item">просмотры: {{ this.pollData.views }}</span>
          </div>
          <poll-card class="mb-5" :answers="answers" complete></poll-card>
        </template>
      </v-modal>
    </detailed-layout>
  </div>
</template>

<script>
import detailedLayout from '@/components/layouts/detailedLayout.vue'
import pollInfo from '@/components/polls/poll/pollInfo.vue'
import pollCard from '@/components/polls/poll/pollCard.vue'
import commentsList from '@/components/comments/commentsList/commentsList.vue'
import iconArrow from '@/components/icons/iconArrow.vue'
import vModal from '@/components/modals/vModal.vue'
import vTable from '@/components/tables/vTable.vue'
import vSelect from 'vue-select'
import '@/assets/css/vSelect.scss'
import { mapGetters, mapActions, mapState } from 'vuex'

export default {
  components: {
    detailedLayout,
    pollInfo,
    pollCard,
    commentsList,
    iconArrow,
    vModal,
    vTable,
    vSelect
  },
  data() {
    return {
      showToTopModal: false,
      showStatisticsModal: false,
      pollData: {
        title: '',
        category: 'бизнес',
        date: '26.2.2019',
        views: 123,
        img: '~/assets/img/main-news-image-1.png',
        name: 'Иванов Иван',
        shared: 15,
        complete: false,
        answers: 4,
        repost: 15
      },
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
      ],
      items: [
        {
          period: '1 день',
          pages: true,
          cost: 500
        },
        {
          period: '3 дня',
          pages: true,
          cost: 1000
        },
        {
          period: '5 дней',
          pages: true,
          cost: 1500
        },
        {
          period: '1 неделя',
          pages: true,
          cost: 2000
        },
        {
          period: '2 недели',
          pages: true,
          cost: 2500
        }
      ],
      fields: [
        {
          field: 'period',
          label: 'Срок'
        },
        {
          field: 'pages',
          label: 'В Каких страницах'
        },
        {
          field: 'cost',
          label: 'Цена (в V-coins)'
        }
      ],
      optionsPages: ['Главная', 'Опросы']
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
    },
    openToTop() {
      this.showToTopModal = true
    },
    closeToTop() {
      this.showToTopModal = false
    },
    openStatistics() {
      this.showStatisticsModal = true
    },
    closeStatistics() {
      this.showStatisticsModal = false
    }
  },
  computed: {
    ...mapGetters({
      GET_POLL: 'polls/GET_POLL',
      GET_COMMENTS_LIST: 'comments/GET_COMMENTS_LIST'
    }),
    commentsList() {
      let comments = this.GET_COMMENTS_LIST
      console.log('comments: ', comments)
      comments = comments.map(item => (item = { ...item, child: [] }))
      console.log('comments: ', comments)
      let commentsL = comments
      console.log('commentsL: ', commentsL)
      // comments.map(item => {
      // if (item.parentId !== null) commentsL[item.parentId].child.push(item)
      // })
      return comments
    }
  },
  async fetch({ store, route }) {
    await store.dispatch('polls/FETCH_POLL', route.params.id)
    await store.dispatch('comments/FETCH_COMMENTS', { id: route.params.id })
  }
}
</script>

<style lang="scss" scoped>
.toTopModal {
  &__footer {
    width: 100%;
    padding: 1rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
.statisticsModal {
  &__header {
    display: flex;
    justify-content: center;
    background-color: $base-color;
    margin-top: 2rem;
  }
  &__item {
    color: white;
    padding: 1rem;
  }
}
</style>
<style>
.toTopModal .v-modal__wrap {
  padding-top: 2rem;
  padding-bottom: 2rem;
  width: fit-content;
}
.toTopModal .table-wrap {
  min-width: 50rem;
}
.toTopModal .table-tbody__td {
  padding-top: 0.8rem;
  padding-bottom: 0.8rem;
}
</style>
