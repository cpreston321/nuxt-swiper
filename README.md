<img width="100%" src="./cover.png" alt="Cover Image">

<h1 align="center">nuxt-swiper</h1>

<p align="center">Swiper.js built for Nuxt 3 </p>

<p align="center">
  <a href="https://npmjs.com/package/nuxt-swiper">
      <img alt="Version" src="https://img.shields.io/npm/v/nuxt-swiper?color=blue&style=flat-square" />
  </a>
  <a href="https://npmjs.com/package/nuxt-swiper">
      <img alt="Downloads" src="https://img.shields.io/npm/dt/nuxt-swiper?color=blue&style=flat-square" />
  </a>
  <a href="https://opensource.org/licenses/MIT">
      <img alt="MIT" src="https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square" />
  </a>
</p>

> Fully featured Swiper.js module for Nuxt 3.
> Checkout [Swiper.js](https://swiperjs.com/) for more information about how to use.

## Features

- 🚀 [Nuxt 3](https://v3.nuxtjs.org) Support
- 📖 Open Source
- 🪄 Typescript Support
- ✨ Auto imports enabled
- ✨ Just works out of the box like magic ✨

## StackBlitz Demo

> Just want to try it out ? Checkout the demo below.

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/cpreston321/nuxt-swiper/tree/main/examples/swiper-basic?file=app.vue)

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
  modules: ['nuxt-swiper']
  swiper: {
    // Swiper options
    //----------------------
    // prefix: 'Swiper',
    // styleLang: 'css',
    // modules: ['navigation', 'pagination'], // all modules are imported by default
  }
})
```

## Usage

| Component Name   | Auto Imported |
| ---------------- | ------------- |
| `<Swiper />`      | ✅            |
| `<SwiperSlide />` | ✅            |

**_Default Prefix: `Swiper`_**

> You can change the prefix in the module options.

| Module Name             | Auto Imported |
| ----------------------- | ------------- |
| `SwiperA11y`            | ✅            |
| `SwiperAutoplay`        | ✅            |
| `SwiperController`      | ✅            |
| `SwiperEffectCreative`  | ✅            |
| `SwiperEffectCoverflow` | ✅            |
| `SwiperEffectCube`      | ✅            |
| `SwiperEffectFade`      | ✅            |
| `SwiperEffectFlip`      | ✅            |
| `SwiperFreeMode`        | ✅            |
| `SwiperGrid`            | ✅            |
| `SwiperHashNavigation`  | ✅            |
| `SwiperHistory`         | ✅            |
| `SwiperKeyboard`        | ✅            |
| `SwiperLazy`            | ❌ - Taken out [Swiper ^9.0.0](https://swiperjs.com/swiper-api#lazy-loading)|
| `SwiperMousewheel`      | ✅            |
| `SwiperManipulation`    | ✅            |
| `SwiperNavigation`      | ✅            |
| `SwiperPagination`      | ✅            |
| `SwiperParallax`        | ✅            |
| `SwiperScrollbar`       | ✅            |
| `SwiperThumbs`          | ✅            |
| `SwiperVirtual`         | ✅            |
| `SwiperZoom`            | ✅            |

```vue
<template>
  <Swiper
    :modules="[SwiperAutoplay, SwiperEffectCreative]"
    :slides-per-view="1"
    :loop="true"
    :effect="'creative'"
    :autoplay="{
      delay: 8000,
      disableOnInteraction: true,
    }"
    :creative-effect="{
      prev: {
        shadow: false,
        translate: ['-20%', 0, -1],
      },
      next: {
        translate: ['100%', 0, 0],
      },
    }"
  >
    <SwiperSlide v-for="slide in 10" :key="slide">
      <strong>{{ slide }}</strong>
    </SwiperSlide>
  </Swiper>
</template>
```

## Module Options

```ts
type SwiperStyleLangType = 'css' | 'scss'
type SwiperModulesType =
  | 'a11y'
  | 'autoplay'
  | 'controller'
  | 'free-mode'
  | 'grid'
  | 'hash-navigation'
  | 'history'
  | 'keyboard'
  | 'manipulation'
  | 'mousewheel'
  | 'navigation'
  | 'pagination'
  | 'parallax'
  | 'scrollbar'
  | 'thumbs'
  | 'virtual'
  | 'zoom'
  | `effect-${SwiperInterface['effect']}`

