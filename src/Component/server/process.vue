<script setup>
  const steps = [
    {
      title: '需求訪談與視覺定位',
      desc: '深度溝通品牌核心價值，確認目標受眾與視覺風格，制定符合商業邏輯的設計藍圖。',
    },
    {
      title: '概念發展與方案提案',
      desc: '將抽象概念具象化，提供多層次的設計提案，確保視覺語言精準傳遞品牌獨特魅力。',
    },
    {
      title: '匠心編排與細節校正',
      desc: '針對初稿進行多輪細緻微調，優化排版層次與色彩表現，追求美學與易讀性的完美平衡。',
    },
    {
      title: '專業檔案交付結案',
      desc: '提供完整原始碼與多樣格式輸出，並附上使用規範建議，確保品牌形象在各處始終如一。',
    },
  ];
</script>

<template>
  <section
    class="h-[705px] w-full bg-[#24140B] px-3 py-10 text-white md:h-[728px] md:px-10 md:py-20"
  >
    <div
      class="mx-auto grid w-full max-w-[351px] gap-8 md:max-w-[1088px] md:grid-cols-[420px_minmax(0,1fr)] md:gap-11"
    >
      <div class="text-center md:w-[220px] md:shrink-0 md:text-left">
        <p
          class="text-[10px] leading-none font-bold tracking-normal text-white uppercase md:text-[11px]"
        >
          SERVICE STEPS
        </p>
        <h2
          class="mt-1 text-[32px] leading-tight font-bold text-white md:text-[44px] md:leading-[1.08]"
        >
          服務流程
        </h2>
      </div>
      <ol
        class="relative space-y-[29px] pl-[37px] md:space-y-[51px] md:pl-[46px] md:before:absolute md:before:top-3 md:before:bottom-[78px] md:before:left-0 md:before:w-px md:before:bg-white/25"
      >
        <li v-for="(step, idx) in steps" :key="idx" class="relative">
          <!-- 圓圈數字 -->

          <div
            class="absolute top-0 -left-[46px] flex h-7 w-7 items-center justify-center rounded-full bg-white text-[12px] leading-none font-bold text-[#24140B] md:-left-[58px] md:h-6 md:w-6 md:text-[11px]"
          >
            {{ idx + 1 }}
          </div>
          <h3
            class="mb-[13px] text-[20px] leading-tight font-bold text-white md:mb-3 md:text-[24px]"
          >
            {{ step.title }}
          </h3>
          <p
            class="max-w-[286px] text-[12px] leading-[1.75] font-medium text-white/80 md:max-w-[560px] md:text-[13px] md:leading-[1.8]"
          >
            {{ step.desc }}
          </p>
        </li>
      </ol>
    </div>
  </section>
</template>
