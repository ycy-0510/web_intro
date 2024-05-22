<template>
  <header>
    <div
      class="flex flex-col items-center justify-center h-screen bg-cyan-950 opacity-90 bg-cover bg-blend-overlay p-4"
      style="background-image: url('technology.jpg')"
    >
      <h1 class="text-5xl font-bold mb-4 text-white">Web introduction</h1>
      <p class="text-2xl text-gray-200 underline mb-8">學習關於 網域與DNS 和 Vue</p>
      <div class="flex flex-col items-center">
        <button
          class="bg-sky-500 hover:bg-sky-600 text-white text-lg font-bold py-3 px-6 rounded-xl text-center mb-4 animate-bounce hover:animate-none"
          @click="scrollToContent"
        >
          立即開始
        </button>
      </div>
    </div>
  </header>
  <main>
    <div class="bg-white min-h-4"></div>
    <section ref="contentElement">
      <div class="flex flex-col md:flex-row bg-sky-800 py-5">
        <div class="basis-1/2 p-4 md:px-0">
          <div
            class="rounded-3xl md:rounded-e-full border-2 md:border-s-0 border-sky-400 bg-white"
          >
            <img src="/home/1.svg" alt="網域與 DNS" class="mx-auto h-80" />
          </div>
        </div>
        <div class="basis-1/2 p-4 my-auto">
          <h2 class="text-3xl text-white font-bold mb-2">網域與 DNS</h2>
          <p class="text-xl text-gray-200 mb-4">連結世界的橋樑：解析網域與DNS的重要性</p>
          <RouterLink
            to="/domain-dns"
            class="bg-white hover:bg-gray-200 text-sky-500 font-bold py-2 px-4 rounded-xl text-center text-lg"
          >
            完整教學</RouterLink
          >
        </div>
      </div>
      <div class="flex flex-col md:flex-row bg-gray-100 py-5">
        <div class="basis-1/2 p-4 md:px-0 order-1 md:order-2">
          <div
            class="rounded-3xl md:rounded-s-full border-2 md:border-e-0 border-sky-400 bg-sky-800"
          >
            <img src="/home/2.svg" alt="Vue" class="mx-auto h-80" />
          </div>
        </div>
        <div class="basis-1/2 p-4 my-auto order-2 md:order-1">
          <h2 class="text-3xl text-sky-800 font-bold mb-2">Vue.js</h2>
          <p class="text-xl text-gray-800 mb-4">
            Vue.js：打造流暢、靈活、高效的前端應用體驗
          </p>
          <RouterLink
            to="/vue"
            class="bg-sky-500 hover:bg-sky-600 text-white font-bold py-2 px-4 rounded-xl text-center text-lg"
          >
            完整教學</RouterLink
          >
        </div>
      </div>
      <div class="flex flex-col md:flex-row bg-sky-800 py-5">
        <div class="basis-1/2 p-4 md:px-0">
          <div
            class="rounded-3xl md:rounded-e-full border-2 md:border-s-0 border-sky-400 bg-white animate-pulse"
          >
            <!-- <img src="/home/3.svg" alt="GitFlow" class="mx-auto h-80 animate-pulse" /> -->
            <div class="h-80"></div>
          </div>
        </div>
        <div class="basis-1/2 p-4 my-auto">
          <h2 class="text-3xl text-white font-bold mb-2 h-8 rounded-xl">Coming soon!</h2>
          <div class="flex flex-row animate-pulse mt-4">
            <div class="basis-3/12 pe-2">
              <p class="text-xl text-gray-200 mb-4 h-4 rounded-md bg-gray-200"></p>
            </div>
            <div class="basis-9/12 ps-2">
              <p class="text-xl text-gray-200 mb-4 h-4 rounded-md bg-gray-200 px-4"></p>
            </div>
          </div>
          <div class="flex flex-row animate-pulse">
            <div class="basis-9/12 pe-2">
              <p class="text-xl text-gray-200 mb-4 h-4 rounded-md bg-gray-200"></p>
            </div>
            <div class="basis-3/12 ps-2">
              <p class="text-xl text-gray-200 mb-4 h-4 rounded-md bg-gray-200 px-4"></p>
            </div>
          </div>
          <RouterLink
            to="/"
            class="bg-white text-sky-500 font-bold py-2 px-4 rounded-xl text-center text-lg"
            >WIP</RouterLink
          >
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { Ref, ref, onMounted } from "vue";

const contentElement: Ref = ref(null);

onMounted(() => {
  window.scrollTo(0, 0);
});

const scrollToContent = () => {
  contentElement.value?.scrollIntoView({ behavior: "smooth" });
};
</script>

<style scoped>
/* Add your custom styles here */
</style>
