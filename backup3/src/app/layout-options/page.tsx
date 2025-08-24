'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

export default function LayoutOptions() {
  const layouts = [
    {
      id: 'minimal',
      title: 'ミニマルクリーンデザイン',
      description: '無駄を削ぎ落とした洗練されたデザイン。タイポグラフィーに重点を置き、コンテンツを際立たせます。',
      features: ['極限まで簡素化されたナビゲーション', '大胆なタイポグラフィー', '十分な余白', '黒白グレーの配色'],
      style: 'モダンミニマリスト',
      href: '/layout-options/minimal',
      preview: 'bg-white border-4 border-black',
      textColor: 'text-black'
    },
    {
      id: 'university',
      title: 'モダン大学スタイル',
      description: '伝統的な大学サイトをモダンにアップデートしたデザイン。権威性と親しみやすさを両立します。',
      features: ['ヘッダーバナー', '構造化された情報配置', 'サイドバーとニュース', 'アカデミックカラー'],
      style: 'アカデミック × モダン',
      href: '/layout-options/university',
      preview: 'bg-gradient-to-r from-blue-700 to-blue-900',
      textColor: 'text-white'
    },
    {
      id: 'tech',
      title: 'テック系研究室スタイル',
      description: '最先端技術を扱う研究室らしい未来的でクールなデザイン。技術力の高さを視覚的に表現します。',
      features: ['ダークテーマ', 'グラデーションとネオン', 'SF的UI要素', 'インタラクティブな演出'],
      style: 'フューチャリスティック',
      href: '/layout-options/tech',
      preview: 'bg-black border border-cyan-400',
      textColor: 'text-cyan-400'
    },
    {
      id: 'traditional',
      title: 'トラディショナル学術スタイル',
      description: '格式ある学術機関にふさわしい正統派デザイン。信頼性と専門性を重視したクラシックなレイアウト。',
      features: ['セリフフォント', '正統的なレイアウト', 'フォーマルな配色', '詳細な情報構造'],
      style: 'クラシック アカデミック',
      href: '/layout-options/traditional',
      preview: 'bg-blue-900',
      textColor: 'text-white'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            デザインレイアウト オプション
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            4つの異なるスタイルをご提案いたします。それぞれのデザインをプレビューして、
            お気に入りのスタイルをお選びください。
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {layouts.map((layout, index) => (
            <motion.div
              key={layout.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Preview */}
              <div className={`h-48 ${layout.preview} flex items-center justify-center relative`}>
                <div className={`text-center ${layout.textColor}`}>
                  <div className="text-2xl font-bold mb-2">松井直喜 研究室</div>
                  <div className="text-sm opacity-80">次世代電池材料研究</div>
                </div>
                <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium ${
                  layout.id === 'minimal' ? 'bg-black text-white' :
                  layout.id === 'university' ? 'bg-white text-blue-900' :
                  layout.id === 'tech' ? 'bg-cyan-400 text-black' :
                  'bg-white text-blue-900'
                }`}>
                  {layout.style}
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">{layout.title}</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">{layout.description}</p>
                
                <div className="mb-6">
                  <h3 className="font-semibold text-gray-800 mb-3">主な特徴:</h3>
                  <ul className="space-y-2">
                    {layout.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    href={layout.href}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 text-center"
                  >
                    プレビューを見る
                  </Link>
                  <button className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-colors">
                    このスタイルに決定
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-20 bg-white rounded-2xl shadow-xl p-8"
        >
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">スタイル比較表</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-4 px-4 font-semibold text-gray-800">特徴</th>
                  <th className="text-center py-4 px-4 font-semibold text-gray-800">ミニマル</th>
                  <th className="text-center py-4 px-4 font-semibold text-gray-800">大学</th>
                  <th className="text-center py-4 px-4 font-semibold text-gray-800">テック</th>
                  <th className="text-center py-4 px-4 font-semibold text-gray-800">伝統的</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['モダン度', '★★★★★', '★★★★☆', '★★★★★', '★★☆☆☆'],
                  ['権威性', '★★★☆☆', '★★★★☆', '★★★☆☆', '★★★★★'],
                  ['読みやすさ', '★★★★★', '★★★★☆', '★★★☆☆', '★★★★★'],
                  ['インパクト', '★★★☆☆', '★★★☆☆', '★★★★★', '★★☆☆☆'],
                  ['親しみやすさ', '★★★★☆', '★★★★★', '★★☆☆☆', '★★★★☆']
                ].map((row, idx) => (
                  <tr key={idx} className="border-b border-gray-100">
                    <td className="py-3 px-4 font-medium text-gray-800">{row[0]}</td>
                    <td className="py-3 px-4 text-center text-sm">{row[1]}</td>
                    <td className="py-3 px-4 text-center text-sm">{row[2]}</td>
                    <td className="py-3 px-4 text-center text-sm">{row[3]}</td>
                    <td className="py-3 px-4 text-center text-sm">{row[4]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        <div className="text-center mt-12">
          <Link 
            href="/"
            className="bg-gray-800 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-700 transition-colors"
          >
            メインページに戻る
          </Link>
        </div>
      </div>
    </div>
  )
}