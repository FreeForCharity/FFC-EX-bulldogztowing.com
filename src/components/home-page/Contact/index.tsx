import React from 'react'
import { Phone, MapPin, Clock, Mail, Facebook } from 'lucide-react'
import { BUSINESS } from '@/data/bulldogz/business'

const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="bg-bulldog-ink py-20 text-white md:py-24"
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-bulldog-red-light">
            Get in touch
          </p>
          <h2
            id="contact-heading"
            className="text-3xl font-black uppercase tracking-tight sm:text-4xl md:text-5xl"
          >
            Contact & Location
          </h2>
          <p className="mt-4 text-lg text-white/80">
            Call any time, day or night. We&apos;ll be on the way.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-2">
          <div>
            <ul className="space-y-6">
              <li>
                <a
                  href={`tel:${BUSINESS.phoneTel}`}
                  className="group flex items-start gap-4 rounded-lg bg-white/5 p-5 transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-bulldog-red"
                >
                  <span className="rounded-md bg-bulldog-red p-3">
                    <Phone className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <span className="flex-1">
                    <span className="block text-sm uppercase tracking-widest text-white/60">
                      Call us 24/7
                    </span>
                    <span className="block text-2xl font-bold group-hover:text-bulldog-red-light">
                      {BUSINESS.phone}
                    </span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={BUSINESS.mapsSearchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-4 rounded-lg bg-white/5 p-5 transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-bulldog-red"
                >
                  <span className="rounded-md bg-bulldog-red p-3">
                    <MapPin className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <span className="flex-1">
                    <span className="block text-sm uppercase tracking-widest text-white/60">
                      Location
                    </span>
                    <span className="block text-xl font-bold group-hover:text-bulldog-red-light">
                      {BUSINESS.address}
                    </span>
                    <span className="mt-1 block text-sm text-white/60">View on Google Maps</span>
                  </span>
                </a>
              </li>
              <li className="flex items-start gap-4 rounded-lg bg-white/5 p-5">
                <span className="rounded-md bg-bulldog-red p-3">
                  <Clock className="h-6 w-6" aria-hidden="true" />
                </span>
                <span className="flex-1">
                  <span className="block text-sm uppercase tracking-widest text-white/60">
                    Towing Hours
                  </span>
                  <span className="block text-xl font-bold">{BUSINESS.hours}</span>
                  <span className="mt-3 block text-sm uppercase tracking-widest text-white/60">
                    Towing Lot Hours
                  </span>
                  <span className="block text-base font-bold">{BUSINESS.lotHoursWeekday}</span>
                  <span className="block text-base font-bold">{BUSINESS.lotHoursWeekend}</span>
                </span>
              </li>
              <li>
                <a
                  href={BUSINESS.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-4 rounded-lg bg-white/5 p-5 transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-bulldog-red"
                >
                  <span className="rounded-md bg-bulldog-red p-3">
                    <Facebook className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <span className="flex-1">
                    <span className="block text-sm uppercase tracking-widest text-white/60">
                      Follow us
                    </span>
                    <span className="block text-xl font-bold group-hover:text-bulldog-red-light">
                      Facebook
                    </span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:dispatch@bulldogztowing.com?subject=Towing%20Inquiry`}
                  className="group flex items-start gap-4 rounded-lg bg-white/5 p-5 transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-bulldog-red"
                >
                  <span className="rounded-md bg-bulldog-red p-3">
                    <Mail className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <span className="flex-1">
                    <span className="block text-sm uppercase tracking-widest text-white/60">
                      Non-emergency email
                    </span>
                    <span className="block text-lg font-bold group-hover:text-bulldog-red-light">
                      dispatch@bulldogztowing.com
                    </span>
                    <span className="mt-1 block text-sm text-white/60">
                      For emergencies, please call — we respond fastest by phone.
                    </span>
                  </span>
                </a>
              </li>
            </ul>
          </div>

          <div className="overflow-hidden rounded-lg border border-white/10 bg-white/5">
            <div className="aspect-square w-full sm:aspect-[4/3] lg:aspect-auto lg:h-full lg:min-h-[500px]">
              <iframe
                title="Bulldogz Towing service area map — Glen Rock, PA"
                src={BUSINESS.mapsEmbedSrc}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
