import { type DefineComponent, type HTMLAttributes, type ReservedProps } from 'vue'
import { type SwiperOptions } from 'swiper/types'

interface HTMLBaseProps extends HTMLAttributes, ReservedProps {}

interface SwiperContainerProps extends HTMLBaseProps, Omit<SwiperOptions, 'modules'> {}
interface SwiperSlideProps extends HTMLBaseProps {
  /**
   * If you use lazy loading images, it requires the lazy preloader element to be added to the each slide.
   * @default false
   * @see https://swiperjs.com/element#lazy
   */
  lazy?: boolean
}

declare module 'vue' {
  interface GlobalComponents {
    SwiperContainer: DefineComponent<SwiperContainerProps>
    SwiperSlide: DefineComponent<SwiperSlideProps>
  }
}
