<script setup>
  import { computed, ref } from 'vue';
  import { ChevronLeft, ChevronRight } from 'lucide-vue-next';

  const props = defineProps({
    articles: {
      type: Array,
      default: () => [],
    },
    itemsPerPage: {
      type: Number,
      default: 10,
    },
  });

  // 當前頁碼，預設為 1
  const currentPage = ref(1);

  // 1. 根據文章長度決定總頁數 (每 10 筆一頁)
  const totalPages = computed(() => {
    return Math.ceil(props.articles.length / props.itemsPerPage) || 1;
  });

  // 切換頁面的方法
  const changePage = (page) => {
    if (page >= 1 && page <= totalPages.value) {
      currentPage.value = page;
      // 可以在這裡發送 emit 讓父元件更新文章內容
      // emit('update-page', page);
    }
  };
</script>

<template>
  <nav
    class="m-4 flex items-center justify-center space-x-2 select-none md:justify-end"
    aria-label="Pagination"
  >
    <button
      @click="changePage(currentPage - 1)"
      :disabled="currentPage === 1"
      :class="[
        'p-2 transition-colors duration-200',
        currentPage === 1
          ? 'cursor-not-allowed text-gray-300'
          : 'cursor-pointer text-black hover:text-gray-600',
      ]"
    >
      <chevron-left class="h-5 w-5" />
    </button>

    <div v-for="page in totalPages" :key="page" class="flex items-center">
      <button
        @click="changePage(page)"
        :class="[
          'flex h-10 w-10 cursor-pointer items-center justify-center rounded-full text-sm font-medium transition-all duration-200',
          currentPage === page
            ? 'bg-black text-white'
            : 'bg-transparent text-black hover:bg-black hover:text-white',
        ]"
      >
        {{ page }}
      </button>
    </div>

    <button
      @click="changePage(currentPage + 1)"
      :disabled="currentPage === totalPages"
      :class="[
        'p-2 transition-colors duration-200',
        currentPage === totalPages
          ? 'cursor-not-allowed text-gray-300'
          : 'cursor-pointer text-black hover:text-gray-600',
      ]"
    >
      <chevron-right class="h-5 w-5" />
    </button>
  </nav>
</template>
