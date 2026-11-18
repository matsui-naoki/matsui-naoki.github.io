import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: { absolute: '学習リソース | 松井直喜' },
  description: '固体イオニクス、構造解析・電気化学測定、計算材料科学、マテリアルズ・インフォマティクス、研究の進め方を学ぶための教材。'
}

export default function LearningLayout({ children }: { children: React.ReactNode }) {
  return children
}
