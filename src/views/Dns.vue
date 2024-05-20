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
          <h2 class="text-2xl font-medium text-center">網域與 DNS</h2>
        </div>
        <div class="basis-40">
        </div>
      </div>
    </nav>
  </div>

  <!-- toggle botton -->
  <div class="fixed bottom-12 left-5 z-30 transition-transform duration-500 ease-in-out lg:scale-0"
    :class="{ 'translate-x-72': showMenu }">
    <button @click="toggleMenu" class=" bg-gray-200  text-sky-500 shadow-lg h-20 w-20 rounded-full">
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
        <a href="#什麼是網域" @click="closeMenu" class=" text-sky-500 hover:text-sky-300">什麼是網域</a>
      </li>
      <hr>
      <li class="text-lg py-2">
        <a href="#常見的頂級域名" @click="closeMenu" class=" text-sky-500 hover:text-sky-300">常見的頂級域名</a>
      </li>
      <hr>
      <li class="text-lg py-2">
        <a href="#子網域與子目錄" @click="closeMenu" class=" text-sky-500 hover:text-sky-300">子網域與子目錄</a>
      </li>
      <hr>
      <li class="text-lg py-2">
        <a href="#如何獲取網域" @click="closeMenu" class=" text-sky-500 hover:text-sky-300">如何獲取網域</a>
      </li>
      <hr>
      <li class="text-lg py-2">
        <a href="#網域的重要性" @click="closeMenu" class=" text-sky-500 hover:text-sky-300">網域的重要性</a>
      </li>
      <hr>
      <li class="text-lg py-2">
        <a href="#什麼是DNS" @click="closeMenu" class=" text-sky-500 hover:text-sky-300">什麼是DNS</a>
      </li>
      <hr>
      <li class="text-lg py-2">
        <a href="#DNS 伺服器的類型" @click="closeMenu" class=" text-sky-500 hover:text-sky-300">DNS 伺服器的類型</a>
      </li>
      <hr>
      <li class="text-lg py-2">
        <a href="#DNS 解析流程" @click="closeMenu" class=" text-sky-500 hover:text-sky-300">DNS 解析流程</a>
      </li>
      <hr>
      <li class="text-lg py-2">
        <a href="#常見的 DNS record" @click="closeMenu" class=" text-sky-500 hover:text-sky-300">常見的 DNS record</a>
      </li>
    </ul>
  </div>
  <!-- page -->
  <main class="bg-gray-100">
    <div class="py-2 px-5 md:px-20 lg:ps-80 lg:pe-30 transition-all duration-500 ease-in-out">
      <h3 class="text-2xl font-medium mt-10 mb-2 px-2" id="什麼是網域">什麼是網域</h3>
      <div class=" bg-white p-4 rounded-xl">
        <p class="text-lg">
          簡單來說，網域名稱是用來識別網站和網路資源的人類可讀標識。它們通常由一個主要名稱和一個或多個子名稱組成，以點分隔。<br>
          例如：在網址「webintro.ycystudio.me」中，「ycystudio.me」就是網域名稱。
        </p>
        <div class="p-4">
          <img src="/domain/1.svg" alt="">
        </div>
        <p class="text-lg">
          網域名稱是用戶訪問網站和網路資源的主要方式之一。它們提供了一個容易記住和使用的方式來訪問網站，而不是依賴於 IP 位址。<br>
          例如：「webintro.ycystudio.me」的IP位置為「104.21.78.7」，前者相對於後者更容易記住和使用。
        </p>
      </div>
      <h3 class="text-2xl font-medium mt-10 mb-2 px-2" id="常見的頂級域名">常見的頂級域名</h3>
      <div class=" bg-white p-4 rounded-xl">
        <p class="text-lg">
          網域名稱的結構是分層次的，通常以頂級域名（TLD）開始，例如「.com」、「.org」、「.net」、「.me」等。其後是二級域名（SLD），例如「ycystudio」。有時候還可以有三級域名、四級域名，以此類推，形成更長的網域名稱。
        </p>
      </div>
      <h3 class="text-2xl font-medium mt-10 mb-2 px-2" id="子網域與子目錄">子網域與子目錄</h3>
      <div class=" bg-white p-4 rounded-xl">
        <p class="text-lg">
          子網域 (Subdomain) 是網域名稱的一部分，通常用於區分網站的「不同部分或功能」。例如，"blog.example.com"
          中的 "blog" 就是一個子網域。<br>
          子目錄 (Subdirectory) 則是網站中的一個目錄，通常用於「組織網站的內容」。例如，
          "webintro.ycystudio.me/domain-dns" 中的 "/domain-dns" 就是一個子目錄。
        </p>
      </div>
      <h3 class="text-2xl font-medium mt-10 mb-2 px-2" id="如何獲取網域">如何獲取網域</h3>
      <div class=" bg-white p-4 rounded-xl">
        <p class="text-lg">
          網域名稱可以通過向網域名稱註冊機構註冊來取得。這些註冊機構（例如 ICANN、GoDaddy、Namecheap、Cloudflare 等）負責管理和分配網域名稱，並收取相應的註冊費用。
        </p>
        <div class="bg-amber-300 rounded border-s-4 border-amber-600 p-3 m-2">
          台灣地區的網域名稱可以透過「TWNIC」註冊。透過國內註冊商也可以取得國際網域名稱，但是價格通常高許多。
        </div>
      </div>
      <h3 class="text-2xl font-medium mt-10 mb-2 px-2" id="網域的重要性">網域的重要性</h3>
      <div class=" bg-white p-4 rounded-xl">
        <p class="text-lg">
          網域名稱是網站和網路資源的身份識別。一個好的網域名稱可以提高網站的品牌認知度、易記性和搜索引擎排名，因此在選擇網域名稱時需要仔細考慮。
        </p>
      </div>
      <h3 class="text-2xl font-medium mt-10 mb-2 px-2" id="什麼是DNS">什麼是DNS</h3>
      <div class=" bg-white p-4 rounded-xl">
        <p class="text-lg">
          DNS（Domain Name System）是一個分散式的、用於將網域名稱轉換為對應 IP 位址的系統。它是網路上最重要的基礎設施之一，負責將易於記憶的網址轉換為網路設備之間可以理解的數字地址。
        </p>
      </div>
      <h3 class="text-2xl font-medium mt-10 mb-2 px-2" id="DNS 伺服器的類型">DNS 伺服器的類型</h3>
      <div class=" bg-white p-4 rounded-xl">
        <p class="text-lg">
          DNS 遞迴程式：<br>
          遞迴程式可視為被要求前往圖書館某處尋找特定書籍的圖書館員。DNS 遞迴程式是一種伺服器，其設計是為了透過網頁瀏覽器等應用程式接收來自用戶端機器的查詢。通常遞迴程式隨後會負責進行其他請求，以便滿足用戶端的 DNS 查詢。<br>
          <br>
          根名稱伺服器： <br>
          根伺服器是將人們可讀的主機名稱轉譯 (解析) 為 IP 位址的第一個步驟。可將其視為指向不同書架的圖書館中的索引 - 一般其作為對其他更具體位置的引用。 <br>
          <br>
          TLD 名稱伺服器：<br>
          頂層網域名稱伺服器（TLD）可看做是圖書館中一個特殊的書架。此名稱伺服器是搜尋特定 IP 位址的下一步，其代管主機名稱的最後一部分（例如，在 example.com 中，TLD 伺服器為「com」)。<br>
          <br>
          權威名稱伺服器：<br>
          這個最終名稱伺服器可視為書架上的字典，其中特定名稱可轉譯為其定義。權威名稱伺服器是名稱伺服器查詢中的最後一站。如果權威名稱伺服器能夠存取請求的記錄，則其會將已請求主機名稱的 IP 位址傳回到發出初始請求的 DNS
          解析程式 (圖書管理員)。
        </p>
      </div>
      <h3 class="text-2xl font-medium mt-10 mb-2 px-2" id="DNS 解析流程">DNS 解析流程</h3>
      <div class=" bg-white p-4 rounded-xl">
        <p class="text-lg">
          當您在瀏覽器中輸入一個網址時，瀏覽器會向 DNS 伺服器發送查詢，詢問該域名對應的 IP 地址。DNS
          伺服器將查詢轉發給其他伺服器，直到找到正確的 IP 地址為止。一旦找到 IP 地址，瀏覽器就可以通過該地址訪問網站。<br>
          <br>
          詳細的 DNS 解析流程如下：<br>
        <ol class="list-decimal list-outside ms-4">
          <li class="py-2">在瀏覽器的網址列中輸入網域名稱</li>
          <li class="py-2">輸入後，瀏覽器就會像網路傳送訊息，查詢網域名稱屬於哪個IP位址</li>
          <li class="py-2">DNS 遞迴解析程式會收到該查詢。如果遞迴伺服器的 DNS 快取中沒有儲存必要的 IP 資料，其會向根名稱伺服器或 TLD 名稱伺服器傳送更多查詢。</li>
          <li class="py-2">根名稱伺服器和 TLD 名稱伺服器接收查詢，並聯合作業縮小查找正確 IP 位址詳細資料的範圍。</li>
          <li class="py-2">最終的資料點是權威名稱伺服器，可於該處找到準確的網域和 IP 詳細資料。</li>
          <li class="py-2">IP 位址資訊會被轉發回遞迴解析程式，進而向瀏覽器提供要造訪的正確 IP 位址。DNS 解析程式會記錄 DNS 快取，以便使用者下次造訪相關網站。</li>
        </ol>
        </p>
      </div>
      <h3 class="text-2xl font-medium mt-10 mb-2 px-2" id="常見的 DNS record">常見的 DNS record</h3>
      <div class=" bg-white p-4 rounded-xl">
        <p class="text-lg">
          DNS 記錄 (DNS Record) 是 DNS 伺服器中存儲的資訊，用於將域名映射到 IP 地址、郵件伺服器、子網域等。常見的 DNS
          記錄包括：
        <ul class="list-disc list-outside ms-4">
          <li class="py-2">A (Address) Record: 將域名映射到 IP 地址</li>
          <li class="py-2">CNAME (Canonical Name) Record: 將域名映射到另一個域名</li>
          <li class="py-2">MX (Mail Exchange) Record: 指定郵件伺服器</li>
          <li class="py-2">TXT (Text) Record: 存儲任意文本資訊</li>
          <li class="py-2">NS (Name Server) Record: 指定域名伺服器</li>
        </ul>
        </p>
      </div>
    </div>
    <div class=" h-10"></div>
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