<template>
  <div class="shareholder-item">
		<div class="shareholder-item__left"></div>
		<div class="shareholder-item__main">
			<h4 class="shareholder-item__title">{{ step.title }}</h4>
			<div class="shareholder-item__content">
				<img src="~/assets/img/shareholdersteps__image.png" class="shareholder-item__image" alt="shareholder steps img">
				<p class="shareholder-item__text">{{ step.text }}</p>
				<div class="shareholder-item__back-block"></div>
			</div>
		</div>
		<div v-if="step.arrow && step.arrow!='90'" class="icon-wrap">
			<div class="icon-position">
				<icon-arrow class="icon" :style="`transform: rotate(${step.arrow}deg);`"></icon-arrow>
			</div>
		</div>
		<div v-if="step.arrow == '90'" class="icon-wrap_bottom">
			<div class="icon-position">
				<icon-arrow class="icon" :style="`transform: rotate(${step.arrow}deg);`"></icon-arrow>
			</div>
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
		step: Object
	},
	data() {
		return {
		}
	}
}
</script>

<style lang="scss" scoped>
.shareholder-item {
	min-height: 8rem;
	position: relative;
	display: flex;
	&__left {
    width: 8px;
		background: transparent;
    box-shadow: 7px 0 8px rgba(0, 0, 0, 0.3);
	}
	&__main {
		display: flex;
		flex-direction: column;
	}
	&__title {
		font-size: 1.4rem;
		font-family: 'times new roman psmt';
		margin: 0;
		padding-left: 1rem;
	}
	&__content {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 1rem 0;
		border: 1px solid $base-text-color;
		border-left: none;
		position: relative;
	}
	&__image {
		min-width: 1rem;
		max-height: 1.5rem;
		margin: 0 1rem;
	}
	&__text {
    width: 12rem;
    min-height: 3rem;
		font-size: 1rem;
		color: #565656;
		padding: 0 1rem;
		margin: 0;
		position: relative;
		border-left: 1px solid $base-color;
	}
	&__back-block {	
    position: absolute;
    top: 50%;
		right: -0.5rem;
    transform: translate(0, -50%);
    width: 0.5rem;
    background: $base-text-color;
    height: 80%;
		min-height: 3rem;
	}
}
.icon-wrap {
	position: relative;
	width: 6rem;
	&_bottom {
		position: absolute;
		bottom: -2rem;
    right: 2rem;
	}
}
.icon-position {
	
	position: absolute;
	top: 50%;
	left: 60%;
	transform: translate(-50%, -50%);
}
.icon {
	width: 3rem;
	height: auto;
	color: $base-color;
}
</style>