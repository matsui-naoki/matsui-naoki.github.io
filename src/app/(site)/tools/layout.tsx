import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: { absolute: 'ツール | 松井直喜' },
  description: '分子量、比容量、Cレートなど、電池研究でよく使う計算をブラウザ上で行えるツール。'
}

export default function ToolsLayout({ children }: { children: React.ReactNode }) {
  return children
}
