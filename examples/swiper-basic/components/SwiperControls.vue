<script setup lang="ts">
const props = defineProps({
  swiperRef: Object as any,
})
const swiper = useSwiper(props.swiperRef)
</script>

<template>
  <button @click="swiper.next()">
    Next
  </button>
  <button @click="swiper.prev()">
    Previous
  </button>
</template>
