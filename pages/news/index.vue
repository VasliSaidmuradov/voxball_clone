<template>
  <div class="container">
    <section class="section">
      <div class="section__header">
        <h2 class="section__title">Аналитические статьи</h2>
        <p class="section__text">Мнения и факты авторитетных журналистов и популярных блогеров</p>
      </div>
    </section>

    <news-list v-for="(neww, index) in news" :key="index" :news="neww"></news-list>
  </div>
</template>

<script>
import newsList from '@/components/news/newsList/newsList.vue'

export default {
  components: {
    newsList
  },
  data() {
    return {
      news: [
        [
          {
            name: 'dsfsdfdsf'
          },
          {
            name: 'dsfsdfdsfsdf'
          },
          {
            name: 'dsfsdfdsfsdf'
          },
          {
            name: 'dsfsdfdsfsdf'
          },
          {
            name: 'dsfsdfdsfsdf'
          }
        ],
        [
          {
            name: 'dsfsdfdsf'
          },
          {
            name: 'dsfsdfdsfsdf'
          },
          {
            name: 'dsfsdfdsfsdf'
          }
        ]
      ]
    }
  }
}
</script>

<style lang="scss">
</style>