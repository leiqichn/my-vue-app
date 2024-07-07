import { createRouter, createWebHistory } from 'vue-router';
import TestPage from '../views/Test.vue'; // 新页面组件
import VBind from '../views/v-bind.vue';
import VOn from '../views/v-on.vue';
// 创建路由实例
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/test',
      name: 'Test',
      component: TestPage,
    },
    {
      path: '/v-bind',
      name: 'v-bind',
      component: VBind,
    },
    {
      path: '/v-on',
      name: 'v-on',
      component: VOn,
    },
  ],
});

export default router;