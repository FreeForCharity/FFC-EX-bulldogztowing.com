import type { Metadata } from 'next'
import ServiceAreaPage from '@/components/service-area/ServiceAreaPage'
import { SERVICE_AREAS } from '@/data/bulldogz/areas'

const area = SERVICE_AREAS.find((a) => a.slug === 'i-83-corridor')!

export const metadata: Metadata = {
  title: `Towing along the ${area.name}`,
  description: `24/7 towing and recovery along the ${area.name} in PA and MD. Licensed, insured, and fast. Call (717) 495-7703.`,
  alternates: { canonical: `/${area.slug}/` },
}

export default function Page() {
  return <ServiceAreaPage area={area} />
}
