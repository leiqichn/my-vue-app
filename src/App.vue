<template>
  <div>
    <MyComponent v-model="parentValue" />
    <p>父组件中的值: {{ parentValue }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import MyComponent from './components/MyComponent.vue';

const parentValue = ref<string>('');
</script>