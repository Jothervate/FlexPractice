<script setup>
  import { Instagram, LineChartIcon, Linkedin, Mail } from 'lucide-vue-next';
</script>

<template>
  <section class="bg-[#1A110A] px-4 py-8 text-white">
    <div class="mx-auto grid max-w-[1296px] grid-cols-1 gap-10 md:grid-cols-2 md:gap-x-32">
      <div class="order-1 flex flex-col justify-start">
        <p class="mb-2 text-sm tracking-widest text-gray-400">與我聯絡</p>
        <h1 class="mb-6 text-[48px] leading-none font-bold tracking-[0.1em] md:text-[80px]">
          CONTACT
        </h1>
        <div class="space-y-1 text-lg">
          <p>若有數位產品設計和開發相關問題</p>
          <p>歡迎填寫表單 或 直接與我聯絡！</p>
        </div>
      </div>

      <div class="order-2 w-full max-w-[600px] justify-self-end md:row-span-2">
        <form class="flex flex-col gap-[16px] md:gap-[24px]">
          <div class="flex flex-col gap-[16px] md:flex-row md:gap-[24px]">
            <div class="flex-1">
              <input
                type="text"
                placeholder="姓名"
                class="w-full rounded-full border border-white/30 bg-transparent px-6 py-4 transition-colors outline-none focus:border-white"
              />
            </div>
            <div class="flex-1">
              <input
                type="text"
                placeholder="手機號碼"
                class="w-full rounded-full border border-white/30 bg-transparent px-6 py-4 transition-colors outline-none focus:border-white"
              />
            </div>
          </div>
          <input
            type="email"
            placeholder="電子信箱"
            class="w-full rounded-full border border-white/30 bg-transparent px-6 py-4 transition-colors outline-none focus:border-white"
          />
          <textarea
            placeholder="備註"
            rows="4"
            class="w-full resize-none rounded-[2rem] border border-white/30 bg-transparent px-6 py-4 transition-colors outline-none focus:border-white"
          ></textarea>
          <button
            type="submit"
            class="w-full rounded-full bg-white py-4 font-bold text-black transition-all hover:bg-gray-200 active:scale-[0.98]"
          >
            送出
          </button>
        </form>
      </div>

      <div class="order-3 mt-4 md:mt-0">
        <div class="mb-6 flex flex-row gap-[12px] pt-[16px] md:gap-[24px]">
          <a
            href="#"
            class="flex h-10 w-10 items-center justify-center rounded-full border border-white text-white transition-all duration-200 hover:border-[#ff00d0] hover:bg-[#ff00d0] hover:text-black active:border-[#ff00d0] active:bg-[#ff00d0] active:text-black"
          >
            <Instagram :size="20" />
          </a>
          <a
            href="#"
            class="flex h-10 w-10 items-center justify-center rounded-full border border-white text-white transition-all duration-200 hover:border-[#06C755] hover:bg-[#06C755] hover:text-white active:border-[#06C755] active:bg-[#06C755] active:text-white"
          >
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
              <path
                d="M24 10.304c0-5.369-5.383-9.738-12-9.738s-12 4.369-12 9.738c0 4.814 4.269 8.846 10.036 9.608.391.084.922.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975 1.768-2.001 2.547-3.92 2.547-5.968z"
              />
            </svg>
          </a>
          <a
            href="#"
            class="flex h-10 w-10 items-center justify-center rounded-full border border-white text-white transition-all duration-200 hover:border-[#007fff] hover:bg-[#007fff] hover:text-black active:border-[#007fff] active:bg-[#007fff] active:text-black"
          >
            <Linkedin :size="20" />
          </a>
        </div>
        <div class="flex items-center gap-3 text-gray-300">
          <Mail :size="18" />
          <span class="text-sm">service@hexschool.com</span>
        </div>
      </div>
    </div>
  </section>
</template>
