import { pageMetadata } from '@/lib/seo'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  return pageMetadata(locale, 'profile-detail', {
    ja: { title: 'プロフィール・経歴', description: '松井直喜(東京科学大学 准教授)の学歴、職歴、受賞、研究費、インタビュー記事。' },
    en: { title: 'Profile and CV', description: 'Education, career, awards, grants and interviews of Naoki Matsui, Associate Professor at Institute of Science Tokyo.' }
  })
}

export default function ProfileDetailLayout({ children }: { children: React.ReactNode }) {
  return children
}
