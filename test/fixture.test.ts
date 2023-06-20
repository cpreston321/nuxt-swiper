import { fileURLToPath } from 'node:url'
import { describe, expect, it } from 'vitest'
import { $fetch, setup } from '@nuxt/test-utils'

await setup({
  rootDir: fileURLToPath(new URL('./fixtures/basic', import.meta.url)),
})

describe('basic fixture', () => {
  it('renders (10) Swiper Slides', async () => {
    const result = await $fetch('/')
    for (let i = 0; i < 10; i++)
      expect(result).toContain(`data-swiper-slide-index="${i}"`)
  }, 15000)
})
