import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  modules: ['nuxt-swiper'],
  swiper: {
    modules: ['autoplay', 'effect-creative'],
    importComposables: true
  }
})
