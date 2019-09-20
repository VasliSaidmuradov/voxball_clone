<template>
  <div class="proposal-list">
    <proposal-item :style="styles" v-for="(item, index) in proposalArr" :key="index" :proposal="item"></proposal-item>
  </div>
</template>

<script>
import proposalItem from '@/components/shareholder/proposal/proposalItem.vue'
export default {
	props: {
		proposalArr: Array,
		perPage: {
			type: String,
			default: '3'
		}
	},
	components: {
		proposalItem 
	},
	computed: {
    styles() {
      return {
        'width': `calc(100% / ${this.perPage})`,
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.proposal-list {
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	&__item {
		width: calc(100% / perpage)
	}
}
</style>