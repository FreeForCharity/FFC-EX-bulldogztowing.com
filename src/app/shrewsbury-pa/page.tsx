import type { Metadata } from 'next'
import ServiceAreaPage from '@/components/service-area/ServiceAreaPage'
import { SERVICE_AREAS } from '@/data/bulldogz/areas'

const area = SERVICE_AREAS.find((a) => a.slug === 'shrewsbury-pa')!

export const metadata: Metadata = {
  title: `Towing in ${area.name}, PA`,
  description: `24/7 towing and roadside assistance in ${area.name}, PA. Licensed, insured, and fast. Call (717) 495-7703.`,
  alternates: { canonical: `/${area.slug}/` },
}

export default function Page() {
  return <ServiceAreaPage area={area} />
}
