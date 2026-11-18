import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: { absolute: 'アプリ | 松井直喜' },
  description: 'インピーダンス解析、XRDの格子定数計算、充放電曲線、三元系プロット、XRDクラスタリングのWebアプリと解説動画。'
}

export default function ToolsLayout({ children }: { children: React.ReactNode }) {
  return children
}
