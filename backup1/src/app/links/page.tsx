'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Links() {
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
                <Link href="/learning" className="text-gray-300 hover:text-cyan-400 transition-colors px-3 py-1 rounded border border-transparent hover:border-cyan-400/30">
                  学習
                </Link>
                <Link href="/access" className="text-gray-300 hover:text-cyan-400 transition-colors px-3 py-1 rounded border border-transparent hover:border-cyan-400/30">
                  アクセス
                </Link>
                <Link href="/links" className="text-cyan-400 px-3 py-1 rounded border border-cyan-400/30">
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
                USEFUL LINKS
              </span>
            </h1>
            <p className="text-xl text-gray-300 font-light">研究・学習に役立つリンク集</p>
          </motion.div>
        </div>
      </section>

      {/* Links Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid gap-16">
            
            {/* University & Institution Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-black mb-8">
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  🏛️ 大学・機関
                </span>
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    name: '東京科学大学',
                    url: 'https://www.isct.ac.jp/',
                    desc: '東京科学大学公式サイト',
                    color: 'from-cyan-400 to-blue-500'
                  },
                  {
                    name: '全固体電池研究センター',
                    url: 'https://www.asbrc.isct.ac.jp/',
                    desc: '全固体電池研究の拠点',
                    color: 'from-blue-500 to-purple-500'
                  },
                  {
                    name: '物質理工学院',
                    url: 'https://www.msl.isct.ac.jp/',
                    desc: '材料系・応用化学系',
                    color: 'from-purple-500 to-pink-500'
                  },
                  {
                    name: 'NIMS',
                    url: 'https://www.nims.go.jp/',
                    desc: '物質・材料研究機構',
                    color: 'from-green-400 to-cyan-500'
                  },
                  {
                    name: 'JST',
                    url: 'https://www.jst.go.jp/',
                    desc: '科学技術振興機構',
                    color: 'from-yellow-400 to-orange-500'
                  },
                  {
                    name: 'JSPS',
                    url: 'https://www.jsps.go.jp/',
                    desc: '日本学術振興会',
                    color: 'from-red-400 to-pink-500'
                  }
                ].map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="group bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 hover:border-gray-700 transition-all duration-300 hover:transform hover:scale-105"
                  >
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${link.color} flex items-center justify-center text-white text-xl font-bold mb-4 group-hover:scale-110 transition-transform`}>
                      {link.name.charAt(0)}
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {link.name}
                    </h3>
                    <p className="text-gray-300 text-sm">{link.desc}</p>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Academic Journals */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-3xl font-black mb-8">
                <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                  📚 学術雑誌
                </span>
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    name: 'Nature Materials',
                    url: 'https://www.nature.com/nmat/',
                    desc: '材料科学の最高峰ジャーナル',
                    impact: 'IF: 47.7'
                  },
                  {
                    name: 'Advanced Energy Materials',
                    url: 'https://onlinelibrary.wiley.com/journal/16146840',
                    desc: 'エネルギー材料の専門誌',
                    impact: 'IF: 27.8'
                  },
                  {
                    name: 'Solid State Ionics',
                    url: 'https://www.journals.elsevier.com/solid-state-ionics',
                    desc: '固体イオニクスの専門誌',
                    impact: 'IF: 3.2'
                  },
                  {
                    name: 'Journal of Materials Chemistry A',
                    url: 'https://pubs.rsc.org/en/journals/journalissues/ta',
                    desc: '材料化学・エネルギー応用',
                    impact: 'IF: 12.7'
                  },
                  {
                    name: 'Chemistry of Materials',
                    url: 'https://pubs.acs.org/journal/cmatex',
                    desc: '材料合成・特性評価',
                    impact: 'IF: 8.6'
                  },
                  {
                    name: 'Electrochimica Acta',
                    url: 'https://www.journals.elsevier.com/electrochimica-acta',
                    desc: '電気化学の国際誌',
                    impact: 'IF: 6.6'
                  }
                ].map((journal, index) => (
                  <motion.a
                    key={index}
                    href={journal.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="group bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 hover:border-gray-700 transition-all duration-300 hover:transform hover:scale-105"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white text-sm font-bold">
                        📖
                      </div>
                      <span className="px-2 py-1 text-xs font-mono bg-blue-400/10 text-blue-400 rounded border border-blue-400/20">
                        {journal.impact}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                      {journal.name}
                    </h3>
                    <p className="text-gray-300 text-sm">{journal.desc}</p>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Computational Tools */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h2 className="text-3xl font-black mb-8">
                <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                  💻 計算ツール・データベース
                </span>
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    name: 'Materials Project',
                    url: 'https://materialsproject.org/',
                    desc: 'DFT計算データベース',
                    type: 'DATABASE'
                  },
                  {
                    name: 'VASP',
                    url: 'https://www.vasp.at/',
                    desc: '第一原理計算ソフトウェア',
                    type: 'SOFTWARE'
                  },
                  {
                    name: 'Quantum ESPRESSO',
                    url: 'https://www.quantum-espresso.org/',
                    desc: 'オープンソースDFTコード',
                    type: 'SOFTWARE'
                  },
                  {
                    name: 'LAMMPS',
                    url: 'https://lammps.sandia.gov/',
                    desc: '分子動力学シミュレーション',
                    type: 'SOFTWARE'
                  },
                  {
                    name: 'ASE',
                    url: 'https://wiki.fysik.dtu.dk/ase/',
                    desc: 'Atomic Simulation Environment',
                    type: 'FRAMEWORK'
                  },
                  {
                    name: 'Pymatgen',
                    url: 'https://pymatgen.org/',
                    desc: 'Python Materials Genomics',
                    type: 'LIBRARY'
                  }
                ].map((tool, index) => (
                  <motion.a
                    key={index}
                    href={tool.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="group bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 hover:border-gray-700 transition-all duration-300 hover:transform hover:scale-105"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white text-sm font-bold">
                        🔧
                      </div>
                      <span className={`px-2 py-1 text-xs font-mono rounded border ${ 
                        tool.type === 'DATABASE' ? 'bg-green-400/10 text-green-400 border-green-400/20' :
                        tool.type === 'SOFTWARE' ? 'bg-blue-400/10 text-blue-400 border-blue-400/20' :
                        tool.type === 'FRAMEWORK' ? 'bg-purple-400/10 text-purple-400 border-purple-400/20' :
                        'bg-pink-400/10 text-pink-400 border-pink-400/20'
                      }`}>
                        {tool.type}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                      {tool.name}
                    </h3>
                    <p className="text-gray-300 text-sm">{tool.desc}</p>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Professional Societies */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h2 className="text-3xl font-black mb-8">
                <span className="bg-gradient-to-r from-green-400 to-cyan-500 bg-clip-text text-transparent">
                  🤝 学会・コミュニティ
                </span>
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    name: '日本化学会',
                    url: 'https://www.chemistry.or.jp/',
                    desc: '化学分野の総合学会',
                    region: 'JP'
                  },
                  {
                    name: '電気化学会',
                    url: 'https://www.electrochem.jp/',
                    desc: '電気化学・電池技術',
                    region: 'JP'
                  },
                  {
                    name: 'MRS',
                    url: 'https://www.mrs.org/',
                    desc: 'Materials Research Society',
                    region: 'US'
                  },
                  {
                    name: 'International Society for Solid State Ionics',
                    url: 'https://www.issi-ssi.org/',
                    desc: '固体イオニクス国際学会',
                    region: 'INT'
                  },
                  {
                    name: 'ECS',
                    url: 'https://www.electrochem.org/',
                    desc: 'Electrochemical Society',
                    region: 'INT'
                  },
                  {
                    name: 'TMS',
                    url: 'https://www.tms.org/',
                    desc: 'The Minerals, Metals & Materials Society',
                    region: 'US'
                  }
                ].map((society, index) => (
                  <motion.a
                    key={index}
                    href={society.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="group bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 hover:border-gray-700 transition-all duration-300 hover:transform hover:scale-105"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-green-400 to-cyan-500 flex items-center justify-center text-white text-sm font-bold">
                        👥
                      </div>
                      <span className={`px-2 py-1 text-xs font-mono rounded border ${ 
                        society.region === 'JP' ? 'bg-red-400/10 text-red-400 border-red-400/20' :
                        society.region === 'US' ? 'bg-blue-400/10 text-blue-400 border-blue-400/20' :
                        'bg-green-400/10 text-green-400 border-green-400/20'
                      }`}>
                        {society.region}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-green-400 transition-colors">
                      {society.name}
                    </h3>
                    <p className="text-gray-300 text-sm">{society.desc}</p>
                  </motion.a>
                ))}
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