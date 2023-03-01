import swiperConfig from './module.config'
import swiper from '..'
export default defineNuxtConfig({
  modules: [swiper],
  swiper: swiperConfig,
  experimental: {
    componentIslands: true
  }
})
