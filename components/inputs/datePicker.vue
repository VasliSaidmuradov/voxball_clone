<template>
  <div class="calendar">
    <div class="clanedar__header">
      <h2 class="calendar__title">Срок действия голосования:</h2>
    </div>
    <div class="calendar__main">
      <div class="calendar-time">
        <h3 class="calendar-time__title">Время окончания</h3>
        <div class="calendar-time__options">
          <v-select
            class="calendar-time__item"
            :options="hours"
            :searchable="false"
            :no-drop="false"
            :multiple="false"
            :placeholder="hours[0]"
            :maxHeight="'70'"
            :clearable="false"
          ></v-select>
          <span class="p-1">:</span>
          <v-select
            class="calendar-time__item"
            :options="minutes"
            :searchable="false"
            :no-drop="false"
            :multiple="false"
            :placeholder="minutes[0]"
            :maxHeight="'70'"
            :clearable="false"
          ></v-select>
        </div>
      </div>
      <div class="calendar-date">
        <h3 class="calendar-date__title">Дата окончания</h3>
        <no-ssr>
          <div class="calendar-wrap">
            <!-- <v-calendar></v-calendar> -->
            <v-date-picker
              :popoverExpanded="popoverExpanded"
              :formats="formats"
              mode="single"
              v-model="date"
              :select-attribute="attributes"
            ></v-date-picker>
          </div>
        </no-ssr>
      </div>
    </div>
    <div class="calendar__footer">*Голосования по рейтингу может продолжиться до 30 дней</div>
  </div>
</template>

<script>
import Vue from 'vue'
import vCalendar from 'v-calendar'
Vue.use(vCalendar, {
  locale: 'ru-RU',
  popoverExpanded: true
})
import 'v-calendar/lib/v-calendar.min.css'
import vSelect from 'vue-select'
import '@/assets/css/vSelect.scss'

export default {
  components: {
    vSelect
  },
  data() {
    return {
      hours: [
        '00',
        '01',
        '02',
        '03',
        '04',
        '05',
        '06',
        '07',
        '08',
        '09',
        '10',
        '11',
        '12',
        '13',
        '14',
        '15',
        '16',
        '17',
        '18',
        '19',
        '20',
        '21',
        '22',
        '23'
      ],
      minutes: [
        '00',
        '01',
        '02',
        '03',
        '04',
        '05',
        '06',
        '07',
        '08',
        '09',
        '10',
        '11',
        '12',
        '13',
        '14',
        '15',
        '16',
        '17',
        '18',
        '19',
        '20',
        '21',
        '22',
        '23',
        '24',
        '25',
        '26',
        '27',
        '28',
        '29',
        '30',
        '31',
        '32',
        '33',
        '34',
        '34',
        '35',
        '36',
        '37',
        '38',
        '39',
        '40',
        '41',
        '42',
        '43',
        '44',
        '45',
        '46',
        '37',
        '48',
        '49',
        '50',
        '51',
        '52',
        '53',
        '54',
        '55',
        '56',
        '57',
        '58',
        '59'
      ],
      date: new Date(),
      formats: {
        title: 'MMMM YYYY',
        weekdays: 'WW',
        navMonths: 'MMMM',
        input: ['DD MMMM YYYY']
      },
      popoverExpanded: true,
      attributes: {
        highlight: {
          height: '1.8rem',
          backgroundColor: 'transparent',
          borderColor: '#00b900',
          borderWidth: '1px',
          borderStyle: 'solid',
          borderRadius: '50%'
        },
        contentStyle: {
          color: '#2b454e'
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.calendar {
  &__header {
  }
  &__title {
    margin: 0;
    font-size: 1.2rem;
    font-weight: 400;
    text-transform: uppercase;
  }
  &__main {
    display: flex;
  }
  &-wrap {
    display: flex;
  }
  &-time {
    &__title {
      font-size: 1rem;
      font-weight: 400;
    }
    &__options {
      display: flex;
      align-items: center;
      font-size: 2rem;
      width: 21rem;
    }
    &__item {
      min-width: auto;
      max-width: 9rem;
    }
  }
  &-date {
    &__title {
      font-size: 1rem;
      font-weight: 400;
    }
  }
  &__footer {
    margin: 0;
    padding-top: 2rem;
    font-style: italic;
  }
}
</style>
<style lang="scss">
// v-select
.calendar .v-select .vs__selected {
  font-size: 1.2rem;
  padding-top: 4px;
  padding-bottom: 0;
  color: $base-text-color;
}
.calendar .vs__dropdown-toggle {
  border-color: $base-text-color;
  width: 7.2rem;
  height: 2.5rem;
}
.calendar .vs__dropdown-menu {
  min-width: 70px;
}
.calendar .v-select .vs__search[placeholder] {
  font-size: 1.2rem;
  color: $base-text-color;
  margin: 0;
}
.calendar .v-select .vs__open-indicator {
  fill: $base-color;
}

// v-date-picker
.calendar .c-header {
  background-color: $base-text-color;
  color: white;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
}
.calendar .calendar__title {
  color: white;
}
.calendar .popover-container input {
  border-radius: 37px;
  border-color: $base-text-color;
  border-width: 1px;
  padding: 0.9rem 1.2rem;
  outline: none;
  font-size: 1.2rem;
  color: $base-text-color;
  min-width: 100px;
  width: 15rem;
  height: 2.5rem;
}
.calendar .popover-content.direction-bottom.align-left:after {
  background-color: #2b454e;
}
.calendar .popover-content.direction-bottom.align-left {
  border-radius: 15px;
}
.calendar .c-arrow-layout {
  color: $secondary-text-color;
}
</style>