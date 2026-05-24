<script setup>
  import { ref, computed } from 'vue';
  import CategoryMenu from '../Component/CategoryMenu.vue';
  import Cards from '../Component/Cards.vue';

  import Pages from '../Component/Pages.vue';

  //先把baseUrl定義好，這樣在使用圖片時就不需要每次都寫一大串路徑了
  const baseUrl = import.meta.env.BASE_URL;

  // 寫一個 Helper Function (這樣以後重複使用更方便)
  const getImageUrl = (path) => {
    if (!path) return '';
    return path.startsWith('/') ? `${baseUrl}${path.slice(1)}` : path;
  };

  // 狀態管理
  const activeCategory = ref('全部');

  // 1. 定義固定的分類清單
  const categories = [
    '全部',
    '品牌設計',
    '平面設計',
    'UIUX 設計',
    '網頁設計',
    '設計規範',
    '前端技術',
    '後端架構',
    'AI 趨勢應用',
  ];

  // 文章數據
  const articles = ref([
    {
      id: 1,
      title: '網頁裡的微互動藝術：利用 CSS 與 JS 動畫為諮詢網站注入靈魂並提升用戶轉化率',
      categories: ['UIUX 設計', '網頁設計', '前端技術'],
      imageUrl: '/blog_1.png',
      date: 'Oct 16, 2022',
      views: 110,
      shares: 2,
    },
    {
      id: 2,
      title: '10年職人手記：如何運用 Figma 與 Storybook 打造美感與邏輯兼具的企業級設計系統',
      categories: ['UIUX 設計', '設計規範', '前端技術'],
      imageUrl: '/blog_2.png',
      date: 'Oct 16, 2022',
      views: 110,
      shares: 2,
    },

    {
      id: 3,
      title: '從平面識別到數位體驗：以「植感生活」為例，探討跨媒體品牌視覺在網頁上的精準轉譯',
      categories: ['品牌設計', '平面設計', 'UIUX 設計'],
      imageUrl: '/blog_3.png',
      date: 'Oct 16, 2022',
      views: 110,
      shares: 2,
    },
    {
      id: 4,
      title: '當 AI 遇上介面設計：資深設計師如何利用生成式工具重塑前端開發工作流與視覺想像力',
      categories: ['UIUX 設計', '前端技術', 'AI 趨勢應用'],
      imageUrl: '/blog_4.png',
      date: 'Oct 16, 2022',
      views: 110,
      shares: 2,
    },
    {
      id: 5,
      title: '揭開金融 App 的設計密碼：如何優化 Open Bank API 的複雜數據呈現與後端串接安全性',
      categories: ['前端技術', '後端架構', 'AI 趨勢應用'],
      imageUrl: '/blog_5.png',
      date: 'Oct 16, 2022',
      views: 110,
      shares: 2,
    },
  ]);

  // 根據選定分類過濾文章
  const filteredArticles = computed(() => {
    if (activeCategory.value === '全部') {
      return articles.value;
    }
    return articles.value.filter((article) => article.categories.includes(activeCategory.value));
  });
</script>

<template>
  <div class="min-h-screen bg-gray-50 p-4 md:p-8">
    <div class="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:gap-6">
      <!-- 左側：分類選單（Sticky） -->
      <div class="md:w-64 md:flex-shrink-0">
        <div class="sticky top-[80px] md:top-8">
          <CategoryMenu v-model="activeCategory" :categories="categories" />
        </div>
      </div>

      <!-- 右側：文章卡片列表 -->
      <div class="flex-1">
        <!-- 結果提示 -->
        <h2 class="mb-4 text-lg font-semibold text-gray-900">
          {{ activeCategory === '全部' ? '所有文章' : activeCategory }}
        </h2>

        <!-- 卡片容器 -->
        <div class="flex flex-col gap-6">
          <!-- 文章卡片列表 -->
          <template v-if="filteredArticles.length > 0">
            <Cards
              v-for="article in filteredArticles"
              :key="article.id"
              :title="article.title"
              :categories="article.categories"
              :date="article.date"
              :views="article.views"
              :shares="article.shares"
              :image-url="getImageUrl(article.imageUrl)"
            />
          </template>

          <!-- 空狀態提示 -->
          <div
            v-else
            class="flex flex-col items-center justify-center rounded-lg bg-white px-4 py-12"
          >
            <p class="text-lg text-gray-500">目前尚無相關文章</p>
            <button
              @click="activeCategory = '全部'"
              class="mt-4 rounded-lg bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700"
            >
              查看所有文章
            </button>
          </div>
        </div>

        <footer
          v-if="filteredArticles.length > 0"
          class="mt-12 flex flex-col items-center gap-4 border-t border-gray-200 pt-8 lg:flex-row lg:justify-between lg:gap-0"
        >
          <p class="hidden text-sm text-gray-500 lg:block">
            顯示第 1 - 10 筆，共 {{ filteredArticles.length }} 筆文章
          </p>

          <Pages :articles="filteredArticles" />
        </footer>
      </div>
    </div>
  </div>
</template>

<style scoped>
  /* 自訂樣式區域 */
</style>
