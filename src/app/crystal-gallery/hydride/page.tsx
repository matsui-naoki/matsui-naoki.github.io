'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import SimpleNavigation from '@/components/SimpleNavigation'
import FBXCrystalGallery from '@/components/FBXCrystalGallery'
import { hydrideCrystals } from '@/lib/crystalFbxData'

export default function HydridePage() {
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
              <span className="bg-gradient-to-r from-purple-500 to-pink-400 bg-clip-text text-transparent">
                ヒドリドイオン伝導体
              </span>
            </h1>
            <p className="text-xl text-gray-300 font-light mb-4">
              Hydride Ion Conductors
            </p>
            <p className="text-gray-400 max-w-3xl mx-auto">
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
            className="mt-16 bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 border border-gray-800"
          >
            <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              ヒドリドイオン電池の科学
            </h2>
            <div className="grid md:grid-cols-2 gap-6 text-gray-300">
              <div>
                <h3 className="text-lg font-semibold text-pink-400 mb-3">結晶構造</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="text-pink-400 mr-2">▸</span>
                    複合カチオン系：Ba-Ca-Na-H - 室温伝導
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-400 mr-2">▸</span>
                    ペロブスカイト型：SrLiH3 - 高温伝導
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-400 mr-2">▸</span>
                    酸水素化物：La-Sr-Li-H-O系 - 複合アニオン
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-purple-400 mb-3">研究意義</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">▸</span>
                    新電池化学 - H⁻イオンの特異な性質
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">▸</span>
                    低温合成 - 従来材料より低い反応温度
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">▸</span>
                    水素貯蔵 - エネルギー貯蔵への応用
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">▸</span>
                    基礎科学 - イオン伝導機構の解明
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-6 p-4 bg-purple-900/30 rounded-lg border border-purple-800/50">
              <h4 className="font-semibold text-purple-300 mb-2">最新の研究動向</h4>
              <p className="text-sm text-gray-300">
                ヒドリドイオン伝導体は比較的新しい研究分野です。最近では上記以外にもLaHxで室温でのイオン伝導が相次いで報告されています。複合カチオン系材料では、Ba0.5Ca0.35Na0.15H1.85が室温で10⁻⁵ S/cm程度の伝導率を示し、新しい電池系の実現可能性を示しています。
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Back to Gallery Button */}
      <div className="fixed bottom-8 right-8">
        <Link href="/crystal-gallery" className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-4 py-2 rounded-lg shadow-lg hover:shadow-purple-500/25 transition-all duration-300">
          ギャラリーに戻る
        </Link>
      </div>
    </div>
  )
}