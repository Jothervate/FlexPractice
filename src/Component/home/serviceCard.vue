<script setup>
  import { ref } from 'vue';
  // 引入需要的 Lucide Icons
  import { PaintBucket, Monitor, LayoutTemplate, Server, ArrowUpRight } from 'lucide-vue-next';

  const props = defineProps({
    // 新增 icon Prop，接收外部傳入的元件
    icon: {
      type: [Object, Function],
      default: PaintBucket, // 將 PaintBucket 設為預設 Icon
    },
    engTitle: {
      type: String,
      default: 'Graphic',
    },
    title: {
      type: String,
      default: '平面設計',
    },
    content: {
      type: String,
      default: '從品牌識別到視覺傳達，用專業設計精準傳遞核心價值',
    },
  });
</script>

<template>
  <section
    v-bind="$attrs"
    class="flex max-w-[260px] flex-shrink-0 flex-col gap-[8px] bg-[#FDF7F1] p-[12px] md:min-w-[306px] md:gap-[12px] md:p-[24px]"
  >
    <div
      class="flex flex-row items-center justify-between text-[14px] font-bold text-[#404040] md:text-[16px]"
    >
      <span class="uppercase">{{ props.engTitle }}</span>
      <component
        :is="props.icon"
        class="h-[24px] w-[24px] md:h-[28px] md:w-[28px]"
        :stroke-width="2"
      />
    </div>

    <div class="text-[24px] leading-tight font-bold tracking-wider text-[#2A1F1C] md:text-[28px]">
      {{ props.title }}
    </div>

    <div class="flex-between item-center flex gap-[12px]">
      <p class="flex-1 gap-[8px] text-[14px] text-black md:gap-[12px] md:text-[16px]">
        {{ props.content }}
      </p>
      <button
        class="flex h-[44px] w-[44px] flex-shrink-0 items-center justify-center rounded-full border-4 border-[#3A3A3A] bg-[#3A3A3A] text-white transition-colors duration-300 hover:border-[orange] hover:bg-[#1A1A1A] active:border-[orange] active:bg-[#1A1A1A] md:h-[48px] md:w-[48px]"
      >
        <ArrowUpRight class="h-5 w-5" :stroke-width="1.5" />
      </button>
    </div>
  </section>
</template>
