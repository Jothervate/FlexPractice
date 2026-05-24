<script setup>
  const props = defineProps({
    modelValue: {
      type: String,
      required: true,
    },
    categories: {
      type: Array,
      default: () => [],
    },
  });

  const emit = defineEmits(['update:modelValue']);

  const handleClick = (tab) => {
    emit('update:modelValue', tab);
  };
</script>

<template>
  <section class="w-full bg-white py-10">
    <div
      class="project-select-scroll mx-auto w-[351px] max-w-[calc(100vw-24px)] overflow-x-auto md:w-[1296px] md:max-w-[calc(100vw-80px)]"
    >
      <div class="flex w-max gap-px md:w-full">
        <button
          v-for="tab in props.categories"
          :key="tab"
          type="button"
          class="flex h-10 min-w-[116px] shrink-0 cursor-pointer items-center justify-center px-3 py-2 text-xs leading-none font-bold whitespace-nowrap transition-colors duration-200 md:min-w-0 md:flex-1 md:text-sm"
          :class="
            props.modelValue === tab
              ? 'bg-[#1F120C] text-white'
              : 'bg-white text-[#1F120C] hover:bg-[#1F120C]/10'
          "
          @click="handleClick(tab)"
        >
          {{ tab }}
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped>
  .project-select-scroll {
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
  }

  .project-select-scroll::-webkit-scrollbar {
    display: none;
  }
</style>
