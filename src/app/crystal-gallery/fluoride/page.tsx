'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import SimpleNavigation from '@/components/SimpleNavigation'
import FBXCrystalGallery from '@/components/FBXCrystalGallery'
import { fluorideCrystals } from '@/lib/crystalFbxData'

export default function FluoridePage() {
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
              <span className="bg-gradient-to-r from-green-500 to-emerald-400 bg-clip-text text-transparent">
                フッ化物イオン伝導体
              </span>
            </h1>
            <p className="text-xl text-gray-300 font-light mb-4">
              Fluoride Ion Conductors
            </p>
            <p className="text-gray-400 max-w-3xl mx-auto">
              フッ化物イオン（F⁻）を伝導する新しいタイプの電池材料。
              従来のリチウムイオン電池を上回るエネルギー密度の実現が期待されています。
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
            <FBXCrystalGallery crystals={fluorideCrystals} />
          </motion.div>

          {/* Material Features */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-16 bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 border border-gray-800"
          >
            <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
              フッ化物イオン電池の特徴
            </h2>
            <div className="grid md:grid-cols-2 gap-6 text-gray-300">
              <div>
                <h3 className="text-lg font-semibold text-emerald-400 mb-3">構造的特徴</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="text-emerald-400 mr-2">▸</span>
                    タイソナイト型：LaF3 - 高温でのF⁻伝導
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-400 mr-2">▸</span>
                    逆ペロブスカイト：BaLiF3 - 新規伝導体
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-400 mr-2">▸</span>
                    層状構造：KSn2F5 - 2次元伝導
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-400 mr-2">▸</span>
                    固溶体：Ba0.6La0.4F2.4 - 室温伝導
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-green-400 mb-3">材料的利点</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">▸</span>
                    高エネルギー密度 - 理論的にLi-ionを上回る
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">▸</span>
                    広い動作温度範囲 - 室温から高温まで
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">▸</span>
                    豊富な材料資源 - フッ素は地殻中に豊富
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">▸</span>
                    新規電池系 - 未開拓の研究分野
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Back to Gallery Button */}
      <div className="fixed bottom-8 right-8">
        <Link href="/crystal-gallery" className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-lg shadow-lg hover:shadow-emerald-500/25 transition-all duration-300">
          ギャラリーに戻る
        </Link>
      </div>
    </div>
  )
}