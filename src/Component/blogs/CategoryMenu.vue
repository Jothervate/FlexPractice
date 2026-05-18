<script setup>
  defineProps({
    categories: {
      type: Array,
      required: true,
    },
    modelValue: {
      type: String,
      required: true,
    },
  });

  const emit = defineEmits(['update:modelValue']);

  const handleCategoryClick = (category) => {
    emit('update:modelValue', category);
  };
</script>

<template>
  <ul
    class="font-noto flex w-full max-w-full flex-row gap-3 overflow-x-auto pb-2 whitespace-nowrap md:flex-col md:gap-2 md:overflow-x-visible md:whitespace-normal"
  >
    <li
      v-for="category in categories"
      :key="category"
      :class="[
        'flex-shrink-0 cursor-pointer px-4 py-2 transition-all duration-200',
        modelValue === category
          ? 'bg-black text-white'
          : 'bg-white text-black hover:bg-zinc-800 hover:text-white',
      ]"
      @click="$emit('update:modelValue', category)"
    >
      {{ category }}
    </li>
  </ul>
</template>

<style scoped>
  /* 為了美觀，可以隱藏手機版的捲軸，或者修飾它 */
  .overflow-x-auto {
    -webkit-overflow-scrolling: touch; /* 讓手機版捲動更順暢 */
  }

  /* 隱藏捲軸（可選），避免那條灰色的線出現 */
  .overflow-x-auto::-webkit-scrollbar {
    display: none;
  }
</style>
