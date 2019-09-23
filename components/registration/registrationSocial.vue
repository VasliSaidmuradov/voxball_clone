<template>
  <div class="registration-social">
    <p class="registration-social__title">Регистрироваться через другие социальные сети</p>
    <div class="registration-social__list">
      <a href="#" class="registration-social__item">
        <span class="registration-social__icon-wrap">
          <icon-vk />
        </span>
      </a>
      <a href="#" class="registration-social__item">
        <span class="registration-social__icon-wrap">
          <icon-facebook />
        </span>
      </a>
      <a href="#" class="registration-social__item">
        <span class="registration-social__icon-wrap">
          <icon-twitter />
        </span>
      </a>
      <a href="#" class="registration-social__item">
        <span class="registration-social__icon-wrap">
          <icon-instagram />
        </span>
      </a>
      <a href="#" class="registration-social__item">
        <span class="registration-social__icon-wrap google">
          <icon-google />
        </span>
      </a>
    </div>
  </div>
</template>

<script>
import iconVk from '@/components/icons/iconVk.vue'
import iconFacebook from '@/components/icons/iconFacebook.vue'
import iconTwitter from '@/components/icons/iconTwitter.vue'
import iconGoogle from '@/components/icons/iconGoogle.vue'
import iconInstagram from '@/components/icons/iconInstagram.vue'

export default {
  components: {
    iconVk,
    iconFacebook,
    iconTwitter,
    iconGoogle,
    iconInstagram
  }
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
    margin: 0 0.3rem;
    display: flex;
    align-items: center;
    svg {
      fill: $base-text-color;
    }
    &:hover svg {
      fill: $base-color;
    }
  }

  &__icon-wrap {
    width: 1.3rem;
    display: inline-block;
  }
}
.google {
  width: 3.6rem;
}
</style>