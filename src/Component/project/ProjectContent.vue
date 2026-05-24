<script setup>
  import { computed, onBeforeUnmount, onMounted } from 'vue';
  import { X } from 'lucide-vue-next';
  import { assetUrl } from '../../utils/assetUrl';

  const props = defineProps({
    project: {
      type: Object,
      required: true,
    },
  });

  const emit = defineEmits(['close']);

  const image = computed(() => assetUrl(props.project.imgSrc));
  const mobileImage = computed(() => assetUrl(props.project.mobileImgSrc || props.project.imgSrc));
  const categoryText = computed(() => props.project.categories?.join(' / ') || '');
  const designRule = computed(() => props.project.rule?.join('、') || '尚未設定設計規則');
  const tools = computed(() => props.project.tools || 'Bootstrap、Javascript');

  onMounted(() => {
    document.body.style.overflow = 'hidden';
  });

  onBeforeUnmount(() => {
    document.body.style.overflow = '';
  });
</script>

<template>
  <div class="project-content-dialog fixed inset-0 z-[80] bg-transparent">
    <!-- 黑色遮罩 -->
    <div class="modal-backdrop pointer-events-none fixed top-0 bottom-0 left-0 bg-black/60"></div>

    <!-- Modal 內容區 -->
    <div
      class="project-content-scroll fixed inset-0 z-[81] overflow-y-auto px-0 py-[36px] md:px-[40px]"
      @click.self="emit('close')"
    >
      <div class="mx-auto max-w-[351px] bg-white md:max-w-[1076px]" @click.stop>
      <!-- X 區域 -->
      <div class="inside-x-area">
        <button
          type="button"
          class="rounded-full bg-white p-1 text-[#999999] hover:bg-[#1F120C]/10 hover:text-[#1F120C]"
          @click="emit('close')"
        >
          <X class="h-5 w-5 md:h-6 md:w-6" />
        </button>
      </div>

      <!-- 圖片區 -->
      <picture>
        <source :srcset="image" media="(min-width: 768px)" />
        <img :src="mobileImage" alt="" class="modal-image" />
      </picture>

      <!-- 文字內容區 -->
      <div class="modal-content">
        <!-- 分類與日期 -->
        <div class="modal-meta-row">
          <p>{{ categoryText }}</p>
          <p>{{ project.date || 'Oct 16, 2022' }}</p>
        </div>

        <!-- 標題 -->
        <h2 class="modal-title">
          {{ project.title }}
        </h2>

        <!-- 副標 / 摘要 -->
        <p class="modal-subtitle">
          {{ project.subtitle || '從品牌識別設計到 RWD 網站開發，打造療癒系植栽購物體驗' }}
        </p>

        <!-- 內文與專案資訊 -->
        <div class="modal-detail-grid">
          <p class="modal-description">
            {{ project.content || '此區域尚未有內容，請參考專案摘要或聯繫我們以獲取更多資訊。' }}
          </p>

          <div class="modal-info">
            <p>設計原則：{{ designRule }}</p>
            <p>開發方式：{{ tools }}</p>
          </div>
        </div>
      </div>
      <!-- 專案圖片區 -->
      <div class="modal-display">
        <img
          :src="assetUrl(props.project.displayImgSrc || props.project.imgSrc)"
          alt="專案圖片區"
          class="w-full"
        />
      </div>
    </div>
    </div>
  </div>
</template>

<style scoped>
  * {
    font-family: 'Noto Sans TC', sans-serif;
  }

  .project-content-dialog {
    --modal-scrollbar-gutter: 20px;
  }

  .project-content-scroll {
    scrollbar-color: #4f4f4f #fdf7f1;
    scrollbar-gutter: stable;
  }

  .project-content-scroll::-webkit-scrollbar {
    width: 12px;
  }

  .project-content-scroll::-webkit-scrollbar-track {
    background: #fdf7f1;
  }

  .project-content-scroll::-webkit-scrollbar-thumb {
    background: #4f4f4f;
    border: 3px solid #fdf7f1;
    border-radius: 999px;
  }

  .modal-backdrop {
    right: var(--modal-scrollbar-gutter);
  }

  .inside-x-area {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 44px;
    padding: 0 24px;
    background: #ffffff;
  }

  /* 圖片區 */
  .modal-image {
    display: block;
    width: 100%;
    height: 280px;
    object-fit: cover;
    object-position: center 10%;
  }

  /* 內容區 */
  .modal-content {
    background: #ffffff;
    padding: 40px;
  }

  /* 分類 + 日期 */
  .modal-meta-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #5f5f5f;
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 24px;
  }

  /* 標題 */
  .modal-title {
    color: #3a3a3a;
    font-size: 28px;
    line-height: 1.4;
    font-weight: 700;
    margin-bottom: 12px;
  }

  /* 副標 */
  .modal-subtitle {
    color: #4f4f4f;
    font-size: 16px;
    line-height: 1.7;
    font-weight: 600;
    margin-bottom: 32px;
  }

  /* 下方內容 */
  .modal-detail-grid {
    display: grid;
    grid-template-columns: 1fr 360px;
    gap: 32px;
    align-items: start;
  }

  .modal-description {
    color: #666666;
    font-size: 15px;
    line-height: 1.9;
  }

  .modal-info {
    color: #666666;
    font-size: 15px;
    line-height: 1.9;
    padding-left: 24px;
    border-left: 1px solid #cfcfcf;
  }

  .modal-display {
    padding: 80px 40px;
    background-color: #fdf7f1;
  }

  /* 手機版 */
  @media (max-width: 767px) {
    .inside-x-area {
      height: 28px;
      padding: 0 8px;
    }

    .modal-image {
      height: 154px;
    }

    .modal-content {
      padding: 24px 12px;
    }

    .modal-meta-row {
      font-size: 10px;
      margin-bottom: 16px;
    }

    .modal-title {
      font-size: 18px;
      line-height: 1.5;
      margin-bottom: 12px;
    }

    .modal-subtitle {
      font-size: 12px;
      line-height: 1.7;
      margin-bottom: 20px;
    }

    .modal-detail-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 20px;
    }

    .modal-description {
      font-size: 12px;
      line-height: 1.8;
    }

    .modal-info {
      border-left: 0;
      border-top: 1px solid #cfcfcf;
      padding-left: 0;
      padding-top: 20px;
      font-size: 12px;
      line-height: 1.8;
    }

    .modal-display {
      padding: 40px 12px;
      gap: 56px;
    }
  }
</style>
