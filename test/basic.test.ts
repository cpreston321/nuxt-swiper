import { fileURLToPath } from 'node:url'
import { describe, it, expect } from 'vitest'
import { setup, $fetch } from '@nuxt/test-utils'

await setup({
  server: true,
  rootDir: fileURLToPath(new URL('./fixtures/basic', import.meta.url))
})

describe('test suite', () => {
  it('renders (10) Swiper Slides', async () => {
    const result = await $fetch('/')
    for (let i = 0; i < 10; i++) {
      expect(result).toContain(`data-swiper-slide-index="${i}"`)
    }
  }, 15000)
})
