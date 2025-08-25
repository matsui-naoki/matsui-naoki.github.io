'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import SimpleNavigation from '@/components/SimpleNavigation'

export default function Links() {
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

            {/* Research Laboratories */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-3xl font-black mb-8">
                <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                  研究室・研究グループ
                </span>
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    name: '東京科学大学 全固体電池研究センター',
                    url: 'http://www.assb.iir.titech.ac.jp',
                    desc: '全固体電池研究の拠点',
                    color: 'from-cyan-400 to-blue-500'
                  },
                  {
                    name: '東京科学大学 菅野鈴木研',
                    url: 'http://www.kannosuzuki.assb.iir.titech.ac.jp',
                    desc: '固体電解質の開発',
                    color: 'from-blue-500 to-purple-500'
                  },
                  {
                    name: '東京科学大学 平山研',
                    url: 'http://www.hirayama-cap.mac.titech.ac.jp/',
                    desc: '界面解析・電池材料',
                    color: 'from-purple-500 to-pink-500'
                  },
                  {
                    name: '東京科学大学 荒井研',
                    url: 'http://www.arai-cap.mac.titech.ac.jp/pages/top/index.html',
                    desc: '電池材料開発',
                    color: 'from-green-400 to-cyan-500'
                  },
                  {
                    name: '理化学研究所 小林固体化学研',
                    url: 'https://www.riken.jp/research/labs/chief/solid_st_chem/index.html',
                    desc: '固体化学・電池材料',
                    color: 'from-yellow-400 to-orange-500'
                  },
                  {
                    name: '九州大学 山崎研',
                    url: 'https://q-pit.kyushu-u.ac.jp/yamazaki/index.html',
                    desc: 'プロトン伝導体・エネルギー材料',
                    color: 'from-red-400 to-pink-500'
                  }
                ].map((lab, index) => (
                  <motion.a
                    key={index}
                    href={lab.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="group bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 hover:border-gray-700 transition-all duration-300 hover:transform hover:scale-105"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r ${lab.color} flex items-center justify-center text-white text-xl font-bold mb-4 group-hover:scale-110 transition-transform">
                      LAB
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {lab.name}
                    </h3>
                    <p className="text-gray-300 text-sm">{lab.desc}</p>
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
                  計算ツール・データベース
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
                        TOOL
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
                  学会・コミュニティ
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
                    name: 'ECS',
                    url: 'https://www.electrochem.org/',
                    desc: 'Electrochemical Society',
                    region: 'INT'
                  },
                  {
                    name: '固体イオニクス学会',
                    url: 'https://www.ssi-j.org/',
                    desc: '固体イオニクスの研究・応用',
                    region: 'JP'
                  },
                  {
                    name: '応用物理学会',
                    url: 'https://www.jsap.or.jp/',
                    desc: '応用物理・材料科学',
                    region: 'JP'
                  },
                  {
                    name: '電池技術委員会',
                    url: 'https://www.electrochem.jp/committee/battery/',
                    desc: '電池技術の研究開発',
                    region: 'JP'
                  },
                  {
                    name: 'ケモインフォマティクス部会',
                    url: 'https://www.sccj-ci.org/',
                    desc: '化学情報学・MI',
                    region: 'JP'
                  },
                  {
                    name: '日本セラミックス協会',
                    url: 'http://www.ceramic.or.jp/welcomej.html',
                    desc: 'セラミックス材料・技術',
                    region: 'JP'
                  },
                  {
                    name: '粉体粉末冶金協会',
                    url: 'http://www.jspm.or.jp/',
                    desc: '粉体・粉末冶金技術',
                    region: 'JP'
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
                        SOC
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
        <Link href="/" className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-lg shadow-lg hover:shadow-cyan-500/25 transition-all duration-300">
          ホームに戻る
        </Link>
      </div>
    </div>
  )
}