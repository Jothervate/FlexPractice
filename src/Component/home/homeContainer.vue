<script setup>
  import serviceCard from './serviceCard.vue';
  import ProjectCard from './ProjectCard.vue';
  import BlogsCard from './BlogsCard.vue';
  // 2. ⚠️ 關鍵：父元件也必須引入這些 Icon，才能把它們當作變數傳給子元件！
  import { PaintBucket, Monitor, LayoutTemplate, Server } from 'lucide-vue-next';
</script>
<template>
  <!-- SERVICES 區塊 -->
  <section class="w-full bg-[#2A1F1C] px-[20px] py-[40px] text-white md:px-[40px] md:py-[80px]">
    <div class="mx-auto max-w-[1296px] px-[8px] py-[16px] md:px-0 md:py-0">
      <div class="mb-8">
        <p class="text-[14px] font-medium tracking-widest text-white md:text-[16px]">服務項目</p>
        <h2 class="text-[40px] font-bold tracking-widest uppercase md:text-[80px]">Services</h2>
      </div>
      <div
        class="flex snap-x flex-row gap-[12px] overflow-x-auto pb-4 md:snap-none md:gap-[24px] md:overflow-x-visible"
      >
        <serviceCard
          class="snap-start"
          :icon="PaintBucket"
          engTitle="graphic"
          title="平面設計"
          content="從品牌識別到視覺傳達，用專業設計精準傳遞核心價值"
        />
        <serviceCard
          class="snap-start"
          :icon="Monitor"
          engTitle="webside"
          title="網頁設計"
          content="美感應用並重，以 FIGMA 打造符合直覺的數位體驗"
        />
        <serviceCard
          class="snap-start"
          :icon="LayoutTemplate"
          engTitle="frontend"
          title="前端切版"
          content="精準轉譯設計稿細節，建構流暢穩定 RMD 響應式網頁"
        />
        <serviceCard
          class="snap-start"
          :icon="Server"
          engTitle="backend"
          title="後端開發"
          content="佈署穩定系統架構，串接API並確保數據安全"
        />
         
      </div>
    </div>
  </section>

  <!-- PROJECTS 區塊 -->
  <section class="w-full bg-[#F9F8F6] text-[#2A1F1C]">
    <div class="mx-auto max-w-[1296px] px-[8px] py-[16px] md:px-8 md:py-20">
      <!-- 標題 -->
      <div class="mb-10 text-center md:mb-16">
        <p class="mb-2 text-sm font-medium tracking-widest text-gray-500">專案作品</p>
        <h2 class="text-4xl font-bold tracking-widest uppercase md:text-5xl">Projects</h2>
      </div>

      <!-- 容器：flex-col -->
      <div class="flex flex-col gap-8 md:gap-12">
        <!-- 卡片預留區 (後續一起生成) -->
        <ProjectCard
          imgSrc="home/project_1.png"
          mobileImgSrc="home/mobile/project_1.png"
          date="Oct 16, 2025"
          :type="['平面設計', '網頁設計']"
          title="品牌視覺與電商整合，多肉植物品牌電商建置"
          content="從品牌識別設計到 RWD 網站開發，打造療癒系植栽購物體驗"
        />

        <ProjectCard
          imgSrc="home/project_2.png"
          mobileImgSrc="home/mobile/project_2.png"
          date="Oct 16, 2025"
          :type="['平面設計', '網頁設計', '前端切版']"
          title="數位產品 UI/UX 設計，個人化財務視覺化軟體"
          content="運用數據視覺化邏輯，將複雜的財務數據轉化為直覺的操作介面"
        />

        <ProjectCard
          imgSrc="home/project_3.png"
          mobileImgSrc="home/mobile/project_3.png"
          date="Oct 16, 2025"
          :type="['前端切版', '後端開發']"
          title="品牌識別與包裝設計，法式甜點品牌視覺重塑"
          content="以溫暖、輕盈的視覺語言，精準定位高質感甜點市場的品牌形象"
        />
      </div>

      <!-- 按鈕 -->
      <div class="mt-12 flex justify-center">
        <button
          class="rounded-full bg-[#4A4A4A] px-8 py-3 text-sm tracking-wider text-white transition-colors hover:bg-[#2A1F1C]"
        >
          探索更多
        </button>
      </div>
    </div>
  </section>

  <!-- BLOGS 區塊 -->
  <section class="w-full bg-[#F9F8F6] text-[#2A1F1C]">
    <div class="mx-auto max-w-[1296px] px-[8px] py-[16px] md:px-8 md:py-20">
      <!-- 標題與按鈕區塊 -->
      <div class="mb-8 flex items-end justify-between md:mb-12">
        <div>
          <p class="mb-2 text-sm font-medium tracking-widest text-gray-500">部落格</p>
          <h2 class="text-4xl font-bold tracking-widest uppercase md:text-5xl">Blogs</h2>
        </div>
        <!-- 桌機版按鈕 -->
        <button
          class="hidden rounded-full border border-[#2A1F1C] px-8 py-2.5 text-sm tracking-wider text-[#2A1F1C] transition-colors hover:bg-[#2A1F1C] hover:text-white md:block"
        >
          探索更多
        </button>
      </div>

      <!-- 容器：flex-row (加上水平滾動以防手機版破版) -->
      <div
        class="flex snap-x flex-row gap-4 overflow-x-auto pb-4 md:snap-none md:gap-6 md:overflow-x-visible"
      >
        <BlogsCard
          imgSrc="home/blog_2.png"
          :type="['UIUX 設計', '設計規範', '前端技術']"
          title="10年職人手記：如何運用 Figma 與 Storybook 打造美感與邏輯兼具的企業級設計系統"
          content="深入探討如何整合設計工具與開發環境，建立一套可擴充且具備高度一致性的企業級設計語言。"
          date="Oct 16, 2022"
          :views="110"
          :shares="2"
        />

        <BlogsCard
          imgSrc="home/blog_3.png"
          :type="['品牌設計', '平面設計', 'UIUX 設計']"
          title="從平面識別到數位體驗：以「植感生活」為例，探討跨媒體品牌視覺在網頁上的精準轉譯"
          content="分析品牌識別如何跨越媒介限制，在網頁數位環境中完整延續其美學價值與品牌的核心故事。"
          date="Oct 16, 2022"
          :views="110"
          :shares="2"
        />

        <BlogsCard
          imgSrc="home/blog_5.png"
          :type="['前端技術', '後端架構', 'AI 趨勢應用']"
          title="揭開金融 App 的設計密碼：如何優化 Open Bank API 的複雜數據呈現與後端串接安全性"
          content="剖析金融科技的核心挑戰，結合數據視覺化與後端安全機制，打造高效能且安全的行動支付體驗。"
          date="Oct 16, 2022"
          :views="110"
          :shares="2"
        />
      </div>

      <!-- 手機版按鈕 -->
      <div class="mt-8 flex justify-center md:hidden">
        <button
          class="rounded-full border border-[#2A1F1C] px-8 py-2.5 text-sm tracking-wider text-[#2A1F1C] transition-colors hover:bg-[#2A1F1C] hover:text-white"
        >
          探索更多
        </button>
      </div>
    </div>
  </section>
</template>
