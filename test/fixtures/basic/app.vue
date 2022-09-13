<script lang="ts" setup>
// Fill Array with random rgb values
const colors = Array.from({ length: 10 }, () => {
  const r = Math.floor(Math.random() * 256)
  const g = Math.floor(Math.random() * 256)
  const b = Math.floor(Math.random() * 256)
  // Figure out contrast color for font
  const contrast = r * 0.299 + g * 0.587 + b * 0.114 > 186 ? 'black' : 'white'

  return { bg: `rgb(${r}, ${g}, ${b})`, color: contrast }
})

const fakeArray = ref(colors)
</script>

<template>
  <Swiper
    :modules="[SwiperAutoplay, SwiperEffectCreative]"
    :slides-per-view="1"
    :loop="true"
    :effect="'creative'"
    :autoplay="{
      delay: 8000,
      disableOnInteraction: true
    }"
    :creative-effect="{
      prev: {
        shadow: false,
        translate: ['-20%', 0, -1]
      },
      next: {
        translate: ['100%', 0, 0]
      }
    }"
  >
    <SwiperSlide
      v-for="(array, idx) in fakeArray"
      :key="idx"
      :style="`background-color: ${array.bg}; color: ${array.color}`"
    >
      {{ idx }}
    </SwiperSlide>
  </Swiper>
</template>
