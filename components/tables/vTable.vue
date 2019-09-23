<template>
  <div class="table-wrap">
    <slot></slot>
    <div class="table-scroll">
    <table class="table">
      <thead class="table-thead">
        <tr class="table-thead__tr">
          <th class="table-thead__th" >№</th>
          <th 
           v-for="(field, index) in fields" 
           :key="index"
           class="col table-thead__th">
            {{ field.label }}
          </th>
        </tr>
      </thead>
      <tbody class="table-tbody">
        <tr class="table-tbody__tr" v-for="(item, index) in items" :key="index">
          <th class="table-tbody__th">{{ index+1 }}</th>
          <td class="table-tbody__td" v-for="(itempiece, index) in item" :key="index">{{ itempiece }}</td>
        </tr>
      </tbody>
    </table>
    </div>
    <div v-if="bottomLine" class="table__back">
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    items: Array,
    fields: Array,
    bottomLine: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style lang="scss" scoped>
.table {
  &-scroll {
    width: 100%;
    overflow: hidden;
    overflow-y: auto;
    max-height: 15rem;
  }
  border-collapse: collapse;
  border-spacing: unset;
  &-wrap {
    display: table;
    background: white;
    box-shadow: 1px 1px 10px 1px rgba(0, 0, 0, 0.2);
    width: 40%;
    min-width: 40rem;
    min-height: 10rem;
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
    &__th {
      padding: 1rem 1.5rem;
    }
    &__td {
      padding: 1.5rem 1.5rem;
      text-align: left;
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
</style>