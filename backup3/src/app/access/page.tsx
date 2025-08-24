'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Access() {
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
                <Link href="/access" className="text-cyan-400 px-3 py-1 rounded border border-cyan-400/30">
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
                ACCESS INFORMATION
              </span>
            </h1>
            <p className="text-xl text-gray-300 font-light">東京科学大学すずかけ台キャンパス G1棟へのアクセス</p>
          </motion.div>
        </div>
      </section>

      {/* Location Info */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            
            {/* Address and Contact */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 border border-gray-800">
                <div className="mb-6">
                  <span className="px-3 py-1 text-xs font-mono bg-cyan-400/10 text-cyan-400 rounded-full border border-cyan-400/20">
                    LOCATION
                  </span>
                </div>
                
                <h2 className="text-3xl font-black mb-8">
                  <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    研究室所在地
                  </span>
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 rounded-full bg-cyan-400 flex items-center justify-center text-black text-sm font-bold">
                      📍
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-2">住所</h3>
                      <p className="text-gray-300 leading-relaxed">
                        〒226-8503<br/>
                        神奈川県横浜市緑区長津田町4259<br/>
                        東京科学大学 すずかけ台キャンパス<br/>
                        G1棟 9階 914号室
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 rounded-full bg-blue-400 flex items-center justify-center text-black text-sm font-bold">
                      📧
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-2">Email</h3>
                      <p className="text-gray-300 font-mono">
                        matsui.n.ee49[at]m.isct.ac.jp
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 rounded-full bg-purple-400 flex items-center justify-center text-black text-sm font-bold">
                      📞
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-2">電話番号</h3>
                      <p className="text-gray-300 font-mono">
                        045-924-5561 (研究室直通)
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 rounded-full bg-pink-400 flex items-center justify-center text-black text-sm font-bold">
                      🏢
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-2">所属</h3>
                      <p className="text-gray-300 leading-relaxed">
                        東京科学大学（Institute of Science Tokyo）<br/>
                        総合研究院 全固体電池研究センター<br/>
                        物質理工学院 応用化学系
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Map Placeholder */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 border border-gray-800 h-full">
                <div className="mb-6">
                  <span className="px-3 py-1 text-xs font-mono bg-blue-400/10 text-blue-400 rounded-full border border-blue-400/20">
                    MAP
                  </span>
                </div>
                
                <h3 className="text-2xl font-black mb-6">
                  <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                    キャンパスマップ
                  </span>
                </h3>
                
                {/* Google Maps Embedded */}
                <div className="relative w-full h-80 bg-gray-800 rounded-2xl overflow-hidden border border-gray-700">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3244.8!2d139.48352!3d35.51368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60185f0df6c06c7b%3A0x8f3f8b3e3c8f3b3!2z57eP5ZCI55CG5bel5a2m56CU56m26aCf77yR5Y-377yI77yh77yR5qOf77yJ!5e0!3m2!1sja!2sjp!4v1642568394917"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-2xl"
                  ></iframe>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none"></div>
                </div>
                
                <div className="mt-4 text-center">
                  <a 
                    href="https://www.google.com/maps/place/Tokyo+Institute+of+Technology+Suzukakedai+Campus/@35.505309,139.483425,17z"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg font-bold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105"
                  >
                    Google Mapsで開く →
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Transportation */}
      <section className="py-16 bg-gradient-to-br from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-black mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                TRANSPORTATION
              </span>
            </h2>
            <p className="text-xl text-gray-300 font-light">アクセス方法</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Train Access */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-green-400 to-cyan-500 flex items-center justify-center text-2xl">
                  🚃
                </div>
                <h3 className="text-2xl font-black">
                  <span className="bg-gradient-to-r from-green-400 to-cyan-500 bg-clip-text text-transparent">
                    電車でのアクセス
                  </span>
                </h3>
              </div>
              
              <div className="space-y-4">
                <div className="bg-gray-800/50 rounded-lg p-4 border border-cyan-400/20">
                  <h4 className="font-bold text-cyan-400 mb-2">最寄り駅：すずかけ台駅</h4>
                  <ul className="text-gray-300 text-sm space-y-2">
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span>東急田園都市線「すずかけ台駅」徒歩5分</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span>JR横浜線「長津田駅」から東急田園都市線乗り換え</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-gray-800/50 rounded-lg p-4 border border-blue-400/20">
                  <h4 className="font-bold text-blue-400 mb-2">主要駅からの所要時間</h4>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• 渋谷駅から：約40分</li>
                    <li>• 横浜駅から：約30分</li>
                    <li>• 新横浜駅から：約25分</li>
                    <li>• 羽田空港から：約50分</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Car Access */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-400 to-pink-500 flex items-center justify-center text-2xl">
                  🚗
                </div>
                <h3 className="text-2xl font-black">
                  <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                    車でのアクセス
                  </span>
                </h3>
              </div>
              
              <div className="space-y-4">
                <div className="bg-gray-800/50 rounded-lg p-4 border border-purple-400/20">
                  <h4 className="font-bold text-purple-400 mb-2">高速道路利用</h4>
                  <ul className="text-gray-300 text-sm space-y-2">
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      <span>東名高速「横浜青葉IC」から約15分</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                      <span>第三京浜「都筑IC」から約20分</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-gray-800/50 rounded-lg p-4 border border-pink-400/20">
                  <h4 className="font-bold text-pink-400 mb-2">駐車場情報</h4>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• キャンパス内に有料駐車場あり</li>
                    <li>• 事前予約が必要な場合があります</li>
                    <li>• 料金：1日300円</li>
                    <li>• 利用時間：7:00-23:00</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Visitor Information */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-black mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                VISITOR INFORMATION
              </span>
            </h2>
            <p className="text-xl text-gray-300 font-light">来訪者の皆様へ</p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-6 border border-gray-800"
            >
              <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-yellow-400 to-orange-500 flex items-center justify-center text-3xl mb-4">
                🔐
              </div>
              <h3 className="text-xl font-bold text-yellow-400 mb-3">入構手続き</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                キャンパス入構時は正門守衛所での手続きが必要です。身分証明書をご持参ください。研究室訪問の場合は事前にご連絡をお願いします。
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-6 border border-gray-800"
            >
              <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center text-3xl mb-4">
                ⏰
              </div>
              <h3 className="text-xl font-bold text-blue-400 mb-3">受付時間</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                平日：9:00-17:00<br/>
                土日祝日：要事前連絡<br/>
                会議や実験等で不在の場合がありますので、事前にメールでご連絡をお願いします。
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-6 border border-gray-800"
            >
              <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-green-400 to-cyan-500 flex items-center justify-center text-3xl mb-4">
                📝
              </div>
              <h3 className="text-xl font-bold text-green-400 mb-3">アポイントメント</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                研究室見学や共同研究に関するご相談は随時受け付けております。メールでご連絡いただき、訪問日時を調整させていただきます。
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Campus Facilities */}
      <section className="py-16 bg-gradient-to-br from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-black mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                CAMPUS FACILITIES
              </span>
            </h2>
            <p className="text-xl text-gray-300 font-light">キャンパス内施設のご案内</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: '🍽️', title: '食堂・カフェ', desc: 'MOTOTECHレストラン（モーニング営業あり）' },
              { icon: '📚', title: '図書館', desc: '学術図書館、自習スペース' },
              { icon: '🏋️', title: 'トレーニングルーム', desc: '学内者限定', link: 'https://www.titech.ac.jp/student-support/students/facilities/sports' },
              { icon: '🔥', title: 'バーベキュー場', desc: '学内者限定', link: 'https://www.szc.titech.ac.jp/somu/kakishiyou.html' }
            ].map((facility, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 text-center hover:border-gray-700 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{facility.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2">{facility.title}</h3>
                <p className="text-gray-300 text-sm mb-2">{facility.desc}</p>
                {facility.link && (
                  <a 
                    href={facility.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 text-xs hover:text-cyan-300 transition-colors"
                  >
                    詳細はこちら →
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby Facilities */}
      <section className="py-16 bg-gradient-to-br from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-black mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                NEARBY FACILITIES
              </span>
            </h2>
            <p className="text-xl text-gray-300 font-light">近隣施設のご案内</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-16">
            {/* Accommodation */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center text-2xl">
                  🏨
                </div>
                <h3 className="text-2xl font-black">
                  <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                    宿泊施設
                  </span>
                </h3>
              </div>
              
              <div className="space-y-4">
                <div className="bg-gray-800/50 rounded-lg p-4 border border-blue-400/20">
                  <h4 className="font-bold text-blue-400 mb-2">東横INN南町田</h4>
                  <p className="text-gray-300 text-sm mb-2">アクセス便利なビジネスホテル</p>
                  <a 
                    href="https://www.toyoko-inn.com/search/detail/00358/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 text-xs hover:text-cyan-300 transition-colors"
                  >
                    公式サイト →
                  </a>
                </div>
                
                <div className="bg-gray-800/50 rounded-lg p-4 border border-purple-400/20">
                  <h4 className="font-bold text-purple-400 mb-2">万葉の湯</h4>
                  <p className="text-gray-300 text-sm mb-2">温泉・宿泊・リラクゼーション施設</p>
                  <a 
                    href="https://www.manyo.co.jp/machida/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 text-xs hover:text-cyan-300 transition-colors"
                  >
                    公式サイト →
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Dining */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-green-400 to-cyan-500 flex items-center justify-center text-2xl">
                  🍜
                </div>
                <h3 className="text-2xl font-black">
                  <span className="bg-gradient-to-r from-green-400 to-cyan-500 bg-clip-text text-transparent">
                    食事処
                  </span>
                </h3>
              </div>
              
              <div className="space-y-4">
                <div className="bg-gray-800/50 rounded-lg p-4 border border-green-400/20">
                  <h4 className="font-bold text-green-400 mb-2">朝日屋</h4>
                  <p className="text-gray-300 text-sm">そば・うどん専門店</p>
                </div>
                
                <div className="bg-gray-800/50 rounded-lg p-4 border border-cyan-400/20">
                  <h4 className="font-bold text-cyan-400 mb-2">マラバル</h4>
                  <p className="text-gray-300 text-sm">本格カレー料理</p>
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