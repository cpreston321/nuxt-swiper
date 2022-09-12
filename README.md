<h1 align="center">nuxt-swiper</h1>

<p align="center">Swiper.js built for Nuxt 3</p>

<p align="center">
  <a href="https://github.com/cpreston321/nuxt-swiper/actions?query=branch%3Amain+event%3Apush">
    <img alt="CI" src="https://github.com/cpreston321/nuxt-swiper/actions/workflows/ci.yml/badge.svg?branch=main"/>
  </a>
</p>

> Fully featured Swiper.js module for Nuxt 3.
>
> Checkout [Swiper.js](https://swiperjs.com/) for more information about how to use.

## Features

- 🚀 [Nuxt 3](https://v3.nuxtjs.org) Support
- Full Typescript Support
- Auto import **Swiper.js** Modules + Styles

## Module Config Options

```ts
type SwiperEffectType = 'slide' | 'fade' | 'cube' | 'coverflow' | 'flip'
type SwiperModulesType =
  | 'a11y'
  | 'autoplay'
  | 'controller'
  | 'free-mode'
  | 'grid'
  | 'hash-navigation'
  | 'history'
  | 'keyboard'
  | 'lazy'
  | 'manipulation'
  | 'mousewheel'
  | 'navigation'
  | 'pagination'
  | 'parallax'
  | 'scrollbar'
  | 'thumbs'
  | 'virtual'
  | 'zoom'
  | `effect-${SwiperEffectType}`

/*
 * Main Config interface
 */
interface SwiperModuleOptions {
  /**
   * Which type of lang of styles to import
   *
   * ! This option is only works when `modules` is
   * ! an array of modules.
   *
   * @default 'css'
   */
  styleLang?: 'css' | 'scss'

  /**
   * Swiper modules to import
   *
   * '*' - imports all modules
   * '['thumbs', 'lazy']' - imports only thumbs and lazy modules to keep bundle size small
   *
   * @default []
   */
  modules?: SwiperModulesType[] | '*'

  /**
   * Import Swiper Composables
   *
   * `useSwiper`, `useSwiperSlide`.
   *
   * @default true
   */
  importComposables?: boolean
}
```

## Module Setup

```ts
// nuxt.config.ts
import { defineNuxtModule } from 'nuxt'
import nuxtSwiper from 'nuxt-swiper'

export default defineNuxtConfig({
  modules: [NuxtSwiper],
  swiper: {
    modules: ['navigation', 'pagination']
  }
})

// or inline config
export default defineNuxtConfig({
  modules: [
    [
      NuxtSwiper,
      {
        modules: ['navigation', 'pagination']
      }
    ]
  ]
})
```

## 💻 Development

- Clone this repository
- Enable [Corepack](https://github.com/nodejs/corepack) using `corepack enable`
- Install dependencies using `pnpm install`
- Open playground with `pnpm dev`

## Credits

[`nuxt-swiper`](#nuxt-swiper) is developed by [@cpreston321](https://github.com/cpreston321).

## License

[MIT](./LICENSE) License © 2022 [cpreston321](https://github.com/cpreston321)
