import React from 'react'
import Link from 'next/link'
import { MapPin } from 'lucide-react'

const AREAS = [
  { name: 'Glen Rock', slug: 'glen-rock-pa' },
  { name: 'York', slug: 'york-pa' },
  { name: 'Shrewsbury', slug: 'shrewsbury-pa' },
  { name: 'Stewartstown', slug: 'stewartstown-pa' },
  { name: 'Hanover', slug: 'hanover-pa' },
  { name: 'I-83 Corridor', slug: 'i-83-corridor' },
]

const ServiceAreas: React.FC = () => {
  return (
    <section
      id="service-areas"
      aria-labelledby="service-areas-heading"
      className="bg-white py-20 md:py-24"
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-bulldog-red">
            Where we tow
          </p>
          <h2
            id="service-areas-heading"
            className="text-3xl font-black uppercase tracking-tight text-bulldog-ink sm:text-4xl md:text-5xl"
          >
            Service Areas
          </h2>
          <p className="mt-4 text-lg text-neutral-600">
            Headquartered in Glen Rock, PA — serving southern York County and the I-83 corridor.
          </p>
        </div>

        <ul className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {AREAS.map((area) => (
            <li key={area.slug}>
              <Link
                href={`/${area.slug}/`}
                className="flex h-full items-center gap-2 rounded-md border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm font-semibold text-bulldog-ink transition hover:border-bulldog-red hover:bg-bulldog-red/5 hover:text-bulldog-red focus:outline-none focus-visible:ring-2 focus-visible:ring-bulldog-red/50"
              >
                <MapPin className="h-4 w-4 text-bulldog-red" aria-hidden="true" />
                <span>{area.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default ServiceAreas
