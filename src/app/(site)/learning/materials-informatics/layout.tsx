import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: { absolute: 'マテリアルズ・インフォマティクス | 松井直喜' },
  description: '物性予測、合成可能性予測、結晶構造生成、グラフニューラルネットワークの教材。',
  alternates: { canonical: '/learning/materials-informatics' }
}

export default function LearningMaterialsInformaticsLayout({ children }: { children: React.ReactNode }) {
  return children
}
