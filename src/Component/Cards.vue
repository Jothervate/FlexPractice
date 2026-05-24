<script setup>
  import { computed } from 'vue';
  import { Eye, Share2 } from 'lucide-vue-next';
  import { assetUrl } from '../utils/assetUrl';

  const props = defineProps({
    title: {
      type: String,
      required: true,
    },
    categories: {
      type: Array,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    views: {
      type: Number,
      required: true,
    },
    shares: {
      type: Number,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
  });

  const resolvedImageUrl = computed(() => assetUrl(props.imageUrl));
</script>

<template>
  <div class="group flex cursor-pointer flex-col gap-[24px] md:flex-row">
    <div class="w-full flex-shrink-0 overflow-hidden md:w-1/2">
      <img
        :src="resolvedImageUrl"
        :alt="title"
        class="aspect-video w-full object-cover transition duration-300 group-hover:scale-105 group-active:scale-105"
      />
    </div>

    <div class="flex flex-1 flex-col justify-center gap-6 py-2">
      <div>
        <div class="mb-2 flex items-center text-sm text-gray-500">
          <template v-for="(category, index) in categories" :key="category">
            <span>{{ category }}</span>
            <span v-if="index < categories.length - 1" class="mx-2">·</span>
          </template>
        </div>

        <h2
          class="line-clamp-2 text-xl font-bold text-gray-800 transition duration-300 group-hover:text-blue-600 group-active:text-blue-600 md:text-2xl"
        >
          {{ title }}
        </h2>
      </div>

      <div class="flex items-center justify-between text-sm text-gray-400">
        <span>{{ date }}</span>

        <div class="flex gap-4">
          <span class="flex items-center gap-1">
            <Eye class="h-4 w-4" />
            {{ views }} views
          </span>
          <span class="flex items-center gap-1">
            <Share2 class="h-4 w-4" />
            {{ shares }} shares
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  /* 如需進一步自訂樣式，可在此添加 */
</style>
