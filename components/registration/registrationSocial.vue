<template>
  <div class="registration-social">
    <p class="registration-social__title">
      Регистрироваться через другие социальные сети
    </p>
    <div class="registration-social__list">
      <a href="#" class="registration-social__item">
        <icon-base 
          icon-name="vk" 
          class="vk"
          viewBox="0 0 548.358 548.358">
          <icon-vk />
        </icon-base>
      </a>
      <a href="#" class="registration-social__item">
        <icon-base 
          icon-name="facebook" 
          class="facebook"
          viewBox="0 0 96.124 96.123">
          <icon-facebook />
        </icon-base>
      </a>
      <a href="#" class="registration-social__item">
        <icon-base 
          icon-name="vk" 
          class="twitter"
          viewBox="0 0 512 512">
          <icon-twitter />
        </icon-base>
      </a>
      <a href="#" class="registration-social__item">
        <icon-base 
          icon-name="google" 
          class="google"
          width="65"
          height="20"
          viewBox="100 0 100 100">
          <icon-google />
        </icon-base>
      </a>
    </div>
  </div>
</template>

<script>
import iconVk from '@/components/icons/iconVk.vue';
import iconFacebook from '@/components/icons/iconFacebook.vue';
import iconTwitter from '@/components/icons/iconTwitter.vue';
import iconGoogle from '@/components/icons/iconGoogle.vue';

export default {
  components: {
    iconVk,
    iconFacebook,
    iconTwitter,
    iconGoogle
  },
}
</script>

<style lang="scss" scoped>
.registration-social {
  border-top: 1px solid #e8e8e8;
  padding: 1rem 0;

  &__title {
    font-size: 0.7em;
    opacity: 0.5;
    color: #565656;
    text-align: center;
    margin: 0;
    margin-bottom: 1rem;
  }

  &__list {
    display: flex;
    justify-content: center;
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
.google {
  vertical-align: -0.4em;
}
</style>