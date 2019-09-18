<template>
  <div v-click-outside="onClickOutside" class="Search">
    <div>
      <input
        @focus="focus()"
        @input="$emit('input', $event.target.value)"
        @keyup.enter="search($event.target.value)"
        :value="value"
        :class="classes"
        type="text"
      />
      <img @click="$event('search')" class="Search__icon" src="~/assets/img/search.png" alt />
    </div>
    <div v-if="!hideResults" class="Search__results">
      <div v-if="results.length && isFocus">
        <div
          @click="selectItem(res)"
          v-for="(res, index) in results"
          :key="index"
          class="Search__results-item"
        >{{res[label]}}</div>
      </div>
      <div v-if="!results.length && isFocus">
        <div class="Search__results-item">Ничего не найдено</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: '',
      isFocus: false
    }
  },
  methods: {
    search(val) {
      this.$emit('search', val)
      console.log(this.text)
    },
    focus() {
      this.isFocus = true
    },
    selectItem(item) {
      this.$emit('selectItem', item)
      this.isFocus = false
    },
    onClickOutside(event) {
      this.isFocus = false
    }
  },
  computed: {
    classes() {
      return {
        Search__input: true,
        'Search__input--focus': !this.hideResults && this.isFocus
      }
    }
  },
  props: {
    results: {
      type: Array,
      default: () => []
    },
    label: {
      type: String,
      default: 'name'
    },
    hideResults: {
      type: Boolean,
      default: false
    },
    value: String
  }
}
</script>

<style lang="scss" scoped>
.Search__input:focus .Search__results {
  display: block;
}
.Search {
  position: relative;
  font-size: 0.8rem;
  &__input {
    border: 1px solid $border-color;
    border-radius: 15px;
    padding: 0.4em 0.7em;
    padding-right: 2em;
    width: 100%;
    transition: border 0.5s;
    font-size: inherit;
    outline: none;

    &--focus {
      border: 1px solid $base-color;
      border-bottom-right-radius: 0px;
      border-bottom-left-radius: 0px;
    }
  }

  &__icon {
    position: absolute;
    width: 13px;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
  }

  &__results {
    position: absolute;
    z-index: 5;
    width: 100%;
    height: 10em;
    overflow-y: auto;
    &-item {
      border-top: 1px solid #c1c1c1;
      background: #fff;
      padding: 5px 10px;
      cursor: pointer;

      // &:last-child {
      //   border-bottom-right-radius: 15px;
      //   border-bottom-left-radius: 15px;
      // }

      &:hover {
        background: #f3f3f3;
      }
    }
  }
}
</style>