import {
  addImportsDir,
  addPlugin,
  createResolver,
  defineNuxtModule,
} from '@nuxt/kit'
import { name, version } from '../package.json'

declare module '@nuxt/schema' {
  interface AppConfigInput {
    /* Readonly: only for module use  */
    __swiper?: Readonly<{
      bundled: boolean
    }>
  }
}

export interface ModuleOptions {
  /**
   * Enable custom Swiper composables to help you access Swiper instance.
   * @example ```vue
   * <script setup>
   * const swiperRef = ref<null>(null)
   * const swiper = useSwiper(swiperRef, { loop: true, autoplay: { delay: 5000 })
   *
   * const next = () => swiper.next()
   * </script>
   * <template>
   *  <swiper-container ref="swiperRef" :init="false">
   *    <swiper-slide>Slide 1</swiper-slide>
   *    <swiper-slide>Slide 2</swiper-slide>
   *  </swiper-container>
   * </template>
   * ```
   * @default true
   */
  enableComposables?: boolean

  /**
   * Bundle Swiper custom elements.
   * if disabled, you need to import swiper css and modules manually.
   * @see https://swiperjs.com/element#core-version--modules
   * @default true
   */
  bundled?: boolean
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name,
    version,
    configKey: 'swiper',
  },
  defaults: {
    enableComposables: true,
    bundled: true,
  },
  setup(opts, nuxt) {
    const resolver = createResolver(import.meta.url)

    // Merge options to app config to be used in runtime
    nuxt.options.appConfig = {
      ...nuxt.options.appConfig,
      __swiper: {
        bundled: opts?.bundled ?? true,
      },
    }

    // Add logic to resolve custom element from swiper
    const isCustomElement = nuxt.options.vue.compilerOptions.isCustomElement
    nuxt.options.vue.compilerOptions.isCustomElement = (tag: string) =>
      tag.startsWith('swiper-') || isCustomElement?.(tag) || false

    if (nuxt.options.vue.runtimeCompiler)
      addPlugin(resolver.resolve('./runtime/plugins/custom-elements'))

    // Register Swiper Composables if enabled
    if (opts.enableComposables)
      addImportsDir(resolver.resolve('./runtime/composables'))

    // Register Web Components & Types
    addPlugin(resolver.resolve('./runtime/plugins/components.client'))
    nuxt.hook('prepare:types', ({ references }) => {
      references.push({
        path: resolver.resolve('./runtime/components.d.ts'),
      })
    })
  },
})
