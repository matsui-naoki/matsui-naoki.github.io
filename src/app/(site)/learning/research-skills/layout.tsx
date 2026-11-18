import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: { absolute: '研究の進め方と可視化 | 松井直喜' },
  description: '研究活動の進め方、論文ゼミ、スライド作成、Blenderによる研究の可視化の教材。',
  alternates: { canonical: '/learning/research-skills' }
}

export default function LearningResearchSkillsLayout({ children }: { children: React.ReactNode }) {
  return children
}
