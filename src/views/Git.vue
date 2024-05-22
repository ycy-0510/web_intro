<template>
  <!-- navbar -->
  <div class="sticky top-0 w-full z-40">
    <nav>
      <div
        class="flex flex-row min-h-16"
        :class="{
          ' bg-gray-50 border-b border-b-gray-300': scrolled || showMenu,
          'bg-gray-100': !scrolled && !showMenu,
        }"
      >
        <div class="basis-40 my-auto ms-auto py-2 ps-2">
          <RouterLink
            to="/"
            class="text-2xl font-medium flex items-center text-sky-500 hover:text-sky-300"
          >
            <font-awesome-icon icon="fa-solid fa-angle-left" class="h-8 me-1" /><span
              >Home</span
            >
          </RouterLink>
        </div>
        <div class="basis-full my-auto">
          <h2 class="text-2xl font-medium text-center">GitFlow</h2>
        </div>
        <div class="basis-40"></div>
      </div>
    </nav>
  </div>

  <!-- toggle botton -->
  <div
    class="fixed bottom-12 left-5 z-30 transition-transform duration-500 ease-in-out lg:scale-0"
    :class="{ 'translate-x-72': showMenu }"
  >
    <button
      @click="toggleMenu"
      class="bg-gray-200 text-sky-500 shadow-lg h-20 w-20 rounded-full"
      aria-label="切換選單"
    >
      <font-awesome-icon
        icon="fa-solid fa-bars"
        class="h-1/2 transition-transform duration-500 ease-in-out"
        :class="{ 'rotate-90 w-0 h-0 opacity-0 pointer-events-none': showMenu }"
      />
      <font-awesome-icon
        icon="fa-solid fa-close"
        class="h-1/2 transition-transform duration-500 ease-in-out"
        :class="{ '-rotate-90 w-0 h-0  opacity-0 pointer-events-none': !showMenu }"
      />
    </button>
  </div>
  <!-- menu -->
  <div
    class="fixed w-screen h-lvh z-20 bg-black transition-opacity duration-500 ease-in-out lg:hidden"
    :class="{ 'opacity-30': showMenu, 'opacity-0 invisible': !showMenu }"
    @click="closeMenu"
  ></div>
  <!-- <div class="fixed w-full h-lvh z-40 bg-white -left-full "></div> -->
  <div
    class="fixed left-0 w-72 h-lvh z-30 bg-gray-100 transition-all duration-500 ease-in-out"
    :class="{ '-translate-x-72 lg:translate-x-0 opacity-0 lg:opacity-100': !showMenu }"
  >
    <h3 class="text-2xl px-6 py-2 mt-4 font-medium">Index</h3>
    <ul class="px-4 py-2 bg-white rounded-xl m-4"></ul>
  </div>
  <!-- page -->
  <main class="bg-gray-100">
    <div
      class="py-2 px-5 md:px-20 lg:ps-80 lg:pe-30 transition-all duration-500 ease-in-out"
    >
      <div class="h-screen"></div>
    </div>
    <div class="h-10"></div>
  </main>
</template>
<script setup lang="ts">
import { ref, onMounted } from "vue";
import { RouterLink } from "vue-router";

const scrolled = ref(false);
const showMenu = ref(false);
window.addEventListener("scroll", () => handleScroll());

onMounted(() => {
  handleScroll();
  window.scrollTo(0, 0);
});

const handleScroll = () => {
  if (window.scrollY > 2) {
    scrolled.value = true;
  } else {
    scrolled.value = false;
  }
};

const closeMenu = () => {
  showMenu.value = false;
};
const toggleMenu = () => {
  showMenu.value = !showMenu.value;
};
</script>
<style scoped>
:target:before {
  content: "";
  display: block;
  height: 100px;
  margin: -100px 0 0;
}
</style>
