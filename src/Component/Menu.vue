<script setup>
  import { ref } from 'vue';
  import { Menu, X } from 'lucide-vue-next';
  import { RouterLink } from 'vue-router';

  // 你的第 4 點：使用 defineProps 接收選單內容
  const props = defineProps({
    navItems: {
      type: Array,
      default: () => [
        { text: '服務項目', path: '/server' },
        { text: '專案作品', path: '/items' },
        { text: '部落格', path: '/blog' },
        { text: '與我聯絡', path: '/contact' },
      ],
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
  <header class="sticky top-0 z-30 w-full bg-white shadow-sm">
    <div
      class="mx-auto flex w-full items-center justify-between px-2 py-4 md:max-w-[1296px] md:px-0 md:py-4"
    >
      <h2 class="cursor-pointer text-3xl font-bold text-black">
        <RouterLink :to="'/'"> Nelson </RouterLink>
      </h2>

      <nav>
        <div class="md:hidden" @click="toggleMenu">
          <Menu :size="24" :stroke-width="1.5" class="cursor-pointer" />
        </div>

        <ul class="hidden flex-row gap-6 md:flex">
          <li v-for="item in navItems" :key="item.text">
            <RouterLink :to="item.path" class="cursor-pointer hover:text-blue-500">
              {{ item.text }}
            </RouterLink>
          </li>
        </ul>
      </nav>

      <div
        v-if="isMenuOpen"
        class="fixed inset-0 z-40 bg-black/20 md:hidden"
        @click="isMenuOpen = false"
      ></div>

      <Transition name="slide">
        <div
          v-if="isMenuOpen"
          class="fixed inset-y-0 right-0 z-50 w-64 bg-white p-6 shadow-lg md:hidden"
        >
          <div class="mb-8 flex justify-end">
            <X :size="24" class="cursor-pointer" @click="toggleMenu" />
          </div>
          <ul class="flex flex-col gap-6 text-left">
            <li v-for="item in navItems" :key="item.text">
              <RouterLink
                :to="item.path"
                class="cursor-pointer text-lg transition-colors duration-200 active:text-blue-500"
                @click="isMenuOpen = false"
              >
                {{ item.text }}
              </RouterLink>
            </li>
          </ul>
        </div>
      </Transition>
    </div>
  </header>
</template>
<style scoped>
  /* 定義淡入動畫 */
  .slide-enter-active,
  .slide-leave-active {
    transition: opacity 0.3s ease;
  }

  .slide-enter-from,
  .slide-leave-to {
    opacity: 0;
  }
</style>
