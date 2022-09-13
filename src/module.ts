import * as swiper from 'swiper'
import {
  defineNuxtModule,
  addPlugin,
  createResolver,
  useLogger,
  addImports,
  addImportsDir,
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

    // Transpile Runtime
    nuxt.options.build.transpile.push(runtimePath)

    // Import Swiper CSS Modules
    if (typeof modules === 'string' && modules === '*') {
      logger.warn(
        '[nuxt-swiper]: `styleLang: "' +
          styleLang +
          '"` option ignored with `modules: "*"`.'
      )
      logger.warn(
        '[nuxt-swiper]: importing all `swiper` modules is not recommended. This will increase bundle size for production.'
      )
      nuxt.options.css.push('swiper/css')
      nuxt.options.css.push('swiper/css/bundle')
    } else if (Array.isArray(modules) && modules.length > 0) {
      if (styleLang === 'scss' && !isNodeModules('sass')) {
        styleLang = 'css'
        logger.warn(
          '[nuxt-swiper]: You need to install `sass` to use the scss option. Falling back to `css`.'
        )
      }

      nuxt.options.css.push(`swiper/${styleLang}`)

      for (const module of modules) {
        nuxt.options.css.push(`swiper/${styleLang}/${module}`)
      }
    }

    // Add Imports Swiper Modules.
    for (const [key, _] of Object.entries(swiper)) {
      // Turn key to snake-case.
      const snakeCase: string = key
        .replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2')
        .replace(/^-/, '')
        .toLowerCase()

      const hasModule =
        modules === '*' ||
        (Array.isArray(modules) && modules.includes(snakeCase as any))

      if (hasModule && key !== 'default') {
        addImports({
          name: key,
          as: `${prefix}${key}`,
          from: 'swiper'
        })
      }
    }

    // Add Composables imports from `swiper/vue`.
    addImportsDir(resolve(runtimePath, 'composables'))

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
