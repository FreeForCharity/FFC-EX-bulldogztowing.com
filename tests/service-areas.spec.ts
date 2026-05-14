import { test, expect } from '@playwright/test'
import { testConfig } from './test.config'

/**
 * Service Area Page Tests
 *
 * Verifies that individual service-area subpages load and render key elements.
 */

test.describe('Service area pages', () => {
  test('Glen Rock PA service area page loads', async ({ page }) => {
    const response = await page.goto('/glen-rock-pa/')
    expect(response?.status()).toBe(200)
  })

  test('Glen Rock PA page has a heading containing the area name', async ({ page }) => {
    await page.goto('/glen-rock-pa/')
    const heading = page.getByRole('heading', { level: 1 })
    await expect(heading).toContainText('Glen Rock')
  })

  test('Glen Rock PA page has a tel: call link', async ({ page }) => {
    await page.goto('/glen-rock-pa/')
    const telLink = page.locator('a[href^="tel:"]').first()
    await expect(telLink).toBeVisible()
    const href = await telLink.getAttribute('href')
    expect(href).toContain(testConfig.business.phoneTel)
  })

  test('Glen Rock PA page has a Back to home link', async ({ page }) => {
    await page.goto('/glen-rock-pa/')
    const backLink = page.getByRole('link', { name: /Back to home/i })
    await expect(backLink).toBeVisible()
  })

  test('all configured service area pages load without error', async ({ page }) => {
    for (const slug of testConfig.serviceAreaSlugs) {
      const response = await page.goto(`/${slug}/`)
      expect(response?.status(), `Expected 200 for /${slug}/`).toBe(200)

      const heading = page.getByRole('heading', { level: 1 })
      await expect(heading, `H1 should be visible on /${slug}/`).toBeVisible()
    }
  })
})
