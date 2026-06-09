import { test, expect } from '@playwright/test'

/**
 * Home Page Smoke Tests
 *
 * Verifies that the Bulldogz Towing home page renders all expected sections:
 * Hero, About, Services, Gallery, Testimonials, Service Areas, Contact, and Rates.
 */

test.describe('Home page smoke', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('home page loads and returns 200', async ({ page }) => {
    const response = await page.goto('/')
    expect(response?.status()).toBe(200)
  })

  test('page title contains Bulldogz Towing', async ({ page }) => {
    await expect(page).toHaveTitle(/Bulldogz Towing/i)
  })

  test('Hero section is present', async ({ page }) => {
    const hero = page.locator('#hero')
    await expect(hero).toBeVisible()
    await expect(hero).toContainText('Get Towed')
  })

  test('About section is present', async ({ page }) => {
    const about = page.locator('#about')
    await expect(about).toBeVisible()
  })

  test('Services section is present', async ({ page }) => {
    const services = page.locator('#services')
    await expect(services).toBeVisible()
    await expect(services).toContainText('Our Services')
  })

  test('Gallery section is present', async ({ page }) => {
    const gallery = page.locator('#gallery')
    await expect(gallery).toBeVisible()
  })

  test('Testimonials / Reviews section is present', async ({ page }) => {
    const reviews = page.locator('#reviews')
    await expect(reviews).toBeVisible()
  })

  test('Service Areas section is present', async ({ page }) => {
    const areas = page.locator('#service-areas')
    await expect(areas).toBeVisible()
  })

  test('Contact section is present', async ({ page }) => {
    const contact = page.locator('#contact')
    await expect(contact).toBeVisible()
    await expect(contact).toContainText('Contact')
    await expect(contact).toContainText('Towing Lot Hours')
  })

  test('Rates section is present', async ({ page }) => {
    const rates = page.locator('#rates')
    await expect(rates).toBeVisible()
    await expect(rates).toContainText('Hook Up & 5 Miles')
  })

  test('Header navigation links are rendered', async ({ page }) => {
    const nav = page.locator('header nav[aria-label="Primary"]')
    await expect(nav).toBeVisible()
    // Spot-check a few nav items
    await expect(nav.getByRole('link', { name: 'Home' })).toBeVisible()
    await expect(nav.getByRole('link', { name: 'Services' })).toBeVisible()
    await expect(nav.getByRole('link', { name: 'Contact' })).toBeVisible()
  })

  test('Footer renders with Quick Links and Contact sections', async ({ page }) => {
    // The page footer is the only <footer> with the contentinfo role — review
    // cards also render <footer> elements, so a bare 'footer' locator is ambiguous.
    const footer = page.getByRole('contentinfo')
    await expect(footer).toBeVisible()
    await expect(footer.getByText('Quick Links')).toBeVisible()
    await expect(footer.getByRole('heading', { name: /^Contact$/i })).toBeVisible()
  })
})
