<script setup lang="ts">
import { useSwiper } from '#imports'
import { ref } from 'vue'

const slides = ref(
  Array.from({ length: 10 }, (_, idx) => {
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)

    const contrast = r * 0.299 + g * 0.587 + b * 0.114 > 186 ? 'black' : 'white'

    return {
      id: idx + 1,
      bg: `rgb(${r}, ${g}, ${b})`,
      color: contrast,
    }
  }),
)

const swiperBasicRef = ref(null)
const swiperCreativeRef = ref(null)
const swiper1 = useSwiper(swiperBasicRef)

/**
 * Pass in options to the useSwiper hook to customize the swiper instance
 * then automatically bind the swiper instance to the ref
 */
useSwiper(swiperCreativeRef, {
  effect: 'creative',
  autoplay: {
    delay: 8000,
    disableOnInteraction: true,
  },
  creativeEffect: {
    prev: {
      translate: ['-125%', 0, -800],
      rotate: [0, 0, -90],
    },
    next: {
      translate: ['125%', 0, -800],
      rotate: [0, 0, 90],
    },
  },
})
</script>

<template>
  <main>
    <div class="swiper-wrapper">
      <h2>Basic</h2>
      <div class="swiper-wrapper__inner">
        <ClientOnly>
          <swiper-container
            class="swiper-basic"
            :loop="true"
          >
            <swiper-slide
              v-for="slide in slides"
              :key="`slide-basic-${slide.id}`"
              class="swiper-slide"
              :style="`background-color: ${slide.bg}; color: ${slide.color};`"
            >
              {{ slide.id }}
            </swiper-slide>
          </swiper-container>
        </ClientOnly>
      </div>
    </div>

    <div class="swiper-wrapper">
      <h2>Basic w/ Slots & Custom Navigation</h2>

      <div
        class="swiper-wrapper__inner"
      >
        <ClientOnly>
          <swiper-container
            ref="swiperBasicRef"
            class="swiper-basic"
            :loop="true"
          >
            <div slot="container-start">
              Slot component before wrapper
            </div>
            <div slot="container-end">
              Slot component after wrapper
            </div>
            <swiper-slide
              v-for="slide in slides"
              :key="`slide-basic-${slide.id}`"
              class="swiper-slide"
              :style="`background-color: ${slide.bg}; color: ${slide.color};`"
            >
              {{ slide.id }}
            </swiper-slide>
          </swiper-container>

          <div class="swiper-basic-buttons">
            <button @click="swiper1.prev()">
              Prev
            </button>
            <button @click="swiper1.next()">
              Next
            </button>
          </div>
        </ClientOnly>
      </div>
    </div>

    <div class="swiper-wrapper">
      <h2>Creative Effect</h2>
      <div class="swiper-wrapper__inner">
        <ClientOnly>
          <swiper-container ref="swiperCreativeRef" class="swiper-creative" :loop="true" :init="false">
            <swiper-slide
              v-for="slide in slides"
              :key="`slide-creative-${slide.id}`"
              class="swiper-slide"
              :style="`background-color: ${slide.bg}; color: ${slide.color};`"
            >
              {{ slide.id }}
            </swiper-slide>
          </swiper-container>
        </ClientOnly>
      </div>
    </div>

    <div class="swiper-wrapper">
      <h2>Card Effect</h2>

      <div class="swiper-wrapper__inner">
        <ClientOnly>
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
              v-for="slide in slides"
              :key="`slide-card-${slide.id}`"
              :style="`background-color: ${slide.bg}; color: ${slide.color};`"
            >
              {{ slide.id }}
            </swiper-slide>
          </swiper-container>
        </ClientOnly>
      </div>
    </div>
  </main>
</template>

<style lang="css">
html,
body {
  margin: 0;
  padding: 0;
  font-family: 'Roboto', sans-serif;
}

#__nuxt {
  height: 100dvh;
  max-height: 100dvh;
  box-sizing: border-box;
}

main {
  display: flex;
  flex-direction: column;
  padding: 1rem 1rem;
}

main > .swiper-wrapper:not(:last-child) {
  border-bottom: 1px solid #d9d9d9;
  padding-bottom: 2rem !important;
  margin-bottom: 2rem !important;
}

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

.swiper-wrapper {
  display: flex;
  flex-direction: column;
}

.swiper-wrapper h2 {
  font-size: 1.5rem;
  font-weight: bold;
  margin-top: 0;
  margin-bottom: 1rem;
}

.swiper-wrapper__inner {
  border: 1px solid #eaeaea;
  background-color: #f5f5f5;
  padding: 1rem;
  border-radius: 8px;
}

.swiper-basic-buttons {
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
}

.swiper-basic-buttons button {
  padding: 0.5rem 1rem;
  border-radius: 6px;
  border: 1px solid black;
  background-color: white;
  cursor: pointer;
}

.swiper-basic-buttons button:hover {
  background-color: black;
  color: white;
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
