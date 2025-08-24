'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export default function ResearchDetails() {
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
                <Link href="/publications" className="text-gray-300 hover:text-cyan-400 transition-colors px-3 py-1 rounded border border-transparent hover:border-cyan-400/30">
                  研究業績
                </Link>
                <Link href="/research-details" className="text-cyan-400 px-3 py-1 rounded border border-cyan-400/30">
                  研究詳細
                </Link>
                <Link href="/learning" className="text-gray-300 hover:text-cyan-400 transition-colors px-3 py-1 rounded border border-transparent hover:border-cyan-400/30">
                  学習
                </Link>
                <Link href="/access" className="text-gray-300 hover:text-cyan-400 transition-colors px-3 py-1 rounded border border-transparent hover:border-cyan-400/30">
                  アクセス
                </Link>
                <Link href="/prospective-students" className="text-gray-300 hover:text-cyan-400 transition-colors px-3 py-1 rounded border border-transparent hover:border-cyan-400/30">
                  研究室希望者へ
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
                RESEARCH DETAILS
              </span>
            </h1>
            <p className="text-xl text-gray-300 font-light">研究詳細と各研究トピック</p>
          </motion.div>
        </div>
      </section>

      {/* Research Topics */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid gap-16">
            
            {/* Fluoride Ion Conductors */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 border border-gray-800"
            >
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="mb-6">
                    <span className="px-3 py-1 text-xs font-mono bg-cyan-400/10 text-cyan-400 rounded-full border border-cyan-400/20">
                      FLUORIDE ION CONDUCTORS
                    </span>
                  </div>
                  <h2 className="text-4xl font-black mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    フッ化物イオン伝導体の探索
                  </h2>
                  <div className="space-y-4 text-gray-300">
                    <p>
                      フッ化物電池は、リチウム電池に比べて高い理論エネルギー密度を持つ次世代蓄電デバイスとして注目されています。フッ化物電池の実現に必要不可欠なのが、フッ化物イオンが固体中を高速に伝導可能な固体電解質材料の開発です。
                    </p>
                    <p>
                      本研究では、新規フッ化物イオン伝導体の探索と、その伝導メカニズムの解明に取り組んでいます。特に、電気化学的安定性とイオン伝導性を両立した固体電解質の開発や、極めて高いイオン伝導率を示す孤立電子対系のフッ化物イオン伝導体の開発に取り組んでいます。
                    </p>
                    <div className="bg-gray-800/50 rounded-lg p-4 border border-cyan-400/20">
                      <h4 className="font-bold text-cyan-400 mb-2">主な成果：</h4>
                      <ul className="text-sm space-y-1">
                        <li>• CsPb₀.₉K₀.₁F₂.₉における極小活性化エネルギー（7.9 kJ/mol）の達成</li>
                        <li>• 孤立電子対の動的再配向によるイオン輸送促進の初実証</li>
                        <li>• 室温で10⁻⁴ S/cmを超える新たなSn系タイソナイト材料の開発</li>
                        <li>• Y₂C↔Y₂CF₂のF⁻可逆インターカレーション負極活物質の開発</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-2xl blur-xl"></div>
                  <Image
                    src="/F1.jpg"
                    alt="Fluoride Ion Conductor"
                    width={500}
                    height={350}
                    className="relative rounded-2xl shadow-2xl border border-gray-800"
                  />
                </div>
              </div>
            </motion.div>

            {/* Lithium Ion Conductors */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 border border-gray-800"
            >
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1 relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl"></div>
                  <Image
                    src="/Li1.jpg"
                    alt="Lithium Ion Conductor"
                    width={500}
                    height={350}
                    className="relative rounded-2xl shadow-2xl border border-gray-800"
                  />
                </div>
                <div className="order-1 lg:order-2">
                  <div className="mb-6">
                    <span className="px-3 py-1 text-xs font-mono bg-blue-400/10 text-blue-400 rounded-full border border-blue-400/20">
                      LITHIUM ION CONDUCTORS
                    </span>
                  </div>
                  <h2 className="text-4xl font-black mb-6 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                    リチウムイオン伝導体の探索
                  </h2>
                  <div className="space-y-4 text-gray-300">
                    <p>
                      全固体リチウムイオン電池の実用化に向けて、高いイオン伝導性と化学的安定性を両立する新規固体電解質の開発が急務です。本研究では、材料インフォマティクスと実験を融合したアプローチで効率的な材料探索を行っています。
                    </p>
                    <div className="bg-gray-800/50 rounded-lg p-4 border border-blue-400/20">
                      <h4 className="font-bold text-blue-400 mb-2">成果：</h4>
                      <ul className="text-sm space-y-1">
                        <li>• 配位多面体モチーフを特徴量とした機械学習モデルによる新規Li導電体の発見（JACS掲載）</li>
                        <li>• 硫化物系、酸化物系など多様な材料系での探索</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Hydride Ion Conductors */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 border border-gray-800"
            >
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="mb-6">
                    <span className="px-3 py-1 text-xs font-mono bg-purple-400/10 text-purple-400 rounded-full border border-purple-400/20">
                      HYDRIDE ION CONDUCTORS
                    </span>
                  </div>
                  <h2 className="text-4xl font-black mb-6 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                    ヒドリドイオン伝導性材料・デバイスの探索
                  </h2>
                  <div className="space-y-4 text-gray-300">
                    <p>
                      水素の陰イオンであるヒドリドイオン（H⁻）を電荷担体とする新しいエネルギーデバイスの開発に取り組んでいます。ヒドリドイオン伝導体は、その高速性と特異な反応性を活かした新規電池系の構築が期待されています。
                    </p>
                    <div className="bg-gray-800/50 rounded-lg p-4 border border-purple-400/20">
                      <h4 className="font-bold text-purple-400 mb-2">研究内容：</h4>
                      <ul className="text-sm space-y-1">
                        <li>• ペロブスカイト型ヒドリド伝導体：SrLiH₃をベースとした新規組成の開発</li>
                        <li>• Sr₂LiH₂Nのヒドリドイオン導電性の報告</li>
                        <li>• K₂NiF₄型酸水素化物：La₂LiHO₃の常圧合成法の確立</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl blur-xl"></div>
                  <Image
                    src="/H1.jpg"
                    alt="Hydride Ion Conductor"
                    width={500}
                    height={350}
                    className="relative rounded-2xl shadow-2xl border border-gray-800"
                  />
                </div>
              </div>
            </motion.div>

            {/* Anion Intercalation Electrodes */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 border border-gray-800"
            >
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1 relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-2xl blur-xl"></div>
                  <Image
                    src="/anion_intercalation.jpg"
                    alt="Anion Intercalation Electrode"
                    width={500}
                    height={350}
                    className="relative rounded-2xl shadow-2xl border border-gray-800"
                  />
                </div>
                <div className="order-1 lg:order-2">
                  <div className="mb-6">
                    <span className="px-3 py-1 text-xs font-mono bg-green-400/10 text-green-400 rounded-full border border-green-400/20">
                      ANION INTERCALATION
                    </span>
                  </div>
                  <h2 className="text-4xl font-black mb-6 bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">
                    アニオンインターカレーション電極の探索
                  </h2>
                  <div className="space-y-4 text-gray-300">
                    <p>
                      従来のカチオン（Li⁺、Na⁺など）インターカレーションとは逆に、アニオン（F⁻、Cl⁻など）が可逆的に挿入・脱離する電極材料の開発に取り組んでいます。新たな電池系の構築により、より高いエネルギー密度の実現を目指しています。
                    </p>
                    <div className="bg-gray-800/50 rounded-lg p-4 border border-green-400/20">
                      <h4 className="font-bold text-green-400 mb-2">成果：</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Y₂C↔Y₂CF₂のフッ化物可逆インターカレーション反応の実証</li>
                        <li>• 新規負極活物質としてのカーバイド系材料の開発</li>
                        <li>• フッ化物電池への応用展開</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Machine Learning & Virtual Space */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 border border-gray-800"
            >
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="mb-6">
                    <span className="px-3 py-1 text-xs font-mono bg-indigo-400/10 text-indigo-400 rounded-full border border-indigo-400/20">
                      MACHINE LEARNING
                    </span>
                  </div>
                  <h2 className="text-4xl font-black mb-6 bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
                    機械学習・仮想空間を活用した探索
                  </h2>
                  <div className="space-y-4 text-gray-300">
                    <p>
                      材料インフォマティクスと計算化学を融合し、機械学習を用いた新規イオン伝導体の効率的探索手法を開発しています。実験と理論の両面から材料設計を行うことで、従来の試行錯誤的な探索を大幅に効率化します。
                    </p>
                    <div className="bg-gray-800/50 rounded-lg p-4 border border-indigo-400/20">
                      <h4 className="font-bold text-indigo-400 mb-2">アプローチ：</h4>
                      <ul className="text-sm space-y-1">
                        <li>• 配位多面体モチーフを特徴量とした機械学習モデル構築</li>
                        <li>• 第一原理計算による伝導メカニズム解析</li>
                        <li>• ニューラルネットワークポテンシャルを用いた分子動力学シミュレーション</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-2xl blur-xl"></div>
                  <Image
                    src="/machine_learning.jpg"
                    alt="Machine Learning Research"
                    width={500}
                    height={350}
                    className="relative rounded-2xl shadow-2xl border border-gray-800"
                  />
                </div>
              </div>
            </motion.div>

            {/* High-Throughput Synthesis */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 border border-gray-800"
            >
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1 relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-2xl blur-xl"></div>
                  <Image
                    src="/combinatorial.jpg"
                    alt="High-Throughput Synthesis"
                    width={500}
                    height={350}
                    className="relative rounded-2xl shadow-2xl border border-gray-800"
                  />
                </div>
                <div className="order-1 lg:order-2">
                  <div className="mb-6">
                    <span className="px-3 py-1 text-xs font-mono bg-orange-400/10 text-orange-400 rounded-full border border-orange-400/20">
                      HIGH-THROUGHPUT SYNTHESIS
                    </span>
                  </div>
                  <h2 className="text-4xl font-black mb-6 bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                    ハイスループット合成
                  </h2>
                  <div className="space-y-4 text-gray-300">
                    <p>
                      コンビナトリアル合成とハイスループット評価を組み合わせることで、従来よりも格段に高速な材料探索を実現しています。多数の組成を同時に合成・評価することで、新規材料の発見確率を大幅に向上させます。
                    </p>
                    <div className="bg-gray-800/50 rounded-lg p-4 border border-orange-400/20">
                      <h4 className="font-bold text-orange-400 mb-2">手法：</h4>
                      <ul className="text-sm space-y-1">
                        <li>• 組成傾斜薄膜による迅速な組成最適化</li>
                        <li>• 自動化された合成・評価システム</li>
                        <li>• インピーダンス測定による高速スクリーニング</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
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