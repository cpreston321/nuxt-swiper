# Nuxt Swiper

[![npm](https://img.shields.io/npm/v/nuxt-swiper?style=flat-square)](https://www.npmjs.com/package/nuxt-swiper/)
[![Downloads](https://img.shields.io/npm/dt/nuxt-swiper.svg?style=flat-square)](https://www.npmjs.com/package/nuxt-swiper)
[![License](https://img.shields.io/npm/l/nuxt-swiper?style=flat-square)](/LICENSE)

> [!IMPORTANT]
> ***Nuxt Swiper*** utilizes Swiper.js as its foundation. Please ensure that you read the Swiper.js [documentation](https://swiperjs.com/element) before utilizing this module and reporting any issues that are not directly related to Nuxt Swiper. If there is an underlying bug, please submit an issue to the Swiper.js [repository](https://github.com/nolimits4web/swiper/issues).

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
  modules: ['nuxt-swiper']
})
```

## Usage

| Pascal Case    | Kebab Case |
| ----------------- | ----------- |
| `<SwiperContainer />`|`<swiper-container/>` |
| `<SwiperSlide />` | `<swiper-slide />`    |

```vue
<script setup lang="ts">
  const slides = ref(
    // Create an array of 10 random colors that look like 
    // [{ bg: 'rgb(0, 0, 0)', color: 'white' }, ...}]
    Array.from({ length: 10 }, () => {
      const r = Math.floor(Math.random() * 256)
      const g = Math.floor(Math.random() * 256)
      const b = Math.floor(Math.random() * 256)
      // Figure out contrast color for font
      const contrast = r * 0.299 + g * 0.587 + b * 0.114 > 186 ? 'black' : 'white'

      return { bg: `rgb(${r}, ${g}, ${b})`, color: contrast }
    })
  )
</script>

<template>
  <swiper-container
    class="swiper-cards"
    :width="240"
    :slides-per-view="1"
    :loop="true"
    effect="cards"
    :autoplay="{
      delay: 8000,
      disableOnInteraction: true,
    }"
  >
    <swiper-slide
      v-for="(array, idx) in fakeArray"
      :key="idx"
      :style="`background-color: ${array.bg}; color: ${array.color}`"
    >
      {{ idx }}
    </swiper-slide>
  </swiper-container>
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

.swiper-cards {
  width: 240px;
  height: 240px;
}
.swiper-cards swiper-slide {
  border-radius: 6px;
  border: 1px solid black;
}
</style>
```

## 💻 Development

- Clone this repository
- Enable [Corepack](https://github.com/nodejs/corepack) using `corepack enable`
- Install dependencies using `pnpm install --shamefully-hoist`
- Open playground with `pnpm dev`

## Credits

[`swiper.js`](https://swiperjs.com/) is developed by [@nolimits4web](https://github.com/nolimits4web).

[`nuxt-swiper`](#nuxt-swiper) is developed by [@cpreston321](https://github.com/cpreston321).

## 📧 Contact

**X** (formely knowned as Twitter) - [@christian_ggg](https://x.com/christian_ggg)

Also, if you like my work, please feel free to [buy me a coffee](https://www.buymeacoffee.com/cpreston321) ☕️

[![buymeacoffee](https://www.buymeacoffee.com/assets/img/custom_images/yellow_img.png)](https://www.buymeacoffee.com/cpreston321)

## Contributors

[![contributors](https://contrib.rocks/image?repo=cpreston321/nuxt-swiper)](https://contrib.rocks/image?repo=cpreston321/nuxt-swiper)

---

[MIT](./LICENSE) License © 2023 [CP](https://github.com/cpreston321)
