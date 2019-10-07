<template>
  <div class="draw">
    <detailed-layout title="УЧАСТВУЙТЕ В РОЗЫГРЫШАХ" text="ВЫЙГРЫВАЙТЕ ЦЕННЫЕ ПРИЗЫ ОТ VOXBALL">
      <template v-slot:action>
        <p>Кругом розыгрыши, у нас выйграши, без призов не останетесь.</p>
      </template>
      <draw-list :list="list" :perPage="3" />
    </detailed-layout>
  </div>
</template>

<script>
import detailedLayout from '@/components/layouts/detailedLayout.vue'
import drawList from '@/components/draw/drawList/drawList.vue'
export default {
  components: {
    detailedLayout,
    drawList
  },
  data() {
    return {
      list: [
        { name: 'Draw1', date: '13.09.2019', complete: false, cost: 5 },
        { name: 'Draw2', date: '13.09.2019', complete: false, cost: 10 },
        { name: 'Draw3', date: '13.09.2019', complete: false, cost: 15 }
      ]
    }
  }
}
</script>

<style>
</style>