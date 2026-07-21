import React from 'react'
import Image from 'next/image'
import { assetPath } from '@/lib/assetPath'
import { SERVICES } from '@/data/bulldogz/services'

const Services: React.FC = () => {
  return (
    <section id="services" aria-labelledby="services-heading" className="bg-white py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-bulldog-red">
            What we do
          </p>
          <h2
            id="services-heading"
            className="text-3xl font-black uppercase tracking-tight text-bulldog-ink sm:text-4xl md:text-5xl"
          >
            Our Services
          </h2>
          <p className="mt-4 text-lg text-neutral-600">
            From a flat tire to a multi-vehicle recovery — Bulldogz Towing has the equipment and
            experience to get you back on the road.
          </p>
        </div>

        <ul className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service) => (
            <li
              key={service.title}
              className="group flex flex-col overflow-hidden rounded-lg border border-neutral-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-neutral-100">
                <Image
                  src={assetPath(service.image)}
                  alt={service.alt}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-lg font-bold uppercase tracking-wide text-bulldog-ink">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                  {service.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Services
