// Per-page metadata for the [locale] routes: title, description, canonical URL, hreflang
// alternates and Open Graph. SITE_URL is the canonical origin; set NEXT_PUBLIC_SITE_URL at build
// time when the site moves to its own domain (both the GitHub Pages and the Cloudflare Pages builds
// should then point at the same origin so search engines see one canonical copy).

import type { Metadata } from 'next'

export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || 'https://matsui-naoki.github.io').replace(/\/$/, '')

type Text = { title: string; description: string }

export function pageMetadata(locale: string, path: string, text: { ja: Text; en: Text }): Metadata {
  const ja = locale !== 'en'
  const t = ja ? text.ja : text.en
  const p = path ? `/${path}` : ''
  const title = `${t.title} | ${ja ? '松井直喜' : 'Naoki Matsui'}`
  return {
    title,
    description: t.description,
    alternates: {
      canonical: `/${ja ? 'ja' : 'en'}${p}`,
      languages: { ja: `/ja${p}`, en: `/en${p}`, 'x-default': `/ja${p}` }
    },
    openGraph: {
      title,
      description: t.description,
      url: `${SITE_URL}/${ja ? 'ja' : 'en'}${p}`,
      siteName: ja ? '松井直喜 | 東京科学大学' : 'Naoki Matsui | Institute of Science Tokyo',
      locale: ja ? 'ja_JP' : 'en_US',
      type: 'website',
      images: [{ url: '/video/opening.jpg', width: 1024, height: 576 }]
    },
    twitter: { card: 'summary_large_image', title, description: t.description, images: ['/video/opening.jpg'] }
  }
}
