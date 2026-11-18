import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: { absolute: 'ヒドリドイオン伝導体の結晶構造 | 松井直喜' },
  description: 'ヒドリドイオン（H⁻）伝導体の結晶構造を3Dで表示。',
  alternates: { canonical: '/crystal-gallery/hydride' }
}

export default function CrystalGalleryHydrideLayout({ children }: { children: React.ReactNode }) {
  return children
}
