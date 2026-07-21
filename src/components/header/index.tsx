'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Phone, Menu, X } from 'lucide-react'
import { assetPath } from '@/lib/assetPath'
import { BUSINESS } from '@/data/bulldogz/business'

interface MenuItem {
  label: string
  href: string
}

const MENU_ITEMS: MenuItem[] = [
  { label: 'Home', href: '/#hero' },
  { label: 'About', href: '/#about' },
  { label: 'Services', href: '/#services' },
  { label: 'Gallery', href: '/#gallery' },
  { label: 'Reviews', href: '/#reviews' },
  { label: 'Areas', href: '/#service-areas' },
  { label: 'Rates', href: '/#rates' },
  { label: 'Contact', href: '/#contact' },
]

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeMobile = () => setIsMobileMenuOpen(false)

  return (
    <header
      id="header"
      className={`fixed inset-x-0 top-0 z-50 flex items-center transition-all duration-300 ${
        isScrolled ? 'bg-bulldog-ink/95 shadow-md backdrop-blur' : 'bg-bulldog-ink/85 backdrop-blur'
      }`}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 text-white">
        <Link
          href="/"
          onClick={closeMobile}
          className="flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-bulldog-red"
          aria-label="Bulldogz Towing home"
        >
          <Image
            src={assetPath('/Images/bulldogztowing/logo.jpeg')}
            alt=""
            aria-hidden="true"
            width={44}
            height={44}
            className={`w-auto rounded-md transition-all duration-300 ${isScrolled ? 'h-9' : 'h-11'}`}
          />
          <span className="font-black uppercase leading-tight tracking-wider">
            <span className="block text-base text-white sm:text-lg">Bulldogz</span>
            <span className="block text-xs text-bulldog-red-light sm:text-sm">Towing</span>
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-1 text-sm font-semibold uppercase tracking-wide">
            {MENU_ITEMS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="rounded-md px-3 py-2 text-white/85 transition hover:bg-white/10 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-bulldog-red"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={`tel:${BUSINESS.phoneTel}`}
            className="hidden items-center gap-2 rounded-md bg-bulldog-red px-4 py-2 text-sm font-bold uppercase tracking-wide text-white shadow-md transition hover:bg-bulldog-red-light focus:outline-none focus-visible:ring-2 focus-visible:ring-white sm:inline-flex"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            {BUSINESS.phone}
          </a>
          <a
            href={`tel:${BUSINESS.phoneTel}`}
            className="inline-flex items-center justify-center rounded-md bg-bulldog-red p-2 text-white sm:hidden"
            aria-label={`Call Bulldogz Towing at ${BUSINESS.phone}`}
          >
            <Phone className="h-5 w-5" aria-hidden="true" />
          </a>
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((v) => !v)}
            className="inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-bulldog-red lg:hidden"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen ? 'true' : 'false'}
            aria-controls="mobile-menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div
          id="mobile-menu"
          className="absolute inset-x-0 top-full border-t border-white/10 bg-bulldog-ink shadow-xl lg:hidden"
        >
          <nav aria-label="Mobile primary">
            <ul className="px-4 py-3">
              {MENU_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={closeMobile}
                    className="block rounded-md px-3 py-3 text-base font-semibold text-white/90 transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-bulldog-red"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header
