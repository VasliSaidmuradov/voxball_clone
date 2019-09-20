<template>
  <div class="proposal-item">
    <div class="proposal-item__img-wrap">
			<h3 class="proposal-item__title">{{ proposal.title }}</h3>
			<img src="~/assets/img/proposal__image.png" class="proposal-item__img">
		</div>
		<div class="proposal-item-info">
			<h3 class="proposal-item-info__title">{{ proposal.title }}</h3>
			<p class="proposal-item-info__text">{{ proposal.desc }}</p>
		</div>
  </div>
</template>

<script>
export default {
	props: {
		proposal: Object
	}
}
</script>

<style lang="scss" scoped>
.proposal-item {
	min-width: 15rem;
	min-height: 15rem;
	height: calc(width*0.8);
	position: relative;
	&:hover &-info {
		opacity: 1;
	}
	&:hover &__title {
		opacity: 0;
	}
	&__img-wrap {
		width: 100%;
		height: 100%;
		position: relative;
	}
	&__title {
		position: absolute;
		top: 1.5rem;
		left: 1.5rem;
		font-family: "times new roman psmt";
		font-size: 1.5rem;
		color: #ffffff;
		transition: 0.5s ease;
		margin: 0;
	}
	&__img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	&-info {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 155, 0, 0.5);
		// box-shadow: inset 0 0 0 12px rgba(0, 155, 0, 0.5), inset 0 0 0 14px #fff;
		opacity: 0;
		transition: 0.5s ease;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-align: center;
		&:after {
			content: '';
			width: 90%;
			height: 90%;
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			border: 2px solid #ffffff;
		}
		&__title {
			font-family: "times new roman psmt";
			font-size: 1.5rem;
			line-height: 1;
			color: #ffffff;	
			margin: 0;
			width: 80%;
		}
		&__text {
			font-size: 1.1rem;
			color: #ffffff;
			margin: 0;
			width: 80%;
		}
	}
}
</style>