import React from 'react'
import Image from 'next/image'
import { Phone, MapPin, Clock, ShieldCheck } from 'lucide-react'
import { assetPath } from '@/lib/assetPath'
import { BUSINESS } from '@/data/bulldogz/business'

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative isolate overflow-hidden bg-bulldog-ink text-white"
    >
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={assetPath('/Images/bulldogztowing/hero-truck.jpeg')}
          alt=""
          aria-hidden="true"
          fill
          sizes="100vw"
          priority
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/30" />
      </div>

      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 pb-20 pt-36 md:pt-44 lg:flex-row lg:items-center lg:gap-16">
        <div className="max-w-2xl">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-bulldog-red/60 bg-bulldog-red/15 px-4 py-1.5 text-sm font-semibold uppercase tracking-widest text-bulldog-red-light">
            <ShieldCheck className="h-4 w-4" aria-hidden="true" />
            Licensed & Insured
          </p>
          <h1
            id="hero-heading"
            className="text-4xl font-black uppercase leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Get Towed
            <span className="block text-bulldog-red">In Record Time</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/90 sm:text-xl">
            Experience the fastest towing service in town. Reliable drivers on standby — ready to
            rescue you and your vehicle, 24 hours a day.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href={`tel:${BUSINESS.phoneTel}`}
              className="inline-flex items-center justify-center gap-3 rounded-md bg-bulldog-red px-6 py-4 text-lg font-bold uppercase tracking-wide text-white shadow-lg shadow-bulldog-red/30 transition hover:bg-bulldog-red-light focus:outline-none focus-visible:ring-4 focus-visible:ring-bulldog-red/40"
            >
              <Phone className="h-5 w-5" aria-hidden="true" />
              Call Now: {BUSINESS.phone}
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-md border-2 border-white/80 px-6 py-4 text-lg font-semibold uppercase tracking-wide text-white transition hover:border-white hover:bg-white/10 focus:outline-none focus-visible:ring-4 focus-visible:ring-white/40"
            >
              Our Services
            </a>
          </div>

          <ul
            aria-label="Bulldogz Towing key facts"
            className="mt-10 grid grid-cols-1 gap-x-8 gap-y-4 text-sm sm:grid-cols-3"
          >
            <li className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-bulldog-red" aria-hidden="true" />
              <span className="font-semibold">Open 24/7</span>
            </li>
            <li className="flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-bulldog-red" aria-hidden="true" />
              <span className="font-semibold">Free Estimates</span>
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-bulldog-red" aria-hidden="true" />
              <span className="font-semibold">{BUSINESS.address}</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Hero
