import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { BUSINESS } from '@/data/bulldogz/business'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: `Terms of Service for ${BUSINESS.name}.`,
  alternates: { canonical: '/terms-of-service/' },
}

export default function TermsOfService() {
  return (
    <main id="main" className="bg-white pb-20 pt-32 md:pt-40">
      <div className="mx-auto max-w-3xl px-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-bulldog-red hover:text-bulldog-red-light"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Back to home
        </Link>

        <h1 className="mt-6 text-3xl font-black uppercase tracking-tight text-bulldog-ink sm:text-4xl">
          Terms of Service
        </h1>
        <p className="mt-2 text-sm italic text-neutral-500">Last updated: May 14, 2026</p>

        <div className="prose prose-neutral mt-8 max-w-none text-neutral-800">
          <h2 className="mt-8 text-2xl font-bold text-bulldog-ink">1. Acceptance</h2>
          <p>
            By using the website at bulldogztowing.com or requesting service from {BUSINESS.name},
            you agree to these Terms of Service.
          </p>

          <h2 className="mt-8 text-2xl font-bold text-bulldog-ink">2. Services</h2>
          <p>
            {BUSINESS.name} provides towing, recovery, lockout, jump-start, fuel delivery, tire
            change, and related roadside assistance services. All services are provided subject to
            availability, location, road conditions, and applicable law.
          </p>

          <h2 className="mt-8 text-2xl font-bold text-bulldog-ink">3. Estimates &amp; Payment</h2>
          <p>
            Estimates given over the phone are based on the information you provide and may be
            adjusted if conditions on scene are different (for example, additional distance,
            recovery equipment, or wait time). Payment is due at the time service is completed
            unless prior arrangements have been made.
          </p>

          <h2 className="mt-8 text-2xl font-bold text-bulldog-ink">4. Customer Responsibilities</h2>
          <p>
            You agree to: (a) accurately describe the vehicle and its location; (b) remove personal
            property of value before transport when reasonable; (c) authorize us to move your
            vehicle as discussed; and (d) be reachable while the truck is en route.
          </p>

          <h2 className="mt-8 text-2xl font-bold text-bulldog-ink">5. Limitations</h2>
          <p>
            {BUSINESS.name} is fully licensed and insured. To the extent allowed by law, our
            liability for any claim arising out of a service call is limited to the amount paid for
            that call. We are not responsible for pre-existing mechanical or cosmetic damage, or for
            damage caused by improperly secured aftermarket parts.
          </p>

          <h2 className="mt-8 text-2xl font-bold text-bulldog-ink">6. Governing Law</h2>
          <p>These Terms are governed by the laws of the Commonwealth of Pennsylvania.</p>

          <h2 className="mt-8 text-2xl font-bold text-bulldog-ink">7. Contact</h2>
          <p>
            {BUSINESS.name}
            <br />
            {BUSINESS.address}
            <br />
            <a href={`tel:${BUSINESS.phoneTel}`} className="text-bulldog-red hover:underline">
              {BUSINESS.phone}
            </a>
          </p>
        </div>
      </div>
    </main>
  )
}
