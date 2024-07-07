<script setup>
import { ref } from 'vue'
// 创建一个响应式的引用
const titleClass = ref('title')
</script>

<template>
  <h1 v-bind:class=titleClass>Make me red</h1> <!-- 此处添加一个动态 class 绑定 -->
</template>

<style>
.title {
  color: red;
}
</style>