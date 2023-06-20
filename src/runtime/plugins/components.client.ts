import { register } from 'swiper/element'
import { defineNuxtPlugin, useRuntimeConfig } from '#imports'

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig()

  nuxtApp.hook('app:mounted', () => {
    register(config.public.swiper.injectStyles)
  })
})
