<script setup>
  import { RouterLink } from 'vue-router';
</script>

<template>
  <section class="flex min-h-[calc(100vh-80px)] items-center bg-[#FDF7F1] px-3 py-16 md:px-10">
    <div class="mx-auto grid w-full max-w-[1296px] gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-center">
      <div class="flex flex-col gap-6 text-[#2A1F1C]">
        <p class="text-[18px] leading-none font-black tracking-[0.16em] text-[#7A6A5E] md:text-[24px]">
          404 ERROR
        </p>

        <div class="flex flex-col gap-4">
          <h1 class="text-[48px] leading-[1.05] font-black md:text-[96px]">PAGE NOT FOUND</h1>
          <p class="max-w-[560px] text-[16px] leading-[1.8] font-medium text-[#5B514B] md:text-[18px]">
            找不到這個頁面，可能是網址輸入錯誤，或這個內容已經移動到其他位置。
          </p>
        </div>

        <div class="flex flex-wrap gap-3">
          <RouterLink
            to="/"
            class="inline-flex min-h-[44px] items-center justify-center rounded-full bg-[#2A1F1C] px-6 text-[14px] font-bold text-white transition-colors hover:bg-[#4A3A32]"
          >
            回到首頁
          </RouterLink>
          <RouterLink
            to="/project"
            class="inline-flex min-h-[44px] items-center justify-center rounded-full border border-[#2A1F1C] px-6 text-[14px] font-bold text-[#2A1F1C] transition-colors hover:bg-[#2A1F1C] hover:text-white"
          >
            查看專案
          </RouterLink>
        </div>
      </div>

      <div class="relative hidden min-h-[360px] overflow-hidden bg-[#2A1F1C] md:block">
        <div class="absolute inset-x-10 top-10 h-[110px] bg-[#FDF7F1]"></div>
        <div class="absolute top-[150px] right-10 left-24 h-[80px] bg-[#CDBAA8]"></div>
        <div class="absolute right-24 bottom-16 left-10 h-[96px] bg-white"></div>
        <p
          class="absolute right-8 bottom-4 text-[128px] leading-none font-black tracking-normal text-white/20"
          aria-hidden="true"
        >
          404
        </p>
      </div>
    </div>
  </section>
</template>
