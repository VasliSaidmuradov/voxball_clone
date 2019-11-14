<template>
  <div class="player-wrap">
    <!-- {{ videoSRC }}
    {{ videoUrl }}-->
    <vue-plyr v-if="videoUrl" class="player" :style="styles">
      <div class="player__video-embed">
        <iframe
          class="player__iframe"
          :src="videoUrl"
          allowfullscreen
          allowtransparency
          allow="autoplay"
        ></iframe>
      </div>
      <!-- :src="'https://player.vimeo.com/video/76979871?loop=false&byline=false&portrait=false&title=false&speed=true&transparent=0&gesture=media'" -->
    </vue-plyr>
    <div v-if="videoSRC" :style="styles">
      <video class="player" controls :src="videoSRC"></video>
    </div>
  </div>
</template>

<script>
if (process.browser) {
  var { VuePlyr } = require('vue-plyr')
}

import 'vue-plyr/dist/vue-plyr.css'

export default {
  components: {
    VuePlyr
  },
  props: {
    src: String,
    width: String,
    height: String
  },
  methods: {
    hostType(value) {
      let regYou = /youtube.com/i
      let regVim = /vimeo.com/i
      let host = regYou.test(value)
        ? 'youtube'
        : regVim.test(value)
        ? 'vimeo'
        : false
      return host
    },

    hostVideoId(data) {
      let { host, src } = data
      let id
      if (host === 'youtube') {
        id = src.split('=')[1]
      }
      if (host === 'vimeo') {
        id = src.split('vimeo.com/')[1]
      }
      console.log('src: ', id)
      return id
    },

    // https://www.youtube.com/watch?v=Of0S_6U9T8g
    // необоходимые форматы src для vue-plyr
    // https://player.vimeo.com/video/76979871?loop=false&byline=false&portrait=false&title=false&speed=true&transparent=0&gesture=media'
    // https://www.youtube.com/embed/tzArj5VDTsc?iv_load_policy=3&modestbranding=1&playsinline=1&showinfo=0&rel=0&enablejsapi=1'

    hostPlayer(data) {
      let { host, id } = data
      let player
      if (host === 'youtube') {
        player = `https://www.youtube.com/embed/${id}?iv_load_policy=3&modestbranding=1&playsinline=1&showinfo=0&rel=0&enablejsapi=1`
      }
      if (host === 'vimeo') {
        player = `https://player.vimeo.com/video/${id}?loop=false&byline=false&portrait=false&title=false&speed=true&transparent=0&gesture=media`
      }
      return player
    }
  },
  computed: {
    videoSRC() {
      let host = this.hostType(this.src)
      // console.log('host: ', host)
      return !host ? this.src : false
    },
    videoUrl() {
      let result
      let host = this.hostType(this.src)
      if (host) {
        // console.log('host: ', host)
        let id = this.hostVideoId({ host: host, src: this.src })
        // console.log('id: ', id)
        let hostPlayer = this.hostPlayer({ host: host, id: id })
        result = hostPlayer
      } else {
        result = false
      }
      return result
    },
    styles() {
      return {
        height: this.height,
        width: this.width
      }
    }
  }
}
</script>

<style lang="scss">
.player {
  width: 100%;
  height: 20rem;
  &-wrap {
    width: 100%;
    height: 100%;
  }
  &__iframe {
    width: 100%;
    height: 100%;
  }
}
</style>