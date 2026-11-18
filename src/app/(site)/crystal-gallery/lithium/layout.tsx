import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: { absolute: 'リチウムイオン伝導体の結晶構造 | 松井直喜' },
  description: 'LGPS、アルジロダイト、ガーネットなどリチウムイオン伝導体と電極材料の結晶構造を3Dで表示。',
  alternates: { canonical: '/crystal-gallery/lithium' }
}

export default function CrystalGalleryLithiumLayout({ children }: { children: React.ReactNode }) {
  return children
}
