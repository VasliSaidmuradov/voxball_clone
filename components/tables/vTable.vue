<template>
  <div class="table-wrap">
    <slot name="header">
      <div v-if="title || text" class="header">
        <h3 class="header__title">{{ title }}</h3>
        <p class="header__text">{{ text }}</p>
      </div>
    </slot>
    <div class="table-scroll">
      <table class="table">
        <thead class="table-thead">
          <tr class="table-thead__tr">
            <th
              v-for="(field, index) in fields"
              :key="index"
              class="table-thead__th"
            >{{ field.label }}</th>
          </tr>
        </thead>
        <tbody class="table-tbody">
          <tr class="table-tbody__tr" v-for="(item, index) in items" :key="index">
            <td class="table-tbody__td" v-for="(field, index) in fields" :key="index">
              <span v-if="field.field!=='button'">{{ item[field.field] }}</span>
              <v-btn
                v-if="field.field=='button' && item.hasOwnProperty('button')"
                class="table-tbody__button"
                border
              >
                {{ item[field.field] }}
                <icon-arrow class="ml-2" />
              </v-btn>
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
    fields: Array
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