export interface SwiperModuleOptions {
  /**
   * The prefix to use for the Swiper Modules to import.
   * This is useful for importing only the modules you need and
   * avoiding importing the entire Swiper library.
   *
   * e.g. `${prefix}Autoplay` -> `SwiperAutoplay`
   *
   * @default 'Swiper' - import components from 'swiper/vue' by default
   */
  prefix?: string

  /**
   * Which type of lang of styles to import
   *
   * @default 'css' - imports css from 'swiper/css' by default
   */
  styleLang?: SwiperStyleLangType

  /**
   * Swiper modules to import
   *
   * '*' - imports all modules
   * '['thumbs', 'lazy']' - imports only specified modules
   *
   * @default '*' - imports all modules by default
   */
  modules?: '*' | SwiperModulesType[]
}

export {}

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
  <img src="https://www.buymeacoffee.com/assets/img/custom_images/yellow_img.png" alt="Logo">
</a>

# 🔥 Contributors

<a href="https://github.com/cpreston321/nuxt-swiper/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=cpreston321/nuxt-swiper" />
</a>

<!-- https://api.browserku.com/banner?template=%3Cdiv+style%3D%22height%3A320px%3Bwidth%3A640px%22%3E%3Cdiv%0A++class%3D%22relative+bg-gradient-to-r+from-dark-100+to-%5Brgb%280%2C128%2C255%29%5D+h-full+font-open-sans+bg-cover+bg-center+p-2+rounded%22%0A%3E%0A++%3Cdiv%0A++++class%3D%22relative+bg-white+rounded+shadow-lg+h-full+p-4+flex+flex-col+justify-between+overflow-hidden%22%0A++%3E%0A++++%3Csvg%0A++++++width%3D%22217%22%0A++++++height%3D%22387%22%0A++++++viewBox%3D%220+0+217+387%22%0A++++++xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%0A++++++class%3D%22absolute+left-1%2F2+top-1%2F2+-ml-%5B30%25%5D+h-%5B120%25%5D+w-auto+-translate-x-1%2F2+-translate-y-1%2F2+opacity-10+md%3A-ml-%5B10%25%5D%22%0A++++%3E%0A++++++%3Cpath%0A++++++++d%3D%22M209.977.035l6.162+23.846-4.877+1.275-2.408.64-4.757+1.287-2.349.647-4.637+1.3-2.289.652-4.517+1.31-4.438+1.32-4.358+1.326-4.277+1.334-4.198+1.341-4.117+1.35-2.03.676-3.997+1.36c-1.319.455-2.625.91-3.917+1.367l-3.838+1.374-1.888.69-3.718+1.384-3.637+1.39-1.788.699-3.517+1.4-1.729.703-3.396+1.411-1.668.708-3.277+1.42c-.54.237-1.075.475-1.608.712l-3.156+1.43a275.324+275.324+0+00-8.986+4.324l-2.834+1.453a224.708+224.708+0+00-4.102+2.19l-2.634+1.466-2.553+1.473a175.39+175.39+0+00-4.865+2.96l-2.312+1.487c-12.874+8.445-21.87+17.128-26.973+25.967-9.64+16.697-4.898+36.02+16.336+58.594l1.782+1.863c.607.623+1.226+1.249+1.857+1.877l1.932+1.892c.657.633+1.326+1.269+2.007+1.907l2.082+1.922c1.06.965+2.149+1.935+3.265+2.911l2.272+1.96c.77.655+1.552+1.314+2.348+1.975l2.424+1.99+2.501+2.005+2.578+2.021+2.656+2.037+2.733+2.052c54.973+40.853+74.283+80.937+52.641+118.422-8.283+14.347-22.562+27.661-42.864+40.09l-1.594.967a233.85+233.85+0+01-4.092+2.401l-1.68.954c-1.692.953-3.42+1.9-5.185+2.842l-1.777.94-3.34+1.725a308.572+308.572+0+01-3.422+1.712l-3.505+1.701a354.248+354.248+0+01-7.26+3.368l-3.755+1.667a439.113+439.113+0+01-15.848+6.558l-4.17+1.612-2.115.803-4.295+1.596-4.377+1.586-4.461+1.576-4.544+1.565c-1.529.52-3.071+1.039-4.627+1.555l-4.71+1.545-1.59.513-3.204+1.022-4.877+1.525-4.96+1.516-5.044+1.505-5.127+1.496-5.21+1.487-1.316.37-3.977+1.107-6.553-23.742+4.943-1.38+2.442-.691+4.822-1.39+4.742-1.397+4.661-1.404+2.3-.704+4.541-1.415+4.46-1.42+4.38-1.428+2.159-.716+4.258-1.437+2.099-.721+4.137-1.447+4.056-1.453+3.976-1.46+3.895-1.465+3.814-1.471c1.258-.491+2.502-.984+3.733-1.477l3.653-1.483+1.796-.743+3.531-1.492+2.31-.997c.381-.166.762-.333+1.14-.5l3.37-1.502+1.655-.753+3.248-1.51+3.167-1.515+3.087-1.52a264.496+264.496+0+007.362-3.823l2.802-1.537+2.722-1.542c19.217-11.067+32.19-22.482+38.888-34.084+10.048-17.402+5.528-37.112-15.615-59.843l-1.775-1.875c-.303-.313-.608-.627-.916-.942l-1.888-1.896a184.354+184.354+0+00-5.051-4.8l-2.154-1.944-1.105-.977-2.268-1.966a247.388+247.388+0+00-3.547-2.975l-2.46-2.001c-.417-.335-.837-.67-1.26-1.007l-2.576-2.023-2.655-2.037c-.449-.341-.901-.683-1.356-1.025l-1.376-1.028c-54.973-40.853-74.585-80.416-53.412-117.09C61.174+62.59+86.29+44.28+124.61+27.949l3.75-1.574+1.905-.783+3.874-1.555+3.956-1.544+2.009-.768+4.08-1.525c.686-.254+1.376-.507+2.07-.759l4.204-1.508+4.286-1.496+4.369-1.485c1.47-.493+2.953-.984+4.451-1.473l4.534-1.462+2.298-.727+4.658-1.445+2.36-.718+4.782-1.429+2.422-.71+4.907-1.412+4.989-1.4+1.68-.465+3.391-.926+5.155-1.38+5.237-1.37z%22%0A++++++++fill%3D%22%230080FF%22%0A++++++%3E%3C%2Fpath%3E%0A++++%3C%2Fsvg%3E%0A++++%3Cdiv+class%3D%22p-4%22%3E%0A++++++%3Ch1+class%3D%22text-6xl+font-bold+line-clamp-3+pb-4%22%3E%7B%7B+title+%7D%7D%3C%2Fh1%3E%0A++++++%3Cp+class%3D%22text-sm%22%3E%7B%7B+description+%7D%7D%3C%2Fp%3E%0A++++%3C%2Fdiv%3E%0A++++%3Cdiv+class%3D%22mt-3+flex+items-center+justify-between%22%3E%0A++++++%3Cdiv+class%3D%22flex+items-center+space-x-2+text-lg%22%3E%0A++++++++%3Cimg%0A++++++++++class%3D%22w-10+h-10+rounded-full%22%0A++++++++++crossorigin%3D%22anonymous%22%0A++++++++++%3Asrc%3D%22avatar%22%0A++++++++%2F%3E%0A++++++++%3Cspan+class%3D%22font-semibold%22%3E%7B%7B+author+%7D%7D%3C%2Fspan%3E%0A++++++%3C%2Fdiv%3E%0A++++++%3Cdiv%3E%0A++++++++%3Cimg+%3Asrc%3D%22logo%22+alt%3D%22logo%22+class%3D%22h-12%22+%2F%3E%0A++++++%3C%2Fdiv%3E%0A++++%3C%2Fdiv%3E%0A++%3C%2Fdiv%3E%0A%3C%2Fdiv%3E%0A%3C%2Fdiv%3E&data=%7B%0A++%22title%22%3A+%22nuxt-swiper%22%2C%0A++%22description%22%3A+%22Swiper.js+built+for+nuxt+3.%22%2C%0A++%22author%22%3A+%22Christian+Preston%22%2C%0A++%22logo%22%3A+%22https%3A%2F%2Fnuxtjs.org%2Fdesign-kit%2Fblack-text.png%22%2C%0A++%22avatar%22%3A+%22https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F6619884%3Fv%3D4%22%0A%7D&response=banner.url -->
