<template>
  <div class="timer">
    <span>{{ timeCounter }}</span>
  </div>
</template>

<script>
export default {
  props: {
    date: {
      type: String,
      default: '12.12.2019'
    }
  },
  data() {
    return {
      // countdown seconds
      timer: Number,
      timerOn: null
    }
  },
  mounted() {
    this.timerMake()
    this.start()
  },
  methods: {
    timerMake() {
      this.timer = Math.round(
        new Date(new Date(this.date).getTime() - Date.now()) / 1000
      )
    },
    start() {
      if (!this.timerOn) {
        this.timerOn = setInterval(() => {
          if (this.timer > 0) {
            this.timer--
          } else {
            clearInterval(this.timerOn)
          }
        }, 1000)
      }
    }
  },
  computed: {
    timeCounter() {
      this.timer
      let newDate = ''
      let dateTimestamp = new Date(
        new Date(this.date).getTime() - new Date().getTime()
      )
      // draw ending date
      let date = new Date(this.date)
      let currentDate = new Date()

      if (date.getMonth() - currentDate.getMonth() > 0) {
        newDate += `${date.getMonth() - currentDate.getMonth()} мес. `
      }
      if (date.getDate() - currentDate.getDate() > 0) {
        newDate += `${date.getDate() - currentDate.getDate() - 1} дней `
      }
      if (dateTimestamp.getHours() > 0) {
        newDate += `${dateTimestamp.getHours() + 12}:`
      } else {
        newDate += '00:'
      }
      if (dateTimestamp.getMinutes() > 0) {
        newDate += `${dateTimestamp.getMinutes()}:`
      } else {
        newDate += '00:'
      }
      newDate += `${dateTimestamp.getSeconds()}`
      if (date.getTime() - currentDate.getTime() <= 0) {
        newDate = 'Завершен'
      }
      return newDate
    }
  }
}
</script>

<style lang="scss" scoped>
.timer {
}
</style>