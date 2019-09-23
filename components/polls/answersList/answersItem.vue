<template>
	<div class="answer-item-wrapper">
		<div :class="classes" @click="selectAnswer()">
			<span class="answer-item__percent" v-if="percentage && !editable">
				{{ percentage }}%
			</span>
			<div class="answer-item__label" :contenteditable="editable">
				{{ label }}
			</div>
			<span
				v-if="percentage && !editable"
				class="answer-item__percent-bg"
				:style="{ width: percentage + '%' }"
			>
			</span>
			<div v-if="!percentage && !editable" class="answer-item__checkbox">
				<iconComplete
					v-if="checked"
					class="answer-item__complete-icon"
				></iconComplete>
			</div>
		</div>
		<div v-if="editable"></div>
	</div>
</template>

<script>
import iconComplete from '@/components/icons/iconComplete.vue'

export default {
	props: {
		label: String,
		percentage: Number,
		checked: Boolean,
		editable: Boolean
	},
	components: {
		iconComplete
	},
	data() {
		return {
			// checked: this.value
		}
	},
	methods: {
		selectAnswer() {
			if (this.percentage || this.editable) return
			this.$emit('click')
		}
	},
	computed: {
		classes() {
			return {
				'answer-item': true,
				'answer-item--checked': this.checked
			}
		}
	}
}
</script>

<style lang="scss" scoped>
.answer-item {
	border: 1px solid $border-color;
	padding: 0.8rem;
	margin: 0.5rem;
	border-radius: 1.3rem;
	cursor: pointer;
	position: relative;
	display: flex;

	&__label {
		width: 100%;
		&:focus {
			outline: none;
		}
	}

	&__checkbox {
		margin: 0;
		padding: 0;
		background-color: white;
		width: 2rem;
		height: 2rem;
		border: 1px solid $border-color;
		border-radius: 50%;
		position: absolute;
		right: 0.5rem;
		top: 50%;
		transform: translateY(-50%);
		cursor: pointer;
		&:focus {
			outline: none;
		}
	}

	&__complete-icon {
		width: 20px;
		height: 20px;
		color: $base-color;
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
	}

	&--checked {
		border-color: $base-color;
	}

	&__percent-bg {
		height: 100%;
		background-color: $base-text-color;
		opacity: 0.2;
		position: absolute;
		top: 0;
		left: -0.1rem;
		z-index: -1;
		padding: 0.8rem;
		border-top-left-radius: 1.3rem;
		border-bottom-left-radius: 1.3rem;
	}

	&-wrapper {
		position: relative;
		width: 50%;
	}
}
</style>
