import type { SwiperOptions as SwiperInterface } from 'swiper/types'

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
  | `effect-${SwiperInterface['effect']}`

export interface SwiperModuleOptions {
  /**
   * Which type of lang of styles to import
   *
   * ! This option is only works when `modules` is
   * ! an array of modules.
   *
   * @default 'css'
   */
  styleLang?: SwiperStyleLangType

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
