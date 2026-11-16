'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import SimpleNavigation from '@/components/SimpleNavigation'
import FBXCrystalGallery from '@/components/FBXCrystalGallery'
import { hydrideCrystals } from '@/lib/crystalFbxData'

export default function HydridePage() {
  return (
    <div className="min-h-screen bg-[#131a2c] text-[#ece7dc]">
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
              <span className="text-[#ece7dc]">
                ヒドリドイオン伝導体
              </span>
            </h1>
            <p className="text-xl text-[#b4b6c0] font-light mb-4">
              Hydride Ion Conductors
            </p>
            <p className="text-[#9a9eae] max-w-3xl mx-auto">
              ヒドリドイオン（H⁻）を伝導する革新的な電池材料。
              新しい電池化学の可能性を秘めた最先端の研究分野です。
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
            <FBXCrystalGallery crystals={hydrideCrystals} />
          </motion.div>

          {/* Material Science */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-16 bg-[#1a2236] rounded p-8 border border-[#2a3550]"
          >
            <h2 className="text-2xl font-bold mb-6 text-[#ece7dc]">
              ヒドリドイオン電池の科学
            </h2>
            <div className="grid md:grid-cols-2 gap-6 text-[#b4b6c0]">
              <div>
                <h3 className="text-lg font-semibold text-[#d4ad5a] mb-3">結晶構造</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="text-[#d4ad5a] mr-2">▸</span>
                    複合カチオン系：Ba-Ca-Na-H - 室温伝導
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#d4ad5a] mr-2">▸</span>
                    ペロブスカイト型：SrLiH3 - 高温伝導
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#d4ad5a] mr-2">▸</span>
                    酸水素化物：La-Sr-Li-H-O系 - 複合アニオン
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#d4ad5a] mb-3">研究意義</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="text-[#d4ad5a] mr-2">▸</span>
                    新電池化学 - H⁻イオンの特異な性質
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#d4ad5a] mr-2">▸</span>
                    低温合成 - 従来材料より低い反応温度
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#d4ad5a] mr-2">▸</span>
                    水素貯蔵 - エネルギー貯蔵への応用
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#d4ad5a] mr-2">▸</span>
                    基礎科学 - イオン伝導機構の解明
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-6 p-4 bg-[#1a2236] rounded border border-[#2a3550]">
              <h4 className="font-semibold text-[#e7c97f] mb-2">最新の研究動向</h4>
              <p className="text-sm text-[#b4b6c0]">
                ヒドリドイオン伝導体は比較的新しい研究分野です。最近では上記以外にもLaHxで室温でのイオン伝導が相次いで報告されています。複合カチオン系材料では、Ba0.5Ca0.35Na0.15H1.85が室温で10⁻⁵ S/cm程度の伝導率を示し、新しい電池系の実現可能性を示しています。
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Back to Gallery Button */}
      <div className="fixed bottom-8 right-8">
        <Link href="/crystal-gallery" className="bg-[#ece7dc] text-[#131a2c] px-4 py-2 rounded shadow-lg transition-all duration-300">
          ギャラリーに戻る
        </Link>
      </div>
    </div>
  )
}