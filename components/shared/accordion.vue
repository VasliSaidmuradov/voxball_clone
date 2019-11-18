<template>
	<div class="accordion" :class="theme">
		<div class="header" @click="toggle">
			<slot name="header">{{ questionTitle }}</slot>
			<i
				class="fa fa-2x fa-angle-down header-icon"
				v-bind:class="{ rotate: show }"
			></i>
		</div>
		<transition
			name="accordion"
			v-on:before-enter="beforeEnter"
			v-on:enter="enter"
			v-on:before-leave="beforeLeave"
			v-on:leave="leave"
		>
			<div class="body" v-show="show">
				<div class="body-inner">
					<slot></slot>
				</div>
			</div>
		</transition>
	</div>
</template>

<script>
export default {
	data() {
		return {
			show: false
		}
	},
	props: {
		theme: String,
		questionTitle: String
		// show: Boolean
	},
	methods: {
		toggle: function() {
			this.show = !this.show
		},
		// enter: function(el, done) {
		//   $(el).slideDown(150, done);
		// },
		// leave: function(el, done) {
		//   $(el).slideUp(150, done);
		// },
		beforeEnter: function(el) {
			el.style.height = '0'
		},
		enter: function(el) {
			el.style.height = el.scrollHeight + 'px'
		},
		beforeLeave: function(el) {
			el.style.height = el.scrollHeight + 'px'
		},
		leave: function(el) {
			el.style.height = '0'
		},
		firstAccordionShowed() {
			this.poll.questions.forEach(index => {
				index === 0 ? this.show : !this.show
			})
		}
	}
}
</script>

<style lang="scss" scoped>
.accordion {
	min-width: 400px;
	margin-bottom: 1rem;
	background-color: $base-color;
	border-radius: 0.5rem;
	// &[data-id='0'] .body {
	//   display: block !important;
	// }
}

.accordion .header {
	height: 2.5rem;
	line-height: 2.5rem;
	padding: 0 2.5rem 0 0.5rem;
	position: relative;
	color: #fff;
	cursor: pointer;
}

.accordion .header-icon {
	position: absolute;
	top: 0.4rem;
	right: 0.5rem;
	transform: rotate(0deg);
	transition-duration: 0.3s;
}

.accordion .body {
	/*   display: none; */
	overflow: hidden;
	background-color: #fff;
	border: 0.6rem solid $base-color;
	border-top: 0;
	border-bottom-left-radius: 0.5rem;
	border-bottom-right-radius: 0.5rem;
	transition: 150ms ease-out;
}

.accordion .body-inner {
	padding: 8px;
	overflow-wrap: break-word;
}

.accordion .header-icon.rotate {
	transform: rotate(180deg);
	transition-duration: 0.3s;
}

.accordion.purple {
	background-color: $base-color;
}

.accordion.purple .body {
	border-color: $base-color;
}
</style>
