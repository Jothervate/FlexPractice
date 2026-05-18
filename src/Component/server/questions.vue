<script setup>
  import { ref } from 'vue';
  import { ChevronDown } from 'lucide-vue-next';

  const questions = ref([
    {
      id: 1,
      title: '設計提案是否包含這次修改後的檔案？',
      content:
        '提案會整理本次討論後的設計方向、版面配置與交付項目，確認後會依照回饋調整，讓後續製作有清楚依據。',
      isOpen: false,
    },
    {
      id: 2,
      title: '結案後我會收到哪些格式的檔案？',
      content:
        '會依照專案內容提供可交付檔案，例如圖片、網頁素材、原始設計檔或前端檔案。實際格式會在報價與合約階段先確認。',
      isOpen: false,
    },
    {
      id: 3,
      title: '平面設計的成果，未來能直接使用在網頁嗎？',
      content:
        '沒問題。由於我兼具 UI/UX 設計與前端工程背景，在執行平面設計時會預先考量數位載體的適配性。這意味著您的品牌識別能無縫延伸至網頁介面，不僅能省去後續轉換的重製溝通，更能確保品牌在不同平台上的視覺一致。',
      isOpen: false,
    },
    {
      id: 4,
      title: '完成一套完整的設計流程需要多久？',
      content:
        '視專案複雜度而定，一般約需 10 到 14 個工作日。這包含前期討論、初稿發想與細節修正。若需求較完整、素材也準備齊全，時程通常可以更順暢。',
      isOpen: false,
    },
  ]);

  const toggleQuestion = (index) => {
    questions.value[index].isOpen = !questions.value[index].isOpen;
  };

  const beforeEnter = (el) => {
    el.style.height = '0';
    el.style.opacity = '0';
    el.style.transform = 'translateY(-6px)';
  };

  const enter = (el) => {
    requestAnimationFrame(() => {
      el.style.height = `${el.scrollHeight}px`;
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    });
  };

  const afterEnter = (el) => {
    el.style.height = 'auto';
  };

  const beforeLeave = (el) => {
    el.style.height = `${el.scrollHeight}px`;
    el.style.opacity = '1';
    el.style.transform = 'translateY(0)';
  };

  const leave = (el) => {
    requestAnimationFrame(() => {
      el.style.height = '0';
      el.style.opacity = '0';
      el.style.transform = 'translateY(-6px)';
    });
  };
</script>

<template>
  <section class="bg-brand-beige px-3 py-10 md:px-10 md:py-20">
    <div
      class="mx-auto flex w-full max-w-[351px] flex-col justify-between gap-8 md:max-w-[1088px] md:flex-row md:items-start md:justify-center md:gap-16"
    >
      <div class="flex-1 text-center md:text-left">
        <p class="text-[10px] leading-none font-bold tracking-normal text-[#3A3A3A] uppercase">
          FAQ
        </p>
        <h2 class="mt-1 text-[32px] leading-none font-bold text-[#333333] md:text-[44px]">
          常見問題
        </h2>
      </div>

      <div class="flex-1">
        <div class="border-b border-[#6D625B]">
          <article
            v-for="(question, index) in questions"
            :key="question.id"
            class="border-t border-[#6D625B]"
          >
            <button
              type="button"
              class="flex w-full cursor-pointer items-start justify-between gap-4 py-4 text-left md:gap-6 md:py-5"
              :aria-expanded="question.isOpen"
              @click="toggleQuestion(index)"
            >
              <span class="flex min-w-0 items-start gap-4 md:gap-5">
                <span
                  class="mt-[2px] shrink-0 text-[12px] leading-none font-bold text-[#55504C] md:text-[13px]"
                >
                  {{ question.id }}
                </span>
                <span
                  class="text-[13px] leading-[1.5] font-bold text-[#3B3835] md:text-[14px] md:leading-none"
                >
                  {{ question.title }}
                </span>
              </span>

              <ChevronDown
                class="mt-[2px] h-4 w-4 shrink-0 text-[#55504C] transition-transform duration-200"
                :class="{ 'rotate-180': question.isOpen }"
                :stroke-width="2"
                aria-hidden="true"
              />
            </button>

            <Transition
              name="faq-answer"
              @before-enter="beforeEnter"
              @enter="enter"
              @after-enter="afterEnter"
              @before-leave="beforeLeave"
              @leave="leave"
            >
              <div
                v-if="question.isOpen"
                class="overflow-hidden pb-6 pl-[38px] text-[12px] leading-[1.8] font-medium text-[#4D4945] md:pb-8 md:pl-[57px] md:text-[13px]"
              >
                {{ question.content }}
              </div>
            </Transition>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
  .faq-answer-enter-active,
  .faq-answer-leave-active {
    transition:
      height 280ms cubic-bezier(0.22, 1, 0.36, 1),
      opacity 220ms ease-out,
      transform 280ms cubic-bezier(0.22, 1, 0.36, 1);
  }
</style>
