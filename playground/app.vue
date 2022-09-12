<script setup>
// Fill Array with random rgb values
const colors = Array.from({ length: 10 }, () => {
  const r = Math.floor(Math.random() * 256)
  const g = Math.floor(Math.random() * 256)
  const b = Math.floor(Math.random() * 256)
  return `rgb(${r}, ${g}, ${b})`
})
const fakeArray = ref(colors)
</script>

<template>
  <div>
    <h1>nuxt-swiper playground</h1>
    <ul>
      <li>
        Enabled Modules: <strong>[SwiperAutoplay, SwiperEffectCreative]</strong>
      </li>
      <li>Composables Enabled: <strong>true</strong></li>
    </ul>
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
        v-for="(bg, idx) in fakeArray"
        :key="idx"
        :style="`background-color: ${bg}`"
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
  color: #000;
  font-size: 4rem;
  font-weight: bold;
}
</style>
