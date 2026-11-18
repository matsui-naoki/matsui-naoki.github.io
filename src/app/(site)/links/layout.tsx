import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: { absolute: 'リンク | 松井直喜' },
  description: '研究に役立つデータベース、ソフトウェア、関連研究機関へのリンク集。'
}

export default function LinksLayout({ children }: { children: React.ReactNode }) {
  return children
}
