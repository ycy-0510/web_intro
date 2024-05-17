<template>
  <div className="sticky top-0 w-full z-50">
    <nav>
      <div class="flex flex-row min-h-16" :class="{
        ' bg-gray-50 border-b border-b-gray-300': scrolled,
        'bg-gray-100': !scrolled,
      }">
        <div class="basis-40 m-auto px-5 py-2">
          <a @click="router.go(-1)" class="text-2xl font-medium flex items-center text-sky-500 hover:text-sky-300">
            <font-awesome-icon icon="fa-solid fa-angle-left" class="h-8 me-1" /><span>Home</span>
          </a>
        </div>
        <div class="basis-full my-auto">
          <h2 class="text-2xl font-medium text-center">網域與 DNS</h2>
        </div>
        <div class="basis-40"></div>
      </div>
    </nav>
  </div>
  <main ref="main" class=" bg-gray-100">
    <div class="py-2 px-5 md:px-20 lg:px-30">
      <h3 class="text-2xl font-medium mt-10 mb-4">什麼是網域</h3>
      <div class=" bg-white p-4 rounded-xl">
        <p class="text-lg">
          網域是網絡上的一個組織單位，它由一個或多個主機組成，這些主機共享相同的域名後綴。網域名稱通常由多個部分組成，以點分隔，例如
          "example.com"。網域名稱的最後一部分稱為頂級域名 (Top-Level Domain, TLD)，例如
          ".com"、".org" 等。
        </p>
        <div class="p-4">
          <img src="/domain/1.svg" alt="">
        </div>
      </div>
      <h3 class="text-2xl font-medium mt-10 mb-4">常見的頂級域名</h3>
      <div class=" bg-white p-4 rounded-xl">
        <p class="text-lg">
          頂級域名 (Top-Level Domain, TLD)
          是網域名稱的最高級別，通常用於指示網站的類型、所屬國家或地區等信息。常見的頂級域名包括：
          ".com", ".org", ".net", ".edu", ".gov", ".mil", ".int", ".io", ".xyz"
        </p>
      </div>
      <h3 class="text-2xl font-medium mt-10 mb-4">子網域與子目錄</h3>
      <div class=" bg-white p-4 rounded-xl">
        <p class="text-lg">
          子網域 (Subdomain) 是網域名稱的一部分，通常用於區分網站的不同部分或功能。例如，"blog.example.com"
          中的 "blog" 就是一個子網域。子目錄 (Subdirectory) 則是網站中的一個目錄，通常用於組織網站的內容。例如，
          "example.com/blog" 中的 "/blog" 就是一個子目錄。
        </p>
      </div>
      <h3 class="text-2xl font-medium mt-10 mb-4">哪裡可以買網域</h3>
      <div class=" bg-white p-4 rounded-xl">
        <p class="text-lg">
          網域名稱可以在許多網域註冊商 (Domain Registrar) 購買，例如 GoDaddy、Namecheap、Google
          Domains 等。您可以在這些網站上搜索您想要的網域名稱，並進行購買和註冊。
        </p>
      </div>
      <h3 class="text-2xl font-medium mt-10 mb-4">什麼是DNS</h3>
      <div class=" bg-white p-4 rounded-xl">
        <p class="text-lg">
          DNS (Domain Name System) 是一個用於將域名轉換為 IP 地址的分散式命名系統。當您在瀏覽器中輸入一個網址時，瀏覽器會向 DNS
          伺服器發送請求，詢問該網址對應的 IP 地址。DNS 伺服器會返回相應的 IP 地址，使瀏覽器能夠連接到該網站的伺服器。
        </p>
      </div>
      <h3 class="text-2xl font-medium mt-10 mb-4">常見的 DNS record</h3>
      <div class=" bg-white p-4 rounded-xl">
        <p class="text-lg">
          DNS 記錄 (DNS Record) 是 DNS 伺服器中存儲的資訊，用於將域名映射到 IP 地址、郵件伺服器、子網域等。常見的 DNS
          記錄包括：
        <ul class="list-disc list-inside">
          <li>A (Address) Record: 將域名映射到 IP 地址</li>
          <li>CNAME (Canonical Name) Record: 將域名映射到另一個域名</li>
          <li>MX (Mail Exchange) Record: 指定郵件伺服器</li>
          <li>TXT (Text) Record: 存儲任意文本資訊</li>
          <li>NS (Name Server) Record: 指定域名伺服器</li>
        </ul>
        </p>
      </div>
    </div>
  </main>
</template>
<script setup lang="ts">
import { ref, onMounted } from "vue";
import router from "../router";

const scrolled = ref(false);

window.addEventListener("scroll", () => handleScroll());

onMounted(() => {
  window.scrollTo(0, 0);
  handleScroll();
});

const handleScroll = () => {
  if (window.scrollY > 2) {
    scrolled.value = true;
  } else {
    scrolled.value = false;
  }
};
</script>
