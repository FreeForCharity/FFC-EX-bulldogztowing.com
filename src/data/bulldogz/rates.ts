/**
 * Service rates.
 * Sourced from https://bulldogztowing.com (live site snapshot 2026-06-09).
 */

export interface Rate {
  service: string
  price: string
}

export const RATES: Rate[] = [
  { service: 'Hook Up & 5 Miles', price: '$300' },
  { service: 'Winch Out', price: '$280/hr' },
  { service: 'Additional Miles', price: '$5 per mile' },
  { service: 'Clean Up', price: '$175/hr' },
  { service: 'Weather Seal', price: '$40' },
  { service: 'Storage (In)', price: '$100/day' },
  { service: 'Storage (Out)', price: '$60/day' },
  { service: 'Admin Fee', price: '$40' },
  { service: 'After Hours Fee', price: '$60' },
]
