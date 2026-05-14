/**
 * Services offered by Bulldogz Towing.
 * Sourced from https://bulldogztowing.com (Services section).
 */

export interface Service {
  title: string
  description: string
  image: string
  alt: string
}

export const SERVICES: Service[] = [
  {
    title: 'Roadside Assistance',
    description:
      'Stranded? Our crew is on standby 24/7 to get you back on the road or safely off it — fast.',
    image: '/Images/bulldogztowing/roadside.jpg',
    alt: 'Bulldogz Towing roadside assistance in progress',
  },
  {
    title: 'Cars, Pickups, Vans & Motorcycles',
    description:
      'Safe, careful towing for every passenger vehicle — from compact cars to full-size pickups and bikes.',
    image: '/Images/bulldogztowing/cars-vans.jpg',
    alt: 'Pickup truck being secured to a flatbed tow truck',
  },
  {
    title: 'Lockouts & Jump Starts',
    description:
      'Keys locked inside? Battery dead? Quick on-site help so you can get moving again.',
    image: '/Images/bulldogztowing/lockouts.png',
    alt: 'Driver locked out of vehicle calling for help',
  },
  {
    title: 'RVs, Motorhomes & Trailers',
    description:
      'Heavy-duty equipment for recreational vehicles, motorhomes, campers, and large trailers.',
    image: '/Images/bulldogztowing/semi-truck.jpg',
    alt: 'Heavy-duty tow truck for RVs and large vehicles',
  },
  {
    title: 'Hauling & Transport',
    description:
      'Need something moved? We handle vehicle, equipment, and container transport across the region.',
    image: '/Images/bulldogztowing/hauling.jpg',
    alt: 'Bulldogz Towing vehicle hauling service',
  },
  {
    title: 'Local & Long-Distance Towing',
    description:
      'From down-the-street tows to multi-state runs — same dependable service either way.',
    image: '/Images/bulldogztowing/long-distance.jpg',
    alt: 'Tow truck on long-distance highway transport',
  },
  {
    title: 'Fuel Delivery & Tire Repair',
    description:
      'Out of gas or have a flat? We can bring you fuel or swap a spare so you can be on your way.',
    image: '/Images/bulldogztowing/fuel.png',
    alt: 'Roadside fuel delivery service',
  },
  {
    title: 'Aircraft & Boat Recovery',
    description: 'Specialized recovery for boats, light aircraft, and other non-standard vehicles.',
    image: '/Images/bulldogztowing/boat-tow.png',
    alt: 'Boat being safely towed by a tow truck',
  },
]
