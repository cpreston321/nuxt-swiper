import * as swiper from 'swiper'
import {
  defineNuxtModule,
  addPlugin,
  createResolver,
  useLogger,
  addImports,
  isNodeModules
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
    modules: []
  },
  setup (_options, nuxt) {
    let { styleLang } = _options

    const logger = useLogger(name)
    const { prefix, modules } = _options

    const { resolve } = createResolver(import.meta.url)
    const runtimePath = resolve('./runtime')

    // Add Imports Swiper Modules.
    const imports = [
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

    // Transpile Runtime
    nuxt.options.build.transpile.push(runtimePath)

    // Push Core Styles
    nuxt.options.css.push(`swiper/${styleLang}`)

    // Detect if styleLang has been changed
    if (styleLang === 'scss' && !isNodeModules('sass')) {
      styleLang = 'css'
      logger.warn(
        '[nuxt-swiper]: You need to install `sass` to use the scss option. Falling back to `css`.'
      )
    }

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
        // Push Styles for each module
        nuxt.options.css.push(`swiper/${styleLang}/${snakeCase}`)

        // Import Swiper Modules
        imports.push({
          name: key,
          as: `${prefix}${key}`,
          from: 'swiper'
        })
      }
    }

    // Add Composables imports from `swiper/vue`.
    addImports(imports)

    // Add Plugin
    addPlugin(resolve(runtimePath, 'plugin'))
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
