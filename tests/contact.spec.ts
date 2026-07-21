import { test, expect } from '@playwright/test'
import { testConfig } from './test.config'

/**
 * Contact Information Tests
 *
 * Verifies that the Bulldogz Towing site exposes correct tel: and other
 * contact links across the header, contact section, and footer.
 */

test.describe('Contact information', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('header has a visible tel: call button', async ({ page }) => {
    const headerTel = page.locator('header a[href^="tel:"]').first()
    await expect(headerTel).toBeVisible()
    const href = await headerTel.getAttribute('href')
    expect(href).toContain(testConfig.business.phoneTel)
  })

  test('contact section has a tel: link with correct number', async ({ page }) => {
    const contactSection = page.locator('#contact')
    await expect(contactSection).toBeVisible()

    const telLink = contactSection.locator('a[href^="tel:"]').first()
    await expect(telLink).toBeVisible()
    const href = await telLink.getAttribute('href')
    expect(href).toContain(testConfig.business.phoneTel)
    await expect(telLink).toContainText(testConfig.business.phone)
  })

  test('contact section has an office tel: link with correct number', async ({ page }) => {
    const contactSection = page.locator('#contact')
    const officeTel = contactSection.locator(`a[href="tel:${testConfig.business.officePhoneTel}"]`)
    await expect(officeTel).toBeVisible()
    await expect(officeTel).toContainText(testConfig.business.officePhone)
  })

  test('site footer has an office tel: link with correct number', async ({ page }) => {
    const footer = page.getByRole('contentinfo')
    const officeTel = footer.locator(`a[href="tel:${testConfig.business.officePhoneTel}"]`)
    await expect(officeTel).toBeVisible()
    await expect(officeTel).toContainText(testConfig.business.officePhone)
  })

  test('site footer has a tel: link with correct number', async ({ page }) => {
    const footer = page.getByRole('contentinfo')
    const footerTel = footer.locator('a[href^="tel:"]').first()
    await expect(footerTel).toBeVisible()
    const href = await footerTel.getAttribute('href')
    expect(href).toContain(testConfig.business.phoneTel)
    await expect(footerTel).toContainText(testConfig.business.phone)
  })

  test('site footer has a Facebook link', async ({ page }) => {
    const footer = page.getByRole('contentinfo')
    const fbLink = footer.locator('a[href*="facebook.com"]').first()
    await expect(fbLink).toBeVisible()
  })

  test('site footer displays address text', async ({ page }) => {
    const footer = page.getByRole('contentinfo')
    await expect(footer).toContainText(testConfig.business.address)
  })

  test('multiple tel: links exist across the page', async ({ page }) => {
    const telLinks = page.locator('a[href^="tel:"]')
    const count = await telLinks.count()
    expect(count).toBeGreaterThanOrEqual(2)
  })
})
