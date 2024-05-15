<template>
  <div className="sticky top-0 w-full z-50">
    <nav>
      <div
        class="flex flex-row min-h-16 bg-white"
        :class="{ 'bg-gray-200 border-b border-b-gray-300': scrolled }"
      >
        <div class="basis-40 m-auto px-5 py-2">
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
          <h2 class="text-2xl font-medium text-center">網域與 DNS</h2>
        </div>
        <div class="basis-40"></div>
      </div>
    </nav>
  </div>
  <main ref="main">
    <div class="py-2 px-5 md:px-20 lg:px-30">
      <h3 class="text-2xl font-medium mb-4">網域名稱系統 (DNS)</h3>
      <p class="text-lg">
        網域名稱系統 (Domain Name System, DNS) 是一個用於將網站域名轉換為對應 IP
        地址的分散式命名系統。它允許用戶通過易於記憶的域名訪問網站，而不需要記住複雜的 IP
        地址。
      </p>
      <p class="text-lg">
        DNS 由一個層次結構的域名空間組成，每個域名都對應著一個 IP
        地址。當用戶在瀏覽器中輸入一個域名時，瀏覽器會向 DNS
        服務器發送請求，詢問該域名對應的 IP 地址。DNS
        服務器會根據域名的層次結構進行查找，最終返回對應的 IP
        地址給瀏覽器，使其能夠建立與該網站的連接。
      </p>
      <h3 class="text-2xl font-medium mt-8 mb-4">網域</h3>
      <p class="text-lg">
        網域是網絡上的一個組織單位，它由一個或多個主機組成，這些主機共享相同的域名後綴。網域名稱通常由多個部分組成，以點分隔，例如
        "example.com"。網域名稱的最後一部分稱為頂級域名 (Top-Level Domain, TLD)，例如
        ".com"、".org" 等。
      </p>
      <p class="text-lg">
        網域名稱的結構是層次化的，從右到左依次為頂級域名、次級域名、子域名等。例如，"www.example.com"
        中的 "com" 是頂級域名，"example" 是次級域名，"www" 是子域名。
      </p>
      <h3 class="text-2xl font-medium mb-4">網域名稱系統 (DNS)</h3>
      <p class="text-lg">
        網域名稱系統 (Domain Name System, DNS) 是一個用於將網站域名轉換為對應 IP
        地址的分散式命名系統。它允許用戶通過易於記憶的域名訪問網站，而不需要記住複雜的 IP
        地址。
      </p>
      <p class="text-lg">
        DNS 由一個層次結構的域名空間組成，每個域名都對應著一個 IP
        地址。當用戶在瀏覽器中輸入一個域名時，瀏覽器會向 DNS
        服務器發送請求，詢問該域名對應的 IP 地址。DNS
        服務器會根據域名的層次結構進行查找，最終返回對應的 IP
        地址給瀏覽器，使其能夠建立與該網站的連接。
      </p>
      <h3 class="text-2xl font-medium mt-8 mb-4">網域</h3>
      <p class="text-lg">
        網域是網絡上的一個組織單位，它由一個或多個主機組成，這些主機共享相同的域名後綴。網域名稱通常由多個部分組成，以點分隔，例如
        "example.com"。網域名稱的最後一部分稱為頂級域名 (Top-Level Domain, TLD)，例如
        ".com"、".org" 等。
      </p>
      <p class="text-lg">
        網域名稱的結構是層次化的，從右到左依次為頂級域名、次級域名、子域名等。例如，"www.example.com"
        中的 "com" 是頂級域名，"example" 是次級域名，"www" 是子域名。
      </p>
      <h3 class="text-2xl font-medium mb-4">網域名稱系統 (DNS)</h3>
      <p class="text-lg">
        網域名稱系統 (Domain Name System, DNS) 是一個用於將網站域名轉換為對應 IP
        地址的分散式命名系統。它允許用戶通過易於記憶的域名訪問網站，而不需要記住複雜的 IP
        地址。
      </p>
      <p class="text-lg">
        DNS 由一個層次結構的域名空間組成，每個域名都對應著一個 IP
        地址。當用戶在瀏覽器中輸入一個域名時，瀏覽器會向 DNS
        服務器發送請求，詢問該域名對應的 IP 地址。DNS
        服務器會根據域名的層次結構進行查找，最終返回對應的 IP
        地址給瀏覽器，使其能夠建立與該網站的連接。
      </p>
      <h3 class="text-2xl font-medium mt-8 mb-4">網域</h3>
      <p class="text-lg">
        網域是網絡上的一個組織單位，它由一個或多個主機組成，這些主機共享相同的域名後綴。網域名稱通常由多個部分組成，以點分隔，例如
        "example.com"。網域名稱的最後一部分稱為頂級域名 (Top-Level Domain, TLD)，例如
        ".com"、".org" 等。
      </p>
      <p class="text-lg">
        網域名稱的結構是層次化的，從右到左依次為頂級域名、次級域名、子域名等。例如，"www.example.com"
        中的 "com" 是頂級域名，"example" 是次級域名，"www" 是子域名。
      </p>
      <h3 class="text-2xl font-medium mb-4">網域名稱系統 (DNS)</h3>
      <p class="text-lg">
        網域名稱系統 (Domain Name System, DNS) 是一個用於將網站域名轉換為對應 IP
        地址的分散式命名系統。它允許用戶通過易於記憶的域名訪問網站，而不需要記住複雜的 IP
        地址。
      </p>
      <p class="text-lg">
        DNS 由一個層次結構的域名空間組成，每個域名都對應著一個 IP
        地址。當用戶在瀏覽器中輸入一個域名時，瀏覽器會向 DNS
        服務器發送請求，詢問該域名對應的 IP 地址。DNS
        服務器會根據域名的層次結構進行查找，最終返回對應的 IP
        地址給瀏覽器，使其能夠建立與該網站的連接。
      </p>
      <h3 class="text-2xl font-medium mt-8 mb-4">網域</h3>
      <p class="text-lg">
        網域是網絡上的一個組織單位，它由一個或多個主機組成，這些主機共享相同的域名後綴。網域名稱通常由多個部分組成，以點分隔，例如
        "example.com"。網域名稱的最後一部分稱為頂級域名 (Top-Level Domain, TLD)，例如
        ".com"、".org" 等。
      </p>
      <p class="text-lg">
        網域名稱的結構是層次化的，從右到左依次為頂級域名、次級域名、子域名等。例如，"www.example.com"
        中的 "com" 是頂級域名，"example" 是次級域名，"www" 是子域名。
      </p>
      <h3 class="text-2xl font-medium mb-4">網域名稱系統 (DNS)</h3>
      <p class="text-lg">
        網域名稱系統 (Domain Name System, DNS) 是一個用於將網站域名轉換為對應 IP
        地址的分散式命名系統。它允許用戶通過易於記憶的域名訪問網站，而不需要記住複雜的 IP
        地址。
      </p>
      <p class="text-lg">
        DNS 由一個層次結構的域名空間組成，每個域名都對應著一個 IP
        地址。當用戶在瀏覽器中輸入一個域名時，瀏覽器會向 DNS
        服務器發送請求，詢問該域名對應的 IP 地址。DNS
        服務器會根據域名的層次結構進行查找，最終返回對應的 IP
        地址給瀏覽器，使其能夠建立與該網站的連接。
      </p>
      <h3 class="text-2xl font-medium mt-8 mb-4">網域</h3>
      <p class="text-lg">
        網域是網絡上的一個組織單位，它由一個或多個主機組成，這些主機共享相同的域名後綴。網域名稱通常由多個部分組成，以點分隔，例如
        "example.com"。網域名稱的最後一部分稱為頂級域名 (Top-Level Domain, TLD)，例如
        ".com"、".org" 等。
      </p>
      <p class="text-lg">
        網域名稱的結構是層次化的，從右到左依次為頂級域名、次級域名、子域名等。例如，"www.example.com"
        中的 "com" 是頂級域名，"example" 是次級域名，"www" 是子域名。
      </p>
      <h3 class="text-2xl font-medium mb-4">網域名稱系統 (DNS)</h3>
      <p class="text-lg">
        網域名稱系統 (Domain Name System, DNS) 是一個用於將網站域名轉換為對應 IP
        地址的分散式命名系統。它允許用戶通過易於記憶的域名訪問網站，而不需要記住複雜的 IP
        地址。
      </p>
      <p class="text-lg">
        DNS 由一個層次結構的域名空間組成，每個域名都對應著一個 IP
        地址。當用戶在瀏覽器中輸入一個域名時，瀏覽器會向 DNS
        服務器發送請求，詢問該域名對應的 IP 地址。DNS
        服務器會根據域名的層次結構進行查找，最終返回對應的 IP
        地址給瀏覽器，使其能夠建立與該網站的連接。
      </p>
      <h3 class="text-2xl font-medium mt-8 mb-4">網域</h3>
      <p class="text-lg">
        網域是網絡上的一個組織單位，它由一個或多個主機組成，這些主機共享相同的域名後綴。網域名稱通常由多個部分組成，以點分隔，例如
        "example.com"。網域名稱的最後一部分稱為頂級域名 (Top-Level Domain, TLD)，例如
        ".com"、".org" 等。
      </p>
      <p class="text-lg">
        網域名稱的結構是層次化的，從右到左依次為頂級域名、次級域名、子域名等。例如，"www.example.com"
        中的 "com" 是頂級域名，"example" 是次級域名，"www" 是子域名。
      </p>
    </div>
  </main>
</template>
<script setup lang="ts">
import { ref, onMounted } from "vue";
import { RouterLink } from "vue-router";

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
