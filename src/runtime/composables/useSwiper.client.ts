import type { SwiperContainer } from 'swiper/element'
import type { Swiper } from 'swiper/types'
import type { Ref } from 'vue'
import { nextTick, onMounted, ref, watch } from 'vue'

/**
 * This is a utility function that allows you to use the Swiper instance directly.
 *
 * @param swiperContainerRef - Ref to the `<swiper-container>` element.
 * @param options - Swiper options to merge with the default options if the `swiper` instance is not yet created.
 */
export function useSwiper(swiperContainerRef: Ref<SwiperContainer | null>, options?: SwiperContainer['swiper']['params']) {
  const swiper = ref<Swiper>()

  /**
   * Run transition to next slide.
   */
  const next = (...params: Parameters<SwiperContainer['swiper']['slideNext']>) => {
    if (!swiper.value)
      return

    if (params.length === 0)
      swiper.value.slideNext()
    else
      swiper.value.slideNext(...params)
  }

  /**
   * Run transition to the slide with index number equal to 'index' parameter for the
   * duration equal to 'speed' parameter.
   */
  const to = (...params: Parameters<SwiperContainer['swiper']['slideTo']>) => {
    if (!swiper.value)
      return

    swiper.value.slideTo(...params)
  }

  /**
   * Reset swiper position to currently active slide for the duration equal to 'speed'
   * parameter.
   */
  const reset = (...params: Parameters<SwiperContainer['swiper']['slideReset']>) => {
    if (!swiper.value)
      return

    if (params.length === 0)
      swiper.value.slideReset()
    else
      swiper.value.slideReset(...params)
  }

  /**
   * Run transition to previous slide.
   */
  const prev = (...params: Parameters<SwiperContainer['swiper']['slidePrev']>) => {
    if (!swiper.value)
      return

    if (params.length === 0)
      swiper.value.slidePrev()
    else
      swiper.value.slidePrev(...params)
  }

  /**
   * Check if the swiper ref is valid.
   */
  const checkSwiperRef = () => {
    const isSwiperContainer = swiperContainerRef.value?.nodeName === 'SWIPER-CONTAINER'

    if (!isSwiperContainer && swiper.value !== null && !options) {
      console.warn(
        '"useSwiper()" requires a ref and is tied to the %c`<swiper-container ref="swiperContainerRef"></swiper-container>` element.',
        'font-weight: bold;',
      )
    }
  }

  const initialize = () => {
    // Automatically initialize swiper if options are provided
    if (swiperContainerRef.value && options !== undefined) {
      Object.assign(swiperContainerRef.value, options)
      swiperContainerRef.value?.initialize()
    }
    swiper.value = swiperContainerRef?.value?.swiper
  }

  watch(swiper, () => checkSwiperRef())
  onMounted(() => nextTick(() => initialize()))

  return {
    instance: swiper,
    next,
    prev,
    to,
    reset,
  }
}
