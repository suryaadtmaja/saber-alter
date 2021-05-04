<template>
  <div class="h-full flex flex-col app">
    <Navbar />
    <main class="flex w-full px-12 sm:px-16 h-full pb-6">
      <slot />
    </main>
  </div>
</template>

<script>
import Navbar from "./Navbar";
export default {
  components: {
    Navbar,
  },
  props: ["page"],
  head() {
    const pageTitle = this.page && this.page.title;
    const siteTitle = this.$siteConfig.title;
    return {
      title: pageTitle ? `${pageTitle} - ${siteTitle}` : siteTitle,
      bodyAttrs: {
        class: "flex flex-col",
      },
    };
  },
};
</script>
