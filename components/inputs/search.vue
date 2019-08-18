<template>
  <div class="Search">
    <input @keypress.enter="search()" v-model="text" class="input Search__input" type="text" />
    <img @click="search()" class="Search__icon" src="~/assets/img/search.png" alt />
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: ""
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
    border: 1px solid gray;
    border-radius: 15px;
    height: 25px;
    padding: 0 5px;

    &:focus {
      outline: none;
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