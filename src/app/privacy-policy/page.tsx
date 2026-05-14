import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { BUSINESS } from '@/data/bulldogz/business'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: `Privacy Policy for ${BUSINESS.name}.`,
  alternates: { canonical: '/privacy-policy/' },
}

export default function PrivacyPolicy() {
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
          Privacy Policy
        </h1>
        <p className="mt-2 text-sm italic text-neutral-500">Last updated: May 14, 2026</p>

        <div className="prose prose-neutral mt-8 max-w-none text-neutral-800">
          <h2 className="mt-8 text-2xl font-bold text-bulldog-ink">1. Overview</h2>
          <p>
            {BUSINESS.name} (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) operates the
            website at bulldogztowing.com. This Privacy Policy explains what information we collect
            when you contact us or visit our website, and how we use it.
          </p>

          <h2 className="mt-8 text-2xl font-bold text-bulldog-ink">2. Information We Collect</h2>
          <p>We collect only what is needed to provide service:</p>
          <ul className="list-disc space-y-1 pl-6">
            <li>
              <strong>Service requests:</strong> when you call or message us, we collect your name,
              phone number, vehicle location, and a description of what you need.
            </li>
            <li>
              <strong>Website analytics:</strong> our site may use basic analytics (such as Google
              Analytics) to count visits and understand which pages are most useful. You can opt out
              of non-essential analytics cookies from the cookie banner.
            </li>
          </ul>

          <h2 className="mt-8 text-2xl font-bold text-bulldog-ink">3. How We Use Information</h2>
          <p>
            We use the information you give us to dispatch a truck, complete the service, take
            payment, and follow up if needed. We do not sell your personal information.
          </p>

          <h2 className="mt-8 text-2xl font-bold text-bulldog-ink">4. Sharing</h2>
          <p>
            We share information only with vendors that help us run the business (for example,
            payment processors or our insurer), or when required by law.
          </p>

          <h2 className="mt-8 text-2xl font-bold text-bulldog-ink">5. Your Choices</h2>
          <p>
            You may ask us what information we have on file about you, request that it be corrected,
            or ask us to delete records that are not legally required to retain. Contact us using
            the number below.
          </p>

          <h2 className="mt-8 text-2xl font-bold text-bulldog-ink">6. Contact</h2>
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
