<template>
  <div class="social">
    <p class="social__title">Поделиться:</p>
    <div>
      <social-sharing
        :url="url"
        :title="poll.title"
        :description="`${poll.description.substr(0, 100) + '...'}`"
        inline-template
      >
        <div class="social__list">
          <network network="vk" class="social__item">
            <span class="social__icon-wrap">
              <svg
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 511.962 511.962"
                style="enable-background:new 0 0 511.962 511.962;"
                xml:space="preserve"
              >
                <g>
                  <g>
                    <path
                      d="M507.399,370.471c-1.376-2.304-9.888-20.8-50.848-58.816c-42.88-39.808-37.12-33.344,14.528-102.176
			c31.456-41.92,44.032-67.52,40.096-78.464c-3.744-10.432-26.88-7.68-26.88-7.68l-76.928,0.448c0,0-5.696-0.768-9.952,1.76
			c-4.128,2.496-6.784,8.256-6.784,8.256s-12.192,32.448-28.448,60.032c-34.272,58.208-48,61.28-53.6,57.664
			c-13.024-8.416-9.76-33.856-9.76-51.904c0-56.416,8.544-79.936-16.672-86.016c-8.384-2.016-14.528-3.36-35.936-3.584
			c-27.456-0.288-50.72,0.096-63.872,6.528c-8.768,4.288-15.52,13.856-11.392,14.4c5.088,0.672,16.608,3.104,22.72,11.424
			c7.904,10.72,7.616,34.848,7.616,34.848s4.544,66.4-10.592,74.656c-10.4,5.664-24.64-5.888-55.2-58.72
			c-15.648-27.04-27.488-56.96-27.488-56.96s-2.272-5.568-6.336-8.544c-4.928-3.616-11.84-4.768-11.84-4.768l-73.152,0.448
			c0,0-10.976,0.32-15.008,5.088c-3.584,4.256-0.288,13.024-0.288,13.024s57.28,133.984,122.112,201.536
			c59.488,61.92,127.008,57.856,127.008,57.856h30.592c0,0,9.248-1.024,13.952-6.112c4.352-4.672,4.192-13.44,4.192-13.44
			s-0.608-41.056,18.464-47.104c18.784-5.952,42.912,39.68,68.48,57.248c19.328,13.28,34.016,10.368,34.016,10.368l68.384-0.96
			C488.583,400.807,524.359,398.599,507.399,370.471z"
                    />
                  </g>
                </g>
              </svg>
            </span>
          </network>
          <network network="facebook" class="social__item">
            <span class="social__icon-wrap">
              <!-- <icon-facebook />FB -->
              <svg
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 512 512"
                style="enable-background:new 0 0 512 512;"
                xml:space="preserve"
              >
                <g>
                  <g>
                    <path
                      d="M288,176v-64c0-17.664,14.336-32,32-32h32V0h-64c-53.024,0-96,42.976-96,96v80h-64v80h64v256h96V256h64l32-80H288z"
                    />
                  </g>
                </g>
              </svg>
            </span>
          </network>
          <network network="telegram" class="social__item">
            <span class="social__icon-wrap">
              <!-- <icon-telegram /> -->
              <svg viewBox="0 -31 512 512" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="m123.195312 260.738281 63.679688 159.1875 82.902344-82.902343 142.140625 112.976562 100.082031-450-512 213.265625zm242.5-131.628906-156.714843 142.941406-19.519531 73.566407-36.058594-90.164063zm0 0"
                />
              </svg>
            </span>
          </network>
          <network network="twitter" class="social__item">
            <span class="social__icon-wrap">
              <!-- <icon-twitter /> -->
              <svg
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 512 512"
                style="enable-background:new 0 0 512 512;"
                xml:space="preserve"
              >
                <g>
                  <g>
                    <path
                      d="M512,97.248c-19.04,8.352-39.328,13.888-60.48,16.576c21.76-12.992,38.368-33.408,46.176-58.016
			c-20.288,12.096-42.688,20.64-66.56,25.408C411.872,60.704,384.416,48,354.464,48c-58.112,0-104.896,47.168-104.896,104.992
			c0,8.32,0.704,16.32,2.432,23.936c-87.264-4.256-164.48-46.08-216.352-109.792c-9.056,15.712-14.368,33.696-14.368,53.056
			c0,36.352,18.72,68.576,46.624,87.232c-16.864-0.32-33.408-5.216-47.424-12.928c0,0.32,0,0.736,0,1.152
			c0,51.008,36.384,93.376,84.096,103.136c-8.544,2.336-17.856,3.456-27.52,3.456c-6.72,0-13.504-0.384-19.872-1.792
			c13.6,41.568,52.192,72.128,98.08,73.12c-35.712,27.936-81.056,44.768-130.144,44.768c-8.608,0-16.864-0.384-25.12-1.44
			C46.496,446.88,101.6,464,161.024,464c193.152,0,298.752-160,298.752-298.688c0-4.64-0.16-9.12-0.384-13.568
			C480.224,136.96,497.728,118.496,512,97.248z"
                    />
                  </g>
                </g>
              </svg>
            </span>
          </network>
          <network network="whatsapp" class="social__item">
            <span class="social__icon-wrap">
              <!-- <icon-whatsapp /> -->
              <svg
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 512 512"
                style="enable-background:new 0 0 512 512;"
                xml:space="preserve"
              >
                <g>
                  <g>
                    <path
                      d="M256.064,0h-0.128C114.784,0,0,114.816,0,256c0,56,18.048,107.904,48.736,150.048l-31.904,95.104l98.4-31.456
			C155.712,496.512,204,512,256.064,512C397.216,512,512,397.152,512,256S397.216,0,256.064,0z M405.024,361.504
			c-6.176,17.44-30.688,31.904-50.24,36.128c-13.376,2.848-30.848,5.12-89.664-19.264C189.888,347.2,141.44,270.752,137.664,265.792
			c-3.616-4.96-30.4-40.48-30.4-77.216s18.656-54.624,26.176-62.304c6.176-6.304,16.384-9.184,26.176-9.184
			c3.168,0,6.016,0.16,8.576,0.288c7.52,0.32,11.296,0.768,16.256,12.64c6.176,14.88,21.216,51.616,23.008,55.392
			c1.824,3.776,3.648,8.896,1.088,13.856c-2.4,5.12-4.512,7.392-8.288,11.744c-3.776,4.352-7.36,7.68-11.136,12.352
			c-3.456,4.064-7.36,8.416-3.008,15.936c4.352,7.36,19.392,31.904,41.536,51.616c28.576,25.44,51.744,33.568,60.032,37.024
			c6.176,2.56,13.536,1.952,18.048-2.848c5.728-6.176,12.8-16.416,20-26.496c5.12-7.232,11.584-8.128,18.368-5.568
			c6.912,2.4,43.488,20.48,51.008,24.224c7.52,3.776,12.48,5.568,14.304,8.736C411.2,329.152,411.2,344.032,405.024,361.504z"
                    />
                  </g>
                </g>
              </svg>
            </span>
          </network>
        </div>
      </social-sharing>
    </div>
  </div>
