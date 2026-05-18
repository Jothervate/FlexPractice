<script setup>
  import { Eye, Instagram, MessageCircle, Share2 } from 'lucide-vue-next';
  import BlogArticleTop from './blogArticleTop.vue';
  import BlogsLink from './blogsLink.vue';
  import { assetUrl } from '../../utils/assetUrl';

  const props = defineProps({
    imageSrc: {
      type: String,
      default: '/blogContent/blog_content_1.png',
    },
    workflowImageSrc: {
      type: String,
      default: '/blogContent/blog_content_2.png',
    },
    type: {
      type: Array,
      default: () => ['UIUX 設計', '前端技術', 'AI 趨勢應用'],
    },
    title: {
      type: String,
      default: '當 AI 遇上介面設計：資深設計師如何利用生成式工具重塑前端開發工作流與視覺想像力',
    },
    description: {
      type: String,
      default:
        '從像素到程式碼，探討 AI 如何成為數位職人的最強外掛，在美學與邏輯的交界處創造全新價值。',
    },
    date: {
      type: String,
      default: 'Oct 16, 2022',
    },
    views: {
      type: Number,
      default: 110,
    },
    shares: {
      type: Number,
      default: 2,
    },
  });

  const toolRows = [
    {
      name: 'Midjourney',
      use: '視覺構思',
      advantage: '創意發想極致，適合風格探索與氛圍圖生成',
      beginner: '中高',
    },
    {
      name: 'Figma AI',
      use: 'UI 設計',
      advantage: '直接整合於設計稿，快速生成組件與圖表',
      beginner: '低',
    },
    {
      name: 'GitHub Copilot',
      use: '程式開發',
      advantage: '邏輯代碼預測準確，減少重複性標籤撰寫',
      beginner: '中',
    },
    {
      name: 'Claude',
      use: '程式邏輯',
      advantage: '具備強大文脈理解力，能優化複雜的用戶流程',
      beginner: '中',
    },
  ];
</script>

