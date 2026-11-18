import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: { absolute: 'フッ化物イオン伝導体の結晶構造 | 松井直喜' },
  description: 'LaF₃、PbSnF₄などフッ化物イオン伝導体の結晶構造を3Dで表示。',
  alternates: { canonical: '/crystal-gallery/fluoride' }
}

export default function CrystalGalleryFluorideLayout({ children }: { children: React.ReactNode }) {
  return children
}
