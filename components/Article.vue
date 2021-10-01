<template>
  <section class="h-screen w-screen z-40 overflow-scroll">
    <div class="bg-white container mx-auto px-5">
      <!-- component -->
      <button
        type="button"
        class="
          bg-white
          absolute
          right-0
          top-0
          m-5
          rounded-md
          p-2
          inline-flex
          items-center
          justify-center
          text-gray-400
          hover:text-gray-500
          hover:bg-gray-100
          focus:outline-none
          focus:ring-2 focus:ring-inset focus:ring-indigo-500
        "
        @click="goToHome()"
      >
        <span class="sr-only">Close menu</span>
        <!-- Heroicon name: outline/x -->
        <svg
          class="h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      <div class="flex flex-col items-center py-8">
        <div v-if="article" class="flex flex-col w-full mb-12 text-left">
          <div class="mx-auto lg:w-1/2">
            <h1
              class="
                mx-auto
                mb-6
                text-2xl
                font-semibold
                text-black
                lg:text-3xl
                xl:text-4xl
                2xl:text-5xl
              "
            >
              {{ article.title }}
            </h1>
            <div
              class="
                rounded-sm
                bg-fixed bg-center bg-no-repeat bg-contain
                w-full
                h-0
              "
              :style="
                'background-image: url(' +
                baseURL +
                article.coverImage.coverImage.url +
                '); padding-top: 66.64%;'
              "
            />
            <h2 class="mx-auto mt-4 mb-4 text-xl font-semibold text-black">
              Are you ready for a new experience and challenge ?
            </h2>
            <p class="mx-auto text-base leading-relaxed text-gray-800">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <p class="mx-auto text-base leading-relaxed text-gray-800">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <p class="mx-auto text-base leading-relaxed text-gray-800">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <h3 class="mx-auto mt-4 mb-4 text-xl font-semibold text-black">
              Make challenges
            </h3>
            <p class="mx-auto text-base leading-relaxed text-gray-800">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for 'lorem ipsum' will
              uncover many web sites still in their infancy. Various versions
              have evolved over the years, sometimes by accident, sometimes on
              purpose (injected humour and the like).
            </p>
          </div>

          <div
            class="p-4 mt-4 bg-white border rounded-lg w-full mx-auto lg:w-1/2"
          >
            <div class="flex py-2 w-full">
              <img
                src="https://images.unsplash.com/photo-1530268729831-4b0b9e170218?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                class="object-cover w-12 h-12 mr-2 rounded-full"
              />
              <div>
                <p class="text-sm font-semibold tracking-tight text-black">
                  Ali
                </p>
                <p class="text-sm font-normal tracking-tight text-gray-600">
                  Content Creator
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import gql from 'graphql-tag'

export default {
  transition: 'modal',
  props: ['id'],
  data() {
    return {
      article: null,
      baseURL: process.env.backendBaseURL,
    }
  },
  methods: {
    goToHome() {
      this.$router.push('/')
    },
  },
  apollo: {
    article() {
      return {
        query: gql`
          query Articles($id: ID!) {
            article(id: $id) {
              id
              title
              body
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
        variables: {
          id: this.id,
        },
        prefetch: true,
      }
    },
  },
}
</script>