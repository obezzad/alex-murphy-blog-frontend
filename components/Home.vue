<template>
  <div
    class="
      px-4
      py-16
      mx-auto
      sm:max-w-xl
      md:max-w-full
      lg:max-w-screen-xl
      md:px-24
      lg:px-8
      lg:py-20
    "
  >
    <div class="grid gap-5 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
      <div
        v-for="article in articles"
        :key="article.id"
        class="overflow-hidden transition-shadow duration-300 bg-white rounded"
      >
        <a href="/" aria-label="Article"
          ><img
            src="https://images.pexels.com/photos/932638/pexels-photo-932638.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
            class="object-cover w-full h-64 rounded"
            alt=""
        /></a>
        <div class="py-5">
          <p class="mb-2 text-xs font-semibold text-gray-600 uppercase">
            {{ toDateFormat(article.published_at) }}
          </p>
          <ul class="flex">
            <li>
              <i class="fas fa-heart fa-sm text-red-500 mr-1"></i>
            </li>
            <li>
              <i class="fas fa-heart fa-sm text-red-500 mr-1"></i>
            </li>
            <li>
              <i class="fas fa-heart fa-sm text-red-500 mr-1"></i>
            </li>
            <li>
              <i class="far fa-heart fa-sm text-red-500 mr-1"></i>
            </li>
            <li>
              <i class="far fa-heart fa-sm text-red-500 mr-1"></i>
            </li>
          </ul>
          <a
            href="/"
            aria-label="Article"
            class="
              inline-block
              mb-3
              text-black
              transition-colors
              duration-200
              hover:text-deep-purple-accent-700
            "
            ><p class="text-2xl font-bold leading-5">{{ article.title }}</p></a
          >
          <p class="mb-4 text-gray-700">
            {{ article.excerpt }}
          </p>
          <div class="flex space-x-4">
            <a
              href="/"
              aria-label="Likes"
              class="
                flex
                items-start
                text-gray-800
                transition-colors
                duration-200
                hover:text-deep-purple-accent-700
                group
              "
            >
              <div class="mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="
                    w-5
                    h-5
                    text-gray-600
                    transition-colors
                    duration-200
                    group-hover:text-deep-purple-accent-700
                  "
                >
                  <polyline
                    points="6 23 1 23 1 12 6 12"
                    fill="none"
                    stroke-miterlimit="10"
                  ></polyline>
                  <path
                    d="M6,12,9,1H9a3,3,0,0,1,3,3v6h7.5a3,3,0,0,1,2.965,3.456l-1.077,7A3,3,0,0,1,18.426,23H6Z"
                    fill="none"
                    stroke="currentColor"
                    stroke-miterlimit="10"
                  ></path>
                </svg>
              </div>
              <p class="font-semibold">7.4K</p>
            </a>
            <a
              href="/"
              aria-label="Comments"
              class="
                flex
                items-start
                text-gray-800
                transition-colors
                duration-200
                hover:text-deep-purple-accent-700
                group
              "
            >
              <div class="mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  stroke="currentColor"
                  class="
                    w-5
                    h-5
                    text-gray-600
                    transition-colors
                    duration-200
                    group-hover:text-deep-purple-accent-700
                  "
                >
                  <polyline
                    points="23 5 23 18 19 18 19 22 13 18 12 18"
                    fill="none"
                    stroke-miterlimit="10"
                  ></polyline>
                  <polygon
                    points="19 2 1 2 1 14 5 14 5 19 12 14 19 14 19 2"
                    fill="none"
                    stroke="currentColor"
                    stroke-miterlimit="10"
                  ></polygon>
                </svg>
              </div>
              <p class="font-semibold">81</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import gql from 'graphql-tag'

export default {
  components: {},
  data() {
    return {
      articles: [],
    }
  },
  methods: {
    toDateFormat: (date) => {
      return new Date(date).toLocaleDateString()
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
          }
        }
      `,
      prefetch: true,
    },
  },
}
</script>

<style scoped>
@import url('https://use.fontawesome.com/releases/v5.11.2/css/all.css');
</style>