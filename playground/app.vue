<script setup lang="ts">
// import configOptions from '~/module.config'
import { ref } from 'vue'

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
  <h2>Swiper Creative Effect</h2>
  <swiper-container
    class="swiper-creative"
    :slides-per-view="1"
    :speed="500"
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
  <!-- <div>
    <h1>nuxt-swiper playground</h1>
    <h3>Options</h3>
    <ul>
      <li>
        Prefix: <strong>{{ JSON.stringify(configOptions.prefix) }}</strong>
      </li>
      <li>
        Style Language:
        <strong>{{ JSON.stringify(configOptions.styleLang) }}</strong>
      </li>
      <li>
        Enabled Modules:
        <strong>{{ JSON.stringify(configOptions.modules) }}</strong>
      </li>
    </ul>
    <hr />
    <h2>Swiper Creative Effect</h2>
    <Swiper
      :height="300"
      :modules="[SwiperAutoplay, SwiperEffectCreative]"
      :slides-per-view="1"
      :loop="true"

      :autoplay="{
        delay: 8000,
        disableOnInteraction: true
      }"
      :effect="'creative'"
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

      <SwiperControls />
    </Swiper>
    <h2>Swiper Card Effect</h2>
    <Swiper
      class="swiper-cards"
      :width="240"
      :modules="[SwiperAutoplay, SwiperEffectCards]"
      :slides-per-view="1"
      :loop="true"
      :effect="'cards'"
      :autoplay="{
        delay: 8000,
        disableOnInteraction: true
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
  </div> -->
</template>

<style lang="css">
swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  /* width: 100%; */
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
