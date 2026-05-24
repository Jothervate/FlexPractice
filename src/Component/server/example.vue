<script setup>
  import { ArrowUpRight } from 'lucide-vue-next';
  import { assetUrl } from '../../utils/assetUrl';

  const caseStudies = [
    {
      id: 1,
      image: 'service/service_case_1.png',
      imageAlt: '品牌視覺案例圖片',
      categories: ['平面設計', '網頁設計'],
      date: 'Oct 16, 2022',
      title: '品牌視覺與電商整合，多肉植物品牌電商建置',
      description: '從品牌識別設計到 RWD 響應式網站開發，打造療癒系植栽購物體驗',
      href: '#',
    },
    {
      id: 2,
      image: 'service/service_case_2.png',
      imageAlt: '美妝產品案例圖片',
      categories: ['平面設計', '網頁設計', '前端切版'],
      date: 'Oct 16, 2022',
      title: '美妝產品 UI/UX 設計，個人化財務視覺化軟體',
      description: '運用數據視覺化邏輯，將複雜的財務數據轉化為直覺的個人化操作介面',
      href: '#',
    },
  ];
</script>

<template>
  <section class="bg-white px-3 py-10 md:px-10 md:py-20">
    <div class="mx-auto w-full max-w-[351px] md:max-w-[1088px]">
      <div class="mb-8 text-center md:mb-10 md:text-left">
        <p class="text-[11px] leading-none font-bold tracking-normal text-[#4A4A4A] uppercase">
          USER CASE
        </p>
        <h2 class="mt-1 text-[32px] leading-none font-bold text-[#2F2F2F] md:mt-2 md:text-[44px]">
          客戶案例
        </h2>
      </div>

      <div class="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-6">
        <article v-for="work in caseStudies" :key="work.id" class="group">
          <a :href="work.href" class="block">
            <div class="aspect-[351/218] w-full overflow-hidden bg-[#F2F0EC] md:aspect-[532/304]">
              <img
                v-if="work.image"
                :src="assetUrl(work.image)"
                :alt="work.imageAlt"
                class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <div class="mt-3 flex items-start justify-between gap-3 md:mt-5 md:gap-5">
              <div class="min-w-0 flex-1">
                <div
                  class="mb-2 flex flex-col items-start gap-2 text-[12px] leading-none font-bold text-[#535353] md:mb-3 md:flex-row md:items-center md:justify-between md:gap-4"
                >
                  <div class="order-2 md:order-1">
                    {{ work.categories.join('・') }}
                  </div>
                  <time
                    class="order-1 shrink-0 text-[12px] font-bold text-[#6E6E6E] md:order-2 md:text-[11px]"
                  >
                    {{ work.date }}
                  </time>
                </div>

                <h3
                  class="text-[24px] leading-[1.35] font-bold text-[#333333] transition-colors duration-200 group-hover:text-[#007fff] group-active:text-[#007fff] group-focus-within:text-[#007fff]"
                >
                  {{ work.title }}
                </h3>

                <p
                  class="mt-2 max-w-[292px] text-[13px] leading-[1.75] font-medium text-[#525252] md:mt-3 md:max-w-[450px] md:leading-[1.85]"
                >
                  {{ work.description }}
                </p>
              </div>

              <span
                class="mt-[116px] flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-3 bg-[#3B3B3B] text-white transition-colors duration-200 group-hover:border-orange-500 group-active:border-orange-500 md:mt-[52px]"
                aria-hidden="true"
              >
                <ArrowUpRight class="h-4 w-4" :stroke-width="2.4" />
              </span>
            </div>
          </a>
        </article>
      </div>
    </div>
  </section>
</template>
