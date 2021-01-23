<template>
  <div class="flex items-center justify-between px-4 pt-8 sm:p-16">
    <h3
      v-if="$siteConfig.title"
      class="text-2xl font-bold tracking-wide text-gray-100"
    >
      {{ $siteConfig.title }}
    </h3>
    <div class="sm:hidden">
      <button
        @click="isOpen = !isOpen"
        type="button"
        class="block text-gray-500 hover:text-white focus:text-white focus:outline-none"
      >
        <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24">
          <path
            v-if="isOpen"
            fill-rule="evenodd"
            d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
          />
          <path
            v-if="!isOpen"
            fill-rule="evenodd"
            d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
          />
        </svg>
      </button>
    </div>
    <div
      :class="isOpen ? 'block' : 'hidden'"
      class="sm:flex link space-x-6 sm:space-x-16"
      v-if="$themeConfig.nav"
    >
      <saber-link
        :key="index"
        class="lg:text-lg lg:tracking-wide lg:text-dark-text hover:text-blue-base"
        v-for="(item, index) in $themeConfig.nav"
        :to="item.link"
        :class="{
          'active font-bold': $router.currentRoute == $router.match(item.link)
        }"
        >{{ item.text }}</saber-link
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false
    };
  }
};
</script>
