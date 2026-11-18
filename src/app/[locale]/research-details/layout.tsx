import { pageMetadata } from '@/lib/seo'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  return pageMetadata(locale, 'research-details', {
    ja: { title: '研究内容', description: 'フッ化物イオン伝導体、リチウムイオン伝導体、ヒドリドイオン伝導体、アニオンインターカレーション電極、機械学習とハイスループット実験による材料探索。松井直喜の研究テーマと主な成果。' },
    en: { title: 'Research', description: 'Fluoride-, lithium- and hydride-ion conductors, anion-intercalation electrodes, and materials discovery with machine learning and high-throughput experiments: research topics and key results of Naoki Matsui.' }
  })
}

export default function ResearchDetailsLayout({ children }: { children: React.ReactNode }) {
  return children
}
