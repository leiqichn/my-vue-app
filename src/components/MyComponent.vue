<template>
  <input :value="innerValue" @input="updateValue" />
</template>

<script setup lang="ts">
import { ref, watch, defineProps, defineEmits } from 'vue';

const props = defineProps<{
  modelValue: string
}>();

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>();

const innerValue = ref(props.modelValue);

watch(() => props.modelValue, (newValue) => {
  innerValue.value = newValue;
});

const updateValue = (event: Event) => {
  const target = event.target as HTMLInputElement;
  innerValue.value = target.value;
  emit('update:modelValue', innerValue.value);
};
</script>
