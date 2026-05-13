<script setup>
  import Menu from './Component/Menu.vue';
  import HeaderArea from './Component/HeaderArea.vue';
  import ItemsPage from './pages/ItemsPage.vue';
  import SubscriptArea from './Component/SubscriptArea.vue';
  import Contact from './Component/Contact.vue';
</script>

<template>
  <Menu />
  <HeaderArea
    imageUrl="blog_banner.png"
    title="BLOGS"
    subtitle="部落格"
    filterMode="dark"
    filterStrength="50"
  />
  <ItemsPage />
  <SubscriptArea bgImage="subscription_bg.png" mainImage="subscription.png" />
  <Contact />
</template>
