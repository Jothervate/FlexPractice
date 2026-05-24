<script setup>
  import { computed } from 'vue';
  import { assetUrl } from '../../utils/assetUrl';

  const props = defineProps({
    imgSrc: {
      type: String,
      required: true,
    },
    mobileImgSrc: {
      type: String,
      default: '',
    },
    date: {
      type: String,
      default: 'Oct 16, 2025',
    },
    categories: {
      type: Array,
      default: () => [],
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    buttonText: {
      type: String,
      default: '前往專案',
    },
    desktopObjectPosition: {
      type: String,
      default: 'center center',
    },
    mobileObjectPosition: {
      type: String,
      default: 'center center',
    },
  });
  const emit = defineEmits(['open']);

  const image = computed(() => assetUrl(props.imgSrc));
  const mobileImage = computed(() => assetUrl(props.mobileImgSrc || props.imgSrc));
  const categoryText = computed(() => props.categories.join('、'));
</script>

<template>
  <article
    class="relative aspect-[351/580] w-full overflow-hidden rounded-[6px] bg-[#EEE7DE] md:aspect-auto md:h-[390px]"
  >
    <picture class="absolute inset-0 block h-full w-full">
      <source media="(max-width: 767px)" :srcset="mobileImage" />
      <img
        :src="image"
        :alt="title"
        class="h-full w-full object-cover [object-position:var(--project-mobile-position)] md:[object-position:var(--project-desktop-position)]"
        :style="{
          '--project-mobile-position': mobileObjectPosition,
          '--project-desktop-position': desktopObjectPosition,
        }"
      />
    </picture>

    <div
      class="absolute bottom-4 left-1/2 flex w-[calc(100%-48px)] max-w-[280px] -translate-x-1/2 flex-col items-center gap-[8px] bg-[#FDF8F1] px-[20px] py-[18px] text-center shadow-[0_12px_28px_rgba(42,31,28,0.08)] md:top-1/2 md:bottom-auto md:left-[40px] md:w-[360px] md:max-w-none md:translate-x-0 md:-translate-y-1/2 md:px-[36px] md:py-[32px]"
    >
      <p class="text-[11px] leading-[1.4] font-medium text-[#6E625B] md:text-[12px]">
        {{ date }}
      </p>
      <p class="text-[11px] leading-[1.4] font-medium text-[#6E625B] md:text-[12px]">
        {{ categoryText }}
      </p>
      <h3 class="text-[16px] leading-[1.45] font-bold text-[#2A1F1C] md:text-[22px]">
        {{ title }}
      </h3>
      <p class="text-[12px] leading-[1.7] font-medium text-[#5B514B] md:text-[14px]">
        {{ description }}
      </p>
      <button
        type="button"
        class="inline-flex min-h-[34px] cursor-pointer items-center justify-center rounded-[999px] bg-[#3F3F3F] px-[18px] py-[8px] text-[12px] leading-none font-bold text-white transition-colors hover:bg-[#2A1F1C] focus-visible:ring-2 focus-visible:ring-[#2A1F1C] focus-visible:ring-offset-2 focus-visible:outline-none"
        @click="emit('open')"
      >
        {{ buttonText }}
      </button>
    </div>
  </article>
</template>
