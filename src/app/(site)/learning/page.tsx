'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import SimpleNavigation from '@/components/SimpleNavigation'

export default function Learning() {
  return (
    <div className="min-h-screen bg-[#050505] text-[#ffffff]">
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
              <span className="text-[#ffffff]">
                LEARNING RESOURCES
              </span>
            </h1>
            <p className="text-xl text-[#cfcfcf] font-light">学習リソースと教育コンテンツ</p>
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
                className="block bg-[#111111] rounded p-6 border border-[#262626] hover:border-[#76b900]/30 transition-all duration-300"
              >
              <div className="mb-6">
                <div className="w-16 h-16 rounded bg-[#76b900] flex items-center justify-center text-[#000000] text-xl font-bold mb-4">
                  SSI
                </div>
                <span className="px-3 py-1 text-xs font-mono bg-[#76b900]/10 text-[#76b900] rounded-full border border-[#76b900]/20">
                  FUNDAMENTALS
                </span>
              </div>
              
              <h3 className="text-2xl font-black mb-4">
                <span className="text-[#ffffff]">
                  固体イオニクス基礎
                </span>
              </h3>
              
              <p className="text-[#cfcfcf] text-sm mb-6 leading-relaxed">
                イオン伝導の基本式と結晶欠陥から、拡散理論、代表的なイオン伝導体の構造と設計指針、フッ化物イオン伝導体、電池性能の評価指標までを学べます。
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3 p-3 bg-[#1a1a1a]/70 rounded border border-[#3a3a3a]/30">
                  <div className="w-2 h-2 bg-[#76b900] rounded-full"></div>
                  <span className="text-sm">結晶欠陥とKröger-Vink記法</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-[#1a1a1a]/70 rounded border border-[#3a3a3a]/30">
                  <div className="w-2 h-2 bg-[#76b900] rounded-full"></div>
                  <span className="text-sm">拡散係数・Fickの法則とKMC法</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-[#1a1a1a]/70 rounded border border-[#3a3a3a]/30">
                  <div className="w-2 h-2 bg-[#76b900] rounded-full"></div>
                  <span className="text-sm">イオン伝導体の構造と設計指針</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-[#1a1a1a]/70 rounded border border-[#3a3a3a]/30">
                  <div className="w-2 h-2 bg-[#76b900] rounded-full"></div>
                  <span className="text-sm">フッ化物イオン伝導体と電池性能評価</span>
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
                className="block bg-[#111111] rounded p-6 border border-[#262626] hover:border-[#76b900]/30 transition-all duration-300"
              >
              <div className="mb-6">
                <div className="w-16 h-16 rounded bg-[#1a1a1a] border border-[#3a3a3a] flex items-center justify-center text-[#ffffff] text-xl font-bold mb-4">
                  CM
                </div>
                <span className="px-3 py-1 text-xs font-mono bg-[#76b900]/10 text-[#76b900] rounded-full border border-[#76b900]/20">
                  COMPUTATIONAL
                </span>
              </div>
              
              <h3 className="text-2xl font-black mb-4">
                <span className="text-[#ffffff]">
                  電池材料の材料計算科学
                </span>
              </h3>
              
              <p className="text-[#cfcfcf] text-sm mb-6 leading-relaxed">
                VASPによる第一原理計算から、機械学習ポテンシャルを含む分子動力学シミュレーション、TSUBAME4.0での計算環境の使い方まで、計算科学による材料研究の実践を学べます。
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3 p-3 bg-[#1a1a1a]/70 rounded border border-[#3a3a3a]/30">
                  <div className="w-2 h-2 bg-[#76b900] rounded-full"></div>
                  <span className="text-sm">VASPの入力ファイルと計算条件</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-[#1a1a1a]/70 rounded border border-[#3a3a3a]/30">
                  <div className="w-2 h-2 bg-[#76b900] rounded-full"></div>
                  <span className="text-sm">生成エネルギーとEnergy above hull</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-[#1a1a1a]/70 rounded border border-[#3a3a3a]/30">
                  <div className="w-2 h-2 bg-[#76b900] rounded-full"></div>
                  <span className="text-sm">分子動力学によるイオン伝導率の計算</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-[#1a1a1a]/70 rounded border border-[#3a3a3a]/30">
                  <div className="w-2 h-2 bg-[#76b900] rounded-full"></div>
                  <span className="text-sm">TSUBAME4.0の利用方法</span>
                </div>
              </div>
              </Link>
            </motion.div>

            {/* Battery Materials Informatics */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-[#111111] rounded p-6 border border-[#262626] hover:border-[#76b900]/30 transition-all duration-300"
            >
              <Link href="/learning/materials-informatics">
              <div className="mb-6">
                <div className="w-16 h-16 rounded bg-[#1a1a1a] border border-[#3a3a3a] flex items-center justify-center text-[#ffffff] text-xl font-bold mb-4">
                  MI
                </div>
                <span className="px-3 py-1 text-xs font-mono bg-[#76b900]/10 text-[#76b900] rounded-full border border-[#76b900]/20">
                  MACHINE LEARNING
                </span>
              </div>
              
              <h3 className="text-2xl font-black mb-4">
                <span className="text-[#ffffff]">
                  電池材料インフォマティクス
                </span>
              </h3>
              
              <p className="text-[#cfcfcf] text-sm mb-6 leading-relaxed">
                イオン伝導率などの物性予測、合成可能性の予測、結晶構造の生成、グラフニューラルネットワーク（GNN）による機械学習ポテンシャルについて、文献の動向と実践上の知見をまとめています。
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3 p-3 bg-[#1a1a1a]/70 rounded border border-[#3a3a3a]/30">
                  <div className="w-2 h-2 bg-[#76b900] rounded-full"></div>
                  <span className="text-sm">機械学習によるイオン伝導率予測</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-[#1a1a1a]/70 rounded border border-[#3a3a3a]/30">
                  <div className="w-2 h-2 bg-[#76b900] rounded-full"></div>
                  <span className="text-sm">合成可能性予測と組成・構造の類似度</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-[#1a1a1a]/70 rounded border border-[#3a3a3a]/30">
                  <div className="w-2 h-2 bg-[#76b900] rounded-full"></div>
                  <span className="text-sm">In-silico構造生成の手法と課題</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-[#1a1a1a]/70 rounded border border-[#3a3a3a]/30">
                  <div className="w-2 h-2 bg-[#76b900] rounded-full"></div>
                  <span className="text-sm">GNNポテンシャル（CGCNN・GNoME・MACE）</span>
                </div>
              </div>
              </Link>
            </motion.div>

            {/* Experimental Techniques */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-[#111111] rounded p-6 border border-[#262626] hover:border-[#76b900]/30 transition-all duration-300"
            >
              <Link href="/learning/experimental">
              <div className="mb-6">
                <div className="w-16 h-16 rounded bg-[#1a1a1a] border border-[#3a3a3a] flex items-center justify-center text-[#ffffff] text-xl font-bold mb-4">
                  EXP
                </div>
                <span className="px-3 py-1 text-xs font-mono bg-[#76b900]/10 text-[#76b900] rounded-full border border-[#76b900]/20">
                  EXPERIMENTAL
                </span>
              </div>
              
              <h3 className="text-2xl font-black mb-4">
                <span className="text-[#ffffff]">
                  実験技術
                </span>
              </h3>
              
              <p className="text-[#cfcfcf] text-sm mb-6 leading-relaxed">
                X線・中性子回折による結晶構造解析と、インピーダンス測定や充放電測定などの電気化学測定について、原理から解析方法までを学べます。
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3 p-3 bg-[#1a1a1a]/70 rounded border border-[#3a3a3a]/30">
                  <div className="w-2 h-2 bg-[#76b900] rounded-full"></div>
                  <span className="text-sm">XRDによる相同定と空間群の決定</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-[#1a1a1a]/70 rounded border border-[#3a3a3a]/30">
                  <div className="w-2 h-2 bg-[#76b900] rounded-full"></div>
                  <span className="text-sm">Rietveld解析・MEM・BVS法</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-[#1a1a1a]/70 rounded border border-[#3a3a3a]/30">
                  <div className="w-2 h-2 bg-[#76b900] rounded-full"></div>
                  <span className="text-sm">交流インピーダンス法とイオン伝導率</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-[#1a1a1a]/70 rounded border border-[#3a3a3a]/30">
                  <div className="w-2 h-2 bg-[#76b900] rounded-full"></div>
                  <span className="text-sm">電位窓測定と充放電測定</span>
                </div>
              </div>
              </Link>
            </motion.div>

            {/* Research Skills */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="bg-[#111111] rounded p-6 border border-[#262626] hover:border-[#76b900]/30 transition-all duration-300"
            >
              <Link href="/learning/research-skills">
              <div className="mb-6">
                <div className="w-16 h-16 rounded bg-[#1a1a1a] border border-[#3a3a3a] flex items-center justify-center text-[#ffffff] text-xl font-bold mb-4">
                  RS
                </div>
                <span className="px-3 py-1 text-xs font-mono bg-[#76b900]/10 text-[#76b900] rounded-full border border-[#76b900]/20">
                  RESEARCH SKILLS
                </span>
              </div>
              
              <h3 className="text-2xl font-black mb-4">
                <span className="text-[#ffffff]">
                  研究スキル向上
                </span>
              </h3>
              
              <p className="text-[#cfcfcf] text-sm mb-6 leading-relaxed">
                研究の進め方やスライド・実験データの管理方法から、Blenderを用いた論文・広報用の3D図の作成まで、研究活動に役立つスキルを紹介します。
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3 p-3 bg-[#1a1a1a]/70 rounded border border-[#3a3a3a]/30">
                  <div className="w-2 h-2 bg-[#76b900] rounded-full"></div>
                  <span className="text-sm">年間スケジュールと論文紹介ゼミ</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-[#1a1a1a]/70 rounded border border-[#3a3a3a]/30">
                  <div className="w-2 h-2 bg-[#76b900] rounded-full"></div>
                  <span className="text-sm">進捗スライドと実験データの管理</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-[#1a1a1a]/70 rounded border border-[#3a3a3a]/30">
                  <div className="w-2 h-2 bg-[#76b900] rounded-full"></div>
                  <span className="text-sm">研究の進め方とスライド作成のコツ</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-[#1a1a1a]/70 rounded border border-[#3a3a3a]/30">
                  <div className="w-2 h-2 bg-[#76b900] rounded-full"></div>
                  <span className="text-sm">Blender・Pythonによる3D図の作成</span>
                </div>
              </div>
              </Link>
            </motion.div>

            {/* Crystal structure gallery */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="bg-[#111111] rounded p-6 border border-[#262626] hover:border-[#76b900]/30 transition-all duration-300"
            >
              <Link href="/ja/crystal-gallery">
              <div className="mb-6">
                <div className="w-16 h-16 rounded bg-[#1a1a1a] border border-[#3a3a3a] flex items-center justify-center text-[#ffffff] text-xl font-bold mb-4">
                  3D
                </div>
                <span className="px-3 py-1 text-xs font-mono bg-[#76b900]/10 text-[#76b900] rounded-full border border-[#76b900]/20">
                  CRYSTAL STRUCTURES
                </span>
              </div>

              <h3 className="text-2xl font-black mb-4">
                <span className="text-[#ffffff]">
                  結晶構造ギャラリー
                </span>
              </h3>

              <p className="text-[#cfcfcf] text-sm mb-6 leading-relaxed">
                代表的なイオン伝導体と電池材料の結晶構造を、ブラウザ上で回転・拡大しながら3Dで見られます。
              </p>

              <div className="space-y-3">
                {['リチウムイオン伝導体・電極材料', 'フッ化物イオン伝導体', 'ヒドリドイオン伝導体', 'その他のイオン伝導体'].map((x) => (
                  <div key={x} className="flex items-center space-x-3 p-3 bg-[#1a1a1a]/70 rounded border border-[#3a3a3a]/30">
                    <div className="w-2 h-2 bg-[#76b900] rounded-full"></div>
                    <span className="text-sm">{x}</span>
                  </div>
                ))}
              </div>
              </Link>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Learning Resources */}
      <section className="py-16 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-black mb-6">
              <span className="text-[#ffffff]">
                LEARNING MATERIALS
              </span>
            </h2>
            <p className="text-xl text-[#cfcfcf] font-light">学習に役立つ参考資料とリンク集</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-[#76b900] mb-4">推奨教科書</h3>
              <div className="space-y-3">
                <h4 className="text-lg font-semibold text-[#8fd400] mb-2">◼ 固体イオニクス</h4>
                <div className="bg-[#111111]/90 p-4 rounded border border-[#262626]">
                  <h4 className="font-bold text-[#ffffff] mb-1">A. R. West著、遠藤、武田、井川、池田、 伊藤、菅野 訳</h4>
                  <p className="text-[#cfcfcf] text-sm">「ウエスト 固体化学入門」（講談社）</p>
                </div>
                <div className="bg-[#111111]/90 p-4 rounded border border-[#262626]">
                  <h4 className="font-bold text-[#ffffff] mb-1">工藤 撤一、笛木 和雄</h4>
                  <p className="text-[#cfcfcf] text-sm">固体アイオニクス、講談社（1986）</p>
                </div>
                <div className="bg-[#111111]/90 p-4 rounded border border-[#262626]">
                  <h4 className="font-bold text-[#ffffff] mb-1">戒能俊邦, 菅野了次</h4>
                  <p className="text-[#cfcfcf] text-sm">材料科学一基礎と応用一, 東京化学同人 (2008)</p>
                </div>
                <div className="bg-[#111111]/90 p-4 rounded border border-[#262626]">
                  <h4 className="font-bold text-[#ffffff] mb-1">Paul Hagenmuller編</h4>
                  <p className="text-[#cfcfcf] text-sm">Inorganic Solid Fluorides -Chemistry and Physics-, Academic Press, Inc (1985)</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-[#76b900] mb-4">推奨文献</h3>
              <div className="space-y-3">
                <div className="bg-[#111111]/90 p-4 rounded border border-[#262626]">
                  <h4 className="font-bold text-[#ffffff] mb-1">O.Yamamoto</h4>
                  <p className="text-[#cfcfcf] text-sm">Solid state ionics: a Japan perspective, Science and Technology of Advanced Materials, 18(1) 504 (2017).</p>
                </div>
                <div className="bg-[#111111]/90 p-4 rounded border border-[#262626]">
                  <h4 className="font-bold text-[#ffffff] mb-1">菅野了次</h4>
                  <p className="text-[#cfcfcf] text-sm">イオン導電体創出から固体電池構築へ, 応用物理, 90(1), 6-23 (2021). doi.org/10.11470/oubutsu.90.16</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-2xl font-bold text-[#76b900] mb-4">有用なリンク</h3>
              <div className="grid md:grid-cols-2 gap-3">
                <a href="https://phaseonline.ceramics.org/" target="_blank" rel="noopener noreferrer" className="block bg-[#111111]/90 p-4 rounded border border-[#262626] hover:border-[#76b900]/30 transition-all">
                  <h4 className="font-bold text-[#ffffff] mb-1">相平衡状態図</h4>
                  <p className="text-[#cfcfcf] text-sm">セラミックス材料の相平衡状態図データベース</p>
                </a>
                <a href="http://www.sasakiken.net" target="_blank" rel="noopener noreferrer" className="block bg-[#111111]/90 p-4 rounded border border-[#262626] hover:border-[#76b900]/30 transition-all">
                  <h4 className="font-bold text-[#ffffff] mb-1">X線関係のパラメータ 佐々木テーブル</h4>
                  <p className="text-[#cfcfcf] text-sm">X線構造解析に必要な原子散乱因子データ</p>
                </a>
                <a href="https://www.ncnr.nist.gov/resources/n-lengths/" target="_blank" rel="noopener noreferrer" className="block bg-[#111111]/90 p-4 rounded border border-[#262626] hover:border-[#76b900]/30 transition-all">
                  <h4 className="font-bold text-[#ffffff] mb-1">NIST neutron scattering lengths and cross sections</h4>
                  <p className="text-[#cfcfcf] text-sm">中性子散乱長と断面積のデータベース</p>
                </a>
                <a href="https://webbook.nist.gov/chemistry/form-ser/" target="_blank" rel="noopener noreferrer" className="block bg-[#111111]/90 p-4 rounded border border-[#262626] hover:border-[#76b900]/30 transition-all">
                  <h4 className="font-bold text-[#ffffff] mb-1">NIST Chemistry WebBook</h4>
                  <p className="text-[#cfcfcf] text-sm">標準生成エンタルピー・エントロピー等の熱力学データ</p>
                </a>
                <a href="https://z-code-software.com" target="_blank" rel="noopener noreferrer" className="block bg-[#111111]/90 p-4 rounded border border-[#262626] hover:border-[#76b900]/30 transition-all">
                  <h4 className="font-bold text-[#ffffff] mb-1">結晶構造解析 Rietveld: Z-code</h4>
                  <p className="text-[#cfcfcf] text-sm">Rietveld解析ソフトウェア</p>
                </a>
                <a href="https://objcryst-fox.readthedocs.io/" target="_blank" rel="noopener noreferrer" className="block bg-[#111111]/90 p-4 rounded border border-[#262626] hover:border-[#76b900]/30 transition-all">
                  <h4 className="font-bold text-[#ffffff] mb-1">未知構造解析 FOX</h4>
                  <p className="text-[#cfcfcf] text-sm">グローバル最適化による結晶構造解析</p>
                </a>
                <a href="https://www.dmse.nus.edu.sg/asn/softBV-GUI.html" target="_blank" rel="noopener noreferrer" className="block bg-[#111111]/90 p-4 rounded border border-[#262626] hover:border-[#76b900]/30 transition-all">
                  <h4 className="font-bold text-[#ffffff] mb-1">BV解析: SoftBV</h4>
                  <p className="text-[#cfcfcf] text-sm">ボンドバレンス法による構造解析ツール</p>
                </a>
                <a href="https://pybamm.org" target="_blank" rel="noopener noreferrer" className="block bg-[#111111]/90 p-4 rounded border border-[#262626] hover:border-[#76b900]/30 transition-all">
                  <h4 className="font-bold text-[#ffffff] mb-1">Python 電池シミュレータ: PyBaMM</h4>
                  <p className="text-[#cfcfcf] text-sm">電池モデリング・シミュレーションフレームワーク</p>
                </a>
                <a href="https://docs.matlantis.com/atomistic-simulation-tutorial/ja/1_1_welcome.html" target="_blank" rel="noopener noreferrer" className="block bg-[#111111]/90 p-4 rounded border border-[#262626] hover:border-[#76b900]/30 transition-all">
                  <h4 className="font-bold text-[#ffffff] mb-1">構造物性計算 Matlantis documents</h4>
                  <p className="text-[#cfcfcf] text-sm">Matlantisを用いた原子レベルシミュレーション</p>
                </a>
                <a href="https://docs.matlantis.com/atomistic-simulation-tutorial/ja/1_1_welcome.html" target="_blank" rel="noopener noreferrer" className="block bg-[#111111]/90 p-4 rounded border border-[#262626] hover:border-[#76b900]/30 transition-all">
                  <h4 className="font-bold text-[#ffffff] mb-1">構造物性計算: 解析例 Matlantis contributer example</h4>
                  <p className="text-[#cfcfcf] text-sm">Matlantisコントリビュータによる解析例</p>
                </a>
                <a href="https://owl.nagaokaut.ac.jp/cryspy/" target="_blank" rel="noopener noreferrer" className="block bg-[#111111]/90 p-4 rounded border border-[#262626] hover:border-[#76b900]/30 transition-all">
                  <h4 className="font-bold text-[#ffffff] mb-1">結晶構造探索 遺伝的アルゴ: CrySPY</h4>
                  <p className="text-[#cfcfcf] text-sm">遺伝的アルゴリズムによる結晶構造予測</p>
                </a>
                <a href="https://github.com/kbknudsen/PyEIS" target="_blank" rel="noopener noreferrer" className="block bg-[#111111]/90 p-4 rounded border border-[#262626] hover:border-[#76b900]/30 transition-all">
                  <h4 className="font-bold text-[#ffffff] mb-1">Python EIS解析: PyEIS</h4>
                  <p className="text-[#cfcfcf] text-sm">電気化学インピーダンス分光解析ツール</p>
                </a>
                <a href="https://mpds.io/" target="_blank" rel="noopener noreferrer" className="block bg-[#111111]/90 p-4 rounded border border-[#262626] hover:border-[#76b900]/30 transition-all">
                  <h4 className="font-bold text-[#ffffff] mb-1">MPDSデータベース</h4>
                  <p className="text-[#cfcfcf] text-sm">材料物性データベースプラットフォーム</p>
                </a>
              </div>
          </div>
        </div>
      </section>

      {/* Back to Home Button */}
      <div className="fixed bottom-8 right-8">
        <Link href="/" className="bg-[#ffffff] text-[#050505] px-4 py-2 rounded shadow-lg transition-all duration-300">
          ホームに戻る
        </Link>
      </div>
    </div>
  )
}