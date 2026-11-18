import { pageMetadata } from '@/lib/seo'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  return pageMetadata(locale, 'publications', {
    ja: { title: '研究業績・論文リスト', description: '松井直喜(東京科学大学 准教授)の原著論文、総説、学会発表の一覧。固体イオニクス、全固体電池、フッ化物イオン伝導体、ヒドリドイオン伝導体。' },
    en: { title: 'Publications', description: 'Papers, reviews and presentations by Naoki Matsui (Associate Professor, Institute of Science Tokyo) on solid-state ionics, all-solid-state batteries, and fluoride- and hydride-ion conductors.' }
  })
}

export default function PublicationsLayout({ children }: { children: React.ReactNode }) {
  return children
}
