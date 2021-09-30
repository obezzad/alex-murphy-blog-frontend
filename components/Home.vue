<template>
  <div class="lg:container w-full h-screen mx-auto p-4">
    <!-- TODO: example-2 to something meaningful -->
    <!-- TODO refactor to tailwind -->
    <div class="w-full flex flex-wrap">
      <div
        v-for="(article, idx) in articles"
        :key="article"
        class="example-2 card flex-auto"
        :class="[idx % 9 ? 'lg:w-1/4 md:1/4 w-full' : 'w-full']"
      >
        <!-- TODO handle no image -->
        <div
          class="wrapper"
          :style="
            'background-image: url(' +
            baseURL +
            article.coverImage.coverImage.url +
            ');'
          "
        >
          <div class="header">
            <div class="date">
              <span class="day">{{ getDay(article.published_at) }}</span>
              <span class="month">{{ getMonth(article.published_at) }}</span>
              <span class="year">{{ getYear(article.published_at) }}</span>
            </div>
            <ul class="menu-content">
              <li>
                <a href="#" class="fa fa-star-o"
                  ><span>{{ article.rating }}</span></a
                >
              </li>
            </ul>
          </div>
          <div class="data">
            <div class="content bg-black bg-opacity-25">
              <span v-if="article.category" class="category">{{
                article.category.title
              }}</span>
              <h1 class="title text-lg">
                <a href="#">{{ article.title }}</a>
              </h1>
              <p class="text text-xl">
                {{ article.excerpt }}
              </p>
              <div class="mt-5">
                <span
                  v-for="tag in article.tags"
                  :key="tag.title"
                  class="
                    inline-block
                    bg-gray-200
                    rounded-full
                    px-3
                    py-1
                    text-sm
                    font-semibold
                    text-gray-700
                    mr-2
                    mb-2
                    hover:bg-gray-700
                    hover:text-gray-200
                    cursor-default
                  "
                  >#{{ tag.title }}
                </span>
              </div>
              <a href="#" class="button">Read more</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import gql from 'graphql-tag'

const monthNames = [
  'Jan.',
  'Feb.',
  'Mar.',
  'Apr.',
  'May',
  'Jun.',
  'Jul.',
  'Aug.',
  'Sep.',
  'Oct.',
  'Nov.',
  'Dec.',
]

export default {
  components: {},
  data() {
    return {
      articles: [],
      baseURL: process.env.backendBaseURL,
    }
  },
  methods: {
    getDay: (date: string) => {
      return new Date(date).getDay()
    },
    getMonth: (date: string) => {
      return monthNames[new Date(date).getMonth()]
    },
    getYear: (date: string) => {
      return new Date(date).getFullYear()
    },
  },
  apollo: {
    articles: {
      query: gql`
        query Articles {
          articles {
            id
            title
            excerpt
            published_at
            rating
            category {
              title
            }
            coverImage {
              altText
              coverImage {
                url
              }
            }
            tags {
              title
            }
          }
        }
      `,
      prefetch: true,
    },
  },
}
</script>

<style lang="scss" scoped>
@import url('https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css');
@import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,700');

// Variables
$regal-blue: #034378;
$san-juan: #2d4e68;
$bermuda: #77d7b9;
$white: #fff;
$black: #000;
$bg-primary: #0e1d3a;
$open-sans: 'Open Sans', sans-serif;
// clear-fix mixin
@mixin cf {
  &::before,
  &::after {
    content: '';
    display: table;
  }
  &::after {
    clear: both;
  }
}

* {
  box-sizing: border-box;
}

body {
  background-image: linear-gradient(to right, $regal-blue, $san-juan);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh;
  font-family: $open-sans;
}

a {
  text-decoration: none;
}

h1 {
  font-family: $open-sans;
  font-weight: 300;
}

.wrapper {
  transition: all 0.5s, background-position 1.5s;
  background-position: 50% 0%;
  background-repeat: no-repeat;
  background-size: cover;
}

@keyframes backgroundSlide {
  25% {
    background-position: 0% 0%;
  }
  75% {
    background-position: 100% 0%;
  }
  to {
    background-position: 50% 0%;
  }
}

.wrapper:hover,
.wrapper:focus {
  transform: scale(1.1);
  animation: backgroundSlide 9s linear;
}

