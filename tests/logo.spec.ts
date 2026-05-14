import { test, expect } from '@playwright/test'
import { testConfig } from './test.config'

/**
 * Logo / Header Branding Tests
 *
 * The Bulldogz header logo image has aria-hidden="true" and alt="".
 * We locate it via the aria-label on the wrapping Link element.
 */

test.describe('Logo and Header Branding', () => {
  test('should display branded logo link in header', async ({ page }) => {
    await page.goto('/')

    const logoLink = page.locator(`header a[aria-label="${testConfig.logo.navBarAriaLabel}"]`)
    await expect(logoLink).toBeVisible()
  })

  test('logo link should navigate to home', async ({ page }) => {
    await page.goto('/')

    const logoLink = page.locator(`header a[aria-label="${testConfig.logo.navBarAriaLabel}"]`)
    const href = await logoLink.getAttribute('href')
    expect(href).toBe('/')
  })

  test('header should contain the business name text', async ({ page }) => {
    await page.goto('/')

    const header = page.locator('header')
    await expect(header).toContainText('Bulldogz')
    await expect(header).toContainText('Towing')
  })

  test('logo image should be present in header', async ({ page }) => {
    await page.goto('/')

    // The logo img has aria-hidden; find it inside the branded link
    const logoImg = page.locator(`header a[aria-label="${testConfig.logo.navBarAriaLabel}"] img`)
    await expect(logoImg).toBeVisible()
    const src = await logoImg.getAttribute('src')
    expect(src).toBeTruthy()
  })
})
