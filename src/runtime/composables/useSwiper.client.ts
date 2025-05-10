import type { SwiperContainer } from 'swiper/element'
import type { Swiper } from 'swiper/types'
import type { Ref } from 'vue'
import { computed, nextTick, onMounted, ref, watch } from 'vue'

/**
 * A Vue composable that provides a reactive interface to the Swiper slider instance.
 * This utility function allows you to directly access and control the Swiper instance
 * and provides reactive state properties for common Swiper values.
 *
 * @param swiperContainerRef - Ref to the `<swiper-container>` element that will be controlled.
 * @param options - Optional Swiper configuration parameters to merge with the default options.
 *                  These options will be applied if the Swiper instance is not yet created.
 *                  See Swiper documentation for all available options: https://swiperjs.com/swiper-api
 *
 * @returns An object containing:
 *  - `instance`: Ref to the Swiper instance
 *  - Reactive state properties: `isBeginning`, `isEnd`, `activeIndex`, `realIndex`, etc.
 *  - Navigation methods: `next()`, `prev()`, `to()`, `reset()`
 *
 * @example
 * ```vue
 * <script setup>
 * import { ref } from 'vue'
 *
 * const swiperRef = ref(null)
 * const { next, prev, isBeginning, isEnd } = useSwiper(swiperRef, {
 *   slidesPerView: 1,
 *   spaceBetween: 10,
 * })
 * </script>
 *
 * <template>
 *   <swiper-container ref="swiperRef">
 *     <swiper-slide>Slide 1</swiper-slide>
 *     <swiper-slide>Slide 2</swiper-slide>
 *   </swiper-container>
 *
 *   <button @click="next" :disabled="isEnd">Next</button>
 *   <button @click="prev" :disabled="isBeginning">Previous</button>
 * </template>
 * ```
 */
export function useSwiper(
  swiperContainerRef: Ref<SwiperContainer | null>,
  options?: SwiperContainer['swiper']['params'],
) {
  const swiper = ref<Swiper>()

  // Reactive state properties
  const isBeginning = computed(() => swiper.value?.isBeginning ?? true)
  const isEnd = computed(() => swiper.value?.isEnd ?? false)
  const activeIndex = computed(() => swiper.value?.activeIndex ?? 0)
  const realIndex = computed(() => swiper.value?.realIndex ?? 0)
  const slides = computed(() => swiper.value?.slides ?? [])
  const slidesPerView = computed(() => swiper.value?.slidesPerViewDynamic() ?? 0)
  const progress = computed(() => swiper.value?.progress ?? 0)
  const getNumberOfSlides = computed(() => swiper.value?.slides.length ?? 0)

  /**
   * Run transition to next slide.
   */
  const next = (
    ...params: Parameters<SwiperContainer['swiper']['slideNext']>
  ) => {
    if (!swiper.value)
      return

    if (params.length === 0)
      swiper.value.slideNext()
    else swiper.value.slideNext(...params)
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
  const reset = (
    ...params: Parameters<SwiperContainer['swiper']['slideReset']>
  ) => {
    if (!swiper.value)
      return

    if (params.length === 0)
      swiper.value.slideReset()
    else swiper.value.slideReset(...params)
  }

  /**
   * Run transition to previous slide.
   */
  const prev = (
    ...params: Parameters<SwiperContainer['swiper']['slidePrev']>
  ) => {
    if (!swiper.value)
      return

    if (params.length === 0)
      swiper.value.slidePrev()
    else swiper.value.slidePrev(...params)
  }

  /**
   * Check if the swiper ref is valid.
   */
  const checkSwiperRef = () => {
    const isSwiperContainer
      = swiperContainerRef.value?.nodeName === 'SWIPER-CONTAINER'

    if (!isSwiperContainer && swiper.value !== null && !options) {
      console.warn(
        '"useSwiper()" requires a ref and is tied to the %c`<swiper-container ref="swiperContainerRef"></swiper-container>` element.',
        'font-weight: bold;',
      )
    }
  }

  // Automatically initialize swiper if options are provided
  const _initialize = () => {
    if (swiperContainerRef.value && options !== undefined) {
      Object.assign(swiperContainerRef.value, options)
      swiperContainerRef.value?.initialize()
    }
    swiper.value = swiperContainerRef?.value?.swiper
  }

  watch(swiper, () => checkSwiperRef())
  onMounted(() => nextTick(() => _initialize()))

  return {
    // Instance
    instance: swiper,

    // Reactive state
    isBeginning,
    isEnd,
    activeIndex,
    realIndex,
    slides,
    slidesPerView,
    progress,
    getNumberOfSlides,

    // Navigation methods
    next,
    prev,
    to,
    reset,
  }
}
