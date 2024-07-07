<template>
  <div>
    <MyComponent v-model="parentValue" />
    <p>父组件中的值: {{ parentValue }}</p>
  </div>
  <router-link to="/test">前往 Test 页面</router-link> <!-- 导航链接 -->
    <router-link to="/v-bind">前往 Attribute绑定页面</router-link> <!-- 导航链接 -->
      <router-link to="/v-on">前往 v-on 事件监听页面</router-link>
  <router-link to="/v-model">前往 v-model双向绑定页面</router-link>
  <router-view/> <!-- 路由视图出口 -->
</template>

<script setup lang="ts">
import { ref } from 'vue';
import MyComponent from './components/MyComponent.vue';

const parentValue = ref<string>('');
</script>