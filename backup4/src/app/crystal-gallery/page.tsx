'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import SimpleNavigation from '@/components/SimpleNavigation'
import CrystalGallery from '@/components/CrystalGallery'
import CIFUploader from '@/components/CIFUploader'
import { crystalStructures, CrystalData } from '@/lib/crystalData'

export default function CrystalGalleryPage() {
  const [crystals, setCrystals] = useState<CrystalData[]>(crystalStructures)
  const [showUploader, setShowUploader] = useState(false)

  const handleCIFLoad = (newCrystal: CrystalData) => {
    setCrystals(prev => [newCrystal, ...prev])
    setShowUploader(false)
  }

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
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                CRYSTAL STRUCTURE GALLERY
              </span>
            </h1>
            <p className="text-xl text-gray-300 font-light mb-8">
              様々な電池材料の結晶構造のインタラクティブな3D可視化
            </p>
            <p className="text-sm text-gray-400">
              CIFファイルはP1構造としてアップロードしてください
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex justify-center mb-8"
          >
            <button
              onClick={() => setShowUploader(!showUploader)}
              className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25"
            >
              {showUploader ? 'アップローダーを隠す' : 'CIFファイルをアップロード'}
            </button>
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
            {showUploader && (
              <div className="mb-12">
                <CIFUploader onCIFLoad={handleCIFLoad} />
              </div>
            )}
            
            <CrystalGallery crystals={crystals} />
          </motion.div>

          {/* Information Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-16 bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 border border-gray-800"
          >
            <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              結晶構造ビューアについて
            </h2>
            <div className="grid md:grid-cols-2 gap-6 text-gray-300">
              <div>
                <h3 className="text-lg font-semibold text-cyan-400 mb-3">操作方法</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2">▸</span>
                    左クリック＆ドラッグ：モデルを回転
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2">▸</span>
                    右クリック＆ドラッグ：カメラを移動
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2">▸</span>
                    スクロール：ズームイン・アウト
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2">▸</span>
                    CIFファイルをアップロードして独自の構造を追加
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-purple-400 mb-3">技術仕様</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">▸</span>
                    Three.js + React Three Fiberによる3Dレンダリング
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">▸</span>
                    WebGLベースのGPUアクセラレーション
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">▸</span>
                    CIFパーサーによる結晶構造データの自動解析
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">▸</span>
                    FBXローダーによる3Dモデルのインポート機能
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mt-8 text-center"
          >
            <p className="text-sm text-gray-500">
              Built with Next.js, Three.js, React Three Fiber
            </p>
          </motion.div>
        </div>
      </section>

      {/* Back to Home Button */}
      <div className="fixed bottom-8 right-8">
        <Link href="/" className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-lg shadow-lg hover:shadow-cyan-500/25 transition-all duration-300">
          ホームに戻る
        </Link>
      </div>
    </div>
  )
}