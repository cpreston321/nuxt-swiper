import type { DefineComponent } from 'vue'
import type { SwiperOptions } from 'swiper'

declare module 'vue' {
  interface GlobalComponents {
    SwiperContainer: DefineComponent<Omit<SwiperOptions, "modules">>
    SwiperSlide: DefineComponent<{
      lazy?: boolean
    }>
  }
}
