<template>
  <div class="cabinet-info-item" @click="link(data.link)">
    <span class="cabinet-info-item__count">{{ data.count }}</span>
    {{ lang[data.name] }}
  </div>
</template>

<script>
export default {
  props: {
    data: Object
  },
  methods: {
    link(str) {
      this.$navigate(str)
    }
  },
  data() {
    return {
      lang: {
        polls: 'Опросов',
        ratings: 'Рейтингов',
        subscribers: 'Подписчиков',
        subscriptions: 'Подписок',
        reposts: 'Репостов',
        pollsAnswers: 'Ответов получили',
        myAnswers: 'Ответов дали',
        draw: 'Конкурсы и розыгрыши'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.cabinet-info-item {
  width: 13rem;
  height: auto;
  padding: 0.5rem;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
  border: 1px solid $base-text-color;
  cursor: pointer;
  &__count {
    font-weight: 600;
  }
}
</style>