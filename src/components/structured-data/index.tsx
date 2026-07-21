import React from 'react'
import { BUSINESS } from '@/data/bulldogz/business'
import { AGGREGATE_RATING } from '@/data/bulldogz/reviews'
import { SERVICE_AREAS } from '@/data/bulldogz/areas'

/**
 * LocalBusiness JSON-LD for Google local search and Maps.
 * All values are sourced from the existing content data modules —
 * structured markup only, no new content.
 */
const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'AutomotiveBusiness',
  '@id': 'https://bulldogztowing.com/#business',
  name: BUSINESS.name,
  slogan: BUSINESS.tagline,
  description: `24/7 towing and roadside assistance in Glen Rock, PA and southern York County. Towing: ${BUSINESS.hours}. Towing lot: ${BUSINESS.lotHoursWeekday}; ${BUSINESS.lotHoursWeekend}.`,
  url: 'https://bulldogztowing.com/',
  image: 'https://bulldogztowing.com/Images/bulldogztowing/logo.jpeg',
  telephone: BUSINESS.phoneTel,
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: BUSINESS.phoneTel,
      contactType: 'customer service',
      availableLanguage: 'English',
      hoursAvailable: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '00:00',
        closes: '23:59',
      },
    },
    {
      '@type': 'ContactPoint',
      telephone: BUSINESS.officePhoneTel,
      contactType: 'office',
      availableLanguage: 'English',
    },
  ],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Glen Rock',
    addressRegion: 'PA',
    addressCountry: 'US',
  },
  areaServed: SERVICE_AREAS.map((area) => ({
    '@type': 'Place',
    name: `${area.name}, ${area.region}`,
  })),
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59',
    },
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: AGGREGATE_RATING.rating,
    reviewCount: AGGREGATE_RATING.reviewCount,
  },
  sameAs: [BUSINESS.facebook],
}

const StructuredData: React.FC = () => (
  <script
    id="business-jsonld"
    type="application/ld+json"
    // Escape < so no data value can ever terminate the script element early.
    dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA).replace(/</g, '\\u003c') }}
  />
)

export default StructuredData
