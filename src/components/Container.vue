<template>
  <div class="flex flex-col h-screen app bg-home">
    <Navbar />
    <main class="flex w-full h-full px-4 sm:px-16">
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
