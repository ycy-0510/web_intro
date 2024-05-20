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
        <h2 class="text-xl font-bold text-center">乘法表</h2>
        <input
          type="number"
          class="border-2 border-sky-500 rounded-md p-2 m-2 w-full"
          placeholder="請輸入最大數字（1）"
          v-model="num"
        />
        <div
          class="relative overflow-auto"
          :class="{ 'max-h-[280px]': !fullscreen, 'max-h-[70vh]': fullscreen }"
        >
          <table class="table-fixed border-collapse border border-sky-500 mx-auto">
            <tr v-for="i in num" :key="i">
              <td
                v-for="j in num"
                :key="j"
                class="border border-sky-500 text-center min-w-10 min-h-10"
                :class="{
                  'bg-sky-500 text-white': i == 1 || j == 1,
                  'bg-sky-100': (i + j) % 2 == 0 && i != 1 && j != 1,
                }"
              >
                {{ i * j }}
              </td>
            </tr>
          </table>
        </div>
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
    placeholder="請輸入最大數字（1）"
    v-model="num"
/>
&lt;table>
    &lt;tr v-for="i in num" :key="i">
        &lt;td v-for="j in num" :key="j">
            &lbrace;&lbrace; i * j }}
        &lt;/td>
    &lt;/tr>
&lt;/table>
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
    placeholder="請輸入最大數字（1）"
    id="numberInput"
/>

&lt;table id="multiplicationTable">&lt;/table>

&lt;script>
    document.getElementById("numberInput").addEventListener("input", (event) =>{
        const num = parseInt(event.target.value);
        updateMultiplicationTable(num);
    });

    const updateMultiplicationTable = (num) =>{
        const table = document.getElementById("multiplicationTable");
        let tableHTML = "";

        for (let i = 1; i &lt;= num; i++) {
            tableHTML += "&lt;tr>";
            for (let j = 1; j &lt;= num; j++) {
                tableHTML += "&lt;td>" + (i * j) + "&lt;/td>";
            }
            tableHTML += "&lt;/tr>";
        }

        table.innerHTML = tableHTML;
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
