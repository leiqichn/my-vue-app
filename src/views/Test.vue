<script setup>
import {reactive, ref} from 'vue'

// 组件逻辑
// 此处声明一些响应式状态
  const counter = reactive({
  count: 0
})

	console.log(counter.count) // 0
	counter.count++
  const message = ref('hello world!')
  console.log(message.value) // "Hello World!"
	message.value = 'Changed'
</script>

<template>
  <h1>Make me dynamic!</h1>
  <h1>{{ message }}</h1>
	<p>Count is: {{ counter.count }}</p>
</template>