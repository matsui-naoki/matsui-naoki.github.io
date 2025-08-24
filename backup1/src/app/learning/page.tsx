'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Learning() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <Link href="/layout-options/tech" className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                MATSUI LAB
              </Link>
              <div className="hidden md:flex space-x-6 text-sm">
                <Link href="/layout-options/tech#home" className="text-gray-300 hover:text-cyan-400 transition-colors px-3 py-1 rounded border border-transparent hover:border-cyan-400/30">
                  ホーム
                </Link>
                <Link href="/layout-options/tech#research" className="text-gray-300 hover:text-cyan-400 transition-colors px-3 py-1 rounded border border-transparent hover:border-cyan-400/30">
                  研究概要
                </Link>
                <Link href="/layout-options/tech#profile" className="text-gray-300 hover:text-cyan-400 transition-colors px-3 py-1 rounded border border-transparent hover:border-cyan-400/30">
                  プロフィール
                </Link>
                <Link href="/layout-options/tech#news" className="text-gray-300 hover:text-cyan-400 transition-colors px-3 py-1 rounded border border-transparent hover:border-cyan-400/30">
                  ニュース
                </Link>
                <Link href="/research-details" className="text-gray-300 hover:text-cyan-400 transition-colors px-3 py-1 rounded border border-transparent hover:border-cyan-400/30">
                  研究業績
                </Link>
                <Link href="/research-details" className="text-gray-300 hover:text-cyan-400 transition-colors px-3 py-1 rounded border border-transparent hover:border-cyan-400/30">
                  研究詳細
                </Link>
                <Link href="/learning" className="text-cyan-400 px-3 py-1 rounded border border-cyan-400/30">
                  学習
                </Link>
                <Link href="/access" className="text-gray-300 hover:text-cyan-400 transition-colors px-3 py-1 rounded border border-transparent hover:border-cyan-400/30">
                  アクセス
                </Link>
                <Link href="/links" className="text-gray-300 hover:text-cyan-400 transition-colors px-3 py-1 rounded border border-transparent hover:border-cyan-400/30">
                  リンク
                </Link>
              </div>
            </div>
            <div className="text-xs text-gray-500 font-mono">v2025.1</div>
          </div>
        </div>
      </nav>

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
                LEARNING RESOURCES
              </span>
            </h1>
            <p className="text-xl text-gray-300 font-light">学習リソースと教育コンテンツ</p>
          </motion.div>
        </div>
      </section>

      {/* Learning Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Solid State Ionics Fundamentals */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-6 border border-gray-800 hover:border-cyan-400/30 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="mb-6">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center text-3xl mb-4">
                  ⚛️
                </div>
                <span className="px-3 py-1 text-xs font-mono bg-cyan-400/10 text-cyan-400 rounded-full border border-cyan-400/20">
                  FUNDAMENTALS
                </span>
              </div>
              
              <h3 className="text-2xl font-black mb-4">
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  固体イオニクス基礎
                </span>
              </h3>
              
              <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                固体中のイオン伝導現象の基本原理から、結晶欠陥、拡散機構、電気伝導理論まで体系的に学習できます。
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3 p-3 bg-gray-800/30 rounded-lg border border-gray-700/30">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="text-sm">イオン伝導の基礎理論</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-gray-800/30 rounded-lg border border-gray-700/30">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-sm">結晶欠陥と点欠陥化学</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-gray-800/30 rounded-lg border border-gray-700/30">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span className="text-sm">拡散方程式とNernst-Einstein関係</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-gray-800/30 rounded-lg border border-gray-700/30">
                  <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                  <span className="text-sm">インピーダンス分光法の実践</span>
                </div>
              </div>
            </motion.div>

            {/* Computational Materials Science */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-6 border border-gray-800 hover:border-blue-400/30 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="mb-6">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-3xl mb-4">
                  🖥️
                </div>
                <span className="px-3 py-1 text-xs font-mono bg-blue-400/10 text-blue-400 rounded-full border border-blue-400/20">
                  COMPUTATIONAL
                </span>
              </div>
              
              <h3 className="text-2xl font-black mb-4">
                <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                  計算材料科学
                </span>
              </h3>
              
              <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                第一原理計算から分子動力学シミュレーションまで、計算科学手法を用いた材料研究の手法を習得できます。
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3 p-3 bg-gray-800/30 rounded-lg border border-gray-700/30">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-sm">密度汎関数理論（DFT）入門</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-gray-800/30 rounded-lg border border-gray-700/30">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span className="text-sm">VASP/Quantum ESPRESSOの使用法</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-gray-800/30 rounded-lg border border-gray-700/30">
                  <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                  <span className="text-sm">分子動力学シミュレーション</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-gray-800/30 rounded-lg border border-gray-700/30">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="text-sm">クラスター計算環境の活用</span>
                </div>
              </div>
            </motion.div>

            {/* Machine Learning for Materials */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-6 border border-gray-800 hover:border-purple-400/30 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="mb-6">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-3xl mb-4">
                  🤖
                </div>
                <span className="px-3 py-1 text-xs font-mono bg-purple-400/10 text-purple-400 rounded-full border border-purple-400/20">
                  MACHINE LEARNING
                </span>
              </div>
              
              <h3 className="text-2xl font-black mb-4">
                <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                  材料機械学習
                </span>
              </h3>
              
              <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                機械学習手法を材料研究に応用するための理論と実践を学び、効率的な材料探索手法を身に付けます。
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3 p-3 bg-gray-800/30 rounded-lg border border-gray-700/30">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span className="text-sm">材料記述子の設計と選択</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-gray-800/30 rounded-lg border border-gray-700/30">
                  <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                  <span className="text-sm">回帰・分類モデルの構築</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-gray-800/30 rounded-lg border border-gray-700/30">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="text-sm">ベイズ最適化による材料探索</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-gray-800/30 rounded-lg border border-gray-700/30">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-sm">scikit-learn/PyTorchの実践</span>
                </div>
              </div>
            </motion.div>

            {/* Experimental Techniques */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-6 border border-gray-800 hover:border-cyan-400/30 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="mb-6">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-green-400 to-cyan-500 flex items-center justify-center text-3xl mb-4">
                  🔬
                </div>
                <span className="px-3 py-1 text-xs font-mono bg-green-400/10 text-green-400 rounded-full border border-green-400/20">
                  EXPERIMENTAL
                </span>
              </div>
              
              <h3 className="text-2xl font-black mb-4">
                <span className="bg-gradient-to-r from-green-400 to-cyan-500 bg-clip-text text-transparent">
                  実験技術習得
                </span>
              </h3>
              
              <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                固体電解質材料の合成から特性評価まで、実験研究に必要な基本技術を系統的に学習できます。
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3 p-3 bg-gray-800/30 rounded-lg border border-gray-700/30">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-sm">固相反応による材料合成</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-gray-800/30 rounded-lg border border-gray-700/30">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="text-sm">X線回折測定と構造解析</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-gray-800/30 rounded-lg border border-gray-700/30">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-sm">電気化学測定の基礎と応用</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-gray-800/30 rounded-lg border border-gray-700/30">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span className="text-sm">熱分析・形態観察技術</span>
                </div>
              </div>
            </motion.div>

            {/* Battery Technology */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-6 border border-gray-800 hover:border-yellow-400/30 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="mb-6">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-yellow-400 to-orange-500 flex items-center justify-center text-3xl mb-4">
                  🔋
                </div>
                <span className="px-3 py-1 text-xs font-mono bg-yellow-400/10 text-yellow-400 rounded-full border border-yellow-400/20">
                  BATTERY TECH
                </span>
              </div>
              
              <h3 className="text-2xl font-black mb-4">
                <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                  電池技術応用
                </span>
              </h3>
              
              <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                全固体電池の構成要素から動作原理、性能評価まで、次世代電池技術の全貌を理解できます。
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3 p-3 bg-gray-800/30 rounded-lg border border-gray-700/30">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span className="text-sm">全固体電池の設計原理</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-gray-800/30 rounded-lg border border-gray-700/30">
                  <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                  <span className="text-sm">固体電解質界面の課題と解決法</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-gray-800/30 rounded-lg border border-gray-700/30">
                  <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                  <span className="text-sm">セル作製と性能評価技術</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-gray-800/30 rounded-lg border border-gray-700/30">
                  <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                  <span className="text-sm">劣化機構解析手法</span>
                </div>
              </div>
            </motion.div>

            {/* Research Skills */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-6 border border-gray-800 hover:border-indigo-400/30 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="mb-6">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-indigo-400 to-purple-600 flex items-center justify-center text-3xl mb-4">
                  📚
                </div>
                <span className="px-3 py-1 text-xs font-mono bg-indigo-400/10 text-indigo-400 rounded-full border border-indigo-400/20">
                  RESEARCH SKILLS
                </span>
              </div>
              
              <h3 className="text-2xl font-black mb-4">
                <span className="bg-gradient-to-r from-indigo-400 to-purple-600 bg-clip-text text-transparent">
                  研究スキル向上
                </span>
              </h3>
              
              <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                研究計画の立案から論文執筆、学会発表まで、研究者として必要なスキルを総合的に身に付けます。
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3 p-3 bg-gray-800/30 rounded-lg border border-gray-700/30">
                  <div className="w-2 h-2 bg-indigo-400 rounded-full"></div>
                  <span className="text-sm">研究計画書の書き方</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-gray-800/30 rounded-lg border border-gray-700/30">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span className="text-sm">学術論文執筆テクニック</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-gray-800/30 rounded-lg border border-gray-700/30">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-sm">効果的なプレゼンテーション技法</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-gray-800/30 rounded-lg border border-gray-700/30">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="text-sm">研究データ管理と可視化</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Learning Resources */}
      <section className="py-16 bg-gradient-to-br from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-black mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                LEARNING MATERIALS
              </span>
            </h2>
            <p className="text-xl text-gray-300 font-light">学習に役立つ参考資料とリンク集</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">📖 推奨教科書</h3>
              <div className="space-y-3">
                <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-800">
                  <h4 className="font-bold text-white mb-1">"Solid State Ionics" by P.G. Bruce</h4>
                  <p className="text-gray-300 text-sm">固体イオニクスの基礎理論を包括的に扱った標準的教科書</p>
                </div>
                <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-800">
                  <h4 className="font-bold text-white mb-1">"Introduction to Solid State Physics" by C. Kittel</h4>
                  <p className="text-gray-300 text-sm">固体物理学の基礎から応用まで、材料研究の基盤となる知識</p>
                </div>
                <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-800">
                  <h4 className="font-bold text-white mb-1">"Materials Modelling using Density Functional Theory" by F. Giustino</h4>
                  <p className="text-gray-300 text-sm">第一原理計算の理論と実践を詳しく解説</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-blue-400 mb-4">🔗 有用なリンク</h3>
              <div className="space-y-3">
                <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-800">
                  <h4 className="font-bold text-white mb-1">Materials Project</h4>
                  <p className="text-gray-300 text-sm">計算材料科学データベース・材料探索プラットフォーム</p>
                </div>
                <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-800">
                  <h4 className="font-bold text-white mb-1">VASP Tutorial</h4>
                  <p className="text-gray-300 text-sm">第一原理計算コードVASPの使用方法とチュートリアル</p>
                </div>
                <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-800">
                  <h4 className="font-bold text-white mb-1">scikit-learn Documentation</h4>
                  <p className="text-gray-300 text-sm">機械学習ライブラリの公式ドキュメントとサンプルコード</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Home Button */}
      <div className="fixed bottom-8 right-8">
        <Link href="/layout-options/tech" className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-lg shadow-lg hover:shadow-cyan-500/25 transition-all duration-300">
          ホームに戻る
        </Link>
      </div>
    </div>
  )
}