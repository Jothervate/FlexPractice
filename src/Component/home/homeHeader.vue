<script setup>
  import { computed } from 'vue';
  import { assetUrl } from '../../utils/assetUrl';

  const props = defineProps({
    imageSrc: {
      type: String,
      default: 'home/index_person.png',
    },
    imageAlt: {
      type: String,
      default: 'Nelson Portfolio',
    },
  });

  const resolvedImageSrc = computed(() => assetUrl(props.imageSrc));
  const decoraOneSrc = computed(() => assetUrl('home/index_decora_1.png'));
  const decoraTwoSrc = computed(() => assetUrl('home/index_decora_2.png'));
  const decoraThreeSrc = computed(() => assetUrl('home/index_decora_3.png'));
</script>

<template>
  <section class="home-header">
    <div class="home-header__inner">
      <img
        class="home-header__decora home-header__flower home-header__flower--left"
        :src="decoraThreeSrc"
        alt=""
      />
      <img
        class="home-header__decora home-header__flower home-header__flower--right"
        :src="decoraThreeSrc"
        alt=""
      />
      <img
        class="home-header__decora home-header__flower home-header__flower--copy"
        :src="decoraThreeSrc"
        alt=""
      />
      <span
        class="home-header__decora home-header__dash home-header__dash--top"
        aria-hidden="true"
      ></span>
      <span
        class="home-header__decora home-header__dash home-header__dash--copy"
        aria-hidden="true"
      ></span>
      <img
        class="home-header__decora home-header__shape home-header__shape--top"
        :src="decoraOneSrc"
        alt=""
      />
      <img
        class="home-header__decora home-header__shape home-header__shape--bottom"
        :src="decoraTwoSrc"
        alt=""
      />

      <div class="home-header__content">
        <div class="home-header__copy">
          <h1 class="home-header__title">
            <span>Hello</span>
            <span>I'm Nelson</span>
          </h1>

          <p class="home-header__intro">
            我是一個擁有 10 年經驗的 UIUX
            設計師和前端工程師，喜歡從美學和程式結合，打造一個又一個精美的網頁設計！
          </p>

          <div class="home-header__actions">
            <button class="home-header__button home-header__button--primary" type="button">
              與我聯絡
            </button>
            <button class="home-header__button home-header__button--secondary" type="button">
              我的履歷
            </button>
          </div>
        </div>
      </div>

      <div class="home-header__media">
        <img class="home-header__portrait" :src="resolvedImageSrc" :alt="imageAlt" />
      </div>
    </div>
  </section>
</template>

