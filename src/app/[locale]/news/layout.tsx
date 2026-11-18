import { pageMetadata } from '@/lib/seo'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  return pageMetadata(locale, 'news', {
    ja: { title: 'ニュース', description: '菅野・鈴木・松井研究室(東京科学大学)のニュース。論文掲載、学会発表、放射光・中性子実験、研究室の行事など。' },
    en: { title: 'News', description: 'News from the Kanno–Suzuki–Matsui Lab at Institute of Science Tokyo: papers, conferences, synchrotron and neutron experiments, and lab events.' }
  })
}

export default function NewsLayout({ children }: { children: React.ReactNode }) {
  return children
}
