import { createRouter, createWebHistory } from 'vue-router';
import TestPage from '../views/Test.vue'; // 新页面组件

// 创建路由实例
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/test',
      name: 'Test',
      component: TestPage,
    },
  ],
});

export default router;