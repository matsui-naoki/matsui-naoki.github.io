'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import SimpleNavigation from '@/components/SimpleNavigation'

export default function Learning() {
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
            >
              <Link 
                href="/learning/solid-state-ionics"
                className="block bg-gradient-to-br from-gray-900 to-black rounded-3xl p-6 border border-gray-800 hover:border-cyan-400/30 transition-all duration-300 hover:transform hover:scale-105"
              >
              <div className="mb-6">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center text-white text-xl font-bold mb-4">
                  SSI
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
              </Link>
            </motion.div>

            {/* Computational Materials Science for Battery */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Link
                href="/learning/computational-materials"
                className="block bg-gradient-to-br from-gray-900 to-black rounded-3xl p-6 border border-gray-800 hover:border-blue-400/30 transition-all duration-300 hover:transform hover:scale-105"
              >
              <div className="mb-6">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white text-xl font-bold mb-4">
                  CM
                </div>
                <span className="px-3 py-1 text-xs font-mono bg-blue-400/10 text-blue-400 rounded-full border border-blue-400/20">
                  COMPUTATIONAL
                </span>
              </div>
              
              <h3 className="text-2xl font-black mb-4">
                <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                  電池材料の材料計算科学
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
              </Link>
            </motion.div>

            {/* Battery Materials Informatics */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-6 border border-gray-800 hover:border-purple-400/30 transition-all duration-300 hover:transform hover:scale-105"
            >
              <Link href="/learning/materials-informatics">
              <div className="mb-6">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white text-xl font-bold mb-4">
                  MI
                </div>
                <span className="px-3 py-1 text-xs font-mono bg-purple-400/10 text-purple-400 rounded-full border border-purple-400/20">
                  MACHINE LEARNING
                </span>
              </div>
              
              <h3 className="text-2xl font-black mb-4">
                <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                  電池材料インフォマティクス
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
              </Link>
            </motion.div>

            {/* Experimental Techniques */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-6 border border-gray-800 hover:border-cyan-400/30 transition-all duration-300 hover:transform hover:scale-105"
            >
              <Link href="/learning/experimental">
              <div className="mb-6">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-green-400 to-cyan-500 flex items-center justify-center text-white text-xl font-bold mb-4">
                  EXP
                </div>
                <span className="px-3 py-1 text-xs font-mono bg-green-400/10 text-green-400 rounded-full border border-green-400/20">
                  EXPERIMENTAL
                </span>
              </div>
              
              <h3 className="text-2xl font-black mb-4">
                <span className="bg-gradient-to-r from-green-400 to-cyan-500 bg-clip-text text-transparent">
                  実験技術
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
              </Link>
            </motion.div>

            {/* Research Skills */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-6 border border-gray-800 hover:border-indigo-400/30 transition-all duration-300 hover:transform hover:scale-105"
            >
              <Link href="/learning/research-skills">
              <div className="mb-6">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-indigo-400 to-purple-600 flex items-center justify-center text-white text-xl font-bold mb-4">
                  RS
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
              </Link>
            </motion.div>

            {/* Miscellaneous */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              <Link
                href="/learning/miscellaneous"
                className="block bg-gradient-to-br from-gray-900 to-black rounded-3xl p-6 border border-gray-800 hover:border-yellow-400/30 transition-all duration-300 hover:transform hover:scale-105"
              >
              <div className="mb-6">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-yellow-400 to-orange-500 flex items-center justify-center text-white text-xl font-bold mb-4">
                  MS
                </div>
                <span className="px-3 py-1 text-xs font-mono bg-yellow-400/10 text-yellow-400 rounded-full border border-yellow-400/20">
                  MISCELLANEOUS
                </span>
              </div>
              
              <h3 className="text-2xl font-black mb-4">
                <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                  雑記
                </span>
              </h3>
              
              <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                博士課程のキャリアパスや給与比較など、研究生活に関する様々な情報を提供します。
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3 p-3 bg-gray-800/30 rounded-lg border border-gray-700/30">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span className="text-sm">博士課程のキャリアパス</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-gray-800/30 rounded-lg border border-gray-700/30">
                  <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                  <span className="text-sm">給与比較表</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-gray-800/30 rounded-lg border border-gray-700/30">
                  <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                  <span className="text-sm">研究生活のヒント</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-gray-800/30 rounded-lg border border-gray-700/30">
                  <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                  <span className="text-sm">その他の情報</span>
                </div>
              </div>
              </Link>
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
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">推奨教科書</h3>
              <div className="space-y-3">
                <h4 className="text-lg font-semibold text-blue-300 mb-2">◼ 固体イオニクス</h4>
                <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-800">
                  <h4 className="font-bold text-white mb-1">A. R. West著、遠藤、武田、井川、池田、 伊藤、菅野 訳</h4>
                  <p className="text-gray-300 text-sm">「ウエスト 固体化学入門」（講談社）</p>
                </div>
                <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-800">
                  <h4 className="font-bold text-white mb-1">工藤 撤一、笛木 和雄</h4>
                  <p className="text-gray-300 text-sm">固体アイオニクス、講談社（1986）</p>
                </div>
                <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-800">
                  <h4 className="font-bold text-white mb-1">戒能俊邦, 菅野了次</h4>
                  <p className="text-gray-300 text-sm">材料科学一基礎と応用一, 東京化学同人 (2008)</p>
                </div>
                <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-800">
                  <h4 className="font-bold text-white mb-1">Paul Hagenmuller編</h4>
                  <p className="text-gray-300 text-sm">Inorganic Solid Fluorides -Chemistry and Physics-, Academic Press, Inc (1985)</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-purple-400 mb-4">推奨文献</h3>
              <div className="space-y-3">
                <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-800">
                  <h4 className="font-bold text-white mb-1">O.Yamamoto</h4>
                  <p className="text-gray-300 text-sm">Solid state ionics: a Japan perspective, Science and Technology of Advanced Materials, 18(1) 504 (2017).</p>
                </div>
                <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-800">
                  <h4 className="font-bold text-white mb-1">菅野了次</h4>
                  <p className="text-gray-300 text-sm">イオン導電体創出から固体電池構築へ, 応用物理, 90(1), 6-23 (2021). doi.org/10.11470/oubutsu.90.16</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-2xl font-bold text-blue-400 mb-4">有用なリンク</h3>
              <div className="grid md:grid-cols-2 gap-3">
                <a href="https://phaseonline.ceramics.org/" target="_blank" rel="noopener noreferrer" className="block bg-gray-900/50 p-4 rounded-lg border border-gray-800 hover:border-cyan-400/30 transition-all">
                  <h4 className="font-bold text-white mb-1">相平衡状態図</h4>
                  <p className="text-gray-300 text-sm">セラミックス材料の相平衡状態図データベース</p>
                </a>
                <a href="http://www.sasakiken.net" target="_blank" rel="noopener noreferrer" className="block bg-gray-900/50 p-4 rounded-lg border border-gray-800 hover:border-cyan-400/30 transition-all">
                  <h4 className="font-bold text-white mb-1">X線関係のパラメータ 佐々木テーブル</h4>
                  <p className="text-gray-300 text-sm">X線構造解析に必要な原子散乱因子データ</p>
                </a>
                <a href="https://www.ncnr.nist.gov/resources/n-lengths/" target="_blank" rel="noopener noreferrer" className="block bg-gray-900/50 p-4 rounded-lg border border-gray-800 hover:border-cyan-400/30 transition-all">
                  <h4 className="font-bold text-white mb-1">NIST neutron scattering lengths and cross sections</h4>
                  <p className="text-gray-300 text-sm">中性子散乱長と断面積のデータベース</p>
                </a>
                <a href="https://webbook.nist.gov/chemistry/form-ser/" target="_blank" rel="noopener noreferrer" className="block bg-gray-900/50 p-4 rounded-lg border border-gray-800 hover:border-cyan-400/30 transition-all">
                  <h4 className="font-bold text-white mb-1">NIST Chemistry WebBook</h4>
                  <p className="text-gray-300 text-sm">標準生成エンタルピー・エントロピー等の熱力学データ</p>
                </a>
                <a href="https://z-code-software.com" target="_blank" rel="noopener noreferrer" className="block bg-gray-900/50 p-4 rounded-lg border border-gray-800 hover:border-cyan-400/30 transition-all">
                  <h4 className="font-bold text-white mb-1">結晶構造解析 Rietveld: Z-code</h4>
                  <p className="text-gray-300 text-sm">Rietveld解析ソフトウェア</p>
                </a>
                <a href="https://objcryst-fox.readthedocs.io/" target="_blank" rel="noopener noreferrer" className="block bg-gray-900/50 p-4 rounded-lg border border-gray-800 hover:border-cyan-400/30 transition-all">
                  <h4 className="font-bold text-white mb-1">未知構造解析 FOX</h4>
                  <p className="text-gray-300 text-sm">グローバル最適化による結晶構造解析</p>
                </a>
                <a href="https://www.dmse.nus.edu.sg/asn/softBV-GUI.html" target="_blank" rel="noopener noreferrer" className="block bg-gray-900/50 p-4 rounded-lg border border-gray-800 hover:border-cyan-400/30 transition-all">
                  <h4 className="font-bold text-white mb-1">BV解析: SoftBV</h4>
                  <p className="text-gray-300 text-sm">ボンドバレンス法による構造解析ツール</p>
                </a>
                <a href="https://pybamm.org" target="_blank" rel="noopener noreferrer" className="block bg-gray-900/50 p-4 rounded-lg border border-gray-800 hover:border-cyan-400/30 transition-all">
                  <h4 className="font-bold text-white mb-1">Python 電池シミュレータ: PyBaMM</h4>
                  <p className="text-gray-300 text-sm">電池モデリング・シミュレーションフレームワーク</p>
                </a>
                <a href="https://docs.matlantis.com/atomistic-simulation-tutorial/ja/1_1_welcome.html" target="_blank" rel="noopener noreferrer" className="block bg-gray-900/50 p-4 rounded-lg border border-gray-800 hover:border-cyan-400/30 transition-all">
                  <h4 className="font-bold text-white mb-1">構造物性計算 Matlantis documents</h4>
                  <p className="text-gray-300 text-sm">Matlantisを用いた原子レベルシミュレーション</p>
                </a>
                <a href="https://docs.matlantis.com/atomistic-simulation-tutorial/ja/1_1_welcome.html" target="_blank" rel="noopener noreferrer" className="block bg-gray-900/50 p-4 rounded-lg border border-gray-800 hover:border-cyan-400/30 transition-all">
                  <h4 className="font-bold text-white mb-1">構造物性計算: 解析例 Matlantis contributer example</h4>
                  <p className="text-gray-300 text-sm">Matlantisコントリビュータによる解析例</p>
                </a>
                <a href="https://owl.nagaokaut.ac.jp/cryspy/" target="_blank" rel="noopener noreferrer" className="block bg-gray-900/50 p-4 rounded-lg border border-gray-800 hover:border-cyan-400/30 transition-all">
                  <h4 className="font-bold text-white mb-1">結晶構造探索 遺伝的アルゴ: CrySPY</h4>
                  <p className="text-gray-300 text-sm">遺伝的アルゴリズムによる結晶構造予測</p>
                </a>
                <a href="https://github.com/kbknudsen/PyEIS" target="_blank" rel="noopener noreferrer" className="block bg-gray-900/50 p-4 rounded-lg border border-gray-800 hover:border-cyan-400/30 transition-all">
                  <h4 className="font-bold text-white mb-1">Python EIS解析: PyEIS</h4>
                  <p className="text-gray-300 text-sm">電気化学インピーダンス分光解析ツール</p>
                </a>
                <a href="https://mpds.io/" target="_blank" rel="noopener noreferrer" className="block bg-gray-900/50 p-4 rounded-lg border border-gray-800 hover:border-cyan-400/30 transition-all">
                  <h4 className="font-bold text-white mb-1">MPDSデータベース</h4>
                  <p className="text-gray-300 text-sm">材料物性データベースプラットフォーム</p>
                </a>
              </div>
          </div>
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