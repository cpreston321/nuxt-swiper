<h1 align="center">nuxt-swiper</h1>

<p align="center">Swiper.js built for Nuxt 3 </p>

<p align="center">
  <a href="https://github.com/cpreston321/nuxt-swiper/actions?query=branch%3Amain+event%3Apush">
    <img alt="CI" src="https://github.com/cpreston321/nuxt-swiper/actions/workflows/ci.yml/badge.svg?branch=main"/>
  </a>
  <a href="https://npmjs.com/package/nuxt-swiper">
      <img alt="Version" src="https://img.shields.io/npm/v/nuxt-swiper?color=blue&style=flat-square"/>
  </a>
  <a href="https://npmjs.com/package/nuxt-swiper">
      <img alt="Downloads" src="https://img.shields.io/npm/dt/nuxt-swiper?color=blue&style=flat-square"/>
  </a>
  <a href="https://opensource.org/licenses/MIT">
      <img alt="MIT" src="https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square"/>
  </a>
</p>

> Fully featured Swiper.js module for Nuxt 3.
> Checkout [Swiper.js](https://swiperjs.com/) for more information about how to use.

## Features

- 🚀 [Nuxt 3](https://v3.nuxtjs.org) Support
- Open Source
- Full Typescript Support
- ✨ Auto import **Swiper.js** modules + styles.
- ✨ Just works out of the box.

## Install

```bash
# npm
npm install nuxt-swiper

# yarn
yarn add nuxt-swiper

#pnpm
pnpm add nuxt-swiper
```

## Setup

```ts
// nuxt.config.ts
import { defineNuxtModule } from 'nuxt'

export default defineNuxtConfig({
  modules: ['nuxt-swiper'],
  swiper: {
    modules: ['navigation', 'pagination']
  }
})

// or inline config
export default defineNuxtConfig({
  modules: [
    [
      'nuxt-swiper',
      {
        modules: ['navigation', 'pagination']
      }
    ]
  ]
})
```

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
   * The prefix to use for the Swiper Modules to import.
   * This is useful for importing only the modules you need and
   * avoiding importing the entire Swiper library.
   *
   * e.g. `${prefix}Autoplay` -> `SwiperAutoplay`
   *
   * @default 'Swiper'
   */
  prefix?: string

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
   * '['autoplay', 'effect-cards', 'thumbs', 'lazy']' - imports only these modules to keep bundle size small
   *
   * @default []
   */
  modules?: SwiperModulesType[] | '*'
}
```

## 💻 Development

- Clone this repository
- Enable [Corepack](https://github.com/nodejs/corepack) using `corepack enable`
- Install dependencies using `pnpm install --shamefully-hoist`
- Open playground with `pnpm dev`

## ➕ Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Credits

[`swiper`](https://swiperjs.com/) is developed by [@nolimits4web](https://github.com/nolimits4web).
[`nuxt-swiper`](#nuxt-swiper) is developed by [@cpreston321](https://github.com/cpreston321).

## 📜 License

[MIT](./LICENSE) License © 2022 [cpreston321](https://github.com/cpreston321)

# 📧 Contact

cpreston321 - [@cpreston321](https://twitter.com/cpreston321)

Also, if you like my work, please feel free to [buy me a coffee](https://www.buymeacoffee.com/cpreston321) ☕️

<a href="https://www.buymeacoffee.com/cpreston321" target="_blank">
  <img src="https://www.buymeacoffee.com/assets/img/custom_images/yellow_img.png" alt="Logo" >
</a>
