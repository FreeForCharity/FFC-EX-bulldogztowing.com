/**
 * Test Configuration for Bulldogz Towing
 *
 * This file contains all content-specific values used in E2E tests.
 * Update these values when content changes to keep tests in sync.
 */

export const testConfig = {
  /**
   * Business identity
   */
  business: {
    name: 'Bulldogz Towing',
    phone: '(717) 495-7703',
    phoneTel: '+17174957703',
    address: 'Glen Rock, PA',
  },

  /**
   * Copyright Configuration
   * Used in: tests/copyright.spec.ts
   */
  copyright: {
    text: 'Bulldogz Towing',
    searchText: 'All rights reserved',
    linkUrl: 'https://freeforcharity.org',
    linkText: 'Free For Charity',
  },

  /**
   * Google Tag Manager Configuration
   * Used in: tests/google-tag-manager.spec.ts
   */
  googleTagManager: {
    id: 'GTM-TQ5H8HPR',
  },

  /**
   * Logo Configuration
   * Used in: tests/logo.spec.ts
   */
  logo: {
    // The header logo img has aria-hidden="true" and alt="" — we find it via
    // the aria-label on the wrapping Link instead.
    navBarAriaLabel: 'Bulldogz Towing home',
  },

  /**
   * Cookie Consent Configuration
   * Used in: tests/cookie-consent.spec.ts
   */
  cookieConsent: {
    bannerHeading: 'We Value Your Privacy',
    modalHeading: 'Cookie Preferences',
    buttons: {
      acceptAll: 'Accept All',
      declineAll: 'Decline All',
      customize: 'Customize',
      savePreferences: 'Save Preferences',
      cancel: 'Cancel',
    },
  },

  /**
   * Home page sections
   * Used in: tests/smoke.spec.ts
   */
  homeSections: [
    'hero',
    'about',
    'services',
    'gallery',
    'reviews',
    'service-areas',
    'contact',
    'rates',
  ],

  /**
   * Service area slugs
   * Used in: tests/service-areas.spec.ts
   */
  serviceAreaSlugs: [
    'glen-rock-pa',
    'york-pa',
    'hanover-pa',
    'shrewsbury-pa',
    'stewartstown-pa',
    'i-83-corridor',
  ],
}
