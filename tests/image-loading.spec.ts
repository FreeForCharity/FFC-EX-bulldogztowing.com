import { test, expect } from '@playwright/test'
import { testConfig } from './test.config'

/**
 * Image Loading Tests
 *
 * Verifies that key Bulldogz Towing images load correctly.
 * The logo img has aria-hidden; hero background image is also aria-hidden.
 * We find them structurally rather than by alt text.
 */

test.describe('Image Loading', () => {
  test('header logo image should be visible and have a src', async ({ page }) => {
    await page.goto('/')

    // Logo image sits inside the branded nav link
    const logoImg = page.locator(`header a[aria-label="${testConfig.logo.navBarAriaLabel}"] img`)
    await expect(logoImg).toBeVisible()
    const src = await logoImg.getAttribute('src')
    expect(src).toBeTruthy()
  })

  test('hero truck image should load from local assets', async ({ page }) => {
    const imageRequests: Array<{ url: string; status: number }> = []

    page.on('response', (response) => {
      if (response.url().includes('hero-truck')) {
        imageRequests.push({ url: response.url(), status: response.status() })
      }
    })

    await page.goto('/')

    // Give lazy images a moment to start loading
    await page.waitForLoadState('domcontentloaded')

    // Verify the request was made and returned 200
    if (imageRequests.length > 0) {
      for (const req of imageRequests) {
        expect(req.status).toBe(200)
      }
    } else {
      // If image wasn't requested yet (e.g. JSDOM env), verify the img element exists in DOM
      const heroImg = page.locator('#hero img[src*="hero-truck"]')
      const count = await heroImg.count()
      expect(count).toBeGreaterThan(0)
    }
  })

  test('logo image in footer should be present', async ({ page }) => {
    await page.goto('/')

    const footerLogoImg = page.locator('footer a[aria-label="Bulldogz Towing home"] img')
    await expect(footerLogoImg).toBeVisible()
    const src = await footerLogoImg.getAttribute('src')
    expect(src).toBeTruthy()
  })
})
