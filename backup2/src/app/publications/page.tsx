'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function PublicationsPage() {
  const publications = [
    // 2025年
    {
      year: '2025',
      title: 'Tailoring Polyhedral Linkage in K1–xBaxM2F7+x (M = Yb, Lu) for Enhanced Fluoride-Ion Conductivity',
      authors: 'N. Matsui (corresponding author), K. Mori, T. Saito, K. Noi, S. Fujinami, Y. Park, T. Tojigamori, K. Suzuki, T. Abe, R. Kanno',
      journal: 'Chem. Mater., 37(13) (2025) 4798-4806',
      doi: '10.1021/acs.chemmater.5c00772'
    },
    {
      year: '2025',
      title: 'Exploration of Lithium-Ion Conductors Based on Local Coordination Environments Using Crystallographic Site Fingerprints',
      authors: 'S. Kong, N. Matsui (corresponding author), S. Hori, M. Hirayama, K. Mori, T. Saito, R. Kanno, K. Suzuki',
      journal: 'J. Am. Chem. Soc., 147(28) (2025) 24336-24346',
      doi: '10.1021/jacs.5c00856'
    },
    {
      year: '2025',
      title: 'Hydride Ion Conductors with Polyanionic Complex Anions',
      authors: 'T. Kim, T. Kim, T. Lee, Y. Park, J. Kim, K. Kang, H. Kim, S. Hong, N. Matsui, H. Kim, S. Kim',
      journal: 'J. Am. Chem. Soc., 147(17) (2025) 14244-14253',
      doi: '10.1021/jacs.4c17532'
    },
    {
      year: '2025',
      title: 'Self-Closing of Cracks Generated in Microstructure-Controlled 400 µm-Thick Composite Cathodes for All-Solid-State Batteries',
      authors: 'K. Watanabe, H. Kim, K. Hikima, N. Matsui, K. Suzuki, H. Muto, A. Matsuda, R. Kanno, M. Hirayama',
      journal: 'Batteries & Supercaps, 8(6) (2025) e202500119',
      doi: '10.1002/batt.202500119'
    },
    {
      year: '2025',
      title: 'A trade-off between migration and association energies for hydride-ion conductivity in the SrLiH3–CaLiH3–NaLiH2 system',
      authors: 'T. Hirose, N. Matsui (corresponding author), K. Watanabe, T. Saito, K. Mori, K. Suzuki, M. Hirayama, R. Kanno',
      journal: 'Dalton Transactions, 45 (2025) 4180-4186',
      doi: '10.1039/D4DT03384A'
    },
    {
      year: '2025',
      title: 'Fluoride-ion conductivity of scheelite-type LiYb1-xMxF4±x (M = Mg, Ca, Sr, Hf)',
      authors: 'K. Onuki, N. Matsui (corresponding author), K. Suzuki, M. Hirayama, R. Kanno',
      journal: 'Solid State Ionics, 424 (2025) 116851',
      doi: '10.1016/j.ssi.2025.116851'
    },
    // 2024年
    {
      year: '2024',
      title: 'Effect of Pb 6s2 lone pair on the potential flattening of fluoride-ion conduction in perovskite-type fluoride',
      authors: 'N. Matsui (corresponding author), M. Murakami, K. Mori, T. Saito, K. Shimizu, K. Suzuki, R. Kanno',
      journal: 'J. Mater. Chem. A, 12 (2024) 3989-3996',
      doi: '10.1039/D3TA06367D'
    },
    {
      year: '2024',
      title: 'Fluorination/Defluorination Behavior of Y2C in Fluoride-Ion Battery Anodes',
      authors: 'T. Tojigamori, N. Matsui (共同第一著者), K. Suzuki, M. Hirayama, T. Abe, R. Kanno',
      journal: 'ACS Appl. Energy Mater., 7(3) (2024) 1100–1108',
      doi: 'AAAA'
    },
    // 2023年
    {
      year: '2023',
      title: 'Accelerated Exploration of Fast Fluoride-Ion Conductors Based on Compositional Descriptors',
      authors: 'N. Matsui, T. Seki, K. Suzuki, M. Hirayama, R. Kanno',
      journal: 'ACS Applied Energy Materials, 6(22) (2023) 11663–11671',
      doi: '10.1021/acsaem.3c02107'
    },
    {
      year: '2023',
      title: 'A lithium superionic conductor for millimeter-thick battery electrode',
      authors: 'Y. Li, S. Song, H. Kim, K. Nomoto, H. Kim, X. Sun, S. Hori, K. Suzuki, N. Matsui, M. Hirayama, T. Mizoguchi, T. Saito, T. Kamiyama, R. Kanno',
      journal: 'Science, 381 (2023) 50-53',
      doi: ''
    },
    // 2022年
    {
      year: '2022',
      title: 'Fast Hydride-Ion Conduction in Perovskite Hydrides AELiH3',
      authors: 'T. Hirose, T. Mishina, N. Matsui, K. Suzuki, T. Saito, T. Kamiyama, M. Hirayama, R. Kanno',
      journal: 'ACS Appl. Energy Mater., 5(3), (2022) 2968-2974',
      doi: ''
    },
    {
      year: '2022',
      title: 'Anomalously High Ionic Conductivity of Li2SiS3-Type Conductors',
      authors: 'W. Huang, N. Matsui, S. Hori, K. Suzuki, M. Hirayama, M. Yonemura, T. Saito, T. Kamiyama, Y. Sasaki, Y. Yoon, S. Kim, R. Kanno',
      journal: 'J. Am. Chem. Soc., 144(11), (2022) 4989-4994',
      doi: ''
    },
    // 2020年
    {
      year: '2020',
      title: 'The effect of cation size on hydride-ion conduction in LnSrLiH2O2 (Ln = La, Pr, Nd, Sm, Gd) oxyhydrides',
      authors: 'N. Matsui, Y. Hinuma, Y. Iwasaki, K. Suzuki, J. Guangzhong, H. Nawaz, Y. Imai, M. Yonemura, N. Hirayama, G. Kobayashi, R. Kanno',
      journal: 'Journal of Materials Chemistry A, 8(46), (2020) 24685-24694',
      doi: ''
    },
    // 2019年
    {
      year: '2019',
      title: 'Ambient pressure synthesis of La2LiHO3 as a solid electrolyte for a hydrogen electrochemical cell',
      authors: 'N. Matsui, G. Kobayashi, K. Suzuki, A. Watanabe, A. Kubota, Y. Iwasaki, M. Yonemura, M. Hirayama, R. Kanno',
      journal: 'Journal of the American Ceramic Society, 102(6), (2019) 3228-3235',
      doi: ''
    },
    // 2018年
    {
      year: '2018',
      title: 'Synthesis, crystal structure, and ionic conductivity of hydride ion-conducting Ln2LiHO3 (Ln= La, Pr, Nd) oxyhydrides',
      authors: 'Y. Iwasaki, N. Matsui, K. Suzuki, Y. Hinuma, M. Yonemura, G. Kobayashi, M. Hirayama, I. Tanaka, R. Kanno',
      journal: 'Journal of Materials Chemistry A, 6(46), (2018) 23457-23463',
      doi: ''
    },
    // 2017年
    {
      year: '2017',
      title: 'Ambient pressure synthesis and H– conductivity of LaSrLiH2O2',
      authors: 'A. Watanabe, G. Kobayashi, N. Matsui, M. Yonemura, A. Kubota, K. Suzuki, M. Hirayama, R. Kanno',
      journal: 'Electrochemistry, 85(2), (2017) 88-92',
      doi: ''
    }
  ]

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
                <Link href="/publications" className="text-cyan-400 px-3 py-1 rounded border border-cyan-400/30">
                  研究業績
                </Link>
                <Link href="/research-details" className="text-gray-300 hover:text-cyan-400 transition-colors px-3 py-1 rounded border border-transparent hover:border-cyan-400/30">
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
                PUBLICATIONS
              </span>
            </h1>
            <p className="text-xl text-gray-300 font-light">全ての論文業績（2017-2025）</p>
            <div className="mt-4 text-center">
              <div className="inline-flex items-center space-x-4 bg-gray-800/50 rounded-lg px-6 py-3 border border-cyan-400/20">
                <span className="text-cyan-400 font-mono text-sm">論文総数: {publications.length}報</span>
                <span className="text-gray-400">|</span>
                <span className="text-blue-400 font-mono text-sm">特許: 8件</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Publications List */}
      <section className="py-16 bg-gradient-to-br from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid gap-4">
            {publications.map((pub, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.02 }}
                className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="text-sm font-mono text-cyan-400">{pub.year}</div>
                </div>
                
                <h3 className="text-lg font-bold text-white mb-3 leading-tight">
                  {pub.title}
                </h3>
                
                <p className="text-gray-300 text-sm mb-2 leading-relaxed">
                  {pub.authors}
                </p>
                
                <p className="text-gray-400 text-sm italic mb-2">
                  {pub.journal}
                </p>
                
                {pub.doi && (
                  <div className="text-xs">
                    <span className="text-cyan-400">DOI: </span>
                    <span className="text-gray-400 font-mono">{pub.doi}</span>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
          
          {/* Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-16 text-center"
          >
            <div className="bg-gradient-to-r from-gray-900 to-black rounded-2xl p-8 border border-gray-800">
              <h3 className="text-2xl font-black mb-4">
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  研究業績サマリー
                </span>
              </h3>
              <div className="grid md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-3xl font-black text-cyan-400 mb-2">{publications.length}</div>
                  <div className="text-sm text-gray-400">査読付き論文</div>
                </div>
                <div>
                  <div className="text-3xl font-black text-blue-400 mb-2">8</div>
                  <div className="text-sm text-gray-400">特許出願</div>
                </div>
                <div>
                  <div className="text-3xl font-black text-purple-400 mb-2">9</div>
                  <div className="text-sm text-gray-400">研究期間（年）</div>
                </div>
                <div>
                  <div className="text-3xl font-black text-pink-400 mb-2">3</div>
                  <div className="text-sm text-gray-400">主要研究領域</div>
                </div>
              </div>
            </div>
          </motion.div>
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