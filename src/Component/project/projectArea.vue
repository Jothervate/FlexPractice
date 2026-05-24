<script setup>
  import { ref } from 'vue';
  import { ArrowRight } from 'lucide-vue-next';
  import ProjectContent from './ProjectContent.vue';
  import ProjectWorkCard from './ProjectWorkCard.vue';

  defineProps({
    projects: {
      type: Array,
      default: () => [],
    },
  });

  const selectedProject = ref(null);

  const openProject = (project) => {
    selectedProject.value = project;
  };

  const closeProject = () => {
    selectedProject.value = null;
  };
</script>

<template>
  <section
    class="w-full border-b border-[#E6E1DA] px-[12px] pb-[40px] transition-colors md:px-[40px] md:pb-[80px]"
    :class="selectedProject ? 'bg-[#FDF7F1]' : 'bg-white'"
  >
    <div class="mx-auto flex w-full max-w-[1296px] flex-col gap-[40px] md:gap-[80px]">
      <ProjectWorkCard
        v-for="project in projects"
        :key="project.title"
        :img-src="project.imgSrc"
        :mobile-img-src="project.mobileImgSrc"
        :date="project.date"
        :categories="project.categories"
        :title="project.title"
        :description="project.description"
        :desktop-object-position="project.desktopObjectPosition"
        :mobile-object-position="project.mobileObjectPosition"
        @open="openProject(project)"
      />

      <div class="flex justify-center">
        <button
          type="button"
          class="inline-flex items-center justify-center gap-[8px] rounded-[999px] bg-[#3F3F3F] px-[20px] py-[12px] text-[14px] leading-none font-bold text-white transition-colors hover:bg-[#2A1F1C] focus-visible:ring-2 focus-visible:ring-[#2A1F1C] focus-visible:ring-offset-2 focus-visible:outline-none md:px-[24px]"
        >
          <span>探索更多</span>
          <ArrowRight :size="16" :stroke-width="2" aria-hidden="true" />
        </button>
      </div>
    </div>

    <Transition name="project-content">
      <ProjectContent v-if="selectedProject" :project="selectedProject" @close="closeProject" />
    </Transition>
  </section>
</template>

<style scoped>
  .project-content-enter-active,
  .project-content-leave-active {
    transition:
      opacity 260ms ease,
      transform 260ms ease;
  }

  .project-content-enter-from,
  .project-content-leave-to {
    opacity: 0;
    transform: translateY(-28px);
  }
</style>
