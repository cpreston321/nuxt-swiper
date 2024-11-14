import { defineNuxtPlugin, useAppConfig } from '#imports'

export default defineNuxtPlugin((nuxtApp) => {
  const appConfig = useAppConfig()

  nuxtApp.hook('app:created', async () => {
    const isBundle = appConfig.__swiper.bundled

    if (!isBundle) {
      // Register individual custom elements
      (await import('swiper/element')).register()
      return
    }

    // Register custom elements bundle
    (await import('swiper/element/bundle')).register()
  })
})