<style scoped>
  .home-header {
    width: 100%;
    overflow-x: hidden;
    background: #fdf7f1;
    color: #414141;
  }

  .home-header__inner {
    position: relative;
    display: grid;
    width: min(100%, 1296px);
    min-height: 800px;
    margin: 0 auto;
    grid-template-columns: minmax(0, 526fr) minmax(0, 746fr);
    gap: 24px;
  }

  .home-header__content,
  .home-header__media {
    min-width: 0;
  }

  .home-header__content {
    position: relative;
    z-index: 2;
    display: flex;
    align-items: center;
    padding: 0 clamp(24px, 6.8vw, 128px) 0 0;
  }

  .home-header__copy {
    display: flex;
    width: 100%;
    max-width: 430px;
    flex-direction: column;
    gap: 24px;
  }

  .home-header__title {
    margin: 0;
    font-size: 80px;
    font-weight: 800;
    line-height: 1.12;
    letter-spacing: 0;
  }

  .home-header__title span {
    display: block;
    white-space: nowrap;
  }

  .home-header__intro {
    margin: 0;
    color: #4f4f4f;
    font-size: 14px;
    font-weight: 700;
    line-height: 1.8;
  }

  .home-header__actions {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  .home-header__button {
    min-width: 96px;
    border: 1px solid #4a4a4a;
    border-radius: 999px;
    padding: 10px 20px;
    font-size: 13px;
    font-weight: 700;
    line-height: 1;
    transition:
      background-color 0.2s ease,
      color 0.2s ease,
      border-color 0.2s ease;
  }

  .home-header__button--primary {
    background: #414141;
    color: #fff;
  }

  .home-header__button--primary:hover {
    background: #1f1f1f;
    border-color: #1f1f1f;
  }

  .home-header__button--secondary {
    background: transparent;
    color: #414141;
  }

  .home-header__button--secondary:hover {
    background: #fff;
  }

  .home-header__media {
    position: relative;
    z-index: 1;
    height: 800px;
    overflow: hidden;
  }

  .home-header__portrait {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center top;
  }

  .home-header__decora {
    position: absolute;
    z-index: 3;
    pointer-events: none;
    user-select: none;
  }

  .home-header__flower {
    width: 140px;
    height: 140px;
    opacity: 0.85;
  }

  .home-header__flower--left {
    top: 72px;
    left: 72px;
  }

  .home-header__flower--right {
    top: 220px;
    right: 44px;
  }

  .home-header__flower--copy {
    top: 548px;
    left: 418px;
    width: 78px;
    height: 78px;
    opacity: 0.48;
  }

  .home-header__shape {
    z-index: 4;
  }

  .home-header__shape--top {
    top: 106px;
    left: 496px;
    width: 200px;
    height: auto;
  }

  .home-header__shape--bottom {
    right: -8px;
    bottom: 78px;
    width: 160px;
    height: auto;
  }

  .home-header__dash {
    display: block;
    border-color: #f2b977;
    opacity: 0.8;
  }

  .home-header__dash--top {
    top: 130px;
    left: 170px;
    width: 300px;
    height: 110px;
    border-top: 2px dashed #f2b977;
    border-radius: 50%;
    transform: rotate(-13deg);
  }

  .home-header__dash--copy {
    top: 612px;
    left: 330px;
    width: 175px;
    height: 95px;
    border-bottom: 2px dashed #f2b977;
    border-radius: 50%;
    transform: rotate(-18deg);
  }

  @media (max-width: 1180px) {
    .home-header__content {
      padding-right: 48px;
    }

    .home-header__title {
      font-size: 56px;
    }
  }

  @media (max-width: 900px) {
    .home-header__content {
      padding-right: 24px;
    }

    .home-header__copy {
      gap: 18px;
    }

    .home-header__title {
      font-size: 44px;
    }

    .home-header__intro {
      font-size: 12px;
    }

    .home-header__flower--left,
    .home-header__flower--right,
    .home-header__dash--top {
      display: none;
    }

    .home-header__shape--top {
      left: calc(41% - 30px);
    }

    .home-header__shape--bottom {
      right: -34px;
    }
  }

  @media (max-width: 767px) {
    .home-header {
      border-bottom: 1px solid #d9d0c8;
    }

    .home-header__inner {
      width: min(100%, 351px);
      min-height: 652px;
      grid-template-columns: minmax(0, 1fr);
      gap: 24px;
      padding-bottom: 24px;
    }

    .home-header__media {
      grid-row: 1;
      height: 310px;
    }

    .home-header__content {
      grid-row: 2;
      align-items: flex-start;
      padding: 0;
    }

    .home-header__copy {
      max-width: none;
      gap: 12px;
    }

    .home-header__title {
      font-size: 32px;
      line-height: 1.08;
    }

    .home-header__intro {
      font-size: 11px;
      line-height: 1.7;
    }

    .home-header__actions {
      gap: 12px;
      padding-top: 4px;
    }

    .home-header__button {
      min-width: 78px;
      padding: 8px 14px;
      font-size: 11px;
    }

    .home-header__flower--copy {
      top: 384px;
      right: 46px;
      left: auto;
      width: 76px;
      height: 76px;
      opacity: 0.5;
    }

    .home-header__shape--top {
      top: -16px;
      left: -16px;
      width: 86px;
    }

    .home-header__shape--bottom {
      top: 258px;
      right: -28px;
      bottom: auto;
      width: 92px;
    }

    .home-header__dash--copy {
      top: 392px;
      right: 52px;
      left: auto;
      width: 132px;
      height: 72px;
      border-bottom-width: 1px;
      transform: rotate(-10deg);
    }
  }
</style>
