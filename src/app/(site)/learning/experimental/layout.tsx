import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: { absolute: '実験手法：構造解析と電気化学測定 | 松井直喜' },
  description: 'X線・中性子回折による構造解析と、インピーダンス測定などの電気化学測定の教材。',
  alternates: { canonical: '/learning/experimental' }
}

export default function LearningExperimentalLayout({ children }: { children: React.ReactNode }) {
  return children
}
