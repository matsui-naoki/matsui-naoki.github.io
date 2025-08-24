'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export default function TraditionalLayout() {
  return (
    <div className="min-h-screen bg-white">
      {/* Traditional Academic Header */}
      <header className="bg-navy-900 text-white shadow-lg" style={{ backgroundColor: '#1e3a8a' }}>
        <div className="max-w-6xl mx-auto px-6 py-6">
          <div className="text-center">
            <h1 className="text-4xl font-serif font-bold mb-2">松井直喜 研究室</h1>
            <p className="text-lg font-serif text-blue-100">Laboratory of Advanced Energy Materials</p>
            <p className="text-sm text-blue-200 mt-2">東京科学大学 総合研究院 全固体電池研究センター</p>
          </div>
        </div>
      </header>

      {/* Traditional Navigation */}
      <nav className="bg-white border-b-2 border-blue-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-center">
            <div className="flex space-x-8">
              {['ホーム', '研究内容', 'メンバー', '業績・論文', '学会発表', '学生募集', 'アクセス', '関連リンク'].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="py-4 px-2 text-gray-800 font-medium border-b-2 border-transparent hover:border-blue-900 hover:text-blue-900 transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Welcome Section */}
      <section className="py-12 bg-blue-50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-serif font-bold text-blue-900 mb-4">
              松井直喜研究室へようこそ
            </h2>
            <p className="text-lg text-gray-700 font-serif leading-relaxed max-w-4xl mx-auto">
              当研究室では、持続可能な社会の実現に向けて、次世代エネルギー貯蔵システムの研究開発を行っております。
              特に固体電解質材料の開発と機械学習を融合した革新的なアプローチにより、
              全固体電池の実用化を目指しております。
            </p>
          </motion.div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Image
                src="/solid-state-battery.jpg"
                alt="全固体電池"
                width={500}
                height={350}
                className="rounded-lg shadow-lg border-2 border-gray-200 w-full h-auto"
              />
              <p className="text-sm text-gray-600 mt-2 text-center font-serif italic">
                図1: 全固体電池の構造
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-lg shadow-lg p-8 border border-gray-200"
            >
              <h3 className="text-2xl font-serif font-bold text-blue-900 mb-6">最新情報</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-600 pl-4">
                  <div className="text-sm text-gray-600 mb-1">2025年1月15日</div>
                  <h4 className="font-bold text-gray-800 mb-2">Nature Materials誌に論文掲載</h4>
                  <p className="text-sm text-gray-700">
                    フッ化物イオン伝導体に関する研究成果が国際的に高く評価されました。
                  </p>
                </div>
                <div className="border-l-4 border-blue-400 pl-4">
                  <div className="text-sm text-gray-600 mb-1">2024年12月20日</div>
                  <h4 className="font-bold text-gray-800 mb-2">国際会議にて招待講演</h4>
                  <p className="text-sm text-gray-700">
                    機械学習材料設計に関する招待講演を行いました。
                  </p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <div className="text-sm text-gray-600 mb-1">2024年11月10日</div>
                  <h4 className="font-bold text-gray-800 mb-2">学生募集のお知らせ</h4>
                  <p className="text-sm text-gray-700">
                    2025年度修士課程・博士課程の学生を募集しております。
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Research Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-serif font-bold text-blue-900 mb-6">研究概要</h2>
          </motion.div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <h3 className="text-2xl font-serif font-bold text-gray-800 mb-6">イオン伝導機構の解明</h3>
              <p className="text-gray-700 mb-6 font-serif leading-relaxed">
                固体電解質中におけるイオンの移動機構を第一原理計算と実験的手法を組み合わせて解明し、
                高性能な全固体電池の実現を目指しております。特に、フッ化物イオンやヒドリドイオンなど、
                従来にない新しいイオン種を用いた革新的な電気化学デバイスの開発に取り組んでおります。
              </p>
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                <h4 className="font-bold text-blue-900 mb-3">主要研究テーマ</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• フッ化物イオン伝導体の材料設計</li>
                  <li>• ヒドリドイオン伝導機構の解明</li>
                  <li>• 機械学習による材料探索手法の開発</li>
                  <li>• ハイスループット計算・実験技術</li>
                </ul>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <Image
                src="/potential_migration.jpg"
                alt="イオン移動"
                width={500}
                height={350}
                className="rounded-lg shadow-lg border-2 border-gray-200 w-full h-auto mb-3"
              />
              <p className="text-sm text-gray-600 text-center font-serif italic">
                図2: 固体電解質中のイオン移動シミュレーション
              </p>
            </motion.div>
          </div>

          {/* Research Areas */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'フッ化物イオン伝導体',
                content: '全固体フッ化物電池の実現を目指し、高イオン伝導度を有する新規材料の合成と特性評価を行っております。',
                publications: '関連論文: 8報'
              },
              {
                title: '機械学習材料設計',
                content: '人工知能技術を活用した効率的な材料探索手法を開発し、従来の試行錯誤的手法を革新しております。',
                publications: '関連論文: 5報'
              },
              {
                title: 'ヒドリドイオン伝導体',
                content: '新しいイオン種であるヒドリドイオンを用いた革新的電気化学デバイスの創製に挑戦しております。',
                publications: '関連論文: 3報'
              }
            ].map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border-2 border-blue-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <h3 className="text-xl font-serif font-bold text-blue-900 mb-4">{area.title}</h3>
                <p className="text-gray-700 font-serif text-sm leading-relaxed mb-4">{area.content}</p>
                <div className="text-xs text-blue-600 font-medium">{area.publications}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Profile Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-white rounded-lg shadow-lg p-12 border border-gray-200">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-serif font-bold text-blue-900 mb-6">教員紹介</h2>
            </motion.div>
            
            <div className="grid lg:grid-cols-3 gap-12 items-start">
              <div className="text-center">
                <div className="w-48 h-48 bg-blue-100 rounded-lg mx-auto mb-6 flex items-center justify-center border-2 border-blue-200">
                  <span className="text-6xl">👨‍🔬</span>
                </div>
                <h3 className="text-2xl font-serif font-bold text-gray-800 mb-2">松井 直喜</h3>
                <p className="text-blue-700 font-medium mb-4">助教（Assistant Professor）</p>
                <p className="text-sm text-gray-600 font-serif">まつい なおき<br/>1992年12月9日生</p>
              </div>
              
              <div className="lg:col-span-2">
                <h4 className="text-xl font-serif font-bold text-blue-900 mb-6">略歴・所属</h4>
                <div className="space-y-6">
                  <div>
                    <h5 className="font-bold text-gray-800 mb-2">現職</h5>
                    <p className="text-gray-700 font-serif text-sm">
                      東京科学大学 総合研究院 全固体電池研究センター 助教（2020年〜現在）
                    </p>
                  </div>
                  
                  <div>
                    <h5 className="font-bold text-gray-800 mb-2">学歴</h5>
                    <div className="space-y-1 text-sm text-gray-700 font-serif">
                      <p>2020年　東京工業大学 物質理工学院 博士後期課程修了　博士（工学）</p>
                      <p>2017年　東京工業大学 物質理工学院 修士課程修了</p>
                      <p>2015年　早稲田大学 創造理工学部 総合機械工学科 卒業</p>
                    </div>
                  </div>
                  
                  <div>
                    <h5 className="font-bold text-gray-800 mb-2">専門分野</h5>
                    <p className="text-gray-700 font-serif text-sm">
                      固体イオニクス、固体電池、フッ化物イオン伝導体、ヒドリドイオン伝導体、
                      機械学習、ハイスループット計算・実験技術
                    </p>
                  </div>
                  
                  <div>
                    <h5 className="font-bold text-gray-800 mb-2">連絡先</h5>
                    <div className="bg-blue-50 p-4 rounded border border-blue-200">
                      <p className="text-sm text-gray-700 font-serif">
                        <strong>Email:</strong> matsui.n.ee49[at]m.isct.ac.jp<br/>
                        <strong>電話:</strong> 045-924-5561<br/>
                        <strong>住所:</strong> 〒226-8503 神奈川県横浜市緑区長津田町4259 G1-914
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-blue-900 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-serif font-bold mb-4">松井直喜研究室</h3>
              <p className="text-blue-100 font-serif text-sm">
                Laboratory of Advanced Energy Materials<br/>
                東京科学大学 全固体電池研究センター
              </p>
            </div>
            <div>
              <h4 className="font-serif font-bold mb-4">研究分野</h4>
              <ul className="text-blue-100 text-sm space-y-1">
                <li>• 固体イオニクス</li>
                <li>• 全固体電池</li>
                <li>• 機械学習材料設計</li>
                <li>• ハイスループット実験</li>
              </ul>
            </div>
            <div>
              <h4 className="font-serif font-bold mb-4">アクセス</h4>
              <p className="text-blue-100 text-sm">
                東京科学大学 すずかけ台キャンパス<br/>
                神奈川県横浜市緑区長津田町4259<br/>
                G1棟 914号室
              </p>
            </div>
          </div>
          <div className="border-t border-blue-800 mt-8 pt-8 text-center">
            <p className="text-blue-200 text-sm font-serif">
              © 2025 Matsui Laboratory, Tokyo Institute of Science. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
      
      <div className="fixed bottom-8 right-8">
        <Link href="/" className="bg-blue-900 text-white px-4 py-2 rounded shadow-lg hover:bg-blue-800 transition-colors font-serif">
          メインに戻る
        </Link>
      </div>
    </div>
  )
}