<script setup>
  import { RouterView } from 'vue-router';
  import Menu from './Component/Menu.vue';
  import Contact from './Component/Contact.vue';
</script>

<template>
  <Menu />

  <!-- 路由匹配到的元件（homePage 或 ItemsPage）會渲染在這裡 -->
  <main class="route-shell min-h-screen">
    <RouterView v-slot="{ Component, route }">
      <Transition name="page-slide">
        <component :is="Component" :key="route.fullPath" />
      </Transition>
    </RouterView>
  </main>

  <Contact />
</template>
