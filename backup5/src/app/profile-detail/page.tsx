'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import SimpleNavigation from '@/components/SimpleNavigation'

export default function ProfileDetailPage() {
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
                PROFILE DETAIL
              </span>
            </h1>
            <p className="text-xl text-gray-300 font-light">松井 直喜 助教の詳細プロフィール</p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6 space-y-16">
          
          {/* Basic Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 border border-gray-800"
          >
            <h2 className="text-3xl font-black mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              基本情報
            </h2>
            <div className="grid md:grid-cols-2 gap-6 text-gray-300">
              <div className="space-y-3">
                <div>
                  <span className="text-cyan-400 font-semibold">氏名:</span>
                  <p className="text-white">松井 直喜（まつい なおき）</p>
                </div>
                <div>
                  <span className="text-cyan-400 font-semibold">職位:</span>
                  <p className="text-white">助教</p>
                </div>
                <div>
                  <span className="text-cyan-400 font-semibold">所属:</span>
                  <p className="text-white">東京科学大学 総合研究院 全固体電池研究センター</p>
                </div>
                <div>
                  <span className="text-cyan-400 font-semibold">生年月日:</span>
                  <p className="text-white">1992年12月9日</p>
                </div>
              </div>
              <div className="space-y-3">
                <div>
                  <span className="text-cyan-400 font-semibold">研究分野:</span>
                  <p className="text-white">固体イオニクス、電気化学、固体化学、エネルギーデバイス</p>
                </div>
                <div>
                  <span className="text-cyan-400 font-semibold">住所:</span>
                  <p className="text-white">〒226-8501 神奈川県横浜市緑区長津田町4259 G1-914</p>
                </div>
                <div>
                  <span className="text-cyan-400 font-semibold">E-mail:</span>
                  <p className="text-white">matsui.n.ee49[at]m.isct.ac.jp</p>
                </div>
                <div>
                  <span className="text-cyan-400 font-semibold">TEL/FAX:</span>
                  <p className="text-white">045-924-5561</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 border border-gray-800"
          >
            <h2 className="text-3xl font-black mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              学歴
            </h2>
            <div className="space-y-6">
              <div className="border-l-4 border-purple-400 pl-6">
                <div className="text-purple-400 font-mono text-sm mb-1">2017年4月 - 2020年3月</div>
                <div className="text-white font-bold text-lg mb-2">博士（理学）</div>
                <div className="text-gray-300">
                  東京工業大学 物質理工学院 応用化学系<br/>
                  指導教員: 菅野了次 教授、（副）平山雅章 教授
                </div>
              </div>
              <div className="border-l-4 border-purple-400 pl-6">
                <div className="text-purple-400 font-mono text-sm mb-1">2015年4月 - 2017年3月</div>
                <div className="text-white font-bold text-lg mb-2">修士（理学）</div>
                <div className="text-gray-300">
                  東京工業大学大学院 総合理工学研究科 物質電子化学専攻
                </div>
              </div>
              <div className="border-l-4 border-purple-400 pl-6">
                <div className="text-purple-400 font-mono text-sm mb-1">2011年4月 - 2015年3月</div>
                <div className="text-white font-bold text-lg mb-2">学士</div>
                <div className="text-gray-300">
                  早稲田大学 先進理工学部 応用化学科
                </div>
              </div>
            </div>
          </motion.div>

          {/* Career */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 border border-gray-800"
          >
            <h2 className="text-3xl font-black mb-6 bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
              職歴
            </h2>
            <div className="space-y-4">
              {[
                { period: '2024年10月 - 現在', position: '東京科学大学 助教' },
                { period: '2021年4月 - 2024年9月', position: '東京工業大学 助教' },
                { period: '2020年4月 - 2021年3月', position: '東京工業大学 研究員' },
                { period: '2019年4月 - 2020年3月', position: '日本学術振興会特別研究員（DC2）' }
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-green-400 rounded-full mt-1.5 flex-shrink-0"></div>
                  <div className="flex-1">
                    <div className="text-green-400 font-mono text-sm">{item.period}</div>
                    <div className="text-white font-semibold">{item.position}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Research Achievements */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 border border-gray-800"
          >
            <h2 className="text-3xl font-black mb-6 bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
              代表的な研究成果
            </h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-orange-400 mb-4">1. 新たなフッ化物イオン伝導体の設計・開発</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-orange-400 mr-2">•</span>
                    <span>新たな結晶構造系(KYb<sub>2</sub>F<sub>7</sub>–BaYb<sub>2</sub>F<sub>8</sub>の擬似二成分系)で優れたイオン伝導性と電気化学的安定性を両立した固体電解質候補物質を開発しました（<span className="text-cyan-400 italic">Chem. Mater.</span>, 2025）</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-400 mr-2">•</span>
                    <span>CsPb<sub>0.9</sub>K<sub>0.1</sub>F<sub>2.9</sub>において、Pb 6s<sup>2</sup>孤立電子対の動的再配向がイオン輸送を促進することを実験・計算双方のアプローチから世界で初めて実証しました（<span className="text-cyan-400 italic">J. Mater. Chem. A</span>, 2024）</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-blue-400 mb-4">2. 機械学習による高効率な材料探索</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    <span>配位多面体に基づくリチウムイオン伝導体の局所配置とイオン伝導率の相関を解析し、分子動力学計算と実験的検証により新たなリチウムイオン伝導体を開発しました（<span className="text-cyan-400 italic">JACS</span>, 2025）</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    <span>組成記述子に基づくイオン伝導率予測の機械学習モデルを開発し、フッ化物イオン伝導体の効率的な探索手法を提案し、実際にSn系として初のタイソナイト型フッ化物イオン伝導体Ba<sub>0.2</sub>Sn<sub>0.8</sub>F<sub>2</sub> (σ=10<sup>–4</sup> S cm<sup>–1</sup>) を発見しました（<span className="text-cyan-400 italic">ACS Appl. Energy Mater.</span>, 2023）</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-purple-400 mb-4">3. ヒドリドイオン伝導体の設計指針の確立</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">•</span>
                    <span>ペロブスカイト型SrLiH<sub>3</sub>系において、カチオンサイズとイオン移動障壁を系統的に解明し、低温で比較的高い特性を示す固体電解質を開発（<span className="text-cyan-400 italic">ACS Appl. Energy Mater.</span>, 2021）</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">•</span>
                    <span>K<sub>2</sub>NiF<sub>4</sub>型LnSrLiH<sub>2</sub>O<sub>2</sub>系において、中性子回折・第一原理計算を駆使して、カチオンサイズがヒドリドイオン伝導に与える影響を系統的に解明しました（<span className="text-cyan-400 italic">J. Mater. Chem. A</span>, 2020）</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Awards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 border border-gray-800"
          >
            <h2 className="text-3xl font-black mb-6 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              受賞歴
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { year: '2024年', award: 'オープンイノベータ功労賞（東京工業大学）' },
                { year: '2022年', award: '東工大挑戦的研究賞（東京工業大学）' },
                { year: '2019年', award: 'WILEY TOP DOWNLOADED PAPER 2018-2019' },
                { year: '2017年', award: 'Poster Award, The 6th Toyota RIKEN International Workshop' },
                { year: '2017年', award: '学生賞（分離技術会年会）' },
                { year: '2016年', award: '増本賞（新学術領域「ナノ構造情報」）' }
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-3 bg-gray-800/30 rounded-lg p-3">
                  <div className="text-yellow-400 font-mono text-sm flex-shrink-0">{item.year}</div>
                  <div className="text-white text-sm">{item.award}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Funding */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 border border-gray-800"
          >
            <h2 className="text-3xl font-black mb-6 bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
              外部資金獲得
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-indigo-400 mb-4">研究代表者</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-indigo-400 mr-2">▸</span>
                    <div>
                      <span className="font-semibold text-white">科研費 学術変革領域研究(A) 公募（2025-2026年度）</span><br/>
                      「イオン輸送を阻害/促進する孤立電子対の制御と超イオン導電体の探索」
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-400 mr-2">▸</span>
                    <div>
                      <span className="font-semibold text-white">科研費 若手研究（2022-2024年度）</span><br/>
                      「構造類似性に基づくヒドリドイオン導電体の創製」
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-400 mr-2">▸</span>
                    <span className="font-semibold text-white">東京工業大学 挑戦的研究賞（2023年度）</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-400 mr-2">▸</span>
                    <span className="font-semibold text-white">東京工業大学 基礎研究機構 広域基礎研究塾 新研究挑戦奨励金 (2023年度)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-400 mr-2">▸</span>
                    <div>
                      <span className="font-semibold text-white">科研費 特別研究員奨励費（2019-2020年度）</span><br/>
                      「高酸素欠損を基軸とした酸化物イオン伝導体の開発」
                    </div>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-purple-400 mb-4">研究分担者</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">▸</span>
                    <span className="font-semibold text-white">NEDO 電気自動車用革新型蓄電池開発（2021-2025年度）</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">▸</span>
                    <span className="font-semibold text-white">科学研究費助成事業 基盤研究(B)（2022-2024年度）</span><br/>
                    <span className="text-gray-400 text-sm ml-4">研究代表者：山本 隆文先生</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">▸</span>
                    <span className="font-semibold text-white">NEDO 革新型蓄電池実用化促進基盤技術開発（2019-2020年度）</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Teaching */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 border border-gray-800"
          >
            <h2 className="text-3xl font-black mb-6 bg-gradient-to-r from-teal-400 to-cyan-500 bg-clip-text text-transparent">
              講義
            </h2>
            <div className="bg-gray-800/30 rounded-lg p-4">
              <h3 className="text-lg font-bold text-teal-400 mb-2">応化専門実験第4 基礎電気化学と燃料電池</h3>
              <p className="text-gray-300">電気化学の基礎理論から燃料電池の実践的な応用まで、実験を通じて学生に指導しています。</p>
            </div>
          </motion.div>

          {/* Academic Activities */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 border border-gray-800"
          >
            <h2 className="text-3xl font-black mb-6 bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">
              学会活動
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-pink-400 mb-3">査読活動</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Journal of Materials Chemistry A',
                    'Inorganic Chemistry',
                    'Solid State Ionics',
                    'Electrochemistry',
                    'European Journal of Inorganic Chemistry',
                    'Ceramics International'
                  ].map((journal, index) => (
                    <span key={index} className="px-3 py-1 bg-gray-800/50 text-gray-300 rounded-full text-sm border border-gray-700">
                      {journal}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-purple-400 mb-3">所属学会</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    '電気化学会',
                    '固体イオニクス学会',
                    '応用物理学会',
                    '日本セラミックス協会',
                    '電池技術委員会'
                  ].map((society, index) => (
                    <span key={index} className="px-3 py-1 bg-gray-800/50 text-gray-300 rounded-full text-sm border border-gray-700">
                      {society}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-cyan-400 mb-3">セミナー講師</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2">•</span>
                    <span>電気化学会 電気化学セミナーA</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2">•</span>
                    <span>電気化学会関東支部 基礎セミナー</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2">•</span>
                    <span>東陽テクニカ 技術セミナー</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Research Philosophy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 border border-gray-800"
          >
            <h2 className="text-3xl font-black mb-6 bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent">
              研究理念
            </h2>
            <div className="text-gray-300 leading-relaxed space-y-4">
              <p>
                エネルギー貯蔵技術のブレークスルーは、固体中のイオン輸送を支配する基礎的なメカニズムの深い理解から生まれると信じています。
              </p>
              <p>
                実験的合成、先端的な評価技術、計算科学的アプローチを融合することで、持続可能な未来のための安全で高性能な次世代電池を可能にする材料の設計を目指しています。
              </p>
            </div>
          </motion.div>

          {/* Hobbies */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 border border-gray-800"
          >
            <h2 className="text-3xl font-black mb-6 bg-gradient-to-r from-red-400 to-pink-500 bg-clip-text text-transparent">
              趣味・その他
            </h2>
            <div className="text-gray-300 leading-relaxed space-y-4">
              <p>
                研究以外では、ラグビーや散歩を楽しんでいます。運動で過ごす時間は、新しい研究アイデアを考える良い機会にもなっています。
              </p>
              <p>
                また、常に関連研究分野（MI、電気化学、構造解析）を学ぶことにも興味を持っており、材料科学への応用可能性を探っています。
              </p>
            </div>
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