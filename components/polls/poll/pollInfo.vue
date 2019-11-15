<template>
	<div class="poll-info">
		<div class="poll-info__header">
			<div class="poll-info__info">
				<div class="poll-info__info-wrap">
					<div class="poll-info__avatar">
						<img
							class="poll-info__avatar-img"
							src="~assets/img/poll-no-avatar.png"
							alt
						/>
						<!-- <img class="poll-info__avatar-img" :src="poll.authorAvatar" alt /> -->
					</div>
					<div class="poll-info__name-wrap">
						<span class="poll-info__name">{{ poll.authorName }}</span>
						<span class="poll-info__date">{{ poll.createdAt }}</span>
					</div>
				</div>
				<div class="poll-info__info-wrap poll-info__info-wrap-reverse">
					<span class="poll-info__category">{{ poll.categoryTitle }}</span>
					<!-- <v-btn v-if="poll.video.length" @click="showVideo" class="poll-info__button">
            посмотреть видео
            <icon-arrow class="ml-2" />
          </v-btn>-->
				</div>
			</div>
			<div class="poll-info__img-wrap">
				<play v-if="poll.video.length && !playVideo" @click="showVideo"></play>
				<!-- <video v-if="poll.video.length" class="poll-info__video" :src="poll.video" controls></video> -->
				<!-- <video v-if="playVideo" class="poll-info__video" src="~assets/video/voxball.mp4" controls></video> -->
				<app-player
					v-if="playVideo"
					:width="'100%'"
					:height="'100%'"
					:src="pVideo || 'https://www.youtube.com/watch?v=JuCfEwvKPBw'"
				/>
				<img v-else class="poll-info__img" :src="poll.preview" alt />
				<div v-if="poll.complete" class="poll-info__complete">
					<span class="poll-info__icon-complete mr-2">
						<icon-complete />
					</span>
					<span>Завершен</span>
				</div>
				<div class="poll-info__views-wrap">
					<views class="poll-info__views" :viewCount="poll.viewCount"></views>
					<social
						:url="this.$route.query.page"
						:poll="poll"
						style="justify-content: flex-end; width: 50%"
					></social>
				</div>
			</div>
		</div>
		<div class="poll-info__main">
			<h2 class="poll-info__title">{{ poll.title }}</h2>
			<p class="poll-info__text" v-html="poll.description"></p>
		</div>

		<!-- <div class="poll-info__footer">
      <div class="poll-info__footer-wrap">
        <div class="poll-info__avatar">
          <img class="poll-info__avatar-img" src="~assets/img/poll-no-avatar.png" alt />
        </div>
        <p class="poll-info__name-wrap">
        Автор:
        <span class="poll-info__name">{{ poll.authorName }}</span>
        </p>
      </div>
      <div class="poll-info__footer-wrap justify-content">
        <div class="poll-info__share-wrap">Поделились:{{ 0 }}</div>
        <div class="poll-info__social-wrap">
          <div class="poll-info__social">
            <social></social>
          </div>
        </div>
      </div>
    </div>-->
		<!-- <tags class="poll-info__tags mt-5 mb-5" :arrTag="arrTags" /> -->

		<v-modal
			v-slot:body
			:showModal="showAnswerMedia"
			@close="closeAnswerMedia()"
		>
			<template>
				<div class="poll-info__video-wrap">
					<!-- <div class="poll-info__play-icon"></div> -->

					<video
						class="poll-info__video"
						:src="'https://cms.nova.st' + poll.video"
						width="100%"
						controls
					></video>
				</div>
			</template>
		</v-modal>
	</div>
</template>

<script>
import iconArrow from '@/components/icons/iconArrow.vue'
import views from '@/components/shared/views.vue'
import tags from '@/components/shared/tags.vue'
import socialShare from '@/components/shared/social.vue'
import iconComplete from '@/components/icons/iconComplete.vue'
import vModal from '@/components/modals/vModal.vue'
import play from '@/components/buttons/play.vue'
import appPlayer from '@/components/inputs/appPlayer.vue'

// Vue.use(SocialSharing);