<template>
  <BlogArticleTop />
  <article class="article-page bg-white px-5 py-10 text-[#3d3d3d] md:px-10 md:py-16">
    <div class="mx-auto w-full max-w-[1076px]">
      <header class="article-hero">
        <div class="flex items-start justify-between gap-6">
          <p class="article-meta">
            {{ props.type.join('・') }}
          </p>
          <time class="article-date hidden md:block" :datetime="props.date">{{ props.date }}</time>
        </div>

        <h1 class="article-title">
          {{ props.title }}
        </h1>

        <p class="article-description">
          {{ props.description }}
        </p>
        <p class="pt-[8px] md:pt-[16px]">
          在跨入 UI/UX 與前端領域的第十年，我見證了無數技術更迭，但 AI
          的出現無疑是最具衝擊性的一場革命。本文將深度解析資深設計師如何將生成式 AI
          整合進現有工作流程，透過 AI
          釋放視覺想像力，並利用智慧化工具優化前端開發效率，實踐美學與技術的完美共生。
        </p>
      </header>

      <section class="article-copy">
        <div class="article-section-block">
          <div>
            <h2 class="article-heading-lg">視覺想像力的無限延伸：從 Moodboard 到驚艷視覺</h2>
            <p>
              以往在發想專案視覺風格時，往往受限於素材搜尋的耗時或手繪草圖的限制。現在，透過
              Midjourney 或 DALL-E
              等工具，我能在幾分鐘內產出數十種具備極致美感的配色方案與佈局可能性。這並非取代設計師的審美，而是讓我們從繁瑣的執行工作中解放，轉而擔任「視覺策展人」的角色，從龐大的
              AI 提案中精煉出最契合品牌魂魄的視覺語言。
            </p>
          </div>

          <figure>
            <img :src="assetUrl(props.imageSrc)" alt="AI 輔助介面設計流程示意" />
            <figcaption>
              利用 AI 快速生成的品牌視覺概念圖，能有效縮短與客戶在初期的溝通成本。
            </figcaption>
          </figure>

          <blockquote>
            <cite>我認為</cite>
            <p>AI 不會取代設計師，但那些懂得與 AI 協作的人，將會定義下一個世代的設計標準</p>
          </blockquote>
        </div>

        <div class="article-section-block">
          <div>
            <h2 class="article-heading-lg">工作流的重塑：當設計稿與程式碼無縫銜接</h2>
            <p>
              身為前端工程師，最挑戰的環節往往是將精美的設計稿「精準轉譯」為流暢的程式碼。AI
              的介入讓這個轉譯過程變得前所未有的流暢。無論是自動產生複雜的 CSS 佈局、建構 React
              元件邏輯，還是優化響應式斷點，AI
              就像是一位全天候待命的技術助理，讓我們能將精力集中在更高複雜度的互動體驗設計與產品效能優化。
            </p>
          </div>

          <figure>
            <img :src="assetUrl(props.workflowImageSrc)" alt="AI 輔助前端工作流示意" />
            <figcaption>AI 輔助生成的 Clean Code 結構，顯著提升開發整潔度。</figcaption>
          </figure>
        </div>

        <div class="article-section-block">
          <div>
            <h2 class="article-heading-lg">跨領域利器：精選 AI 工具的實戰應用對比</h2>
            <p>
              在數位職人的工具箱中，選擇正確的武器至關重要。為了讓大家在開發與設計的混合戰場中更具效率，我整理了一份實戰應用對比表。這份表格不僅是基於工具的功能，更是從我這十年的實務經驗出發，評估各項工具在實際專案中的落地價值與學習門檻，協助你快速找到最適合自己的
              AI 隊友。
            </p>
          </div>

          <div class="article-table-group">
            <h3 class="article-heading-sm">2026 數位職人必備 AI 工具效能對比表</h3>
            <div class="overflow-x-auto">
              <table>
                <thead>
                  <tr>
                    <th>工具名稱</th>
                    <th>應用範疇</th>
                    <th>核心優勢</th>
                    <th>學習曲線</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="tool in toolRows" :key="tool.name">
                    <td>{{ tool.name }}</td>
                    <td>{{ tool.use }}</td>
                    <td>{{ tool.advantage }}</td>
                    <td>{{ tool.beginner }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <footer class="article-footer">
        <p>
          AI
          的崛起並非數位職涯的終點，而是另一個高峰的起點。對於喜歡把美學與程式結合的我們來說，這是一個最好的時代。AI
          給了我們更強大的雙翼，讓我們能飛得更高、看見更遠的設計地平線。保持好奇心，持續優化你的
          Prompt，讓技術為藝術服務，創造出更多令人驚艷的作品。
        </p>

        <div class="article-footer-row">
          <div class="article-stats">
            <span>
              <Eye class="h-4 w-4" />
              {{ props.views }} views
            </span>
            <span>
              <Share2 class="h-4 w-4" />
              {{ props.shares }} shares
            </span>
          </div>

          <div class="article-share">
            <span>分享</span>
            <button
              type="button"
              aria-label="分享文章"
              class="article-share-button article-share-button--share"
            >
              <Share2 class="h-5 w-5" />
            </button>
            <button
              type="button"
              aria-label="分享到 Instagram"
              class="article-share-button article-share-button--instagram"
            >
              <Instagram class="h-5 w-5" />
            </button>
            <button
              type="button"
              aria-label="分享到 LINE"
              class="article-share-button article-share-button--line"
            >
              <MessageCircle class="h-5 w-5" />
            </button>
          </div>
        </div>
      </footer>
    </div>
  </article>
  <BlogsLink />
</template>

<style scoped>
  .article-page {
    letter-spacing: 0;
  }

  .article-hero {
    margin-bottom: 28px;
  }

  .article-meta {
    margin: 0;
    color: #4a4a4a;
    font-size: 14px;
    font-weight: 700;
    line-height: 1.45;
  }

  .article-date {
    color: #4a4a4a;
    font-size: 16px;
    font-weight: 600;
    line-height: 1.45;
    white-space: nowrap;
  }

  .article-title {
    margin-top: 12px;
    color: #3d3d3d;
    font-size: 32px;
    font-weight: 800;
    line-height: 1.35;
  }

  .article-description {
    margin-top: 14px;
    color: #4a4a4a;
    font-size: 18px;
    font-weight: 700;
    line-height: 1.6;
  }

  .article-copy {
    color: #4b423b;
    font-size: 15px;
    line-height: 1.9;
  }

  .article-copy h2 {
    margin-top: 32px;
    margin-bottom: 10px;
    color: #2c2520;
    line-height: 1.45;
  }

  .article-heading-lg {
    font-size: 24px;
    font-weight: 700;
  }

  .article-heading-sm {
    font-size: 18px;
    font-weight: 700;
  }

  .article-copy p {
    margin-bottom: 14px;
  }

  .article-section-block {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .article-section-block + .article-section-block {
    margin-top: 32px;
  }

  .article-section-block > div {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .article-section-block h2,
  .article-section-block p {
    margin: 0;
  }

  .article-table-group {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .article-table-group h3 {
    margin: 0;
    color: #3d3d3d;
    line-height: 1.4;
  }

  .article-copy figure {
    margin: 28px 0 20px;
  }

  .article-section-block figure {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 0;
  }

  .article-copy img {
    display: block;
    width: 100%;
    aspect-ratio: 16 / 7;
    object-fit: cover;
  }

  .article-copy figcaption {
    margin-top: 8px;
    color: #948b83;
    font-size: 12px;
    line-height: 1.6;
  }

  .article-section-block figcaption {
    margin-top: 0;
  }

  .article-copy blockquote {
    margin: 22px 0;
    background: #faf5ef;
    padding: 18px 24px;
    color: #6d5644;
    text-align: center;
    font-size: 15px;
    font-weight: 600;
  }

  .article-section-block blockquote {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 0;
    padding: 20px 24px;
  }

  .article-section-block blockquote cite {
    color: #8a817a;
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: 1.4;
  }

  .article-section-block blockquote p {
    color: #4a4a4a;
    font-size: 18px;
    font-weight: 700;
    line-height: 1.55;
  }

  .article-copy table {
    width: 100%;
    min-width: 720px;
    margin: 22px 0 18px;
    border-collapse: collapse;
    font-size: 14px;
    line-height: 1.65;
    table-layout: fixed;
  }

  .article-table-group table {
    margin: 0;
  }

  .article-copy th {
    background: #2b170f;
    padding: 10px 14px;
    color: #ffffff;
    text-align: left;
    font-weight: 700;
  }

  .article-copy td {
    border: 1px solid #ddcec0;
    background: #fffaf5;
    padding: 12px 14px;
    color: #4d423b;
    vertical-align: top;
  }

  .article-copy th,
  .article-copy td {
    word-break: break-word;
  }

  .article-footer {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 32px;
    border-top: 1px solid #737373;
    padding-top: 20px;
    color: #4a4a4a;
  }

  .article-footer p {
    margin: 0;
    font-size: 15px;
    font-weight: 500;
    line-height: 1.8;
  }

  .article-footer-row {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 20px;
  }

  .article-stats,
  .article-share {
    display: flex;
    align-items: center;
  }

  .article-stats {
    gap: 14px;
    color: #5f5f5f;
    font-size: 15px;
    font-weight: 500;
    white-space: nowrap;
  }

  .article-stats span,
  .article-share span {
    display: inline-flex;
    align-items: center;
    gap: 8px;
  }

  .article-share {
    gap: 12px;
    color: #3d3d3d;
    font-size: 15px;
    font-weight: 600;
    white-space: nowrap;
  }

  .article-share-button {
    display: inline-flex;
    width: 44px;
    height: 44px;
    align-items: center;
    justify-content: center;
    border: 1px solid #737373;
    border-radius: 999px;
    color: #4a4a4a;
    transition:
      background-color 180ms ease,
      color 180ms ease,
      border-color 180ms ease;
  }

  .article-share-button--share:hover,
  .article-share-button--share:active {
    border-color: #007fff;
    background: #007fff;
    color: #fff;
  }

  .article-share-button--instagram:hover,
  .article-share-button--instagram:active {
    border-color: #ff00d0;
    background: #ff00d0;
    color: #000000;
  }

  .article-share-button--line:hover,
  .article-share-button--line:active {
    border-color: #06c755;
    background: #06c755;
    color: #ffffff;
  }

  @media (min-width: 768px) {
    .article-hero {
      margin-bottom: 32px;
    }

    .article-title {
      margin-top: 14px;
      font-size: 48px;
      line-height: 1.22;
    }

    .article-description {
      margin-top: 16px;
      font-size: 22px;
      line-height: 1.55;
    }

    .article-section-block {
      gap: 24px;
    }

    .article-section-block + .article-section-block {
      margin-top: 40px;
    }

    .article-section-block > div {
      gap: 12px;
    }

    .article-heading-lg {
      font-size: 32px;
    }

    .article-heading-sm {
      font-size: 24px;
    }

    .article-table-group {
      gap: 20px;
    }

    .article-footer {
      gap: 24px;
      margin-top: 48px;
      padding-top: 24px;
    }

    .article-footer-row {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      gap: 24px;
    }

    .article-share-button {
      width: 40px;
      height: 40px;
    }
  }

  @media (max-width: 767px) {
    .article-copy {
      font-size: 12px;
      line-height: 1.75;
    }

    .article-footer p {
      font-size: 18px;
      line-height: 1.55;
    }

    .article-copy h2 {
      margin-top: 24px;
      line-height: 1.45;
    }

    .article-section-block h2 {
      margin-top: 0;
      line-height: 1.35;
    }

    .article-copy img {
      aspect-ratio: 16 / 9;
    }

    .article-copy blockquote {
      padding: 12px 14px;
      font-size: 12px;
    }

    .article-section-block blockquote {
      padding: 18px 20px;
    }

    .article-section-block blockquote p {
      font-size: 14px;
      line-height: 1.6;
    }

    .article-copy table {
      min-width: 0;
      font-size: 11px;
      line-height: 1.5;
    }

    .article-table-group h3 {
      line-height: 1.45;
    }

    .article-copy th,
    .article-copy td {
      padding: 7px 6px;
    }
  }
</style>
