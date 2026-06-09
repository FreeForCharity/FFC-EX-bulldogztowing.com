import React from 'react'
import { Phone } from 'lucide-react'
import { BUSINESS } from '@/data/bulldogz/business'
import { RATES } from '@/data/bulldogz/rates'

const Rates: React.FC = () => {
  return (
    <section id="rates" aria-labelledby="rates-heading" className="bg-neutral-50 py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-bulldog-red">
            Straightforward pricing
          </p>
          <h2
            id="rates-heading"
            className="text-3xl font-black uppercase tracking-tight text-bulldog-ink sm:text-4xl md:text-5xl"
          >
            Rates
          </h2>
          <p className="mt-4 text-lg text-neutral-600">
            No surprises — our standard rates up front. Call for a free estimate on your specific
            situation.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-2xl overflow-hidden rounded-lg border border-neutral-200 bg-white shadow-sm">
          <dl>
            {RATES.map((rate, i) => (
              <div
                key={rate.service}
                className={`flex items-baseline justify-between gap-4 px-6 py-4 ${
                  i > 0 ? 'border-t border-neutral-100' : ''
                }`}
              >
                <dt className="text-base font-semibold text-bulldog-ink">{rate.service}</dt>
                <dd className="text-base font-bold text-bulldog-red">{rate.price}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="mx-auto mt-8 max-w-2xl text-center">
          <a
            href={`tel:${BUSINESS.phoneTel}`}
            className="inline-flex items-center gap-2 rounded-md bg-bulldog-red px-6 py-3 text-sm font-bold uppercase tracking-wide text-white shadow-md transition hover:bg-bulldog-red-light focus:outline-none focus-visible:ring-2 focus-visible:ring-bulldog-ink"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            Call {BUSINESS.phone} for a free estimate
          </a>
        </div>
      </div>
    </section>
  )
}

export default Rates
