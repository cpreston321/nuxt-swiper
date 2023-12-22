import { fileURLToPath } from 'node:url'
import { describe, expect, it } from 'vitest'
import { $fetch, setup } from '@nuxt/test-utils'

await setup({
  rootDir: fileURLToPath(new URL('./fixtures/basic', import.meta.url)),
})

describe('basic fixture', () => {
  it('it renders the swiper slide & container', async () => {
    const result = await $fetch('/')

    expect(result).toContain('swiper-container')
    expect(result).toContain('swiper-slide')
  }, 15000)
})
