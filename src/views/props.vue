<script setup>
import { ref } from 'vue'
import ChildComp from './ChildCompProps.vue'

const greeting = ref('Hello from parent')
</script>

<template>
  <ChildComp :msg="greeting" />
<!--  //子组件可以通过 props 从父组件接受动态数据。首先，需要声明它所接受的 props：-->
</template>