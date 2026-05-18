<script setup>
  import { ChevronRight } from 'lucide-vue-next';

  const props = defineProps({
    category: {
      type: Array,
      default: () => ['首頁', '部落格', '部落格標題'],
    },
  });
</script>

<template>
  <section class="bg-[#2b160d] px-3 py-2 text-white md:px-10 md:py-3">
    <nav
      class="mx-auto flex min-h-[21px] w-full max-w-[1296px] items-center gap-3 text-sm leading-[1.5] font-bold md:min-h-6"
      :aria-label="props.category.join(' > ')"
    >
      <template v-for="(item, index) in props.category" :key="item">
        <span class="shrink-0">
          {{ item }}
        </span>
        <ChevronRight
          v-if="index < props.category.length - 1"
          class="h-4 w-4 shrink-0 text-white md:h-5 md:w-5"
          :stroke-width="2"
        />
      </template>
    </nav>
  </section>
</template>