</template>

<script>
import iconVk from '@/components/icons/iconVk.vue'
import iconFacebook from '@/components/icons/iconFacebook.vue'
import iconTwitter from '@/components/icons/iconTwitter.vue'
import iconTelegram from '@/components/icons/iconTelegram.vue'
import iconWhatsapp from '@/components/icons/iconWhatsapp.vue'
import SocialSharing from 'vue-social-sharing'

export default {
  props: {
    url: String,
    poll: {
      type: Object
    }
    // pollTitle: String
  },
  components: {
    iconVk,
    iconFacebook,
    iconTwitter,
    iconTelegram,
    iconWhatsapp,
    SocialSharing
  }
}
</script>

<style lang="scss" >
.social {
  display: flex;
  align-items: center;
  justify-content: space-around;
  min-width: 210px;
  &__title {
    color: #565656;
    margin: 0;
    margin-right: 0.5rem;
  }
  &__list {
    display: flex;
    justify-content: space-around;
    // width: 45%;
  }
  &__item {
    margin: 0 0.2rem;
    width: 1.5rem;
    height: 1.5rem;
    cursor: pointer;
    outline: none;
    svg {
      fill: $base-text-color;
      width: 100%;
    }
    &:hover svg {
      fill: $base-color;
    }
  }
  &__icon-wrap {
    display: inline-block;
    // width: 1.1rem;
  }
}
</style>