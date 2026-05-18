import { createRouter, createWebHashHistory } from 'vue-router';
import homePage from './src/pages/homepage.vue';
import serverPage from './src/pages/serverPage.vue';
import blogPage from './src/pages/blogPage.vue';
import article from './src/Component/blogs/article.vue';

const routes = [
  { path: '/', component: homePage },
  { path: '/server', component: serverPage },
  { path: '/blog', component: blogPage },
  { path: '/blog/4', component: article },
];

const scrollToTop = () => {
  if (typeof window === 'undefined') return;

  const startTop = window.scrollY;
  const duration = 200;
  const startTime = performance.now();

  if (startTop <= 0) return;

  const easeOutCubic = (progress) => 1 - Math.pow(1 - progress, 3);

  const step = (currentTime) => {
    const progress = Math.min((currentTime - startTime) / duration, 1);
    const nextTop = startTop * (1 - easeOutCubic(progress));

    window.scrollTo(0, nextTop);

    if (progress < 1) {
      requestAnimationFrame(step);
    }
  };

  requestAnimationFrame(step);
};

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    scrollToTop();
    return false;
  },
});

export default router;
