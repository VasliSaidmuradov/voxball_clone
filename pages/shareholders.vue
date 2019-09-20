<template>
  <div class="shareholders">
    <base-layout :title="layoutData.title">
		<template v-slot:action>
			<h3 class="shareholders-layout__undertitle"> {{ layoutData.text }}</h3>
			<p class="shareholders-layout__text">Зарегистрируйтесь на Voxball и получите 500 v-coins</p>
			<v-btn class="shareholders-layout__button mt-2" border @click="$navigate('/ratings/123')">
				<span class="shareholders-layout__button-text">зарегистрироваться</span>
				<icon-arrow class="ml-2"/>
			</v-btn>
		</template>
		<section class="shareholders-section">
			<div class="shareholders-section__header">
				<h2 class="shareholders-section__title">Voxball делает</h2>
				<p class="shareholders-section__text">предложение каждому пользователю:</p>
			</div>
			<proposal-list :proposalArr="proposals"></proposal-list>
		</section>
		<section class="shareholders-section">
			<div class="shareholders-section__header">
				<h2 class="shareholders-section__title">6 шагов</h2>
				<p class="shareholders-section__text">к статусу «держатель акций»:</p>
			</div>
			<shareholder-steps-list :steps="stepsArr"></shareholder-steps-list> 
		</section>
		<section class="shareholders-section">
			<div class="shareholders-section__header">
				<h2 class="shareholders-section__title">Успешные акционеры</h2>
				<p class="shareholders-section__text">на Voxball</p>
			</div>
		</section>
		</base-layout>
  </div>
</template>

<script>
import baseLayout from '@/components/layouts/baseLayout.vue'
import iconArrow from '@/components/icons/iconArrow.vue'
import proposalList from '@/components/shareholder/proposal/proposalList.vue'
import shareholderStepsList from '@/components/shareholder/shareholderSteps/shareholderStepsList.vue'
export default {
	components: {
		baseLayout,
		iconArrow,
		proposalList,
		shareholderStepsList 
	},
	data() {
		return {
			layoutData: {
				title: 'Зарабатывайте v-coins',
				text: 'и становитесь акционерами портала Voxball'
			},
			proposals: [
				{
					title: 'Выгодные условия',
					desc: 'электронной валюты на участии в опросах, рейтингах, конкурсах и розыгрышах',
					src: ''
				},
				{
					title: 'Заработок',
					desc: 'электронной валюты на участии в опросах, рейтингах, конкурсах и розыгрышах',
					src: ''
				},
				{
					title: 'Новости',
					desc: 'электронной валюты на участии в опросах, рейтингах, конкурсах и розыгрышах',
					src: ''
				},
				{
					title: 'Расширенная аналитика ',
					desc: 'электронной валюты на участии в опросах, рейтингах, конкурсах и розыгрышах',
					src: ''
				},
				{
					title: 'Размещение рекламных материалов ',
					desc: 'электронной валюты на участии в опросах, рейтингах, конкурсах и розыгрышах',
					src: ''
				},
				{
					title: 'Брендирование опросов ',
					desc: 'электронной валюты на участии в опросах, рейтингах, конкурсах и розыгрышах',
					src: ''
				}
			],
			stepsArr: [
				{
					title: '01',
					text: 'Зарегистрируйтесь на сервисе',
					src: '',
				},
				{
					title: '02',
					text: 'Создавайте опросы и рейтинги',
					src: ''
				},
				{
					title: '03',
					text: 'Участвуйте в опросах и рейтингах',
					src: '',
				},
				{
					title: '04',
					text: 'Наберите 5 000 v-coins',
					src: '',
				},
				{
					title: '05',
					text: 'Автоматически станьте акционером Voxball',
					src: '',
				},
				{
					title: '06',
					text: 'Получайте свой процент от прибыли портала ежегодно',
					src: '',
				},
			]
		}
	}
}
</script>

<style lang="scss" scoped>
.shareholders {
	&-layout{
		&__undertitle {
			font-size: 1.4rem;
			font-family: 'times new roman psmt';
			margin: 0;
			padding-bottom: 1.3rem;
		}
		&__text {
			font-size: 1rem;
			margin: 0;
			padding-bottom: 0.3rem;
		}
		&__button {
			border-color: $base-text-color;
      &:hover {
        background-color: transparent;
        border-color: $base-color;
        color: $base-color;
      }
		}
		&__button-text {
			font-size: 0.725rem;
			font-weight: 700;
			letter-spacing: 1.2px;
			text-transform: uppercase;
		}
	}
	&-section {
		padding: 0 12.5%;
		padding-bottom: 4rem;
		border-top: 1px solid $border-color;
		&__header {
			padding: 1.8rem 0;
		}
		&__title {
			color: #555557;
			text-transform: uppercase;
			font-family: 'times new roman psmt';
			font-size: 1.5em;
			margin: 0;
		}
		&__text {
			color: $secondary-text-color;
			margin: 0;
		}
	}
}
</style>