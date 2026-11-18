import { pageMetadata } from '@/lib/seo'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  return pageMetadata(locale, 'access', {
    ja: { title: 'アクセス', description: '東京科学大学 すずかけ台キャンパス G1棟(神奈川県横浜市緑区長津田町4259)への行き方と連絡先。' },
    en: { title: 'Access', description: 'How to reach Building G1, Suzukakedai Campus, Institute of Science Tokyo (4259 Nagatsuta-cho, Midori-ku, Yokohama), and how to contact us.' }
  })
}

export default function AccessLayout({ children }: { children: React.ReactNode }) {
  return children
}
