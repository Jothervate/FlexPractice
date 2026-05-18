<script setup>
  import { computed } from 'vue';
  import { assetUrl } from '../../utils/assetUrl';

  const props = defineProps({
    imgSrc: {
      type: String,
      default: '',
    },
    mobileImgSrc: {
      type: String,
      default: '',
    },
    date: {
      type: String,
      default: 'Oct 16 , 2025',
    },
    type: {
      type: Array,
      default: () => [],
    },
    title: {
      type: String,
      default: '',
    },
    content: {
      type: String,
      default: '',
    },
    mobileObjectPosition: {
      type: String,
      default: 'center center',
    },
    desktopObjectPosition: {
      type: String,
      default: 'center center',
    },
  });

  const resolvedImgSrc = computed(() => assetUrl(props.imgSrc));
  const resolvedMobileImgSrc = computed(() => assetUrl(props.mobileImgSrc));
</script>

<template>
  <div
    class="relative aspect-[351/580] w-full max-w-[351px] overflow-hidden md:aspect-auto md:h-[580px] md:max-w-[1296px]"
  >
    <picture class="absolute inset-0 block h-full w-full">
      <source v-if="props.mobileImgSrc" media="(max-width: 767px)" :srcset="resolvedMobileImgSrc" />
      <img
        :src="resolvedImgSrc"
        alt="ProjectImg"
        class="h-full w-full object-cover [object-position:var(--project-mobile-position)] md:[object-position:var(--project-desktop-position)]"
        :style="{
          '--project-mobile-position': props.mobileObjectPosition,
          '--project-desktop-position': props.desktopObjectPosition,
        }"
      />
    </picture>

    <div
      class="absolute bottom-4 left-1/2 flex w-[calc(100%-32px)] max-w-[351px] -translate-x-1/2 flex-col items-center justify-center gap-[12px] bg-[#FDF7F1] p-[24px] text-center md:top-1/2 md:bottom-auto md:left-12 md:translate-x-0 md:-translate-y-1/2 md:p-[40px]"
    >
      <p class="text-[14px] text-[#666] md:text-[16px]">{{ props.date }}</p>
      <p class="text-[14px] text-[#666] md:text-[16px]">{{ props.type.join('．') }}</p>
      <h3 class="text-[20px] font-bold text-[#333] md:text-[24px]">{{ props.title }}</h3>
      <p class="text-[14px] text-[#666] md:text-[16px]">{{ props.content }}</p>
      <button
        type="button"
        class="inline-flex justify-center rounded-full bg-[#4A4A4A] px-6 py-2.5 text-sm text-white transition-colors hover:bg-[#2A1F1C]"
      >
        前往專案
      </button>
    </div>
  </div>
</template>
