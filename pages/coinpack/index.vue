<template>
  <div class="coinpack">
    <detailed-layout :back="false" class="coinpack-layout" title="Выбирайте свой пакет v-coins">
      <v-form-layout class="coinpack-form">
        <v-table
          :min-height="'20rem'"
          :title="tableData.title"
          :text="tableData.text"
          :items="items"
          :fields="fields"
        >
          <template slot="button">
            <v-btn class="table-tbody__button" border>купить</v-btn>
          </template>
          <template slot="number" slot-scope="props" v-if="props.data">
            <div class="d-flex align-items-center">
              <img style="width: 2rem; height: 2rem;" src="~assets/img/poll-card__coin.png" />
              <p class="ml-2">{{ props.data }}</p>
            </div>
          </template>
        </v-table>
      </v-form-layout>
    </detailed-layout>
  </div>
</template>

<script>
import detailedLayout from '@/components/layouts/detailedLayout.vue'
import vFormLayout from '@/components/forms/vFormLayout.vue'
import vTable from '@/components/tables/vTable.vue'

export default {
  components: {
    detailedLayout,
    vFormLayout,
    vTable
  },
  data() {
    return {
      tableData: {
        title: 'Подберите для себя выгодный пакет',
        text:
          'и используйте виртуальную валюту для покупки дополнительных услуг на портале Voxball'
      },
      items: [
        {
          name: 'Пакет-1 Lite',
          number: '350',
          cost: '20 000 тг',
          button: 'купить'
        },
        {
          name: 'Пакет-2 Pro',
          number: '600',
          cost: '55 000 тг',
          button: 'купить'
        },
        {
          name: 'Пакет-3 Active',
          number: '1200',
          cost: '90 000 тг',
          button: 'купить'
        },
        {
          name: 'Пакет-4 Premium',
          number: '5000',
          cost: '150 000 тг',
          button: 'купить'
        }
      ],
      fields: [
        {
          field: 'name',
          label: 'Название пакета'
        },
        {
          field: 'number',
          label: 'Количество v-coins'
        },
        {
          field: 'cost',
          label: 'Стоимость пакета'
        },
        {
          field: 'button',
          label: ''
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.coinpack {
  &-layout {
    background-image: url('~assets/img/registration__bg.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
  &-form {
    margin: 3rem auto;
    padding: 0;
  }
}
</style>
<style lang="scss">
.coinpack .table-tbody__td:first-child {
  font-weight: 700;
}
</style>