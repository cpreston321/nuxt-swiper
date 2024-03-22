import { defineNuxtPlugin, useAppConfig } from '#imports'

export default defineNuxtPlugin((nuxtApp) => {
  const appConfig = useAppConfig()

  nuxtApp.hook('app:created', async () => {
    // @ts-expect-error - runtime app config is not typed
    const isBundle = appConfig?.__swiper?.bundled ?? true

    if (isBundle) { // Register custom elements bundle
      (await import('swiper/element/bundle')).register()
    }
    else { // Register individual custom elements
      (await import('swiper/element')).register()
    }
  })
})
