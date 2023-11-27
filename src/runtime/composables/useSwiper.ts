import { computed, onMounted, watch } from 'vue'
import type { Swiper } from 'swiper'
import type { Ref } from 'vue'

type SwiperElement = HTMLElement & {
  swiper?: Swiper
}

/**
 * This is a utility function that allows you to use the Swiper instance directly.
 *
 * @param swiperContainerRef - Ref to the `<swiper-container>` element.
 */
export function useSwiper(swiperContainerRef: Ref<SwiperElement | null>) {
  const swiper = computed(() => swiperContainerRef.value?.swiper ?? null)

  /**
   * Run transition to next slide.
   */
  const next = (...params: Parameters<Swiper['slideNext']>) => {
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
  const to = (...params: Parameters<Swiper['slideTo']>) => {
    if (!swiper.value)
      return

    swiper.value.slideTo(...params)
  }

  /**
   * Reset swiper position to currently active slide for the duration equal to 'speed'
   * parameter.
   */
  const reset = (...params: Parameters<Swiper['slideReset']>) => {
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
  const prev = (...params: Parameters<Swiper['slidePrev']>) => {
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
    if (swiper.value === null) {
      console.warn(
        '"useSwiper()" requires a ref and is tied to the %c`<swiper-container ref="swiperContainerRef"></swiper-container>` element.',
        'font-weight: bold;',
      )
    }
  }

  watch(swiper, () => checkSwiperRef())
  onMounted(() => checkSwiperRef())

  return {
    instance: swiper,
    next,
    prev,
    to,
    reset,
  }
}
