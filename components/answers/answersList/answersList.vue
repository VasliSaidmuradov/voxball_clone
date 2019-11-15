<template>
	<div class="answers-list">
		<!-- <div class="m-auto" v-if="!answersList.length">
			Нет вариантов ответа 			
		</div> -->
		<answers-item
			v-for="answer in answers"
			:key="answer.id"
			:answer="answer"
			:checked="value.includes(answer.id)"
			@showAnswerMedia="$emit('showAnswerMedia')"
			@click="selectAnswer(answer.id)"
			:percentage="answer.percent"
			:complete="complete"
			:type="type"
			:isHidden="isHidden"
			:isVoted="isVoted"
			:userAnswers="userAnswers"
		></answers-item>
	</div>
</template>

<script>
import answersItem from './answersItem'
import vModal from '@/components/modals/vModal.vue'
import { mapGetters } from 'vuex'

export default {
	props: {
		answersList: {
			type: Array,
			default: () => []
		},
		editable: Boolean,
		multiple: {
			type: Boolean,
			default: false
		},
		type: {
			type: String,
			default: 'simple'
		},
		value: {
			type: Array,
			default: () => []
		},
		percent: {
			type: Array
		},
		complete: Boolean,
		isHidden: Boolean,
		isVoted: {
			type: Boolean,
			default: false
		},
		userAnswers: {
			type: Array,
			default: () => []
		},
		answerVoteStatistics: {
			type: Object,
			default: () => {}
		}
	},
	components: {
		answersItem,
		vModal
	},
	data() {
		return {
			selectedAnswers: [],
			checkedAnswer: false
		}
	},
	computed: {
		...mapGetters({ GET_POLL_ANSWERS: 'polls/GET_POLL_ANSWERS' }),
		answers() {
			return this.answersList.map((item, index, arr) => ({
				...item,
				percent: (item.voteCount / this.totalCount) * 100
			}))
		},
		totalCount() {
			return this.answersList.reduce((total, item) => total+=item.voteCount, 0)
		}
	},
	methods: {
		selectAnswer(id) {
			if (!this.value.includes(id)) {
				if (this.type === 'multiply') {
					this.selectedAnswers.push(id)
				} else {
					this.selectedAnswers = [id]
				}
			} else {
				this.selectedAnswers = this.selectedAnswers.filter(item => item !== id)
			}
			// console.log(this.selectedAnswers)
			// result = this.answersList.map(item => item.id).filter(item => this.selectedAnswers.includes(item))
			this.$emit('input', [...this.selectedAnswers])
			// this.$emit('selectedAnswers', result)
		}
	}
}
</script>

<style lang="scss" scoped>
.answers-list {
	display: flex;
	width: 100%;
	flex-wrap: wrap;
	justify-content: space-between;
}
</style>
