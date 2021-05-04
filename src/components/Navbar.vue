<template>
  <div
    class="flex flex-col px-4 p-8 sm:p-16 sm:flex-row sm:justify-between sm:items-center"
  >
    <div class="flex justify-between px-8 sm:px-0">
      <h3
        v-if="$siteConfig.title"
        class="text-2xl font-bold tracking-wide text-blue-base"
      >
        {{ $siteConfig.title }}
      </h3>
      <button
        @click="isOpen = !isOpen"
        type="button"
        class="sm:hidden block text-gray-500  focus:outline-none"
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
    <div class="mt-2">
      <nav
        :class="isOpen ? 'block' : 'hidden'"
        class="sm:flex sm:flex-row sm:items-center sm:space-y-0 link space-y-2 sm:space-x-16 flex flex-col "
        v-if="$themeConfig.nav"
      >
        <saber-link
          :key="index"
          class="p-2 text-sm lg:tracking-wide lg:text-dark-text text-dark-text hover:bg-blue-base hover:text-white"
          v-for="(item, index) in $themeConfig.nav"
          :to="item.link"
          tag="a"
          exact
          :class="{
            'active font-bold':
              $router.currentRoute == $router.match(item.link),
          }"
          >{{ item.text }}</saber-link
        >
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },
};
</script>
