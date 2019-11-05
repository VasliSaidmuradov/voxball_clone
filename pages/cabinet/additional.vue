<template>
  <div class="additional">
    <detailed-layout :title="'Личный кабинет'">
      <section class="additional-wrap m-auto">
        <additional-list
          :personalData="personalData"
          :personalAddress="personalAddress"
          :familyStatus="familyStatus"
          :educationAndWork="educationAndWork"
          :interestsAndHobbies="interestsAndHobbies"
        ></additional-list>
      </section>
    </detailed-layout>
  </div>
</template>

<script>
import detailedLayout from '@/components/layouts/detailedLayout.vue'
import cabinetInfoAdditional from '@/components/cabinet/cabinetInfoAdditional.vue'
import additionalList from '@/components/cabinet/additional/additionalList.vue'

export default {
  components: {
    detailedLayout,
    cabinetInfoAdditional,
    additionalList
  },
  data() {
    return {
      personalData: [
        { title: 'ФИО', type: 'text' },
        { title: 'Email', type: 'email' },
        { title: 'Телефон', type: 'tel' },
        { title: 'Пол', type: 'select' },
        { title: 'Дата рождения', type: 'date' },
        { title: 'Возраст', type: 'text' }
      ],
      personalAddress: [
        { title: 'Страна', type: 'select' },
        { title: 'Город', type: 'select' },
        { title: 'Район', type: 'text' },
        { title: 'Адрес', type: 'text' }
      ],
      familyStatus: [
        { title: 'Статус отношений', type: 'select' },
        { title: 'Дети', type: 'select' }
      ],
      educationAndWork: [
        { title: 'Уровень образования:', type: 'select' },
        { title: 'Место работы:', type: 'select' },
        { title: 'Уровень квалификации:', type: 'select' },
        { title: 'Доход:', type: 'select' },
        { title: 'Сфера деятельности:', type: 'select' },
        { title: 'Должность:', type: 'select' }
      ],
      interestsAndHobbies: [
        { title: 'Спорт:', type: 'select' },
        { title: 'Боевые искусства:', type: 'select' },
        { title: 'Танцы:', type: 'select' },
        { title: 'Фитнесс и здоровый образ жизни:', type: 'select' },
        { title: 'Отдых на свежем воздухе:', type: 'select' },
        { title: 'Чтение:', type: 'select' },
        { title: 'Музыка:', type: 'select' },
        { title: 'ТВ:', type: 'select' },
        { title: 'Игры:', type: 'select' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.additional-wrap {
  padding: 2rem 0;
  min-height: 30rem;
  // border: 1px solid red;
}
</style>