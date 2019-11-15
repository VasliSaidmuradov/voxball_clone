<template>
  <div class="tags">
    <no-ssr>
      <div class="tags__header">
        <h4 class="tags__title">Укажите теги</h4>
        <vue-tags-input
          class="tags-custom__add"
          v-model="tag"
          :tags="tags"
          @tags-changed="newTags => tags = newTags"
          @input="search"
          :placeholder="''"
          :autocomplete-items="filteredItems"
        />
      </div>
      <div class="tags__main">
        <div class="tags__selected">
          <h4 class="tags__title">Выбранные теги:</h4>
          <vue-tags-input
            class="tags-custom__selected"
            v-model="tag"
            :tags="tags"
            @tags-changed="newTags => tags = newTags"
            :placeholder="''"
          />
        </div>
      </div>
    </no-ssr>
  </div>
</template>

<script>
if (process.browser) {
  var { VueTagsInput } = require('@johmun/vue-tags-input')
}

export default {
  components: {
    VueTagsInput
  },
  props: {
    tagsList: Array
  },
  data() {
    return {
      tag: '',
      tags: [],
      optList: [
        { text: 'Politics' },
        { text: 'Tech' },
        { text: 'Education' },
        { text: 'Sport' }
      ]
    }
  },
  methods: {
    tagAdd(text) {
      this.tags.push({ text })
    },
    search(value) {
      try {
        // console.log('tags input search: ', value)
        // console.log('tags: ', this.tags)
        this.$emit('input', this.tag)
      } catch (err) {
        console.log('tags error: ', err)
      }
    }
  },
  watch: {
    tags() {
      console.log('tags array', this.tags)
      this.$emit('change', this.tags.map(i => i.text))
    }
  },
  computed: {
    filteredItems() {
      if (this.tagsList.length !== 0) {
        let list = this.tagsList
        list = list.map(item => item.name)
        return list.filter(i => {
          return i.toLowerCase().indexOf(this.tag.toLowerCase()) !== -1
        })
      } else {
        return this.optList.filter(i => {
          return i.text.toLowerCase().indexOf(this.tag.toLowerCase()) !== -1
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.tags {
  display: flex;
  flex-direction: column;
  &__header {
    position: relative;
  }
  &-dropdown {
    position: absolute;
    top: 3rem;
    display: none;
    &__item {
      height: 2rem;
      width: 8rem;
    }
  }
  &__title {
    margin: 0;
    padding-top: 1.5rem;
    padding-bottom: 0.4rem;
    &_gray {
      color: gray;
      margin: 0;
      padding-top: 1.5rem;
      padding-bottom: 0.4rem;
    }
  }
  &__main {
    display: flex;
  }
  &__choose {
    width: 30%;
  }
  &__selected {
    width: 100%;
  }
}
</style>

<style lang="scss">
.vue-tags-input .ti-new-tag-input {
  background: transparent;
  color: $base-text-color;
}

.vue-tags-input .ti-input {
  padding: 4px 10px;
  transition: border-bottom 200ms ease;
}

/* some stylings for the autocomplete layer */
.vue-tags-input .ti-autocomplete {
  background: #283944;
  border: 1px solid #8b9396;
  border-top: none;
}

/* the selected item in the autocomplete layer, should be highlighted */
.vue-tags-input .ti-item.ti-selected-item {
  background: #ebde6e;
  color: #283944;
}

/* default styles for all the tags */
.vue-tags-input .ti-tag {
  position: relative;
  background: transparent;
  color: $base-text-color;
  border: 1px solid $base-text-color;
}

/* the styles if a tag is invalid */
.vue-tags-input .ti-tag.ti-invalid {
  background-color: #e88a74;
}

/* if the user input is invalid, the input color should be red */
.vue-tags-input .ti-new-tag-input.ti-invalid {
  color: #e88a74;
}

/* if a tag or the user input is a duplicate, it should be crossed out */
.vue-tags-input .ti-duplicate span,
.vue-tags-input .ti-new-tag-input.ti-duplicate {
  text-decoration: line-through;
}

/* if the user presses backspace, the complete tag should be crossed out, to mark it for deletion */
.vue-tags-input .ti-tag:after {
  transition: transform 0.2s;
  position: absolute;
  content: '';
  height: 2px;
  width: 108%;
  left: -4%;
  top: calc(50% - 1px);
  background-color: #000;
  transform: scaleX(0);
}

.vue-tags-input .ti-deletion-mark:after {
  transform: scaleX(1);
}

.tags .ti-tag {
  font-size: 1.2rem;
}

// tags input
.tags .tags-custom__add {
  max-width: 100%;
}

.tags .tags-custom__add .ti-input .ti-tag {
  position: relative;
  color: #283944;
  display: none;
}

.tags .tags-custom__add .ti-input {
  border-radius: 37px;
}

.tags .vue-tags-input.ti-focus .ti-input {
  border-color: $border-color;
}

// selected tags
.tags .tags-custom__selected {
  max-width: 100%;
}

.tags .tags-custom__selected .ti-input {
  border: none;
  padding: 0;
}

.tags-custom__selected .ti-tags .ti-tag {
  border-radius: 37px;
  padding: 4px 12px;
  font-size: 1rem;
  text-transform: lowercase;
  // margin: 0.5rem 0;
  // margin-right: 0.6rem;
}

.tags-custom__selected .ti-tag .ti-actions {
  font-size: 1rem;
}

// optional tags
.tags .tags-custom__choose-list {
  max-width: 100%;
  display: flex;
  flex-wrap: wrap;
}

.tags-custom__choose-list .ti-tag {
  border-radius: 37px;
  padding: 8px 12px;
  margin: 0.5rem 0;
  margin-right: 0.6rem;
  background: transparent;
  color: #2b454e;
  border: 1px solid #2b454e;
  cursor: pointer;
}

.tags-custom__choose-list .ti-tag .ti-actions {
  display: none;
}

.tags .vue-tags-input .ti-autocomplete {
  width: fit-content;
  background: white;
  border: 1px solid $border-color;
  margin-left: 0.7rem;
  padding-left: 0;
  border-top: none;
}

.tags .vue-tags-input .ti-autocomplete .ti-item {
  padding: 0.2rem 0.5rem;
  padding-left: 0;
}
</style>