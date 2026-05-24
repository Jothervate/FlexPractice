<script setup>
  import { ref } from 'vue';
  import { Menu } from 'lucide-vue-next';
  import { RouterLink } from 'vue-router';

  // 你的第 4 點：使用 defineProps 接收選單內容
  defineProps({
    navItems: {
      type: Array,
      default: () => [
        { text: '服務項目', path: '/server' },
        { text: '專案作品', path: '/project' },
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
  <header
    class="sticky top-0 z-30 w-full transition-colors duration-200"
    :class="isMenuOpen ? 'bg-brand-beige' : 'bg-white shadow-sm'"
  >
    <div
      class="mx-auto flex h-16 w-full items-center justify-between px-2 md:h-auto md:max-w-[1296px] md:px-0 md:py-4"
    >
      <h2 class="cursor-pointer text-3xl font-bold text-black">
        <RouterLink :to="'/'"> Nelson </RouterLink>
      </h2>

      <nav>
        <div
          class="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full transition-colors duration-200 md:hidden"
          :class="isMenuOpen ? 'border border-black/60' : 'border border-black/50'"
          @click="toggleMenu"
        >
          <Menu :size="24" :stroke-width="1.5" />
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
        class="fixed inset-x-0 top-[25vh] bottom-0 z-40 bg-black/60 md:hidden"
        @click="isMenuOpen = false"
      ></div>

      <Transition name="dropdown">
        <div
          v-if="isMenuOpen"
          class="bg-brand-beige fixed inset-x-0 top-16 z-50 h-[calc(50vh)] min-h-40 overflow-y-auto px-6 pt-1 pb-5 md:hidden"
        >
          <ul class="flex h-full flex-col items-center justify-around text-center">
            <li v-for="item in navItems" :key="item.text" class="gap-[12px] p-[12px]">
              <RouterLink
                :to="item.path"
                class="cursor-pointer text-base font-bold tracking-wider text-black/70 transition-colors duration-200 hover:text-black active:text-blue-500"
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
  .dropdown-enter-active,
  .dropdown-leave-active {
    transition:
      opacity 0.25s ease,
      transform 0.25s ease;
  }

  .dropdown-enter-from,
  .dropdown-leave-to {
    opacity: 0;
    transform: translateY(-12px);
  }
</style>
