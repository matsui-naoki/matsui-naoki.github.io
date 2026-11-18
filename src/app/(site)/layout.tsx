// Root layout for the Japanese-only pages outside [locale] (learning, tools, links, the crystal
// gallery categories) and the redirects from the old unprefixed URLs.
import type { Metadata } from 'next'
import '../globals.css'
import { fontClasses } from '../fonts'
import { SITE_URL } from '@/lib/seo'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: '松井直喜 | 東京科学大学', template: '%s | 松井直喜' },
  description: '東京科学大学 松井直喜(菅野・鈴木・松井研究室)の学習リソース、ツール、結晶構造ギャラリー。',
  verification: { google: 'F13fLSJPsCYbAcZoj3x3dm7O4aHFnPpERcEihhrUqoQ' },
  openGraph: { siteName: '松井直喜 | 東京科学大学', locale: 'ja_JP', type: 'website', images: ['/video/opening.jpg'] }
}

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className={`${fontClasses} antialiased`}>{children}</body>
    </html>
  )
}
