import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/seo'
import { SECTIONS } from '@/lib/learning'

export const dynamic = 'force-static'

// Bilingual pages (with hreflang alternates), then the Japanese-only pages.
const LOCALE_PAGES: [string, number][] = [
  ['', 1.0], ['research-details', 0.8], ['publications', 0.8], ['news', 0.7], ['profile-detail', 0.7],
  ['prospective-students', 0.8], ['access', 0.5], ['crystal-gallery', 0.5]
]
const JA_ONLY: [string, number][] = [
  ['learning', 0.6],
  ...SECTIONS.flatMap((sec) => sec.docs.map((d): [string, number] => [`learning/${sec.slug}/${d.slug}`, 0.5])),
  ['crystal-gallery/lithium', 0.4], ['crystal-gallery/fluoride', 0.4], ['crystal-gallery/hydride', 0.4],
  ['crystal-gallery/others', 0.4], ['tools', 0.4], ['links', 0.3]
]

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()
  const u = (p: string) => `${SITE_URL}/${p}`.replace(/\/$/, '')
  return [
    ...LOCALE_PAGES.flatMap(([p, priority]) =>
      (['ja', 'en'] as const).map((l) => ({
        url: u(p ? `${l}/${p}` : l),
        lastModified,
        priority,
        alternates: { languages: { ja: u(p ? `ja/${p}` : 'ja'), en: u(p ? `en/${p}` : 'en'), 'x-default': u(p ? `ja/${p}` : 'ja') } }
      }))
    ),
    ...JA_ONLY.map(([p, priority]) => ({ url: u(p), lastModified, priority }))
  ]
}
