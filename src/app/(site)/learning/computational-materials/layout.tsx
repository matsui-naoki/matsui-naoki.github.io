import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: { absolute: '電池材料の計算材料科学 | 松井直喜' },
  description: 'VASPによる第一原理計算、分子動力学、スーパーコンピュータTSUBAMEの使い方の教材。',
  alternates: { canonical: '/learning/computational-materials' }
}

export default function LearningComputationalMaterialsLayout({ children }: { children: React.ReactNode }) {
  return children
}
