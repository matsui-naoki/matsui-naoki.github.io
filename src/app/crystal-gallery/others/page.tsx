'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import SimpleNavigation from '@/components/SimpleNavigation'
import FBXCrystalGallery from '@/components/FBXCrystalGallery'
import { otherCrystals } from '@/lib/crystalFbxData'

export default function OthersPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <SimpleNavigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-black mb-6">
              <span className="bg-gradient-to-r from-orange-500 to-red-400 bg-clip-text text-transparent">
                その他のイオン伝導体
              </span>
            </h1>
            <p className="text-xl text-gray-300 font-light mb-4">
              Other Ion Conductors
            </p>
            <p className="text-gray-400 max-w-3xl mx-auto">
              銀イオン、ナトリウムイオン、カリウムイオンなどの様々なイオン種を伝導する材料群。
              イオン伝導の基礎研究や特殊用途に用いられる重要な材料です。
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <FBXCrystalGallery crystals={otherCrystals} />
          </motion.div>

          {/* Material Categories */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-16 bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 border border-gray-800"
          >
            <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
              多様なイオン伝導材料
            </h2>
            <div className="grid md:grid-cols-2 gap-6 text-gray-300">
              <div>
                <h3 className="text-lg font-semibold text-red-400 mb-3">金属イオン伝導体</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="text-red-400 mr-2">▸</span>
                    銀イオン：α-AgI, β-AgI - 古典的超イオン伝導体
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-400 mr-2">▸</span>
                    ナトリウム：β-Al2O3 - 2次元層状伝導
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-400 mr-2">▸</span>
                    カリウム：ホランダイト型 - 1次元トンネル
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-400 mr-2">▸</span>
                    混合系：Rb4Cu16I7Cl13 - 複合ハライド
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-orange-400 mb-3">構造材料・その他</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="text-orange-400 mr-2">▸</span>
                    グラファイト - リチウム電池負極材料
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-400 mr-2">▸</span>
                    ReO3 - 基本構造単位、導電性酸化物
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-400 mr-2">▸</span>
                    構造研究 - 結晶学的基礎データ
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-400 mr-2">▸</span>
                    材料設計 - 新材料開発の指針
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-6 space-y-4">
              <div className="p-4 bg-red-900/30 rounded-lg border border-red-800/50">
                <h4 className="font-semibold text-red-300 mb-2">超イオン伝導現象</h4>
                <p className="text-sm text-gray-300">
                  β-AgIは147°C以上で液体に匹敵する高いイオン伝導率（1 S/cm以上）を示し、
                  「超イオン伝導体」と呼ばれます。この現象は固体中でのイオンの液体的な運動に起因し、
                  イオン伝導機構の理解に重要な知見を提供しています。
                </p>
              </div>

              <div className="p-4 bg-orange-900/30 rounded-lg border border-orange-800/50">
                <h4 className="font-semibold text-orange-300 mb-2">構造の多様性</h4>
                <p className="text-sm text-gray-300">
                  β-アルミナの2次元層状構造、ホランダイト型の1次元トンネル構造、
                  Rb4Cu16I7Cl13の複雑な3次元ネットワーク構造など、
                  様々な結晶構造がイオン伝導を実現しており、構造とイオン伝導性の関係解明に貢献しています。
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Back to Gallery Button */}
      <div className="fixed bottom-8 right-8">
        <Link href="/crystal-gallery" className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-4 py-2 rounded-lg shadow-lg hover:shadow-orange-500/25 transition-all duration-300">
          ギャラリーに戻る
        </Link>
      </div>
    </div>
  )
}