<template>
  <div class="Search">
    <input @keypress.enter="search()" v-model="text" class="Search__input" type="text" />
    <img @click="search()" class="Search__icon" src="~/assets/img/search.png" alt />
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: ''
    }
  },
  methods: {
    search() {
      console.log(this.text)
    }
  }
}
</script>

<style lang="scss" scoped>
.Search {
  position: relative;
  &__input {
    border: 1px solid $border-color;
    border-radius: 15px;
    padding: 0.4em 0.7em;
    padding-right: 2em;
    width: 100%;
    transition: 0.5s;

    &:focus {
      outline: none;
      border: 1px solid $base-color;
    }
  }
  &__icon {
    position: absolute;
    width: 13px;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
  }
}
</style>