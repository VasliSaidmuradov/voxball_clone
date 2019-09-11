<template>
  <div class="social">
    <p class="social__title">
      Поделиться:
    </p>
    <div class="social__list">
      <a href="#" class="social__item">
        <icon-base 
          icon-name="vk" 
          class="vk"
          viewBox="0 0 548.358 548.358">
          <icon-vk />
        </icon-base>
      </a>
      <a href="#" class="social__item">
        <icon-base 
          icon-name="facebook" 
          class="facebook"
          viewBox="0 0 96.124 96.123">
          <icon-facebook />
        </icon-base>
      </a>
      <a href="#" class="social__item">
        <icon-base 
          icon-name="twitter" 
          class="twitter"
          viewBox="0 0 512 512">
          <icon-twitter />
        </icon-base>
      </a>
      <a href="#" class="social__item">
        <icon-base 
          icon-name="telegram" 
          class="telegram"
          width="18"
          height="20"
          viewBox="0 0 24 24">
          <icon-telegram />
        </icon-base>
      </a>
      <a href="#" class="social__item">
        <icon-base 
          icon-name="whatsapp" 
          class="whatsapp"
          width="18"
          height="20"
          viewBox="0 0 512 512">
          <icon-whatsapp />
        </icon-base>
      </a>
    </div>
  </div>
</template>

<script>
import iconVk from '@/components/icons/iconVk.vue';
import iconFacebook from '@/components/icons/iconFacebook.vue';
import iconTwitter from '@/components/icons/iconTwitter.vue';
import iconTelegram from '@/components/icons/iconTelegram.vue';
import iconWhatsapp from '@/components/icons/iconWhatsapp.vue';

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
    &:hover svg{
      fill: $base-color;
    }
  }
}
</style>