import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: { absolute: '固体イオニクスの基礎 | 松井直喜' },
  description: '固体中のイオン伝導の基礎理論、フッ化物イオン伝導体、電池の性能評価を解説する教材。',
  alternates: { canonical: '/learning/solid-state-ionics' }
}

export default function LearningSolidStateIonicsLayout({ children }: { children: React.ReactNode }) {
  return children
}
