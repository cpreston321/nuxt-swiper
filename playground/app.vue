<script setup lang="ts">
import { ref } from 'vue'
import { useSwiper } from '#imports'

// Fill Array with random rgb values
const colors = Array.from({ length: 10 }, () => {
  const r = Math.floor(Math.random() * 256)
  const g = Math.floor(Math.random() * 256)
  const b = Math.floor(Math.random() * 256)

  const contrast = r * 0.299 + g * 0.587 + b * 0.114 > 186 ? 'black' : 'white'

  return { bg: `rgb(${r}, ${g}, ${b})`, color: contrast }
})

const slides = ref(colors)

const swiperRef = ref(null)
const swiper1 = useSwiper(swiperRef)
</script>

<template>
  <h2>Swiper Basic</h2>
  <swiper-container
    ref="swiperRef"
    class="swiper-basic"
    :loop="true"
  >
    <swiper-slide
      v-for="(slide, idx) in slides"
      :key="idx"
      class="swiper-slide"
      :style="`background-color: ${slide.bg}; color: ${slide.color};`"
    >
      SLIDE {{ idx + 1 }}
    </swiper-slide>
  </swiper-container>

  <button @click="swiper1.prev()">Prev</button>
  <button @click="swiper1.next()">Next</button>

  <h2>Swiper Card Effect</h2>
  <swiper-container
    class="swiper-cards"
    :width="240"
    :slides-per-view="1"
    :loop="true"
    effect="cards"
    :autoplay="{
      delay: 8000,
      disableOnInteraction: true,
    }"
  >
    <swiper-slide
      v-for="(slide, idx) in slides"
      :key="idx"
      :style="`background-color: ${slide.bg}; color: ${slide.color};`"
    >
      {{ idx + 1 }}
    </swiper-slide>
  </swiper-container>
</template>

<style lang="css">
swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  height: 20vh;
  font-size: 4rem;
  font-weight: bold;
  font-family: 'Roboto', sans-serif;
}

.swiper-basic .swiper-wrapper {
  min-width: 100vh;
  width: 100vh;
}

.swiper-cards {
  width: 240px;
  height: 240px;
}
.swiper-cards swiper-slide {
  border-radius: 6px;
  border: 1px solid black;
}
</style>
