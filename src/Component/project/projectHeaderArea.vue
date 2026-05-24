<script setup>
  import { computed } from 'vue';
  import { assetUrl } from '../../utils/assetUrl';

  const props = defineProps({
    titleEn: {
      type: String,
      default: 'PROJECTS',
    },
    titleZh: {
      type: String,
      default: '專案作品',
    },
    desktopImg: {
      type: String,
      required: true,
    },
    mobileImg: {
      type: String,
      required: true,
    },
  });

  const resolvedDesktopImg = computed(() => assetUrl(props.desktopImg));
  const resolvedMobileImg = computed(() => assetUrl(props.mobileImg));
</script>

<template>
  <section class="relative w-full overflow-hidden bg-[#FDF7F1]">
    <!-- 桌機版 Hero -->
    <div
      class="relative hidden h-[380px] w-full items-center justify-center bg-cover bg-center md:flex"
      :style="{ backgroundImage: `url(${resolvedDesktopImg})` }"
    >
      <!-- 深色遮罩 -->
      <div class="absolute inset-0 bg-black/40"></div>

      <!-- 桌機文字 -->
      <div class="relative z-10 text-center text-white">
        <h1 class="text-[80px] leading-none font-bold tracking-wide">
          {{ titleEn }}
        </h1>

        <p class="mt-4 text-[48px] leading-none font-bold">
          {{ titleZh }}
        </p>
      </div>
    </div>

    <!-- 手機版 Hero -->
    <div class="flex min-h-[380px] items-center justify-center px-3 md:hidden">
      <div class="relative h-[280px] w-full max-w-[351px] overflow-hidden rounded-none">
        <img :src="resolvedMobileImg" :alt="titleZh" class="h-full w-full object-cover" />

        <!-- 深色遮罩 -->
        <div class="absolute inset-0 bg-black/40"></div>

        <!-- 手機文字 -->
        <div
          class="absolute inset-0 flex flex-col items-center justify-center text-center text-white"
        >
          <h1 class="text-[40px] leading-none font-bold tracking-wide">
            {{ titleEn }}
          </h1>

          <p class="mt-2 text-[40px] leading-none font-bold">
            {{ titleZh }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
