<template>
  <div class="table-wrap" :style="styles">
    <slot name="header">
      <div v-if="title || text" class="header">
        <h3 class="header__title">{{ title }}</h3>
        <p class="header__text">{{ text }}</p>
      </div>
    </slot>
    <div class="table-scroll" :style="styles">
      <table class="table">
        <thead class="table-thead">
          <tr class="table-thead__tr">
            <th v-if="indexed" class="table-thead__index">№</th>
            <th v-for="(field, index) in fields" :key="index" class="table-thead__th">
              <slot :name="`${field.field}-head`">{{ field.label }}</slot>
            </th>
          </tr>
        </thead>
        <tbody class="table-tbody">
          <tr class="table-tbody__tr" v-for="(item, index) in items" :key="index">
            <td v-if="indexed" class="table-tbody__index">{{ index+1 }}</td>
            <td class="table-tbody__td" v-for="(field, index) in fields" :key="index">
              <slot :name="field.field" :data="item[field.field]">{{ item[field.field] }}</slot>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import iconArrow from '@/components/icons/iconArrow.vue'
export default {
  components: {
    iconArrow
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: ''
    },
    items: Array,
    fields: Array,
    indexed: {
      type: Boolean,
      default: false
    },
    maxHeight: String
  },
  computed: {
    styles() {
      return {
        'max-height': this.maxHeight
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.table {
  width: 100%;
  &-scroll {
    width: 100%;
    overflow: hidden;
    overflow-y: auto;
    // max-height: 15rem;
  }
  border-collapse: collapse;
  border-spacing: unset;
  &-wrap {
    display: table;
    background: white;
    min-width: 40rem;
    min-height: 10rem;
    width: 100%;
    position: relative;
  }
  &-thead {
    color: white;
    &__tr {
      background-image: url('~assets/img/table__bg.png');
      background-repeat: no-repeat;
      background-size: 100% 100%;
    }
    &__th {
      padding: 1.5rem 1.5rem;
      text-align: left;
    }
    &__index {
      padding: 1.5rem 1.5rem;
      width: 5rem;
    }
  }
  &-tbody {
    color: #565656;
    &__tr {
      border-bottom: 1px solid $border-color;
    }
    &__td {
      padding: 1.5rem 1.5rem;
      text-align: left;
    }
    &__index {
      padding: 1.5rem 1.5rem;
      text-align: center;
    }
    &__button {
      color: $base-text-color;
      border-color: $base-text-color;
      text-transform: uppercase;
      font-size: 1rem;
      &:hover {
        border-color: $base-color;
      }
    }
  }
  &__back {
    width: calc(100% - 3rem);
    height: 0.7rem;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: -0.7rem;
    z-index: -2;
    background-color: $base-color;
  }
}
.header {
  color: $third-text-color;
  padding: 2rem 1.5rem;
  &__title {
    margin: 0;
    text-transform: uppercase;
  }
  &__text {
    margin: 0;
  }
}
</style>