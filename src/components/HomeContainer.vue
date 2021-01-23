<template>
  <div class="h-screen flex flex-col app bg-home">
    <Navbar />
    <main class="flex w-full px-4 sm:px-16 h-full">
      <slot />
    </main>
  </div>
</template>

<script>
import Navbar from "./Navbar";
export default {
  components: {
    Navbar
  },
  props: ["page"],
  head() {
    const pageTitle = this.page && this.page.title;
    const siteTitle = this.$siteConfig.title;
    return {
      title: pageTitle ? `${pageTitle} - ${siteTitle}` : siteTitle,
      bodyAttrs: {
        class: "flex flex-col min-h-screen"
      }
    };
  }
};
</script>
