# Nuxt Swiper

[![npm](https://img.shields.io/npm/v/nuxt-swiper?style=flat-square)](https://www.npmjs.com/package/nuxt-swiper/)
[![Downloads](https://img.shields.io/npm/dt/nuxt-swiper.svg?style=flat-square)](https://www.npmjs.com/package/nuxt-swiper)
[![License](https://img.shields.io/npm/l/nuxt-swiper?style=flat-square)](/LICENSE)

> [!IMPORTANT]
> ***Nuxt Swiper*** utilizes Swiper.js as its foundation using it's web components. Please ensure that you read the Swiper.js [documentation](https://swiperjs.com/element) before utilizing this module and reporting any issues that are not directly related to Nuxt Swiper. If there is an underlying bug, please submit an issue to the Swiper.js [repository](https://github.com/nolimits4web/swiper/issues).

> [!NOTE]
> If you want to learn how to use web components in **Vue.js** please refer to the docs here: [Vue.js Web Components](https://vuejs.org/guide/extras/web-components.html)

## Features

- 📖 Open Source
- 🪄 TypeScript Support
- ✅ Auto Imports Enabled
- ✨ Just Works Out of the Box like Magic

## Setup

### Try it online

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/cpreston321/nuxt-swiper/tree/main/examples/swiper-basic?file=app.vue)

### Step 1: Install and add to Nuxt

```bash
# npm
npm install nuxt-swiper

# yarn
yarn add nuxt-swiper

#pnpm
pnpm add nuxt-swiper

#bun
bun add nuxt-swiper
```

```ts
export default defineNuxtConfig({
  modules: ['nuxt-swiper'],
})
```

## Usage

### Module Options

| Swiper Components (WebComponent) |
| -------------------------------- |
| `<swiper-container/>`     |
| `<swiper-slide />`        |

```ts
export interface ModuleOptions {
  /**
   * Enable custom Swiper composables to help you access Swiper instance.
   * @example ```ts
   * // Access Swiper instance
   * const swiperRef = ref<null>(null)
   * const swiper = useSwiper(swiperRef)
   *
   * const next = () => swiper.next()
   * ```
   * @default true
   */
  enableComposables?: boolean
}
```

### Basic Usuage

```vue
<script setup lang="ts">
// Create 10 slides
const containerRef = ref(null)
const slides = ref(Array.from({ length: 10 }))

const swiper = useSwiper(containerRef)

onMounted(() => {
  // Access Swiper instance
  // Read more about Swiper instance: https://swiperjs.com/swiper-api#methods--properties
  console.log(swiper.instance)
})
</script>

<template>
  <swiper-container ref="containerRef" :loop="true">
    <swiper-slide
      v-for="(slide, idx) in slides"
      :key="idx"
      style="background-color: rgb(32, 233, 70); color: white;"
    >
      Slide {{ idx + 1 }}
    </swiper-slide>
  </swiper-container>
  <!-- Go back one slide -->
  <button @click="swiper.prev()">
    Prev
  </button>
  <!-- Go forward one slide -->
  <button @click="swiper.next()">
    Next
  </button>
</template>

<style lang="css">
swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  height: 20vh;
  font-size: 4rem;
  font-weight: bold;
  font-family: 'Roboto', sans-serif;
}
</style>
```

## 💻 Development

```sh
# Install dependencies
pnpm install

# Generate type stubs
pnpm run dev:prepare

# Develop with the playground
pnpm run dev

# Build the playground
pnpm run dev:build

# Run ESLint
pnpm run lint
```

## Credits

[`Swiper.js`](https://swiperjs.com/) is developed by [@nolimits4web](https://github.com/nolimits4web).

[`Nuxt Swiper`](#nuxt-swiper) is developed by [@cpreston321](https://github.com/cpreston321).

## 📧 Contact

**X** (formely knowned as Twitter) - [@christian_ggg](https://x.com/christian_ggg)

Also, if you like my work, please feel free to [buy me a coffee](https://www.buymeacoffee.com/cpreston321) ☕️

[![buymeacoffee](https://www.buymeacoffee.com/assets/img/custom_images/yellow_img.png)](https://www.buymeacoffee.com/cpreston321)

## Contributors

[![contributors](https://contrib.rocks/image?repo=cpreston321/nuxt-swiper)](https://contrib.rocks/image?repo=cpreston321/nuxt-swiper)

---

[MIT](./LICENSE) License © 2023 [CP](https://github.com/cpreston321)
