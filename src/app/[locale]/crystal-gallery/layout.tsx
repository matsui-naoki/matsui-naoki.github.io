import { pageMetadata } from '@/lib/seo'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  return pageMetadata(locale, 'crystal-gallery', {
    ja: { title: '結晶構造ギャラリー', description: 'リチウム・フッ化物・ヒドリドイオン伝導体など電池材料の結晶構造を3Dで見られるギャラリー。' },
    en: { title: 'Crystal structure gallery', description: 'Interactive 3D crystal structures of battery materials: lithium-, fluoride- and hydride-ion conductors and more.' }
  })
}

export default function CrystalGalleryLayout({ children }: { children: React.ReactNode }) {
  return children
}
