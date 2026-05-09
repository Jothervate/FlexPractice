<script setup>
  defineProps({
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
</script>

<template>
  <div class="group flex cursor-pointer flex-col gap-[24px] md:flex-row">
    <div class="w-full flex-shrink-0 overflow-hidden md:w-1/2">
      <img
        :src="imageUrl"
        :alt="title"
        class="aspect-video w-full object-cover transition duration-300 group-hover:scale-105"
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
          class="line-clamp-2 text-xl font-bold text-gray-800 transition duration-300 group-hover:text-blue-600 md:text-2xl"
        >
          {{ title }}
        </h2>
      </div>

      <div class="flex items-center justify-between text-sm text-gray-400">
        <span>{{ date }}</span>

        <div class="flex gap-4">
          <span class="flex items-center gap-1">
            <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
            {{ views }} views
          </span>
          <span class="flex items-center gap-1">
            <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
              />
            </svg>
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
