<script setup>
  import { computed, ref } from 'vue';
  import HeaderArea from '../Component/project/projectHeaderArea.vue';
  import projectSelectArea from '../Component/project/projectSelectArea.vue';
  import projectArea from '../Component/project/projectArea.vue';

  const activeTab = ref('全部');

  const list = ['全部', '平面設計', '網頁設計', '前端切版', '後端開發'];
  const projects = [
    {
      imgSrc: 'Project/project_1.png',
      mobileImgSrc: 'Project/mobile/project_1.png',
      date: 'Oct 16, 2025',
      categories: ['平面設計', '網頁設計'],
      title: '品牌視覺與電商整合，多肉植物品牌電商建置',
      description: '從品牌識別設計到 RWD 網站開發，打造療癒系植栽購物體驗。',
      content:
        '我們將大自然的平靜感轉化為數位語彙，透過揉合大地色系與極簡排版，為「PLANTIQUE LIFE」建構出專屬的視覺靈魂。在開發過程中，我們秉持對細節的極致追求，確保從品牌 Logo 到每一個組件的轉場，皆展現像素級的精準。',
      rule: ['植栽藝術', '日系風格', '暖陽視覺'],
      displayImgSrc: '/Project/project_modal_pic.png',
    },
    {
      imgSrc: 'Project/project_2.png',
      mobileImgSrc: 'Project/mobile/project_2.png',
      date: 'Oct 16, 2025',
      categories: ['平面設計', '網頁設計', '前端切版'],
      title: '數位產品 UI/UX 設計，個人化財務視覺化軟體',
      description: '運用數據視覺化邏輯，將複雜的財務數據轉化為直覺的操作介面',
    },
    {
      imgSrc: 'Project/project_3.png',
      mobileImgSrc: 'Project/mobile/project_3.png',
      date: 'Oct 16, 2025',
      categories: ['前端切版', '後端開發'],
      title: '品牌識別與包裝設計，法式甜點品牌視覺重塑',
      description: '以溫暖、輕盈的視覺語言，精準定位高質感甜點市場的品牌形象',
    },
    {
      imgSrc: 'Project/project_4.png',
      mobileImgSrc: 'Project/mobile/project_4.png',
      date: 'Oct 16, 2025',
      categories: ['網頁設計', '前端切版', '後端開發'],
      title: '金融科技系統設計，Open Bank API 數據整合平台',
      description: '串接第三方 API 並規劃穩定的後端架構，建構安全的資產管理後台。',
    },
  ];

  const projectCategories = computed(() => list);

  const filteredProjects = computed(() => {
    if (activeTab.value === '全部') {
      return projects;
    }

    return projects.filter((project) => project.categories.includes(activeTab.value));
  });
</script>

<template>
  <HeaderArea
    desktop-img="Project/project_banner.png"
    mobile-img="Project/project_banner_phone.png"
    title="PROJECTS"
    subtitle="專案作品"
  />
  <projectSelectArea v-model="activeTab" :categories="projectCategories" />
  <projectArea :projects="filteredProjects" />
</template>
