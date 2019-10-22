<template>
  <div class="m-nav-item" v-on:click="$navigate(dataItem.path)">
    <icon-nav-polls class="m-nav-item__icon" v-show="(dataItem.path == '/polls')" />
    <icon-nav-results class="m-nav-item__icon" v-show="(dataItem.path == '/results')" />
    <icon-nav-ratings class="m-nav-item__icon" v-show="(dataItem.path == '/ratings')" />
    <icon-nav-news class="m-nav-item__icon" v-show="(dataItem.path == '/news')" />
    <icon-nav-shareholders class="m-nav-item__icon" v-show="(dataItem.path == '/shareholders')" />
    <icon-nav-about class="m-nav-item__icon" v-show="(dataItem.path == '/about')" />

    <p class="m-nav-item__text">{{ dataItem.text }}</p>
  </div>
</template>

<script>
import iconNavPolls from '@/components/icons/iconNavPolls.vue'
import iconNavResults from '@/components/icons/iconNavResults.vue'
import iconNavRatings from '@/components/icons/iconNavRatings.vue'
import iconNavNews from '@/components/icons/iconNavNews.vue'
import iconNavShareholders from '@/components/icons/iconNavShareholders.vue'
import iconNavAbout from '@/components/icons/iconNavAbout.vue'

export default {
  props: {
    dataItem: Object
  },
  components: {
    iconNavPolls,
    iconNavResults,
    iconNavRatings,
    iconNavNews,
    iconNavShareholders,
    iconNavAbout
  }
}
</script>

<style lang="scss" scoped>
.m-nav-item {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 4.5rem;
  max-width: 17rem;
  background-color: #fff;
  border-bottom: 1px solid #e8e8e8;
  cursor: pointer;

  .m-nav-item__icon {
    width: 20%;
    max-width: 2rem;
    max-height: 4rem;
    margin-left: 1rem;
    fill: url(#Gradient2);

    img {
      width: 100%;
    }
  }

  .m-nav-item__text {
    width: 80%;
    margin: 0;
    margin-left: 2rem;
    text-transform: uppercase;
  }

  &:first-child {
    .m-nav-item__icon {
      margin-left: 0.5rem;
    }
  }
}

.m-nav-item:hover {
  background-color: $base-color;
  color: #fff;

  .m-nav-item__icon {
    fill: #fff;
  }
}
</style>