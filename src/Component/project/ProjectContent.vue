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
  const designRule = computed(() => props.project.rule?.join('、') || categoryText.value);
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
    <div class="modal-backdrop pointer-events-none fixed top-0 bottom-0 left-0 bg-black/60"></div>

    <div
      class="project-content-scroll fixed inset-0 z-[81] overflow-y-auto px-0 py-[48px] md:px-[40px] md:py-[36px]"
      @click.self="emit('close')"
    >
      <article class="mx-auto w-[calc(100vw-36px)] bg-white md:w-full md:max-w-[1076px]" @click.stop>
        <div class="inside-x-area">
          <button
            type="button"
            class="rounded-full bg-white p-1 text-[#999999] hover:bg-[#1F120C]/10 hover:text-[#1F120C]"
            aria-label="關閉專案內容"
            @click="emit('close')"
          >
            <X class="h-5 w-5 md:h-6 md:w-6" />
          </button>
        </div>

        <picture>
          <source :srcset="image" media="(min-width: 768px)" />
          <img :src="mobileImage" :alt="project.title" class="modal-image" />
        </picture>

        <div class="modal-content">
          <div class="modal-meta-row">
            <p>{{ categoryText }}</p>
            <p>{{ project.date || 'Oct 16, 2022' }}</p>
          </div>

          <h2 class="modal-title">
            {{ project.title }}
          </h2>

          <p class="modal-subtitle">
            {{ project.subtitle || project.description }}
          </p>

          <div class="modal-detail-grid">
            <p class="modal-description">
              {{ project.content || project.description }}
            </p>

            <div class="modal-info">
              <p>設計原則：{{ designRule }}</p>
              <p>開發方式：{{ tools }}</p>
            </div>
          </div>
        </div>

        <div class="modal-display">
          <img :src="assetUrl(project.displayImgSrc || project.imgSrc)" :alt="project.title" class="w-full" />
        </div>
      </article>
    </div>
  </div>
</template>

<style scoped>
  .project-content-dialog {
    --modal-scrollbar-gutter: 0px;
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
    height: 36px;
    padding: 0 12px;
    background: #ffffff;
  }

  .modal-image {
    display: block;
    width: 100%;
    height: 194px;
    object-fit: cover;
    object-position: center center;
  }

  .modal-content {
    background: #ffffff;
    padding: 32px 15px 28px;
  }

  .modal-meta-row {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 16px;
    color: #5f5f5f;
    font-size: 12px;
    font-weight: 700;
    line-height: 1.5;
    margin-bottom: 20px;
  }

  .modal-meta-row p:last-child {
    flex-shrink: 0;
    text-align: right;
  }

  .modal-title {
    color: #3a3a3a;
    font-size: 24px;
    line-height: 1.45;
    font-weight: 700;
    margin-bottom: 14px;
  }

  .modal-subtitle {
    color: #4f4f4f;
    font-size: 16px;
    line-height: 1.75;
    font-weight: 700;
    margin-bottom: 24px;
  }

  .modal-detail-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 24px;
    color: #666666;
    font-size: 16px;
    line-height: 1.85;
  }

  .modal-description {
    font-weight: 500;
  }

  .modal-info {
    border-top: 1px solid #cfcfcf;
    padding-top: 22px;
    font-weight: 500;
  }

  .modal-display {
    padding: 40px 15px;
    background-color: #fdf7f1;
  }

  @media (min-width: 768px) {
    .project-content-dialog {
      --modal-scrollbar-gutter: 20px;
    }

    .inside-x-area {
      height: 44px;
      padding: 0 24px;
    }

    .modal-image {
      height: 280px;
      object-position: center 10%;
    }

    .modal-content {
      padding: 40px;
    }

    .modal-meta-row {
      font-size: 14px;
      margin-bottom: 24px;
    }

    .modal-title {
      font-size: 28px;
      line-height: 1.4;
      margin-bottom: 12px;
    }

    .modal-subtitle {
      font-size: 16px;
      line-height: 1.7;
      margin-bottom: 32px;
    }

    .modal-detail-grid {
      grid-template-columns: 1fr 360px;
      gap: 32px;
      font-size: 15px;
      line-height: 1.9;
    }

    .modal-info {
      border-top: 0;
      border-left: 1px solid #cfcfcf;
      padding-top: 0;
      padding-left: 24px;
    }

    .modal-display {
      padding: 80px 40px;
    }
  }
</style>
