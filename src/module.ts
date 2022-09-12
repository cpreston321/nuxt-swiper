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
    modules: [],
    styleLang: 'css',
    importComposables: false
  },
  setup (options, nuxt) {
    const logger = useLogger(name)
    const { modules, importComposables } = options
    let { styleLang } = options
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
    for (const [key, func] of Object.entries(swiper.default)) {
      // Turn key to snake-case.
      const snakeCase = key
        .replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2')
        .replace(/^-/, '')
        .toLowerCase()

      if (
        // @ts-expect-error
        (typeof func === 'function' && modules.includes(snakeCase)) ||
        (typeof func === 'function' && modules === '*')
      ) {
        addImports({
          name: key,
          as: `Swiper${key}`,
          from: 'swiper'
        })
      }
    }

    // Add Composables imports from `swiper/vue`.
    if (importComposables) {
      addImportsDir(resolve(runtimePath, 'composables'))
    }

    // Add Plugin
    addPlugin(resolve(runtimePath, 'plugin'))
  }
})

declare module '@nuxt/schema' {
  interface NuxtOptions {
    swiper?: SwiperModuleOptions
  }
}
