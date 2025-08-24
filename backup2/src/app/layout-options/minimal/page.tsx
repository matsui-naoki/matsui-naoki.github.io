'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export default function MinimalLayout() {
  return (
    <div className="min-h-screen bg-white">
      {/* Ultra Minimal Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-light text-black">松井直喜</div>
            <div className="flex space-x-8 text-sm">
              <a href="#" className="text-gray-600 hover:text-black transition-colors">研究</a>
              <a href="#" className="text-gray-600 hover:text-black transition-colors">論文</a>
              <a href="#" className="text-gray-600 hover:text-black transition-colors">連絡</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero - Full Width Centered */}
      <section className="pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl font-light mb-8 text-black leading-tight"
          >
            次世代電池材料の<br/>
            <span className="font-normal">革新的研究</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 mb-12 font-light leading-relaxed"
          >
            東京科学大学でフッ化物イオン伝導体と<br/>
            機械学習を用いた材料設計に取り組んでいます
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="w-full max-w-3xl mx-auto"
          >
            <Image
              src="/solid-state-battery.jpg"
              alt="全固体電池"
              width={800}
              height={500}
              className="w-full rounded-sm shadow-2xl"
            />
          </motion.div>
        </div>
      </section>

      {/* Content Grid - Minimal */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-light mb-8 text-black">研究領域</h2>
              <div className="space-y-6">
                <div className="border-l-2 border-black pl-6">
                  <h3 className="text-xl font-medium mb-2">フッ化物イオン伝導体</h3>
                  <p className="text-gray-600 font-light">全固体電池における革新的材料開発</p>
                </div>
                <div className="border-l-2 border-gray-300 pl-6">
                  <h3 className="text-xl font-medium mb-2">機械学習材料設計</h3>
                  <p className="text-gray-600 font-light">AIを活用した高速材料探索</p>
                </div>
                <div className="border-l-2 border-gray-300 pl-6">
                  <h3 className="text-xl font-medium mb-2">ハイスループット計算</h3>
                  <p className="text-gray-600 font-light">効率的な材料スクリーニング</p>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-light mb-8 text-black">最近の成果</h2>
              <div className="space-y-8">
                <div>
                  <div className="text-sm text-gray-500 mb-2">2025.01</div>
                  <h3 className="text-lg font-medium mb-3">Nature Materials誌掲載</h3>
                  <p className="text-gray-600 font-light text-sm leading-relaxed">
                    新規フッ化物イオン伝導体の開発成果が国際的に評価されました
                  </p>
                </div>
                <div>
                  <div className="text-sm text-gray-500 mb-2">2024.12</div>
                  <h3 className="text-lg font-medium mb-3">国際会議発表</h3>
                  <p className="text-gray-600 font-light text-sm leading-relaxed">
                    機械学習による材料設計手法について発表し注目を集めました
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-8 text-center">
          <div className="text-sm text-gray-500 mb-4">東京科学大学 全固体電池研究センター</div>
          <div className="text-sm text-gray-400">matsui.n.ee49[at]m.isct.ac.jp</div>
        </div>
      </footer>
      
      <div className="fixed bottom-8 right-8">
        <Link href="/" className="bg-black text-white px-4 py-2 rounded text-sm hover:bg-gray-800 transition-colors">
          メインに戻る
        </Link>
      </div>
    </div>
  )
}