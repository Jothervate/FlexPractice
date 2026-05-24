<script setup>
  import { ref, computed, watch } from 'vue';
  import { assetUrl } from '../utils/assetUrl';

  const props = defineProps({
    imageUrl: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: 'BLOGS',
    },
    subtitle: {
      type: String,
      default: '部落格',
    },
    bgText: {
      type: String,
      default: '',
    },
    filterMode: {
      type: String,
      default: 'dark',
    },
    filterStrength: {
      type: Number,
      default: 50,
    },
  });

  const currentImgUrl = ref(assetUrl(props.imageUrl));

  watch(
    () => props.imageUrl,
    (newVal) => {
      currentImgUrl.value = assetUrl(newVal);
    }
  );

  const imageFilterStyle = computed(() => {
    if (props.filterMode === 'dark') {
      const b = (100 - props.filterStrength) / 100;
      return { filter: `brightness(${b})` };
    } else {
      const b = 1 + props.filterStrength / 100;
      return { filter: `brightness(${b})` };
    }
  });

  const displayBgText = computed(() => props.bgText || props.title);
</script>

<template>
  <section
    class="relative flex h-[380px] w-full items-center justify-center overflow-hidden bg-gray-900"
  >
    <img
      :src="currentImgUrl"
      :style="imageFilterStyle"
      alt="Banner Image"
      class="absolute inset-0 z-0 h-full w-full object-cover object-[center_65%]"
    />

    <div
      class="pointer-events-none absolute inset-0 top-[80%] z-10 flex items-center justify-center select-none"
    >
      <span class="text-[160px] font-bold text-white/10 md:text-[300px]">
        {{ displayBgText }}
      </span>
    </div>

    <div class="relative z-20 flex flex-col items-center text-center text-white drop-shadow-md">
      <h1 class="font-noto text-[40px] leading-tight font-bold tracking-wider md:text-[80px]">
        {{ title }}
      </h1>
      <p class="font-noto mt-2 text-[40px] leading-tight font-medium md:text-[48px]">
        {{ subtitle }}
      </p>
    </div>
  </section>
</template>

<style scoped>
  /* 如果有載入 Noto Sans 字體，確保這裡有對應 */
  .font-noto {
    font-family: 'Noto Sans TC', sans-serif;
  }
</style>
