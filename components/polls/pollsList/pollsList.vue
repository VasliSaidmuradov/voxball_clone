<template>
  <div class="polls">
    <div class="polls__list">
      <poll-item
        v-for="(item, index) in mixList"
        :key="index"
        :data="item"
        @click="pollItemClick(item)"
      />
    </div>
  </div>
</template>

<script>
import pollItem from '@/components/polls/pollsList/pollItem.vue'

export default {
  props: {
    list: Array,
    adv: {
      type: Array,
      default: null
    },
    advN: { type: Number, default: 3 }
  },
  components: {
    pollItem
  },
  methods: {
    pollItemClick(item) {
      if (item.onclick) {
        item.onclick()
      }
    },
    insert(x, y, z) {
      let arr = []
      for (let i = 0; i < x.length; i++) {
        arr.push(x[i])
        if ((i + 1) % z === 0) {
          arr.push(y[Math.floor((i / z) % y.length)])
        }
      }
      // arr = arr.map(function(item, i) {
      //   if (i === z) item.type = 'adv'
      //   else item.type = 'poll'
      // })
      return arr
    }
  },
  computed: {
    mixList() {
      return this.adv ? this.insert(this.list, this.adv, this.advN) : this.list
    }
  }
}
</script>

<style lang="scss" scoped>
.polls__list {
  display: flex;
  flex-wrap: wrap;
  // justify-content: space-between;
  margin: 0 auto;
  list-style: none;
  padding: 0;
  font-size: 0.8rem;
}
</style>