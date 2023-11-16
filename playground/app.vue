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

const fakeArray = ref(colors)

const swiperRef = ref(null)
const swiper1 = useSwiper(swiperRef)
</script>

<template>
  <h2>Swiper Creative Effect</h2>
  <swiper-container
    ref="swiperRef"
    class="swiper-creative"
    :slides-per-view="1"
    :speed="500"
    effect="creative"
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
    <swiper-slide
      v-for="(array, idx) in fakeArray"
      :key="idx"
      class="swiper-slide"
      :style="`background-color: ${array.bg}; color: ${array.color}`"
    >
      {{ idx }}
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
      v-for="(array, idx) in fakeArray"
      :key="idx"
      :style="`background-color: ${array.bg}; color: ${array.color}`"
    >
      {{ idx }}
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

.swiper-creative .swiper-wrapper {
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
