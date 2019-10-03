<template>
  <div class="side-bar">
    <side-bar-list
      @click="timePeriod($event)"
      :title="'Популярное'"
      :checkbox="false"
      :list="sideBarPeriod"
    />
    <side-bar-list
      @change="toggle($event)"
      class="side-bar_grey-bg"
      :title="'Мои категории'"
      :list="sideBarCategory"
    />
    <side-bar-list
      @click="navigate()"
      :title="'Пользователи'"
      :checkbox="false"
      :list="sideBarSubscribers"
    />
  </div>
</template>

<script>
import sideBarList from '@/components/sideBar/sideBarList.vue'
export default {
  components: {
    sideBarList
  },
  data() {
    return {
      sideBarPeriod: [
        {
          title: 'За день',
          check: false,
          name: 'day'
        },
        {
          title: 'За неделю',
          check: true,
          name: 'week'
        },
        {
          title: 'За месяц',
          check: false,
          name: 'month'
        },
        {
          title: 'За все время',
          check: false,
          name: 'all'
        }
      ],
      sideBarCategory: [
        {
          id: 123,
          title: 'Животные',
          check: false
        },
        {
          id: 234,
          title: 'Жизнь',
          check: true
        },
        {
          id: 345,
          title: 'Здоровье',
          check: false
        }
      ],
      sideBarSubscribers: [
        {
          title: 'Лайфхак'
        },
        {
          title: 'Мой город'
        },
        {
          title: 'Оброзование'
        },
        {
          title: 'Происшествия'
        },
        {
          title: 'Роскошь'
        },
        {
          title: 'Спорт'
        }
      ],
      queryPeriod: {},
      queryCategory: {}
    }
  },
  methods: {
    navigate() {
      this.$navigate('/profile')
    },
    timePeriod(index) {
      this.sideBarPeriod = this.sideBarPeriod.map((item, i) => {
        if (index === i) item.check = true
        else item.check = false
        return item
      })
      let list = []
      this.sideBarPeriod.map((item, index) =>
        item.check == true ? list.push(item.name) : null
      )
      this.queryPeriod = {
        period: list.join(',')
      }
      this.$router.replace({
        route: '/ru/feed',
        query: {
          period: this.queryPeriod.period,
          category: this.queryCategory.category
        }
      })
    },
    toggle(result) {
      this.sideBarCategory = this.sideBarCategory.map((item, i) => {
        if (result == i) item.check = item.check
        return item
      })
      let list = []
      this.sideBarCategory.map((item, index) =>
        item.check == true ? list.push(item.id) : null
      )
      this.queryCategory = {
        category: list.join(',')
      }
      this.$router.replace({
        route: '/ru/feed',
        query: {
          period: this.queryPeriod.period,
          category: this.queryCategory.category
        }
      })
    }
  },
  updated() {
    let c = this.$route.query.category
    let p = this.$route.query.period
    console.log('period: ', p)
    console.log('category: ', c)
  }
}
</script>

<style lang="scss" scoped>
.side-bar {
  border: 1px solid $border-color;
  &_grey-bg {
    background-color: #e8e8e8;
  }
}
</style>