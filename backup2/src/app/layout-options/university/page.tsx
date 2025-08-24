'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export default function UniversityLayout() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* University Style Header */}
      <header className="bg-white shadow-sm border-b-4 border-blue-600">
        <div className="max-w-7xl mx-auto px-6">
          {/* Top Bar */}
          <div className="flex justify-between items-center py-3 text-sm border-b border-gray-100">
            <div className="text-gray-600">東京科学大学 全固体電池研究センター</div>
            <div className="flex space-x-4 text-gray-600">
              <a href="#" className="hover:text-blue-600">English</a>
              <a href="#" className="hover:text-blue-600">アクセス</a>
              <a href="#" className="hover:text-blue-600">お問い合わせ</a>
            </div>
          </div>
          
          {/* Main Navigation */}
          <nav className="py-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-8">
                <h1 className="text-2xl font-bold text-gray-800">松井直喜 研究室</h1>
                <div className="hidden lg:flex space-x-6">
                  {['ホーム', '研究概要', 'メンバー', '論文・業績', 'ニュース', '学生募集'].map((item) => (
                    <a key={item} href="#" className="text-gray-700 hover:text-blue-600 font-medium py-2 px-3 rounded hover:bg-blue-50 transition-colors">
                      {item}
                    </a>
                  ))}
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <input 
                  type="search" 
                  placeholder="検索..." 
                  className="hidden md:block px-3 py-1 border rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="lg:hidden">☰</button>
              </div>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl font-bold mb-6 leading-tight">
                革新的エネルギー<br/>
                貯蔵技術の研究
              </h1>
              <p className="text-xl mb-8 text-blue-100 leading-relaxed">
                持続可能な社会実現に向けて、次世代全固体電池の開発と
                機械学習を活用した材料設計に取り組んでいます
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-blue-900 px-8 py-3 rounded font-bold hover:bg-blue-50 transition-colors">
                  研究内容を見る
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded font-bold hover:bg-white hover:text-blue-900 transition-colors">
                  論文・業績
                </button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <Image
                src="/solid-state-battery.jpg"
                alt="全固体電池"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent rounded-lg"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: '🔬', title: '研究分野', desc: '固体イオニクス・材料設計' },
              { icon: '📊', title: '研究業績', desc: '論文15報・特許3件' },
              { icon: '👥', title: '学生募集', desc: '修士・博士課程学生募集中' },
              { icon: '📢', title: '最新情報', desc: 'Nature Materials掲載' }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors"
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-lg shadow-sm p-8 mb-8"
              >
                <h2 className="text-3xl font-bold mb-6 text-gray-800">研究概要</h2>
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <Image
                      src="/potential_migration.jpg"
                      alt="イオン移動"
                      width={400}
                      height={300}
                      className="rounded-lg w-full h-auto"
                    />
                  </div>
                  <div>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      私たちの研究室では、次世代エネルギー貯蔵デバイスの実現に向けて、
                      固体電解質材料の開発と機械学習を融合した革新的なアプローチを展開しています。
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      特に、フッ化物イオンやヒドリドイオンを用いた全く新しい電池システムの構築に取り組んでいます。
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Research Areas */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-lg shadow-sm p-8"
              >
                <h2 className="text-3xl font-bold mb-6 text-gray-800">主要研究テーマ</h2>
                <div className="space-y-6">
                  {[
                    { title: 'フッ化物イオン伝導体の開発', desc: '高性能な全固体フッ化物電池の実現を目指した材料開発', color: 'blue' },
                    { title: '機械学習材料設計', desc: 'AIを活用した効率的な材料探索とハイスループット計算', color: 'green' },
                    { title: 'ヒドリドイオン伝導体', desc: '革新的電気化学デバイスのための新材料創製', color: 'purple' }
                  ].map((item, index) => (
                    <div key={index} className={`border-l-4 border-${item.color}-500 pl-6 py-4`}>
                      <h3 className="text-xl font-semibold mb-2 text-gray-800">{item.title}</h3>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* News */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-white rounded-lg shadow-sm p-6"
              >
                <h3 className="text-xl font-bold mb-4 text-gray-800 border-b pb-2">最新ニュース</h3>
                <div className="space-y-4">
                  {[
                    { date: '2025.01.15', title: 'Nature Materials掲載', type: 'success' },
                    { date: '2024.12.20', title: '国際会議発表', type: 'info' },
                    { date: '2024.11.10', title: '特許出願完了', type: 'warning' }
                  ].map((news, index) => (
                    <div key={index} className="flex gap-3">
                      <div className="text-sm text-gray-500 w-20 flex-shrink-0">{news.date}</div>
                      <div>
                        <div className="text-sm font-medium text-gray-800">{news.title}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Profile */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-white rounded-lg shadow-sm p-6"
              >
                <h3 className="text-xl font-bold mb-4 text-gray-800 border-b pb-2">研究者情報</h3>
                <div className="text-center mb-4">
                  <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-3 flex items-center justify-center text-3xl">
                    👨‍🔬
                  </div>
                  <h4 className="font-bold text-gray-800">松井 直喜</h4>
                  <p className="text-sm text-gray-600">助教</p>
                </div>
                <div className="text-sm text-gray-700 space-y-2">
                  <p><strong>専門:</strong> 固体イオニクス</p>
                  <p><strong>学位:</strong> 博士（工学）</p>
                  <p><strong>所属:</strong> 東京科学大学</p>
                </div>
              </motion.div>

              {/* Quick Links */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-blue-50 rounded-lg p-6"
              >
                <h3 className="text-xl font-bold mb-4 text-blue-900">関連リンク</h3>
                <div className="space-y-2">
                  <a href="#" className="block text-blue-700 hover:underline text-sm">東京科学大学</a>
                  <a href="#" className="block text-blue-700 hover:underline text-sm">全固体電池研究センター</a>
                  <a href="#" className="block text-blue-700 hover:underline text-sm">Google Scholar</a>
                  <a href="#" className="block text-blue-700 hover:underline text-sm">ResearchGate</a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">松井直喜 研究室</h3>
              <p className="text-gray-300 text-sm">
                東京科学大学 全固体電池研究センター<br/>
                次世代エネルギー貯蔵技術の研究開発
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">お問い合わせ</h4>
              <p className="text-gray-300 text-sm">
                Email: matsui.n.ee49[at]m.isct.ac.jp<br/>
                TEL: 045-924-5561
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">アクセス</h4>
              <p className="text-gray-300 text-sm">
                神奈川県横浜市緑区長津田町4259<br/>
                東京科学大学 すずかけ台キャンパス G1棟
              </p>
            </div>
          </div>
        </div>
      </footer>
      
      <div className="fixed bottom-8 right-8">
        <Link href="/" className="bg-blue-600 text-white px-4 py-2 rounded shadow-lg hover:bg-blue-700 transition-colors">
          メインに戻る
        </Link>
      </div>
    </div>
  )
}