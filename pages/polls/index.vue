<template>
  <div class="polls">
    <base-layout
      :title="'Участвуйте в on-line опросах от Voxball.'"
      :text="
				'Активно отвечайте на вопросы, выражайте свое мнение и зарабатывайте на этом деньги'
			"
    >
      <!-- <section class="polls-top container mt-5">
        <poll-list :list="GET_POLLS_LIST" />
      </section>-->
      <section class="Section container mt-5">
        <div class="Section__header">
          <h2 class="Section__title">Все опросы</h2>
          <div class="Section__options">
            <v-select
              :options="optionsPeriod"
              :multiple="false"
              :searchable="false"
              v-model="period"
              @input="filterPolls"
              placeholder="Популярное"
            ></v-select>
            <v-select
              class="ml-5"
              :options="optionsCat"
              :multiple="false"
              v-model="categories"
              @input="filterPolls"
              placeholder="Категории"
            ></v-select>
          </div>
        </div>
        <div class="polls-main__content mb-4">
          <poll-list :list="GET_POLLS_LIST" :adv="advList" :adv-n="3" />
        </div>
        <v-btn @click="loadMore" class="Section__button mb-5 mt-4" rounded border>
          <span>Загрузить еще</span>
          <icon-arrow class="ml-2" />
        </v-btn>
      </section>
    </base-layout>
  </div>
</template>

<script>
import baseLayout from '@/components/layouts/baseLayout.vue'
import pollList from '@/components/polls/pollsList/pollsList.vue'
import pollItem from '@/components/polls/pollsList/pollItem.vue'
import vSelect from 'vue-select'
import iconArrow from '@/components/icons/iconArrow.vue'
import '@/assets/css/vSelect.scss'
import { mapGetters, mapActions, mapState, mapMutations } from 'vuex'

export default {
  components: {
    baseLayout,
    pollList,
    vSelect,
    iconArrow
  },
  data() {
    return {
      optionsPeriod: ['за день', 'за неделю', 'за 2 недели', 'за месяц'],
      period: '',
      categories: '',
      filterQuery: '',
      advList: [
        {
          type: 'adv',
          category: 'Бизнес',
          video: 'Видео',
          title: 'хотите ли выполететь в космос?',
          date: '19.19.2019',
          views: 345,
          complete: false
        },
        {
          type: 'adv',
          category: 'Бизнес',
          video: 'Видео',
          title: 'хотите ли выполететь в космос?',
          date: '19.19.2019',
          views: 345,
          complete: false
        },
        {
          type: 'adv',
          category: 'Бизнес',
          video: 'Видео',
          title: 'хотите ли выполететь в космос?',
          date: '19.19.2019',
          views: 345,
          complete: false
        }
      ]
    }
  },
  methods: {
    ...mapActions({
      FETCH_POLLS: 'polls/FETCH_POLLS',
      FETCH_CATEGORY: 'polls/FETCH_CATEGORY'
    }),

    async loadMore(query) {
      let today = await this.dateFormatter(new Date())
      let day30 = await this.dateFormatter(
        new Date(new Date().getTime() + 1000 * 60 * 60 * 24 * 30)
      )
      !!this.period || !!this.categories
        ? await this.FETCH_POLLS({ more: true, query: this.filterQuery })
        : await this.FETCH_POLLS({
            more: true,
            query: `&sort[]=createdAt & filter[endedAt]=between:${today},${day30}`
          })
    },

    dateFormatter(date) {
      return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`
    },

    async filterPolls() {
      let day = 1000 * 60 * 60 * 24
      let day30 = await this.dateFormatter(
        new Date(new Date().getTime() + day * 30)
      )
      let range = {
        'за день': 1,
        'за неделю': 7,
        'за 2 недели': 14,
        'за месяц': 30
      }
      let date = this.period
        ? new Date(new Date().getTime() - day * range[this.period])
        : new Date(day)
      date = await this.dateFormatter(date)
      let today = await this.dateFormatter(new Date())
      let category = this.categories
        ? `&filter[categoryId]=search:${
            this.GET_CATEGORY_LIST.find(
              item => item.title.substr(0, 15) === this.categories
            ).id
          }`
        : ''
      // console.log('period: ')
      // console.log(this.period)
      // console.log(' category: ')
      // console.log(this.categories)
      // console.log(
      //   `&sort[]=viewCount & filter[endedAt]=between:${today},${day30} & filter[startedAt]=between:${date},${today}${category}`
      // )
      // --
      //   `&sort[]=viewCount & filter[startedAt]=between:${date.getDate()}-${date.getMonth() +
      //     1}-${date.getFullYear()},${new Date().getDate()}-${new Date().getMonth() +
      //     1}-${new Date().getFullYear()}${category}`

      console.log(today + ' : ' + day30)
      // & filter[endedAt]=between:${new Date()},${day30}
      this.filterQuery = `&sort[]=viewCount & filter[endedAt]=between:${today},${day30} & filter[startedAt]=between:${date},${today}${category}`
      this.categories || this.period
        ? await this.FETCH_POLLS({
            query: `&sort[]=viewCount & filter[endedAt]=between:${today},${day30} & filter[startedAt]=between:${date},${today}${category}`
          })
        : await this.FETCH_POLLS({
            query: '&sort[]=createdAt'
          })
    }
  },
  computed: {
    ...mapGetters({
      GET_POLLS_LIST: 'polls/GET_POLLS_LIST',
      GET_CATEGORY_LIST: 'polls/GET_CATEGORY_LIST'
    }),
    optionsCat() {
      return this.GET_CATEGORY_LIST.map(item => item.title.substr(0, 15))
    }
  },
  async fetch({ store }) {
    let today = new Date()
    today = `${today.getDate()}-${today.getMonth() + 1}-${today.getFullYear()}`
    let day30 = new Date(new Date().getTime() + 1000 * 60 * 60 * 24 * 30)
    day30 = `${day30.getDate()}-${day30.getMonth() + 1}-${day30.getFullYear()}`
    await store.dispatch('polls/FETCH_POLLS', {
      query: `&sort[]=createdAt & filter[endedAt]=between:${today},${day30}`
    })
    await store.dispatch('polls/FETCH_CATEGORY')
    // await store.dispatch('polls/FETCH_POLLS', 'filter[id]=is:50')
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/section.scss';
</style>
