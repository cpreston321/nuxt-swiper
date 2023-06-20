import {
  addPlugin,
  createResolver,
  defineNuxtModule,
  extendViteConfig,
} from '@nuxt/kit'
import defu from 'defu'
import { name, version } from '../package.json'

export interface ModuleOptions {
  /**
   * Whether to inject the default styles.
   * Set to `false` if you want to import the styles yourself.
   * @default true
   */
  injectStyles?: boolean
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name,
    version,
    configKey: 'swiper',
  },
  defaults: {
    injectStyles: true,
  },
  setup(options, nuxt) {
    const resolver = createResolver(import.meta.url)

    const isCustomElement = nuxt.options.vue.compilerOptions.isCustomElement
    nuxt.options.vue.compilerOptions.isCustomElement = (tag: string) =>
      tag.startsWith('swiper-') || isCustomElement?.(tag) || false

    // Expose Swiper Options to Runtime Config
    // so that it can be used in the plugin.
    nuxt.options.runtimeConfig.public = defu(nuxt.options.runtimeConfig.public, {
      swiper: {
        injectStyles: options.injectStyles,
      },
    })

    if (nuxt.options.vue.runtimeCompiler)
      addPlugin(resolver.resolve('./runtime/plugins/custom-elements'))

    // Register Web Components & Types
    addPlugin(resolver.resolve('./runtime/plugins/components.client'))
    nuxt.hook('prepare:types', ({ references }) => {
      references.push({
        path: resolver.resolve('./runtime/components.d.ts'),
      })
    })

    // Add Manual Chunks for Swiper for Vite.
    // for a more optimized build.
    extendViteConfig((config) => {
      config.build = config.build || {}
      config.build.rollupOptions = config.build.rollupOptions || {}
      config.build.rollupOptions.output = config.build.rollupOptions.output || {}

      config.build.rollupOptions.output = {
        ...config.build.rollupOptions.output,
        manualChunks: (id) => {
          if (id.includes('/node_modules/swiper'))
            return `swiper-${id}`
        },
      }
    })
  },
})
