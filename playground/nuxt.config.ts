import { defineNuxtConfig } from 'nuxt'
import NuxtSwiper from 'nuxt-swiper'

export default defineNuxtConfig({
  modules: [NuxtSwiper],
  swiper: {
    styleLang: 'scss',
    modules: '*',
    importComposables: false
  }
})
