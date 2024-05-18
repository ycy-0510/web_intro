<script setup lang="ts">
import "vue-router";
import Footer from "./components/Footer.vue";
</script>

<template>
  <router-view v-slot="{ Component, route }">
    <Transition
      :name="
        typeof route.meta.transition === 'string' ? route.meta.transition : 'slide-right'
      "
      mode="default"
    >
      <div :key="route.path">
        <component :key="route.path" :is="Component" />
        <Footer />
      </div>
    </Transition>
  </router-view>
</template>

<style scoped>
.slide-right-enter-active,
.slide-right-leave-active {
  position: absolute;
  transform-origin: center;
  transition: all 0.3s ease;
  width: 100vw;
}

.slide-right-enter-from {
  transform: translateX(100%);
}

.slide-right-enter-to {
  transform: translateX(0);
}

.slide-right-leave-from {
  transform: translateX(0);
}

.slide-right-leave-to {
  transform: translateX(-50%);
}

.slide-left-enter-active,
.slide-left-leave-active {
  position: absolute;
  transform-origin: center;
  transition: all 0.3s ease;
  width: 100vw;
}

.slide-left-enter-from {
  transform: translateX(-50%);
}

.slide-left-enter-to {
  transform: translateX(0);
}

.slide-left-leave-from {
  transform: translateX(0);
}

.slide-left-leave-to {
  transform: translateX(100%);
}
</style>
