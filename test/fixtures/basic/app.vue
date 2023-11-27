<script lang="ts" setup>
// Fill Array with random rgb values
const slides = ref(
  Array.from({ length: 10 }, (_, idx) => {
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)
    // Figure out contrast color for font
    const contrast = r * 0.299 + g * 0.587 + b * 0.114 > 186 ? 'black' : 'white'

    return { id: idx + 1, bg: `rgb(${r}, ${g}, ${b})`, color: contrast }
  }),
)
</script>

<template>
  <swiper-container
    :slides-per-view="1"
    :loop="true"
    :autoplay="{
      delay: 8000,
      disableOnInteraction: true,
    }"
  >
    <swiper-slide
      v-for="slide in slides"
      :key="`slide-${slide.id}`"
      :style="`background-color: ${slide.bg}; color: ${slide.color}`"
    >
      {{ idx }}
    </swiper-slide>
  </swiper-container>
</template>
