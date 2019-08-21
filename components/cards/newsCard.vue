<template>
  <div class="news-card">
    <div class="news-card-top">
      <div class="news-card-top__back-block">
        <span class="news-card-top__date">{{ news.date }}</span>
        <span class="news-card-top__views">
          <svg class="news-card-top__icon" viewBox="0 0 100 100" fill="none" stroke-width="2" >
            <path d="M10 50 C 20 90, 80 90, 90 50 C  80 10 20 10 10 50" fill="none" ></path>
            <circle cx="50" cy="50" r="15" fill="none"/>
          </svg>  
            <span>
              {{ news.views }}
            </span>
          </span>
      </div>
      <div class="news-card-top__img-wrap">
        <img class="news-card-top__img" src='~/assets/img/main-news-image-1.png'>
      </div>
    </div>
    <div class="news-card-bottom">
      <span class="news-card-bottom__tag">{{ news.tag }}</span>  
      <p class="news-card-bottom__title">{{ news.title }}</p>
      <nuxt-link class="news-card-bottom__button" to="/">
        подродбнее
        <svg class="news-card-bottom__arrow" xmlns="http://www.w3.org/2000/svg" width="22" height="6" viewBox="0 0 22 6">
                  <g><g>
                  <path fill="#ffffff" d="M.009 2.875h16.287c-.785-.81-1.175-1.338-1.216-2.058 
                                            1.786 1.241 4.106 1.888 6.91 2.496-2.804.582-5.022 
                                            1.293-6.91 2.496.121-.783.446-1.255 1.24-2.116H.01z"/>
                  </g></g>
        </svg>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
//   props: ['news'],

  data() {
  	return {
  		news: {
            title: 'Токаев объявил мораторий на создание новых госкомпаний',
            tag: 'политика',
            date: '26.2.2019',
            views: 125,
            img: '~/assets/img/main-news-image-1.png'
        }
  	}
  },

  methods: {
  	
  },
}
</script>

<style lang="scss" scoped>
$color-green: #00b900;
$color-gray: #e8e8e8;
$color-gray_darker: #bababa;
$color-blue: #2b454e;
$family: 'Helvetica';

.news-card {
  width: 18rem;
  height: 32rem;
  display: flex;
  flex-direction: column;

  &-top {
    width: 100%;
    height: 80%;
    position: relative;
    
    &__back-block {
      width: 75%;
      height: 90%;
      padding: 0 10%;
      padding-top: 1rem;
      border: 0.350rem solid $color-gray;
      display: flex;
      align-items: flex-start;
      justify-content: space-around;
      position: relative;
    }

    &__date {
      color: $color-gray_darker;
      font-size: 0.85rem;
      font-weight: 500;
      width: 40%;
      height: 10%;
      display: flex;
      align-items: center;
    }

    &__date:after {
      content: '';
      display: block;
      position: absolute;
      top: 7%;
      left: 54%;
      transform: translateX(-50%);
      width: 1px;
      height: 6%;
      background: $color-gray_darker;
    }

    &__views {
      color: $color-gray_darker;
      font-size: 0.85rem;
      font-weight: 500;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      width: 40%;
      height: 10%;
    }

    &__icon {
      width: 1rem;
      margin-right: 0.3rem;
      path,
      circle {
        stroke-width: 8px;
        stroke: $color-gray_darker;
      }
    }

    &__img-wrap {
      width: 92%;
      height: 84%;
      position: absolute;
      bottom: 0;
      right: 0;
      background: #ffffff;
      border-top: 0.425rem solid $color-green;
      border-left: 0.425rem solid $color-green;
    }

    &__img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

  }

  &-bottom {
    width: 100%;
    padding-left: calc(8% + 0.5rem);
    height: 30%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    &__tag {
      background: $color-blue;
      color: #ffffff;
      font-size: 0.6rem;
      font-family: $family;
      font-weight: 500;
      text-align: center;
      width: 32%;
      padding-top: 0.25rem;
      padding-bottom: 0.25rem;
      text-transform: uppercase;
    }

    &__title {
      color: #000000;
      margin: 0;
      margin-top: 1.425rem;
      margin-bottom: 0.85rem;
      font-size: 0.8rem;
      font-weight: 500;
      font-family: $family;
      text-transform: uppercase;
    }

    &__button {
      color: $color-blue;
      font-size: 0.5rem;
      font-weight: 700;
      font-family: $family;
      text-transform: uppercase;
      letter-spacing: 0.04rem;
    }
    
    &__arrow {
      margin-left: 0.5rem;

      path {
        fill: $color-blue;
      }
    }

  }
}
</style>