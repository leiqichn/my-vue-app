<script setup>
import { ref } from 'vue'

const count = ref(0)
// 函数引用
const increment = () => {
  count.value++
}
// 函数
// function increment() {
//   count.value++
// }
</script>

<template>
  <!-- 使此按钮生效 -->
  <button v-on:click="increment">Count is: {{ count }}</button>
    <button @click="increment">Count is: {{ count }}</button>
</template>