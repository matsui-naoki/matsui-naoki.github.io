'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import SimpleNavigation from '@/components/SimpleNavigation'
import FBXCrystalGallery from '@/components/FBXCrystalGallery'
import { lithiumCrystals } from '@/lib/crystalFbxData'

export default function LithiumPage() {
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
              <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                リチウムイオン伝導体
              </span>
            </h1>
            <p className="text-xl text-gray-300 font-light mb-4">
              Lithium Ion Conductors
            </p>
            <p className="text-gray-400 max-w-3xl mx-auto">
              リチウムイオン電池の電解質材料および正極・負極材料の結晶構造。
              高いイオン伝導性と電気化学的安定性を実現する材料群です。
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
            <FBXCrystalGallery crystals={lithiumCrystals} />
          </motion.div>

          {/* Material Categories */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-16 bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 border border-gray-800"
          >
            <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">
              材料分類
            </h2>
            <div className="grid md:grid-cols-3 gap-6 text-gray-300">
              <div>
                <h3 className="text-lg font-semibold text-cyan-400 mb-3">固体電解質</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2">▸</span>
                    硫化物系：Li10GeP2S12, Li7P3S11, Li6PS5Cl
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2">▸</span>
                    酸化物系：Li7La3Zr2O12, Li0.33La0.56TiO3
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2">▸</span>
                    ハライド系：Li3YCl6, Li2FeCl4
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-purple-400 mb-3">正極材料</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">▸</span>
                    層状酸化物：LiCoO2
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">▸</span>
                    オリビン型：LiFePO4
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">▸</span>
                    高容量系：Li2MnO3
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-green-400 mb-3">負極材料</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">▸</span>
                    スピネル型：Li4Ti5O12
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">▸</span>
                    NASICON型：Na3Zr2Si2PO12
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Back to Gallery Button */}
      <div className="fixed bottom-8 right-8">
        <Link href="/crystal-gallery" className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-4 py-2 rounded-lg shadow-lg hover:shadow-cyan-500/25 transition-all duration-300">
          ギャラリーに戻る
        </Link>
      </div>
    </div>
  )
}