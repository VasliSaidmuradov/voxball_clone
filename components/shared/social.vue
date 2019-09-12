<template>
  <div class="social">
    <p class="social__title">Поделиться:</p>
    <div class="social__list">
      <a href="#" class="social__item">
        <span class="social__icon-wrap">
          <icon-vk />
        </span>
      </a>
      <a href="#" class="social__item">
        <span class="social__icon-wrap">
          <icon-facebook />
        </span>
      </a>
      <a href="#" class="social__item">
        <span class="social__icon-wrap">
          <icon-twitter />
        </span>
      </a>
      <a href="#" class="social__item">
        <span class="social__icon-wrap">
          <icon-telegram />
        </span>
      </a>
      <a href="#" class="social__item">
        <span class="social__icon-wrap">
          <icon-whatsapp />
        </span>
      </a>
    </div>
  </div>
</template>

<script>
import iconVk from '@/components/icons/iconVk.vue'
import iconFacebook from '@/components/icons/iconFacebook.vue'
import iconTwitter from '@/components/icons/iconTwitter.vue'
import iconTelegram from '@/components/icons/iconTelegram.vue'
import iconWhatsapp from '@/components/icons/iconWhatsapp.vue'

export default {
  components: {
    iconVk,
    iconFacebook,
    iconTwitter,
    iconTelegram,
    iconWhatsapp
  }
}
</script>

<style lang="scss" scoped>
.social {
  display: flex;
  align-items: center;
  justify-content: space-around;
  min-width: 210px;
  &__title {
    color: #565656;
  }
  &__list {
    display: flex;
    justify-content: space-around;
    width: 45%;
  }
  &__item {
    margin: 0 0.1rem;
    svg {
      fill: $base-text-color;
    }
    &:hover svg {
      fill: $base-color;
    }
  }
  &__icon-wrap {
    display: inline-block;
    width: 1.1rem;
  }
}
</style>