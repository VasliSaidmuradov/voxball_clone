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
        (new Date(this.date).getTime() - Date.now()) / 1000
      )
    },
    start() {
      if (!this.timerOn) {
        this.timerOn = setInterval(() => {
          this.timer > 0 ? this.timer-- : clearInterval(this.timerOn)
        }, 1000)
      }
    }
  },
  computed: {
    timeCounter() {
      let newDate = ''
      // draw ending date
      let date = new Date(this.date)
      let currentDate = new Date()
      let dateTimestamp = new Date(date.getTime() - currentDate.getTime())
      let dateTimestampHours = Math.floor(
        (new Date(this.date).getTime() - Date.now()) / 1000 / 60 / 60
      )
      let seconds = dateTimestamp.getSeconds()
      let minutes = dateTimestamp.getMinutes()
      // without UTC give incorrect hours
      let hours = dateTimestamp.getUTCHours()
      let days = (dateTimestampHours - hours) / 24

      if (days > 0) {
        newDate += `${days} д `
      }
      hours === 0
        ? (newDate += '00:')
        : hours < 10
        ? (newDate += `0${hours}:`)
        : (newDate += `${hours}:`)
      minutes === 0
        ? (newDate += '00:')
        : minutes < 10
        ? (newDate += `0${minutes}:`)
        : (newDate += `${minutes}:`)
      seconds < 10 ? (newDate += `0${seconds}`) : (newDate += `${seconds}`)
      if (this.timer <= 0) {
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