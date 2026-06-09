'use client'

import React from 'react'
import Link from 'next/link'
import { Phone, MapPin, Clock, Facebook } from 'lucide-react'
import { assetPath } from '@/lib/assetPath'
import { BUSINESS } from '@/data/bulldogz/business'

const QUICK_LINKS = [
  { name: 'Home', href: '/#hero' },
  { name: 'About', href: '/#about' },
  { name: 'Services', href: '/#services' },
  { name: 'Gallery', href: '/#gallery' },
  { name: 'Reviews', href: '/#reviews' },
  { name: 'Service Areas', href: '/#service-areas' },
  { name: 'Contact', href: '/#contact' },
  { name: 'Rates', href: '/#rates' },
]

const POLICY_LINKS = [
  { name: 'Privacy Policy', href: '/privacy-policy' },
  { name: 'Terms of Service', href: '/terms-of-service' },
]

const Footer: React.FC = () => {
  const currentYear = React.useMemo(() => new Date().getFullYear(), [])

  return (
    <footer className="bg-neutral-950 text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div className="space-y-4">
          <Link href="/" className="flex items-center gap-3" aria-label="Bulldogz Towing home">
            <img
              src={assetPath('/Images/bulldogztowing/logo.jpeg')}
              alt=""
              aria-hidden="true"
              className="h-12 w-12 rounded-md"
            />
            <span className="font-black uppercase leading-tight tracking-wider">
              <span className="block text-lg">Bulldogz</span>
              <span className="block text-sm text-bulldog-red-light">Towing</span>
            </span>
          </Link>
          <p className="text-sm text-white/70">
            Fast, friendly, 24/7 towing and roadside service in Glen Rock, PA and surrounding
            communities.
          </p>
          <a
            href={BUSINESS.facebook}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Bulldogz Towing on Facebook"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-bulldog-red transition hover:bg-bulldog-red-light"
          >
            <Facebook className="h-5 w-5" aria-hidden="true" />
          </a>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-sm font-bold uppercase tracking-widest text-bulldog-red-light">
            Quick Links
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            {QUICK_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-white/80 transition hover:text-bulldog-red-light"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Policies */}
        <div>
          <h3 className="text-sm font-bold uppercase tracking-widest text-bulldog-red-light">
            Policies
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            {POLICY_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-white/80 transition hover:text-bulldog-red-light"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-sm font-bold uppercase tracking-widest text-bulldog-red-light">
            Contact
          </h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <Phone className="mt-0.5 h-5 w-5 flex-none text-bulldog-red" aria-hidden="true" />
              <a
                href={`tel:${BUSINESS.phoneTel}`}
                className="font-semibold text-white hover:text-bulldog-red-light"
              >
                {BUSINESS.phone}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-5 w-5 flex-none text-bulldog-red" aria-hidden="true" />
              <a
                href={BUSINESS.mapsSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-bulldog-red-light"
              >
                {BUSINESS.address}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Clock className="mt-0.5 h-5 w-5 flex-none text-bulldog-red" aria-hidden="true" />
              <span className="text-white/80">
                <span className="block">Towing: {BUSINESS.hours}</span>
                <span className="mt-1 block">Lot: {BUSINESS.lotHoursWeekday}</span>
                <span className="block">{BUSINESS.lotHoursWeekend}</span>
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-5 text-xs text-white/60 sm:flex-row">
          <p>
            &copy; {currentYear} {BUSINESS.name}. All rights reserved.
          </p>
          <p className="text-center sm:text-right">
            Site built &amp; hosted by{' '}
            <a
              href="https://freeforcharity.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-bulldog-red-light hover:underline"
            >
              Free For Charity
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
