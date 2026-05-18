<script setup>
  import { Eye, Share2 } from 'lucide-vue-next';
  import { assetUrl } from '../../utils/assetUrl';

  const props = defineProps({
    eyebrow: {
      type: String,
      default: '相關文章',
    },
    posts: {
      type: Array,
      default: () => [
        {
          id: 1,
          image: '/blog_2.png',
          categories: ['UIUX 設計', '設計規範', '前端技術'],
          title: '10年職人手記：如何運用 Figma 與 Storybook 打造美感與邏輯兼具的企業級設計系統',
          date: 'Oct 16, 2022',
          views: 110,
          shares: 2,
          to: '/blog/2',
        },
        {
          id: 2,
          image: '/blog_3.png',
          categories: ['品牌設計', '平面設計', 'UIUX 設計'],
          title: '從平面識別到數位體驗：以「植感生活」為例，探討跨媒體品牌視覺在網頁上的精準轉譯',
          date: 'Oct 16, 2022',
          views: 110,
          shares: 2,
          to: '/blog/3',
        },
        {
          id: 3,
          image: '/blog_5.png',
          categories: ['前端技術', '後端架構', 'AI 趨勢應用'],
          title: '揭開金融 App 的設計密碼：如何優化 Open Bank API 的複雜數據呈現與後端串接安全性',
          date: 'Oct 16, 2022',
          views: 110,
          shares: 2,
          to: '/blog/5',
        },
      ],
    },
  });
</script>

<template>
  <section
    class="border-b border-[#d9d0c7] bg-[#fbf5ef] px-3 py-10 md:border-b-0 md:px-10 md:py-20"
  >
    <div class="mx-auto flex w-full max-w-[1296px] flex-col gap-6 md:gap-10">
      <header>
        <p class="mb-2 text-[10px] leading-none font-bold text-[#3d3d3d] md:text-xs">
          {{ props.eyebrow }}
        </p>
        <h2
          class="text-[32px] leading-none font-black tracking-[0.04em] text-[#3d3d3d] md:text-[56px]"
        >
          RELATED BLOG
        </h2>
      </header>

      <div
        class="flex scrollbar-none gap-2 overflow-x-auto pb-1 md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:pb-0"
      >
        <RouterLink
          v-for="post in props.posts"
          :key="post.id"
          :to="post.to"
          class="group flex w-[154px] flex-none flex-col gap-2 text-[#3d3d3d] md:w-auto md:gap-3"
        >
          <div class="overflow-hidden bg-[#e6ded5]">
            <img
              :src="assetUrl(post.image)"
              :alt="post.title"
              class="aspect-video w-full object-cover transition duration-300 group-hover:scale-105 group-active:scale-105"
            />
          </div>

          <div class="flex flex-1 flex-col gap-2 md:gap-3">
            <div class="flex flex-col gap-1 md:gap-2">
              <p class="line-clamp-1 text-[9px] leading-[1.4] font-bold text-[#65605b] md:text-xs">
                {{ post.categories.join('．') }}
              </p>
              <h3
                class="line-clamp-4 text-[14px] leading-[1.35] font-black text-[#3d3d3d] transition group-hover:text-[#007fff] group-active:text-[#007fff] md:line-clamp-2 md:text-[20px]"
              >
                {{ post.title }}
              </h3>
            </div>

            <div
              class="mt-auto flex items-end justify-between gap-2 text-[9px] leading-tight font-semibold text-[#6f6a65] md:text-xs"
            >
              <time class="w-10 shrink-0 md:w-auto" :datetime="post.date">{{ post.date }}</time>

              <div class="flex shrink-0 items-center gap-2 md:gap-4">
                <span class="flex items-center gap-1">
                  <Eye class="h-3 w-3 md:h-4 md:w-4" />
                  {{ post.views }} views
                </span>
                <span class="flex items-center gap-1">
                  <Share2 class="h-3 w-3 md:h-4 md:w-4" />
                  {{ post.shares }} shares
                </span>
              </div>
            </div>
          </div>
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<style scoped>
  .scrollbar-none {
    scrollbar-width: none;
  }

  .scrollbar-none::-webkit-scrollbar {
    display: none;
  }
</style>
