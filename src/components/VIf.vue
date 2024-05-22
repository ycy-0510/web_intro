<template>
  <div
    class="w-full flex flex-col my-4 border shadow-lg rounded-lg bg-white"
    v-if="!close"
    :class="{
      'fixed top-0 left-0 w-full h-full z-50': fullscreen,
    }"
  >
    <div class="basis-10 flex flex-row bg-sky-300 rounded-t-lg">
      <div class="basis-5 flex flex-row text-center content-center px-2">
        <font-awesome-icon
          icon="fa-solid fa-circle"
          class="h-3 w-3 mx-1 my-auto text-red-500"
          @click="close = true"
        />
        <font-awesome-icon
          icon="fa-solid fa-circle"
          class="h-3 w-3 mx-1 my-auto text-yellow-500"
        />
        <font-awesome-icon
          icon="fa-solid fa-circle"
          class="h-3 w-3 mx-1 my-auto text-green-500"
          @click="fullscreen = !fullscreen"
        />
      </div>
      <div
        class="basis-full text-center content-center hover:rounded-t-lg"
        :class="{
          'bg-white text-sky-500 font-bold rounded-t-lg': page === 0,
          'hover:bg-sky-200': page !== 0,
        }"
      >
        <button class="w-full h-full" @click="switchPage(0)">Preview</button>
      </div>
      <div
        class="basis-full text-center content-center hover:rounded-t-lg"
        :class="{
          'bg-white text-sky-500 font-bold rounded-t-lg': page === 1,
          'hover:bg-sky-200': page !== 1,
        }"
      >
        <button class="w-full h-full" @click="switchPage(1)">Vue</button>
      </div>
      <div
        class="basis-full text-center content-center hover:rounded-t-lg"
        :class="{
          'bg-white text-sky-500 font-bold rounded-t-lg': page === 2,
          'hover:bg-sky-200': page !== 2,
        }"
      >
        <button class="w-full h-full" @click="switchPage(2)">Native</button>
      </div>
    </div>
    <div class="relative basis-full flex flex-col min-h-[400px]">
      <div
        class="w-2/3 basis-full p-4 absolute mx-auto left-0 right-0 transition-all duration-300 ease-in-out max-h-[400px]"
        :class="{
          ' visible': page === 0,
          ' invisible scale-0': page !== 0,
        }"
      >
        <h2 class="text-xl font-bold text-center">年齡判斷</h2>
        <input
          type="number"
          class="border-2 border-sky-500 rounded-md p-2 m-2 w-full"
          placeholder="請輸入年齡（0）"
          v-model="num"
        />
        <p v-if="num < 0" class="text-red-500">不是合法年齡</p>
        <p v-else-if="num < 14">你是幼年人口！</p>
        <p v-else-if="num < 65">你是青年人口！</p>
        <p v-else>你是老年人口！</p>
      </div>
      <div
        class="w-full basis-full p-4 absolute top-0 mx-auto left-0 right-0 transition-all duration-300 ease-in-out max-h-[400px] overflow-y-auto"
        :class="{
          ' visible': page === 1,
          ' invisible scale-0': page !== 1,
        }"
      >
        <div v-highlight class="w-full">
          <pre class="language-html bg-transparent">
<code class="w-full">
&lt;input 
    type="number"
    placeholder="請輸入年齡（0）"
    v-model="num" 
/>
&lt;p v-if="num &lt; 0">不是合法年齡&lt;/p>
&lt;p v-else-if="num &lt; 14">你是幼年人口！&lt;/p>
&lt;p v-else-if="num &lt; 65">你是青年人口！&lt;/p>
&lt;p v-else>你是老年人口！&lt;/p>
&lt;script setup>
    import { ref } from "vue";
    const num = ref(0);
&lt;/script>
</code>
                </pre>
        </div>
      </div>
      <div
        class="w-full basis-full p-4 absolute top-0 mx-auto left-0 right-0 transition-all duration-300 ease-in-out max-h-[400px] overflow-y-auto"
        :class="{
          ' visible': page === 2,
          ' invisible scale-0': page !== 2,
        }"
      >
        <div v-highlight class="w-full">
          <pre class="language-html">
<code class="w-full">
&lt;input
  type="number"
  placeholder="請輸入年齡（0）"
  id="ageInput"
/>
&lt;p id="ageDisplay">你是幼年人口！&lt;/p>

&lt;script>
  let num = 0;
  document.getElementById("ageInput").value=num;
  document.getElementById("ageInput").addEventListener("input", (event) =>{
      num = parseInt(event.target.value);
      updateAgeDisplay();
  });

  const updateAgeDisplay=()=> {
      const ageDisplay = document.getElementById("ageDisplay");

      if (num < 0) {
          ageDisplay.innerText = "不是合法年齡";
      } else if (num < 14) {
          ageDisplay.innerText = "你是幼年人口！";
      } else if (num < 65) {
          ageDisplay.innerText = "你是青年人口！";
      } else {
          ageDisplay.innerText = "你是老年人口！";
      }
  }
&lt;/script>
</code>
                </pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import "../../node_modules/vue-code-highlight/themes/prism-coy.css";
const num = ref(0);
const page = ref(0);
const close = ref(false);
const fullscreen = ref(false);
const switchPage = (index: number) => {
  page.value = index;
};
</script>
