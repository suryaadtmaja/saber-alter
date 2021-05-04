<template>
  <LayoutContainer :page="page">
    <div class="h-full container mx-auto max-w-4xl">
      <img
        :src="page.cover"
        :alt="`${page.title} cover image`"
        class="mb-2 object-cover w-full"
        v-if="page.cover"
      />
      <h1 class="mt-8 text-2xl font-bold">
        {{ page.title }}
      </h1>
      <p class="mt-2 text-gray-600">
        <span class="text-blue-base mr-2 font-bold">{{ page.author }}</span>
        // {{ formatDate(page.createdAt) }}
      </p>
      <article class="mt-8">
        <slot name="default" />
      </article>
      <div class="flex mt-8 space-x-2">
        <saber-link
          :to="category.permalink"
          :title="`View posts in ${category.name}`"
          class="bg-gray-200 rounded p-2 flex items-center justify-center text-xs font-bold text-gray-500"
          v-for="category in page.categoriesInfo"
          :key="category.permalink"
        >
          {{ category.name }}
        </saber-link>
      </div>
      <!-- <nav class="flex justify-between text-sm md:text-base">
        <div>
          <saber-link
            :to="page.prevPost.permalink"
            :title="`Older Post: ${page.prevPost.title}`"
            v-if="page.prevPost"
          >
            &LeftArrow; {{ page.prevPost.title }}
          </saber-link>
        </div>

        <div>
          <saber-link
            :to="page.nextPost.permalink"
            :title="`Newer Post: ${page.nextPost.title}`"
            v-if="page.nextPost"
          >
            {{ page.nextPost.title }} &RightArrow;
          </saber-link>
        </div>
      </nav> -->
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
