<template>
  <LayoutContainer>
    <div class="flex flex-col justify-center h-full section-introduction">
      <div class="flex flex-col space-y-2 sm:space-y-8">
        <h3
          class="text-2xl font-bold tracking-wide md:text-4xl lg:text-6xl text-dark-text"
        >
          Hello World!
        </h3>
        <h3
          class="text-2xl font-bold tracking-wide md:text-4xl lg:text-6xl text-dark-text"
          v-if="$themeConfig.name"
        >
          My name is {{ $themeConfig.name }},
        </h3>
        <h3
          class="text-2xl font-bold tracking-wide md:text-4xl lg:text-6xl text-dark-text"
          v-if="$themeConfig.job"
        >
          I’m a {{ $themeConfig.job }}
        </h3>
      </div>
      <div class="flex w-full mt-8 space-x-5" v-if="$themeConfig.socialMedia">
        <a
          v-for="(social, index) in $themeConfig.socialMedia"
          :key="index"
          href="#"
          class="text-xl font-bold md:text-2xl lg:text-4xl text-secondary-blue hover:text-dark-text"
        >
          {{ social.text }}
        </a>
      </div>
    </div>
  </LayoutContainer>
</template>

<script>
import LayoutContainer from "../components/HomeContainer";
export default {
  props: ["page"],
  components: {
    LayoutContainer
  },
  methods: {
    formatDate(v) {
      const date = new Date(v);
      return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
    }
  }
};
</script>
