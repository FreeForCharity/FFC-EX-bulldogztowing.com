import React from 'react'
import Image from 'next/image'
import { assetPath } from '@/lib/assetPath'
import { ShieldCheck, Clock, Award } from 'lucide-react'

const HIGHLIGHTS = [
  {
    icon: Clock,
    title: 'Fast Response',
    body: 'Most calls answered live, with a truck rolling within minutes — not hours. Drivers are on standby around the clock.',
  },
  {
    icon: ShieldCheck,
    title: 'Licensed & Insured',
    body: 'A fully licensed, insured tow operator with the right equipment for cars, trucks, RVs, and heavy loads.',
  },
  {
    icon: Award,
    title: 'Trusted Locally',
    body: '5.0-star rated on Google with dozens of verified reviews from neighbors across southern York County.',
  },
]

const About: React.FC = () => {
  return (
    <section id="about" aria-labelledby="about-heading" className="bg-neutral-50 py-20 md:py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 lg:grid-cols-2 lg:items-center">
        <div className="relative">
          <div className="overflow-hidden rounded-lg shadow-xl">
            <Image
              src={assetPath('/Images/bulldogztowing/hero-secondary.jpeg')}
              alt="Bulldogz Towing truck on a job"
              width={480}
              height={538}
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-4 hidden rounded-md bg-bulldog-red px-6 py-4 text-white shadow-lg sm:block">
            <p className="text-xs uppercase tracking-widest">Available</p>
            <p className="text-2xl font-black">24 / 7 / 365</p>
          </div>
        </div>

        <div>
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-bulldog-red">
            About Bulldogz Towing
          </p>
          <h2
            id="about-heading"
            className="text-3xl font-black uppercase tracking-tight text-bulldog-ink sm:text-4xl md:text-5xl"
          >
            The fastest towing service in town.
          </h2>
          <p className="mt-5 text-lg text-neutral-700">
            With Bulldogz Towing, we prioritize your safety and convenience. Our speedy response
            team ensures that you&apos;ll be picked up quickly and efficiently — then trust us to
            get you off the road and to a safe place in record time.
          </p>

          <ul className="mt-8 space-y-5">
            {HIGHLIGHTS.map(({ icon: Icon, title, body }) => (
              <li key={title} className="flex gap-4">
                <span className="flex h-11 w-11 flex-none items-center justify-center rounded-md bg-bulldog-red text-white">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-lg font-bold uppercase tracking-wide text-bulldog-ink">
                    {title}
                  </h3>
                  <p className="mt-1 text-neutral-600">{body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default About