export default {
	components: {
		iconArrow,
		iconComplete,
		views,
		tags,
		social,
		vModal,
		play,
		appPlayer
	},
	props: {
		poll: Object
	},
	data() {
		return {
			arrTags: [
				'hello',
				'world',
				'экономика',
				'политика',
				'информационные технологии',
				'hello',
				'world',
				'экономика',
				'политика',
				'информационные технологии',
				'hello',
				'world',
				'экономика',
				'политика',
				'информационные технологии'
			],
			showAnswerMedia: false,
			playVideo: false
		}
	},
	methods: {
		openAnswerMedia() {
			this.showAnswerMedia = true
		},
		closeAnswerMedia() {
			this.showAnswerMedia = false
		},
		showVideo() {
			this.playVideo = true
		}
	},
	computed: {
		pVideo() {
			console.log(this.poll.video)
			let video = this.poll.video
			let format
			video.split('')[0] === '/'
				? (format = 'https://cms.nova.st' + video)
				: (format = video)
			return format
		}
	}
}
</script>

<style lang="scss" scoped>
.poll-info {
	display: flex;
	flex-direction: column;
	min-width: 50rem;
	width: 50%;
	margin: 0 auto;
	&__header {
		display: flex;
		flex-direction: column;
		min-width: 50rem;
		width: 100%;
		height: 28rem;
		position: relative;
		margin-bottom: 1rem;
	}
	&__info {
		width: 86.3%;
		height: 87.65%;
		border: 0.35rem solid $base-color;
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
		position: absolute;
		right: 0;
		transition: 0.5s ease;
	}
	&__info-wrap {
		// width: 50%;
		height: 3.5rem;
		display: flex;
		align-items: center;
		padding-left: 1rem;
		&-reverse {
			justify-content: flex-end;
			padding-right: 1rem;
		}
	}
	&__category {
		background-color: $base-text-color;
		color: #ffffff;
		font-size: 0.9rem;
		font-weight: 500;
		text-align: center;
		width: fit-content;
		margin-left: 1rem;
		padding: 0.7rem 1.2rem;
		padding-bottom: 0.5rem;
		text-transform: uppercase;
		transition: background-color 0.5s ease;
	}
	&__date {
		font-size: 0.8rem;
		color: #333;
	}
	&__button {
		color: #ffffff;
		background-color: $base-color;
		padding: 0.6rem 1.2rem;
		&:hover {
			color: #fff;
		}
	}
	&__views-wrap {
		display: flex;
		align-items: center;
	}
	&__views {
		// margin-left: 1rem;
		width: 50%;
	}
	&__img-wrap {
		width: 93%;
		height: 86%;
		position: absolute;
		bottom: 0;
	}
	&__img,
	&__video {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	&__complete {
		position: absolute;
		font-size: 0.8rem;
		text-transform: capitalize;
		left: 0;
		bottom: 0;
		padding: 0.8em 1.4em 0.4em;
		color: white;
		background: #009700;
		display: flex;
		align-items: center;
	}
	&__icon-complete {
		width: 0.6rem;
	}
	&__title {
		width: 70%;
		font-size: 1.5rem;
		text-transform: uppercase;
		margin: 0;
		padding: 2rem 0 1rem;
		&:after {
			content: '';
			height: 2px;
			width: 21%;
			background-color: $base-color;
			display: block;
			position: relative;
			bottom: -1rem;
		}
	}
	&__text {
		margin: 0 0 1rem 0;
		line-height: 1.2;
		// height: 6rem;
		overflow: hidden;
		overflow-y: scroll;
	}
	&__footer {
		height: 6rem;
		padding: 0.5rem 0;
		display: flex;
		align-items: center;
		justify-content: space-between;
		border-top: 1px solid $border-color;
		border-bottom: 1px solid $border-color;
	}
	&__footer-wrap {
		width: 44%;
		display: flex;
		align-items: center;
	}
	&__avatar {
		border-radius: 50%;
		width: 3rem;
		height: 3rem;
	}
	&__avatar-img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	&__name-wrap {
		margin-left: 1rem;
		font-family: 'times new roman psmt';
		display: flex;
		flex-direction: column;
		line-height: 1.5;
	}
	&__name {
		font-weight: bold;
	}
	&__tags {
		display: none;
	}
	&__social-wrap {
		margin-left: 1rem;
	}
}
.arrow {
	margin-bottom: -0.5rem;
	margin-left: 0.5rem;
	height: auto;
}
.justify-content {
	justify-content: flex-end;
}
::-webkit-scrollbar {
	box-shadow: inset 0 0 4px 1px rgba(0, 0, 0, 0.27);
	width: 7px;
	border-radius: 4px;
}
::-webkit-scrollbar-track {
	background: white;
}
::-webkit-scrollbar-thumb {
	background-color: #dcdcdc;
	border-radius: 4px;
}
::-webkit-scrollbar-thumb:hover {
	background-color: #dcdcdc;
}
</style>
