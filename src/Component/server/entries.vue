<script setup>
  import { computed, onBeforeUnmount, onMounted, ref } from 'vue';
  import { LayoutTemplate, Monitor, PaintBucket, Server } from 'lucide-vue-next';
  import { assetUrl } from '../../utils/assetUrl';

  const props = defineProps({
    bgImage: {
      type: String,
      default: 'service/service_banner.png',
    },
    mobileBgImage: {
      type: String,
      default: 'service/mobile/service_banner.png',
    },
    bgOpacity: {
      type: Number,
      default: 40,
    },
  });

  const services = ref([
    {
      title: '平面設計',
      sub: 'Graphic',
      icon: PaintBucket,
      active: true,
    },
    {
      title: '網頁設計',
      sub: 'Website',
      icon: Monitor,
      active: false,
    },
    {
      title: '前端切版',
      sub: 'Frontend',
      icon: LayoutTemplate,
      active: false,
    },
    {
      title: '後端開發',
      sub: 'Backend',
      icon: Server,
      active: false,
    },
  ]);

  const setActive = (index) => {
    services.value.forEach((item, i) => {
      item.active = i === index ? !item.active : false;
    });
  };

  const isMobile = ref(false);
  let mediaQuery = null;

  const updateIsMobile = () => {
    isMobile.value = mediaQuery?.matches ?? false;
  };

  onMounted(() => {
    mediaQuery = window.matchMedia('(max-width: 767px)');
    updateIsMobile();
    mediaQuery.addEventListener('change', updateIsMobile);
  });

  onBeforeUnmount(() => {
    mediaQuery?.removeEventListener('change', updateIsMobile);
  });

  const resolvedBgImage = computed(() => assetUrl(props.bgImage));
  const resolvedMobileBgImage = computed(() => assetUrl(props.mobileBgImage));
  const currentBgImage = computed(() =>
    isMobile.value ? resolvedMobileBgImage.value : resolvedBgImage.value,
  );
</script>

<template>
  <section
    :style="{
      backgroundImage: `linear-gradient(rgba(0,0,0,${props.bgOpacity / 100}), rgba(0,0,0,${props.bgOpacity / 100})), url(${currentBgImage})`,
    }"
    class="service-section bg-brand-brown flex flex-col items-center border-b border-white/20 px-3 py-10 text-center md:px-10 md:py-20"
  >
    <div class="mx-auto flex w-full max-w-[1076px] flex-col items-center gap-6 md:gap-10">
      <h2 class="text-[26px] leading-[0.95] font-bold text-white md:text-[80px]">
        SERVICES
        <br />
        <span class="text-[20px] leading-none font-bold md:text-[40px]">服務項目</span>
      </h2>

      <div
        class="grid w-full max-w-[351px] grid-cols-2 gap-[4px] md:max-w-none md:grid-cols-4 md:gap-6"
      >
        <button
          v-for="(item, index) in services"
          :key="item.title"
          type="button"
          @click="setActive(index)"
          :class="[
            'flex h-[128px] w-full cursor-pointer flex-col items-center justify-center transition-colors duration-200 md:h-[170px] md:w-[251px]',
            item.active
              ? 'bg-brand-brown border border-white/20 text-white'
              : 'text-brand-brown hover:bg-brand-brown bg-white hover:border hover:border-white/20 hover:text-white',
          ]"
        >
          <component :is="item.icon" class="mb-[6px] h-[12px] w-[12px] md:mb-3 md:h-6 md:w-6" />
          <span class="text-[7px] leading-none font-bold tracking-wide uppercase md:text-[12px]">
            {{ item.sub }}
          </span>
          <h3 class="mt-[3px] text-[16px] leading-tight font-bold md:mt-1 md:text-[24px]">
            {{ item.title }}
          </h3>
        </button>
      </div>
    </div>
  </section>
</template>
