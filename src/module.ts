import * as swiperModulesImports from 'swiper/modules'
import {
  defineNuxtModule,
  addImports,
  extendViteConfig,
  addComponent
} from '@nuxt/kit'
import { name, version } from '../package.json'

import type { SwiperModuleOptions } from './types'

export interface ModuleOptions extends SwiperModuleOptions {}

export default defineNuxtModule<ModuleOptions>({
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
  hooks: {
    'prepare:types': (ctx) => {
      ctx.tsConfig.compilerOptions ||= {}
      ctx.tsConfig.compilerOptions.types ||= []
      ctx.tsConfig.compilerOptions!.types.push('swiper/vue')
      ctx.references.push({
        types: 'swiper/vue'
      })
    }
  },
  setup (_options, nuxt) {
    const { styleLang, prefix, modules } = _options

    const cssImports = [`swiper/${styleLang}`]
    const componentImports = ['Swiper', 'SwiperSlide']
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
    for (const [key, _] of Object.entries(swiperModulesImports)) {
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
          cssImports.push(`swiper/${styleLang}/${snakeCase}`)
        }

        // Import Swiper Modules
        moduleImports.push({
          name: key,
          as: `${prefix}${key}`,
          from: 'swiper/modules'
        })
      }
    }

    // Loop through each component to add to Nuxt.
    // imports types for intellisense.
    for (const cName of componentImports) {
      addComponent({
        name: cName,
        export: cName,
        filePath: 'swiper/vue'
      })
    }

    // Add Composables imports from `swiper/vue`.
    addImports(moduleImports)

    // Add CSS Imports to the nuxt option.
    nuxt.options.css = [...nuxt.options.css, ...cssImports]

    // Add Manual Chunks for Swiper for Vite.
    // for a more optimized build.
    extendViteConfig((config) => {
      config.build = config.build || {}
      config.build.rollupOptions = config.build.rollupOptions || {}
      config.build.rollupOptions.output = config.build.rollupOptions.output || {}

      config.build.rollupOptions.output = {
        ...config.build.rollupOptions.output,
        manualChunks: (id) => {
          if (id.includes('/node_modules/swiper')) {
            return 'swiper-vue'
          }
        }
      }
    })
  }
})
