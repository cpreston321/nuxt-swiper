import { defineNuxtConfig } from 'nuxt'
import swiperConfig from './module.config'

export default defineNuxtConfig({
  modules: ['nuxt-swiper'],
  swiper: swiperConfig
})
