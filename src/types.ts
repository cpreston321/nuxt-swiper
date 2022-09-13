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
}
