<template>
  <div class="side-bar">
    <side-bar-list
      @click="toggle($event, 'sideBarPeriod')"
      :title="'Популярное'"
      :checkbox="false"
      :list="sideBarPeriod"
    />
    <side-bar-list
      @change="toggle($event, 'sideBarCategory')"
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
      queryCategory: {},
      sideBarPeriodNew: Array,
      sideBarCategoryNew: Array
    }
  },
  methods: {
    navigate() {
      this.$navigate('/profile')
    },
    toggle(event, list) {
      if (list === 'sideBarPeriod') {
        this.sideBarPeriod = this.sideBarPeriod.map((item, i) => {
          if (event === i) item.check = true
          else item.check = false
          return item
        })
      }
      if (list === 'sideBarCategory') {
        this.sideBarCategory = this.sideBarCategory.map((item, i) => {
          if (event === i) item.check = item.check
          return item
        })
      }
      let arr = []
      this.sideBarPeriod.map((item, index) =>
        item.check == true ? arr.push(item.name) : null
      )
      let queryPeriod = {
        period: arr.join(',')
      }
      arr = []
      this.sideBarCategory.map((item, index) =>
        item.check == true ? arr.push(item.id) : null
      )
      let queryCategory = {
        category: arr.join(',')
      }
      this.$router.replace({
        query: {
          period: queryPeriod.period,
          category: queryCategory.category
        }
      })
    }
  },
  created() {
    if (this.$route.query.period) {
      this.sideBarPeriod = this.sideBarPeriod.map((item, i) => {
        if (item.name === this.$route.query.period) item.check = true
        else item.check = false
        return item
      })
    }
    if (this.$route.query.category) {
      let arr = this.$route.query.category.split(',').map(item => +item)
      this.sideBarCategory = this.sideBarCategory.map((item, i) => {
        if (arr.indexOf(item.id) !== -1) item.check = true
        else item.check = false
        return item
      })
    }
    if (!this.$route.query.period || !this.$route.query.category) {
      this.$router.replace({
        query: {
          period: this.sideBarPeriod[1].name,
          category: this.sideBarCategory[1].id
        }
      })
    }
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