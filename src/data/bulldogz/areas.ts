/**
 * Service area pages for Bulldogz Towing.
 * Each area gets its own SEO-targeted page at /<slug>/.
 */

export interface ServiceArea {
  slug: string
  name: string
  region: string
  blurb: string
}

export const SERVICE_AREAS: ServiceArea[] = [
  {
    slug: 'glen-rock-pa',
    name: 'Glen Rock',
    region: 'York County, PA',
    blurb:
      'Glen Rock is home base. Most calls in the borough are answered with a truck on the way in minutes.',
  },
  {
    slug: 'york-pa',
    name: 'York',
    region: 'York County, PA',
    blurb:
      'Fast towing and roadside service in and around the city of York — local streets, highways, and the I-83 corridor.',
  },
  {
    slug: 'shrewsbury-pa',
    name: 'Shrewsbury',
    region: 'York County, PA',
    blurb:
      'Quick response into Shrewsbury and surrounding communities along Route 851 and the I-83 corridor.',
  },
  {
    slug: 'stewartstown-pa',
    name: 'Stewartstown',
    region: 'York County, PA',
    blurb: 'Towing, lockouts, and jump starts across Stewartstown and southern York County.',
  },
  {
    slug: 'hanover-pa',
    name: 'Hanover',
    region: 'York County, PA',
    blurb: 'Reliable towing and recovery service for Hanover and the surrounding area.',
  },
  {
    slug: 'i-83-corridor',
    name: 'I-83 Corridor',
    region: 'PA / MD',
    blurb:
      'Recovery and towing along the I-83 corridor from southern Pennsylvania toward the Maryland line.',
  },
]
