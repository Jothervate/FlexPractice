<script setup>
  import { computed, ref } from 'vue';
  import { ChevronLeft, ChevronRight } from 'lucide-vue-next';

  const props = defineProps({
    articles: {
      type: Array,
      default: () => Array.from({ length: 5 }), // 即使只有 5 筆資料
    },
    itemsPerPage: {
      type: Number,
      default: 10,
    },
  });

  const currentPage = ref(1);

  // --- 直接寫死總頁數為 20，不進行數學計算 ---
  const totalPages = computed(() => 20);

  const displayedPages = computed(() => {
    const total = totalPages.value;
    const current = currentPage.value;

    if (total <= 5) {
      return Array.from({ length: total }, (_, i) => i + 1);
    }

    if (current < 3) {
      return [1, 2, 3, '...', total];
    }

    if (current >= total - 2) {
      return [1, '...', total - 2, total - 1, total];
    }

    return [1, '...', current - 1, current, current + 1, '...', total];
  });

  const changePage = (page) => {
    if (typeof page === 'number' && page >= 1 && page <= totalPages.value) {
      currentPage.value = page;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };
</script>

<template>
  <nav
    class="m-4 flex items-center justify-center space-x-1 select-none md:justify-end"
    aria-label="Pagination"
  >
    <button
      @click="changePage(currentPage - 1)"
      :disabled="currentPage === 1"
      :class="[
        'p-2 transition-colors duration-200',
        currentPage === 1
          ? 'cursor-not-allowed text-gray-300'
          : 'cursor-pointer text-black hover:text-gray-600 active:text-gray-600',
      ]"
    >
      <chevron-left class="h-5 w-5" />
    </button>

    <div v-for="(page, index) in displayedPages" :key="index" class="flex items-center">
      <button
        v-if="typeof page === 'number'"
        @click="changePage(page)"
        :class="[
          'flex h-10 w-10 cursor-pointer items-center justify-center rounded-full text-sm font-medium transition-all duration-200',
          currentPage === page
            ? 'bg-black text-white'
            : 'bg-transparent text-black hover:bg-gray-300 active:bg-gray-600 active:text-white',
        ]"
      >
        {{ page }}
      </button>

      <span v-else class="flex h-10 w-8 items-center justify-center text-gray-400">
        {{ page }}
      </span>
    </div>

    <button
      @click="changePage(currentPage + 1)"
      :disabled="currentPage === totalPages"
      :class="[
        'p-2 transition-colors duration-200',
        currentPage === totalPages
          ? 'cursor-not-allowed text-gray-300'
          : 'cursor-pointer text-black hover:text-gray-600 active:text-gray-600',
      ]"
    >
      <chevron-right class="h-5 w-5" />
    </button>
  </nav>
</template>
<style scoped></style>