// Base styles
.card {
  float: left;
  padding: 1rem 1.7rem;
  //   width: 50%;
  .menu-content {
    @include cf;

    margin: 0;
    padding: 0;
    list-style-type: none;
    li {
      display: inline-block;
    }
    a {
      color: $white;
    }
    span {
      position: absolute;
      left: 50%;
      top: 0;
      font-size: 10px;
      font-weight: 700;
      font-family: 'Open Sans';
      transform: translate(-50%, 0);
    }
  }
  .wrapper {
    background-color: $white;
    min-height: 540px;
    position: relative;
    overflow: hidden;
    box-shadow: 0 19px 38px rgba($black, 0.3), 0 15px 12px rgba($black, 0.2);
    &:hover {
      .data {
        transform: translateY(0);
      }
    }
  }
  .data {
    position: absolute;
    bottom: 0;
    width: 100%;
    transform: translateY(calc(70px + 1em));
    transition: transform 0.3s;
    .content {
      padding: 1em;
      position: relative;
      z-index: 1;
    }
  }
  .category {
    font-size: 12px;
  }
  .title {
    margin-top: 10px;
  }
  .text {
    height: 10%;
    margin: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2; /* number of lines to show */
    -webkit-box-orient: vertical;
  }
  input[type='checkbox'] {
    display: none;
  }
  input[type='checkbox']:checked + .menu-content {
    transform: translateY(-60px);
  }
}

// First example styles
.example-1 {
  .date {
    position: absolute;
    top: 0;
    left: 0;
    background-color: $bermuda;
    color: $white;
    padding: 0.8em;
    span {
      display: block;
      text-align: center;
    }
    .day {
      font-weight: 700;
      font-size: 24px;
      text-shadow: 2px 3px 2px rgba($black, 0.18);
    }
    .month {
      text-transform: uppercase;
    }
    .month,
    .year {
      font-size: 12px;
    }
  }
  .content {
    background-color: $white;
    box-shadow: 0 5px 30px 10px rgba($black, 0.3);
  }
  .title {
    a {
      color: lighten($black, 50%);
    }
  }
  .menu-button {
    position: absolute;
    z-index: 999;
    top: 16px;
    right: 16px;
    width: 25px;
    text-align: center;
    cursor: pointer;
    span {
      width: 5px;
      height: 5px;
      background-color: lighten($black, 50%);
      color: lighten($black, 50%);
      position: relative;
      display: inline-block;
      border-radius: 50%;
      &::after,
      &::before {
        content: '';
        display: block;
        width: 5px;
        height: 5px;
        background-color: currentColor;
        position: absolute;
        border-radius: 50%;
      }
      &::before {
        left: -10px;
      }
      &::after {
        right: -10px;
      }
    }
  }
  .menu-content {
    text-align: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: -1;
    transition: transform 0.3s;
    transform: translateY(0);
    li {
      width: 33.333333%;
      float: left;
      background-color: $bermuda;
      height: 60px;
      position: relative;
    }
    a {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 24px;
    }
    span {
      top: -10px;
    }
  }
}

// Second example styles
.example-2 {
  .wrapper {
    &:hover {
      .menu-content {
        span {
          transform: translate(-50%, -10px);
          opacity: 1;
        }
      }
    }
  }
  .header {
    @include cf;
    color: $white;
    padding: 1em;
    .date {
      float: left;
      font-size: 12px;
    }
  }
  .menu-content {
    float: right;
    li {
      margin: 0 5px;
      position: relative;
    }
    span {
      transition: all 0.3s;
      opacity: 0;
    }
  }
  .data {
    color: $white;
    transform: translateY(calc(70px + 4em));
  }
  .title {
    a {
      color: $white;
    }
  }
  .button {
    display: block;
    width: 100px;
    margin: 2em auto 1em;
    text-align: center;
    font-size: 12px;
    color: $white;
    line-height: 1;
    position: relative;
    font-weight: 700;
    &::after {
      content: '\2192';
      opacity: 0;
      position: absolute;
      right: 0;
      top: 50%;
      transform: translate(0, -50%);
      transition: all 0.3s;
    }
    &:hover {
      &::after {
        transform: translate(5px, -50%);
        opacity: 1;
      }
    }
  }
}
</style>