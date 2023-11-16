import {
  addPlugin,
  createResolver,
  defineNuxtModule,
  extendViteConfig,
  extendWebpackConfig,
  addImportsDir
} from '@nuxt/kit'
import { name, version } from '../package.json'

export interface ModuleOptions {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name,
    version,
    configKey: 'swiper',
  },
  defaults: {},
  setup(_, nuxt) {
    const resolver = createResolver(import.meta.url)

    // Add logic to resolve custom element from swiper
    const isCustomElement = nuxt.options.vue.compilerOptions.isCustomElement
    nuxt.options.vue.compilerOptions.isCustomElement = (tag: string) =>
      tag.startsWith('swiper-') || isCustomElement?.(tag) || false

    if (nuxt.options.vue.runtimeCompiler)
      addPlugin(resolver.resolve('./runtime/plugins/custom-elements'))

    // Register Swiper Composables
    addImportsDir(resolver.resolve('./runtime/composables'))

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
