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
    class="font-noto flex flex-row gap-3 overflow-x-auto pr-0 text-center whitespace-nowrap md:flex-col md:gap-2 md:pr-4"
  >
    <li
      v-for="category in categories"
      :key="category"
      :class="[
        'cursor-pointer px-4 py-2 transition-all duration-200',
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
  /* 自訂樣式區域 */
</style>
