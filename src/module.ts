import * as swiper from 'swiper'
import {
  defineNuxtModule,
  addPluginTemplate,
  addImports
} from '@nuxt/kit'
import { name, version } from '../package.json'

import type { SwiperModuleOptions } from './types'

export default defineNuxtModule<SwiperModuleOptions>({
  meta: {
    name,
    version,
    configKey: 'swiper'
  },
  defaults: {
    prefix: 'Swiper',
    styleLang: 'css',
    modules: '*'
  },
  setup (_options, nuxt) {
    const { styleLang, prefix, modules } = _options

    const cssImports = [`import 'swiper/${styleLang}'`]
    const moduleImports = [
      {
        name: 'useSwiper',
        as: 'useSwiper',
        from: 'swiper/vue'
      },
      {
        name: 'useSwiperSlide',
        as: 'useSwiperSlide',
        from: 'swiper/vue'
      }
    ]

    // Import Each Swiper Module & CSS if it exists.
    for (const [key, _] of Object.entries(swiper)) {
      // Turn key to snake-case.
      const snakeCase: string = key
        .replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2')
        .replace(/^-/, '')
        .toLowerCase()

      const hasModule =
        modules === '*' ||
        (Array.isArray(modules) && modules.includes(snakeCase as any))

      if (hasModule && !['default', 'Swiper'].includes(key)) {
        // Don't import if there is no css.
        const noCssInModules = [
          'autoplay',
          'controller',
          'effect-coverflow',
          'hash-navigation',
          'history',
          'keyboard',
          'manipulation',
          'mousewheel',
          'parallax',
          'thumbs'
        ]

        // Push Import Styles for each module
        if (!noCssInModules.includes(snakeCase)) {
          cssImports.push(`import 'swiper/${styleLang}/${snakeCase}'`)
        }

        // Import Swiper Modules
        moduleImports.push({
          name: key,
          as: `${prefix}${key}`,
          from: 'swiper'
        })
      }
    }

    // Add Composables imports from `swiper/vue`.
    addImports(moduleImports)

    // Add Plugin
    addPluginTemplate({
      filename: 'swiper.mjs',
      getContents () {
        const lines = [
          "import { Swiper, SwiperSlide } from 'swiper/vue'",
          `export default defineNuxtPlugin((nuxtApp) => {
            nuxtApp.vueApp.component('Swiper', Swiper)
            nuxtApp.vueApp.component('SwiperSlide', SwiperSlide)
          })`
        ]

        lines.unshift(...cssImports)

        return lines.join('\n')
      }
    })
  }
})

declare module '@nuxt/schema' {
  interface NuxtConfig {
    swiper?: SwiperModuleOptions
  }
  interface NuxtOptions {
    swiper?: SwiperModuleOptions
  }
}
