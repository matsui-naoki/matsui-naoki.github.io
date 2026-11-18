'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import SimpleNavigation from '@/components/SimpleNavigation'
import FBXCrystalGallery from '@/components/FBXCrystalGallery'
import { otherCrystals } from '@/lib/crystalFbxData'

export default function OthersPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-[#ffffff]">
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
              <span className="text-[#ffffff]">
                その他のイオン伝導体
              </span>
            </h1>
            <p className="text-xl text-[#cfcfcf] font-light mb-4">
              Other Ion Conductors
            </p>
            <p className="text-[#9a9a9a] max-w-3xl mx-auto">
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
            className="mt-16 bg-[#111111] rounded p-8 border border-[#262626]"
          >
            <h2 className="text-2xl font-bold mb-6 text-[#ffffff]">
              多様なイオン伝導材料
            </h2>
            <div className="grid md:grid-cols-2 gap-6 text-[#cfcfcf]">
              <div>
                <h3 className="text-lg font-semibold text-[#f08a8a] mb-3">金属イオン伝導体</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="text-[#f08a8a] mr-2">▸</span>
                    銀イオン：α-AgI, β-AgI - 古典的超イオン伝導体
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#f08a8a] mr-2">▸</span>
                    ナトリウム：β-Al2O3 - 2次元層状伝導
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#f08a8a] mr-2">▸</span>
                    カリウム：ホランダイト型 - 1次元トンネル
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#f08a8a] mr-2">▸</span>
                    混合系：Rb4Cu16I7Cl13 - 複合ハライド
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#e0c060] mb-3">構造材料・その他</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="text-[#e0c060] mr-2">▸</span>
                    グラファイト - リチウム電池負極材料
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#e0c060] mr-2">▸</span>
                    ReO3 - 基本構造単位、導電性酸化物
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#e0c060] mr-2">▸</span>
                    構造研究 - 結晶学的基礎データ
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#e0c060] mr-2">▸</span>
                    材料設計 - 新材料開発の指針
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-6 space-y-4">
              <div className="p-4 bg-red-900/30 rounded border border-red-800/50">
                <h4 className="font-semibold text-[#e3b0b0] mb-2">超イオン伝導現象</h4>
                <p className="text-sm text-[#cfcfcf]">
                  β-AgIは147°C以上で液体に匹敵する高いイオン伝導率（1 S/cm以上）を示し、
                  「超イオン伝導体」と呼ばれます。この現象は固体中でのイオンの液体的な運動に起因し、
                  イオン伝導機構の理解に重要な知見を提供しています。
                </p>
              </div>

              <div className="p-4 bg-[#111111] rounded border border-[#262626]">
                <h4 className="font-semibold text-[#e8cd6e] mb-2">構造の多様性</h4>
                <p className="text-sm text-[#cfcfcf]">
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
        <Link href="/crystal-gallery" className="bg-[#ffffff] text-[#050505] px-4 py-2 rounded shadow-lg transition-all duration-300">
          ギャラリーに戻る
        </Link>
      </div>
    </div>
  )
}