import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: { absolute: '結晶構造ギャラリー | 松井直喜' },
  description: 'リチウム・フッ化物・ヒドリドイオン伝導体など電池材料の結晶構造を3Dで見られるギャラリー。'
}

export default function CrystalGalleryLayout({ children }: { children: React.ReactNode }) {
  return children
}
