import { test, expect } from '@playwright/test'
import { testConfig } from './test.config'

/**
 * Copyright Notice Tests
 *
 * Verifies that the footer copyright:
 * 1. Contains the copyright symbol and current year
 * 2. Names Bulldogz Towing
 * 3. Links to freeforcharity.org
 */

test.describe('Footer Copyright Notice', () => {
  test('should display copyright notice with current year', async ({ page }) => {
    await page.goto('/')

    const currentYear = new Date().getFullYear()

    // The bulldogz footer has two paragraphs in the bottom bar.
    // First paragraph: "© {year} Bulldogz Towing. All rights reserved."
    const copyrightPara = page.locator('footer').getByText(new RegExp(`© ${currentYear}`))
    await expect(copyrightPara).toBeVisible()
    await expect(copyrightPara).toContainText(testConfig.copyright.text)
  })

  test('should display Free For Charity link in footer', async ({ page }) => {
    await page.goto('/')

    const ffcLink = page.locator(`footer a[href="${testConfig.copyright.linkUrl}"]`)
    await expect(ffcLink).toBeVisible()
    await expect(ffcLink).toContainText(testConfig.copyright.linkText)
  })
})
