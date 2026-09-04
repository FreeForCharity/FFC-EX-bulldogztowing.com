import type { Metadata, Viewport } from 'next'
import './globals.css'
import Header from './../components/header'
import Footer from './../components/footer'
import CookieConsent from './../components/cookie-consent'
import GoogleTagManager, { GoogleTagManagerNoScript } from './../components/google-tag-manager'
import { CONSENT_MODE_BOOTSTRAP } from '@/lib/consent-mode'
import StructuredData from './../components/structured-data'
import { openSans, lato, montserrat } from '@/lib/fonts'

// Get basePath for GitHub Pages deployment
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

export const metadata: Metadata = {
  metadataBase: new URL('https://bulldogztowing.com'),
  title: {
    default: 'Bulldogz Towing | 24/7 Towing & Roadside Assistance in Glen Rock, PA',
    template: '%s | Bulldogz Towing',
  },
  description:
    'Bulldogz Towing — fast, friendly, 24/7 towing and roadside assistance in Glen Rock, PA and southern York County. Licensed, insured, and 5-star rated. Call (717) 495-7703.',
  keywords: [
    'towing',
    'tow truck',
    'roadside assistance',
    'Glen Rock PA',
    'York County PA',
    'flatbed towing',
    'lockout service',
    'jump start',
    'fuel delivery',
    'long distance towing',
    'Bulldogz Towing',
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: 'https://bulldogztowing.com/',
    siteName: 'Bulldogz Towing',
    title: 'Bulldogz Towing | 24/7 Towing in Glen Rock, PA',
    description:
      'Fast response, licensed and insured towing — 24 hours a day, 365 days a year. Glen Rock, PA.',
    images: [
      {
        url: '/Images/bulldogztowing/hero-truck.jpeg',
        width: 1200,
        height: 630,
        alt: 'Bulldogz Towing truck',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bulldogz Towing | 24/7 Towing in Glen Rock, PA',
    description: 'Fast response, licensed and insured towing — 24 hours a day, 365 days a year.',
    images: ['/Images/bulldogztowing/hero-truck.jpeg'],
  },
  icons: {
    icon: [{ url: `${basePath}/icon.svg`, type: 'image/svg+xml' }],
    apple: [{ url: `${basePath}/apple-icon.svg`, type: 'image/svg+xml' }],
  },
  manifest: `${basePath}/site.webmanifest`,
}

export const viewport: Viewport = {
  themeColor: '#0a0a0a',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        {/* Preload critical LCP image */}
        <link
          rel="preload"
          as="image"
          href={`${basePath}/Images/bulldogztowing/hero-truck.jpeg`}
          fetchPriority="high"
        />
        {/* Google Consent Mode v2 defaults — MUST run before any Google tag
            (i.e. before the GoogleTagManager component below) so the global
            consent defaults are already on the dataLayer when GTM/GA4
            initialise. Denied worldwide: one unscoped default withholds
            analytics and ad storage from every visitor until they opt in, so
            there is no region left for Google to resolve from the visitor's IP
            address. See src/lib/consent-mode.ts. */}
        <script dangerouslySetInnerHTML={{ __html: CONSENT_MODE_BOOTSTRAP }} />
        <GoogleTagManager />
        <StructuredData />
      </head>
      <body
        className={[
          'antialiased',
          'bg-white',
          'text-bulldog-ink',
          openSans.variable,
          lato.variable,
          montserrat.variable,
        ].join(' ')}
        suppressHydrationWarning={true}
      >
        <GoogleTagManagerNoScript />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-100 focus:rounded-md focus:bg-bulldog-red focus:px-4 focus:py-2 focus:font-semibold focus:text-white"
        >
          Skip to main content
        </a>
        <Header />
        {children}
        <Footer />
        <CookieConsent />
      </body>
    </html>
  )
}
