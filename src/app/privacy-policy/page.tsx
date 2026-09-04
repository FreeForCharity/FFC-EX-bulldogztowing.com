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
        <p className="mt-2 text-sm italic text-neutral-500">Last updated: August 30, 2026</p>

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

          <h2 className="mt-8 text-2xl font-bold text-bulldog-ink">
            6. Your Rights in the European Union, United Kingdom, and EEA (GDPR)
          </h2>
          <p>
            If you visit from the European Union, the United Kingdom, or the wider European Economic
            Area, the EU General Data Protection Regulation (GDPR) or the UK GDPR applies to our
            handling of your personal data, and this section supplements the rest of this policy.
          </p>
          <p>
            <strong>How consent works regionally.</strong> We use Google Consent Mode. Whether the
            permissive or the opt-in default applies to Google&apos;s tags is determined by Google
            from your IP address at the time of your visit; IP geolocation is approximate. Google
            Analytics runs cookie-free until you accept through the cookie banner, wherever in the
            world you are. (Switzerland is included because Google&apos;s consent defaults cover it;
            the data of visitors in Switzerland is protected by Switzerland&apos;s Federal Act on
            Data Protection (FADP) rather than the GDPR.) There is no country in which analytics
            cookies are set before you choose. You can change your choice at any time via the Cookie
            Preferences link in the footer of every page; withdrawing consent deletes the tracking
            cookies this site set. Session recording (Microsoft Clarity) and marketing (Meta Pixel)
            load only after you explicitly opt in — everywhere in the world.
          </p>
          <p>
            <strong>Your rights.</strong> You have the right to: access the personal data we hold
            about you; have inaccurate data rectified; have your data erased; restrict or object to
            processing; receive your data in a portable format; and withdraw any consent you have
            given, at any time, without affecting the lawfulness of processing before withdrawal.
            Call us at{' '}
            <a href={`tel:${BUSINESS.phoneTel}`} className="text-bulldog-red hover:underline">
              {BUSINESS.phone}
            </a>{' '}
            to exercise any of these rights; we will respond within the time limits the GDPR sets.
            You also have the right to lodge a complaint with your national data protection
            supervisory authority (in the UK, the Information Commissioner&apos;s Office).
          </p>

          <h2 className="mt-8 text-2xl font-bold text-bulldog-ink">
            7. Your California Privacy Rights (CCPA/CPRA)
          </h2>
          <p>
            If you are a California resident, the California Consumer Privacy Act, as amended by the
            California Privacy Rights Act (CCPA/CPRA), gives you specific rights, and this section
            supplements the rest of this policy.
          </p>
          <p>
            <strong>We do not sell or share your personal information.</strong> {BUSINESS.name} does
            not sell personal information, and does not share it for cross-context behavioral
            advertising, as those terms are defined by California law — and has not done so in the
            preceding 12 months. We do not knowingly collect or sell the personal information of
            anyone under 16, and we do not collect sensitive personal information beyond what is
            necessary to provide our services.
          </p>
          <p>
            <strong>Your rights.</strong> You have the right to: know what personal information we
            collect, use, and disclose, and to access it; delete personal information we collected
            from you; correct inaccurate personal information; opt out of any sale or sharing of
            personal information (not applicable, since we do neither); limit the use of sensitive
            personal information; and not be discriminated against for exercising any of these
            rights.
          </p>
          <p>
            <strong>Opt-out preference signals (Global Privacy Control / Do Not Track).</strong>{' '}
            This site does not read or respond to the Global Privacy Control or Do Not Track browser
            signals. We do not sell or share personal information as defined by the CCPA/CPRA, so
            there is nothing for those signals to opt out of. Analytics cookies are never set before
            you accept, anywhere in the world; you can turn them off again at any time via the
            Cookie Preferences link in the footer, and we delete the cookies when you do. Session
            recording (Microsoft Clarity) and marketing (Meta Pixel) never load without your
            explicit opt-in, anywhere in the world.
          </p>
          <p>
            <strong>Exercising your rights.</strong> Call us at{' '}
            <a href={`tel:${BUSINESS.phoneTel}`} className="text-bulldog-red hover:underline">
              {BUSINESS.phone}
            </a>
            . We will verify your request using information associated with your interactions with
            us, and you may use an authorized agent to submit a request on your behalf. We will
            respond within the timeframes California law requires.
          </p>

          <h2 className="mt-8 text-2xl font-bold text-bulldog-ink">8. Contact</h2>
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
