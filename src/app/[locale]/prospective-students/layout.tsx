import { pageMetadata } from '@/lib/seo'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  return pageMetadata(locale, 'prospective-students', {
    ja: { title: '研究室を希望する学生の方へ', description: '東京科学大学 菅野・鈴木・松井研究室で全固体電池・固体イオニクスを研究したい大学院生へ。研究環境、教育方針、研究室見学、よくある質問。' },
    en: { title: 'For prospective students', description: 'For students who want to research all-solid-state batteries and solid-state ionics in the Kanno–Suzuki–Matsui Lab, Institute of Science Tokyo: environment, supervision, lab visits and FAQ.' }
  })
}

export default function ProspectiveStudentsLayout({ children }: { children: React.ReactNode }) {
  return children
}
