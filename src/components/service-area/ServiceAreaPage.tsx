import React from 'react'
import Link from 'next/link'
import { Phone, MapPin, Clock, ArrowLeft } from 'lucide-react'
import { BUSINESS } from '@/data/bulldogz/business'
import type { ServiceArea } from '@/data/bulldogz/areas'
import { SERVICES } from '@/data/bulldogz/services'

interface Props {
  area: ServiceArea
}

const ServiceAreaPage: React.FC<Props> = ({ area }) => {
  return (
    <main id="main" className="bg-white">
      <section className="bg-bulldog-ink pb-16 pt-32 text-white md:pt-40">
        <div className="mx-auto max-w-4xl px-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-white/70 hover:text-bulldog-red-light"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Back to home
          </Link>
          <p className="mt-6 text-sm font-bold uppercase tracking-[0.25em] text-bulldog-red-light">
            Service Area
          </p>
          <h1 className="mt-3 text-4xl font-black uppercase tracking-tight text-white sm:text-5xl md:text-6xl">
            Towing in {area.name}
          </h1>
          <p className="mt-2 text-lg text-white/70">{area.region}</p>
          <p className="mt-6 max-w-2xl text-lg text-white/90">{area.blurb}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={`tel:${BUSINESS.phoneTel}`}
              className="inline-flex items-center justify-center gap-3 rounded-md bg-bulldog-red px-6 py-4 text-lg font-bold uppercase tracking-wide text-white shadow-lg shadow-bulldog-red/30 transition hover:bg-bulldog-red-light focus:outline-none focus-visible:ring-4 focus-visible:ring-bulldog-red/40"
            >
              <Phone className="h-5 w-5" aria-hidden="true" />
              Call Now: {BUSINESS.phone}
            </a>
          </div>
          <ul
            aria-label="Service highlights"
            className="mt-10 grid grid-cols-1 gap-x-8 gap-y-4 text-sm sm:grid-cols-3"
          >
            <li className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-bulldog-red-light" aria-hidden="true" />
              <span className="font-semibold">Open 24/7</span>
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-bulldog-red-light" aria-hidden="true" />
              <span className="font-semibold">Local to {area.name}</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-5 w-5 text-bulldog-red-light" aria-hidden="true" />
              <span className="font-semibold">Free estimates by phone</span>
            </li>
          </ul>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-black uppercase tracking-tight text-bulldog-ink sm:text-3xl">
            What we do in {area.name}
          </h2>
          <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {SERVICES.map((s) => (
              <li
                key={s.title}
                className="rounded-md border border-neutral-200 bg-neutral-50 p-4 text-sm font-semibold text-bulldog-ink"
              >
                {s.title}
              </li>
            ))}
          </ul>
          <p className="mt-10 text-base text-neutral-700">
            Need a tow in {area.name}? Call {BUSINESS.phone} — we&apos;ll have a driver headed your
            way fast. Our service area covers {area.region} and the broader I-83 corridor.
          </p>
        </div>
      </section>
    </main>
  )
}

export default ServiceAreaPage
