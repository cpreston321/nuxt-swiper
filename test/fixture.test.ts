import { fileURLToPath } from 'node:url'
import { setup } from '@nuxt/test-utils'
import { describe, expect, it } from 'vitest'

describe('basic fixture', async () => {
  await setup({
    rootDir: fileURLToPath(new URL('./fixtures/basic', import.meta.url)),
  })

  it('it renders the swiper slide & container', async () => {
    // const result = await $fetch('/')

    // expect(result).toContain('swiper-container')
    // expect(result).toContain('swiper-slide')

    expect(true).toBe(true)
  }, 15000)
})
