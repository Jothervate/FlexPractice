<script setup>
  import { Eye, Share2 } from 'lucide-vue-next';
  import { computed } from 'vue';
  import { assetUrl } from '../../utils/assetUrl';

  const props = defineProps({
    imgSrc: {
      type: String,
      default: '',
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
    date: {
      type: String,
      default: 'Oct 16 , 2025',
    },
    views: {
      type: Number,
      default: 110,
    },
    shares: {
      type: Number,
      default: 2,
    },
  });

  const resolvedImgSrc = computed(() => assetUrl(props.imgSrc));
</script>
<template>
  <!-- 統一的部落格小卡片 (卡片 1) -->
  <div
    class="group flex w-[85%] min-w-[280px] flex-none cursor-pointer snap-start flex-col rounded-none bg-white shadow-sm md:w-1/3 md:min-w-[0]"
  >
    <!-- 圖片區域 -->
    <div class="aspect-[4/3] w-full overflow-hidden bg-gray-200">
      <img
        :src="resolvedImgSrc"
        alt="Blog Image"
        class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 group-active:scale-105"
      />
    </div>
    <!-- 文字區域 -->
    <div class="flex flex-grow flex-col p-5">
      <p class="mb-3 text-xs tracking-wide text-gray-500">
        {{ props.type.join(' · ') }}
      </p>
      <h3
        class="mb-3 line-clamp-2 text-lg leading-snug font-bold transition-colors duration-200 group-focus-within:text-[#007fff] group-hover:text-[#007fff] group-active:text-[#007fff] md:text-xl"
      >
        {{ props.title }}
      </h3>
      <p class="mb-6 line-clamp-2 text-sm text-gray-600">
        {{ props.content }}
      </p>
      <div
        class="mt-auto flex items-center justify-between border-t border-gray-100 pt-4 text-xs text-gray-400"
      >
        <div class="flex justify-start">
          <span>{{ props.date }}</span>
        </div>
        <div class="md:gap[24px] flex justify-end gap-[16px]">
          <div class="md:gap[12px] flex flex-row gap-[8px]">
            <Eye class="h-[20px] w-[20px]" /> <span class="gap-[4px]">{{ props.views }} views</span>
          </div>
          <div class="md:gap[12px] flex flex-row gap-[8px]">
            <Share2 class="h-[20px] w-[20px]" />
            <span class="gap-[4px]">{{ props.shares }} shares</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
