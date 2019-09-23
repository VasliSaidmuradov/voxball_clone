<template>
	<div @click="pollClick()" class="poll-item">
		<div class="poll-item__main">
			<div>
				<img class="poll-item__img" src="~/assets/img/test-bg.jpg" alt />
			</div>
			<div class="poll-item__block">
				<div class="poll-item__content">
					<nuxt-link to="/" class="poll-item__content-item">{{
						pollData.category
					}}</nuxt-link>
					<nuxt-link
						to="/"
						class="poll-item__content-item poll-item__content-item--video"
						>{{ pollData.video }}</nuxt-link
					>
				</div>
				<div class="poll-item__title">{{ pollData.title }}</div>
				<div class="d-flex">
					<div v-if="pollData.complete" class="poll-item__complete">
						<span class="poll-item__icon-complete mr-2">
							<icon-complete />
						</span>
						<span>Завершен</span>
					</div>
					<v-btn link class="poll-item__link">
						Подробнее
						<icon-arrow class="ml-2"></icon-arrow>
					</v-btn>
				</div>
				<div class="poll-item__play-block">
					<div class="poll-item__play"></div>
				</div>
			</div>
		</div>
		<div class="poll-item__footer">
			<div class="poll-item__date">{{ pollData.date }}</div>
			<div class="views">
				<span class="poll-item__icon-eyes mr-1">
					<icon-eyes />
				</span>
				<div class="views__count">{{ pollData.views }}</div>
			</div>
		</div>
		<div class="poll-item__move-out"></div>
	</div>
</template>

<script>
import iconEyes from '@/components/icons/iconEyes.vue'
import iconArrow from '@/components/icons/iconArrow.vue'
import iconComplete from '@/components/icons/iconComplete.vue'

export default {
	components: {
		iconArrow,
		iconEyes,
		iconComplete
	},
	props: ['data', 'pollData'],
	created() {},
	methods: {
		pollClick() {
			this.$emit('click')
		}
	}
}
</script>

<style lang="scss" scoped>
.poll-item {
	&__main {
		cursor: pointer;
		position: relative;
		display: block;
		max-width: 225px;
		max-height: 330px;
		height: 100vh;
		overflow: hidden;
		background: #000;
		text-transform: uppercase;
	}

	&:hover &__img {
		opacity: 0.5;
	}
	&:hover &__play-block {
		width: 6vw;
		height: 6vw;
	}
	&:hover &__link {
		color: $base-color;
	}
	&:hover &__move-out::after {
		top: -30px;
	}

	&__play {
		position: absolute;
		width: 3vw;
		height: 3vw;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		border-radius: 50%;
		background: $base-color;
		&::after {
			content: '▶︎';
			font-size: 1.5em;
			display: flex;
			align-items: center;
			width: 3vw;
			height: 3vw;
			justify-content: center;
			color: white;
			border-left: 0.4vw solid transparent;
		}
	}

	&__play-block {
		position: absolute;
		width: 4.5vw;
		height: 4.5vw;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		border-radius: 50%;
		background: #00b90087;
		transition: 0.5s ease;
	}

	&__title {
		padding: 1em;
		font-size: 1.1em;
		color: white;
	}

	&__complete {
		position: absolute;
		font-size: 0.7rem;
		text-transform: capitalize;
		bottom: 9px;
		padding: 0.4em;
		color: white;
		background: $base-color;
		display: flex;
		align-items: center;
	}

	&__block {
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		box-shadow: inset 0 0 1000px 1000px #2536506e;
	}

	&__content {
		padding: 1em;
		height: auto;
		min-height: 32px;
		font-size: 1em;
		line-height: 1.2;
	}

	&__content-item {
		display: inline-block;
		padding: 0.3em 1.3em;
		background: $base-color;
		color: white;
		text-decoration: none;

		&--video {
			color: black;
			background: white;
		}
	}

	&__link {
		position: absolute;
		font-size: 0.7rem;
		right: 23px;
		bottom: 10px;
		color: white;
	}

	&__footer {
		position: relative;
		display: flex;
		justify-content: space-between;
		align-items: center;
		z-index: 5;
		padding: 0.5em 1em;
		box-shadow: 1px 1px 6px 1px rgba(0, 0, 0, 0.2);
		background: white;
	}

	&__move-out {
		position: relative;
		padding: 0 1em;

		&::after {
			content: '';
			position: relative;
			display: block;
			top: 0;

			width: 100%;
			height: 20px;
			background: $base-color;
			transition: 0.5s linear;
		}
	}

	&__icon-complete {
		width: 0.6rem;
	}
	&__icon-eyes {
		width: 0.9rem;
	}
}
.views {
	display: flex;
	justify-content: space-between;
	align-items: center;
	&__count {
		color: gray;
	}
}
</style>
