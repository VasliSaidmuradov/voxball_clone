<template>
  <div class="shareholder-list">
    <shareholder-steps-item 
		  v-for="(item, index) in stepsArr" 
			:key="index" 
			:step="item" 
			class="shareholder-list__item"/>
  </div>
</template>

<script>
import shareholderStepsItem from '@/components/shareholder/shareholderSteps/shareholderStepsItem.vue'
export default {
	components: {
		shareholderStepsItem
	},
	props: {
		steps: Array
	},
	computed: {
		stepsArr() {
			return this.steps.map((item, index, arr) => {
				if(index+1 < arr.length/2) {
					item.arrow = '0';
				}
				if(index+1 == arr.length/2) {
					item.arrow = '90';
				}
				if(index+1 > arr.length/2) {
					item.arrow = '180';
				}
				if(index+1 == arr.length) {
					item.arrow = '';
				}
				return item;
			})
		}
	}
}
</script>

<style lang="scss" scoped>
.shareholder-list {
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between; 
	&__item {
		margin-bottom: 4rem;
	}
}
</style>