<template>
  <div class="ratings">
		<base-layout :title="layoutData.title" :text="layoutData.text">
		<template v-slot:action>
			<v-btn class="ratings-layout__button mt-2" border @click="$navigate('/ratings/participate')">
				<span class="ratings-layout__text">создать рейтинг</span>
				<icon-arrow class="ml-2"/>
			</v-btn>
		</template>
		<section class="Section mt-5 mb-1 ml-4 mr-4">
			<div class="Section__header">
				<h2 class="Section__title">Все опросы</h2>
				<div class="ratings__search ml-5">
          <search
            label="name"
            @input="myVal = $event"
            @selectItem="myVal = $event.name"
            :results="searchResults"
          />
        </div>
				<div class="Section__options">
					<v-select
						class="ml-5"
						:options="options"
						:searchable="true"
						:no-drop="false"
						:multiple="false"
						placeholder="Популярное"
					></v-select>
					<v-select
						class="ml-5"
						:options="options"
						:searchable="true"
						:no-drop="false"
						:multiple="false"
						placeholder="Категории"
					></v-select>
				</div>
			</div>
		</section>
		<section class="ratings-main mb-4 ml-4 mr-4">
			<div class="ratings-main__content mb-4">
        <polls-list :pollArr="pollsArray" />
        <polls-list :pollArr="pollsArray" />
      </div>
			<v-btn class="ml-auto mr-auto mb-5 mt-5" rounded border>
        <span>Загрузить еще</span>
        <icon-arrow class="ml-2" />
      </v-btn>
		</section>
		</base-layout>	
  </div>
</template>

<script>
import baseLayout from '@/components/layouts/baseLayout.vue'
import iconArrow from '@/components/icons/iconArrow.vue'
import pollsList from '@/components/polls/pollsList/pollsList.vue'
import vSelect from 'vue-select'
import search from '@/components/inputs/search.vue'
import '@/assets/css/vSelect.scss'

export default {
	components: {
		baseLayout,
		iconArrow,
		pollsList,
		vSelect,
		search
	},
	data() {
		return {
			layoutData: {
				title: 'Принимайте участие',
				text: 'в рейтингах и опросах, получая за это v-coins на личный счет. Узнайте, что думают люди о Вашей компании, создавая собственные рейтинги.'
			},
			options: ['Казахстан', 'Россия', 'Китай'],
      pollsArray: [
        {
          category: 'Бизнес',
          video: 'Видео',
          title: 'хотите ли выполететь в космос?',
          date: '19.19.2019',
          views: 345
        },
        {
          category: 'Бизнес',
          video: 'Видео',
          title: 'хотите ли выполететь в космос?',
          date: '19.19.2019',
          views: 345
        },
        {
          category: 'Бизнес',
          video: 'Видео',
          title: 'хотите ли выполететь в космос?',
          date: '19.19.2019',
          views: 345
        },
        {
          category: 'Бизнес',
          video: 'Видео',
          title: 'хотите ли выполететь в космос?',
          date: '19.19.2019',
          views: 345
        },
        {
          category: 'Бизнес',
          video: 'Видео',
          title: 'хотите ли выполететь в космос?',
          date: '19.19.2019',
          views: 345
        }
			],
			sections: [
        {
          id: 1,
          name: 'asd'
        },
        {
          id: 2,
          name: 'sasdasd'
        },
        {
          id: 3,
          name: 'gggg'
        },
        {
          id: 4,
          name: 'eeeeeeeeee'
        }
      ],
      myVal: ''
		}
	},
	computed: {
    searchResults() {
      return this.sections.filter(item => find(this.myVal, item.name))
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/section.scss';

.ratings {
	&-layout{
    &__button {
      border-color: $base-text-color;
      text-transform: uppercase;
      font-size: 0.8em;
      &:hover {
        background-color: white;
        border-color: $base-color;
        color: $base-color;
      }
    }
    &__text {
      text-transform: uppercase;
      font-size: 0.8em;
    }
	}
	&__search {
		height: 2.5rem;
	}
}
</style>
<style lang="scss">
.ratings__search .Search__input {
	height: 2.5rem;
	border-radius: 37px;
	min-width: 12rem;
	font-size: 1rem;
	text-transform: uppercase;
	padding: 0.4rem 1rem;
	color: $base-text-color;
}
</style>