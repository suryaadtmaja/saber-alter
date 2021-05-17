<template>
  <LayoutContainer :page="page">
    <div class="w-full h-full">
      <div v-if="page.category" class="flex space-x-2 pb-2 items-center">
        <h1 class="font-bold py-2 ">
          Tags:
        </h1>
        <div
          class="bg-gray-200 rounded p-2 flex items-center justify-center text-xs font-bold text-gray-500"
        >
          {{ page.category }}
        </div>
      </div>
      <div
        class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 sm:gap-8"
      >
        <div v-for="(post, i) in page.posts" :key="post.slug" class="rounded">
          <saber-link
            :to="post.attributes.permalink"
            :title="`Read ${post.attributes.title}`"
          >
            <img
              v-if="post.attributes.cover"
              :src="post.attributes.cover"
              class="h-64 w-full object-cover rounded-md"
            />
            <div
              class="h-64 w-full bg-blue-base rounded-md flex justify-center items-center"
              v-else
            >
              <h3 class="text-white text-xl">
                {{ post.attributes.title }}
              </h3>
            </div>
          </saber-link>
          <div class="mt-4 flex flex-col">
            <p class="text-sm text-gray-500">
              {{ formatDate(post.attributes.createdAt) }}
            </p>
            <h3 class="mt-3 text-md text-dark-text font-bold">
              <saber-link
                :to="post.attributes.permalink"
                :title="`Read ${post.attributes.title}`"
              >
                {{ post.attributes.title }}
              </saber-link>
            </h3>
            <div
              class="text-gray-600 mt-3 text-sm"
              v-html="post.attributes.excerpt"
            ></div>
            <saber-link
              class="flex space-x-2 items-center mt-3"
              :to="post.attributes.permalink"
              :title="`Read ${post.attributes.title}`"
            >
              <h3 class=" font-bold text-sm text-blue-base">Read More</h3>
              <svg
                class="text-blue-base w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                ></path>
              </svg>
            </saber-link>
          </div>
        </div>
      </div>
    </div>
  </LayoutContainer>
</template>

<script>
import LayoutContainer from "../components/HomeContainer";
export default {
  props: ["page"],
  components: {
    LayoutContainer,
  },
  methods: {
    formatDate(date) {
      return new Date(date).toLocaleDateString("default", {
        month: "long",
        day: "numeric",
        year: "numeric",
      });
    },
  },
};
</script>
