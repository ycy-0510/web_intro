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
        <h2 class="text-xl font-bold text-center">HTML測試器</h2>
        <textarea
          class="border-2 border-sky-500 rounded-md p-2 m-2 w-full"
          rows="5"
          placeholder="請輸入文字或html"
          v-model="text"
        />
        <div v-html="text"></div>
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
&lt;textarea
    class="border-2 border-sky-500 rounded-md p-2 m-2 w-full"
    rows="5"
    placeholder="請輸入文字或html"
    v-model="text"
/>
&lt;div v-html="text">&lt;/div>
&lt;script setup>
    import { ref } from "vue";
    const text = ref(
    `&lt;div style="background-color:#00AAFF;border-radius: 0.5rem;padding:20px;color:#FFFFFF">Hello world!&lt;/div>`
    );
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
&lt;textarea
    rows="5"
    placeholder="請輸入文字或html"
    id="textInput"
/>

&lt;div id="outputDiv">&lt;/div>

&lt;script>
    document.getElementById("textInput").addEventListener("input", (event) => {
        const text = event.target.value;
        document.getElementById("outputDiv").innerHTML = text;
    });

    const initialText = `&lt;div style="background-color:#00AAFF;border-radius: 0.5rem;padding:20px;color:#FFFFFF">Hello world!&lt;/div>`;
    document.getElementById("outputDiv").innerHTML = initialText;
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
const text = ref(
  `<div style="background-color:#00AAFF;border-radius: 0.5rem;padding:20px;color:#FFFFFF">Hello world!</div>`
);
const page = ref(0);
const close = ref(false);
const fullscreen = ref(false);
const switchPage = (index: number) => {
  page.value = index;
};
</script>
