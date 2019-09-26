<template>
  <div class="side-bar">
    <side-bar-list :title="'Популярное'" :list="sideBarPeriod" />
    <side-bar-list class="side-bar_grey-bg" :title="'Мои категории'" :list="sideBarCategory" />
    <side-bar-list
      @click="hello()"
      :title="'Пользователи'"
      :check="false"
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
          value: false
        },
        {
          title: 'За неделю',
          value: true
        },
        {
          title: 'За месяц',
          value: false
        },
        {
          title: 'За все время',
          value: false
        }
      ],
      sideBarCategory: [
        {
          title: 'Животные',
          value: false
        },
        {
          title: 'Жизнь',
          value: true
        },
        {
          title: 'Здоровье',
          value: false
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
      ]
    }
  },
  methods: {
    hello() {
      alert('hello')
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