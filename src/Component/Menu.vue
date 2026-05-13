<script setup>
  import { ref } from 'vue';
  import { Menu, X } from 'lucide-vue-next';

  // 你的第 4 點：使用 defineProps 接收選單內容
  const props = defineProps({
    navItems: {
      type: Array,
      default: () => ['服務項目', '專案作品', '部落格', '與我聯絡'],
    },
  });

  // 關鍵：用來控制手機版選單開關的變數

  const isMenuOpen = ref(false);

  // 切換選單狀態的 function
  const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
  };
</script>

<template>
  <header
    class="flex flex-row items-center justify-between gap-[12px] bg-white px-3 py-2 text-center shadow-sm md:gap-[24px] md:px-10 md:py-3"
  >
    <h2 class="text-black-700 cursor-pointer text-3xl font-bold">Nelson</h2>

    <nav>
      <div class="md:hidden" @click="toggleMenu">
        <Menu :size="20" :stroke-width="1.5" class="cursor-pointer" />
      </div>
      <!-- 手機版選單 -->
      <!-- Transition 是 Vue 內建的過渡組件，可以讓元素在進入和離開 DOM 時添加過渡效果 -->

      <Transition name="slide">
        <div
          v-if="isMenuOpen"
          class="fixed inset-y-0 right-0 z-50 w-64 bg-white p-6 shadow-lg md:hidden"
        >
          <div class="mb-8 flex justify-end">
            <X :size="20" class="cursor-pointer" @click="toggleMenu" />
          </div>
          <ul class="flex flex-col gap-6">
            <li
              v-for="item in navItems"
              :key="item"
              class="transition-color cursor-pointer duration-200 active:text-blue-500"
              @click="isMenuOpen = false"
            >
              {{ item }}
            </li>
          </ul>
        </div>
      </Transition>

      <div
        v-if="isMenuOpen"
        class="fixed inset-0 z-40 bg-black/20 md:hidden"
        @click="isMenuOpen = false"
      ></div>

      <ul class="hidden flex-row gap-6 md:flex">
        <li v-for="item in navItems" :key="item" class="cursor-pointer hover:text-blue-500">
          {{ item }}
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
  /* 定義滑動動畫：從右側滑入 (translate-x) */
  .slide-enter-active,
  .slide-leave-active {
    transition: transform 0.3s ease;
  }

  .slide-enter-from,
  .slide-leave-to {
    transform: translateX(100%);
  }
</style>
