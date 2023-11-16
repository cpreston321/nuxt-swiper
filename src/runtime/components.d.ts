import type { DefineComponent } from 'vue'
import type { SwiperOptions } from 'swiper/types'

declare module 'vue' {
  interface GlobalComponents {
    SwiperContainer: DefineComponent<Omit<SwiperOptions, 'modules'>>
    SwiperSlide: DefineComponent<{
      /**
       * If you use lazy loading images, it requires the lazy preloader element to be added to the each slide.
       * @default false
       * @see https://swiperjs.com/element#lazy
       */
      lazy?: boolean
    }>
  }
}
