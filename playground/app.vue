<script setup>
import configOptions from '~/module.config'

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
  <div>
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
    <h2>Swiper Card Effect</h2>
    <Swiper
      class="swiper-cards"
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
  </div>
</template>

<style>
.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  width: 100vh;
  height: 20vh;
  font-size: 4rem;
  font-weight: bold;
  font-family: 'Roboto', sans-serif;
}
.swiper-cards {
  width: 240px;
  height: 240px;
}
.swiper-cards .swiper-slide {
  border-radius: 6px;
  border: 1px solid black;
}
</style>
