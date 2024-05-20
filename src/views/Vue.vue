<template>
    <!-- navbar -->
    <div class="sticky top-0 w-full z-40">
        <nav>
            <div class="flex flex-row min-h-16" :class="{
                ' bg-gray-50 border-b border-b-gray-300': scrolled || showMenu,
                'bg-gray-100': !scrolled && !showMenu,
            }">
                <div class="basis-40 my-auto ms-auto py-2 ps-2">
                    <RouterLink to="/" class="text-2xl font-medium flex items-center text-sky-500 hover:text-sky-300">
                        <font-awesome-icon icon="fa-solid fa-angle-left" class="h-8 me-1" /><span>Home</span>
                    </RouterLink>
                </div>
                <div class="basis-full my-auto">
                    <h2 class="text-2xl font-medium text-center">Vue.js</h2>
                </div>
                <div class="basis-40">
                </div>
            </div>
        </nav>
    </div>

    <!-- toggle botton -->
    <div class="fixed bottom-12 left-5 z-30 transition-transform duration-500 ease-in-out lg:scale-0"
        :class="{ 'translate-x-72': showMenu }">
        <button @click="toggleMenu" class=" bg-gray-200  text-sky-500 shadow-lg h-20 w-20 rounded-full" aria-label="切換選單">
            <font-awesome-icon icon="fa-solid fa-bars" class="h-1/2 transition-transform duration-500 ease-in-out"
                :class="{ 'rotate-90 w-0 h-0 opacity-0 pointer-events-none': showMenu }" />
            <font-awesome-icon icon="fa-solid fa-close" class="h-1/2 transition-transform duration-500 ease-in-out"
                :class="{ '-rotate-90 w-0 h-0  opacity-0 pointer-events-none': !showMenu }" />
        </button>
    </div>
    <!-- menu -->
    <div class="fixed w-screen h-lvh z-20 bg-black transition-opacity duration-500 ease-in-out lg:hidden"
        :class="{ 'opacity-30': showMenu, 'opacity-0 invisible': !showMenu }" @click="closeMenu">
    </div>
    <!-- <div class="fixed w-full h-lvh z-40 bg-white -left-full "></div> -->
    <div class="fixed left-0 w-72 h-lvh z-30 bg-gray-100  transition-all duration-500 ease-in-out  "
        :class="{ '-translate-x-72 lg:translate-x-0 opacity-0 lg:opacity-100': !showMenu }">
        <h3 class="text-2xl px-6 py-2 mt-4 font-medium">Index</h3>
        <ul class="px-4 py-2 bg-white rounded-xl m-4">
            <li class="text-lg py-2">
                <a href="#為什麼要用框架" @click="closeMenu" class=" text-sky-500 hover:text-sky-300">為什麼要用框架</a>
            </li>
            <hr>
            <li class="text-lg py-2">
                <a href="#前端框架有哪些" @click="closeMenu" class=" text-sky-500 hover:text-sky-300">前端框架有哪些</a>
            </li>
            <hr>
            <li class="text-lg py-2">
                <a href="#Vue.js 的優勢" @click="closeMenu" class=" text-sky-500 hover:text-sky-300">Vue.js 的優勢</a>
            </li>
            <hr>
            <li class="text-lg py-2">
                <a href="#v-model & v-html" @click="closeMenu" class=" text-sky-500 hover:text-sky-300">v-model & v-html</a>
            </li>
            <hr>
            <li class="text-lg py-2">
                <a href="#v-if v-else-if v-else" @click="closeMenu" class=" text-sky-500 hover:text-sky-300">v-if v-else-if v-else</a>
            </li>
            <hr>
            <li class="text-lg py-2">
                <a href="#v-for" @click="closeMenu" class=" text-sky-500 hover:text-sky-300">v-for</a>
            </li>
            <hr>
            <li class="text-lg py-2">
                <a href="#結論" @click="closeMenu" class=" text-sky-500 hover:text-sky-300">結論</a>
            </li>
        </ul>
    </div>
    <!-- page -->
    <main class="bg-gray-100">
        <div class="py-2 px-5 md:px-20 lg:ps-80 lg:pe-30 transition-all duration-500 ease-in-out">
            <h3 class="text-2xl font-medium mt-10 mb-2 px-2" id="為什麼要用框架">為什麼要用框架</h3>
            <div class=" bg-white p-4 rounded-xl">
                <p class="text-lg">
                    使用框架可以帶來很多好處：
                <ul class=" list-disc list-outside ms-4">
                    <li class="py-2">提高效率：框架提供了已經實現的通用功能和解決方案，這樣開發人員就不需要重複造輪子，能夠更快地開發應用程序。</li>
                    <li class="py-2">標準化：框架通常有一套規範和最佳實踐，這有助於保持代碼的一致性和易讀性，並促使開發人員遵循相同的開發流程。</li>
                    <li class="py-2">擴展性：框架通常設計為可擴展的，這意味著您可以根據需求輕鬆地添加新功能或定製現有功能，而無需對整個應用程序進行大規模的更改。</li>
                    <li class="py-2">社群支持：流行的框架通常擁有龐大的開發者社群，在開發過程中較容易獲得支援、解答疑問，並且可以使用社群共享的資源和插件。</li>
                </ul>
                </p>
            </div>
            <h3 class="text-2xl font-medium mt-10 mb-2 px-2" id="前端框架有哪些">前端框架有哪些</h3>
            <div class="bg-white p-4 rounded-xl">
                <p class="text-lg">
                    常見的前端框架包括 Angular、React 和 Vue.js。這些框架都是用於構建現代 Web 應用程序的工具，並且具有各自的優點和特點。
                </p>
                <br>
                <div class="relative w-full overflow-x-auto rounded-lg">
                    <table class="w-[800px] table-fixed text-gray-500 ">
                        <thead class="text-gray-700 uppercase bg-gray-50">
                            <tr>
                                <th scope="col" class="px-6 py-3 w-[100px]">
                                    框架
                                </th>
                                <th scope="col" class="px-6 py-3 w-[100px]">
                                    開發者
                                </th>
                                <th scope="col" class="px-6 py-3 w-[175px]">
                                    優點
                                </th>
                                <th scope="col" class="px-6 py-3 w-[175px]">
                                    缺點
                                </th>
                                <th scope="col" class="px-6 py-3 w-[175px]">
                                    用途
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="odd:bg-white  even:bg-gray-50  border-b">
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                    Angular
                                </th>
                                <td class="px-6 py-4">
                                    Google
                                </td>
                                <td class="px-6 py-4">
                                    數據綁定、<br>
                                    依賴注入、<br>
                                    全面功能、<br>
                                    可擴展性
                                </td>
                                <td class="px-6 py-4">
                                    複雜性高、<br>
                                    學習曲線陡峭
                                </td>
                                <td class="px-6 py-4">
                                    構建大型企業應用程式
                                </td>
                            </tr>
                            <tr class="odd:bg-white  even:bg-gray-50  border-b">
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                    React
                                </th>
                                <td class="px-6 py-4">
                                    Facebook
                                </td>
                                <td class="px-6 py-4">
                                    虛擬 DOM、<br>
                                    基於組件的架構、<br>
                                    易於學習、<br>
                                    大型社群
                                </td>
                                <td class="px-6 py-4">
                                    可能會有過度封裝的問題、<br>
                                    學習曲線陡峭峭
                                </td>
                                <td class="px-6 py-4">
                                    構建複雜的單頁應用程式 (SPA)
                                </td>
                            </tr>
                            <tr class="odd:bg-white  even:bg-gray-50  border-b min-w-72">
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                    Vue.js
                                </th>
                                <td class="px-6 py-4">
                                    尤雨錫
                                </td>
                                <td class="px-6 py-4">
                                    虛擬 DOM、<br>
                                    輕量級、<br>
                                    易於學習、<br>
                                    元件包裝、<br>
                                    靈活性高
                                </td>
                                <td class="px-6 py-4">
                                    社群較小、<br>
                                    功能較少
                                </td>
                                <td class="px-6 py-4">
                                    構建小型至中型單頁應用程式 (SPA)
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <h3 class="text-2xl font-medium mt-10 mb-2 px-2" id="Vue.js 的優勢">Vue.js 的優勢</h3>
            <div class=" bg-white p-4 rounded-xl">
                <p class="text-lg">
                    Vue.js 有很多優勢，這使它成為一個受歡迎的前端框架之一：
                    <ol class=" list-decimal list-outside ms-4">
                        <li class=" py-2">
                            易學易用：Vue.js 的語法簡單直觀，並且有詳細的文檔，使得新手能夠快速上手。
                        </li>
                        <li class=" py-2">
                            輕量級：Vue.js 的核心庫很小，這使得頁面加載速度快，並且更容易與其他工具或庫集成。易學易用：Vue.js 的語法簡單直觀，並且有詳細的文檔，使得新手能夠快速上手。
                        </li>
                        <li class=" py-2">
                            模組化：Vue.js 採用模組化的開發方式，使得代碼更易於維護、重用和測試。
                        </li>
                        <li class="py-2">
                            靈活性：Vue.js 提供了許多靈活的選項，例如可以在模板中使用直接的HTML、支持單文件組件、可以與其他庫或框架配合使用等。
                        </li>
                        <li class="py-2">
                            響應式：Vue.js 通過利用 JavaScript 的觀察者模式實現了一個非常高效的響應式系統，可以自動追蹤數據的變化並更新 DOM。
                        </li>
                        <li class="py-2">
                            生態系統：Vue.js 擁有強大的生態系統，包括 Vue Router（路由管理）、Vite（開發工具）等，這些庫能夠滿足大多數應用的需求。
                        </li>
                        <li class="py-2">
                            社群支持：Vue.js 有一個龐大的社群，這意味著你可以輕鬆地找到解決問題的方法，並且有許多第三方庫和插件可供使用。
                        </li>
                    </ol>
                </p>
            </div>
            <h3 class="text-2xl font-medium mt-10 mb-2 px-2" id="v-model & v-html">v-model & v-html</h3>
            <div class=" bg-white p-4 rounded-xl">
                <p class="text-lg">
                    Vue.js 提供了 v-model 和 v-html 指令，用於實現數據的雙向綁定和動態生成 HTML 元素。這使得在模板中操作數據和元素變得非常容易。
                    而原生javascript需要透過一系列的dom操作來達到相同的效果，這樣會增加代碼的複雜度，而且不易維護。
                </p>
                <VModel/>
            </div>
            <h3 class="text-2xl font-medium mt-10 mb-2 px-2" id="v-if v-else-if v-else">v-if v-else-if v-else</h3>
            <div class=" bg-white p-4 rounded-xl">
                <p class="text-lg">
                    Vue.js 提供了一系列指令，用於根據條件來顯示或隱藏元素。其中，v-if 指令用於根據表達式的值來添加或刪除元素，v-else-if 和 v-else 則用於添加多個條件分支。
                    而原生javascript需要透過一系列的dom操作來達到相同的效果，這樣會增加代碼的複雜度，而且不易維護。
                </p>
                <VIf/>
            </div>
            <h3 class="text-2xl font-medium mt-10 mb-2 px-2" id="v-for">v-for</h3>
            <div class=" bg-white p-4 rounded-xl">
                <p class="text-lg">
                    Vue.js 提供了 v-for 指令，用於遍歷數組或對象的屬性，並根據每個元素生成對應的元素。這使得在模板中動態生成列表變得非常容易。
                    而原生javascript需要透過一系列的for和dom迴圈操作來達到相同的效果，這樣會增加代碼的複雜度，而且不易維護。
                </p>
                <VFor/>
            </div>
            <h3 class="text-2xl font-medium mt-10 mb-2 px-2" id="結論">結論</h3>
            <div class=" bg-white p-4 rounded-xl">
                <p class="text-lg">
                    Vue.js 是一個功能強大、易學易用的前端框架，它提供了許多便捷的功能和工具，使得開發 Web 應用程序變得更加高效和愉快。如果你正在尋找一個現代化的前端框架，Vue.js 是一個不錯的選擇。
                </p>
            </div>
        </div>
        <div class=" h-10"></div>
    </main>
</template>
<script setup lang="ts">
import { ref, onMounted } from "vue";
import { RouterLink } from "vue-router";
import VModel from "../components/VModel.vue";
import VIf from "../components/VIf.vue";
import VFor from "../components/VFor.vue";

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
}
const toggleMenu = () => {
    showMenu.value = !showMenu.value;
}
</script>
<style scoped>
:target:before {
    content: "";
    display: block;
    height: 100px;
    margin: -100px 0 0;
}
</style>