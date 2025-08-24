'use client'

import Link from 'next/link'

export default function SimpleNavigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              MATSUI LAB
            </Link>
            <div className="hidden md:flex space-x-1 text-sm">
              <Link href="/#home" className="text-gray-300 hover:text-cyan-400 transition-colors px-1.5 py-1 rounded border border-transparent hover:border-cyan-400/30">
                ホーム
              </Link>
              <Link href="/#research" className="text-gray-300 hover:text-cyan-400 transition-colors px-1.5 py-1 rounded border border-transparent hover:border-cyan-400/30">
                研究概要
              </Link>
              <Link href="/#profile" className="text-gray-300 hover:text-cyan-400 transition-colors px-1.5 py-1 rounded border border-transparent hover:border-cyan-400/30">
                プロフィール
              </Link>
              <Link href="/#news" className="text-gray-300 hover:text-cyan-400 transition-colors px-1.5 py-1 rounded border border-transparent hover:border-cyan-400/30">
                ニュース
              </Link>
              <Link href="/publications" className="text-gray-300 hover:text-cyan-400 transition-colors px-1.5 py-1 rounded border border-transparent hover:border-cyan-400/30">
                研究業績
              </Link>
              <Link href="/research-details" className="text-gray-300 hover:text-cyan-400 transition-colors px-1.5 py-1 rounded border border-transparent hover:border-cyan-400/30">
                研究詳細
              </Link>
              <Link href="/learning" className="text-gray-300 hover:text-cyan-400 transition-colors px-1.5 py-1 rounded border border-transparent hover:border-cyan-400/30">
                学習
              </Link>
              <Link href="/access" className="text-gray-300 hover:text-cyan-400 transition-colors px-1.5 py-1 rounded border border-transparent hover:border-cyan-400/30">
                アクセス
              </Link>
              <Link href="/prospective-students" className="text-gray-300 hover:text-cyan-400 transition-colors px-1.5 py-1 rounded border border-transparent hover:border-cyan-400/30">
                研究室希望者へ
              </Link>
              <Link href="/crystal-gallery" className="text-gray-300 hover:text-cyan-400 transition-colors px-1.5 py-1 rounded border border-transparent hover:border-cyan-400/30">
                結晶構造
              </Link>
              <Link href="/links" className="text-gray-300 hover:text-cyan-400 transition-colors px-1.5 py-1 rounded border border-transparent hover:border-cyan-400/30">
                リンク
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}