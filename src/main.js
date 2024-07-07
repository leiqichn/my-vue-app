import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index.js'; // 导入路由配置

const app = createApp(App);

app.use(router); // 使用路由

app.mount('#app');
