<script setup>
  import { computed } from 'vue';
  import { assetUrl } from '../utils/assetUrl';

  // 1. 使用 defineProps 接收自定義內容
  const props = defineProps({
    bgImage: {
      type: String,
      default: 'subscription_bg.png',
    },
    mainImage: {
      type: String,
      default: 'subscription.png',
    },
  });

  const resolvedBgImage = computed(() => assetUrl(props.bgImage));
  const resolvedMainImage = computed(() => assetUrl(props.mainImage));
</script>

<template>
  <section class="relative flex w-full flex-col justify-center bg-gray-900 text-white md:px-4">
    <div class="absolute inset-0 z-0 opacity-40">
      <img :src="resolvedBgImage" class="h-full w-full object-cover" alt="background" />
    </div>

    <div class="relative z-10 mx-auto flex w-full max-w-[1296px] flex-col md:flex-row">
      <div class="h-64 w-full md:h-auto md:w-1/2">
        <img
          :src="resolvedMainImage"
          class="h-full w-full object-cover"
          alt="Subscription Illustration"
        />
      </div>

      <div class="flex w-full flex-col items-start justify-center p-8 md:w-1/2 md:p-16">
        <p class="mb-2 text-sm tracking-widest text-gray-300">電子報訂閱</p>
        <h1 class="mb-6 text-4xl leading-tight font-bold tracking-[0.1em] md:text-5xl">
          SUBSCRIPTION
        </h1>
        <p class="mb-8 max-w-md leading-relaxed text-gray-300">
          你也在追求設計美感與技術落地的完美平衡嗎？作為資深設計師兼工程師，我深知跨領域協作的痛點。訂閱電子報，我將分享如何利用
          AI 工具提升產能！
        </p>

        <div class="group relative w-full max-w-md">
          <input
            type="email"
            placeholder="電子信箱"
            class="w-full rounded-full border border-white/50 bg-transparent px-6 py-3 transition-colors outline-none focus:border-white"
          />
          <button
            class="absolute top-1.5 right-1.5 bottom-1.5 rounded-full bg-white px-6 font-bold text-black transition-colors hover:bg-gray-200"
          >
            送出
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped></style>
