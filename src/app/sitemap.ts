import type { MetadataRoute } from 'next'
import { SERVICE_AREAS } from '@/data/bulldogz/areas'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://bulldogztowing.com'
  const now = new Date()
  const entries: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/privacy-policy/`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms-of-service/`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    ...SERVICE_AREAS.map((area) => ({
      url: `${baseUrl}/${area.slug}/`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ]
  return entries
}
