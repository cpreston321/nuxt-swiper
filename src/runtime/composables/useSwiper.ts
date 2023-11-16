import { ref, toValue, watch } from 'vue'
import type { Swiper } from 'swiper'
import type { Ref } from 'vue'

/**
 * This is a utility function that allows you to use the Swiper instance directly.
 *
 * @param swiperRef - Ref to the `<swiper-container>` element.
 */
export const useSwiper = (swiperRef: Ref) => {
  /**
   * Swiper instance
   * @see https://swiperjs.com/element#access-to-swiper-instance
   */
  const swiper = ref<Swiper| null>(null);

  /**
   * Run transition to next slide.
   *
   * @param speed Transition duration (in ms).
   * @param runCallbacks Set it to false (by default it is true) and transition will
   *  not produce transition events.
   */
  const next = (...params: Parameters<Swiper['slideNext']>) => {
    if (!swiper.value)
      return

    swiper.value.slideNext(...params)
  }

  /**
   * Run transition to the slide with index number equal to 'index' parameter for the
   *  duration equal to 'speed' parameter.
   *
   * @param index Index number of slide.
   * @param speed Transition duration (in ms).
   * @param runCallbacks Set it to false (by default it is true) and transition will
   *  not produce transition events.
   */
  const to = (...params: Parameters<Swiper['slideTo']>) => {
    if (!swiper.value)
      return

    swiper.value.slideTo(...params)
  }

  /**
   * Reset swiper position to currently active slide for the duration equal to 'speed'
   * parameter.
   *
   * @param speed Transition duration (in ms).
   * @param runCallbacks Set it to false (by default it is true) and transition will
   *  not produce transition events.
   */
  const reset = (...params: Parameters<Swiper['slideReset']>) => {
    if (!swiper.value)
      return

    swiper.value.slideReset(...params)
  }

  /**
   * Run transition to previous slide.
   *
   * @param speed Transition duration (in ms).
   * @param runCallbacks Set it to false (by default it is true) and transition will
   *  not produce transition events.
   */
  const prev = (...params: Parameters<Swiper['slidePrev']>) => {
    if (!swiper.value)
      return

    swiper.value.slidePrev(...params)
  }


  watch(swiperRef, () => {
    if (swiperRef.value && !toValue(swiperRef)?.swiper) {
      return console.warn('`useSwiper()` requires a ref. That is tied to the `<swiper-container>` element. Please see the docs for more info.')
    }

    swiper.value = toValue(swiperRef)?.swiper ?? null
  })

  return {
    swiper,
    next,
    prev,
    to,
    reset
  }
}
