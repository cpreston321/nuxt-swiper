<script setup lang="ts">
const props = defineProps<{
  modelValue?: boolean
}>()
</script>

<template>
  <swiper-container>
    <slot />
  </swiper-container>
</template>
