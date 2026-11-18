import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: { absolute: 'その他のイオン伝導体の結晶構造 | 松井直喜' },
  description: 'AgI、β-アルミナ、グラファイトなどの結晶構造を3Dで表示。',
  alternates: { canonical: '/crystal-gallery/others' }
}

export default function CrystalGalleryOthersLayout({ children }: { children: React.ReactNode }) {
  return children
}
