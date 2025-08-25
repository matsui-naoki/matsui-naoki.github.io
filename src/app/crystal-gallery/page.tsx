'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import SimpleNavigation from '@/components/SimpleNavigation'

export default function CrystalGalleryPage() {
  const categories = [
    {
      id: 'lithium',
      title: 'リチウムイオン伝導体',
      subtitle: 'Lithium Ion Conductors',
      description: 'リチウムイオン電池の電解質および正極・負極材料',
      count: 14,
      gradient: 'from-blue-500 to-cyan-400',
      icon: ''
    },
    {
      id: 'fluoride',
      title: 'フッ化物イオン伝導体',
      subtitle: 'Fluoride Ion Conductors',
      description: 'フッ化物イオンを伝導する新規電池材料',
      count: 8,
      gradient: 'from-green-500 to-emerald-400',
      icon: ''
    },
    {
      id: 'hydride',
      title: 'ヒドリドイオン伝導体',
      subtitle: 'Hydride Ion Conductors',
      description: 'ヒドリドイオンを伝導する革新的材料',
      count: 4,
      gradient: 'from-purple-500 to-pink-400',
      icon: ''
    },
    {
      id: 'others',
      title: 'その他',
      subtitle: 'Others',
      description: 'その他のイオン伝導体および関連材料',
      count: 8,
      gradient: 'from-orange-500 to-red-400',
      icon: ''
    }
  ]

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
            <p className="text-xl text-gray-300 font-light">
              様々な電池材料の結晶構造のインタラクティブな3D可視化
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Cards */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <Link href={`/crystal-gallery/${category.id}`}>
                  <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 border border-gray-800 hover:border-gray-600 transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl cursor-pointer h-full">
                    <div className="flex flex-col h-full">
                      <div className="text-4xl mb-4">{category.icon}</div>
                      <h3 className={`text-xl font-bold mb-2 bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent`}>
                        {category.title}
                      </h3>
                      <p className="text-sm text-gray-400 mb-3">{category.subtitle}</p>
                      <p className="text-gray-300 text-sm mb-4 flex-grow">{category.description}</p>
                      <div className="flex justify-between items-center mt-auto">
                        <span className="text-xs text-gray-500">{category.count} 構造</span>
                        <div className="text-gray-400 group-hover:text-white transition-colors">
                          →
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

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